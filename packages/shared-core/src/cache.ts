/**
 * Cache Implementations
 * Memory and Redis cache utilities with TTL support
 */

import { Redis } from './dependencies'
import { DAY, HOUR } from './internal'

/**
 * Cache interface
 */
export interface Cache<T = any> {
  get(key: string): Promise<T | null>
  set(key: string, value: T, ttl?: number): Promise<void>
  delete(key: string): Promise<void>
  clear(): Promise<void>
  has(key: string): Promise<boolean>
}

/**
 * Cache result with metadata
 */
export interface CacheResult<T> {
  value: T
  stale: boolean
  expired: boolean
  updatedAt: number
}

/**
 * Memory cache with TTL support
 */
export class MemoryCache<T = any> implements Cache<T> {
  private cache: Map<string, { value: T; expiresAt: number }>
  private staleTTL: number
  private maxTTL: number
  private maxSize: number
  private accessOrder: string[]

  constructor(options: {
    staleTTL?: number
    maxTTL?: number
    maxSize?: number
  } = {}) {
    this.cache = new Map()
    this.staleTTL = options.staleTTL ?? HOUR
    this.maxTTL = options.maxTTL ?? DAY
    this.maxSize = options.maxSize ?? 1000
    this.accessOrder = []
  }

  async get(key: string): Promise<T | null> {
    const entry = this.cache.get(key)
    if (!entry) return null

    const now = Date.now()
    if (now > entry.expiresAt) {
      this.cache.delete(key)
      this.removeFromAccessOrder(key)
      return null
    }

    // Update access order for LRU
    this.updateAccessOrder(key)
    return entry.value
  }

  async set(key: string, value: T, ttl?: number): Promise<void> {
    const expiresAt = Date.now() + (ttl ?? this.maxTTL)
    
    // Evict oldest if at capacity
    if (!this.cache.has(key) && this.cache.size >= this.maxSize) {
      this.evictOldest()
    }

    this.cache.set(key, { value, expiresAt })
    this.updateAccessOrder(key)
  }

  async delete(key: string): Promise<void> {
    this.cache.delete(key)
    this.removeFromAccessOrder(key)
  }

  async clear(): Promise<void> {
    this.cache.clear()
    this.accessOrder = []
  }

  async has(key: string): Promise<boolean> {
    const entry = this.cache.get(key)
    if (!entry) return false
    
    const now = Date.now()
    if (now > entry.expiresAt) {
      this.cache.delete(key)
      this.removeFromAccessOrder(key)
      return false
    }
    
    return true
  }

  /**
   * Get with stale/expired metadata
   */
  async getWithMetadata(key: string): Promise<CacheResult<T> | null> {
    const entry = this.cache.get(key)
    if (!entry) return null

    const now = Date.now()
    const age = now - (entry.expiresAt - this.maxTTL)
    
    return {
      value: entry.value,
      stale: age > this.staleTTL,
      expired: now > entry.expiresAt,
      updatedAt: entry.expiresAt - this.maxTTL,
    }
  }

  /**
   * Refresh cache with background update
   */
  async refreshCache(
    key: string,
    fetcher: () => Promise<T>
  ): Promise<T | null> {
    const cached = await this.getWithMetadata(key)
    
    if (cached && !cached.expired) {
      if (cached.stale) {
        // Return stale value and refresh in background
        fetcher().then(value => this.set(key, value)).catch(() => {})
      }
      return cached.value
    }

    // No cache or expired, fetch and cache
    try {
      const value = await fetcher()
      await this.set(key, value)
      return value
    } catch {
      // If fetch fails and we have stale data, return it
      return cached?.value ?? null
    }
  }

  private updateAccessOrder(key: string): void {
    this.removeFromAccessOrder(key)
    this.accessOrder.push(key)
  }

  private removeFromAccessOrder(key: string): void {
    const index = this.accessOrder.indexOf(key)
    if (index > -1) {
      this.accessOrder.splice(index, 1)
    }
  }

  private evictOldest(): void {
    if (this.accessOrder.length > 0) {
      const oldest = this.accessOrder.shift()!
      this.cache.delete(oldest)
    }
  }
}

/**
 * LRU (Least Recently Used) Cache
 */
export class LRUCache<K = string, V = any> {
  private cache: Map<K, V>
  private maxSize: number

  constructor(maxSize = 100) {
    this.cache = new Map()
    this.maxSize = maxSize
  }

  get(key: K): V | undefined {
    const value = this.cache.get(key)
    if (value !== undefined) {
      // Move to end (most recently used)
      this.cache.delete(key)
      this.cache.set(key, value)
    }
    return value
  }

  set(key: K, value: V): void {
    // Remove if exists (to update position)
    this.cache.delete(key)
    
    // Evict oldest if at capacity
    if (this.cache.size >= this.maxSize) {
      const firstKey = this.cache.keys().next().value
      this.cache.delete(firstKey)
    }
    
    this.cache.set(key, value)
  }

  has(key: K): boolean {
    return this.cache.has(key)
  }

  delete(key: K): boolean {
    return this.cache.delete(key)
  }

  clear(): void {
    this.cache.clear()
  }

  get size(): number {
    return this.cache.size
  }
}

/**
 * Redis cache wrapper
 */
export class RedisCache<T = any> implements Cache<T> {
  constructor(
    private redis: Redis,
    private options: {
      prefix?: string
      defaultTTL?: number
      serializer?: (value: T) => string
      deserializer?: (value: string) => T
    } = {}
  ) {
    this.options = {
      prefix: options.prefix ?? 'cache:',
      defaultTTL: options.defaultTTL ?? HOUR,
      serializer: options.serializer ?? JSON.stringify,
      deserializer: options.deserializer ?? JSON.parse,
    }
  }

  private getKey(key: string): string {
    return `${this.options.prefix}${key}`
  }

  async get(key: string): Promise<T | null> {
    const value = await this.redis.get(this.getKey(key))
    if (!value) return null
    
    try {
      return this.options.deserializer!(value)
    } catch {
      return null
    }
  }

  async set(key: string, value: T, ttl?: number): Promise<void> {
    const serialized = this.options.serializer!(value)
    const ttlSeconds = Math.floor((ttl ?? this.options.defaultTTL!) / 1000)
    
    await this.redis.setex(this.getKey(key), ttlSeconds, serialized)
  }

  async delete(key: string): Promise<void> {
    await this.redis.del(this.getKey(key))
  }

  async clear(): Promise<void> {
    const pattern = `${this.options.prefix}*`
    const keys = await this.redis.keys(pattern)
    if (keys.length > 0) {
      await this.redis.del(...keys)
    }
  }

  async has(key: string): Promise<boolean> {
    const exists = await this.redis.exists(this.getKey(key))
    return exists === 1
  }

  /**
   * Get multiple values at once
   */
  async mget(keys: string[]): Promise<Map<string, T | null>> {
    const redisKeys = keys.map(k => this.getKey(k))
    const values = await this.redis.mget(...redisKeys)
    
    const result = new Map<string, T | null>()
    keys.forEach((key, index) => {
      const value = values[index]
      if (value) {
        try {
          result.set(key, this.options.deserializer!(value))
        } catch {
          result.set(key, null)
        }
      } else {
        result.set(key, null)
      }
    })
    
    return result
  }

  /**
   * Set multiple values at once
   */
  async mset(entries: Array<{ key: string; value: T; ttl?: number }>): Promise<void> {
    const pipeline = this.redis.pipeline()
    
    for (const entry of entries) {
      const serialized = this.options.serializer!(entry.value)
      const ttlSeconds = Math.floor((entry.ttl ?? this.options.defaultTTL!) / 1000)
      pipeline.setex(this.getKey(entry.key), ttlSeconds, serialized)
    }
    
    await pipeline.exec()
  }

  /**
   * Increment a counter
   */
  async increment(key: string, amount = 1): Promise<number> {
    return await this.redis.incrby(this.getKey(key), amount)
  }

  /**
   * Get remaining TTL for a key
   */
  async ttl(key: string): Promise<number> {
    const ttl = await this.redis.ttl(this.getKey(key))
    return ttl > 0 ? ttl * 1000 : -1 // Convert to milliseconds
  }
}

/**
 * Two-level cache (memory + Redis)
 */
export class TwoLevelCache<T = any> implements Cache<T> {
  private memory: MemoryCache<T>
  private redis: RedisCache<T>

  constructor(
    redis: Redis,
    options: {
      memoryOptions?: ConstructorParameters<typeof MemoryCache>[0]
      redisOptions?: ConstructorParameters<typeof RedisCache>[1]
    } = {}
  ) {
    this.memory = new MemoryCache(options.memoryOptions)
    this.redis = new RedisCache(redis, options.redisOptions)
  }

  async get(key: string): Promise<T | null> {
    // Check memory first
    let value = await this.memory.get(key)
    if (value !== null) return value

    // Check Redis
    value = await this.redis.get(key)
    if (value !== null) {
      // Populate memory cache
      await this.memory.set(key, value)
    }

    return value
  }

  async set(key: string, value: T, ttl?: number): Promise<void> {
    await Promise.all([
      this.memory.set(key, value, ttl),
      this.redis.set(key, value, ttl),
    ])
  }

  async delete(key: string): Promise<void> {
    await Promise.all([
      this.memory.delete(key),
      this.redis.delete(key),
    ])
  }

  async clear(): Promise<void> {
    await Promise.all([
      this.memory.clear(),
      this.redis.clear(),
    ])
  }

  async has(key: string): Promise<boolean> {
    const inMemory = await this.memory.has(key)
    if (inMemory) return true
    
    return await this.redis.has(key)
  }
}

/**
 * Create a cache key from parts
 */
export function cacheKey(...parts: (string | number)[]): string {
  return parts.join(':')
}

/**
 * Cache decorator for methods
 */
export function cached<T extends (...args: any[]) => Promise<any>>(
  cache: Cache,
  keyGenerator: (...args: Parameters<T>) => string,
  ttl?: number
) {
  return function (
    target: any,
    propertyName: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value

    descriptor.value = async function (...args: Parameters<T>) {
      const key = keyGenerator(...args)
      
      // Check cache
      const cached = await cache.get(key)
      if (cached !== null) {
        return cached
      }

      // Call original method
      const result = await originalMethod.apply(this, args)
      
      // Cache result
      await cache.set(key, result, ttl)
      
      return result
    }

    return descriptor
  }
}

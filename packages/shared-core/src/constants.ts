/**
 * Shared Constants
 * Common constants used across multiple packages
 */

// Time constants (re-exported from common for convenience)
export { DAY, HOUR, MINUTE, SECOND } from '@gander-social-atproto/common'

// HTTP Status codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,
  MOVED_PERMANENTLY: 301,
  FOUND: 302,
  NOT_MODIFIED: 304,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  CONFLICT: 409,
  GONE: 410,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_ENTITY: 422,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
} as const

// Content types
export const CONTENT_TYPE = {
  JSON: 'application/json',
  HTML: 'text/html',
  TEXT: 'text/plain',
  XML: 'application/xml',
  FORM: 'application/x-www-form-urlencoded',
  MULTIPART: 'multipart/form-data',
  OCTET_STREAM: 'application/octet-stream',
  CAR: 'application/vnd.ipld.car',
  CBOR: 'application/cbor',
} as const

// Common headers
export const HEADERS = {
  ACCEPT: 'accept',
  AUTHORIZATION: 'authorization',
  CONTENT_TYPE: 'content-type',
  CONTENT_LENGTH: 'content-length',
  USER_AGENT: 'user-agent',
  X_FORWARDED_FOR: 'x-forwarded-for',
  X_REAL_IP: 'x-real-ip',
  X_REQUEST_ID: 'x-request-id',
  X_ATPROTO_ACCEPT_LABELERS: 'atproto-accept-labelers',
  X_ATPROTO_PROXY: 'atproto-proxy',
} as const

// Environment
export const ENV = {
  PRODUCTION: 'production',
  DEVELOPMENT: 'development',
  TEST: 'test',
  STAGING: 'staging',
} as const

// Default limits
export const LIMITS = {
  MAX_PAGE_SIZE: 100,
  DEFAULT_PAGE_SIZE: 50,
  MIN_PAGE_SIZE: 1,
  MAX_USERNAME_LENGTH: 30,
  MIN_USERNAME_LENGTH: 3,
  MAX_DISPLAY_NAME_LENGTH: 64,
  MAX_DESCRIPTION_LENGTH: 256,
  MAX_IMAGE_SIZE: 1000000, // 1MB
  MAX_VIDEO_SIZE: 50000000, // 50MB
} as const

// Rate limiting
export const RATE_LIMIT = {
  DEFAULT_POINTS: 3000,
  DEFAULT_DURATION: 5 * 60, // 5 minutes in seconds
  DEFAULT_BLOCK_DURATION: 60 * 60, // 1 hour in seconds
} as const

// Cache TTLs
export const CACHE_TTL = {
  SHORT: 60, // 1 minute
  MEDIUM: 5 * 60, // 5 minutes
  LONG: 60 * 60, // 1 hour
  EXTRA_LONG: 24 * 60 * 60, // 1 day
} as const

// Error codes
export const ERROR_CODES = {
  InvalidRequest: 'InvalidRequest',
  AuthRequired: 'AuthenticationRequired',
  Forbidden: 'Forbidden',
  NotFound: 'NotFound',
  MethodNotAllowed: 'MethodNotAllowed',
  PayloadTooLarge: 'PayloadTooLarge',
  RateLimitExceeded: 'RateLimitExceeded',
  InternalServerError: 'InternalServerError',
  ServiceUnavailable: 'ServiceUnavailable',
  InvalidToken: 'InvalidToken',
  ExpiredToken: 'ExpiredToken',
  AccountTakedown: 'AccountTakedown',
  AccountSuspended: 'AccountSuspended',
  AccountDeactivated: 'AccountDeactivated',
} as const

// DID methods
export const DID_METHODS = {
  PLC: 'plc',
  WEB: 'web',
  KEY: 'key',
} as const

// Record types (common AT Protocol record types)
export const RECORD_TYPES = {
  PROFILE: 'app.gndr.actor.profile',
  POST: 'app.gndr.feed.post',
  LIKE: 'app.gndr.feed.like',
  REPOST: 'app.gndr.feed.repost',
  FOLLOW: 'app.gndr.graph.follow',
  BLOCK: 'app.gndr.graph.block',
  LIST: 'app.gndr.graph.list',
  LISTITEM: 'app.gndr.graph.listitem',
  LISTBLOCK: 'app.gndr.graph.listblock',
  FEED_GENERATOR: 'app.gndr.feed.generator',
  STARTER_PACK: 'app.gndr.graph.starterpack',
} as const

// Regex patterns
export const PATTERNS = {
  HANDLE: /^([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?$/,
  DID: /^did:[a-z]+:[a-zA-Z0-9._:%-]*[a-zA-Z0-9._-]$/,
  AT_URI: /^at:\/\/([a-zA-Z0-9._:%-]+)(\/[a-zA-Z0-9._:%-]+)?(\/[a-zA-Z0-9._:%-]+)?$/,
  NSID: /^[a-zA-Z]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(\.[a-zA-Z]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  TID: /^[234567abcdefghijklmnopqrstuvwxyz]{13}$/,
} as const

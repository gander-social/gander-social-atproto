import { isValidNsid } from '@gander-social-atproto/syntax'

export type Nsid = `${string}.${string}.${string}`
export const isNsid = (v: unknown): v is Nsid =>
  typeof v === 'string' && isValidNsid(v)

/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { HeadersMap } from '@gander-social-atproto/xrpc'
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'

const is$typed = _is$typed,
  validate = _validate
const id = 'com.atproto.identity.getRecommendedDidCredentials'

export type QueryParams = {}
export type InputSchema = undefined

export interface OutputSchema {
  /** Recommended rotation keys for PLC dids. Should be undefined (or ignored) for did:webs. */
  rotationKeys?: string[]
  alsoKnownAs?: string[]
  verificationMethods?: { [_ in string]: unknown }
  services?: { [_ in string]: unknown }
}

export interface CallOptions {
  signal?: AbortSignal
  headers?: HeadersMap
}

export interface Response {
  success: boolean
  headers: HeadersMap
  data: OutputSchema
}

export function toKnownErr(e: any) {
  return e
}

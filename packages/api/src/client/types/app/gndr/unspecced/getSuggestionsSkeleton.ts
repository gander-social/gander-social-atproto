/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { HeadersMap } from '@gander-social-atproto/xrpc'
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'
import type * as AppGndrUnspeccedDefs from './defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.gndr.unspecced.getSuggestionsSkeleton'

export type QueryParams = {
  /** DID of the account making the request (not included for public/unauthenticated queries). Used to boost followed accounts in ranking. */
  viewer?: string
  limit?: number
  cursor?: string
  /** DID of the account to get suggestions relative to. If not provided, suggestions will be based on the viewer. */
  relativeToDid?: string
}
export type InputSchema = undefined

export interface OutputSchema {
  cursor?: string
  actors: AppGndrUnspeccedDefs.SkeletonSearchActor[]
  /** DID of the account these suggestions are relative to. If this is returned undefined, suggestions are based on the viewer. */
  relativeToDid?: string
  /** Snowflake for this recommendation, use when submitting recommendation events. */
  recId?: number
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

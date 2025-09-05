/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { HeadersMap } from '@gander-social-atproto/xrpc'
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'
import type * as AppGndrUnspeccedDefs from './defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.gndr.unspecced.getTrendsSkeleton'

export type QueryParams = {
  /** DID of the account making the request (not included for public/unauthenticated queries). */
  viewer?: string
  limit?: number
}
export type InputSchema = undefined

export interface OutputSchema {
  trends: AppGndrUnspeccedDefs.SkeletonTrend[]
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

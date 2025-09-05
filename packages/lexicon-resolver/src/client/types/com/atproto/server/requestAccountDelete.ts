/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { HeadersMap } from '@gander-social-atproto/xrpc'
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'

const is$typed = _is$typed,
  validate = _validate
const id = 'com.atproto.server.requestAccountDelete'

export type QueryParams = {}
export type InputSchema = undefined

export interface CallOptions {
  signal?: AbortSignal
  headers?: HeadersMap
  qp?: QueryParams
}

export interface Response {
  success: boolean
  headers: HeadersMap
}

export function toKnownErr(e: any) {
  return e
}

/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { HeadersMap } from '@gander-social-atproto/xrpc'
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'
import type * as ComAtprotoServerDefs from '../server/defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'com.atproto.admin.getInviteCodes'

export type QueryParams = {
  sort?: 'recent' | 'usage' | (string & {})
  limit?: number
  cursor?: string
}
export type InputSchema = undefined

export interface OutputSchema {
  cursor?: string
  codes: ComAtprotoServerDefs.InviteCode[]
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

/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { HeadersMap } from '@gander-social-atproto/xrpc'
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'
import type * as ComAtprotoAdminDefs from '../../../com/atproto/admin/defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'tools.ozone.signature.searchAccounts'

export type QueryParams = {
  values: string[]
  cursor?: string
  limit?: number
}
export type InputSchema = undefined

export interface OutputSchema {
  cursor?: string
  accounts: ComAtprotoAdminDefs.AccountView[]
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

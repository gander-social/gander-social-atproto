/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { HeadersMap } from '@gander-social-atproto/xrpc'
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'
import type * as ChatGndrConvoDefs from './defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'chat.gndr.convo.listConvos'

export type QueryParams = {
  limit?: number
  cursor?: string
  readState?: 'unread' | (string & {})
  status?: 'request' | 'accepted' | (string & {})
}
export type InputSchema = undefined

export interface OutputSchema {
  cursor?: string
  convos: ChatGndrConvoDefs.ConvoView[]
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

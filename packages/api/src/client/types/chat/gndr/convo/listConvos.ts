/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { HeadersMap, XRPCError } from '@gander-social-atproto/xrpc'
import { type ValidationResult, BlobRef } from '@gander-social-atproto/lexicon'
import { CID } from 'multiformats/cid'
import { validate as _validate } from '../../../../lexicons'
import {
  type $Typed,
  is$typed as _is$typed,
  type OmitKey,
} from '../../../../util'
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

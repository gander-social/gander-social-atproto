/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { HeadersMap } from '@gander-social-atproto/xrpc'
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'
import type * as AppGndrFeedDefs from './defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.gndr.feed.getQuotes'

export type QueryParams = {
  /** Reference (AT-URI) of post record */
  uri: string
  /** If supplied, filters to quotes of specific version (by CID) of the post record. */
  cid?: string
  limit?: number
  cursor?: string
}
export type InputSchema = undefined

export interface OutputSchema {
  uri: string
  cid?: string
  cursor?: string
  posts: AppGndrFeedDefs.PostView[]
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

/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { HeadersMap, XRPCError } from '@gander-social-atproto/xrpc'
import { validate as _validate } from '../../../../lexicons'
import { type $Typed, is$typed as _is$typed, } from '../../../../util'
import type * as AppGndrFeedDefs from './defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.gndr.feed.getPostThread'

export type QueryParams = {
  /** Reference (AT-URI) to post record. */
  uri: string
  /** How many levels of reply depth should be included in response. */
  depth?: number
  /** How many levels of parent (and grandparent, etc) post to include. */
  parentHeight?: number
}
export type InputSchema = undefined

export interface OutputSchema {
  thread:
    | $Typed<AppGndrFeedDefs.ThreadViewPost>
    | $Typed<AppGndrFeedDefs.NotFoundPost>
    | $Typed<AppGndrFeedDefs.BlockedPost>
    | { $type: string }
  threadgate?: AppGndrFeedDefs.ThreadgateView
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

export class NotFoundError extends XRPCError {
  constructor(src: XRPCError) {
    super(src.status, src.error, src.message, src.headers, { cause: src })
  }
}

export function toKnownErr(e: any) {
  if (e instanceof XRPCError) {
    if (e.error === 'NotFound') return new NotFoundError(e)
  }

  return e
}

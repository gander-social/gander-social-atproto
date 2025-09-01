/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { HeadersMap, XRPCError } from '@gander-social-atproto/xrpc'
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'
import type * as AppGndrFeedDefs from './defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.gndr.feed.getAuthorFeed'

export type QueryParams = {
  actor: string
  limit?: number
  cursor?: string
  /** Combinations of post/repost types to include in response. */
  filter?:
    | 'posts_with_replies'
    | 'posts_no_replies'
    | 'posts_with_media'
    | 'posts_and_author_threads'
    | 'posts_with_video'
    | (string & {})
  includePins?: boolean
}
export type InputSchema = undefined

export interface OutputSchema {
  cursor?: string
  feed: AppGndrFeedDefs.FeedViewPost[]
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

export class BlockedActorError extends XRPCError {
  constructor(src: XRPCError) {
    super(src.status, src.error, src.message, src.headers, { cause: src })
  }
}

export class BlockedByActorError extends XRPCError {
  constructor(src: XRPCError) {
    super(src.status, src.error, src.message, src.headers, { cause: src })
  }
}

export function toKnownErr(e: any) {
  if (e instanceof XRPCError) {
    if (e.error === 'BlockedActor') return new BlockedActorError(e)
    if (e.error === 'BlockedByActor') return new BlockedByActorError(e)
  }

  return e
}

/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { HeadersMap } from '@gander-social-atproto/xrpc'
import { validate as _validate } from '../../../../lexicons'
import { type $Typed, is$typed as _is$typed, } from '../../../../util'
import type * as AppGndrUnspeccedDefs from './defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.gndr.unspecced.getPostThreadOtherV2'

export type QueryParams = {
  /** Reference (AT-URI) to post record. This is the anchor post. */
  anchor: string
  /** Whether to prioritize posts from followed users. It only has effect when the user is authenticated. */
  prioritizeFollowedUsers?: boolean
}
export type InputSchema = undefined

export interface OutputSchema {
  /** A flat list of other thread items. The depth of each item is indicated by the depth property inside the item. */
  thread: ThreadItem[]
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

export interface ThreadItem {
  $type?: 'app.gndr.unspecced.getPostThreadOtherV2#threadItem'
  uri: string
  /** The nesting level of this item in the thread. Depth 0 means the anchor item. Items above have negative depths, items below have positive depths. */
  depth: number
  value: $Typed<AppGndrUnspeccedDefs.ThreadItemPost> | { $type: string }
}

const hashThreadItem = 'threadItem'

export function isThreadItem<V>(v: V) {
  return is$typed(v, id, hashThreadItem)
}

export function validateThreadItem<V>(v: V) {
  return validate<ThreadItem & V>(v, id, hashThreadItem)
}

/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { HeadersMap } from '@gander-social-atproto/xrpc'
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'
import type * as AppGndrActorDefs from '../actor/defs.js'
import type * as ComAtprotoLabelDefs from '../../../com/atproto/label/defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.gndr.notification.listNotifications'

export type QueryParams = {
  /** Notification reasons to include in response. */
  reasons?: string[]
  limit?: number
  priority?: boolean
  cursor?: string
  seenAt?: string
}
export type InputSchema = undefined

export interface OutputSchema {
  cursor?: string
  notifications: Notification[]
  priority?: boolean
  seenAt?: string
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

export interface Notification {
  $type?: 'app.gndr.notification.listNotifications#notification'
  uri: string
  cid: string
  author: AppGndrActorDefs.ProfileView
  /** The reason why this notification was delivered - e.g. your post was liked, or you received a new follower. */
  reason:
    | 'like'
    | 'repost'
    | 'follow'
    | 'mention'
    | 'reply'
    | 'quote'
    | 'starterpack-joined'
    | 'verified'
    | 'unverified'
    | 'like-via-repost'
    | 'repost-via-repost'
    | 'subscribed-post'
    | (string & {})
  reasonSubject?: string
  record: { [_ in string]: unknown }
  isRead: boolean
  indexedAt: string
  labels?: ComAtprotoLabelDefs.Label[]
}

const hashNotification = 'notification'

export function isNotification<V>(v: V) {
  return is$typed(v, id, hashNotification)
}

export function validateNotification<V>(v: V) {
  return validate<Notification & V>(v, id, hashNotification)
}

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
import type * as AppGndrNotificationDefs from './defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.gndr.notification.putPreferencesV2'

export type QueryParams = {}

export interface InputSchema {
  chat?: AppGndrNotificationDefs.ChatPreference
  follow?: AppGndrNotificationDefs.FilterablePreference
  like?: AppGndrNotificationDefs.FilterablePreference
  likeViaRepost?: AppGndrNotificationDefs.FilterablePreference
  mention?: AppGndrNotificationDefs.FilterablePreference
  quote?: AppGndrNotificationDefs.FilterablePreference
  reply?: AppGndrNotificationDefs.FilterablePreference
  repost?: AppGndrNotificationDefs.FilterablePreference
  repostViaRepost?: AppGndrNotificationDefs.FilterablePreference
  starterpackJoined?: AppGndrNotificationDefs.Preference
  subscribedPost?: AppGndrNotificationDefs.Preference
  unverified?: AppGndrNotificationDefs.Preference
  verified?: AppGndrNotificationDefs.Preference
}

export interface OutputSchema {
  preferences: AppGndrNotificationDefs.Preferences
}

export interface CallOptions {
  signal?: AbortSignal
  headers?: HeadersMap
  qp?: QueryParams
  encoding?: 'application/json'
}

export interface Response {
  success: boolean
  headers: HeadersMap
  data: OutputSchema
}

export function toKnownErr(e: any) {
  return e
}

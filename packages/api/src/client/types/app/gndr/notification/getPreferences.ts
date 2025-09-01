/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { HeadersMap } from '@gander-social-atproto/xrpc'
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'
import type * as AppGndrNotificationDefs from './defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.gndr.notification.getPreferences'

export type QueryParams = {}
export type InputSchema = undefined

export interface OutputSchema {
  preferences: AppGndrNotificationDefs.Preferences
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

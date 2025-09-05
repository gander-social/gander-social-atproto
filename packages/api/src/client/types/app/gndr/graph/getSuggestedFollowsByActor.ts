/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { HeadersMap } from '@gander-social-atproto/xrpc'
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'
import type * as AppGndrActorDefs from '../actor/defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.gndr.graph.getSuggestedFollowsByActor'

export type QueryParams = {
  actor: string
}
export type InputSchema = undefined

export interface OutputSchema {
  suggestions: AppGndrActorDefs.ProfileView[]
  /** If true, response has fallen-back to generic results, and is not scoped using relativeToDid */
  isFallback: boolean
  /** Snowflake for this recommendation, use when submitting recommendation events. */
  recId?: number
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

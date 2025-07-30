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
import type * as AppGndrActorDefs from './defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.gndr.actor.getPreferences'

export type QueryParams = {}
export type InputSchema = undefined

export interface OutputSchema {
  preferences: AppGndrActorDefs.Preferences
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

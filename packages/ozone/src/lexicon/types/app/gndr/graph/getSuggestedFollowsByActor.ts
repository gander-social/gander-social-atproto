/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { type ValidationResult, BlobRef } from '@gander-social-atproto/lexicon'
import { CID } from 'multiformats/cid'
import { validate as _validate } from '../../../../lexicons'
import {
  type $Typed,
  is$typed as _is$typed,
  type OmitKey,
} from '../../../../util'
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
  isFallback?: boolean
  /** Snowflake for this recommendation, use when submitting recommendation events. */
  recId?: number
}

export type HandlerInput = void

export interface HandlerSuccess {
  encoding: 'application/json'
  body: OutputSchema
  headers?: { [key: string]: string }
}

export interface HandlerError {
  status: number
  message?: string
}

export type HandlerOutput = HandlerError | HandlerSuccess

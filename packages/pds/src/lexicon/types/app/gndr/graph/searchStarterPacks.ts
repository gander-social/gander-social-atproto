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
import type * as AppGndrGraphDefs from './defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.gndr.graph.searchStarterPacks'

export type QueryParams = {
  /** Search query string. Syntax, phrase, boolean, and faceting is unspecified, but Lucene query syntax is recommended. */
  q: string
  limit: number
  cursor?: string
}
export type InputSchema = undefined

export interface OutputSchema {
  cursor?: string
  starterPacks: AppGndrGraphDefs.StarterPackViewBasic[]
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

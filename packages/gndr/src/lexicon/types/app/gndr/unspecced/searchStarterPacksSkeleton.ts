/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'
import type * as AppGndrUnspeccedDefs from './defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.gndr.unspecced.searchStarterPacksSkeleton'

export type QueryParams = {
  /** Search query string; syntax, phrase, boolean, and faceting is unspecified, but Lucene query syntax is recommended. */
  q: string
  /** DID of the account making the request (not included for public/unauthenticated queries). */
  viewer?: string
  limit: number
  /** Optional pagination mechanism; may not necessarily allow scrolling through entire result set. */
  cursor?: string
}
export type InputSchema = undefined

export interface OutputSchema {
  cursor?: string
  /** Count of search hits. Optional, may be rounded/truncated, and may not be possible to paginate through all hits. */
  hitsTotal?: number
  starterPacks: AppGndrUnspeccedDefs.SkeletonSearchStarterPack[]
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
  error?: 'BadQueryString'
}

export type HandlerOutput = HandlerError | HandlerSuccess

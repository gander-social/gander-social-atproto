/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'
import type * as AppGndrFeedDefs from './defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.gndr.feed.getFeedSkeleton'

export type QueryParams = {
  /** Reference to feed generator record describing the specific feed being requested. */
  feed: string
  limit: number
  cursor?: string
}
export type InputSchema = undefined

export interface OutputSchema {
  cursor?: string
  feed: AppGndrFeedDefs.SkeletonFeedPost[]
  /** Unique identifier per request that may be passed back alongside interactions. */
  reqId?: string
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
  error?: 'UnknownFeed'
}

export type HandlerOutput = HandlerError | HandlerSuccess

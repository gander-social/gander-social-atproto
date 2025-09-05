/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'
import type * as ToolsOzoneSafelinkDefs from './defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'tools.ozone.safelink.queryRules'

export type QueryParams = {}

export interface InputSchema {
  /** Cursor for pagination */
  cursor?: string
  /** Maximum number of results to return */
  limit: number
  /** Filter by specific URLs or domains */
  urls?: string[]
  /** Filter by pattern type */
  patternType?: string
  /** Filter by action types */
  actions?: string[]
  /** Filter by reason type */
  reason?: string
  /** Filter by rule creator */
  createdBy?: string
  /** Sort direction */
  sortDirection: 'asc' | 'desc' | (string & {})
}

export interface OutputSchema {
  /** Next cursor for pagination. Only present if there are more results. */
  cursor?: string
  rules: ToolsOzoneSafelinkDefs.UrlRule[]
}

export interface HandlerInput {
  encoding: 'application/json'
  body: InputSchema
}

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

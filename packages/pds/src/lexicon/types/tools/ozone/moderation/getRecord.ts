/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'
import type * as ToolsOzoneModerationDefs from './defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'tools.ozone.moderation.getRecord'

export type QueryParams = {
  uri: string
  cid?: string
}
export type InputSchema = undefined
export type OutputSchema = ToolsOzoneModerationDefs.RecordViewDetail
export type HandlerInput = void

export interface HandlerSuccess {
  encoding: 'application/json'
  body: OutputSchema
  headers?: { [key: string]: string }
}

export interface HandlerError {
  status: number
  message?: string
  error?: 'RecordNotFound'
}

export type HandlerOutput = HandlerError | HandlerSuccess

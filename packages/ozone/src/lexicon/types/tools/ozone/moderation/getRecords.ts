/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { validate as _validate } from '../../../../lexicons'
import { type $Typed, is$typed as _is$typed, } from '../../../../util'
import type * as ToolsOzoneModerationDefs from './defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'tools.ozone.moderation.getRecords'

export type QueryParams = {
  uris: string[]
}
export type InputSchema = undefined

export interface OutputSchema {
  records: (
    | $Typed<ToolsOzoneModerationDefs.RecordViewDetail>
    | $Typed<ToolsOzoneModerationDefs.RecordViewNotFound>
    | { $type: string }
  )[]
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

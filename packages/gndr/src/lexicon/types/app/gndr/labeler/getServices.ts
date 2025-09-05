/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { validate as _validate } from '../../../../lexicons'
import { type $Typed, is$typed as _is$typed, } from '../../../../util'
import type * as AppGndrLabelerDefs from './defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.gndr.labeler.getServices'

export type QueryParams = {
  dids: string[]
  detailed: boolean
}
export type InputSchema = undefined

export interface OutputSchema {
  views: (
    | $Typed<AppGndrLabelerDefs.LabelerView>
    | $Typed<AppGndrLabelerDefs.LabelerViewDetailed>
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

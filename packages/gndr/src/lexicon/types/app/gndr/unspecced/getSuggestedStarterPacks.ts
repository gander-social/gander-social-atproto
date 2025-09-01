/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'
import type * as AppGndrGraphDefs from '../graph/defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.gndr.unspecced.getSuggestedStarterPacks'

export type QueryParams = {
  limit: number
}
export type InputSchema = undefined

export interface OutputSchema {
  starterPacks: AppGndrGraphDefs.StarterPackView[]
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

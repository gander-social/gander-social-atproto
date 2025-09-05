/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'
import type * as ComAtprotoLabelDefs from '../label/defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'com.atproto.temp.fetchLabels'

export type QueryParams = {
  since?: number
  limit: number
}
export type InputSchema = undefined

export interface OutputSchema {
  labels: ComAtprotoLabelDefs.Label[]
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

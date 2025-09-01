/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'

const is$typed = _is$typed,
  validate = _validate
const id = 'tools.ozone.set.deleteValues'

export type QueryParams = {}

export interface InputSchema {
  /** Name of the set to delete values from */
  name: string
  /** Array of string values to delete from the set */
  values: string[]
}

export interface HandlerInput {
  encoding: 'application/json'
  body: InputSchema
}

export interface HandlerError {
  status: number
  message?: string
  error?: 'SetNotFound'
}

export type HandlerOutput = HandlerError | void

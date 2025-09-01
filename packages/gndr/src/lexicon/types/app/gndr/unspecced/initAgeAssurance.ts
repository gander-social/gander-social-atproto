/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'
import type * as AppGndrUnspeccedDefs from './defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.gndr.unspecced.initAgeAssurance'

export type QueryParams = {}

export interface InputSchema {
  /** The user's email address to receive assurance instructions. */
  email: string
  /** The user's preferred language for communication during the assurance process. */
  language: string
  /** An ISO 3166-1 alpha-2 code of the user's location. */
  countryCode: string
}

export type OutputSchema = AppGndrUnspeccedDefs.AgeAssuranceState

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
  error?: 'InvalidEmail' | 'DidTooLong' | 'InvalidInitiation'
}

export type HandlerOutput = HandlerError | HandlerSuccess

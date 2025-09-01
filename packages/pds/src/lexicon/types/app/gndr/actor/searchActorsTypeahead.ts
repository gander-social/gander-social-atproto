/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'
import type * as AppGndrActorDefs from './defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.gndr.actor.searchActorsTypeahead'

export type QueryParams = {
  /** DEPRECATED: use 'q' instead. */
  term?: string
  /** Search query prefix; not a full query string. */
  q?: string
  limit: number
}
export type InputSchema = undefined

export interface OutputSchema {
  actors: AppGndrActorDefs.ProfileViewBasic[]
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

/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'
import type * as AppGndrActorDefs from '../actor/defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.gndr.graph.getKnownFollowers'

export type QueryParams = {
  actor: string
  limit: number
  cursor?: string
}
export type InputSchema = undefined

export interface OutputSchema {
  subject: AppGndrActorDefs.ProfileView
  cursor?: string
  followers: AppGndrActorDefs.ProfileView[]
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

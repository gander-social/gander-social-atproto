/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { validate as _validate } from '../../../../lexicons'
import { type $Typed, is$typed as _is$typed, } from '../../../../util'
import type * as AppGndrGraphDefs from './defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.gndr.graph.getRelationships'

export type QueryParams = {
  /** Primary account requesting relationships for. */
  actor: string
  /** List of 'other' accounts to be related back to the primary. */
  others?: string[]
}
export type InputSchema = undefined

export interface OutputSchema {
  actor?: string
  relationships: (
    | $Typed<AppGndrGraphDefs.Relationship>
    | $Typed<AppGndrGraphDefs.NotFoundActor>
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
  error?: 'ActorNotFound'
}

export type HandlerOutput = HandlerError | HandlerSuccess

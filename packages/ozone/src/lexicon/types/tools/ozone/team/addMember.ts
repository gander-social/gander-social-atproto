/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'
import type * as ToolsOzoneTeamDefs from './defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'tools.ozone.team.addMember'

export type QueryParams = {}

export interface InputSchema {
  did: string
  role:
    | 'tools.ozone.team.defs#roleAdmin'
    | 'tools.ozone.team.defs#roleModerator'
    | 'tools.ozone.team.defs#roleVerifier'
    | 'tools.ozone.team.defs#roleTriage'
    | (string & {})
}

export type OutputSchema = ToolsOzoneTeamDefs.Member

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
  error?: 'MemberAlreadyExists'
}

export type HandlerOutput = HandlerError | HandlerSuccess

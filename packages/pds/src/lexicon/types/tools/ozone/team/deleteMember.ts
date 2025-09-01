/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'

const is$typed = _is$typed,
  validate = _validate
const id = 'tools.ozone.team.deleteMember'

export type QueryParams = {}

export interface InputSchema {
  did: string
}

export interface HandlerInput {
  encoding: 'application/json'
  body: InputSchema
}

export interface HandlerError {
  status: number
  message?: string
  error?: 'MemberNotFound' | 'CannotDeleteSelf'
}

export type HandlerOutput = HandlerError | void

/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'

const is$typed = _is$typed,
  validate = _validate
const id = 'com.atproto.server.resetPassword'

export type QueryParams = {}

export interface InputSchema {
  token: string
  password: string
}

export interface HandlerInput {
  encoding: 'application/json'
  body: InputSchema
}

export interface HandlerError {
  status: number
  message?: string
  error?: 'ExpiredToken' | 'InvalidToken'
}

export type HandlerOutput = HandlerError | void

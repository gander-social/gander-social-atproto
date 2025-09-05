/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'

const is$typed = _is$typed,
  validate = _validate
const id = 'com.atproto.server.confirmEmail'

export type QueryParams = {}

export interface InputSchema {
  email: string
  token: string
}

export interface HandlerInput {
  encoding: 'application/json'
  body: InputSchema
}

export interface HandlerError {
  status: number
  message?: string
  error?: 'AccountNotFound' | 'ExpiredToken' | 'InvalidToken' | 'InvalidEmail'
}

export type HandlerOutput = HandlerError | void

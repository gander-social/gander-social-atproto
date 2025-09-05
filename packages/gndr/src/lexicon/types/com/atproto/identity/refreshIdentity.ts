/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'
import type * as ComAtprotoIdentityDefs from './defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'com.atproto.identity.refreshIdentity'

export type QueryParams = {}

export interface InputSchema {
  identifier: string
}

export type OutputSchema = ComAtprotoIdentityDefs.IdentityInfo

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
  error?: 'HandleNotFound' | 'DidNotFound' | 'DidDeactivated'
}

export type HandlerOutput = HandlerError | HandlerSuccess

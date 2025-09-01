/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'

const is$typed = _is$typed,
  validate = _validate
const id = 'com.atproto.server.refreshSession'

export type QueryParams = {}
export type InputSchema = undefined

export interface OutputSchema {
  accessJwt: string
  refreshJwt: string
  handle: string
  did: string
  didDoc?: { [_ in string]: unknown }
  active?: boolean
  /** Hosting status of the account. If not specified, then assume 'active'. */
  status?: 'takendown' | 'suspended' | 'deactivated' | (string & {})
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
  error?: 'AccountTakedown'
}

export type HandlerOutput = HandlerError | HandlerSuccess

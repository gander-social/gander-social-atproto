/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'

const is$typed = _is$typed,
  validate = _validate
const id = 'com.atproto.identity.resolveDid'

export type QueryParams = {
  /** DID to resolve. */
  did: string
}
export type InputSchema = undefined

export interface OutputSchema {
  /** The complete DID document for the identity. */
  didDoc: { [_ in string]: unknown }
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
  error?: 'DidNotFound' | 'DidDeactivated'
}

export type HandlerOutput = HandlerError | HandlerSuccess

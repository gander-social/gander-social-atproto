/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'

const is$typed = _is$typed,
  validate = _validate
const id = 'com.atproto.sync.getHead'

export type QueryParams = {
  /** The DID of the repo. */
  did: string
}
export type InputSchema = undefined

export interface OutputSchema {
  root: string
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
  error?: 'HeadNotFound'
}

export type HandlerOutput = HandlerError | HandlerSuccess

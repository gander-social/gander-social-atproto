/**
 * GENERATED CODE - DO NOT MODIFY
 */
import stream from 'node:stream'
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'

const is$typed = _is$typed,
  validate = _validate
const id = 'chat.gndr.actor.exportAccountData'

export type QueryParams = {}
export type InputSchema = undefined
export type HandlerInput = void

export interface HandlerSuccess {
  encoding: 'application/jsonl'
  body: Uint8Array | stream.Readable
  headers?: { [key: string]: string }
}

export interface HandlerError {
  status: number
  message?: string
}

export type HandlerOutput = HandlerError | HandlerSuccess

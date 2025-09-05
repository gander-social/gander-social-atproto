/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'
import type * as ChatGndrConvoDefs from './defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'chat.gndr.convo.getConvo'

export type QueryParams = {
  convoId: string
}
export type InputSchema = undefined

export interface OutputSchema {
  convo: ChatGndrConvoDefs.ConvoView
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
}

export type HandlerOutput = HandlerError | HandlerSuccess

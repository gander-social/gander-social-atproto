/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'
import type * as ChatGndrConvoDefs from './defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'chat.gndr.convo.addReaction'

export type QueryParams = {}

export interface InputSchema {
  convoId: string
  messageId: string
  value: string
}

export interface OutputSchema {
  message: ChatGndrConvoDefs.MessageView
}

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
  error?:
    | 'ReactionMessageDeleted'
    | 'ReactionLimitReached'
    | 'ReactionInvalidValue'
}

export type HandlerOutput = HandlerError | HandlerSuccess

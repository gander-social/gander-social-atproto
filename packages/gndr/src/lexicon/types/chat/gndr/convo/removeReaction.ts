/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { type ValidationResult, BlobRef } from '@gander-social-atproto/lexicon'
import { CID } from 'multiformats/cid'
import { validate as _validate } from '../../../../lexicons'
import {
  type $Typed,
  is$typed as _is$typed,
  type OmitKey,
} from '../../../../util'
import type * as ChatGndrConvoDefs from './defs'

const is$typed = _is$typed,
  validate = _validate
const id = 'chat.gndr.convo.removeReaction'

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
  error?: 'ReactionMessageDeleted' | 'ReactionInvalidValue'
}

export type HandlerOutput = HandlerError | HandlerSuccess

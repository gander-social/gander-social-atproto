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
import type * as ChatGndrConvoDefs from '../convo/defs'

const is$typed = _is$typed,
  validate = _validate
const id = 'chat.gndr.moderation.getMessageContext'

export type QueryParams = {
  /** Conversation that the message is from. NOTE: this field will eventually be required. */
  convoId?: string
  messageId: string
  before: number
  after: number
}
export type InputSchema = undefined

export interface OutputSchema {
  messages: (
    | $Typed<ChatGndrConvoDefs.MessageView>
    | $Typed<ChatGndrConvoDefs.DeletedMessageView>
    | { $type: string }
  )[]
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

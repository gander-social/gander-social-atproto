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
import type * as ChatGndrConvoDefs from './defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'chat.gndr.convo.getMessages'

export type QueryParams = {
  convoId: string
  limit: number
  cursor?: string
}
export type InputSchema = undefined

export interface OutputSchema {
  cursor?: string
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

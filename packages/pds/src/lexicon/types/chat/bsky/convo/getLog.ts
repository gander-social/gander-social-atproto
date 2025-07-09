/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { type ValidationResult, BlobRef } from '@atproto/lexicon'
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
const id = 'chat.gndr.convo.getLog'

export type QueryParams = {
  cursor?: string
}
export type InputSchema = undefined

export interface OutputSchema {
  cursor?: string
  logs: (
    | $Typed<ChatGndrConvoDefs.LogBeginConvo>
    | $Typed<ChatGndrConvoDefs.LogAcceptConvo>
    | $Typed<ChatGndrConvoDefs.LogLeaveConvo>
    | $Typed<ChatGndrConvoDefs.LogMuteConvo>
    | $Typed<ChatGndrConvoDefs.LogUnmuteConvo>
    | $Typed<ChatGndrConvoDefs.LogCreateMessage>
    | $Typed<ChatGndrConvoDefs.LogDeleteMessage>
    | $Typed<ChatGndrConvoDefs.LogReadMessage>
    | $Typed<ChatGndrConvoDefs.LogAddReaction>
    | $Typed<ChatGndrConvoDefs.LogRemoveReaction>
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

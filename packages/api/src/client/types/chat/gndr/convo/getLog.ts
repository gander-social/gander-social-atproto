/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { HeadersMap } from '@gander-social-atproto/xrpc'
import { validate as _validate } from '../../../../lexicons'
import { type $Typed, is$typed as _is$typed, } from '../../../../util'
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

export interface CallOptions {
  signal?: AbortSignal
  headers?: HeadersMap
}

export interface Response {
  success: boolean
  headers: HeadersMap
  data: OutputSchema
}

export function toKnownErr(e: any) {
  return e
}

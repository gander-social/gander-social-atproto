/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { HeadersMap, XRPCError } from '@gander-social-atproto/xrpc'
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'
import type * as ComAtprotoServerDefs from './defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'com.atproto.server.getAccountInviteCodes'

export type QueryParams = {
  includeUsed?: boolean
  /** Controls whether any new 'earned' but not 'created' invites should be created. */
  createAvailable?: boolean
}
export type InputSchema = undefined

export interface OutputSchema {
  codes: ComAtprotoServerDefs.InviteCode[]
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

export class DuplicateCreateError extends XRPCError {
  constructor(src: XRPCError) {
    super(src.status, src.error, src.message, src.headers, { cause: src })
  }
}

export function toKnownErr(e: any) {
  if (e instanceof XRPCError) {
    if (e.error === 'DuplicateCreate') return new DuplicateCreateError(e)
  }

  return e
}

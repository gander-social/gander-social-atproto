/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { HeadersMap, XRPCError } from '@gander-social-atproto/xrpc'
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'

const is$typed = _is$typed,
  validate = _validate
const id = 'tools.ozone.team.deleteMember'

export type QueryParams = {}

export interface InputSchema {
  did: string
}

export interface CallOptions {
  signal?: AbortSignal
  headers?: HeadersMap
  qp?: QueryParams
  encoding?: 'application/json'
}

export interface Response {
  success: boolean
  headers: HeadersMap
}

export class MemberNotFoundError extends XRPCError {
  constructor(src: XRPCError) {
    super(src.status, src.error, src.message, src.headers, { cause: src })
  }
}

export class CannotDeleteSelfError extends XRPCError {
  constructor(src: XRPCError) {
    super(src.status, src.error, src.message, src.headers, { cause: src })
  }
}

export function toKnownErr(e: any) {
  if (e instanceof XRPCError) {
    if (e.error === 'MemberNotFound') return new MemberNotFoundError(e)
    if (e.error === 'CannotDeleteSelf') return new CannotDeleteSelfError(e)
  }

  return e
}

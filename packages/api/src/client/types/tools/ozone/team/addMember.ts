/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { HeadersMap, XRPCError } from '@gander-social-atproto/xrpc'
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'
import type * as ToolsOzoneTeamDefs from './defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'tools.ozone.team.addMember'

export type QueryParams = {}

export interface InputSchema {
  did: string
  role:
    | 'tools.ozone.team.defs#roleAdmin'
    | 'tools.ozone.team.defs#roleModerator'
    | 'tools.ozone.team.defs#roleVerifier'
    | 'tools.ozone.team.defs#roleTriage'
    | (string & {})
}

export type OutputSchema = ToolsOzoneTeamDefs.Member

export interface CallOptions {
  signal?: AbortSignal
  headers?: HeadersMap
  qp?: QueryParams
  encoding?: 'application/json'
}

export interface Response {
  success: boolean
  headers: HeadersMap
  data: OutputSchema
}

export class MemberAlreadyExistsError extends XRPCError {
  constructor(src: XRPCError) {
    super(src.status, src.error, src.message, src.headers, { cause: src })
  }
}

export function toKnownErr(e: any) {
  if (e instanceof XRPCError) {
    if (e.error === 'MemberAlreadyExists')
      return new MemberAlreadyExistsError(e)
  }

  return e
}

/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { HeadersMap, XRPCError } from '@gander-social-atproto/xrpc'
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'
import type * as ToolsOzoneSafelinkDefs from './defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'tools.ozone.safelink.updateRule'

export type QueryParams = {}

export interface InputSchema {
  /** The URL or domain to update the rule for */
  url: string
  pattern: ToolsOzoneSafelinkDefs.PatternType
  action: ToolsOzoneSafelinkDefs.ActionType
  reason: ToolsOzoneSafelinkDefs.ReasonType
  /** Optional comment about the update */
  comment?: string
  /** Optional DID to credit as the creator. Only respected for admin_token authentication. */
  createdBy?: string
}

export type OutputSchema = ToolsOzoneSafelinkDefs.Event

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

export class RuleNotFoundError extends XRPCError {
  constructor(src: XRPCError) {
    super(src.status, src.error, src.message, src.headers, { cause: src })
  }
}

export function toKnownErr(e: any) {
  if (e instanceof XRPCError) {
    if (e.error === 'RuleNotFound') return new RuleNotFoundError(e)
  }

  return e
}

/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { HeadersMap, XRPCError } from '@gander-social-atproto/xrpc'
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'
import type * as ToolsOzoneSetDefs from './defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'tools.ozone.set.getValues'

export type QueryParams = {
  name: string
  limit?: number
  cursor?: string
}
export type InputSchema = undefined

export interface OutputSchema {
  set: ToolsOzoneSetDefs.SetView
  values: string[]
  cursor?: string
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

export class SetNotFoundError extends XRPCError {
  constructor(src: XRPCError) {
    super(src.status, src.error, src.message, src.headers, { cause: src })
  }
}

export function toKnownErr(e: any) {
  if (e instanceof XRPCError) {
    if (e.error === 'SetNotFound') return new SetNotFoundError(e)
  }

  return e
}

/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { HeadersMap } from '@gander-social-atproto/xrpc'
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'
import type * as ToolsOzoneSignatureDefs from './defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'tools.ozone.signature.findCorrelation'

export type QueryParams = {
  dids: string[]
}
export type InputSchema = undefined

export interface OutputSchema {
  details: ToolsOzoneSignatureDefs.SigDetail[]
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

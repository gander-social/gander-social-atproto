/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { HeadersMap } from '@gander-social-atproto/xrpc'
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'
import type * as AppGndrVideoDefs from './defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.gndr.video.uploadVideo'

export type QueryParams = {}
export type InputSchema = string | Uint8Array | Blob

export interface OutputSchema {
  jobStatus: AppGndrVideoDefs.JobStatus
}

export interface CallOptions {
  signal?: AbortSignal
  headers?: HeadersMap
  qp?: QueryParams
  encoding?: 'video/mp4'
}

export interface Response {
  success: boolean
  headers: HeadersMap
  data: OutputSchema
}

export function toKnownErr(e: any) {
  return e
}

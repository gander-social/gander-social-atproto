/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { HeadersMap } from '@gander-social-atproto/xrpc'
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'
import type * as AppGndrVideoDefs from './defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.gndr.video.getJobStatus'

export type QueryParams = {
  jobId: string
}
export type InputSchema = undefined

export interface OutputSchema {
  jobStatus: AppGndrVideoDefs.JobStatus
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

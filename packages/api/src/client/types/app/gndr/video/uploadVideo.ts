/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { HeadersMap, XRPCError } from '@gander-social-atproto/xrpc'
import { type ValidationResult, BlobRef } from '@gander-social-atproto/lexicon'
import { CID } from 'multiformats/cid'
import { validate as _validate } from '../../../../lexicons'
import {
  type $Typed,
  is$typed as _is$typed,
  type OmitKey,
} from '../../../../util'
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

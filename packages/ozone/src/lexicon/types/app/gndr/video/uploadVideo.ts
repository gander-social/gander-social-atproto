/**
 * GENERATED CODE - DO NOT MODIFY
 */
import stream from 'node:stream'
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

export interface HandlerInput {
  encoding: 'video/mp4'
  body: stream.Readable
}

export interface HandlerSuccess {
  encoding: 'application/json'
  body: OutputSchema
  headers?: { [key: string]: string }
}

export interface HandlerError {
  status: number
  message?: string
}

export type HandlerOutput = HandlerError | HandlerSuccess

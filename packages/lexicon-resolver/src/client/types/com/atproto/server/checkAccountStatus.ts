/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { HeadersMap } from '@gander-social-atproto/xrpc'
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'

const is$typed = _is$typed,
  validate = _validate
const id = 'com.atproto.server.checkAccountStatus'

export type QueryParams = {}
export type InputSchema = undefined

export interface OutputSchema {
  activated: boolean
  validDid: boolean
  repoCommit: string
  repoRev: string
  repoBlocks: number
  indexedRecords: number
  privateStateValues: number
  expectedBlobs: number
  importedBlobs: number
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

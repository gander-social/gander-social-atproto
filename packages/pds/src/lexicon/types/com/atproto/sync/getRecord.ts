/**
 * GENERATED CODE - DO NOT MODIFY
 */
import stream from 'node:stream'
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'

const is$typed = _is$typed,
  validate = _validate
const id = 'com.atproto.sync.getRecord'

export type QueryParams = {
  /** The DID of the repo. */
  did: string
  collection: string
  /** Record Key */
  rkey: string
}
export type InputSchema = undefined
export type HandlerInput = void

export interface HandlerSuccess {
  encoding: 'application/vnd.ipld.car'
  body: Uint8Array | stream.Readable
  headers?: { [key: string]: string }
}

export interface HandlerError {
  status: number
  message?: string
  error?:
    | 'RecordNotFound'
    | 'RepoNotFound'
    | 'RepoTakendown'
    | 'RepoSuspended'
    | 'RepoDeactivated'
}

export type HandlerOutput = HandlerError | HandlerSuccess

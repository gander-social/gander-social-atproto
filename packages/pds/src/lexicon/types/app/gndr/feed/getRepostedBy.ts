/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'
import type * as AppGndrActorDefs from '../actor/defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.gndr.feed.getRepostedBy'

export type QueryParams = {
  /** Reference (AT-URI) of post record */
  uri: string
  /** If supplied, filters to reposts of specific version (by CID) of the post record. */
  cid?: string
  limit: number
  cursor?: string
}
export type InputSchema = undefined

export interface OutputSchema {
  uri: string
  cid?: string
  cursor?: string
  repostedBy: AppGndrActorDefs.ProfileView[]
}

export type HandlerInput = void

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

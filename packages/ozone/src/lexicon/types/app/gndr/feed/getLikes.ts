/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'
import type * as AppGndrActorDefs from '../actor/defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.gndr.feed.getLikes'

export type QueryParams = {
  /** AT-URI of the subject (eg, a post record). */
  uri: string
  /** CID of the subject record (aka, specific version of record), to filter likes. */
  cid?: string
  limit: number
  cursor?: string
}
export type InputSchema = undefined

export interface OutputSchema {
  uri: string
  cid?: string
  cursor?: string
  likes: Like[]
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

export interface Like {
  $type?: 'app.gndr.feed.getLikes#like'
  indexedAt: string
  createdAt: string
  actor: AppGndrActorDefs.ProfileView
}

const hashLike = 'like'

export function isLike<V>(v: V) {
  return is$typed(v, id, hashLike)
}

export function validateLike<V>(v: V) {
  return validate<Like & V>(v, id, hashLike)
}

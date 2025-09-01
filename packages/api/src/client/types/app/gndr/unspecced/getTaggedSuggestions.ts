/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { HeadersMap } from '@gander-social-atproto/xrpc'
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.gndr.unspecced.getTaggedSuggestions'

export type QueryParams = {}
export type InputSchema = undefined

export interface OutputSchema {
  suggestions: Suggestion[]
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

export interface Suggestion {
  $type?: 'app.gndr.unspecced.getTaggedSuggestions#suggestion'
  tag: string
  subjectType: 'actor' | 'feed' | (string & {})
  subject: string
}

const hashSuggestion = 'suggestion'

export function isSuggestion<V>(v: V) {
  return is$typed(v, id, hashSuggestion)
}

export function validateSuggestion<V>(v: V) {
  return validate<Suggestion & V>(v, id, hashSuggestion)
}

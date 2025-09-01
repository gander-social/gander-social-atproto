/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { HeadersMap } from '@gander-social-atproto/xrpc'
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.gndr.unspecced.getConfig'

export type QueryParams = {}
export type InputSchema = undefined

export interface OutputSchema {
  checkEmailConfirmed?: boolean
  liveNow?: LiveNowConfig[]
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

export interface LiveNowConfig {
  $type?: 'app.gndr.unspecced.getConfig#liveNowConfig'
  did: string
  domains: string[]
}

const hashLiveNowConfig = 'liveNowConfig'

export function isLiveNowConfig<V>(v: V) {
  return is$typed(v, id, hashLiveNowConfig)
}

export function validateLiveNowConfig<V>(v: V) {
  return validate<LiveNowConfig & V>(v, id, hashLiveNowConfig)
}

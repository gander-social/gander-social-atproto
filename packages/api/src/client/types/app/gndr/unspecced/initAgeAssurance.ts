/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { HeadersMap, XRPCError } from '@gander-social-atproto/xrpc'
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'
import type * as AppGndrUnspeccedDefs from './defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.gndr.unspecced.initAgeAssurance'

export type QueryParams = {}

export interface InputSchema {
  /** The user's email address to receive assurance instructions. */
  email: string
  /** The user's preferred language for communication during the assurance process. */
  language: string
  /** An ISO 3166-1 alpha-2 code of the user's location. */
  countryCode: string
}

export type OutputSchema = AppGndrUnspeccedDefs.AgeAssuranceState

export interface CallOptions {
  signal?: AbortSignal
  headers?: HeadersMap
  qp?: QueryParams
  encoding?: 'application/json'
}

export interface Response {
  success: boolean
  headers: HeadersMap
  data: OutputSchema
}

export class InvalidEmailError extends XRPCError {
  constructor(src: XRPCError) {
    super(src.status, src.error, src.message, src.headers, { cause: src })
  }
}

export class DidTooLongError extends XRPCError {
  constructor(src: XRPCError) {
    super(src.status, src.error, src.message, src.headers, { cause: src })
  }
}

export class InvalidInitiationError extends XRPCError {
  constructor(src: XRPCError) {
    super(src.status, src.error, src.message, src.headers, { cause: src })
  }
}

export function toKnownErr(e: any) {
  if (e instanceof XRPCError) {
    if (e.error === 'InvalidEmail') return new InvalidEmailError(e)
    if (e.error === 'DidTooLong') return new DidTooLongError(e)
    if (e.error === 'InvalidInitiation') return new InvalidInitiationError(e)
  }

  return e
}

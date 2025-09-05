/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { HeadersMap, XRPCError } from '@gander-social-atproto/xrpc'
import { validate as _validate } from '../../../../lexicons'
import { type $Typed, is$typed as _is$typed, } from '../../../../util'
import type * as AppGndrGraphDefs from './defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.gndr.graph.getRelationships'

export type QueryParams = {
  /** Primary account requesting relationships for. */
  actor: string
  /** List of 'other' accounts to be related back to the primary. */
  others?: string[]
}
export type InputSchema = undefined

export interface OutputSchema {
  actor?: string
  relationships: (
    | $Typed<AppGndrGraphDefs.Relationship>
    | $Typed<AppGndrGraphDefs.NotFoundActor>
    | { $type: string }
  )[]
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

export class ActorNotFoundError extends XRPCError {
  constructor(src: XRPCError) {
    super(src.status, src.error, src.message, src.headers, { cause: src })
  }
}

export function toKnownErr(e: any) {
  if (e instanceof XRPCError) {
    if (e.error === 'ActorNotFound') return new ActorNotFoundError(e)
  }

  return e
}

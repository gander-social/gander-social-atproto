/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { HeadersMap } from '@gander-social-atproto/xrpc'
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'
import type * as AppGndrGraphDefs from './defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.gndr.graph.getLists'

export type QueryParams = {
  /** The account (actor) to enumerate lists from. */
  actor: string
  limit?: number
  cursor?: string
  /** Optional filter by list purpose. If not specified, all supported types are returned. */
  purposes?: 'modlist' | 'curatelist' | (string & {})[]
}
export type InputSchema = undefined

export interface OutputSchema {
  cursor?: string
  lists: AppGndrGraphDefs.ListView[]
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

/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { HeadersMap } from '@gander-social-atproto/xrpc'
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'
import type * as AppGndrGraphDefs from './defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.gndr.graph.getListsWithMembership'

export type QueryParams = {
  /** The account (actor) to check for membership. */
  actor: string
  limit?: number
  cursor?: string
  /** Optional filter by list purpose. If not specified, all supported types are returned. */
  purposes?: 'modlist' | 'curatelist' | (string & {})[]
}
export type InputSchema = undefined

export interface OutputSchema {
  cursor?: string
  listsWithMembership: ListWithMembership[]
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

/** A list and an optional list item indicating membership of a target user to that list. */
export interface ListWithMembership {
  $type?: 'app.gndr.graph.getListsWithMembership#listWithMembership'
  list: AppGndrGraphDefs.ListView
  listItem?: AppGndrGraphDefs.ListItemView
}

const hashListWithMembership = 'listWithMembership'

export function isListWithMembership<V>(v: V) {
  return is$typed(v, id, hashListWithMembership)
}

export function validateListWithMembership<V>(v: V) {
  return validate<ListWithMembership & V>(v, id, hashListWithMembership)
}

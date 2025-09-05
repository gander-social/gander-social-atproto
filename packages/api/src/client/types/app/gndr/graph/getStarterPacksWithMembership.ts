/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { HeadersMap } from '@gander-social-atproto/xrpc'
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'
import type * as AppGndrGraphDefs from './defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.gndr.graph.getStarterPacksWithMembership'

export type QueryParams = {
  /** The account (actor) to check for membership. */
  actor: string
  limit?: number
  cursor?: string
}
export type InputSchema = undefined

export interface OutputSchema {
  cursor?: string
  starterPacksWithMembership: StarterPackWithMembership[]
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

/** A starter pack and an optional list item indicating membership of a target user to that starter pack. */
export interface StarterPackWithMembership {
  $type?: 'app.gndr.graph.getStarterPacksWithMembership#starterPackWithMembership'
  starterPack: AppGndrGraphDefs.StarterPackView
  listItem?: AppGndrGraphDefs.ListItemView
}

const hashStarterPackWithMembership = 'starterPackWithMembership'

export function isStarterPackWithMembership<V>(v: V) {
  return is$typed(v, id, hashStarterPackWithMembership)
}

export function validateStarterPackWithMembership<V>(v: V) {
  return validate<StarterPackWithMembership & V>(
    v,
    id,
    hashStarterPackWithMembership,
  )
}

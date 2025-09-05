/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'
import type * as ComAtprotoLabelDefs from '../../../com/atproto/label/defs.js'
import type * as AppGndrActorDefs from '../actor/defs.js'
import type * as AppGndrRichtextFacet from '../richtext/facet.js'
import type * as AppGndrFeedDefs from '../feed/defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.gndr.graph.defs'

export interface ListViewBasic {
  $type?: 'app.gndr.graph.defs#listViewBasic'
  uri: string
  cid: string
  name: string
  purpose: ListPurpose
  avatar?: string
  listItemCount?: number
  labels?: ComAtprotoLabelDefs.Label[]
  viewer?: ListViewerState
  indexedAt?: string
}

const hashListViewBasic = 'listViewBasic'

export function isListViewBasic<V>(v: V) {
  return is$typed(v, id, hashListViewBasic)
}

export function validateListViewBasic<V>(v: V) {
  return validate<ListViewBasic & V>(v, id, hashListViewBasic)
}

export interface ListView {
  $type?: 'app.gndr.graph.defs#listView'
  uri: string
  cid: string
  creator: AppGndrActorDefs.ProfileView
  name: string
  purpose: ListPurpose
  description?: string
  descriptionFacets?: AppGndrRichtextFacet.Main[]
  avatar?: string
  listItemCount?: number
  labels?: ComAtprotoLabelDefs.Label[]
  viewer?: ListViewerState
  indexedAt: string
}

const hashListView = 'listView'

export function isListView<V>(v: V) {
  return is$typed(v, id, hashListView)
}

export function validateListView<V>(v: V) {
  return validate<ListView & V>(v, id, hashListView)
}

export interface ListItemView {
  $type?: 'app.gndr.graph.defs#listItemView'
  uri: string
  subject: AppGndrActorDefs.ProfileView
}

const hashListItemView = 'listItemView'

export function isListItemView<V>(v: V) {
  return is$typed(v, id, hashListItemView)
}

export function validateListItemView<V>(v: V) {
  return validate<ListItemView & V>(v, id, hashListItemView)
}

export interface StarterPackView {
  $type?: 'app.gndr.graph.defs#starterPackView'
  uri: string
  cid: string
  record: { [_ in string]: unknown }
  creator: AppGndrActorDefs.ProfileViewBasic
  list?: ListViewBasic
  listItemsSample?: ListItemView[]
  feeds?: AppGndrFeedDefs.GeneratorView[]
  joinedWeekCount?: number
  joinedAllTimeCount?: number
  labels?: ComAtprotoLabelDefs.Label[]
  indexedAt: string
}

const hashStarterPackView = 'starterPackView'

export function isStarterPackView<V>(v: V) {
  return is$typed(v, id, hashStarterPackView)
}

export function validateStarterPackView<V>(v: V) {
  return validate<StarterPackView & V>(v, id, hashStarterPackView)
}

export interface StarterPackViewBasic {
  $type?: 'app.gndr.graph.defs#starterPackViewBasic'
  uri: string
  cid: string
  record: { [_ in string]: unknown }
  creator: AppGndrActorDefs.ProfileViewBasic
  listItemCount?: number
  joinedWeekCount?: number
  joinedAllTimeCount?: number
  labels?: ComAtprotoLabelDefs.Label[]
  indexedAt: string
}

const hashStarterPackViewBasic = 'starterPackViewBasic'

export function isStarterPackViewBasic<V>(v: V) {
  return is$typed(v, id, hashStarterPackViewBasic)
}

export function validateStarterPackViewBasic<V>(v: V) {
  return validate<StarterPackViewBasic & V>(v, id, hashStarterPackViewBasic)
}

export type ListPurpose =
  | 'app.gndr.graph.defs#modlist'
  | 'app.gndr.graph.defs#curatelist'
  | 'app.gndr.graph.defs#referencelist'
  | (string & {})

/** A list of actors to apply an aggregate moderation action (mute/block) on. */
export const MODLIST = `${id}#modlist`
/** A list of actors used for curation purposes such as list feeds or interaction gating. */
export const CURATELIST = `${id}#curatelist`
/** A list of actors used for only for reference purposes such as within a starter pack. */
export const REFERENCELIST = `${id}#referencelist`

export interface ListViewerState {
  $type?: 'app.gndr.graph.defs#listViewerState'
  muted?: boolean
  blocked?: string
}

const hashListViewerState = 'listViewerState'

export function isListViewerState<V>(v: V) {
  return is$typed(v, id, hashListViewerState)
}

export function validateListViewerState<V>(v: V) {
  return validate<ListViewerState & V>(v, id, hashListViewerState)
}

/** indicates that a handle or DID could not be resolved */
export interface NotFoundActor {
  $type?: 'app.gndr.graph.defs#notFoundActor'
  actor: string
  notFound: true
}

const hashNotFoundActor = 'notFoundActor'

export function isNotFoundActor<V>(v: V) {
  return is$typed(v, id, hashNotFoundActor)
}

export function validateNotFoundActor<V>(v: V) {
  return validate<NotFoundActor & V>(v, id, hashNotFoundActor)
}

/** lists the bi-directional graph relationships between one actor (not indicated in the object), and the target actors (the DID included in the object) */
export interface Relationship {
  $type?: 'app.gndr.graph.defs#relationship'
  did: string
  /** if the actor follows this DID, this is the AT-URI of the follow record */
  following?: string
  /** if the actor is followed by this DID, contains the AT-URI of the follow record */
  followedBy?: string
}

const hashRelationship = 'relationship'

export function isRelationship<V>(v: V) {
  return is$typed(v, id, hashRelationship)
}

export function validateRelationship<V>(v: V) {
  return validate<Relationship & V>(v, id, hashRelationship)
}

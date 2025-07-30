/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { type ValidationResult, BlobRef } from '@gander-social-atproto/lexicon'
import { CID } from 'multiformats/cid'
import { validate as _validate } from '../../../../lexicons'
import {
  type $Typed,
  is$typed as _is$typed,
  type OmitKey,
} from '../../../../util'
import type * as ComAtprotoRepoStrongRef from '../../../com/atproto/repo/strongRef.js'
import type * as AppGndrFeedDefs from '../feed/defs.js'
import type * as AppGndrGraphDefs from '../graph/defs.js'
import type * as AppGndrLabelerDefs from '../labeler/defs.js'
import type * as AppGndrActorDefs from '../actor/defs.js'
import type * as ComAtprotoLabelDefs from '../../../com/atproto/label/defs.js'
import type * as AppGndrEmbedImages from './images.js'
import type * as AppGndrEmbedVideo from './video.js'
import type * as AppGndrEmbedExternal from './external.js'
import type * as AppGndrEmbedRecordWithMedia from './recordWithMedia.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.gndr.embed.record'

export interface Main {
  $type?: 'app.gndr.embed.record'
  record: ComAtprotoRepoStrongRef.Main
}

const hashMain = 'main'

export function isMain<V>(v: V) {
  return is$typed(v, id, hashMain)
}

export function validateMain<V>(v: V) {
  return validate<Main & V>(v, id, hashMain)
}

export interface View {
  $type?: 'app.gndr.embed.record#view'
  record:
    | $Typed<ViewRecord>
    | $Typed<ViewNotFound>
    | $Typed<ViewBlocked>
    | $Typed<ViewDetached>
    | $Typed<AppGndrFeedDefs.GeneratorView>
    | $Typed<AppGndrGraphDefs.ListView>
    | $Typed<AppGndrLabelerDefs.LabelerView>
    | $Typed<AppGndrGraphDefs.StarterPackViewBasic>
    | { $type: string }
}

const hashView = 'view'

export function isView<V>(v: V) {
  return is$typed(v, id, hashView)
}

export function validateView<V>(v: V) {
  return validate<View & V>(v, id, hashView)
}

export interface ViewRecord {
  $type?: 'app.gndr.embed.record#viewRecord'
  uri: string
  cid: string
  author: AppGndrActorDefs.ProfileViewBasic
  /** The record data itself. */
  value: { [_ in string]: unknown }
  labels?: ComAtprotoLabelDefs.Label[]
  replyCount?: number
  repostCount?: number
  likeCount?: number
  quoteCount?: number
  embeds?: (
    | $Typed<AppGndrEmbedImages.View>
    | $Typed<AppGndrEmbedVideo.View>
    | $Typed<AppGndrEmbedExternal.View>
    | $Typed<View>
    | $Typed<AppGndrEmbedRecordWithMedia.View>
    | { $type: string }
  )[]
  indexedAt: string
}

const hashViewRecord = 'viewRecord'

export function isViewRecord<V>(v: V) {
  return is$typed(v, id, hashViewRecord)
}

export function validateViewRecord<V>(v: V) {
  return validate<ViewRecord & V>(v, id, hashViewRecord)
}

export interface ViewNotFound {
  $type?: 'app.gndr.embed.record#viewNotFound'
  uri: string
  notFound: true
}

const hashViewNotFound = 'viewNotFound'

export function isViewNotFound<V>(v: V) {
  return is$typed(v, id, hashViewNotFound)
}

export function validateViewNotFound<V>(v: V) {
  return validate<ViewNotFound & V>(v, id, hashViewNotFound)
}

export interface ViewBlocked {
  $type?: 'app.gndr.embed.record#viewBlocked'
  uri: string
  blocked: true
  author: AppGndrFeedDefs.BlockedAuthor
}

const hashViewBlocked = 'viewBlocked'

export function isViewBlocked<V>(v: V) {
  return is$typed(v, id, hashViewBlocked)
}

export function validateViewBlocked<V>(v: V) {
  return validate<ViewBlocked & V>(v, id, hashViewBlocked)
}

export interface ViewDetached {
  $type?: 'app.gndr.embed.record#viewDetached'
  uri: string
  detached: true
}

const hashViewDetached = 'viewDetached'

export function isViewDetached<V>(v: V) {
  return is$typed(v, id, hashViewDetached)
}

export function validateViewDetached<V>(v: V) {
  return validate<ViewDetached & V>(v, id, hashViewDetached)
}

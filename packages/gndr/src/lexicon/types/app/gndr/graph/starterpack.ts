/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'
import type * as AppGndrRichtextFacet from '../richtext/facet.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.gndr.graph.starterpack'

export interface Record {
  $type: 'app.gndr.graph.starterpack'
  /** Display name for starter pack; can not be empty. */
  name: string
  description?: string
  descriptionFacets?: AppGndrRichtextFacet.Main[]
  /** Reference (AT-URI) to the list record. */
  list: string
  feeds?: FeedItem[]
  createdAt: string
  [k: string]: unknown
}

const hashRecord = 'main'

export function isRecord<V>(v: V) {
  return is$typed(v, id, hashRecord)
}

export function validateRecord<V>(v: V) {
  return validate<Record & V>(v, id, hashRecord, true)
}

export interface FeedItem {
  $type?: 'app.gndr.graph.starterpack#feedItem'
  uri: string
}

const hashFeedItem = 'feedItem'

export function isFeedItem<V>(v: V) {
  return is$typed(v, id, hashFeedItem)
}

export function validateFeedItem<V>(v: V) {
  return validate<FeedItem & V>(v, id, hashFeedItem)
}

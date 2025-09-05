/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { BlobRef } from '@gander-social-atproto/lexicon'
import { validate as _validate } from '../../../../lexicons'
import { type $Typed, is$typed as _is$typed, } from '../../../../util'
import type * as AppGndrRichtextFacet from '../richtext/facet.js'
import type * as ComAtprotoLabelDefs from '../../../com/atproto/label/defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.gndr.feed.generator'

export interface Record {
  $type: 'app.gndr.feed.generator'
  did: string
  displayName: string
  description?: string
  descriptionFacets?: AppGndrRichtextFacet.Main[]
  avatar?: BlobRef
  /** Declaration that a feed accepts feedback interactions from a client through app.gndr.feed.sendInteractions */
  acceptsInteractions?: boolean
  labels?: $Typed<ComAtprotoLabelDefs.SelfLabels> | { $type: string }
  contentMode?:
    | 'app.gndr.feed.defs#contentModeUnspecified'
    | 'app.gndr.feed.defs#contentModeVideo'
    | (string & {})
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

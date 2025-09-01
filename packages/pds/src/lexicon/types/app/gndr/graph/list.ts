/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { BlobRef } from '@gander-social-atproto/lexicon'
import { validate as _validate } from '../../../../lexicons'
import { type $Typed, is$typed as _is$typed, } from '../../../../util'
import type * as AppGndrGraphDefs from './defs.js'
import type * as AppGndrRichtextFacet from '../richtext/facet.js'
import type * as ComAtprotoLabelDefs from '../../../com/atproto/label/defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.gndr.graph.list'

export interface Record {
  $type: 'app.gndr.graph.list'
  purpose: AppGndrGraphDefs.ListPurpose
  /** Display name for list; can not be empty. */
  name: string
  description?: string
  descriptionFacets?: AppGndrRichtextFacet.Main[]
  avatar?: BlobRef
  labels?: $Typed<ComAtprotoLabelDefs.SelfLabels> | { $type: string }
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

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
import type * as AppGndrEmbedRecord from './record.js'
import type * as AppGndrEmbedImages from './images.js'
import type * as AppGndrEmbedVideo from './video.js'
import type * as AppGndrEmbedExternal from './external.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.gndr.embed.recordWithMedia'

export interface Main {
  $type?: 'app.gndr.embed.recordWithMedia'
  record: AppGndrEmbedRecord.Main
  media:
    | $Typed<AppGndrEmbedImages.Main>
    | $Typed<AppGndrEmbedVideo.Main>
    | $Typed<AppGndrEmbedExternal.Main>
    | { $type: string }
}

const hashMain = 'main'

export function isMain<V>(v: V) {
  return is$typed(v, id, hashMain)
}

export function validateMain<V>(v: V) {
  return validate<Main & V>(v, id, hashMain)
}

export interface View {
  $type?: 'app.gndr.embed.recordWithMedia#view'
  record: AppGndrEmbedRecord.View
  media:
    | $Typed<AppGndrEmbedImages.View>
    | $Typed<AppGndrEmbedVideo.View>
    | $Typed<AppGndrEmbedExternal.View>
    | { $type: string }
}

const hashView = 'view'

export function isView<V>(v: V) {
  return is$typed(v, id, hashView)
}

export function validateView<V>(v: V) {
  return validate<View & V>(v, id, hashView)
}

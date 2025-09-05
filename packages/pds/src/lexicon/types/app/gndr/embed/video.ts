/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { BlobRef } from '@gander-social-atproto/lexicon'
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'
import type * as AppGndrEmbedDefs from './defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.gndr.embed.video'

export interface Main {
  $type?: 'app.gndr.embed.video'
  /** The mp4 video file. May be up to 100mb, formerly limited to 50mb. */
  video: BlobRef
  captions?: Caption[]
  /** Alt text description of the video, for accessibility. */
  alt?: string
  aspectRatio?: AppGndrEmbedDefs.AspectRatio
}

const hashMain = 'main'

export function isMain<V>(v: V) {
  return is$typed(v, id, hashMain)
}

export function validateMain<V>(v: V) {
  return validate<Main & V>(v, id, hashMain)
}

export interface Caption {
  $type?: 'app.gndr.embed.video#caption'
  lang: string
  file: BlobRef
}

const hashCaption = 'caption'

export function isCaption<V>(v: V) {
  return is$typed(v, id, hashCaption)
}

export function validateCaption<V>(v: V) {
  return validate<Caption & V>(v, id, hashCaption)
}

export interface View {
  $type?: 'app.gndr.embed.video#view'
  cid: string
  playlist: string
  thumbnail?: string
  alt?: string
  aspectRatio?: AppGndrEmbedDefs.AspectRatio
}

const hashView = 'view'

export function isView<V>(v: V) {
  return is$typed(v, id, hashView)
}

export function validateView<V>(v: V) {
  return validate<View & V>(v, id, hashView)
}

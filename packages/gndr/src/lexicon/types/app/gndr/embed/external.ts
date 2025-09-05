/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { BlobRef } from '@gander-social-atproto/lexicon'
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.gndr.embed.external'

/** A representation of some externally linked content (eg, a URL and 'card'), embedded in a Gander record (eg, a post). */
export interface Main {
  $type?: 'app.gndr.embed.external'
  external: External
}

const hashMain = 'main'

export function isMain<V>(v: V) {
  return is$typed(v, id, hashMain)
}

export function validateMain<V>(v: V) {
  return validate<Main & V>(v, id, hashMain)
}

export interface External {
  $type?: 'app.gndr.embed.external#external'
  uri: string
  title: string
  description: string
  thumb?: BlobRef
}

const hashExternal = 'external'

export function isExternal<V>(v: V) {
  return is$typed(v, id, hashExternal)
}

export function validateExternal<V>(v: V) {
  return validate<External & V>(v, id, hashExternal)
}

export interface View {
  $type?: 'app.gndr.embed.external#view'
  external: ViewExternal
}

const hashView = 'view'

export function isView<V>(v: V) {
  return is$typed(v, id, hashView)
}

export function validateView<V>(v: V) {
  return validate<View & V>(v, id, hashView)
}

export interface ViewExternal {
  $type?: 'app.gndr.embed.external#viewExternal'
  uri: string
  title: string
  description: string
  thumb?: string
}

const hashViewExternal = 'viewExternal'

export function isViewExternal<V>(v: V) {
  return is$typed(v, id, hashViewExternal)
}

export function validateViewExternal<V>(v: V) {
  return validate<ViewExternal & V>(v, id, hashViewExternal)
}

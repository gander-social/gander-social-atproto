/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { validate as _validate } from '../../../../lexicons'
import { type $Typed, is$typed as _is$typed, } from '../../../../util'
import type * as AppGndrEmbedExternal from '../embed/external.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.gndr.actor.status'

export interface Record {
  $type: 'app.gndr.actor.status'
  /** The status for the account. */
  status: 'app.gndr.actor.status#live' | (string & {})
  embed?: $Typed<AppGndrEmbedExternal.Main> | { $type: string }
  /** The duration of the status in minutes. Applications can choose to impose minimum and maximum limits. */
  durationMinutes?: number
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

/** Advertises an account as currently offering live content. */
export const LIVE = `${id}#live`

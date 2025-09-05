/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.gndr.notification.declaration'

export interface Record {
  $type: 'app.gndr.notification.declaration'
  /** A declaration of the user's preference for allowing activity subscriptions from other users. Absence of a record implies 'followers'. */
  allowSubscriptions: 'followers' | 'mutuals' | 'none' | (string & {})
  [k: string]: unknown
}

const hashRecord = 'main'

export function isRecord<V>(v: V) {
  return is$typed(v, id, hashRecord)
}

export function validateRecord<V>(v: V) {
  return validate<Record & V>(v, id, hashRecord, true)
}

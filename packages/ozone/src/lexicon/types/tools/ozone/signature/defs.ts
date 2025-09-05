/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'

const is$typed = _is$typed,
  validate = _validate
const id = 'tools.ozone.signature.defs'

export interface SigDetail {
  $type?: 'tools.ozone.signature.defs#sigDetail'
  property: string
  value: string
}

const hashSigDetail = 'sigDetail'

export function isSigDetail<V>(v: V) {
  return is$typed(v, id, hashSigDetail)
}

export function validateSigDetail<V>(v: V) {
  return validate<SigDetail & V>(v, id, hashSigDetail)
}

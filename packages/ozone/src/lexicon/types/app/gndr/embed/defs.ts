/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.gndr.embed.defs'

/** width:height represents an aspect ratio. It may be approximate, and may not correspond to absolute dimensions in any given unit. */
export interface AspectRatio {
  $type?: 'app.gndr.embed.defs#aspectRatio'
  width: number
  height: number
}

const hashAspectRatio = 'aspectRatio'

export function isAspectRatio<V>(v: V) {
  return is$typed(v, id, hashAspectRatio)
}

export function validateAspectRatio<V>(v: V) {
  return validate<AspectRatio & V>(v, id, hashAspectRatio)
}

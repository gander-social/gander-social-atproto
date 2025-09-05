/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'
import type * as AppGndrActorDefs from '../../../app/gndr/actor/defs.js'
import type * as ComAtprotoLabelDefs from '../../../com/atproto/label/defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'chat.gndr.actor.defs'

export interface ProfileViewBasic {
  $type?: 'chat.gndr.actor.defs#profileViewBasic'
  did: string
  handle: string
  displayName?: string
  avatar?: string
  associated?: AppGndrActorDefs.ProfileAssociated
  viewer?: AppGndrActorDefs.ViewerState
  labels?: ComAtprotoLabelDefs.Label[]
  /** Set to true when the actor cannot actively participate in conversations */
  chatDisabled?: boolean
  verification?: AppGndrActorDefs.VerificationState
}

const hashProfileViewBasic = 'profileViewBasic'

export function isProfileViewBasic<V>(v: V) {
  return is$typed(v, id, hashProfileViewBasic)
}

export function validateProfileViewBasic<V>(v: V) {
  return validate<ProfileViewBasic & V>(v, id, hashProfileViewBasic)
}

/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'
import type * as AppGndrActorDefs from '../../../app/gndr/actor/defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'tools.ozone.team.defs'

export interface Member {
  $type?: 'tools.ozone.team.defs#member'
  did: string
  disabled?: boolean
  profile?: AppGndrActorDefs.ProfileViewDetailed
  createdAt?: string
  updatedAt?: string
  lastUpdatedBy?: string
  role:
    | 'lex:tools.ozone.team.defs#roleAdmin'
    | 'lex:tools.ozone.team.defs#roleModerator'
    | 'lex:tools.ozone.team.defs#roleTriage'
    | 'lex:tools.ozone.team.defs#roleVerifier'
    | (string & {})
}

const hashMember = 'member'

export function isMember<V>(v: V) {
  return is$typed(v, id, hashMember)
}

export function validateMember<V>(v: V) {
  return validate<Member & V>(v, id, hashMember)
}

/** Admin role. Highest level of access, can perform all actions. */
export const ROLEADMIN = `${id}#roleAdmin`
/** Moderator role. Can perform most actions. */
export const ROLEMODERATOR = `${id}#roleModerator`
/** Triage role. Mostly intended for monitoring and escalating issues. */
export const ROLETRIAGE = `${id}#roleTriage`
/** Verifier role. Only allowed to issue verifications. */
export const ROLEVERIFIER = `${id}#roleVerifier`

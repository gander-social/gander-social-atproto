/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.gndr.notification.registerPush'

export type QueryParams = {}

export interface InputSchema {
  serviceDid: string
  token: string
  platform: 'ios' | 'android' | 'web' | (string & {})
  appId: string
  /** Set to true when the actor is age restricted */
  ageRestricted?: boolean
}

export interface HandlerInput {
  encoding: 'application/json'
  body: InputSchema
}

export interface HandlerError {
  status: number
  message?: string
}

export type HandlerOutput = HandlerError | void

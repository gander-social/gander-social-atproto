/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'
import type * as AppGndrNotificationDefs from './defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.gndr.notification.putActivitySubscription'

export type QueryParams = {}

export interface InputSchema {
  subject: string
  activitySubscription: AppGndrNotificationDefs.ActivitySubscription
}

export interface OutputSchema {
  subject: string
  activitySubscription?: AppGndrNotificationDefs.ActivitySubscription
}

export interface HandlerInput {
  encoding: 'application/json'
  body: InputSchema
}

export interface HandlerSuccess {
  encoding: 'application/json'
  body: OutputSchema
  headers?: { [key: string]: string }
}

export interface HandlerError {
  status: number
  message?: string
}

export type HandlerOutput = HandlerError | HandlerSuccess

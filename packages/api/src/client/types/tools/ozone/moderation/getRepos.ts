/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { HeadersMap } from '@gander-social-atproto/xrpc'
import { validate as _validate } from '../../../../lexicons'
import { type $Typed, is$typed as _is$typed, } from '../../../../util'
import type * as ToolsOzoneModerationDefs from './defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'tools.ozone.moderation.getRepos'

export type QueryParams = {
  dids: string[]
}
export type InputSchema = undefined

export interface OutputSchema {
  repos: (
    | $Typed<ToolsOzoneModerationDefs.RepoViewDetail>
    | $Typed<ToolsOzoneModerationDefs.RepoViewNotFound>
    | { $type: string }
  )[]
}

export interface CallOptions {
  signal?: AbortSignal
  headers?: HeadersMap
}

export interface Response {
  success: boolean
  headers: HeadersMap
  data: OutputSchema
}

export function toKnownErr(e: any) {
  return e
}

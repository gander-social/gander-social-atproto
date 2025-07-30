import { FetchHandlerObject } from '@gander-social-atproto/xrpc'

export interface SessionManager extends FetchHandlerObject {
  readonly did?: string
}

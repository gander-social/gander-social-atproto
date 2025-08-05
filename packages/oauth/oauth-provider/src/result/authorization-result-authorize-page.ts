import type {
  ScopeDetail,
  Session,
} from '@gander-social-atproto/oauth-provider-api'
import { OAuthAuthorizationRequestParameters } from '@gander-social-atproto/oauth-types'
import { Client } from '../client/client.js'
import { RequestUri } from '../request/request-uri.js'

export type AuthorizationResultAuthorizePage = {
  issuer: string
  client: Client
  parameters: OAuthAuthorizationRequestParameters

  uri: RequestUri
  scopeDetails?: ScopeDetail[]
  sessions: readonly Session[]
}

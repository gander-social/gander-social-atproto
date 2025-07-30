import { OAuthAuthorizationRequestParameters } from '@gander-social-atproto/oauth-types'
import { AuthorizationRedirectParameters } from './authorization-redirect-parameters.js'

export type AuthorizationResultRedirect = {
  issuer: string
  parameters: OAuthAuthorizationRequestParameters
  redirect: AuthorizationRedirectParameters
}

import { Jwks } from '@gander-social-atproto/jwk'
import { OAuthClientMetadata } from '@gander-social-atproto/oauth-types'

export type { OAuthClientMetadata }

export type ClientData = {
  metadata: OAuthClientMetadata
  jwks?: Jwks
}

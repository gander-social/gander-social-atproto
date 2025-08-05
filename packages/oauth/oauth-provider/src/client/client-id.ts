import {
  OAuthClientId,
  oauthClientIdSchema,
} from '@gander-social-atproto/oauth-types'

export type ClientId = OAuthClientId
export const clientIdSchema = oauthClientIdSchema

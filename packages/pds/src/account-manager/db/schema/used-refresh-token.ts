import { Selectable } from 'kysely'
import { RefreshToken } from '@gander-social-atproto/oauth-provider'

export interface UsedRefreshToken {
  tokenId: number
  refreshToken: RefreshToken
}

export type UsedRefreshTokenEntry = Selectable<UsedRefreshToken>

export const tableName = 'used_refresh_token'

export type PartialDB = { [tableName]: UsedRefreshToken }

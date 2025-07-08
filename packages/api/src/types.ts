import { AppGndrActorDefs } from './client'
import { ModerationPrefs } from './moderation/types'

/**
 * Supported proxy targets
 */
type UnknownServiceType = string & NonNullable<unknown>
export type AtprotoServiceType = 'atproto_labeler' | UnknownServiceType

/**
 * Used by the PersistSessionHandler to indicate what change occurred
 */
export type AtpSessionEvent =
  | 'create'
  | 'create-failed'
  | 'update'
  | 'expired'
  | 'network-error'

/**
 * Used by AtpAgent to store active sessions
 */
export interface AtpSessionData {
  refreshJwt: string
  accessJwt: string
  handle: string
  did: string
  email?: string
  emailConfirmed?: boolean
  emailAuthFactor?: boolean
  active: boolean
  status?: string
}

/**
 * Handler signature passed to AtpAgent to store session data
 */
export type AtpPersistSessionHandler = (
  evt: AtpSessionEvent,
  session: AtpSessionData | undefined,
) => void | Promise<void>

/**
 * AtpAgent login() opts
 */
export interface AtpAgentLoginOpts {
  identifier: string
  password: string
  authFactorToken?: string | undefined
  allowTakendown?: boolean
}

/**
 * AtpAgent global config opts
 */
export interface AtpAgentGlobalOpts {
  appLabelers?: string[]
}

/**
 * Gander feed view preferences
 */

export interface GndrFeedViewPreference {
  hideReplies: boolean
  hideRepliesByUnfollowed: boolean
  hideRepliesByLikeCount: number
  hideReposts: boolean
  hideQuotePosts: boolean
  [key: string]: any
}

/**
 * Gander thread view preferences
 */
export interface GndrThreadViewPreference {
  sort: string
  prioritizeFollowedUsers: boolean
  [key: string]: any
}

/**
 * Gander interests preferences
 */
export interface GndrInterestsPreference {
  tags: string[]
  [key: string]: any
}

/**
 * Gander preferences
 */
export interface GndrPreferences {
  /**
   * @deprecated use `savedFeeds`
   */
  feeds: {
    saved?: string[]
    pinned?: string[]
  }
  savedFeeds: AppGndrActorDefs.SavedFeed[]
  feedViewPrefs: Record<string, GndrFeedViewPreference>
  threadViewPrefs: GndrThreadViewPreference
  moderationPrefs: ModerationPrefs
  birthDate: Date | undefined
  interests: GndrInterestsPreference
  gndrAppState: {
    queuedNudges: string[]
    activeProgressGuide: AppGndrActorDefs.GndrAppProgressGuide | undefined
    nuxs: AppGndrActorDefs.Nux[]
  }
  postInteractionSettings: AppGndrActorDefs.PostInteractionSettingsPref
  verificationPrefs: AppGndrActorDefs.VerificationPrefs
}

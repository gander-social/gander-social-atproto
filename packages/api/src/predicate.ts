import { AppGndrActorDefs, AppGndrActorProfile } from './client/index'
import { asPredicate } from './client/util'

export const isValidProfile = asPredicate(AppGndrActorProfile.validateRecord)
export const isValidAdultContentPref = asPredicate(
  AppGndrActorDefs.validateAdultContentPref,
)
export const isValidGndrAppStatePref = asPredicate(
  AppGndrActorDefs.validateGndrAppStatePref,
)
export const isValidContentLabelPref = asPredicate(
  AppGndrActorDefs.validateContentLabelPref,
)
export const isValidFeedViewPref = asPredicate(
  AppGndrActorDefs.validateFeedViewPref,
)
export const isValidHiddenPostsPref = asPredicate(
  AppGndrActorDefs.validateHiddenPostsPref,
)
export const isValidInterestsPref = asPredicate(
  AppGndrActorDefs.validateInterestsPref,
)
export const isValidLabelersPref = asPredicate(
  AppGndrActorDefs.validateLabelersPref,
)
export const isValidMutedWordsPref = asPredicate(
  AppGndrActorDefs.validateMutedWordsPref,
)
export const isValidPersonalDetailsPref = asPredicate(
  AppGndrActorDefs.validatePersonalDetailsPref,
)
export const isValidPostInteractionSettingsPref = asPredicate(
  AppGndrActorDefs.validatePostInteractionSettingsPref,
)
export const isValidSavedFeedsPref = asPredicate(
  AppGndrActorDefs.validateSavedFeedsPref,
)
export const isValidSavedFeedsPrefV2 = asPredicate(
  AppGndrActorDefs.validateSavedFeedsPrefV2,
)
export const isValidThreadViewPref = asPredicate(
  AppGndrActorDefs.validateThreadViewPref,
)
export const isValidVerificationPrefs = asPredicate(
  AppGndrActorDefs.validateVerificationPrefs,
)

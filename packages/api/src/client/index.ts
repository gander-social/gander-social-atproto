/**
 * GENERATED CODE - DO NOT MODIFY
 */
import {
  XrpcClient,
  type FetchHandler,
  type FetchHandlerOptions,
} from '@gander-social-atproto/xrpc'
import { schemas } from './lexicons.js'
import { CID } from 'multiformats/cid'
import { type OmitKey, type Un$Typed } from './util.js'
import * as AppGndrActorDefs from './types/app/gndr/actor/defs.js'
import * as AppGndrActorGetPreferences from './types/app/gndr/actor/getPreferences.js'
import * as AppGndrActorGetProfile from './types/app/gndr/actor/getProfile.js'
import * as AppGndrActorGetProfiles from './types/app/gndr/actor/getProfiles.js'
import * as AppGndrActorGetSuggestions from './types/app/gndr/actor/getSuggestions.js'
import * as AppGndrActorProfile from './types/app/gndr/actor/profile.js'
import * as AppGndrActorPutPreferences from './types/app/gndr/actor/putPreferences.js'
import * as AppGndrActorSearchActors from './types/app/gndr/actor/searchActors.js'
import * as AppGndrActorSearchActorsTypeahead from './types/app/gndr/actor/searchActorsTypeahead.js'
import * as AppGndrActorStatus from './types/app/gndr/actor/status.js'
import * as AppGndrBookmarkCreateBookmark from './types/app/gndr/bookmark/createBookmark.js'
import * as AppGndrBookmarkDefs from './types/app/gndr/bookmark/defs.js'
import * as AppGndrBookmarkDeleteBookmark from './types/app/gndr/bookmark/deleteBookmark.js'
import * as AppGndrBookmarkGetBookmarks from './types/app/gndr/bookmark/getBookmarks.js'
import * as AppGndrEmbedDefs from './types/app/gndr/embed/defs.js'
import * as AppGndrEmbedExternal from './types/app/gndr/embed/external.js'
import * as AppGndrEmbedImages from './types/app/gndr/embed/images.js'
import * as AppGndrEmbedRecord from './types/app/gndr/embed/record.js'
import * as AppGndrEmbedRecordWithMedia from './types/app/gndr/embed/recordWithMedia.js'
import * as AppGndrEmbedVideo from './types/app/gndr/embed/video.js'
import * as AppGndrFeedDefs from './types/app/gndr/feed/defs.js'
import * as AppGndrFeedDescribeFeedGenerator from './types/app/gndr/feed/describeFeedGenerator.js'
import * as AppGndrFeedGenerator from './types/app/gndr/feed/generator.js'
import * as AppGndrFeedGetActorFeeds from './types/app/gndr/feed/getActorFeeds.js'
import * as AppGndrFeedGetActorLikes from './types/app/gndr/feed/getActorLikes.js'
import * as AppGndrFeedGetAuthorFeed from './types/app/gndr/feed/getAuthorFeed.js'
import * as AppGndrFeedGetFeed from './types/app/gndr/feed/getFeed.js'
import * as AppGndrFeedGetFeedGenerator from './types/app/gndr/feed/getFeedGenerator.js'
import * as AppGndrFeedGetFeedGenerators from './types/app/gndr/feed/getFeedGenerators.js'
import * as AppGndrFeedGetFeedSkeleton from './types/app/gndr/feed/getFeedSkeleton.js'
import * as AppGndrFeedGetLikes from './types/app/gndr/feed/getLikes.js'
import * as AppGndrFeedGetListFeed from './types/app/gndr/feed/getListFeed.js'
import * as AppGndrFeedGetPostThread from './types/app/gndr/feed/getPostThread.js'
import * as AppGndrFeedGetPosts from './types/app/gndr/feed/getPosts.js'
import * as AppGndrFeedGetQuotes from './types/app/gndr/feed/getQuotes.js'
import * as AppGndrFeedGetRepostedBy from './types/app/gndr/feed/getRepostedBy.js'
import * as AppGndrFeedGetSuggestedFeeds from './types/app/gndr/feed/getSuggestedFeeds.js'
import * as AppGndrFeedGetTimeline from './types/app/gndr/feed/getTimeline.js'
import * as AppGndrFeedLike from './types/app/gndr/feed/like.js'
import * as AppGndrFeedPost from './types/app/gndr/feed/post.js'
import * as AppGndrFeedPostgate from './types/app/gndr/feed/postgate.js'
import * as AppGndrFeedRepost from './types/app/gndr/feed/repost.js'
import * as AppGndrFeedSearchPosts from './types/app/gndr/feed/searchPosts.js'
import * as AppGndrFeedSendInteractions from './types/app/gndr/feed/sendInteractions.js'
import * as AppGndrFeedThreadgate from './types/app/gndr/feed/threadgate.js'
import * as AppGndrGraphBlock from './types/app/gndr/graph/block.js'
import * as AppGndrGraphDefs from './types/app/gndr/graph/defs.js'
import * as AppGndrGraphFollow from './types/app/gndr/graph/follow.js'
import * as AppGndrGraphGetActorStarterPacks from './types/app/gndr/graph/getActorStarterPacks.js'
import * as AppGndrGraphGetBlocks from './types/app/gndr/graph/getBlocks.js'
import * as AppGndrGraphGetFollowers from './types/app/gndr/graph/getFollowers.js'
import * as AppGndrGraphGetFollows from './types/app/gndr/graph/getFollows.js'
import * as AppGndrGraphGetKnownFollowers from './types/app/gndr/graph/getKnownFollowers.js'
import * as AppGndrGraphGetList from './types/app/gndr/graph/getList.js'
import * as AppGndrGraphGetListBlocks from './types/app/gndr/graph/getListBlocks.js'
import * as AppGndrGraphGetListMutes from './types/app/gndr/graph/getListMutes.js'
import * as AppGndrGraphGetLists from './types/app/gndr/graph/getLists.js'
import * as AppGndrGraphGetListsWithMembership from './types/app/gndr/graph/getListsWithMembership.js'
import * as AppGndrGraphGetMutes from './types/app/gndr/graph/getMutes.js'
import * as AppGndrGraphGetRelationships from './types/app/gndr/graph/getRelationships.js'
import * as AppGndrGraphGetStarterPack from './types/app/gndr/graph/getStarterPack.js'
import * as AppGndrGraphGetStarterPacks from './types/app/gndr/graph/getStarterPacks.js'
import * as AppGndrGraphGetStarterPacksWithMembership from './types/app/gndr/graph/getStarterPacksWithMembership.js'
import * as AppGndrGraphGetSuggestedFollowsByActor from './types/app/gndr/graph/getSuggestedFollowsByActor.js'
import * as AppGndrGraphList from './types/app/gndr/graph/list.js'
import * as AppGndrGraphListblock from './types/app/gndr/graph/listblock.js'
import * as AppGndrGraphListitem from './types/app/gndr/graph/listitem.js'
import * as AppGndrGraphMuteActor from './types/app/gndr/graph/muteActor.js'
import * as AppGndrGraphMuteActorList from './types/app/gndr/graph/muteActorList.js'
import * as AppGndrGraphMuteThread from './types/app/gndr/graph/muteThread.js'
import * as AppGndrGraphSearchStarterPacks from './types/app/gndr/graph/searchStarterPacks.js'
import * as AppGndrGraphStarterpack from './types/app/gndr/graph/starterpack.js'
import * as AppGndrGraphUnmuteActor from './types/app/gndr/graph/unmuteActor.js'
import * as AppGndrGraphUnmuteActorList from './types/app/gndr/graph/unmuteActorList.js'
import * as AppGndrGraphUnmuteThread from './types/app/gndr/graph/unmuteThread.js'
import * as AppGndrGraphVerification from './types/app/gndr/graph/verification.js'
import * as AppGndrLabelerDefs from './types/app/gndr/labeler/defs.js'
import * as AppGndrLabelerGetServices from './types/app/gndr/labeler/getServices.js'
import * as AppGndrLabelerService from './types/app/gndr/labeler/service.js'
import * as AppGndrNotificationDeclaration from './types/app/gndr/notification/declaration.js'
import * as AppGndrNotificationDefs from './types/app/gndr/notification/defs.js'
import * as AppGndrNotificationGetPreferences from './types/app/gndr/notification/getPreferences.js'
import * as AppGndrNotificationGetUnreadCount from './types/app/gndr/notification/getUnreadCount.js'
import * as AppGndrNotificationListActivitySubscriptions from './types/app/gndr/notification/listActivitySubscriptions.js'
import * as AppGndrNotificationListNotifications from './types/app/gndr/notification/listNotifications.js'
import * as AppGndrNotificationPutActivitySubscription from './types/app/gndr/notification/putActivitySubscription.js'
import * as AppGndrNotificationPutPreferences from './types/app/gndr/notification/putPreferences.js'
import * as AppGndrNotificationPutPreferencesV2 from './types/app/gndr/notification/putPreferencesV2.js'
import * as AppGndrNotificationRegisterPush from './types/app/gndr/notification/registerPush.js'
import * as AppGndrNotificationUnregisterPush from './types/app/gndr/notification/unregisterPush.js'
import * as AppGndrNotificationUpdateSeen from './types/app/gndr/notification/updateSeen.js'
import * as AppGndrRichtextFacet from './types/app/gndr/richtext/facet.js'
import * as AppGndrUnspeccedDefs from './types/app/gndr/unspecced/defs.js'
import * as AppGndrUnspeccedGetAgeAssuranceState from './types/app/gndr/unspecced/getAgeAssuranceState.js'
import * as AppGndrUnspeccedGetConfig from './types/app/gndr/unspecced/getConfig.js'
import * as AppGndrUnspeccedGetPopularFeedGenerators from './types/app/gndr/unspecced/getPopularFeedGenerators.js'
import * as AppGndrUnspeccedGetPostThreadOtherV2 from './types/app/gndr/unspecced/getPostThreadOtherV2.js'
import * as AppGndrUnspeccedGetPostThreadV2 from './types/app/gndr/unspecced/getPostThreadV2.js'
import * as AppGndrUnspeccedGetSuggestedFeeds from './types/app/gndr/unspecced/getSuggestedFeeds.js'
import * as AppGndrUnspeccedGetSuggestedFeedsSkeleton from './types/app/gndr/unspecced/getSuggestedFeedsSkeleton.js'
import * as AppGndrUnspeccedGetSuggestedStarterPacks from './types/app/gndr/unspecced/getSuggestedStarterPacks.js'
import * as AppGndrUnspeccedGetSuggestedStarterPacksSkeleton from './types/app/gndr/unspecced/getSuggestedStarterPacksSkeleton.js'
import * as AppGndrUnspeccedGetSuggestedUsers from './types/app/gndr/unspecced/getSuggestedUsers.js'
import * as AppGndrUnspeccedGetSuggestedUsersSkeleton from './types/app/gndr/unspecced/getSuggestedUsersSkeleton.js'
import * as AppGndrUnspeccedGetSuggestionsSkeleton from './types/app/gndr/unspecced/getSuggestionsSkeleton.js'
import * as AppGndrUnspeccedGetTaggedSuggestions from './types/app/gndr/unspecced/getTaggedSuggestions.js'
import * as AppGndrUnspeccedGetTrendingTopics from './types/app/gndr/unspecced/getTrendingTopics.js'
import * as AppGndrUnspeccedGetTrends from './types/app/gndr/unspecced/getTrends.js'
import * as AppGndrUnspeccedGetTrendsSkeleton from './types/app/gndr/unspecced/getTrendsSkeleton.js'
import * as AppGndrUnspeccedInitAgeAssurance from './types/app/gndr/unspecced/initAgeAssurance.js'
import * as AppGndrUnspeccedSearchActorsSkeleton from './types/app/gndr/unspecced/searchActorsSkeleton.js'
import * as AppGndrUnspeccedSearchPostsSkeleton from './types/app/gndr/unspecced/searchPostsSkeleton.js'
import * as AppGndrUnspeccedSearchStarterPacksSkeleton from './types/app/gndr/unspecced/searchStarterPacksSkeleton.js'
import * as AppGndrVideoDefs from './types/app/gndr/video/defs.js'
import * as AppGndrVideoGetJobStatus from './types/app/gndr/video/getJobStatus.js'
import * as AppGndrVideoGetUploadLimits from './types/app/gndr/video/getUploadLimits.js'
import * as AppGndrVideoUploadVideo from './types/app/gndr/video/uploadVideo.js'
import * as ChatGndrActorDeclaration from './types/chat/gndr/actor/declaration.js'
import * as ChatGndrActorDefs from './types/chat/gndr/actor/defs.js'
import * as ChatGndrActorDeleteAccount from './types/chat/gndr/actor/deleteAccount.js'
import * as ChatGndrActorExportAccountData from './types/chat/gndr/actor/exportAccountData.js'
import * as ChatGndrConvoAcceptConvo from './types/chat/gndr/convo/acceptConvo.js'
import * as ChatGndrConvoAddReaction from './types/chat/gndr/convo/addReaction.js'
import * as ChatGndrConvoDefs from './types/chat/gndr/convo/defs.js'
import * as ChatGndrConvoDeleteMessageForSelf from './types/chat/gndr/convo/deleteMessageForSelf.js'
import * as ChatGndrConvoGetConvo from './types/chat/gndr/convo/getConvo.js'
import * as ChatGndrConvoGetConvoAvailability from './types/chat/gndr/convo/getConvoAvailability.js'
import * as ChatGndrConvoGetConvoForMembers from './types/chat/gndr/convo/getConvoForMembers.js'
import * as ChatGndrConvoGetLog from './types/chat/gndr/convo/getLog.js'
import * as ChatGndrConvoGetMessages from './types/chat/gndr/convo/getMessages.js'
import * as ChatGndrConvoLeaveConvo from './types/chat/gndr/convo/leaveConvo.js'
import * as ChatGndrConvoListConvos from './types/chat/gndr/convo/listConvos.js'
import * as ChatGndrConvoMuteConvo from './types/chat/gndr/convo/muteConvo.js'
import * as ChatGndrConvoRemoveReaction from './types/chat/gndr/convo/removeReaction.js'
import * as ChatGndrConvoSendMessage from './types/chat/gndr/convo/sendMessage.js'
import * as ChatGndrConvoSendMessageBatch from './types/chat/gndr/convo/sendMessageBatch.js'
import * as ChatGndrConvoUnmuteConvo from './types/chat/gndr/convo/unmuteConvo.js'
import * as ChatGndrConvoUpdateAllRead from './types/chat/gndr/convo/updateAllRead.js'
import * as ChatGndrConvoUpdateRead from './types/chat/gndr/convo/updateRead.js'
import * as ChatGndrModerationGetActorMetadata from './types/chat/gndr/moderation/getActorMetadata.js'
import * as ChatGndrModerationGetMessageContext from './types/chat/gndr/moderation/getMessageContext.js'
import * as ChatGndrModerationUpdateActorAccess from './types/chat/gndr/moderation/updateActorAccess.js'
import * as ComAtprotoAdminDefs from './types/com/atproto/admin/defs.js'
import * as ComAtprotoAdminDeleteAccount from './types/com/atproto/admin/deleteAccount.js'
import * as ComAtprotoAdminDisableAccountInvites from './types/com/atproto/admin/disableAccountInvites.js'
import * as ComAtprotoAdminDisableInviteCodes from './types/com/atproto/admin/disableInviteCodes.js'
import * as ComAtprotoAdminEnableAccountInvites from './types/com/atproto/admin/enableAccountInvites.js'
import * as ComAtprotoAdminGetAccountInfo from './types/com/atproto/admin/getAccountInfo.js'
import * as ComAtprotoAdminGetAccountInfos from './types/com/atproto/admin/getAccountInfos.js'
import * as ComAtprotoAdminGetInviteCodes from './types/com/atproto/admin/getInviteCodes.js'
import * as ComAtprotoAdminGetSubjectStatus from './types/com/atproto/admin/getSubjectStatus.js'
import * as ComAtprotoAdminSearchAccounts from './types/com/atproto/admin/searchAccounts.js'
import * as ComAtprotoAdminSendEmail from './types/com/atproto/admin/sendEmail.js'
import * as ComAtprotoAdminUpdateAccountEmail from './types/com/atproto/admin/updateAccountEmail.js'
import * as ComAtprotoAdminUpdateAccountHandle from './types/com/atproto/admin/updateAccountHandle.js'
import * as ComAtprotoAdminUpdateAccountPassword from './types/com/atproto/admin/updateAccountPassword.js'
import * as ComAtprotoAdminUpdateAccountSigningKey from './types/com/atproto/admin/updateAccountSigningKey.js'
import * as ComAtprotoAdminUpdateSubjectStatus from './types/com/atproto/admin/updateSubjectStatus.js'
import * as ComAtprotoIdentityDefs from './types/com/atproto/identity/defs.js'
import * as ComAtprotoIdentityGetRecommendedDidCredentials from './types/com/atproto/identity/getRecommendedDidCredentials.js'
import * as ComAtprotoIdentityRefreshIdentity from './types/com/atproto/identity/refreshIdentity.js'
import * as ComAtprotoIdentityRequestPlcOperationSignature from './types/com/atproto/identity/requestPlcOperationSignature.js'
import * as ComAtprotoIdentityResolveDid from './types/com/atproto/identity/resolveDid.js'
import * as ComAtprotoIdentityResolveHandle from './types/com/atproto/identity/resolveHandle.js'
import * as ComAtprotoIdentityResolveIdentity from './types/com/atproto/identity/resolveIdentity.js'
import * as ComAtprotoIdentitySignPlcOperation from './types/com/atproto/identity/signPlcOperation.js'
import * as ComAtprotoIdentitySubmitPlcOperation from './types/com/atproto/identity/submitPlcOperation.js'
import * as ComAtprotoIdentityUpdateHandle from './types/com/atproto/identity/updateHandle.js'
import * as ComAtprotoLabelDefs from './types/com/atproto/label/defs.js'
import * as ComAtprotoLabelQueryLabels from './types/com/atproto/label/queryLabels.js'
import * as ComAtprotoLabelSubscribeLabels from './types/com/atproto/label/subscribeLabels.js'
import * as ComAtprotoLexiconSchema from './types/com/atproto/lexicon/schema.js'
import * as ComAtprotoModerationCreateReport from './types/com/atproto/moderation/createReport.js'
import * as ComAtprotoModerationDefs from './types/com/atproto/moderation/defs.js'
import * as ComAtprotoRepoApplyWrites from './types/com/atproto/repo/applyWrites.js'
import * as ComAtprotoRepoCreateRecord from './types/com/atproto/repo/createRecord.js'
import * as ComAtprotoRepoDefs from './types/com/atproto/repo/defs.js'
import * as ComAtprotoRepoDeleteRecord from './types/com/atproto/repo/deleteRecord.js'
import * as ComAtprotoRepoDescribeRepo from './types/com/atproto/repo/describeRepo.js'
import * as ComAtprotoRepoGetRecord from './types/com/atproto/repo/getRecord.js'
import * as ComAtprotoRepoImportRepo from './types/com/atproto/repo/importRepo.js'
import * as ComAtprotoRepoListMissingBlobs from './types/com/atproto/repo/listMissingBlobs.js'
import * as ComAtprotoRepoListRecords from './types/com/atproto/repo/listRecords.js'
import * as ComAtprotoRepoPutRecord from './types/com/atproto/repo/putRecord.js'
import * as ComAtprotoRepoStrongRef from './types/com/atproto/repo/strongRef.js'
import * as ComAtprotoRepoUploadBlob from './types/com/atproto/repo/uploadBlob.js'
import * as ComAtprotoServerActivateAccount from './types/com/atproto/server/activateAccount.js'
import * as ComAtprotoServerCheckAccountStatus from './types/com/atproto/server/checkAccountStatus.js'
import * as ComAtprotoServerConfirmEmail from './types/com/atproto/server/confirmEmail.js'
import * as ComAtprotoServerCreateAccount from './types/com/atproto/server/createAccount.js'
import * as ComAtprotoServerCreateAppPassword from './types/com/atproto/server/createAppPassword.js'
import * as ComAtprotoServerCreateInviteCode from './types/com/atproto/server/createInviteCode.js'
import * as ComAtprotoServerCreateInviteCodes from './types/com/atproto/server/createInviteCodes.js'
import * as ComAtprotoServerCreateSession from './types/com/atproto/server/createSession.js'
import * as ComAtprotoServerDeactivateAccount from './types/com/atproto/server/deactivateAccount.js'
import * as ComAtprotoServerDefs from './types/com/atproto/server/defs.js'
import * as ComAtprotoServerDeleteAccount from './types/com/atproto/server/deleteAccount.js'
import * as ComAtprotoServerDeleteSession from './types/com/atproto/server/deleteSession.js'
import * as ComAtprotoServerDescribeServer from './types/com/atproto/server/describeServer.js'
import * as ComAtprotoServerGetAccountInviteCodes from './types/com/atproto/server/getAccountInviteCodes.js'
import * as ComAtprotoServerGetServiceAuth from './types/com/atproto/server/getServiceAuth.js'
import * as ComAtprotoServerGetSession from './types/com/atproto/server/getSession.js'
import * as ComAtprotoServerListAppPasswords from './types/com/atproto/server/listAppPasswords.js'
import * as ComAtprotoServerRefreshSession from './types/com/atproto/server/refreshSession.js'
import * as ComAtprotoServerRequestAccountDelete from './types/com/atproto/server/requestAccountDelete.js'
import * as ComAtprotoServerRequestEmailConfirmation from './types/com/atproto/server/requestEmailConfirmation.js'
import * as ComAtprotoServerRequestEmailUpdate from './types/com/atproto/server/requestEmailUpdate.js'
import * as ComAtprotoServerRequestPasswordReset from './types/com/atproto/server/requestPasswordReset.js'
import * as ComAtprotoServerReserveSigningKey from './types/com/atproto/server/reserveSigningKey.js'
import * as ComAtprotoServerResetPassword from './types/com/atproto/server/resetPassword.js'
import * as ComAtprotoServerRevokeAppPassword from './types/com/atproto/server/revokeAppPassword.js'
import * as ComAtprotoServerUpdateEmail from './types/com/atproto/server/updateEmail.js'
import * as ComAtprotoSyncDefs from './types/com/atproto/sync/defs.js'
import * as ComAtprotoSyncGetBlob from './types/com/atproto/sync/getBlob.js'
import * as ComAtprotoSyncGetBlocks from './types/com/atproto/sync/getBlocks.js'
import * as ComAtprotoSyncGetCheckout from './types/com/atproto/sync/getCheckout.js'
import * as ComAtprotoSyncGetHead from './types/com/atproto/sync/getHead.js'
import * as ComAtprotoSyncGetHostStatus from './types/com/atproto/sync/getHostStatus.js'
import * as ComAtprotoSyncGetLatestCommit from './types/com/atproto/sync/getLatestCommit.js'
import * as ComAtprotoSyncGetRecord from './types/com/atproto/sync/getRecord.js'
import * as ComAtprotoSyncGetRepo from './types/com/atproto/sync/getRepo.js'
import * as ComAtprotoSyncGetRepoStatus from './types/com/atproto/sync/getRepoStatus.js'
import * as ComAtprotoSyncListBlobs from './types/com/atproto/sync/listBlobs.js'
import * as ComAtprotoSyncListHosts from './types/com/atproto/sync/listHosts.js'
import * as ComAtprotoSyncListRepos from './types/com/atproto/sync/listRepos.js'
import * as ComAtprotoSyncListReposByCollection from './types/com/atproto/sync/listReposByCollection.js'
import * as ComAtprotoSyncNotifyOfUpdate from './types/com/atproto/sync/notifyOfUpdate.js'
import * as ComAtprotoSyncRequestCrawl from './types/com/atproto/sync/requestCrawl.js'
import * as ComAtprotoSyncSubscribeRepos from './types/com/atproto/sync/subscribeRepos.js'
import * as ComAtprotoTempAddReservedHandle from './types/com/atproto/temp/addReservedHandle.js'
import * as ComAtprotoTempCheckHandleAvailability from './types/com/atproto/temp/checkHandleAvailability.js'
import * as ComAtprotoTempCheckSignupQueue from './types/com/atproto/temp/checkSignupQueue.js'
import * as ComAtprotoTempFetchLabels from './types/com/atproto/temp/fetchLabels.js'
import * as ComAtprotoTempRequestPhoneVerification from './types/com/atproto/temp/requestPhoneVerification.js'
import * as ComAtprotoTempRevokeAccountCredentials from './types/com/atproto/temp/revokeAccountCredentials.js'
import * as ToolsOzoneCommunicationCreateTemplate from './types/tools/ozone/communication/createTemplate.js'
import * as ToolsOzoneCommunicationDefs from './types/tools/ozone/communication/defs.js'
import * as ToolsOzoneCommunicationDeleteTemplate from './types/tools/ozone/communication/deleteTemplate.js'
import * as ToolsOzoneCommunicationListTemplates from './types/tools/ozone/communication/listTemplates.js'
import * as ToolsOzoneCommunicationUpdateTemplate from './types/tools/ozone/communication/updateTemplate.js'
import * as ToolsOzoneHostingGetAccountHistory from './types/tools/ozone/hosting/getAccountHistory.js'
import * as ToolsOzoneModerationDefs from './types/tools/ozone/moderation/defs.js'
import * as ToolsOzoneModerationEmitEvent from './types/tools/ozone/moderation/emitEvent.js'
import * as ToolsOzoneModerationGetAccountTimeline from './types/tools/ozone/moderation/getAccountTimeline.js'
import * as ToolsOzoneModerationGetEvent from './types/tools/ozone/moderation/getEvent.js'
import * as ToolsOzoneModerationGetRecord from './types/tools/ozone/moderation/getRecord.js'
import * as ToolsOzoneModerationGetRecords from './types/tools/ozone/moderation/getRecords.js'
import * as ToolsOzoneModerationGetRepo from './types/tools/ozone/moderation/getRepo.js'
import * as ToolsOzoneModerationGetReporterStats from './types/tools/ozone/moderation/getReporterStats.js'
import * as ToolsOzoneModerationGetRepos from './types/tools/ozone/moderation/getRepos.js'
import * as ToolsOzoneModerationGetSubjects from './types/tools/ozone/moderation/getSubjects.js'
import * as ToolsOzoneModerationQueryEvents from './types/tools/ozone/moderation/queryEvents.js'
import * as ToolsOzoneModerationQueryStatuses from './types/tools/ozone/moderation/queryStatuses.js'
import * as ToolsOzoneModerationSearchRepos from './types/tools/ozone/moderation/searchRepos.js'
import * as ToolsOzoneReportDefs from './types/tools/ozone/report/defs.js'
import * as ToolsOzoneSafelinkAddRule from './types/tools/ozone/safelink/addRule.js'
import * as ToolsOzoneSafelinkDefs from './types/tools/ozone/safelink/defs.js'
import * as ToolsOzoneSafelinkQueryEvents from './types/tools/ozone/safelink/queryEvents.js'
import * as ToolsOzoneSafelinkQueryRules from './types/tools/ozone/safelink/queryRules.js'
import * as ToolsOzoneSafelinkRemoveRule from './types/tools/ozone/safelink/removeRule.js'
import * as ToolsOzoneSafelinkUpdateRule from './types/tools/ozone/safelink/updateRule.js'
import * as ToolsOzoneServerGetConfig from './types/tools/ozone/server/getConfig.js'
import * as ToolsOzoneSetAddValues from './types/tools/ozone/set/addValues.js'
import * as ToolsOzoneSetDefs from './types/tools/ozone/set/defs.js'
import * as ToolsOzoneSetDeleteSet from './types/tools/ozone/set/deleteSet.js'
import * as ToolsOzoneSetDeleteValues from './types/tools/ozone/set/deleteValues.js'
import * as ToolsOzoneSetGetValues from './types/tools/ozone/set/getValues.js'
import * as ToolsOzoneSetQuerySets from './types/tools/ozone/set/querySets.js'
import * as ToolsOzoneSetUpsertSet from './types/tools/ozone/set/upsertSet.js'
import * as ToolsOzoneSettingDefs from './types/tools/ozone/setting/defs.js'
import * as ToolsOzoneSettingListOptions from './types/tools/ozone/setting/listOptions.js'
import * as ToolsOzoneSettingRemoveOptions from './types/tools/ozone/setting/removeOptions.js'
import * as ToolsOzoneSettingUpsertOption from './types/tools/ozone/setting/upsertOption.js'
import * as ToolsOzoneSignatureDefs from './types/tools/ozone/signature/defs.js'
import * as ToolsOzoneSignatureFindCorrelation from './types/tools/ozone/signature/findCorrelation.js'
import * as ToolsOzoneSignatureFindRelatedAccounts from './types/tools/ozone/signature/findRelatedAccounts.js'
import * as ToolsOzoneSignatureSearchAccounts from './types/tools/ozone/signature/searchAccounts.js'
import * as ToolsOzoneTeamAddMember from './types/tools/ozone/team/addMember.js'
import * as ToolsOzoneTeamDefs from './types/tools/ozone/team/defs.js'
import * as ToolsOzoneTeamDeleteMember from './types/tools/ozone/team/deleteMember.js'
import * as ToolsOzoneTeamListMembers from './types/tools/ozone/team/listMembers.js'
import * as ToolsOzoneTeamUpdateMember from './types/tools/ozone/team/updateMember.js'
import * as ToolsOzoneVerificationDefs from './types/tools/ozone/verification/defs.js'
import * as ToolsOzoneVerificationGrantVerifications from './types/tools/ozone/verification/grantVerifications.js'
import * as ToolsOzoneVerificationListVerifications from './types/tools/ozone/verification/listVerifications.js'
import * as ToolsOzoneVerificationRevokeVerifications from './types/tools/ozone/verification/revokeVerifications.js'

export * as AppGndrActorDefs from './types/app/gndr/actor/defs.js'
export * as AppGndrActorGetPreferences from './types/app/gndr/actor/getPreferences.js'
export * as AppGndrActorGetProfile from './types/app/gndr/actor/getProfile.js'
export * as AppGndrActorGetProfiles from './types/app/gndr/actor/getProfiles.js'
export * as AppGndrActorGetSuggestions from './types/app/gndr/actor/getSuggestions.js'
export * as AppGndrActorProfile from './types/app/gndr/actor/profile.js'
export * as AppGndrActorPutPreferences from './types/app/gndr/actor/putPreferences.js'
export * as AppGndrActorSearchActors from './types/app/gndr/actor/searchActors.js'
export * as AppGndrActorSearchActorsTypeahead from './types/app/gndr/actor/searchActorsTypeahead.js'
export * as AppGndrActorStatus from './types/app/gndr/actor/status.js'
export * as AppGndrBookmarkCreateBookmark from './types/app/gndr/bookmark/createBookmark.js'
export * as AppGndrBookmarkDefs from './types/app/gndr/bookmark/defs.js'
export * as AppGndrBookmarkDeleteBookmark from './types/app/gndr/bookmark/deleteBookmark.js'
export * as AppGndrBookmarkGetBookmarks from './types/app/gndr/bookmark/getBookmarks.js'
export * as AppGndrEmbedDefs from './types/app/gndr/embed/defs.js'
export * as AppGndrEmbedExternal from './types/app/gndr/embed/external.js'
export * as AppGndrEmbedImages from './types/app/gndr/embed/images.js'
export * as AppGndrEmbedRecord from './types/app/gndr/embed/record.js'
export * as AppGndrEmbedRecordWithMedia from './types/app/gndr/embed/recordWithMedia.js'
export * as AppGndrEmbedVideo from './types/app/gndr/embed/video.js'
export * as AppGndrFeedDefs from './types/app/gndr/feed/defs.js'
export * as AppGndrFeedDescribeFeedGenerator from './types/app/gndr/feed/describeFeedGenerator.js'
export * as AppGndrFeedGenerator from './types/app/gndr/feed/generator.js'
export * as AppGndrFeedGetActorFeeds from './types/app/gndr/feed/getActorFeeds.js'
export * as AppGndrFeedGetActorLikes from './types/app/gndr/feed/getActorLikes.js'
export * as AppGndrFeedGetAuthorFeed from './types/app/gndr/feed/getAuthorFeed.js'
export * as AppGndrFeedGetFeed from './types/app/gndr/feed/getFeed.js'
export * as AppGndrFeedGetFeedGenerator from './types/app/gndr/feed/getFeedGenerator.js'
export * as AppGndrFeedGetFeedGenerators from './types/app/gndr/feed/getFeedGenerators.js'
export * as AppGndrFeedGetFeedSkeleton from './types/app/gndr/feed/getFeedSkeleton.js'
export * as AppGndrFeedGetLikes from './types/app/gndr/feed/getLikes.js'
export * as AppGndrFeedGetListFeed from './types/app/gndr/feed/getListFeed.js'
export * as AppGndrFeedGetPostThread from './types/app/gndr/feed/getPostThread.js'
export * as AppGndrFeedGetPosts from './types/app/gndr/feed/getPosts.js'
export * as AppGndrFeedGetQuotes from './types/app/gndr/feed/getQuotes.js'
export * as AppGndrFeedGetRepostedBy from './types/app/gndr/feed/getRepostedBy.js'
export * as AppGndrFeedGetSuggestedFeeds from './types/app/gndr/feed/getSuggestedFeeds.js'
export * as AppGndrFeedGetTimeline from './types/app/gndr/feed/getTimeline.js'
export * as AppGndrFeedLike from './types/app/gndr/feed/like.js'
export * as AppGndrFeedPost from './types/app/gndr/feed/post.js'
export * as AppGndrFeedPostgate from './types/app/gndr/feed/postgate.js'
export * as AppGndrFeedRepost from './types/app/gndr/feed/repost.js'
export * as AppGndrFeedSearchPosts from './types/app/gndr/feed/searchPosts.js'
export * as AppGndrFeedSendInteractions from './types/app/gndr/feed/sendInteractions.js'
export * as AppGndrFeedThreadgate from './types/app/gndr/feed/threadgate.js'
export * as AppGndrGraphBlock from './types/app/gndr/graph/block.js'
export * as AppGndrGraphDefs from './types/app/gndr/graph/defs.js'
export * as AppGndrGraphFollow from './types/app/gndr/graph/follow.js'
export * as AppGndrGraphGetActorStarterPacks from './types/app/gndr/graph/getActorStarterPacks.js'
export * as AppGndrGraphGetBlocks from './types/app/gndr/graph/getBlocks.js'
export * as AppGndrGraphGetFollowers from './types/app/gndr/graph/getFollowers.js'
export * as AppGndrGraphGetFollows from './types/app/gndr/graph/getFollows.js'
export * as AppGndrGraphGetKnownFollowers from './types/app/gndr/graph/getKnownFollowers.js'
export * as AppGndrGraphGetList from './types/app/gndr/graph/getList.js'
export * as AppGndrGraphGetListBlocks from './types/app/gndr/graph/getListBlocks.js'
export * as AppGndrGraphGetListMutes from './types/app/gndr/graph/getListMutes.js'
export * as AppGndrGraphGetLists from './types/app/gndr/graph/getLists.js'
export * as AppGndrGraphGetListsWithMembership from './types/app/gndr/graph/getListsWithMembership.js'
export * as AppGndrGraphGetMutes from './types/app/gndr/graph/getMutes.js'
export * as AppGndrGraphGetRelationships from './types/app/gndr/graph/getRelationships.js'
export * as AppGndrGraphGetStarterPack from './types/app/gndr/graph/getStarterPack.js'
export * as AppGndrGraphGetStarterPacks from './types/app/gndr/graph/getStarterPacks.js'
export * as AppGndrGraphGetStarterPacksWithMembership from './types/app/gndr/graph/getStarterPacksWithMembership.js'
export * as AppGndrGraphGetSuggestedFollowsByActor from './types/app/gndr/graph/getSuggestedFollowsByActor.js'
export * as AppGndrGraphList from './types/app/gndr/graph/list.js'
export * as AppGndrGraphListblock from './types/app/gndr/graph/listblock.js'
export * as AppGndrGraphListitem from './types/app/gndr/graph/listitem.js'
export * as AppGndrGraphMuteActor from './types/app/gndr/graph/muteActor.js'
export * as AppGndrGraphMuteActorList from './types/app/gndr/graph/muteActorList.js'
export * as AppGndrGraphMuteThread from './types/app/gndr/graph/muteThread.js'
export * as AppGndrGraphSearchStarterPacks from './types/app/gndr/graph/searchStarterPacks.js'
export * as AppGndrGraphStarterpack from './types/app/gndr/graph/starterpack.js'
export * as AppGndrGraphUnmuteActor from './types/app/gndr/graph/unmuteActor.js'
export * as AppGndrGraphUnmuteActorList from './types/app/gndr/graph/unmuteActorList.js'
export * as AppGndrGraphUnmuteThread from './types/app/gndr/graph/unmuteThread.js'
export * as AppGndrGraphVerification from './types/app/gndr/graph/verification.js'
export * as AppGndrLabelerDefs from './types/app/gndr/labeler/defs.js'
export * as AppGndrLabelerGetServices from './types/app/gndr/labeler/getServices.js'
export * as AppGndrLabelerService from './types/app/gndr/labeler/service.js'
export * as AppGndrNotificationDeclaration from './types/app/gndr/notification/declaration.js'
export * as AppGndrNotificationDefs from './types/app/gndr/notification/defs.js'
export * as AppGndrNotificationGetPreferences from './types/app/gndr/notification/getPreferences.js'
export * as AppGndrNotificationGetUnreadCount from './types/app/gndr/notification/getUnreadCount.js'
export * as AppGndrNotificationListActivitySubscriptions from './types/app/gndr/notification/listActivitySubscriptions.js'
export * as AppGndrNotificationListNotifications from './types/app/gndr/notification/listNotifications.js'
export * as AppGndrNotificationPutActivitySubscription from './types/app/gndr/notification/putActivitySubscription.js'
export * as AppGndrNotificationPutPreferences from './types/app/gndr/notification/putPreferences.js'
export * as AppGndrNotificationPutPreferencesV2 from './types/app/gndr/notification/putPreferencesV2.js'
export * as AppGndrNotificationRegisterPush from './types/app/gndr/notification/registerPush.js'
export * as AppGndrNotificationUnregisterPush from './types/app/gndr/notification/unregisterPush.js'
export * as AppGndrNotificationUpdateSeen from './types/app/gndr/notification/updateSeen.js'
export * as AppGndrRichtextFacet from './types/app/gndr/richtext/facet.js'
export * as AppGndrUnspeccedDefs from './types/app/gndr/unspecced/defs.js'
export * as AppGndrUnspeccedGetAgeAssuranceState from './types/app/gndr/unspecced/getAgeAssuranceState.js'
export * as AppGndrUnspeccedGetConfig from './types/app/gndr/unspecced/getConfig.js'
export * as AppGndrUnspeccedGetPopularFeedGenerators from './types/app/gndr/unspecced/getPopularFeedGenerators.js'
export * as AppGndrUnspeccedGetPostThreadOtherV2 from './types/app/gndr/unspecced/getPostThreadOtherV2.js'
export * as AppGndrUnspeccedGetPostThreadV2 from './types/app/gndr/unspecced/getPostThreadV2.js'
export * as AppGndrUnspeccedGetSuggestedFeeds from './types/app/gndr/unspecced/getSuggestedFeeds.js'
export * as AppGndrUnspeccedGetSuggestedFeedsSkeleton from './types/app/gndr/unspecced/getSuggestedFeedsSkeleton.js'
export * as AppGndrUnspeccedGetSuggestedStarterPacks from './types/app/gndr/unspecced/getSuggestedStarterPacks.js'
export * as AppGndrUnspeccedGetSuggestedStarterPacksSkeleton from './types/app/gndr/unspecced/getSuggestedStarterPacksSkeleton.js'
export * as AppGndrUnspeccedGetSuggestedUsers from './types/app/gndr/unspecced/getSuggestedUsers.js'
export * as AppGndrUnspeccedGetSuggestedUsersSkeleton from './types/app/gndr/unspecced/getSuggestedUsersSkeleton.js'
export * as AppGndrUnspeccedGetSuggestionsSkeleton from './types/app/gndr/unspecced/getSuggestionsSkeleton.js'
export * as AppGndrUnspeccedGetTaggedSuggestions from './types/app/gndr/unspecced/getTaggedSuggestions.js'
export * as AppGndrUnspeccedGetTrendingTopics from './types/app/gndr/unspecced/getTrendingTopics.js'
export * as AppGndrUnspeccedGetTrends from './types/app/gndr/unspecced/getTrends.js'
export * as AppGndrUnspeccedGetTrendsSkeleton from './types/app/gndr/unspecced/getTrendsSkeleton.js'
export * as AppGndrUnspeccedInitAgeAssurance from './types/app/gndr/unspecced/initAgeAssurance.js'
export * as AppGndrUnspeccedSearchActorsSkeleton from './types/app/gndr/unspecced/searchActorsSkeleton.js'
export * as AppGndrUnspeccedSearchPostsSkeleton from './types/app/gndr/unspecced/searchPostsSkeleton.js'
export * as AppGndrUnspeccedSearchStarterPacksSkeleton from './types/app/gndr/unspecced/searchStarterPacksSkeleton.js'
export * as AppGndrVideoDefs from './types/app/gndr/video/defs.js'
export * as AppGndrVideoGetJobStatus from './types/app/gndr/video/getJobStatus.js'
export * as AppGndrVideoGetUploadLimits from './types/app/gndr/video/getUploadLimits.js'
export * as AppGndrVideoUploadVideo from './types/app/gndr/video/uploadVideo.js'
export * as ChatGndrActorDeclaration from './types/chat/gndr/actor/declaration.js'
export * as ChatGndrActorDefs from './types/chat/gndr/actor/defs.js'
export * as ChatGndrActorDeleteAccount from './types/chat/gndr/actor/deleteAccount.js'
export * as ChatGndrActorExportAccountData from './types/chat/gndr/actor/exportAccountData.js'
export * as ChatGndrConvoAcceptConvo from './types/chat/gndr/convo/acceptConvo.js'
export * as ChatGndrConvoAddReaction from './types/chat/gndr/convo/addReaction.js'
export * as ChatGndrConvoDefs from './types/chat/gndr/convo/defs.js'
export * as ChatGndrConvoDeleteMessageForSelf from './types/chat/gndr/convo/deleteMessageForSelf.js'
export * as ChatGndrConvoGetConvo from './types/chat/gndr/convo/getConvo.js'
export * as ChatGndrConvoGetConvoAvailability from './types/chat/gndr/convo/getConvoAvailability.js'
export * as ChatGndrConvoGetConvoForMembers from './types/chat/gndr/convo/getConvoForMembers.js'
export * as ChatGndrConvoGetLog from './types/chat/gndr/convo/getLog.js'
export * as ChatGndrConvoGetMessages from './types/chat/gndr/convo/getMessages.js'
export * as ChatGndrConvoLeaveConvo from './types/chat/gndr/convo/leaveConvo.js'
export * as ChatGndrConvoListConvos from './types/chat/gndr/convo/listConvos.js'
export * as ChatGndrConvoMuteConvo from './types/chat/gndr/convo/muteConvo.js'
export * as ChatGndrConvoRemoveReaction from './types/chat/gndr/convo/removeReaction.js'
export * as ChatGndrConvoSendMessage from './types/chat/gndr/convo/sendMessage.js'
export * as ChatGndrConvoSendMessageBatch from './types/chat/gndr/convo/sendMessageBatch.js'
export * as ChatGndrConvoUnmuteConvo from './types/chat/gndr/convo/unmuteConvo.js'
export * as ChatGndrConvoUpdateAllRead from './types/chat/gndr/convo/updateAllRead.js'
export * as ChatGndrConvoUpdateRead from './types/chat/gndr/convo/updateRead.js'
export * as ChatGndrModerationGetActorMetadata from './types/chat/gndr/moderation/getActorMetadata.js'
export * as ChatGndrModerationGetMessageContext from './types/chat/gndr/moderation/getMessageContext.js'
export * as ChatGndrModerationUpdateActorAccess from './types/chat/gndr/moderation/updateActorAccess.js'
export * as ComAtprotoAdminDefs from './types/com/atproto/admin/defs.js'
export * as ComAtprotoAdminDeleteAccount from './types/com/atproto/admin/deleteAccount.js'
export * as ComAtprotoAdminDisableAccountInvites from './types/com/atproto/admin/disableAccountInvites.js'
export * as ComAtprotoAdminDisableInviteCodes from './types/com/atproto/admin/disableInviteCodes.js'
export * as ComAtprotoAdminEnableAccountInvites from './types/com/atproto/admin/enableAccountInvites.js'
export * as ComAtprotoAdminGetAccountInfo from './types/com/atproto/admin/getAccountInfo.js'
export * as ComAtprotoAdminGetAccountInfos from './types/com/atproto/admin/getAccountInfos.js'
export * as ComAtprotoAdminGetInviteCodes from './types/com/atproto/admin/getInviteCodes.js'
export * as ComAtprotoAdminGetSubjectStatus from './types/com/atproto/admin/getSubjectStatus.js'
export * as ComAtprotoAdminSearchAccounts from './types/com/atproto/admin/searchAccounts.js'
export * as ComAtprotoAdminSendEmail from './types/com/atproto/admin/sendEmail.js'
export * as ComAtprotoAdminUpdateAccountEmail from './types/com/atproto/admin/updateAccountEmail.js'
export * as ComAtprotoAdminUpdateAccountHandle from './types/com/atproto/admin/updateAccountHandle.js'
export * as ComAtprotoAdminUpdateAccountPassword from './types/com/atproto/admin/updateAccountPassword.js'
export * as ComAtprotoAdminUpdateAccountSigningKey from './types/com/atproto/admin/updateAccountSigningKey.js'
export * as ComAtprotoAdminUpdateSubjectStatus from './types/com/atproto/admin/updateSubjectStatus.js'
export * as ComAtprotoIdentityDefs from './types/com/atproto/identity/defs.js'
export * as ComAtprotoIdentityGetRecommendedDidCredentials from './types/com/atproto/identity/getRecommendedDidCredentials.js'
export * as ComAtprotoIdentityRefreshIdentity from './types/com/atproto/identity/refreshIdentity.js'
export * as ComAtprotoIdentityRequestPlcOperationSignature from './types/com/atproto/identity/requestPlcOperationSignature.js'
export * as ComAtprotoIdentityResolveDid from './types/com/atproto/identity/resolveDid.js'
export * as ComAtprotoIdentityResolveHandle from './types/com/atproto/identity/resolveHandle.js'
export * as ComAtprotoIdentityResolveIdentity from './types/com/atproto/identity/resolveIdentity.js'
export * as ComAtprotoIdentitySignPlcOperation from './types/com/atproto/identity/signPlcOperation.js'
export * as ComAtprotoIdentitySubmitPlcOperation from './types/com/atproto/identity/submitPlcOperation.js'
export * as ComAtprotoIdentityUpdateHandle from './types/com/atproto/identity/updateHandle.js'
export * as ComAtprotoLabelDefs from './types/com/atproto/label/defs.js'
export * as ComAtprotoLabelQueryLabels from './types/com/atproto/label/queryLabels.js'
export * as ComAtprotoLabelSubscribeLabels from './types/com/atproto/label/subscribeLabels.js'
export * as ComAtprotoLexiconSchema from './types/com/atproto/lexicon/schema.js'
export * as ComAtprotoModerationCreateReport from './types/com/atproto/moderation/createReport.js'
export * as ComAtprotoModerationDefs from './types/com/atproto/moderation/defs.js'
export * as ComAtprotoRepoApplyWrites from './types/com/atproto/repo/applyWrites.js'
export * as ComAtprotoRepoCreateRecord from './types/com/atproto/repo/createRecord.js'
export * as ComAtprotoRepoDefs from './types/com/atproto/repo/defs.js'
export * as ComAtprotoRepoDeleteRecord from './types/com/atproto/repo/deleteRecord.js'
export * as ComAtprotoRepoDescribeRepo from './types/com/atproto/repo/describeRepo.js'
export * as ComAtprotoRepoGetRecord from './types/com/atproto/repo/getRecord.js'
export * as ComAtprotoRepoImportRepo from './types/com/atproto/repo/importRepo.js'
export * as ComAtprotoRepoListMissingBlobs from './types/com/atproto/repo/listMissingBlobs.js'
export * as ComAtprotoRepoListRecords from './types/com/atproto/repo/listRecords.js'
export * as ComAtprotoRepoPutRecord from './types/com/atproto/repo/putRecord.js'
export * as ComAtprotoRepoStrongRef from './types/com/atproto/repo/strongRef.js'
export * as ComAtprotoRepoUploadBlob from './types/com/atproto/repo/uploadBlob.js'
export * as ComAtprotoServerActivateAccount from './types/com/atproto/server/activateAccount.js'
export * as ComAtprotoServerCheckAccountStatus from './types/com/atproto/server/checkAccountStatus.js'
export * as ComAtprotoServerConfirmEmail from './types/com/atproto/server/confirmEmail.js'
export * as ComAtprotoServerCreateAccount from './types/com/atproto/server/createAccount.js'
export * as ComAtprotoServerCreateAppPassword from './types/com/atproto/server/createAppPassword.js'
export * as ComAtprotoServerCreateInviteCode from './types/com/atproto/server/createInviteCode.js'
export * as ComAtprotoServerCreateInviteCodes from './types/com/atproto/server/createInviteCodes.js'
export * as ComAtprotoServerCreateSession from './types/com/atproto/server/createSession.js'
export * as ComAtprotoServerDeactivateAccount from './types/com/atproto/server/deactivateAccount.js'
export * as ComAtprotoServerDefs from './types/com/atproto/server/defs.js'
export * as ComAtprotoServerDeleteAccount from './types/com/atproto/server/deleteAccount.js'
export * as ComAtprotoServerDeleteSession from './types/com/atproto/server/deleteSession.js'
export * as ComAtprotoServerDescribeServer from './types/com/atproto/server/describeServer.js'
export * as ComAtprotoServerGetAccountInviteCodes from './types/com/atproto/server/getAccountInviteCodes.js'
export * as ComAtprotoServerGetServiceAuth from './types/com/atproto/server/getServiceAuth.js'
export * as ComAtprotoServerGetSession from './types/com/atproto/server/getSession.js'
export * as ComAtprotoServerListAppPasswords from './types/com/atproto/server/listAppPasswords.js'
export * as ComAtprotoServerRefreshSession from './types/com/atproto/server/refreshSession.js'
export * as ComAtprotoServerRequestAccountDelete from './types/com/atproto/server/requestAccountDelete.js'
export * as ComAtprotoServerRequestEmailConfirmation from './types/com/atproto/server/requestEmailConfirmation.js'
export * as ComAtprotoServerRequestEmailUpdate from './types/com/atproto/server/requestEmailUpdate.js'
export * as ComAtprotoServerRequestPasswordReset from './types/com/atproto/server/requestPasswordReset.js'
export * as ComAtprotoServerReserveSigningKey from './types/com/atproto/server/reserveSigningKey.js'
export * as ComAtprotoServerResetPassword from './types/com/atproto/server/resetPassword.js'
export * as ComAtprotoServerRevokeAppPassword from './types/com/atproto/server/revokeAppPassword.js'
export * as ComAtprotoServerUpdateEmail from './types/com/atproto/server/updateEmail.js'
export * as ComAtprotoSyncDefs from './types/com/atproto/sync/defs.js'
export * as ComAtprotoSyncGetBlob from './types/com/atproto/sync/getBlob.js'
export * as ComAtprotoSyncGetBlocks from './types/com/atproto/sync/getBlocks.js'
export * as ComAtprotoSyncGetCheckout from './types/com/atproto/sync/getCheckout.js'
export * as ComAtprotoSyncGetHead from './types/com/atproto/sync/getHead.js'
export * as ComAtprotoSyncGetHostStatus from './types/com/atproto/sync/getHostStatus.js'
export * as ComAtprotoSyncGetLatestCommit from './types/com/atproto/sync/getLatestCommit.js'
export * as ComAtprotoSyncGetRecord from './types/com/atproto/sync/getRecord.js'
export * as ComAtprotoSyncGetRepo from './types/com/atproto/sync/getRepo.js'
export * as ComAtprotoSyncGetRepoStatus from './types/com/atproto/sync/getRepoStatus.js'
export * as ComAtprotoSyncListBlobs from './types/com/atproto/sync/listBlobs.js'
export * as ComAtprotoSyncListHosts from './types/com/atproto/sync/listHosts.js'
export * as ComAtprotoSyncListRepos from './types/com/atproto/sync/listRepos.js'
export * as ComAtprotoSyncListReposByCollection from './types/com/atproto/sync/listReposByCollection.js'
export * as ComAtprotoSyncNotifyOfUpdate from './types/com/atproto/sync/notifyOfUpdate.js'
export * as ComAtprotoSyncRequestCrawl from './types/com/atproto/sync/requestCrawl.js'
export * as ComAtprotoSyncSubscribeRepos from './types/com/atproto/sync/subscribeRepos.js'
export * as ComAtprotoTempAddReservedHandle from './types/com/atproto/temp/addReservedHandle.js'
export * as ComAtprotoTempCheckHandleAvailability from './types/com/atproto/temp/checkHandleAvailability.js'
export * as ComAtprotoTempCheckSignupQueue from './types/com/atproto/temp/checkSignupQueue.js'
export * as ComAtprotoTempFetchLabels from './types/com/atproto/temp/fetchLabels.js'
export * as ComAtprotoTempRequestPhoneVerification from './types/com/atproto/temp/requestPhoneVerification.js'
export * as ComAtprotoTempRevokeAccountCredentials from './types/com/atproto/temp/revokeAccountCredentials.js'
export * as ToolsOzoneCommunicationCreateTemplate from './types/tools/ozone/communication/createTemplate.js'
export * as ToolsOzoneCommunicationDefs from './types/tools/ozone/communication/defs.js'
export * as ToolsOzoneCommunicationDeleteTemplate from './types/tools/ozone/communication/deleteTemplate.js'
export * as ToolsOzoneCommunicationListTemplates from './types/tools/ozone/communication/listTemplates.js'
export * as ToolsOzoneCommunicationUpdateTemplate from './types/tools/ozone/communication/updateTemplate.js'
export * as ToolsOzoneHostingGetAccountHistory from './types/tools/ozone/hosting/getAccountHistory.js'
export * as ToolsOzoneModerationDefs from './types/tools/ozone/moderation/defs.js'
export * as ToolsOzoneModerationEmitEvent from './types/tools/ozone/moderation/emitEvent.js'
export * as ToolsOzoneModerationGetAccountTimeline from './types/tools/ozone/moderation/getAccountTimeline.js'
export * as ToolsOzoneModerationGetEvent from './types/tools/ozone/moderation/getEvent.js'
export * as ToolsOzoneModerationGetRecord from './types/tools/ozone/moderation/getRecord.js'
export * as ToolsOzoneModerationGetRecords from './types/tools/ozone/moderation/getRecords.js'
export * as ToolsOzoneModerationGetRepo from './types/tools/ozone/moderation/getRepo.js'
export * as ToolsOzoneModerationGetReporterStats from './types/tools/ozone/moderation/getReporterStats.js'
export * as ToolsOzoneModerationGetRepos from './types/tools/ozone/moderation/getRepos.js'
export * as ToolsOzoneModerationGetSubjects from './types/tools/ozone/moderation/getSubjects.js'
export * as ToolsOzoneModerationQueryEvents from './types/tools/ozone/moderation/queryEvents.js'
export * as ToolsOzoneModerationQueryStatuses from './types/tools/ozone/moderation/queryStatuses.js'
export * as ToolsOzoneModerationSearchRepos from './types/tools/ozone/moderation/searchRepos.js'
export * as ToolsOzoneReportDefs from './types/tools/ozone/report/defs.js'
export * as ToolsOzoneSafelinkAddRule from './types/tools/ozone/safelink/addRule.js'
export * as ToolsOzoneSafelinkDefs from './types/tools/ozone/safelink/defs.js'
export * as ToolsOzoneSafelinkQueryEvents from './types/tools/ozone/safelink/queryEvents.js'
export * as ToolsOzoneSafelinkQueryRules from './types/tools/ozone/safelink/queryRules.js'
export * as ToolsOzoneSafelinkRemoveRule from './types/tools/ozone/safelink/removeRule.js'
export * as ToolsOzoneSafelinkUpdateRule from './types/tools/ozone/safelink/updateRule.js'
export * as ToolsOzoneServerGetConfig from './types/tools/ozone/server/getConfig.js'
export * as ToolsOzoneSetAddValues from './types/tools/ozone/set/addValues.js'
export * as ToolsOzoneSetDefs from './types/tools/ozone/set/defs.js'
export * as ToolsOzoneSetDeleteSet from './types/tools/ozone/set/deleteSet.js'
export * as ToolsOzoneSetDeleteValues from './types/tools/ozone/set/deleteValues.js'
export * as ToolsOzoneSetGetValues from './types/tools/ozone/set/getValues.js'
export * as ToolsOzoneSetQuerySets from './types/tools/ozone/set/querySets.js'
export * as ToolsOzoneSetUpsertSet from './types/tools/ozone/set/upsertSet.js'
export * as ToolsOzoneSettingDefs from './types/tools/ozone/setting/defs.js'
export * as ToolsOzoneSettingListOptions from './types/tools/ozone/setting/listOptions.js'
export * as ToolsOzoneSettingRemoveOptions from './types/tools/ozone/setting/removeOptions.js'
export * as ToolsOzoneSettingUpsertOption from './types/tools/ozone/setting/upsertOption.js'
export * as ToolsOzoneSignatureDefs from './types/tools/ozone/signature/defs.js'
export * as ToolsOzoneSignatureFindCorrelation from './types/tools/ozone/signature/findCorrelation.js'
export * as ToolsOzoneSignatureFindRelatedAccounts from './types/tools/ozone/signature/findRelatedAccounts.js'
export * as ToolsOzoneSignatureSearchAccounts from './types/tools/ozone/signature/searchAccounts.js'
export * as ToolsOzoneTeamAddMember from './types/tools/ozone/team/addMember.js'
export * as ToolsOzoneTeamDefs from './types/tools/ozone/team/defs.js'
export * as ToolsOzoneTeamDeleteMember from './types/tools/ozone/team/deleteMember.js'
export * as ToolsOzoneTeamListMembers from './types/tools/ozone/team/listMembers.js'
export * as ToolsOzoneTeamUpdateMember from './types/tools/ozone/team/updateMember.js'
export * as ToolsOzoneVerificationDefs from './types/tools/ozone/verification/defs.js'
export * as ToolsOzoneVerificationGrantVerifications from './types/tools/ozone/verification/grantVerifications.js'
export * as ToolsOzoneVerificationListVerifications from './types/tools/ozone/verification/listVerifications.js'
export * as ToolsOzoneVerificationRevokeVerifications from './types/tools/ozone/verification/revokeVerifications.js'

export const APP_GNDR_ACTOR = {
  StatusLive: 'app.gndr.actor.status#live',
}
export const APP_GNDR_FEED = {
  DefsRequestLess: 'app.gndr.feed.defs#requestLess',
  DefsRequestMore: 'app.gndr.feed.defs#requestMore',
  DefsClickthroughItem: 'app.gndr.feed.defs#clickthroughItem',
  DefsClickthroughAuthor: 'app.gndr.feed.defs#clickthroughAuthor',
  DefsClickthroughReposter: 'app.gndr.feed.defs#clickthroughReposter',
  DefsClickthroughEmbed: 'app.gndr.feed.defs#clickthroughEmbed',
  DefsContentModeUnspecified: 'app.gndr.feed.defs#contentModeUnspecified',
  DefsContentModeVideo: 'app.gndr.feed.defs#contentModeVideo',
  DefsInteractionSeen: 'app.gndr.feed.defs#interactionSeen',
  DefsInteractionLike: 'app.gndr.feed.defs#interactionLike',
  DefsInteractionRepost: 'app.gndr.feed.defs#interactionRepost',
  DefsInteractionReply: 'app.gndr.feed.defs#interactionReply',
  DefsInteractionQuote: 'app.gndr.feed.defs#interactionQuote',
  DefsInteractionShare: 'app.gndr.feed.defs#interactionShare',
}
export const APP_GNDR_GRAPH = {
  DefsModlist: 'app.gndr.graph.defs#modlist',
  DefsCuratelist: 'app.gndr.graph.defs#curatelist',
  DefsReferencelist: 'app.gndr.graph.defs#referencelist',
}
export const COM_ATPROTO_MODERATION = {
  DefsReasonSpam: 'com.atproto.moderation.defs#reasonSpam',
  DefsReasonViolation: 'com.atproto.moderation.defs#reasonViolation',
  DefsReasonMisleading: 'com.atproto.moderation.defs#reasonMisleading',
  DefsReasonSexual: 'com.atproto.moderation.defs#reasonSexual',
  DefsReasonRude: 'com.atproto.moderation.defs#reasonRude',
  DefsReasonOther: 'com.atproto.moderation.defs#reasonOther',
  DefsReasonAppeal: 'com.atproto.moderation.defs#reasonAppeal',
}
export const TOOLS_OZONE_MODERATION = {
  DefsReviewOpen: 'tools.ozone.moderation.defs#reviewOpen',
  DefsReviewEscalated: 'tools.ozone.moderation.defs#reviewEscalated',
  DefsReviewClosed: 'tools.ozone.moderation.defs#reviewClosed',
  DefsReviewNone: 'tools.ozone.moderation.defs#reviewNone',
  DefsTimelineEventPlcCreate:
    'tools.ozone.moderation.defs#timelineEventPlcCreate',
  DefsTimelineEventPlcOperation:
    'tools.ozone.moderation.defs#timelineEventPlcOperation',
  DefsTimelineEventPlcTombstone:
    'tools.ozone.moderation.defs#timelineEventPlcTombstone',
}
export const TOOLS_OZONE_REPORT = {
  DefsReasonAppeal: 'tools.ozone.report.defs#reasonAppeal',
  DefsReasonViolenceAnimalWelfare:
    'tools.ozone.report.defs#reasonViolenceAnimalWelfare',
  DefsReasonViolenceThreats: 'tools.ozone.report.defs#reasonViolenceThreats',
  DefsReasonViolenceGraphicContent:
    'tools.ozone.report.defs#reasonViolenceGraphicContent',
  DefsReasonViolenceSelfHarm: 'tools.ozone.report.defs#reasonViolenceSelfHarm',
  DefsReasonViolenceGlorification:
    'tools.ozone.report.defs#reasonViolenceGlorification',
  DefsReasonViolenceExtremistContent:
    'tools.ozone.report.defs#reasonViolenceExtremistContent',
  DefsReasonViolenceTrafficking:
    'tools.ozone.report.defs#reasonViolenceTrafficking',
  DefsReasonViolenceOther: 'tools.ozone.report.defs#reasonViolenceOther',
  DefsReasonSexualAbuseContent:
    'tools.ozone.report.defs#reasonSexualAbuseContent',
  DefsReasonSexualNCII: 'tools.ozone.report.defs#reasonSexualNCII',
  DefsReasonSexualSextortion: 'tools.ozone.report.defs#reasonSexualSextortion',
  DefsReasonSexualDeepfake: 'tools.ozone.report.defs#reasonSexualDeepfake',
  DefsReasonSexualAnimal: 'tools.ozone.report.defs#reasonSexualAnimal',
  DefsReasonSexualUnlabeled: 'tools.ozone.report.defs#reasonSexualUnlabeled',
  DefsReasonSexualOther: 'tools.ozone.report.defs#reasonSexualOther',
  DefsReasonChildSafetyCSAM: 'tools.ozone.report.defs#reasonChildSafetyCSAM',
  DefsReasonChildSafetyGroom: 'tools.ozone.report.defs#reasonChildSafetyGroom',
  DefsReasonChildSafetyMinorPrivacy:
    'tools.ozone.report.defs#reasonChildSafetyMinorPrivacy',
  DefsReasonChildSafetyEndangerment:
    'tools.ozone.report.defs#reasonChildSafetyEndangerment',
  DefsReasonChildSafetyHarassment:
    'tools.ozone.report.defs#reasonChildSafetyHarassment',
  DefsReasonChildSafetyPromotion:
    'tools.ozone.report.defs#reasonChildSafetyPromotion',
  DefsReasonChildSafetyOther: 'tools.ozone.report.defs#reasonChildSafetyOther',
  DefsReasonHarassmentTroll: 'tools.ozone.report.defs#reasonHarassmentTroll',
  DefsReasonHarassmentTargeted:
    'tools.ozone.report.defs#reasonHarassmentTargeted',
  DefsReasonHarassmentHateSpeech:
    'tools.ozone.report.defs#reasonHarassmentHateSpeech',
  DefsReasonHarassmentDoxxing:
    'tools.ozone.report.defs#reasonHarassmentDoxxing',
  DefsReasonHarassmentOther: 'tools.ozone.report.defs#reasonHarassmentOther',
  DefsReasonMisleadingBot: 'tools.ozone.report.defs#reasonMisleadingBot',
  DefsReasonMisleadingImpersonation:
    'tools.ozone.report.defs#reasonMisleadingImpersonation',
  DefsReasonMisleadingSpam: 'tools.ozone.report.defs#reasonMisleadingSpam',
  DefsReasonMisleadingScam: 'tools.ozone.report.defs#reasonMisleadingScam',
  DefsReasonMisleadingSyntheticContent:
    'tools.ozone.report.defs#reasonMisleadingSyntheticContent',
  DefsReasonMisleadingMisinformation:
    'tools.ozone.report.defs#reasonMisleadingMisinformation',
  DefsReasonMisleadingOther: 'tools.ozone.report.defs#reasonMisleadingOther',
  DefsReasonRuleSiteSecurity: 'tools.ozone.report.defs#reasonRuleSiteSecurity',
  DefsReasonRuleStolenContent:
    'tools.ozone.report.defs#reasonRuleStolenContent',
  DefsReasonRuleProhibitedSales:
    'tools.ozone.report.defs#reasonRuleProhibitedSales',
  DefsReasonRuleBanEvasion: 'tools.ozone.report.defs#reasonRuleBanEvasion',
  DefsReasonRuleOther: 'tools.ozone.report.defs#reasonRuleOther',
  DefsReasonCivicElectoralProcess:
    'tools.ozone.report.defs#reasonCivicElectoralProcess',
  DefsReasonCivicDisclosure: 'tools.ozone.report.defs#reasonCivicDisclosure',
  DefsReasonCivicInterference:
    'tools.ozone.report.defs#reasonCivicInterference',
  DefsReasonCivicMisinformation:
    'tools.ozone.report.defs#reasonCivicMisinformation',
  DefsReasonCivicImpersonation:
    'tools.ozone.report.defs#reasonCivicImpersonation',
}
export const TOOLS_OZONE_TEAM = {
  DefsRoleAdmin: 'tools.ozone.team.defs#roleAdmin',
  DefsRoleModerator: 'tools.ozone.team.defs#roleModerator',
  DefsRoleTriage: 'tools.ozone.team.defs#roleTriage',
  DefsRoleVerifier: 'tools.ozone.team.defs#roleVerifier',
}

export class AtpBaseClient extends XrpcClient {
  app: AppNS
  chat: ChatNS
  com: ComNS
  tools: ToolsNS

  constructor(options: FetchHandler | FetchHandlerOptions) {
    super(options, schemas)
    this.app = new AppNS(this)
    this.chat = new ChatNS(this)
    this.com = new ComNS(this)
    this.tools = new ToolsNS(this)
  }

  /** @deprecated use `this` instead */
  get xrpc(): XrpcClient {
    return this
  }
}

export class AppNS {
  _client: XrpcClient
  gndr: AppGndrNS

  constructor(client: XrpcClient) {
    this._client = client
    this.gndr = new AppGndrNS(client)
  }
}

export class AppGndrNS {
  _client: XrpcClient
  actor: AppGndrActorNS
  bookmark: AppGndrBookmarkNS
  embed: AppGndrEmbedNS
  feed: AppGndrFeedNS
  graph: AppGndrGraphNS
  labeler: AppGndrLabelerNS
  notification: AppGndrNotificationNS
  richtext: AppGndrRichtextNS
  unspecced: AppGndrUnspeccedNS
  video: AppGndrVideoNS

  constructor(client: XrpcClient) {
    this._client = client
    this.actor = new AppGndrActorNS(client)
    this.bookmark = new AppGndrBookmarkNS(client)
    this.embed = new AppGndrEmbedNS(client)
    this.feed = new AppGndrFeedNS(client)
    this.graph = new AppGndrGraphNS(client)
    this.labeler = new AppGndrLabelerNS(client)
    this.notification = new AppGndrNotificationNS(client)
    this.richtext = new AppGndrRichtextNS(client)
    this.unspecced = new AppGndrUnspeccedNS(client)
    this.video = new AppGndrVideoNS(client)
  }
}

export class AppGndrActorNS {
  _client: XrpcClient
  profile: AppGndrActorProfileRecord
  status: AppGndrActorStatusRecord

  constructor(client: XrpcClient) {
    this._client = client
    this.profile = new AppGndrActorProfileRecord(client)
    this.status = new AppGndrActorStatusRecord(client)
  }

  getPreferences(
    params?: AppGndrActorGetPreferences.QueryParams,
    opts?: AppGndrActorGetPreferences.CallOptions,
  ): Promise<AppGndrActorGetPreferences.Response> {
    return this._client.call(
      'app.gndr.actor.getPreferences',
      params,
      undefined,
      opts,
    )
  }

  getProfile(
    params?: AppGndrActorGetProfile.QueryParams,
    opts?: AppGndrActorGetProfile.CallOptions,
  ): Promise<AppGndrActorGetProfile.Response> {
    return this._client.call(
      'app.gndr.actor.getProfile',
      params,
      undefined,
      opts,
    )
  }

  getProfiles(
    params?: AppGndrActorGetProfiles.QueryParams,
    opts?: AppGndrActorGetProfiles.CallOptions,
  ): Promise<AppGndrActorGetProfiles.Response> {
    return this._client.call(
      'app.gndr.actor.getProfiles',
      params,
      undefined,
      opts,
    )
  }

  getSuggestions(
    params?: AppGndrActorGetSuggestions.QueryParams,
    opts?: AppGndrActorGetSuggestions.CallOptions,
  ): Promise<AppGndrActorGetSuggestions.Response> {
    return this._client.call(
      'app.gndr.actor.getSuggestions',
      params,
      undefined,
      opts,
    )
  }

  putPreferences(
    data?: AppGndrActorPutPreferences.InputSchema,
    opts?: AppGndrActorPutPreferences.CallOptions,
  ): Promise<AppGndrActorPutPreferences.Response> {
    return this._client.call(
      'app.gndr.actor.putPreferences',
      opts?.qp,
      data,
      opts,
    )
  }

  searchActors(
    params?: AppGndrActorSearchActors.QueryParams,
    opts?: AppGndrActorSearchActors.CallOptions,
  ): Promise<AppGndrActorSearchActors.Response> {
    return this._client.call(
      'app.gndr.actor.searchActors',
      params,
      undefined,
      opts,
    )
  }

  searchActorsTypeahead(
    params?: AppGndrActorSearchActorsTypeahead.QueryParams,
    opts?: AppGndrActorSearchActorsTypeahead.CallOptions,
  ): Promise<AppGndrActorSearchActorsTypeahead.Response> {
    return this._client.call(
      'app.gndr.actor.searchActorsTypeahead',
      params,
      undefined,
      opts,
    )
  }
}

export class AppGndrActorProfileRecord {
  _client: XrpcClient

  constructor(client: XrpcClient) {
    this._client = client
  }

  async list(
    params: OmitKey<ComAtprotoRepoListRecords.QueryParams, 'collection'>,
  ): Promise<{
    cursor?: string
    records: { uri: string; value: AppGndrActorProfile.Record }[]
  }> {
    const res = await this._client.call('com.atproto.repo.listRecords', {
      collection: 'app.gndr.actor.profile',
      ...params,
    })
    return res.data
  }

  async get(
    params: OmitKey<ComAtprotoRepoGetRecord.QueryParams, 'collection'>,
  ): Promise<{ uri: string; cid: string; value: AppGndrActorProfile.Record }> {
    const res = await this._client.call('com.atproto.repo.getRecord', {
      collection: 'app.gndr.actor.profile',
      ...params,
    })
    return res.data
  }

  async create(
    params: OmitKey<
      ComAtprotoRepoCreateRecord.InputSchema,
      'collection' | 'record'
    >,
    record: Un$Typed<AppGndrActorProfile.Record>,
    headers?: Record<string, string>,
  ): Promise<{ uri: string; cid: string }> {
    const collection = 'app.gndr.actor.profile'
    const res = await this._client.call(
      'com.atproto.repo.createRecord',
      undefined,
      {
        collection,
        rkey: 'self',
        ...params,
        record: { ...record, $type: collection },
      },
      { encoding: 'application/json', headers },
    )
    return res.data
  }

  async put(
    params: OmitKey<
      ComAtprotoRepoPutRecord.InputSchema,
      'collection' | 'record'
    >,
    record: Un$Typed<AppGndrActorProfile.Record>,
    headers?: Record<string, string>,
  ): Promise<{ uri: string; cid: string }> {
    const collection = 'app.gndr.actor.profile'
    const res = await this._client.call(
      'com.atproto.repo.putRecord',
      undefined,
      { collection, ...params, record: { ...record, $type: collection } },
      { encoding: 'application/json', headers },
    )
    return res.data
  }

  async delete(
    params: OmitKey<ComAtprotoRepoDeleteRecord.InputSchema, 'collection'>,
    headers?: Record<string, string>,
  ): Promise<void> {
    await this._client.call(
      'com.atproto.repo.deleteRecord',
      undefined,
      { collection: 'app.gndr.actor.profile', ...params },
      { headers },
    )
  }
}

export class AppGndrActorStatusRecord {
  _client: XrpcClient

  constructor(client: XrpcClient) {
    this._client = client
  }

  async list(
    params: OmitKey<ComAtprotoRepoListRecords.QueryParams, 'collection'>,
  ): Promise<{
    cursor?: string
    records: { uri: string; value: AppGndrActorStatus.Record }[]
  }> {
    const res = await this._client.call('com.atproto.repo.listRecords', {
      collection: 'app.gndr.actor.status',
      ...params,
    })
    return res.data
  }

  async get(
    params: OmitKey<ComAtprotoRepoGetRecord.QueryParams, 'collection'>,
  ): Promise<{ uri: string; cid: string; value: AppGndrActorStatus.Record }> {
    const res = await this._client.call('com.atproto.repo.getRecord', {
      collection: 'app.gndr.actor.status',
      ...params,
    })
    return res.data
  }

  async create(
    params: OmitKey<
      ComAtprotoRepoCreateRecord.InputSchema,
      'collection' | 'record'
    >,
    record: Un$Typed<AppGndrActorStatus.Record>,
    headers?: Record<string, string>,
  ): Promise<{ uri: string; cid: string }> {
    const collection = 'app.gndr.actor.status'
    const res = await this._client.call(
      'com.atproto.repo.createRecord',
      undefined,
      {
        collection,
        rkey: 'self',
        ...params,
        record: { ...record, $type: collection },
      },
      { encoding: 'application/json', headers },
    )
    return res.data
  }

  async put(
    params: OmitKey<
      ComAtprotoRepoPutRecord.InputSchema,
      'collection' | 'record'
    >,
    record: Un$Typed<AppGndrActorStatus.Record>,
    headers?: Record<string, string>,
  ): Promise<{ uri: string; cid: string }> {
    const collection = 'app.gndr.actor.status'
    const res = await this._client.call(
      'com.atproto.repo.putRecord',
      undefined,
      { collection, ...params, record: { ...record, $type: collection } },
      { encoding: 'application/json', headers },
    )
    return res.data
  }

  async delete(
    params: OmitKey<ComAtprotoRepoDeleteRecord.InputSchema, 'collection'>,
    headers?: Record<string, string>,
  ): Promise<void> {
    await this._client.call(
      'com.atproto.repo.deleteRecord',
      undefined,
      { collection: 'app.gndr.actor.status', ...params },
      { headers },
    )
  }
}

export class AppGndrBookmarkNS {
  _client: XrpcClient

  constructor(client: XrpcClient) {
    this._client = client
  }

  createBookmark(
    data?: AppGndrBookmarkCreateBookmark.InputSchema,
    opts?: AppGndrBookmarkCreateBookmark.CallOptions,
  ): Promise<AppGndrBookmarkCreateBookmark.Response> {
    return this._client
      .call('app.gndr.bookmark.createBookmark', opts?.qp, data, opts)
      .catch((e) => {
        throw AppGndrBookmarkCreateBookmark.toKnownErr(e)
      })
  }

  deleteBookmark(
    data?: AppGndrBookmarkDeleteBookmark.InputSchema,
    opts?: AppGndrBookmarkDeleteBookmark.CallOptions,
  ): Promise<AppGndrBookmarkDeleteBookmark.Response> {
    return this._client
      .call('app.gndr.bookmark.deleteBookmark', opts?.qp, data, opts)
      .catch((e) => {
        throw AppGndrBookmarkDeleteBookmark.toKnownErr(e)
      })
  }

  getBookmarks(
    params?: AppGndrBookmarkGetBookmarks.QueryParams,
    opts?: AppGndrBookmarkGetBookmarks.CallOptions,
  ): Promise<AppGndrBookmarkGetBookmarks.Response> {
    return this._client.call(
      'app.gndr.bookmark.getBookmarks',
      params,
      undefined,
      opts,
    )
  }
}

export class AppGndrEmbedNS {
  _client: XrpcClient

  constructor(client: XrpcClient) {
    this._client = client
  }
}

export class AppGndrFeedNS {
  _client: XrpcClient
  generator: AppGndrFeedGeneratorRecord
  like: AppGndrFeedLikeRecord
  post: AppGndrFeedPostRecord
  postgate: AppGndrFeedPostgateRecord
  repost: AppGndrFeedRepostRecord
  threadgate: AppGndrFeedThreadgateRecord

  constructor(client: XrpcClient) {
    this._client = client
    this.generator = new AppGndrFeedGeneratorRecord(client)
    this.like = new AppGndrFeedLikeRecord(client)
    this.post = new AppGndrFeedPostRecord(client)
    this.postgate = new AppGndrFeedPostgateRecord(client)
    this.repost = new AppGndrFeedRepostRecord(client)
    this.threadgate = new AppGndrFeedThreadgateRecord(client)
  }

  describeFeedGenerator(
    params?: AppGndrFeedDescribeFeedGenerator.QueryParams,
    opts?: AppGndrFeedDescribeFeedGenerator.CallOptions,
  ): Promise<AppGndrFeedDescribeFeedGenerator.Response> {
    return this._client.call(
      'app.gndr.feed.describeFeedGenerator',
      params,
      undefined,
      opts,
    )
  }

  getActorFeeds(
    params?: AppGndrFeedGetActorFeeds.QueryParams,
    opts?: AppGndrFeedGetActorFeeds.CallOptions,
  ): Promise<AppGndrFeedGetActorFeeds.Response> {
    return this._client.call(
      'app.gndr.feed.getActorFeeds',
      params,
      undefined,
      opts,
    )
  }

  getActorLikes(
    params?: AppGndrFeedGetActorLikes.QueryParams,
    opts?: AppGndrFeedGetActorLikes.CallOptions,
  ): Promise<AppGndrFeedGetActorLikes.Response> {
    return this._client
      .call('app.gndr.feed.getActorLikes', params, undefined, opts)
      .catch((e) => {
        throw AppGndrFeedGetActorLikes.toKnownErr(e)
      })
  }

  getAuthorFeed(
    params?: AppGndrFeedGetAuthorFeed.QueryParams,
    opts?: AppGndrFeedGetAuthorFeed.CallOptions,
  ): Promise<AppGndrFeedGetAuthorFeed.Response> {
    return this._client
      .call('app.gndr.feed.getAuthorFeed', params, undefined, opts)
      .catch((e) => {
        throw AppGndrFeedGetAuthorFeed.toKnownErr(e)
      })
  }

  getFeed(
    params?: AppGndrFeedGetFeed.QueryParams,
    opts?: AppGndrFeedGetFeed.CallOptions,
  ): Promise<AppGndrFeedGetFeed.Response> {
    return this._client
      .call('app.gndr.feed.getFeed', params, undefined, opts)
      .catch((e) => {
        throw AppGndrFeedGetFeed.toKnownErr(e)
      })
  }

  getFeedGenerator(
    params?: AppGndrFeedGetFeedGenerator.QueryParams,
    opts?: AppGndrFeedGetFeedGenerator.CallOptions,
  ): Promise<AppGndrFeedGetFeedGenerator.Response> {
    return this._client.call(
      'app.gndr.feed.getFeedGenerator',
      params,
      undefined,
      opts,
    )
  }

  getFeedGenerators(
    params?: AppGndrFeedGetFeedGenerators.QueryParams,
    opts?: AppGndrFeedGetFeedGenerators.CallOptions,
  ): Promise<AppGndrFeedGetFeedGenerators.Response> {
    return this._client.call(
      'app.gndr.feed.getFeedGenerators',
      params,
      undefined,
      opts,
    )
  }

  getFeedSkeleton(
    params?: AppGndrFeedGetFeedSkeleton.QueryParams,
    opts?: AppGndrFeedGetFeedSkeleton.CallOptions,
  ): Promise<AppGndrFeedGetFeedSkeleton.Response> {
    return this._client
      .call('app.gndr.feed.getFeedSkeleton', params, undefined, opts)
      .catch((e) => {
        throw AppGndrFeedGetFeedSkeleton.toKnownErr(e)
      })
  }

  getLikes(
    params?: AppGndrFeedGetLikes.QueryParams,
    opts?: AppGndrFeedGetLikes.CallOptions,
  ): Promise<AppGndrFeedGetLikes.Response> {
    return this._client.call('app.gndr.feed.getLikes', params, undefined, opts)
  }

  getListFeed(
    params?: AppGndrFeedGetListFeed.QueryParams,
    opts?: AppGndrFeedGetListFeed.CallOptions,
  ): Promise<AppGndrFeedGetListFeed.Response> {
    return this._client
      .call('app.gndr.feed.getListFeed', params, undefined, opts)
      .catch((e) => {
        throw AppGndrFeedGetListFeed.toKnownErr(e)
      })
  }

  getPostThread(
    params?: AppGndrFeedGetPostThread.QueryParams,
    opts?: AppGndrFeedGetPostThread.CallOptions,
  ): Promise<AppGndrFeedGetPostThread.Response> {
    return this._client
      .call('app.gndr.feed.getPostThread', params, undefined, opts)
      .catch((e) => {
        throw AppGndrFeedGetPostThread.toKnownErr(e)
      })
  }

  getPosts(
    params?: AppGndrFeedGetPosts.QueryParams,
    opts?: AppGndrFeedGetPosts.CallOptions,
  ): Promise<AppGndrFeedGetPosts.Response> {
    return this._client.call('app.gndr.feed.getPosts', params, undefined, opts)
  }

  getQuotes(
    params?: AppGndrFeedGetQuotes.QueryParams,
    opts?: AppGndrFeedGetQuotes.CallOptions,
  ): Promise<AppGndrFeedGetQuotes.Response> {
    return this._client.call('app.gndr.feed.getQuotes', params, undefined, opts)
  }

  getRepostedBy(
    params?: AppGndrFeedGetRepostedBy.QueryParams,
    opts?: AppGndrFeedGetRepostedBy.CallOptions,
  ): Promise<AppGndrFeedGetRepostedBy.Response> {
    return this._client.call(
      'app.gndr.feed.getRepostedBy',
      params,
      undefined,
      opts,
    )
  }

  getSuggestedFeeds(
    params?: AppGndrFeedGetSuggestedFeeds.QueryParams,
    opts?: AppGndrFeedGetSuggestedFeeds.CallOptions,
  ): Promise<AppGndrFeedGetSuggestedFeeds.Response> {
    return this._client.call(
      'app.gndr.feed.getSuggestedFeeds',
      params,
      undefined,
      opts,
    )
  }

  getTimeline(
    params?: AppGndrFeedGetTimeline.QueryParams,
    opts?: AppGndrFeedGetTimeline.CallOptions,
  ): Promise<AppGndrFeedGetTimeline.Response> {
    return this._client.call(
      'app.gndr.feed.getTimeline',
      params,
      undefined,
      opts,
    )
  }

  searchPosts(
    params?: AppGndrFeedSearchPosts.QueryParams,
    opts?: AppGndrFeedSearchPosts.CallOptions,
  ): Promise<AppGndrFeedSearchPosts.Response> {
    return this._client
      .call('app.gndr.feed.searchPosts', params, undefined, opts)
      .catch((e) => {
        throw AppGndrFeedSearchPosts.toKnownErr(e)
      })
  }

  sendInteractions(
    data?: AppGndrFeedSendInteractions.InputSchema,
    opts?: AppGndrFeedSendInteractions.CallOptions,
  ): Promise<AppGndrFeedSendInteractions.Response> {
    return this._client.call(
      'app.gndr.feed.sendInteractions',
      opts?.qp,
      data,
      opts,
    )
  }
}

export class AppGndrFeedGeneratorRecord {
  _client: XrpcClient

  constructor(client: XrpcClient) {
    this._client = client
  }

  async list(
    params: OmitKey<ComAtprotoRepoListRecords.QueryParams, 'collection'>,
  ): Promise<{
    cursor?: string
    records: { uri: string; value: AppGndrFeedGenerator.Record }[]
  }> {
    const res = await this._client.call('com.atproto.repo.listRecords', {
      collection: 'app.gndr.feed.generator',
      ...params,
    })
    return res.data
  }

  async get(
    params: OmitKey<ComAtprotoRepoGetRecord.QueryParams, 'collection'>,
  ): Promise<{ uri: string; cid: string; value: AppGndrFeedGenerator.Record }> {
    const res = await this._client.call('com.atproto.repo.getRecord', {
      collection: 'app.gndr.feed.generator',
      ...params,
    })
    return res.data
  }

  async create(
    params: OmitKey<
      ComAtprotoRepoCreateRecord.InputSchema,
      'collection' | 'record'
    >,
    record: Un$Typed<AppGndrFeedGenerator.Record>,
    headers?: Record<string, string>,
  ): Promise<{ uri: string; cid: string }> {
    const collection = 'app.gndr.feed.generator'
    const res = await this._client.call(
      'com.atproto.repo.createRecord',
      undefined,
      { collection, ...params, record: { ...record, $type: collection } },
      { encoding: 'application/json', headers },
    )
    return res.data
  }

  async put(
    params: OmitKey<
      ComAtprotoRepoPutRecord.InputSchema,
      'collection' | 'record'
    >,
    record: Un$Typed<AppGndrFeedGenerator.Record>,
    headers?: Record<string, string>,
  ): Promise<{ uri: string; cid: string }> {
    const collection = 'app.gndr.feed.generator'
    const res = await this._client.call(
      'com.atproto.repo.putRecord',
      undefined,
      { collection, ...params, record: { ...record, $type: collection } },
      { encoding: 'application/json', headers },
    )
    return res.data
  }

  async delete(
    params: OmitKey<ComAtprotoRepoDeleteRecord.InputSchema, 'collection'>,
    headers?: Record<string, string>,
  ): Promise<void> {
    await this._client.call(
      'com.atproto.repo.deleteRecord',
      undefined,
      { collection: 'app.gndr.feed.generator', ...params },
      { headers },
    )
  }
}

export class AppGndrFeedLikeRecord {
  _client: XrpcClient

  constructor(client: XrpcClient) {
    this._client = client
  }

  async list(
    params: OmitKey<ComAtprotoRepoListRecords.QueryParams, 'collection'>,
  ): Promise<{
    cursor?: string
    records: { uri: string; value: AppGndrFeedLike.Record }[]
  }> {
    const res = await this._client.call('com.atproto.repo.listRecords', {
      collection: 'app.gndr.feed.like',
      ...params,
    })
    return res.data
  }

  async get(
    params: OmitKey<ComAtprotoRepoGetRecord.QueryParams, 'collection'>,
  ): Promise<{ uri: string; cid: string; value: AppGndrFeedLike.Record }> {
    const res = await this._client.call('com.atproto.repo.getRecord', {
      collection: 'app.gndr.feed.like',
      ...params,
    })
    return res.data
  }

  async create(
    params: OmitKey<
      ComAtprotoRepoCreateRecord.InputSchema,
      'collection' | 'record'
    >,
    record: Un$Typed<AppGndrFeedLike.Record>,
    headers?: Record<string, string>,
  ): Promise<{ uri: string; cid: string }> {
    const collection = 'app.gndr.feed.like'
    const res = await this._client.call(
      'com.atproto.repo.createRecord',
      undefined,
      { collection, ...params, record: { ...record, $type: collection } },
      { encoding: 'application/json', headers },
    )
    return res.data
  }

  async put(
    params: OmitKey<
      ComAtprotoRepoPutRecord.InputSchema,
      'collection' | 'record'
    >,
    record: Un$Typed<AppGndrFeedLike.Record>,
    headers?: Record<string, string>,
  ): Promise<{ uri: string; cid: string }> {
    const collection = 'app.gndr.feed.like'
    const res = await this._client.call(
      'com.atproto.repo.putRecord',
      undefined,
      { collection, ...params, record: { ...record, $type: collection } },
      { encoding: 'application/json', headers },
    )
    return res.data
  }

  async delete(
    params: OmitKey<ComAtprotoRepoDeleteRecord.InputSchema, 'collection'>,
    headers?: Record<string, string>,
  ): Promise<void> {
    await this._client.call(
      'com.atproto.repo.deleteRecord',
      undefined,
      { collection: 'app.gndr.feed.like', ...params },
      { headers },
    )
  }
}

export class AppGndrFeedPostRecord {
  _client: XrpcClient

  constructor(client: XrpcClient) {
    this._client = client
  }

  async list(
    params: OmitKey<ComAtprotoRepoListRecords.QueryParams, 'collection'>,
  ): Promise<{
    cursor?: string
    records: { uri: string; value: AppGndrFeedPost.Record }[]
  }> {
    const res = await this._client.call('com.atproto.repo.listRecords', {
      collection: 'app.gndr.feed.post',
      ...params,
    })
    return res.data
  }

  async get(
    params: OmitKey<ComAtprotoRepoGetRecord.QueryParams, 'collection'>,
  ): Promise<{ uri: string; cid: string; value: AppGndrFeedPost.Record }> {
    const res = await this._client.call('com.atproto.repo.getRecord', {
      collection: 'app.gndr.feed.post',
      ...params,
    })
    return res.data
  }

  async create(
    params: OmitKey<
      ComAtprotoRepoCreateRecord.InputSchema,
      'collection' | 'record'
    >,
    record: Un$Typed<AppGndrFeedPost.Record>,
    headers?: Record<string, string>,
  ): Promise<{ uri: string; cid: string }> {
    const collection = 'app.gndr.feed.post'
    const res = await this._client.call(
      'com.atproto.repo.createRecord',
      undefined,
      { collection, ...params, record: { ...record, $type: collection } },
      { encoding: 'application/json', headers },
    )
    return res.data
  }

  async put(
    params: OmitKey<
      ComAtprotoRepoPutRecord.InputSchema,
      'collection' | 'record'
    >,
    record: Un$Typed<AppGndrFeedPost.Record>,
    headers?: Record<string, string>,
  ): Promise<{ uri: string; cid: string }> {
    const collection = 'app.gndr.feed.post'
    const res = await this._client.call(
      'com.atproto.repo.putRecord',
      undefined,
      { collection, ...params, record: { ...record, $type: collection } },
      { encoding: 'application/json', headers },
    )
    return res.data
  }

  async delete(
    params: OmitKey<ComAtprotoRepoDeleteRecord.InputSchema, 'collection'>,
    headers?: Record<string, string>,
  ): Promise<void> {
    await this._client.call(
      'com.atproto.repo.deleteRecord',
      undefined,
      { collection: 'app.gndr.feed.post', ...params },
      { headers },
    )
  }
}

export class AppGndrFeedPostgateRecord {
  _client: XrpcClient

  constructor(client: XrpcClient) {
    this._client = client
  }

  async list(
    params: OmitKey<ComAtprotoRepoListRecords.QueryParams, 'collection'>,
  ): Promise<{
    cursor?: string
    records: { uri: string; value: AppGndrFeedPostgate.Record }[]
  }> {
    const res = await this._client.call('com.atproto.repo.listRecords', {
      collection: 'app.gndr.feed.postgate',
      ...params,
    })
    return res.data
  }

  async get(
    params: OmitKey<ComAtprotoRepoGetRecord.QueryParams, 'collection'>,
  ): Promise<{ uri: string; cid: string; value: AppGndrFeedPostgate.Record }> {
    const res = await this._client.call('com.atproto.repo.getRecord', {
      collection: 'app.gndr.feed.postgate',
      ...params,
    })
    return res.data
  }

  async create(
    params: OmitKey<
      ComAtprotoRepoCreateRecord.InputSchema,
      'collection' | 'record'
    >,
    record: Un$Typed<AppGndrFeedPostgate.Record>,
    headers?: Record<string, string>,
  ): Promise<{ uri: string; cid: string }> {
    const collection = 'app.gndr.feed.postgate'
    const res = await this._client.call(
      'com.atproto.repo.createRecord',
      undefined,
      { collection, ...params, record: { ...record, $type: collection } },
      { encoding: 'application/json', headers },
    )
    return res.data
  }

  async put(
    params: OmitKey<
      ComAtprotoRepoPutRecord.InputSchema,
      'collection' | 'record'
    >,
    record: Un$Typed<AppGndrFeedPostgate.Record>,
    headers?: Record<string, string>,
  ): Promise<{ uri: string; cid: string }> {
    const collection = 'app.gndr.feed.postgate'
    const res = await this._client.call(
      'com.atproto.repo.putRecord',
      undefined,
      { collection, ...params, record: { ...record, $type: collection } },
      { encoding: 'application/json', headers },
    )
    return res.data
  }

  async delete(
    params: OmitKey<ComAtprotoRepoDeleteRecord.InputSchema, 'collection'>,
    headers?: Record<string, string>,
  ): Promise<void> {
    await this._client.call(
      'com.atproto.repo.deleteRecord',
      undefined,
      { collection: 'app.gndr.feed.postgate', ...params },
      { headers },
    )
  }
}

export class AppGndrFeedRepostRecord {
  _client: XrpcClient

  constructor(client: XrpcClient) {
    this._client = client
  }

  async list(
    params: OmitKey<ComAtprotoRepoListRecords.QueryParams, 'collection'>,
  ): Promise<{
    cursor?: string
    records: { uri: string; value: AppGndrFeedRepost.Record }[]
  }> {
    const res = await this._client.call('com.atproto.repo.listRecords', {
      collection: 'app.gndr.feed.repost',
      ...params,
    })
    return res.data
  }

  async get(
    params: OmitKey<ComAtprotoRepoGetRecord.QueryParams, 'collection'>,
  ): Promise<{ uri: string; cid: string; value: AppGndrFeedRepost.Record }> {
    const res = await this._client.call('com.atproto.repo.getRecord', {
      collection: 'app.gndr.feed.repost',
      ...params,
    })
    return res.data
  }

  async create(
    params: OmitKey<
      ComAtprotoRepoCreateRecord.InputSchema,
      'collection' | 'record'
    >,
    record: Un$Typed<AppGndrFeedRepost.Record>,
    headers?: Record<string, string>,
  ): Promise<{ uri: string; cid: string }> {
    const collection = 'app.gndr.feed.repost'
    const res = await this._client.call(
      'com.atproto.repo.createRecord',
      undefined,
      { collection, ...params, record: { ...record, $type: collection } },
      { encoding: 'application/json', headers },
    )
    return res.data
  }

  async put(
    params: OmitKey<
      ComAtprotoRepoPutRecord.InputSchema,
      'collection' | 'record'
    >,
    record: Un$Typed<AppGndrFeedRepost.Record>,
    headers?: Record<string, string>,
  ): Promise<{ uri: string; cid: string }> {
    const collection = 'app.gndr.feed.repost'
    const res = await this._client.call(
      'com.atproto.repo.putRecord',
      undefined,
      { collection, ...params, record: { ...record, $type: collection } },
      { encoding: 'application/json', headers },
    )
    return res.data
  }

  async delete(
    params: OmitKey<ComAtprotoRepoDeleteRecord.InputSchema, 'collection'>,
    headers?: Record<string, string>,
  ): Promise<void> {
    await this._client.call(
      'com.atproto.repo.deleteRecord',
      undefined,
      { collection: 'app.gndr.feed.repost', ...params },
      { headers },
    )
  }
}

export class AppGndrFeedThreadgateRecord {
  _client: XrpcClient

  constructor(client: XrpcClient) {
    this._client = client
  }

  async list(
    params: OmitKey<ComAtprotoRepoListRecords.QueryParams, 'collection'>,
  ): Promise<{
    cursor?: string
    records: { uri: string; value: AppGndrFeedThreadgate.Record }[]
  }> {
    const res = await this._client.call('com.atproto.repo.listRecords', {
      collection: 'app.gndr.feed.threadgate',
      ...params,
    })
    return res.data
  }

  async get(
    params: OmitKey<ComAtprotoRepoGetRecord.QueryParams, 'collection'>,
  ): Promise<{
    uri: string
    cid: string
    value: AppGndrFeedThreadgate.Record
  }> {
    const res = await this._client.call('com.atproto.repo.getRecord', {
      collection: 'app.gndr.feed.threadgate',
      ...params,
    })
    return res.data
  }

  async create(
    params: OmitKey<
      ComAtprotoRepoCreateRecord.InputSchema,
      'collection' | 'record'
    >,
    record: Un$Typed<AppGndrFeedThreadgate.Record>,
    headers?: Record<string, string>,
  ): Promise<{ uri: string; cid: string }> {
    const collection = 'app.gndr.feed.threadgate'
    const res = await this._client.call(
      'com.atproto.repo.createRecord',
      undefined,
      { collection, ...params, record: { ...record, $type: collection } },
      { encoding: 'application/json', headers },
    )
    return res.data
  }

  async put(
    params: OmitKey<
      ComAtprotoRepoPutRecord.InputSchema,
      'collection' | 'record'
    >,
    record: Un$Typed<AppGndrFeedThreadgate.Record>,
    headers?: Record<string, string>,
  ): Promise<{ uri: string; cid: string }> {
    const collection = 'app.gndr.feed.threadgate'
    const res = await this._client.call(
      'com.atproto.repo.putRecord',
      undefined,
      { collection, ...params, record: { ...record, $type: collection } },
      { encoding: 'application/json', headers },
    )
    return res.data
  }

  async delete(
    params: OmitKey<ComAtprotoRepoDeleteRecord.InputSchema, 'collection'>,
    headers?: Record<string, string>,
  ): Promise<void> {
    await this._client.call(
      'com.atproto.repo.deleteRecord',
      undefined,
      { collection: 'app.gndr.feed.threadgate', ...params },
      { headers },
    )
  }
}

export class AppGndrGraphNS {
  _client: XrpcClient
  block: AppGndrGraphBlockRecord
  follow: AppGndrGraphFollowRecord
  list: AppGndrGraphListRecord
  listblock: AppGndrGraphListblockRecord
  listitem: AppGndrGraphListitemRecord
  starterpack: AppGndrGraphStarterpackRecord
  verification: AppGndrGraphVerificationRecord

  constructor(client: XrpcClient) {
    this._client = client
    this.block = new AppGndrGraphBlockRecord(client)
    this.follow = new AppGndrGraphFollowRecord(client)
    this.list = new AppGndrGraphListRecord(client)
    this.listblock = new AppGndrGraphListblockRecord(client)
    this.listitem = new AppGndrGraphListitemRecord(client)
    this.starterpack = new AppGndrGraphStarterpackRecord(client)
    this.verification = new AppGndrGraphVerificationRecord(client)
  }

  getActorStarterPacks(
    params?: AppGndrGraphGetActorStarterPacks.QueryParams,
    opts?: AppGndrGraphGetActorStarterPacks.CallOptions,
  ): Promise<AppGndrGraphGetActorStarterPacks.Response> {
    return this._client.call(
      'app.gndr.graph.getActorStarterPacks',
      params,
      undefined,
      opts,
    )
  }

  getBlocks(
    params?: AppGndrGraphGetBlocks.QueryParams,
    opts?: AppGndrGraphGetBlocks.CallOptions,
  ): Promise<AppGndrGraphGetBlocks.Response> {
    return this._client.call(
      'app.gndr.graph.getBlocks',
      params,
      undefined,
      opts,
    )
  }

  getFollowers(
    params?: AppGndrGraphGetFollowers.QueryParams,
    opts?: AppGndrGraphGetFollowers.CallOptions,
  ): Promise<AppGndrGraphGetFollowers.Response> {
    return this._client.call(
      'app.gndr.graph.getFollowers',
      params,
      undefined,
      opts,
    )
  }

  getFollows(
    params?: AppGndrGraphGetFollows.QueryParams,
    opts?: AppGndrGraphGetFollows.CallOptions,
  ): Promise<AppGndrGraphGetFollows.Response> {
    return this._client.call(
      'app.gndr.graph.getFollows',
      params,
      undefined,
      opts,
    )
  }

  getKnownFollowers(
    params?: AppGndrGraphGetKnownFollowers.QueryParams,
    opts?: AppGndrGraphGetKnownFollowers.CallOptions,
  ): Promise<AppGndrGraphGetKnownFollowers.Response> {
    return this._client.call(
      'app.gndr.graph.getKnownFollowers',
      params,
      undefined,
      opts,
    )
  }

  getList(
    params?: AppGndrGraphGetList.QueryParams,
    opts?: AppGndrGraphGetList.CallOptions,
  ): Promise<AppGndrGraphGetList.Response> {
    return this._client.call('app.gndr.graph.getList', params, undefined, opts)
  }

  getListBlocks(
    params?: AppGndrGraphGetListBlocks.QueryParams,
    opts?: AppGndrGraphGetListBlocks.CallOptions,
  ): Promise<AppGndrGraphGetListBlocks.Response> {
    return this._client.call(
      'app.gndr.graph.getListBlocks',
      params,
      undefined,
      opts,
    )
  }

  getListMutes(
    params?: AppGndrGraphGetListMutes.QueryParams,
    opts?: AppGndrGraphGetListMutes.CallOptions,
  ): Promise<AppGndrGraphGetListMutes.Response> {
    return this._client.call(
      'app.gndr.graph.getListMutes',
      params,
      undefined,
      opts,
    )
  }

  getLists(
    params?: AppGndrGraphGetLists.QueryParams,
    opts?: AppGndrGraphGetLists.CallOptions,
  ): Promise<AppGndrGraphGetLists.Response> {
    return this._client.call('app.gndr.graph.getLists', params, undefined, opts)
  }

  getListsWithMembership(
    params?: AppGndrGraphGetListsWithMembership.QueryParams,
    opts?: AppGndrGraphGetListsWithMembership.CallOptions,
  ): Promise<AppGndrGraphGetListsWithMembership.Response> {
    return this._client.call(
      'app.gndr.graph.getListsWithMembership',
      params,
      undefined,
      opts,
    )
  }

  getMutes(
    params?: AppGndrGraphGetMutes.QueryParams,
    opts?: AppGndrGraphGetMutes.CallOptions,
  ): Promise<AppGndrGraphGetMutes.Response> {
    return this._client.call('app.gndr.graph.getMutes', params, undefined, opts)
  }

  getRelationships(
    params?: AppGndrGraphGetRelationships.QueryParams,
    opts?: AppGndrGraphGetRelationships.CallOptions,
  ): Promise<AppGndrGraphGetRelationships.Response> {
    return this._client
      .call('app.gndr.graph.getRelationships', params, undefined, opts)
      .catch((e) => {
        throw AppGndrGraphGetRelationships.toKnownErr(e)
      })
  }

  getStarterPack(
    params?: AppGndrGraphGetStarterPack.QueryParams,
    opts?: AppGndrGraphGetStarterPack.CallOptions,
  ): Promise<AppGndrGraphGetStarterPack.Response> {
    return this._client.call(
      'app.gndr.graph.getStarterPack',
      params,
      undefined,
      opts,
    )
  }

  getStarterPacks(
    params?: AppGndrGraphGetStarterPacks.QueryParams,
    opts?: AppGndrGraphGetStarterPacks.CallOptions,
  ): Promise<AppGndrGraphGetStarterPacks.Response> {
    return this._client.call(
      'app.gndr.graph.getStarterPacks',
      params,
      undefined,
      opts,
    )
  }

  getStarterPacksWithMembership(
    params?: AppGndrGraphGetStarterPacksWithMembership.QueryParams,
    opts?: AppGndrGraphGetStarterPacksWithMembership.CallOptions,
  ): Promise<AppGndrGraphGetStarterPacksWithMembership.Response> {
    return this._client.call(
      'app.gndr.graph.getStarterPacksWithMembership',
      params,
      undefined,
      opts,
    )
  }

  getSuggestedFollowsByActor(
    params?: AppGndrGraphGetSuggestedFollowsByActor.QueryParams,
    opts?: AppGndrGraphGetSuggestedFollowsByActor.CallOptions,
  ): Promise<AppGndrGraphGetSuggestedFollowsByActor.Response> {
    return this._client.call(
      'app.gndr.graph.getSuggestedFollowsByActor',
      params,
      undefined,
      opts,
    )
  }

  muteActor(
    data?: AppGndrGraphMuteActor.InputSchema,
    opts?: AppGndrGraphMuteActor.CallOptions,
  ): Promise<AppGndrGraphMuteActor.Response> {
    return this._client.call('app.gndr.graph.muteActor', opts?.qp, data, opts)
  }

  muteActorList(
    data?: AppGndrGraphMuteActorList.InputSchema,
    opts?: AppGndrGraphMuteActorList.CallOptions,
  ): Promise<AppGndrGraphMuteActorList.Response> {
    return this._client.call(
      'app.gndr.graph.muteActorList',
      opts?.qp,
      data,
      opts,
    )
  }

  muteThread(
    data?: AppGndrGraphMuteThread.InputSchema,
    opts?: AppGndrGraphMuteThread.CallOptions,
  ): Promise<AppGndrGraphMuteThread.Response> {
    return this._client.call('app.gndr.graph.muteThread', opts?.qp, data, opts)
  }

  searchStarterPacks(
    params?: AppGndrGraphSearchStarterPacks.QueryParams,
    opts?: AppGndrGraphSearchStarterPacks.CallOptions,
  ): Promise<AppGndrGraphSearchStarterPacks.Response> {
    return this._client.call(
      'app.gndr.graph.searchStarterPacks',
      params,
      undefined,
      opts,
    )
  }

  unmuteActor(
    data?: AppGndrGraphUnmuteActor.InputSchema,
    opts?: AppGndrGraphUnmuteActor.CallOptions,
  ): Promise<AppGndrGraphUnmuteActor.Response> {
    return this._client.call('app.gndr.graph.unmuteActor', opts?.qp, data, opts)
  }

  unmuteActorList(
    data?: AppGndrGraphUnmuteActorList.InputSchema,
    opts?: AppGndrGraphUnmuteActorList.CallOptions,
  ): Promise<AppGndrGraphUnmuteActorList.Response> {
    return this._client.call(
      'app.gndr.graph.unmuteActorList',
      opts?.qp,
      data,
      opts,
    )
  }

  unmuteThread(
    data?: AppGndrGraphUnmuteThread.InputSchema,
    opts?: AppGndrGraphUnmuteThread.CallOptions,
  ): Promise<AppGndrGraphUnmuteThread.Response> {
    return this._client.call(
      'app.gndr.graph.unmuteThread',
      opts?.qp,
      data,
      opts,
    )
  }
}

export class AppGndrGraphBlockRecord {
  _client: XrpcClient

  constructor(client: XrpcClient) {
    this._client = client
  }

  async list(
    params: OmitKey<ComAtprotoRepoListRecords.QueryParams, 'collection'>,
  ): Promise<{
    cursor?: string
    records: { uri: string; value: AppGndrGraphBlock.Record }[]
  }> {
    const res = await this._client.call('com.atproto.repo.listRecords', {
      collection: 'app.gndr.graph.block',
      ...params,
    })
    return res.data
  }

  async get(
    params: OmitKey<ComAtprotoRepoGetRecord.QueryParams, 'collection'>,
  ): Promise<{ uri: string; cid: string; value: AppGndrGraphBlock.Record }> {
    const res = await this._client.call('com.atproto.repo.getRecord', {
      collection: 'app.gndr.graph.block',
      ...params,
    })
    return res.data
  }

  async create(
    params: OmitKey<
      ComAtprotoRepoCreateRecord.InputSchema,
      'collection' | 'record'
    >,
    record: Un$Typed<AppGndrGraphBlock.Record>,
    headers?: Record<string, string>,
  ): Promise<{ uri: string; cid: string }> {
    const collection = 'app.gndr.graph.block'
    const res = await this._client.call(
      'com.atproto.repo.createRecord',
      undefined,
      { collection, ...params, record: { ...record, $type: collection } },
      { encoding: 'application/json', headers },
    )
    return res.data
  }

  async put(
    params: OmitKey<
      ComAtprotoRepoPutRecord.InputSchema,
      'collection' | 'record'
    >,
    record: Un$Typed<AppGndrGraphBlock.Record>,
    headers?: Record<string, string>,
  ): Promise<{ uri: string; cid: string }> {
    const collection = 'app.gndr.graph.block'
    const res = await this._client.call(
      'com.atproto.repo.putRecord',
      undefined,
      { collection, ...params, record: { ...record, $type: collection } },
      { encoding: 'application/json', headers },
    )
    return res.data
  }

  async delete(
    params: OmitKey<ComAtprotoRepoDeleteRecord.InputSchema, 'collection'>,
    headers?: Record<string, string>,
  ): Promise<void> {
    await this._client.call(
      'com.atproto.repo.deleteRecord',
      undefined,
      { collection: 'app.gndr.graph.block', ...params },
      { headers },
    )
  }
}

export class AppGndrGraphFollowRecord {
  _client: XrpcClient

  constructor(client: XrpcClient) {
    this._client = client
  }

  async list(
    params: OmitKey<ComAtprotoRepoListRecords.QueryParams, 'collection'>,
  ): Promise<{
    cursor?: string
    records: { uri: string; value: AppGndrGraphFollow.Record }[]
  }> {
    const res = await this._client.call('com.atproto.repo.listRecords', {
      collection: 'app.gndr.graph.follow',
      ...params,
    })
    return res.data
  }

  async get(
    params: OmitKey<ComAtprotoRepoGetRecord.QueryParams, 'collection'>,
  ): Promise<{ uri: string; cid: string; value: AppGndrGraphFollow.Record }> {
    const res = await this._client.call('com.atproto.repo.getRecord', {
      collection: 'app.gndr.graph.follow',
      ...params,
    })
    return res.data
  }

  async create(
    params: OmitKey<
      ComAtprotoRepoCreateRecord.InputSchema,
      'collection' | 'record'
    >,
    record: Un$Typed<AppGndrGraphFollow.Record>,
    headers?: Record<string, string>,
  ): Promise<{ uri: string; cid: string }> {
    const collection = 'app.gndr.graph.follow'
    const res = await this._client.call(
      'com.atproto.repo.createRecord',
      undefined,
      { collection, ...params, record: { ...record, $type: collection } },
      { encoding: 'application/json', headers },
    )
    return res.data
  }

  async put(
    params: OmitKey<
      ComAtprotoRepoPutRecord.InputSchema,
      'collection' | 'record'
    >,
    record: Un$Typed<AppGndrGraphFollow.Record>,
    headers?: Record<string, string>,
  ): Promise<{ uri: string; cid: string }> {
    const collection = 'app.gndr.graph.follow'
    const res = await this._client.call(
      'com.atproto.repo.putRecord',
      undefined,
      { collection, ...params, record: { ...record, $type: collection } },
      { encoding: 'application/json', headers },
    )
    return res.data
  }

  async delete(
    params: OmitKey<ComAtprotoRepoDeleteRecord.InputSchema, 'collection'>,
    headers?: Record<string, string>,
  ): Promise<void> {
    await this._client.call(
      'com.atproto.repo.deleteRecord',
      undefined,
      { collection: 'app.gndr.graph.follow', ...params },
      { headers },
    )
  }
}

export class AppGndrGraphListRecord {
  _client: XrpcClient

  constructor(client: XrpcClient) {
    this._client = client
  }

  async list(
    params: OmitKey<ComAtprotoRepoListRecords.QueryParams, 'collection'>,
  ): Promise<{
    cursor?: string
    records: { uri: string; value: AppGndrGraphList.Record }[]
  }> {
    const res = await this._client.call('com.atproto.repo.listRecords', {
      collection: 'app.gndr.graph.list',
      ...params,
    })
    return res.data
  }

  async get(
    params: OmitKey<ComAtprotoRepoGetRecord.QueryParams, 'collection'>,
  ): Promise<{ uri: string; cid: string; value: AppGndrGraphList.Record }> {
    const res = await this._client.call('com.atproto.repo.getRecord', {
      collection: 'app.gndr.graph.list',
      ...params,
    })
    return res.data
  }

  async create(
    params: OmitKey<
      ComAtprotoRepoCreateRecord.InputSchema,
      'collection' | 'record'
    >,
    record: Un$Typed<AppGndrGraphList.Record>,
    headers?: Record<string, string>,
  ): Promise<{ uri: string; cid: string }> {
    const collection = 'app.gndr.graph.list'
    const res = await this._client.call(
      'com.atproto.repo.createRecord',
      undefined,
      { collection, ...params, record: { ...record, $type: collection } },
      { encoding: 'application/json', headers },
    )
    return res.data
  }

  async put(
    params: OmitKey<
      ComAtprotoRepoPutRecord.InputSchema,
      'collection' | 'record'
    >,
    record: Un$Typed<AppGndrGraphList.Record>,
    headers?: Record<string, string>,
  ): Promise<{ uri: string; cid: string }> {
    const collection = 'app.gndr.graph.list'
    const res = await this._client.call(
      'com.atproto.repo.putRecord',
      undefined,
      { collection, ...params, record: { ...record, $type: collection } },
      { encoding: 'application/json', headers },
    )
    return res.data
  }

  async delete(
    params: OmitKey<ComAtprotoRepoDeleteRecord.InputSchema, 'collection'>,
    headers?: Record<string, string>,
  ): Promise<void> {
    await this._client.call(
      'com.atproto.repo.deleteRecord',
      undefined,
      { collection: 'app.gndr.graph.list', ...params },
      { headers },
    )
  }
}

export class AppGndrGraphListblockRecord {
  _client: XrpcClient

  constructor(client: XrpcClient) {
    this._client = client
  }

  async list(
    params: OmitKey<ComAtprotoRepoListRecords.QueryParams, 'collection'>,
  ): Promise<{
    cursor?: string
    records: { uri: string; value: AppGndrGraphListblock.Record }[]
  }> {
    const res = await this._client.call('com.atproto.repo.listRecords', {
      collection: 'app.gndr.graph.listblock',
      ...params,
    })
    return res.data
  }

  async get(
    params: OmitKey<ComAtprotoRepoGetRecord.QueryParams, 'collection'>,
  ): Promise<{
    uri: string
    cid: string
    value: AppGndrGraphListblock.Record
  }> {
    const res = await this._client.call('com.atproto.repo.getRecord', {
      collection: 'app.gndr.graph.listblock',
      ...params,
    })
    return res.data
  }

  async create(
    params: OmitKey<
      ComAtprotoRepoCreateRecord.InputSchema,
      'collection' | 'record'
    >,
    record: Un$Typed<AppGndrGraphListblock.Record>,
    headers?: Record<string, string>,
  ): Promise<{ uri: string; cid: string }> {
    const collection = 'app.gndr.graph.listblock'
    const res = await this._client.call(
      'com.atproto.repo.createRecord',
      undefined,
      { collection, ...params, record: { ...record, $type: collection } },
      { encoding: 'application/json', headers },
    )
    return res.data
  }

  async put(
    params: OmitKey<
      ComAtprotoRepoPutRecord.InputSchema,
      'collection' | 'record'
    >,
    record: Un$Typed<AppGndrGraphListblock.Record>,
    headers?: Record<string, string>,
  ): Promise<{ uri: string; cid: string }> {
    const collection = 'app.gndr.graph.listblock'
    const res = await this._client.call(
      'com.atproto.repo.putRecord',
      undefined,
      { collection, ...params, record: { ...record, $type: collection } },
      { encoding: 'application/json', headers },
    )
    return res.data
  }

  async delete(
    params: OmitKey<ComAtprotoRepoDeleteRecord.InputSchema, 'collection'>,
    headers?: Record<string, string>,
  ): Promise<void> {
    await this._client.call(
      'com.atproto.repo.deleteRecord',
      undefined,
      { collection: 'app.gndr.graph.listblock', ...params },
      { headers },
    )
  }
}

export class AppGndrGraphListitemRecord {
  _client: XrpcClient

  constructor(client: XrpcClient) {
    this._client = client
  }

  async list(
    params: OmitKey<ComAtprotoRepoListRecords.QueryParams, 'collection'>,
  ): Promise<{
    cursor?: string
    records: { uri: string; value: AppGndrGraphListitem.Record }[]
  }> {
    const res = await this._client.call('com.atproto.repo.listRecords', {
      collection: 'app.gndr.graph.listitem',
      ...params,
    })
    return res.data
  }

  async get(
    params: OmitKey<ComAtprotoRepoGetRecord.QueryParams, 'collection'>,
  ): Promise<{ uri: string; cid: string; value: AppGndrGraphListitem.Record }> {
    const res = await this._client.call('com.atproto.repo.getRecord', {
      collection: 'app.gndr.graph.listitem',
      ...params,
    })
    return res.data
  }

  async create(
    params: OmitKey<
      ComAtprotoRepoCreateRecord.InputSchema,
      'collection' | 'record'
    >,
    record: Un$Typed<AppGndrGraphListitem.Record>,
    headers?: Record<string, string>,
  ): Promise<{ uri: string; cid: string }> {
    const collection = 'app.gndr.graph.listitem'
    const res = await this._client.call(
      'com.atproto.repo.createRecord',
      undefined,
      { collection, ...params, record: { ...record, $type: collection } },
      { encoding: 'application/json', headers },
    )
    return res.data
  }

  async put(
    params: OmitKey<
      ComAtprotoRepoPutRecord.InputSchema,
      'collection' | 'record'
    >,
    record: Un$Typed<AppGndrGraphListitem.Record>,
    headers?: Record<string, string>,
  ): Promise<{ uri: string; cid: string }> {
    const collection = 'app.gndr.graph.listitem'
    const res = await this._client.call(
      'com.atproto.repo.putRecord',
      undefined,
      { collection, ...params, record: { ...record, $type: collection } },
      { encoding: 'application/json', headers },
    )
    return res.data
  }

  async delete(
    params: OmitKey<ComAtprotoRepoDeleteRecord.InputSchema, 'collection'>,
    headers?: Record<string, string>,
  ): Promise<void> {
    await this._client.call(
      'com.atproto.repo.deleteRecord',
      undefined,
      { collection: 'app.gndr.graph.listitem', ...params },
      { headers },
    )
  }
}

export class AppGndrGraphStarterpackRecord {
  _client: XrpcClient

  constructor(client: XrpcClient) {
    this._client = client
  }

  async list(
    params: OmitKey<ComAtprotoRepoListRecords.QueryParams, 'collection'>,
  ): Promise<{
    cursor?: string
    records: { uri: string; value: AppGndrGraphStarterpack.Record }[]
  }> {
    const res = await this._client.call('com.atproto.repo.listRecords', {
      collection: 'app.gndr.graph.starterpack',
      ...params,
    })
    return res.data
  }

  async get(
    params: OmitKey<ComAtprotoRepoGetRecord.QueryParams, 'collection'>,
  ): Promise<{
    uri: string
    cid: string
    value: AppGndrGraphStarterpack.Record
  }> {
    const res = await this._client.call('com.atproto.repo.getRecord', {
      collection: 'app.gndr.graph.starterpack',
      ...params,
    })
    return res.data
  }

  async create(
    params: OmitKey<
      ComAtprotoRepoCreateRecord.InputSchema,
      'collection' | 'record'
    >,
    record: Un$Typed<AppGndrGraphStarterpack.Record>,
    headers?: Record<string, string>,
  ): Promise<{ uri: string; cid: string }> {
    const collection = 'app.gndr.graph.starterpack'
    const res = await this._client.call(
      'com.atproto.repo.createRecord',
      undefined,
      { collection, ...params, record: { ...record, $type: collection } },
      { encoding: 'application/json', headers },
    )
    return res.data
  }

  async put(
    params: OmitKey<
      ComAtprotoRepoPutRecord.InputSchema,
      'collection' | 'record'
    >,
    record: Un$Typed<AppGndrGraphStarterpack.Record>,
    headers?: Record<string, string>,
  ): Promise<{ uri: string; cid: string }> {
    const collection = 'app.gndr.graph.starterpack'
    const res = await this._client.call(
      'com.atproto.repo.putRecord',
      undefined,
      { collection, ...params, record: { ...record, $type: collection } },
      { encoding: 'application/json', headers },
    )
    return res.data
  }

  async delete(
    params: OmitKey<ComAtprotoRepoDeleteRecord.InputSchema, 'collection'>,
    headers?: Record<string, string>,
  ): Promise<void> {
    await this._client.call(
      'com.atproto.repo.deleteRecord',
      undefined,
      { collection: 'app.gndr.graph.starterpack', ...params },
      { headers },
    )
  }
}

export class AppGndrGraphVerificationRecord {
  _client: XrpcClient

  constructor(client: XrpcClient) {
    this._client = client
  }

  async list(
    params: OmitKey<ComAtprotoRepoListRecords.QueryParams, 'collection'>,
  ): Promise<{
    cursor?: string
    records: { uri: string; value: AppGndrGraphVerification.Record }[]
  }> {
    const res = await this._client.call('com.atproto.repo.listRecords', {
      collection: 'app.gndr.graph.verification',
      ...params,
    })
    return res.data
  }

  async get(
    params: OmitKey<ComAtprotoRepoGetRecord.QueryParams, 'collection'>,
  ): Promise<{
    uri: string
    cid: string
    value: AppGndrGraphVerification.Record
  }> {
    const res = await this._client.call('com.atproto.repo.getRecord', {
      collection: 'app.gndr.graph.verification',
      ...params,
    })
    return res.data
  }

  async create(
    params: OmitKey<
      ComAtprotoRepoCreateRecord.InputSchema,
      'collection' | 'record'
    >,
    record: Un$Typed<AppGndrGraphVerification.Record>,
    headers?: Record<string, string>,
  ): Promise<{ uri: string; cid: string }> {
    const collection = 'app.gndr.graph.verification'
    const res = await this._client.call(
      'com.atproto.repo.createRecord',
      undefined,
      { collection, ...params, record: { ...record, $type: collection } },
      { encoding: 'application/json', headers },
    )
    return res.data
  }

  async put(
    params: OmitKey<
      ComAtprotoRepoPutRecord.InputSchema,
      'collection' | 'record'
    >,
    record: Un$Typed<AppGndrGraphVerification.Record>,
    headers?: Record<string, string>,
  ): Promise<{ uri: string; cid: string }> {
    const collection = 'app.gndr.graph.verification'
    const res = await this._client.call(
      'com.atproto.repo.putRecord',
      undefined,
      { collection, ...params, record: { ...record, $type: collection } },
      { encoding: 'application/json', headers },
    )
    return res.data
  }

  async delete(
    params: OmitKey<ComAtprotoRepoDeleteRecord.InputSchema, 'collection'>,
    headers?: Record<string, string>,
  ): Promise<void> {
    await this._client.call(
      'com.atproto.repo.deleteRecord',
      undefined,
      { collection: 'app.gndr.graph.verification', ...params },
      { headers },
    )
  }
}

export class AppGndrLabelerNS {
  _client: XrpcClient
  service: AppGndrLabelerServiceRecord

  constructor(client: XrpcClient) {
    this._client = client
    this.service = new AppGndrLabelerServiceRecord(client)
  }

  getServices(
    params?: AppGndrLabelerGetServices.QueryParams,
    opts?: AppGndrLabelerGetServices.CallOptions,
  ): Promise<AppGndrLabelerGetServices.Response> {
    return this._client.call(
      'app.gndr.labeler.getServices',
      params,
      undefined,
      opts,
    )
  }
}

export class AppGndrLabelerServiceRecord {
  _client: XrpcClient

  constructor(client: XrpcClient) {
    this._client = client
  }

  async list(
    params: OmitKey<ComAtprotoRepoListRecords.QueryParams, 'collection'>,
  ): Promise<{
    cursor?: string
    records: { uri: string; value: AppGndrLabelerService.Record }[]
  }> {
    const res = await this._client.call('com.atproto.repo.listRecords', {
      collection: 'app.gndr.labeler.service',
      ...params,
    })
    return res.data
  }

  async get(
    params: OmitKey<ComAtprotoRepoGetRecord.QueryParams, 'collection'>,
  ): Promise<{
    uri: string
    cid: string
    value: AppGndrLabelerService.Record
  }> {
    const res = await this._client.call('com.atproto.repo.getRecord', {
      collection: 'app.gndr.labeler.service',
      ...params,
    })
    return res.data
  }

  async create(
    params: OmitKey<
      ComAtprotoRepoCreateRecord.InputSchema,
      'collection' | 'record'
    >,
    record: Un$Typed<AppGndrLabelerService.Record>,
    headers?: Record<string, string>,
  ): Promise<{ uri: string; cid: string }> {
    const collection = 'app.gndr.labeler.service'
    const res = await this._client.call(
      'com.atproto.repo.createRecord',
      undefined,
      {
        collection,
        rkey: 'self',
        ...params,
        record: { ...record, $type: collection },
      },
      { encoding: 'application/json', headers },
    )
    return res.data
  }

  async put(
    params: OmitKey<
      ComAtprotoRepoPutRecord.InputSchema,
      'collection' | 'record'
    >,
    record: Un$Typed<AppGndrLabelerService.Record>,
    headers?: Record<string, string>,
  ): Promise<{ uri: string; cid: string }> {
    const collection = 'app.gndr.labeler.service'
    const res = await this._client.call(
      'com.atproto.repo.putRecord',
      undefined,
      { collection, ...params, record: { ...record, $type: collection } },
      { encoding: 'application/json', headers },
    )
    return res.data
  }

  async delete(
    params: OmitKey<ComAtprotoRepoDeleteRecord.InputSchema, 'collection'>,
    headers?: Record<string, string>,
  ): Promise<void> {
    await this._client.call(
      'com.atproto.repo.deleteRecord',
      undefined,
      { collection: 'app.gndr.labeler.service', ...params },
      { headers },
    )
  }
}

export class AppGndrNotificationNS {
  _client: XrpcClient
  declaration: AppGndrNotificationDeclarationRecord

  constructor(client: XrpcClient) {
    this._client = client
    this.declaration = new AppGndrNotificationDeclarationRecord(client)
  }

  getPreferences(
    params?: AppGndrNotificationGetPreferences.QueryParams,
    opts?: AppGndrNotificationGetPreferences.CallOptions,
  ): Promise<AppGndrNotificationGetPreferences.Response> {
    return this._client.call(
      'app.gndr.notification.getPreferences',
      params,
      undefined,
      opts,
    )
  }

  getUnreadCount(
    params?: AppGndrNotificationGetUnreadCount.QueryParams,
    opts?: AppGndrNotificationGetUnreadCount.CallOptions,
  ): Promise<AppGndrNotificationGetUnreadCount.Response> {
    return this._client.call(
      'app.gndr.notification.getUnreadCount',
      params,
      undefined,
      opts,
    )
  }

  listActivitySubscriptions(
    params?: AppGndrNotificationListActivitySubscriptions.QueryParams,
    opts?: AppGndrNotificationListActivitySubscriptions.CallOptions,
  ): Promise<AppGndrNotificationListActivitySubscriptions.Response> {
    return this._client.call(
      'app.gndr.notification.listActivitySubscriptions',
      params,
      undefined,
      opts,
    )
  }

  listNotifications(
    params?: AppGndrNotificationListNotifications.QueryParams,
    opts?: AppGndrNotificationListNotifications.CallOptions,
  ): Promise<AppGndrNotificationListNotifications.Response> {
    return this._client.call(
      'app.gndr.notification.listNotifications',
      params,
      undefined,
      opts,
    )
  }

  putActivitySubscription(
    data?: AppGndrNotificationPutActivitySubscription.InputSchema,
    opts?: AppGndrNotificationPutActivitySubscription.CallOptions,
  ): Promise<AppGndrNotificationPutActivitySubscription.Response> {
    return this._client.call(
      'app.gndr.notification.putActivitySubscription',
      opts?.qp,
      data,
      opts,
    )
  }

  putPreferences(
    data?: AppGndrNotificationPutPreferences.InputSchema,
    opts?: AppGndrNotificationPutPreferences.CallOptions,
  ): Promise<AppGndrNotificationPutPreferences.Response> {
    return this._client.call(
      'app.gndr.notification.putPreferences',
      opts?.qp,
      data,
      opts,
    )
  }

  putPreferencesV2(
    data?: AppGndrNotificationPutPreferencesV2.InputSchema,
    opts?: AppGndrNotificationPutPreferencesV2.CallOptions,
  ): Promise<AppGndrNotificationPutPreferencesV2.Response> {
    return this._client.call(
      'app.gndr.notification.putPreferencesV2',
      opts?.qp,
      data,
      opts,
    )
  }

  registerPush(
    data?: AppGndrNotificationRegisterPush.InputSchema,
    opts?: AppGndrNotificationRegisterPush.CallOptions,
  ): Promise<AppGndrNotificationRegisterPush.Response> {
    return this._client.call(
      'app.gndr.notification.registerPush',
      opts?.qp,
      data,
      opts,
    )
  }

  unregisterPush(
    data?: AppGndrNotificationUnregisterPush.InputSchema,
    opts?: AppGndrNotificationUnregisterPush.CallOptions,
  ): Promise<AppGndrNotificationUnregisterPush.Response> {
    return this._client.call(
      'app.gndr.notification.unregisterPush',
      opts?.qp,
      data,
      opts,
    )
  }

  updateSeen(
    data?: AppGndrNotificationUpdateSeen.InputSchema,
    opts?: AppGndrNotificationUpdateSeen.CallOptions,
  ): Promise<AppGndrNotificationUpdateSeen.Response> {
    return this._client.call(
      'app.gndr.notification.updateSeen',
      opts?.qp,
      data,
      opts,
    )
  }
}

export class AppGndrNotificationDeclarationRecord {
  _client: XrpcClient

  constructor(client: XrpcClient) {
    this._client = client
  }

  async list(
    params: OmitKey<ComAtprotoRepoListRecords.QueryParams, 'collection'>,
  ): Promise<{
    cursor?: string
    records: { uri: string; value: AppGndrNotificationDeclaration.Record }[]
  }> {
    const res = await this._client.call('com.atproto.repo.listRecords', {
      collection: 'app.gndr.notification.declaration',
      ...params,
    })
    return res.data
  }

  async get(
    params: OmitKey<ComAtprotoRepoGetRecord.QueryParams, 'collection'>,
  ): Promise<{
    uri: string
    cid: string
    value: AppGndrNotificationDeclaration.Record
  }> {
    const res = await this._client.call('com.atproto.repo.getRecord', {
      collection: 'app.gndr.notification.declaration',
      ...params,
    })
    return res.data
  }

  async create(
    params: OmitKey<
      ComAtprotoRepoCreateRecord.InputSchema,
      'collection' | 'record'
    >,
    record: Un$Typed<AppGndrNotificationDeclaration.Record>,
    headers?: Record<string, string>,
  ): Promise<{ uri: string; cid: string }> {
    const collection = 'app.gndr.notification.declaration'
    const res = await this._client.call(
      'com.atproto.repo.createRecord',
      undefined,
      {
        collection,
        rkey: 'self',
        ...params,
        record: { ...record, $type: collection },
      },
      { encoding: 'application/json', headers },
    )
    return res.data
  }

  async put(
    params: OmitKey<
      ComAtprotoRepoPutRecord.InputSchema,
      'collection' | 'record'
    >,
    record: Un$Typed<AppGndrNotificationDeclaration.Record>,
    headers?: Record<string, string>,
  ): Promise<{ uri: string; cid: string }> {
    const collection = 'app.gndr.notification.declaration'
    const res = await this._client.call(
      'com.atproto.repo.putRecord',
      undefined,
      { collection, ...params, record: { ...record, $type: collection } },
      { encoding: 'application/json', headers },
    )
    return res.data
  }

  async delete(
    params: OmitKey<ComAtprotoRepoDeleteRecord.InputSchema, 'collection'>,
    headers?: Record<string, string>,
  ): Promise<void> {
    await this._client.call(
      'com.atproto.repo.deleteRecord',
      undefined,
      { collection: 'app.gndr.notification.declaration', ...params },
      { headers },
    )
  }
}

export class AppGndrRichtextNS {
  _client: XrpcClient

  constructor(client: XrpcClient) {
    this._client = client
  }
}

export class AppGndrUnspeccedNS {
  _client: XrpcClient

  constructor(client: XrpcClient) {
    this._client = client
  }

  getAgeAssuranceState(
    params?: AppGndrUnspeccedGetAgeAssuranceState.QueryParams,
    opts?: AppGndrUnspeccedGetAgeAssuranceState.CallOptions,
  ): Promise<AppGndrUnspeccedGetAgeAssuranceState.Response> {
    return this._client.call(
      'app.gndr.unspecced.getAgeAssuranceState',
      params,
      undefined,
      opts,
    )
  }

  getConfig(
    params?: AppGndrUnspeccedGetConfig.QueryParams,
    opts?: AppGndrUnspeccedGetConfig.CallOptions,
  ): Promise<AppGndrUnspeccedGetConfig.Response> {
    return this._client.call(
      'app.gndr.unspecced.getConfig',
      params,
      undefined,
      opts,
    )
  }

  getPopularFeedGenerators(
    params?: AppGndrUnspeccedGetPopularFeedGenerators.QueryParams,
    opts?: AppGndrUnspeccedGetPopularFeedGenerators.CallOptions,
  ): Promise<AppGndrUnspeccedGetPopularFeedGenerators.Response> {
    return this._client.call(
      'app.gndr.unspecced.getPopularFeedGenerators',
      params,
      undefined,
      opts,
    )
  }

  getPostThreadOtherV2(
    params?: AppGndrUnspeccedGetPostThreadOtherV2.QueryParams,
    opts?: AppGndrUnspeccedGetPostThreadOtherV2.CallOptions,
  ): Promise<AppGndrUnspeccedGetPostThreadOtherV2.Response> {
    return this._client.call(
      'app.gndr.unspecced.getPostThreadOtherV2',
      params,
      undefined,
      opts,
    )
  }

  getPostThreadV2(
    params?: AppGndrUnspeccedGetPostThreadV2.QueryParams,
    opts?: AppGndrUnspeccedGetPostThreadV2.CallOptions,
  ): Promise<AppGndrUnspeccedGetPostThreadV2.Response> {
    return this._client.call(
      'app.gndr.unspecced.getPostThreadV2',
      params,
      undefined,
      opts,
    )
  }

  getSuggestedFeeds(
    params?: AppGndrUnspeccedGetSuggestedFeeds.QueryParams,
    opts?: AppGndrUnspeccedGetSuggestedFeeds.CallOptions,
  ): Promise<AppGndrUnspeccedGetSuggestedFeeds.Response> {
    return this._client.call(
      'app.gndr.unspecced.getSuggestedFeeds',
      params,
      undefined,
      opts,
    )
  }

  getSuggestedFeedsSkeleton(
    params?: AppGndrUnspeccedGetSuggestedFeedsSkeleton.QueryParams,
    opts?: AppGndrUnspeccedGetSuggestedFeedsSkeleton.CallOptions,
  ): Promise<AppGndrUnspeccedGetSuggestedFeedsSkeleton.Response> {
    return this._client.call(
      'app.gndr.unspecced.getSuggestedFeedsSkeleton',
      params,
      undefined,
      opts,
    )
  }

  getSuggestedStarterPacks(
    params?: AppGndrUnspeccedGetSuggestedStarterPacks.QueryParams,
    opts?: AppGndrUnspeccedGetSuggestedStarterPacks.CallOptions,
  ): Promise<AppGndrUnspeccedGetSuggestedStarterPacks.Response> {
    return this._client.call(
      'app.gndr.unspecced.getSuggestedStarterPacks',
      params,
      undefined,
      opts,
    )
  }

  getSuggestedStarterPacksSkeleton(
    params?: AppGndrUnspeccedGetSuggestedStarterPacksSkeleton.QueryParams,
    opts?: AppGndrUnspeccedGetSuggestedStarterPacksSkeleton.CallOptions,
  ): Promise<AppGndrUnspeccedGetSuggestedStarterPacksSkeleton.Response> {
    return this._client.call(
      'app.gndr.unspecced.getSuggestedStarterPacksSkeleton',
      params,
      undefined,
      opts,
    )
  }

  getSuggestedUsers(
    params?: AppGndrUnspeccedGetSuggestedUsers.QueryParams,
    opts?: AppGndrUnspeccedGetSuggestedUsers.CallOptions,
  ): Promise<AppGndrUnspeccedGetSuggestedUsers.Response> {
    return this._client.call(
      'app.gndr.unspecced.getSuggestedUsers',
      params,
      undefined,
      opts,
    )
  }

  getSuggestedUsersSkeleton(
    params?: AppGndrUnspeccedGetSuggestedUsersSkeleton.QueryParams,
    opts?: AppGndrUnspeccedGetSuggestedUsersSkeleton.CallOptions,
  ): Promise<AppGndrUnspeccedGetSuggestedUsersSkeleton.Response> {
    return this._client.call(
      'app.gndr.unspecced.getSuggestedUsersSkeleton',
      params,
      undefined,
      opts,
    )
  }

  getSuggestionsSkeleton(
    params?: AppGndrUnspeccedGetSuggestionsSkeleton.QueryParams,
    opts?: AppGndrUnspeccedGetSuggestionsSkeleton.CallOptions,
  ): Promise<AppGndrUnspeccedGetSuggestionsSkeleton.Response> {
    return this._client.call(
      'app.gndr.unspecced.getSuggestionsSkeleton',
      params,
      undefined,
      opts,
    )
  }

  getTaggedSuggestions(
    params?: AppGndrUnspeccedGetTaggedSuggestions.QueryParams,
    opts?: AppGndrUnspeccedGetTaggedSuggestions.CallOptions,
  ): Promise<AppGndrUnspeccedGetTaggedSuggestions.Response> {
    return this._client.call(
      'app.gndr.unspecced.getTaggedSuggestions',
      params,
      undefined,
      opts,
    )
  }

  getTrendingTopics(
    params?: AppGndrUnspeccedGetTrendingTopics.QueryParams,
    opts?: AppGndrUnspeccedGetTrendingTopics.CallOptions,
  ): Promise<AppGndrUnspeccedGetTrendingTopics.Response> {
    return this._client.call(
      'app.gndr.unspecced.getTrendingTopics',
      params,
      undefined,
      opts,
    )
  }

  getTrends(
    params?: AppGndrUnspeccedGetTrends.QueryParams,
    opts?: AppGndrUnspeccedGetTrends.CallOptions,
  ): Promise<AppGndrUnspeccedGetTrends.Response> {
    return this._client.call(
      'app.gndr.unspecced.getTrends',
      params,
      undefined,
      opts,
    )
  }

  getTrendsSkeleton(
    params?: AppGndrUnspeccedGetTrendsSkeleton.QueryParams,
    opts?: AppGndrUnspeccedGetTrendsSkeleton.CallOptions,
  ): Promise<AppGndrUnspeccedGetTrendsSkeleton.Response> {
    return this._client.call(
      'app.gndr.unspecced.getTrendsSkeleton',
      params,
      undefined,
      opts,
    )
  }

  initAgeAssurance(
    data?: AppGndrUnspeccedInitAgeAssurance.InputSchema,
    opts?: AppGndrUnspeccedInitAgeAssurance.CallOptions,
  ): Promise<AppGndrUnspeccedInitAgeAssurance.Response> {
    return this._client
      .call('app.gndr.unspecced.initAgeAssurance', opts?.qp, data, opts)
      .catch((e) => {
        throw AppGndrUnspeccedInitAgeAssurance.toKnownErr(e)
      })
  }

  searchActorsSkeleton(
    params?: AppGndrUnspeccedSearchActorsSkeleton.QueryParams,
    opts?: AppGndrUnspeccedSearchActorsSkeleton.CallOptions,
  ): Promise<AppGndrUnspeccedSearchActorsSkeleton.Response> {
    return this._client
      .call('app.gndr.unspecced.searchActorsSkeleton', params, undefined, opts)
      .catch((e) => {
        throw AppGndrUnspeccedSearchActorsSkeleton.toKnownErr(e)
      })
  }

  searchPostsSkeleton(
    params?: AppGndrUnspeccedSearchPostsSkeleton.QueryParams,
    opts?: AppGndrUnspeccedSearchPostsSkeleton.CallOptions,
  ): Promise<AppGndrUnspeccedSearchPostsSkeleton.Response> {
    return this._client
      .call('app.gndr.unspecced.searchPostsSkeleton', params, undefined, opts)
      .catch((e) => {
        throw AppGndrUnspeccedSearchPostsSkeleton.toKnownErr(e)
      })
  }

  searchStarterPacksSkeleton(
    params?: AppGndrUnspeccedSearchStarterPacksSkeleton.QueryParams,
    opts?: AppGndrUnspeccedSearchStarterPacksSkeleton.CallOptions,
  ): Promise<AppGndrUnspeccedSearchStarterPacksSkeleton.Response> {
    return this._client
      .call(
        'app.gndr.unspecced.searchStarterPacksSkeleton',
        params,
        undefined,
        opts,
      )
      .catch((e) => {
        throw AppGndrUnspeccedSearchStarterPacksSkeleton.toKnownErr(e)
      })
  }
}

export class AppGndrVideoNS {
  _client: XrpcClient

  constructor(client: XrpcClient) {
    this._client = client
  }

  getJobStatus(
    params?: AppGndrVideoGetJobStatus.QueryParams,
    opts?: AppGndrVideoGetJobStatus.CallOptions,
  ): Promise<AppGndrVideoGetJobStatus.Response> {
    return this._client.call(
      'app.gndr.video.getJobStatus',
      params,
      undefined,
      opts,
    )
  }

  getUploadLimits(
    params?: AppGndrVideoGetUploadLimits.QueryParams,
    opts?: AppGndrVideoGetUploadLimits.CallOptions,
  ): Promise<AppGndrVideoGetUploadLimits.Response> {
    return this._client.call(
      'app.gndr.video.getUploadLimits',
      params,
      undefined,
      opts,
    )
  }

  uploadVideo(
    data?: AppGndrVideoUploadVideo.InputSchema,
    opts?: AppGndrVideoUploadVideo.CallOptions,
  ): Promise<AppGndrVideoUploadVideo.Response> {
    return this._client.call('app.gndr.video.uploadVideo', opts?.qp, data, opts)
  }
}

export class ChatNS {
  _client: XrpcClient
  gndr: ChatGndrNS

  constructor(client: XrpcClient) {
    this._client = client
    this.gndr = new ChatGndrNS(client)
  }
}

export class ChatGndrNS {
  _client: XrpcClient
  actor: ChatGndrActorNS
  convo: ChatGndrConvoNS
  moderation: ChatGndrModerationNS

  constructor(client: XrpcClient) {
    this._client = client
    this.actor = new ChatGndrActorNS(client)
    this.convo = new ChatGndrConvoNS(client)
    this.moderation = new ChatGndrModerationNS(client)
  }
}

export class ChatGndrActorNS {
  _client: XrpcClient
  declaration: ChatGndrActorDeclarationRecord

  constructor(client: XrpcClient) {
    this._client = client
    this.declaration = new ChatGndrActorDeclarationRecord(client)
  }

  deleteAccount(
    data?: ChatGndrActorDeleteAccount.InputSchema,
    opts?: ChatGndrActorDeleteAccount.CallOptions,
  ): Promise<ChatGndrActorDeleteAccount.Response> {
    return this._client.call(
      'chat.gndr.actor.deleteAccount',
      opts?.qp,
      data,
      opts,
    )
  }

  exportAccountData(
    params?: ChatGndrActorExportAccountData.QueryParams,
    opts?: ChatGndrActorExportAccountData.CallOptions,
  ): Promise<ChatGndrActorExportAccountData.Response> {
    return this._client.call(
      'chat.gndr.actor.exportAccountData',
      params,
      undefined,
      opts,
    )
  }
}

export class ChatGndrActorDeclarationRecord {
  _client: XrpcClient

  constructor(client: XrpcClient) {
    this._client = client
  }

  async list(
    params: OmitKey<ComAtprotoRepoListRecords.QueryParams, 'collection'>,
  ): Promise<{
    cursor?: string
    records: { uri: string; value: ChatGndrActorDeclaration.Record }[]
  }> {
    const res = await this._client.call('com.atproto.repo.listRecords', {
      collection: 'chat.gndr.actor.declaration',
      ...params,
    })
    return res.data
  }

  async get(
    params: OmitKey<ComAtprotoRepoGetRecord.QueryParams, 'collection'>,
  ): Promise<{
    uri: string
    cid: string
    value: ChatGndrActorDeclaration.Record
  }> {
    const res = await this._client.call('com.atproto.repo.getRecord', {
      collection: 'chat.gndr.actor.declaration',
      ...params,
    })
    return res.data
  }

  async create(
    params: OmitKey<
      ComAtprotoRepoCreateRecord.InputSchema,
      'collection' | 'record'
    >,
    record: Un$Typed<ChatGndrActorDeclaration.Record>,
    headers?: Record<string, string>,
  ): Promise<{ uri: string; cid: string }> {
    const collection = 'chat.gndr.actor.declaration'
    const res = await this._client.call(
      'com.atproto.repo.createRecord',
      undefined,
      {
        collection,
        rkey: 'self',
        ...params,
        record: { ...record, $type: collection },
      },
      { encoding: 'application/json', headers },
    )
    return res.data
  }

  async put(
    params: OmitKey<
      ComAtprotoRepoPutRecord.InputSchema,
      'collection' | 'record'
    >,
    record: Un$Typed<ChatGndrActorDeclaration.Record>,
    headers?: Record<string, string>,
  ): Promise<{ uri: string; cid: string }> {
    const collection = 'chat.gndr.actor.declaration'
    const res = await this._client.call(
      'com.atproto.repo.putRecord',
      undefined,
      { collection, ...params, record: { ...record, $type: collection } },
      { encoding: 'application/json', headers },
    )
    return res.data
  }

  async delete(
    params: OmitKey<ComAtprotoRepoDeleteRecord.InputSchema, 'collection'>,
    headers?: Record<string, string>,
  ): Promise<void> {
    await this._client.call(
      'com.atproto.repo.deleteRecord',
      undefined,
      { collection: 'chat.gndr.actor.declaration', ...params },
      { headers },
    )
  }
}

export class ChatGndrConvoNS {
  _client: XrpcClient

  constructor(client: XrpcClient) {
    this._client = client
  }

  acceptConvo(
    data?: ChatGndrConvoAcceptConvo.InputSchema,
    opts?: ChatGndrConvoAcceptConvo.CallOptions,
  ): Promise<ChatGndrConvoAcceptConvo.Response> {
    return this._client.call(
      'chat.gndr.convo.acceptConvo',
      opts?.qp,
      data,
      opts,
    )
  }

  addReaction(
    data?: ChatGndrConvoAddReaction.InputSchema,
    opts?: ChatGndrConvoAddReaction.CallOptions,
  ): Promise<ChatGndrConvoAddReaction.Response> {
    return this._client
      .call('chat.gndr.convo.addReaction', opts?.qp, data, opts)
      .catch((e) => {
        throw ChatGndrConvoAddReaction.toKnownErr(e)
      })
  }

  deleteMessageForSelf(
    data?: ChatGndrConvoDeleteMessageForSelf.InputSchema,
    opts?: ChatGndrConvoDeleteMessageForSelf.CallOptions,
  ): Promise<ChatGndrConvoDeleteMessageForSelf.Response> {
    return this._client.call(
      'chat.gndr.convo.deleteMessageForSelf',
      opts?.qp,
      data,
      opts,
    )
  }

  getConvo(
    params?: ChatGndrConvoGetConvo.QueryParams,
    opts?: ChatGndrConvoGetConvo.CallOptions,
  ): Promise<ChatGndrConvoGetConvo.Response> {
    return this._client.call(
      'chat.gndr.convo.getConvo',
      params,
      undefined,
      opts,
    )
  }

  getConvoAvailability(
    params?: ChatGndrConvoGetConvoAvailability.QueryParams,
    opts?: ChatGndrConvoGetConvoAvailability.CallOptions,
  ): Promise<ChatGndrConvoGetConvoAvailability.Response> {
    return this._client.call(
      'chat.gndr.convo.getConvoAvailability',
      params,
      undefined,
      opts,
    )
  }

  getConvoForMembers(
    params?: ChatGndrConvoGetConvoForMembers.QueryParams,
    opts?: ChatGndrConvoGetConvoForMembers.CallOptions,
  ): Promise<ChatGndrConvoGetConvoForMembers.Response> {
    return this._client.call(
      'chat.gndr.convo.getConvoForMembers',
      params,
      undefined,
      opts,
    )
  }

  getLog(
    params?: ChatGndrConvoGetLog.QueryParams,
    opts?: ChatGndrConvoGetLog.CallOptions,
  ): Promise<ChatGndrConvoGetLog.Response> {
    return this._client.call('chat.gndr.convo.getLog', params, undefined, opts)
  }

  getMessages(
    params?: ChatGndrConvoGetMessages.QueryParams,
    opts?: ChatGndrConvoGetMessages.CallOptions,
  ): Promise<ChatGndrConvoGetMessages.Response> {
    return this._client.call(
      'chat.gndr.convo.getMessages',
      params,
      undefined,
      opts,
    )
  }

  leaveConvo(
    data?: ChatGndrConvoLeaveConvo.InputSchema,
    opts?: ChatGndrConvoLeaveConvo.CallOptions,
  ): Promise<ChatGndrConvoLeaveConvo.Response> {
    return this._client.call('chat.gndr.convo.leaveConvo', opts?.qp, data, opts)
  }

  listConvos(
    params?: ChatGndrConvoListConvos.QueryParams,
    opts?: ChatGndrConvoListConvos.CallOptions,
  ): Promise<ChatGndrConvoListConvos.Response> {
    return this._client.call(
      'chat.gndr.convo.listConvos',
      params,
      undefined,
      opts,
    )
  }

  muteConvo(
    data?: ChatGndrConvoMuteConvo.InputSchema,
    opts?: ChatGndrConvoMuteConvo.CallOptions,
  ): Promise<ChatGndrConvoMuteConvo.Response> {
    return this._client.call('chat.gndr.convo.muteConvo', opts?.qp, data, opts)
  }

  removeReaction(
    data?: ChatGndrConvoRemoveReaction.InputSchema,
    opts?: ChatGndrConvoRemoveReaction.CallOptions,
  ): Promise<ChatGndrConvoRemoveReaction.Response> {
    return this._client
      .call('chat.gndr.convo.removeReaction', opts?.qp, data, opts)
      .catch((e) => {
        throw ChatGndrConvoRemoveReaction.toKnownErr(e)
      })
  }

  sendMessage(
    data?: ChatGndrConvoSendMessage.InputSchema,
    opts?: ChatGndrConvoSendMessage.CallOptions,
  ): Promise<ChatGndrConvoSendMessage.Response> {
    return this._client.call(
      'chat.gndr.convo.sendMessage',
      opts?.qp,
      data,
      opts,
    )
  }

  sendMessageBatch(
    data?: ChatGndrConvoSendMessageBatch.InputSchema,
    opts?: ChatGndrConvoSendMessageBatch.CallOptions,
  ): Promise<ChatGndrConvoSendMessageBatch.Response> {
    return this._client.call(
      'chat.gndr.convo.sendMessageBatch',
      opts?.qp,
      data,
      opts,
    )
  }

  unmuteConvo(
    data?: ChatGndrConvoUnmuteConvo.InputSchema,
    opts?: ChatGndrConvoUnmuteConvo.CallOptions,
  ): Promise<ChatGndrConvoUnmuteConvo.Response> {
    return this._client.call(
      'chat.gndr.convo.unmuteConvo',
      opts?.qp,
      data,
      opts,
    )
  }

  updateAllRead(
    data?: ChatGndrConvoUpdateAllRead.InputSchema,
    opts?: ChatGndrConvoUpdateAllRead.CallOptions,
  ): Promise<ChatGndrConvoUpdateAllRead.Response> {
    return this._client.call(
      'chat.gndr.convo.updateAllRead',
      opts?.qp,
      data,
      opts,
    )
  }

  updateRead(
    data?: ChatGndrConvoUpdateRead.InputSchema,
    opts?: ChatGndrConvoUpdateRead.CallOptions,
  ): Promise<ChatGndrConvoUpdateRead.Response> {
    return this._client.call('chat.gndr.convo.updateRead', opts?.qp, data, opts)
  }
}

export class ChatGndrModerationNS {
  _client: XrpcClient

  constructor(client: XrpcClient) {
    this._client = client
  }

  getActorMetadata(
    params?: ChatGndrModerationGetActorMetadata.QueryParams,
    opts?: ChatGndrModerationGetActorMetadata.CallOptions,
  ): Promise<ChatGndrModerationGetActorMetadata.Response> {
    return this._client.call(
      'chat.gndr.moderation.getActorMetadata',
      params,
      undefined,
      opts,
    )
  }

  getMessageContext(
    params?: ChatGndrModerationGetMessageContext.QueryParams,
    opts?: ChatGndrModerationGetMessageContext.CallOptions,
  ): Promise<ChatGndrModerationGetMessageContext.Response> {
    return this._client.call(
      'chat.gndr.moderation.getMessageContext',
      params,
      undefined,
      opts,
    )
  }

  updateActorAccess(
    data?: ChatGndrModerationUpdateActorAccess.InputSchema,
    opts?: ChatGndrModerationUpdateActorAccess.CallOptions,
  ): Promise<ChatGndrModerationUpdateActorAccess.Response> {
    return this._client.call(
      'chat.gndr.moderation.updateActorAccess',
      opts?.qp,
      data,
      opts,
    )
  }
}

export class ComNS {
  _client: XrpcClient
  atproto: ComAtprotoNS

  constructor(client: XrpcClient) {
    this._client = client
    this.atproto = new ComAtprotoNS(client)
  }
}

export class ComAtprotoNS {
  _client: XrpcClient
  admin: ComAtprotoAdminNS
  identity: ComAtprotoIdentityNS
  label: ComAtprotoLabelNS
  lexicon: ComAtprotoLexiconNS
  moderation: ComAtprotoModerationNS
  repo: ComAtprotoRepoNS
  server: ComAtprotoServerNS
  sync: ComAtprotoSyncNS
  temp: ComAtprotoTempNS

  constructor(client: XrpcClient) {
    this._client = client
    this.admin = new ComAtprotoAdminNS(client)
    this.identity = new ComAtprotoIdentityNS(client)
    this.label = new ComAtprotoLabelNS(client)
    this.lexicon = new ComAtprotoLexiconNS(client)
    this.moderation = new ComAtprotoModerationNS(client)
    this.repo = new ComAtprotoRepoNS(client)
    this.server = new ComAtprotoServerNS(client)
    this.sync = new ComAtprotoSyncNS(client)
    this.temp = new ComAtprotoTempNS(client)
  }
}

export class ComAtprotoAdminNS {
  _client: XrpcClient

  constructor(client: XrpcClient) {
    this._client = client
  }

  deleteAccount(
    data?: ComAtprotoAdminDeleteAccount.InputSchema,
    opts?: ComAtprotoAdminDeleteAccount.CallOptions,
  ): Promise<ComAtprotoAdminDeleteAccount.Response> {
    return this._client.call(
      'com.atproto.admin.deleteAccount',
      opts?.qp,
      data,
      opts,
    )
  }

  disableAccountInvites(
    data?: ComAtprotoAdminDisableAccountInvites.InputSchema,
    opts?: ComAtprotoAdminDisableAccountInvites.CallOptions,
  ): Promise<ComAtprotoAdminDisableAccountInvites.Response> {
    return this._client.call(
      'com.atproto.admin.disableAccountInvites',
      opts?.qp,
      data,
      opts,
    )
  }

  disableInviteCodes(
    data?: ComAtprotoAdminDisableInviteCodes.InputSchema,
    opts?: ComAtprotoAdminDisableInviteCodes.CallOptions,
  ): Promise<ComAtprotoAdminDisableInviteCodes.Response> {
    return this._client.call(
      'com.atproto.admin.disableInviteCodes',
      opts?.qp,
      data,
      opts,
    )
  }

  enableAccountInvites(
    data?: ComAtprotoAdminEnableAccountInvites.InputSchema,
    opts?: ComAtprotoAdminEnableAccountInvites.CallOptions,
  ): Promise<ComAtprotoAdminEnableAccountInvites.Response> {
    return this._client.call(
      'com.atproto.admin.enableAccountInvites',
      opts?.qp,
      data,
      opts,
    )
  }

  getAccountInfo(
    params?: ComAtprotoAdminGetAccountInfo.QueryParams,
    opts?: ComAtprotoAdminGetAccountInfo.CallOptions,
  ): Promise<ComAtprotoAdminGetAccountInfo.Response> {
    return this._client.call(
      'com.atproto.admin.getAccountInfo',
      params,
      undefined,
      opts,
    )
  }

  getAccountInfos(
    params?: ComAtprotoAdminGetAccountInfos.QueryParams,
    opts?: ComAtprotoAdminGetAccountInfos.CallOptions,
  ): Promise<ComAtprotoAdminGetAccountInfos.Response> {
    return this._client.call(
      'com.atproto.admin.getAccountInfos',
      params,
      undefined,
      opts,
    )
  }

  getInviteCodes(
    params?: ComAtprotoAdminGetInviteCodes.QueryParams,
    opts?: ComAtprotoAdminGetInviteCodes.CallOptions,
  ): Promise<ComAtprotoAdminGetInviteCodes.Response> {
    return this._client.call(
      'com.atproto.admin.getInviteCodes',
      params,
      undefined,
      opts,
    )
  }

  getSubjectStatus(
    params?: ComAtprotoAdminGetSubjectStatus.QueryParams,
    opts?: ComAtprotoAdminGetSubjectStatus.CallOptions,
  ): Promise<ComAtprotoAdminGetSubjectStatus.Response> {
    return this._client.call(
      'com.atproto.admin.getSubjectStatus',
      params,
      undefined,
      opts,
    )
  }

  searchAccounts(
    params?: ComAtprotoAdminSearchAccounts.QueryParams,
    opts?: ComAtprotoAdminSearchAccounts.CallOptions,
  ): Promise<ComAtprotoAdminSearchAccounts.Response> {
    return this._client.call(
      'com.atproto.admin.searchAccounts',
      params,
      undefined,
      opts,
    )
  }

  sendEmail(
    data?: ComAtprotoAdminSendEmail.InputSchema,
    opts?: ComAtprotoAdminSendEmail.CallOptions,
  ): Promise<ComAtprotoAdminSendEmail.Response> {
    return this._client.call(
      'com.atproto.admin.sendEmail',
      opts?.qp,
      data,
      opts,
    )
  }

  updateAccountEmail(
    data?: ComAtprotoAdminUpdateAccountEmail.InputSchema,
    opts?: ComAtprotoAdminUpdateAccountEmail.CallOptions,
  ): Promise<ComAtprotoAdminUpdateAccountEmail.Response> {
    return this._client.call(
      'com.atproto.admin.updateAccountEmail',
      opts?.qp,
      data,
      opts,
    )
  }

  updateAccountHandle(
    data?: ComAtprotoAdminUpdateAccountHandle.InputSchema,
    opts?: ComAtprotoAdminUpdateAccountHandle.CallOptions,
  ): Promise<ComAtprotoAdminUpdateAccountHandle.Response> {
    return this._client.call(
      'com.atproto.admin.updateAccountHandle',
      opts?.qp,
      data,
      opts,
    )
  }

  updateAccountPassword(
    data?: ComAtprotoAdminUpdateAccountPassword.InputSchema,
    opts?: ComAtprotoAdminUpdateAccountPassword.CallOptions,
  ): Promise<ComAtprotoAdminUpdateAccountPassword.Response> {
    return this._client.call(
      'com.atproto.admin.updateAccountPassword',
      opts?.qp,
      data,
      opts,
    )
  }

  updateAccountSigningKey(
    data?: ComAtprotoAdminUpdateAccountSigningKey.InputSchema,
    opts?: ComAtprotoAdminUpdateAccountSigningKey.CallOptions,
  ): Promise<ComAtprotoAdminUpdateAccountSigningKey.Response> {
    return this._client.call(
      'com.atproto.admin.updateAccountSigningKey',
      opts?.qp,
      data,
      opts,
    )
  }

  updateSubjectStatus(
    data?: ComAtprotoAdminUpdateSubjectStatus.InputSchema,
    opts?: ComAtprotoAdminUpdateSubjectStatus.CallOptions,
  ): Promise<ComAtprotoAdminUpdateSubjectStatus.Response> {
    return this._client.call(
      'com.atproto.admin.updateSubjectStatus',
      opts?.qp,
      data,
      opts,
    )
  }
}

export class ComAtprotoIdentityNS {
  _client: XrpcClient

  constructor(client: XrpcClient) {
    this._client = client
  }

  getRecommendedDidCredentials(
    params?: ComAtprotoIdentityGetRecommendedDidCredentials.QueryParams,
    opts?: ComAtprotoIdentityGetRecommendedDidCredentials.CallOptions,
  ): Promise<ComAtprotoIdentityGetRecommendedDidCredentials.Response> {
    return this._client.call(
      'com.atproto.identity.getRecommendedDidCredentials',
      params,
      undefined,
      opts,
    )
  }

  refreshIdentity(
    data?: ComAtprotoIdentityRefreshIdentity.InputSchema,
    opts?: ComAtprotoIdentityRefreshIdentity.CallOptions,
  ): Promise<ComAtprotoIdentityRefreshIdentity.Response> {
    return this._client
      .call('com.atproto.identity.refreshIdentity', opts?.qp, data, opts)
      .catch((e) => {
        throw ComAtprotoIdentityRefreshIdentity.toKnownErr(e)
      })
  }

  requestPlcOperationSignature(
    data?: ComAtprotoIdentityRequestPlcOperationSignature.InputSchema,
    opts?: ComAtprotoIdentityRequestPlcOperationSignature.CallOptions,
  ): Promise<ComAtprotoIdentityRequestPlcOperationSignature.Response> {
    return this._client.call(
      'com.atproto.identity.requestPlcOperationSignature',
      opts?.qp,
      data,
      opts,
    )
  }

  resolveDid(
    params?: ComAtprotoIdentityResolveDid.QueryParams,
    opts?: ComAtprotoIdentityResolveDid.CallOptions,
  ): Promise<ComAtprotoIdentityResolveDid.Response> {
    return this._client
      .call('com.atproto.identity.resolveDid', params, undefined, opts)
      .catch((e) => {
        throw ComAtprotoIdentityResolveDid.toKnownErr(e)
      })
  }

  resolveHandle(
    params?: ComAtprotoIdentityResolveHandle.QueryParams,
    opts?: ComAtprotoIdentityResolveHandle.CallOptions,
  ): Promise<ComAtprotoIdentityResolveHandle.Response> {
    return this._client
      .call('com.atproto.identity.resolveHandle', params, undefined, opts)
      .catch((e) => {
        throw ComAtprotoIdentityResolveHandle.toKnownErr(e)
      })
  }

  resolveIdentity(
    params?: ComAtprotoIdentityResolveIdentity.QueryParams,
    opts?: ComAtprotoIdentityResolveIdentity.CallOptions,
  ): Promise<ComAtprotoIdentityResolveIdentity.Response> {
    return this._client
      .call('com.atproto.identity.resolveIdentity', params, undefined, opts)
      .catch((e) => {
        throw ComAtprotoIdentityResolveIdentity.toKnownErr(e)
      })
  }

  signPlcOperation(
    data?: ComAtprotoIdentitySignPlcOperation.InputSchema,
    opts?: ComAtprotoIdentitySignPlcOperation.CallOptions,
  ): Promise<ComAtprotoIdentitySignPlcOperation.Response> {
    return this._client.call(
      'com.atproto.identity.signPlcOperation',
      opts?.qp,
      data,
      opts,
    )
  }

  submitPlcOperation(
    data?: ComAtprotoIdentitySubmitPlcOperation.InputSchema,
    opts?: ComAtprotoIdentitySubmitPlcOperation.CallOptions,
  ): Promise<ComAtprotoIdentitySubmitPlcOperation.Response> {
    return this._client.call(
      'com.atproto.identity.submitPlcOperation',
      opts?.qp,
      data,
      opts,
    )
  }

  updateHandle(
    data?: ComAtprotoIdentityUpdateHandle.InputSchema,
    opts?: ComAtprotoIdentityUpdateHandle.CallOptions,
  ): Promise<ComAtprotoIdentityUpdateHandle.Response> {
    return this._client.call(
      'com.atproto.identity.updateHandle',
      opts?.qp,
      data,
      opts,
    )
  }
}

export class ComAtprotoLabelNS {
  _client: XrpcClient

  constructor(client: XrpcClient) {
    this._client = client
  }

  queryLabels(
    params?: ComAtprotoLabelQueryLabels.QueryParams,
    opts?: ComAtprotoLabelQueryLabels.CallOptions,
  ): Promise<ComAtprotoLabelQueryLabels.Response> {
    return this._client.call(
      'com.atproto.label.queryLabels',
      params,
      undefined,
      opts,
    )
  }
}

export class ComAtprotoLexiconNS {
  _client: XrpcClient
  schema: ComAtprotoLexiconSchemaRecord

  constructor(client: XrpcClient) {
    this._client = client
    this.schema = new ComAtprotoLexiconSchemaRecord(client)
  }
}

export class ComAtprotoLexiconSchemaRecord {
  _client: XrpcClient

  constructor(client: XrpcClient) {
    this._client = client
  }

  async list(
    params: OmitKey<ComAtprotoRepoListRecords.QueryParams, 'collection'>,
  ): Promise<{
    cursor?: string
    records: { uri: string; value: ComAtprotoLexiconSchema.Record }[]
  }> {
    const res = await this._client.call('com.atproto.repo.listRecords', {
      collection: 'com.atproto.lexicon.schema',
      ...params,
    })
    return res.data
  }

  async get(
    params: OmitKey<ComAtprotoRepoGetRecord.QueryParams, 'collection'>,
  ): Promise<{
    uri: string
    cid: string
    value: ComAtprotoLexiconSchema.Record
  }> {
    const res = await this._client.call('com.atproto.repo.getRecord', {
      collection: 'com.atproto.lexicon.schema',
      ...params,
    })
    return res.data
  }

  async create(
    params: OmitKey<
      ComAtprotoRepoCreateRecord.InputSchema,
      'collection' | 'record'
    >,
    record: Un$Typed<ComAtprotoLexiconSchema.Record>,
    headers?: Record<string, string>,
  ): Promise<{ uri: string; cid: string }> {
    const collection = 'com.atproto.lexicon.schema'
    const res = await this._client.call(
      'com.atproto.repo.createRecord',
      undefined,
      { collection, ...params, record: { ...record, $type: collection } },
      { encoding: 'application/json', headers },
    )
    return res.data
  }

  async put(
    params: OmitKey<
      ComAtprotoRepoPutRecord.InputSchema,
      'collection' | 'record'
    >,
    record: Un$Typed<ComAtprotoLexiconSchema.Record>,
    headers?: Record<string, string>,
  ): Promise<{ uri: string; cid: string }> {
    const collection = 'com.atproto.lexicon.schema'
    const res = await this._client.call(
      'com.atproto.repo.putRecord',
      undefined,
      { collection, ...params, record: { ...record, $type: collection } },
      { encoding: 'application/json', headers },
    )
    return res.data
  }

  async delete(
    params: OmitKey<ComAtprotoRepoDeleteRecord.InputSchema, 'collection'>,
    headers?: Record<string, string>,
  ): Promise<void> {
    await this._client.call(
      'com.atproto.repo.deleteRecord',
      undefined,
      { collection: 'com.atproto.lexicon.schema', ...params },
      { headers },
    )
  }
}

export class ComAtprotoModerationNS {
  _client: XrpcClient

  constructor(client: XrpcClient) {
    this._client = client
  }

  createReport(
    data?: ComAtprotoModerationCreateReport.InputSchema,
    opts?: ComAtprotoModerationCreateReport.CallOptions,
  ): Promise<ComAtprotoModerationCreateReport.Response> {
    return this._client.call(
      'com.atproto.moderation.createReport',
      opts?.qp,
      data,
      opts,
    )
  }
}

export class ComAtprotoRepoNS {
  _client: XrpcClient

  constructor(client: XrpcClient) {
    this._client = client
  }

  applyWrites(
    data?: ComAtprotoRepoApplyWrites.InputSchema,
    opts?: ComAtprotoRepoApplyWrites.CallOptions,
  ): Promise<ComAtprotoRepoApplyWrites.Response> {
    return this._client
      .call('com.atproto.repo.applyWrites', opts?.qp, data, opts)
      .catch((e) => {
        throw ComAtprotoRepoApplyWrites.toKnownErr(e)
      })
  }

  createRecord(
    data?: ComAtprotoRepoCreateRecord.InputSchema,
    opts?: ComAtprotoRepoCreateRecord.CallOptions,
  ): Promise<ComAtprotoRepoCreateRecord.Response> {
    return this._client
      .call('com.atproto.repo.createRecord', opts?.qp, data, opts)
      .catch((e) => {
        throw ComAtprotoRepoCreateRecord.toKnownErr(e)
      })
  }

  deleteRecord(
    data?: ComAtprotoRepoDeleteRecord.InputSchema,
    opts?: ComAtprotoRepoDeleteRecord.CallOptions,
  ): Promise<ComAtprotoRepoDeleteRecord.Response> {
    return this._client
      .call('com.atproto.repo.deleteRecord', opts?.qp, data, opts)
      .catch((e) => {
        throw ComAtprotoRepoDeleteRecord.toKnownErr(e)
      })
  }

  describeRepo(
    params?: ComAtprotoRepoDescribeRepo.QueryParams,
    opts?: ComAtprotoRepoDescribeRepo.CallOptions,
  ): Promise<ComAtprotoRepoDescribeRepo.Response> {
    return this._client.call(
      'com.atproto.repo.describeRepo',
      params,
      undefined,
      opts,
    )
  }

  getRecord(
    params?: ComAtprotoRepoGetRecord.QueryParams,
    opts?: ComAtprotoRepoGetRecord.CallOptions,
  ): Promise<ComAtprotoRepoGetRecord.Response> {
    return this._client
      .call('com.atproto.repo.getRecord', params, undefined, opts)
      .catch((e) => {
        throw ComAtprotoRepoGetRecord.toKnownErr(e)
      })
  }

  importRepo(
    data?: ComAtprotoRepoImportRepo.InputSchema,
    opts?: ComAtprotoRepoImportRepo.CallOptions,
  ): Promise<ComAtprotoRepoImportRepo.Response> {
    return this._client.call(
      'com.atproto.repo.importRepo',
      opts?.qp,
      data,
      opts,
    )
  }

  listMissingBlobs(
    params?: ComAtprotoRepoListMissingBlobs.QueryParams,
    opts?: ComAtprotoRepoListMissingBlobs.CallOptions,
  ): Promise<ComAtprotoRepoListMissingBlobs.Response> {
    return this._client.call(
      'com.atproto.repo.listMissingBlobs',
      params,
      undefined,
      opts,
    )
  }

  listRecords(
    params?: ComAtprotoRepoListRecords.QueryParams,
    opts?: ComAtprotoRepoListRecords.CallOptions,
  ): Promise<ComAtprotoRepoListRecords.Response> {
    return this._client.call(
      'com.atproto.repo.listRecords',
      params,
      undefined,
      opts,
    )
  }

  putRecord(
    data?: ComAtprotoRepoPutRecord.InputSchema,
    opts?: ComAtprotoRepoPutRecord.CallOptions,
  ): Promise<ComAtprotoRepoPutRecord.Response> {
    return this._client
      .call('com.atproto.repo.putRecord', opts?.qp, data, opts)
      .catch((e) => {
        throw ComAtprotoRepoPutRecord.toKnownErr(e)
      })
  }

  uploadBlob(
    data?: ComAtprotoRepoUploadBlob.InputSchema,
    opts?: ComAtprotoRepoUploadBlob.CallOptions,
  ): Promise<ComAtprotoRepoUploadBlob.Response> {
    return this._client.call(
      'com.atproto.repo.uploadBlob',
      opts?.qp,
      data,
      opts,
    )
  }
}

export class ComAtprotoServerNS {
  _client: XrpcClient

  constructor(client: XrpcClient) {
    this._client = client
  }

  activateAccount(
    data?: ComAtprotoServerActivateAccount.InputSchema,
    opts?: ComAtprotoServerActivateAccount.CallOptions,
  ): Promise<ComAtprotoServerActivateAccount.Response> {
    return this._client.call(
      'com.atproto.server.activateAccount',
      opts?.qp,
      data,
      opts,
    )
  }

  checkAccountStatus(
    params?: ComAtprotoServerCheckAccountStatus.QueryParams,
    opts?: ComAtprotoServerCheckAccountStatus.CallOptions,
  ): Promise<ComAtprotoServerCheckAccountStatus.Response> {
    return this._client.call(
      'com.atproto.server.checkAccountStatus',
      params,
      undefined,
      opts,
    )
  }

  confirmEmail(
    data?: ComAtprotoServerConfirmEmail.InputSchema,
    opts?: ComAtprotoServerConfirmEmail.CallOptions,
  ): Promise<ComAtprotoServerConfirmEmail.Response> {
    return this._client
      .call('com.atproto.server.confirmEmail', opts?.qp, data, opts)
      .catch((e) => {
        throw ComAtprotoServerConfirmEmail.toKnownErr(e)
      })
  }

  createAccount(
    data?: ComAtprotoServerCreateAccount.InputSchema,
    opts?: ComAtprotoServerCreateAccount.CallOptions,
  ): Promise<ComAtprotoServerCreateAccount.Response> {
    return this._client
      .call('com.atproto.server.createAccount', opts?.qp, data, opts)
      .catch((e) => {
        throw ComAtprotoServerCreateAccount.toKnownErr(e)
      })
  }

  createAppPassword(
    data?: ComAtprotoServerCreateAppPassword.InputSchema,
    opts?: ComAtprotoServerCreateAppPassword.CallOptions,
  ): Promise<ComAtprotoServerCreateAppPassword.Response> {
    return this._client
      .call('com.atproto.server.createAppPassword', opts?.qp, data, opts)
      .catch((e) => {
        throw ComAtprotoServerCreateAppPassword.toKnownErr(e)
      })
  }

  createInviteCode(
    data?: ComAtprotoServerCreateInviteCode.InputSchema,
    opts?: ComAtprotoServerCreateInviteCode.CallOptions,
  ): Promise<ComAtprotoServerCreateInviteCode.Response> {
    return this._client.call(
      'com.atproto.server.createInviteCode',
      opts?.qp,
      data,
      opts,
    )
  }

  createInviteCodes(
    data?: ComAtprotoServerCreateInviteCodes.InputSchema,
    opts?: ComAtprotoServerCreateInviteCodes.CallOptions,
  ): Promise<ComAtprotoServerCreateInviteCodes.Response> {
    return this._client.call(
      'com.atproto.server.createInviteCodes',
      opts?.qp,
      data,
      opts,
    )
  }

  createSession(
    data?: ComAtprotoServerCreateSession.InputSchema,
    opts?: ComAtprotoServerCreateSession.CallOptions,
  ): Promise<ComAtprotoServerCreateSession.Response> {
    return this._client
      .call('com.atproto.server.createSession', opts?.qp, data, opts)
      .catch((e) => {
        throw ComAtprotoServerCreateSession.toKnownErr(e)
      })
  }

  deactivateAccount(
    data?: ComAtprotoServerDeactivateAccount.InputSchema,
    opts?: ComAtprotoServerDeactivateAccount.CallOptions,
  ): Promise<ComAtprotoServerDeactivateAccount.Response> {
    return this._client.call(
      'com.atproto.server.deactivateAccount',
      opts?.qp,
      data,
      opts,
    )
  }

  deleteAccount(
    data?: ComAtprotoServerDeleteAccount.InputSchema,
    opts?: ComAtprotoServerDeleteAccount.CallOptions,
  ): Promise<ComAtprotoServerDeleteAccount.Response> {
    return this._client
      .call('com.atproto.server.deleteAccount', opts?.qp, data, opts)
      .catch((e) => {
        throw ComAtprotoServerDeleteAccount.toKnownErr(e)
      })
  }

  deleteSession(
    data?: ComAtprotoServerDeleteSession.InputSchema,
    opts?: ComAtprotoServerDeleteSession.CallOptions,
  ): Promise<ComAtprotoServerDeleteSession.Response> {
    return this._client.call(
      'com.atproto.server.deleteSession',
      opts?.qp,
      data,
      opts,
    )
  }

  describeServer(
    params?: ComAtprotoServerDescribeServer.QueryParams,
    opts?: ComAtprotoServerDescribeServer.CallOptions,
  ): Promise<ComAtprotoServerDescribeServer.Response> {
    return this._client.call(
      'com.atproto.server.describeServer',
      params,
      undefined,
      opts,
    )
  }

  getAccountInviteCodes(
    params?: ComAtprotoServerGetAccountInviteCodes.QueryParams,
    opts?: ComAtprotoServerGetAccountInviteCodes.CallOptions,
  ): Promise<ComAtprotoServerGetAccountInviteCodes.Response> {
    return this._client
      .call('com.atproto.server.getAccountInviteCodes', params, undefined, opts)
      .catch((e) => {
        throw ComAtprotoServerGetAccountInviteCodes.toKnownErr(e)
      })
  }

  getServiceAuth(
    params?: ComAtprotoServerGetServiceAuth.QueryParams,
    opts?: ComAtprotoServerGetServiceAuth.CallOptions,
  ): Promise<ComAtprotoServerGetServiceAuth.Response> {
    return this._client
      .call('com.atproto.server.getServiceAuth', params, undefined, opts)
      .catch((e) => {
        throw ComAtprotoServerGetServiceAuth.toKnownErr(e)
      })
  }

  getSession(
    params?: ComAtprotoServerGetSession.QueryParams,
    opts?: ComAtprotoServerGetSession.CallOptions,
  ): Promise<ComAtprotoServerGetSession.Response> {
    return this._client.call(
      'com.atproto.server.getSession',
      params,
      undefined,
      opts,
    )
  }

  listAppPasswords(
    params?: ComAtprotoServerListAppPasswords.QueryParams,
    opts?: ComAtprotoServerListAppPasswords.CallOptions,
  ): Promise<ComAtprotoServerListAppPasswords.Response> {
    return this._client
      .call('com.atproto.server.listAppPasswords', params, undefined, opts)
      .catch((e) => {
        throw ComAtprotoServerListAppPasswords.toKnownErr(e)
      })
  }

  refreshSession(
    data?: ComAtprotoServerRefreshSession.InputSchema,
    opts?: ComAtprotoServerRefreshSession.CallOptions,
  ): Promise<ComAtprotoServerRefreshSession.Response> {
    return this._client
      .call('com.atproto.server.refreshSession', opts?.qp, data, opts)
      .catch((e) => {
        throw ComAtprotoServerRefreshSession.toKnownErr(e)
      })
  }

  requestAccountDelete(
    data?: ComAtprotoServerRequestAccountDelete.InputSchema,
    opts?: ComAtprotoServerRequestAccountDelete.CallOptions,
  ): Promise<ComAtprotoServerRequestAccountDelete.Response> {
    return this._client.call(
      'com.atproto.server.requestAccountDelete',
      opts?.qp,
      data,
      opts,
    )
  }

  requestEmailConfirmation(
    data?: ComAtprotoServerRequestEmailConfirmation.InputSchema,
    opts?: ComAtprotoServerRequestEmailConfirmation.CallOptions,
  ): Promise<ComAtprotoServerRequestEmailConfirmation.Response> {
    return this._client.call(
      'com.atproto.server.requestEmailConfirmation',
      opts?.qp,
      data,
      opts,
    )
  }

  requestEmailUpdate(
    data?: ComAtprotoServerRequestEmailUpdate.InputSchema,
    opts?: ComAtprotoServerRequestEmailUpdate.CallOptions,
  ): Promise<ComAtprotoServerRequestEmailUpdate.Response> {
    return this._client.call(
      'com.atproto.server.requestEmailUpdate',
      opts?.qp,
      data,
      opts,
    )
  }

  requestPasswordReset(
    data?: ComAtprotoServerRequestPasswordReset.InputSchema,
    opts?: ComAtprotoServerRequestPasswordReset.CallOptions,
  ): Promise<ComAtprotoServerRequestPasswordReset.Response> {
    return this._client.call(
      'com.atproto.server.requestPasswordReset',
      opts?.qp,
      data,
      opts,
    )
  }

  reserveSigningKey(
    data?: ComAtprotoServerReserveSigningKey.InputSchema,
    opts?: ComAtprotoServerReserveSigningKey.CallOptions,
  ): Promise<ComAtprotoServerReserveSigningKey.Response> {
    return this._client.call(
      'com.atproto.server.reserveSigningKey',
      opts?.qp,
      data,
      opts,
    )
  }

  resetPassword(
    data?: ComAtprotoServerResetPassword.InputSchema,
    opts?: ComAtprotoServerResetPassword.CallOptions,
  ): Promise<ComAtprotoServerResetPassword.Response> {
    return this._client
      .call('com.atproto.server.resetPassword', opts?.qp, data, opts)
      .catch((e) => {
        throw ComAtprotoServerResetPassword.toKnownErr(e)
      })
  }

  revokeAppPassword(
    data?: ComAtprotoServerRevokeAppPassword.InputSchema,
    opts?: ComAtprotoServerRevokeAppPassword.CallOptions,
  ): Promise<ComAtprotoServerRevokeAppPassword.Response> {
    return this._client.call(
      'com.atproto.server.revokeAppPassword',
      opts?.qp,
      data,
      opts,
    )
  }

  updateEmail(
    data?: ComAtprotoServerUpdateEmail.InputSchema,
    opts?: ComAtprotoServerUpdateEmail.CallOptions,
  ): Promise<ComAtprotoServerUpdateEmail.Response> {
    return this._client
      .call('com.atproto.server.updateEmail', opts?.qp, data, opts)
      .catch((e) => {
        throw ComAtprotoServerUpdateEmail.toKnownErr(e)
      })
  }
}

export class ComAtprotoSyncNS {
  _client: XrpcClient

  constructor(client: XrpcClient) {
    this._client = client
  }

  getBlob(
    params?: ComAtprotoSyncGetBlob.QueryParams,
    opts?: ComAtprotoSyncGetBlob.CallOptions,
  ): Promise<ComAtprotoSyncGetBlob.Response> {
    return this._client
      .call('com.atproto.sync.getBlob', params, undefined, opts)
      .catch((e) => {
        throw ComAtprotoSyncGetBlob.toKnownErr(e)
      })
  }

  getBlocks(
    params?: ComAtprotoSyncGetBlocks.QueryParams,
    opts?: ComAtprotoSyncGetBlocks.CallOptions,
  ): Promise<ComAtprotoSyncGetBlocks.Response> {
    return this._client
      .call('com.atproto.sync.getBlocks', params, undefined, opts)
      .catch((e) => {
        throw ComAtprotoSyncGetBlocks.toKnownErr(e)
      })
  }

  getCheckout(
    params?: ComAtprotoSyncGetCheckout.QueryParams,
    opts?: ComAtprotoSyncGetCheckout.CallOptions,
  ): Promise<ComAtprotoSyncGetCheckout.Response> {
    return this._client.call(
      'com.atproto.sync.getCheckout',
      params,
      undefined,
      opts,
    )
  }

  getHead(
    params?: ComAtprotoSyncGetHead.QueryParams,
    opts?: ComAtprotoSyncGetHead.CallOptions,
  ): Promise<ComAtprotoSyncGetHead.Response> {
    return this._client
      .call('com.atproto.sync.getHead', params, undefined, opts)
      .catch((e) => {
        throw ComAtprotoSyncGetHead.toKnownErr(e)
      })
  }

  getHostStatus(
    params?: ComAtprotoSyncGetHostStatus.QueryParams,
    opts?: ComAtprotoSyncGetHostStatus.CallOptions,
  ): Promise<ComAtprotoSyncGetHostStatus.Response> {
    return this._client
      .call('com.atproto.sync.getHostStatus', params, undefined, opts)
      .catch((e) => {
        throw ComAtprotoSyncGetHostStatus.toKnownErr(e)
      })
  }

  getLatestCommit(
    params?: ComAtprotoSyncGetLatestCommit.QueryParams,
    opts?: ComAtprotoSyncGetLatestCommit.CallOptions,
  ): Promise<ComAtprotoSyncGetLatestCommit.Response> {
    return this._client
      .call('com.atproto.sync.getLatestCommit', params, undefined, opts)
      .catch((e) => {
        throw ComAtprotoSyncGetLatestCommit.toKnownErr(e)
      })
  }

  getRecord(
    params?: ComAtprotoSyncGetRecord.QueryParams,
    opts?: ComAtprotoSyncGetRecord.CallOptions,
  ): Promise<ComAtprotoSyncGetRecord.Response> {
    return this._client
      .call('com.atproto.sync.getRecord', params, undefined, opts)
      .catch((e) => {
        throw ComAtprotoSyncGetRecord.toKnownErr(e)
      })
  }

  getRepo(
    params?: ComAtprotoSyncGetRepo.QueryParams,
    opts?: ComAtprotoSyncGetRepo.CallOptions,
  ): Promise<ComAtprotoSyncGetRepo.Response> {
    return this._client
      .call('com.atproto.sync.getRepo', params, undefined, opts)
      .catch((e) => {
        throw ComAtprotoSyncGetRepo.toKnownErr(e)
      })
  }

  getRepoStatus(
    params?: ComAtprotoSyncGetRepoStatus.QueryParams,
    opts?: ComAtprotoSyncGetRepoStatus.CallOptions,
  ): Promise<ComAtprotoSyncGetRepoStatus.Response> {
    return this._client
      .call('com.atproto.sync.getRepoStatus', params, undefined, opts)
      .catch((e) => {
        throw ComAtprotoSyncGetRepoStatus.toKnownErr(e)
      })
  }

  listBlobs(
    params?: ComAtprotoSyncListBlobs.QueryParams,
    opts?: ComAtprotoSyncListBlobs.CallOptions,
  ): Promise<ComAtprotoSyncListBlobs.Response> {
    return this._client
      .call('com.atproto.sync.listBlobs', params, undefined, opts)
      .catch((e) => {
        throw ComAtprotoSyncListBlobs.toKnownErr(e)
      })
  }

  listHosts(
    params?: ComAtprotoSyncListHosts.QueryParams,
    opts?: ComAtprotoSyncListHosts.CallOptions,
  ): Promise<ComAtprotoSyncListHosts.Response> {
    return this._client.call(
      'com.atproto.sync.listHosts',
      params,
      undefined,
      opts,
    )
  }

  listRepos(
    params?: ComAtprotoSyncListRepos.QueryParams,
    opts?: ComAtprotoSyncListRepos.CallOptions,
  ): Promise<ComAtprotoSyncListRepos.Response> {
    return this._client.call(
      'com.atproto.sync.listRepos',
      params,
      undefined,
      opts,
    )
  }

  listReposByCollection(
    params?: ComAtprotoSyncListReposByCollection.QueryParams,
    opts?: ComAtprotoSyncListReposByCollection.CallOptions,
  ): Promise<ComAtprotoSyncListReposByCollection.Response> {
    return this._client.call(
      'com.atproto.sync.listReposByCollection',
      params,
      undefined,
      opts,
    )
  }

  notifyOfUpdate(
    data?: ComAtprotoSyncNotifyOfUpdate.InputSchema,
    opts?: ComAtprotoSyncNotifyOfUpdate.CallOptions,
  ): Promise<ComAtprotoSyncNotifyOfUpdate.Response> {
    return this._client.call(
      'com.atproto.sync.notifyOfUpdate',
      opts?.qp,
      data,
      opts,
    )
  }

  requestCrawl(
    data?: ComAtprotoSyncRequestCrawl.InputSchema,
    opts?: ComAtprotoSyncRequestCrawl.CallOptions,
  ): Promise<ComAtprotoSyncRequestCrawl.Response> {
    return this._client
      .call('com.atproto.sync.requestCrawl', opts?.qp, data, opts)
      .catch((e) => {
        throw ComAtprotoSyncRequestCrawl.toKnownErr(e)
      })
  }
}

export class ComAtprotoTempNS {
  _client: XrpcClient

  constructor(client: XrpcClient) {
    this._client = client
  }

  addReservedHandle(
    data?: ComAtprotoTempAddReservedHandle.InputSchema,
    opts?: ComAtprotoTempAddReservedHandle.CallOptions,
  ): Promise<ComAtprotoTempAddReservedHandle.Response> {
    return this._client.call(
      'com.atproto.temp.addReservedHandle',
      opts?.qp,
      data,
      opts,
    )
  }

  checkHandleAvailability(
    params?: ComAtprotoTempCheckHandleAvailability.QueryParams,
    opts?: ComAtprotoTempCheckHandleAvailability.CallOptions,
  ): Promise<ComAtprotoTempCheckHandleAvailability.Response> {
    return this._client
      .call('com.atproto.temp.checkHandleAvailability', params, undefined, opts)
      .catch((e) => {
        throw ComAtprotoTempCheckHandleAvailability.toKnownErr(e)
      })
  }

  checkSignupQueue(
    params?: ComAtprotoTempCheckSignupQueue.QueryParams,
    opts?: ComAtprotoTempCheckSignupQueue.CallOptions,
  ): Promise<ComAtprotoTempCheckSignupQueue.Response> {
    return this._client.call(
      'com.atproto.temp.checkSignupQueue',
      params,
      undefined,
      opts,
    )
  }

  fetchLabels(
    params?: ComAtprotoTempFetchLabels.QueryParams,
    opts?: ComAtprotoTempFetchLabels.CallOptions,
  ): Promise<ComAtprotoTempFetchLabels.Response> {
    return this._client.call(
      'com.atproto.temp.fetchLabels',
      params,
      undefined,
      opts,
    )
  }

  requestPhoneVerification(
    data?: ComAtprotoTempRequestPhoneVerification.InputSchema,
    opts?: ComAtprotoTempRequestPhoneVerification.CallOptions,
  ): Promise<ComAtprotoTempRequestPhoneVerification.Response> {
    return this._client.call(
      'com.atproto.temp.requestPhoneVerification',
      opts?.qp,
      data,
      opts,
    )
  }

  revokeAccountCredentials(
    data?: ComAtprotoTempRevokeAccountCredentials.InputSchema,
    opts?: ComAtprotoTempRevokeAccountCredentials.CallOptions,
  ): Promise<ComAtprotoTempRevokeAccountCredentials.Response> {
    return this._client.call(
      'com.atproto.temp.revokeAccountCredentials',
      opts?.qp,
      data,
      opts,
    )
  }
}

export class ToolsNS {
  _client: XrpcClient
  ozone: ToolsOzoneNS

  constructor(client: XrpcClient) {
    this._client = client
    this.ozone = new ToolsOzoneNS(client)
  }
}

export class ToolsOzoneNS {
  _client: XrpcClient
  communication: ToolsOzoneCommunicationNS
  hosting: ToolsOzoneHostingNS
  moderation: ToolsOzoneModerationNS
  safelink: ToolsOzoneSafelinkNS
  server: ToolsOzoneServerNS
  set: ToolsOzoneSetNS
  setting: ToolsOzoneSettingNS
  signature: ToolsOzoneSignatureNS
  team: ToolsOzoneTeamNS
  verification: ToolsOzoneVerificationNS

  constructor(client: XrpcClient) {
    this._client = client
    this.communication = new ToolsOzoneCommunicationNS(client)
    this.hosting = new ToolsOzoneHostingNS(client)
    this.moderation = new ToolsOzoneModerationNS(client)
    this.safelink = new ToolsOzoneSafelinkNS(client)
    this.server = new ToolsOzoneServerNS(client)
    this.set = new ToolsOzoneSetNS(client)
    this.setting = new ToolsOzoneSettingNS(client)
    this.signature = new ToolsOzoneSignatureNS(client)
    this.team = new ToolsOzoneTeamNS(client)
    this.verification = new ToolsOzoneVerificationNS(client)
  }
}

export class ToolsOzoneCommunicationNS {
  _client: XrpcClient

  constructor(client: XrpcClient) {
    this._client = client
  }

  createTemplate(
    data?: ToolsOzoneCommunicationCreateTemplate.InputSchema,
    opts?: ToolsOzoneCommunicationCreateTemplate.CallOptions,
  ): Promise<ToolsOzoneCommunicationCreateTemplate.Response> {
    return this._client
      .call('tools.ozone.communication.createTemplate', opts?.qp, data, opts)
      .catch((e) => {
        throw ToolsOzoneCommunicationCreateTemplate.toKnownErr(e)
      })
  }

  deleteTemplate(
    data?: ToolsOzoneCommunicationDeleteTemplate.InputSchema,
    opts?: ToolsOzoneCommunicationDeleteTemplate.CallOptions,
  ): Promise<ToolsOzoneCommunicationDeleteTemplate.Response> {
    return this._client.call(
      'tools.ozone.communication.deleteTemplate',
      opts?.qp,
      data,
      opts,
    )
  }

  listTemplates(
    params?: ToolsOzoneCommunicationListTemplates.QueryParams,
    opts?: ToolsOzoneCommunicationListTemplates.CallOptions,
  ): Promise<ToolsOzoneCommunicationListTemplates.Response> {
    return this._client.call(
      'tools.ozone.communication.listTemplates',
      params,
      undefined,
      opts,
    )
  }

  updateTemplate(
    data?: ToolsOzoneCommunicationUpdateTemplate.InputSchema,
    opts?: ToolsOzoneCommunicationUpdateTemplate.CallOptions,
  ): Promise<ToolsOzoneCommunicationUpdateTemplate.Response> {
    return this._client
      .call('tools.ozone.communication.updateTemplate', opts?.qp, data, opts)
      .catch((e) => {
        throw ToolsOzoneCommunicationUpdateTemplate.toKnownErr(e)
      })
  }
}

export class ToolsOzoneHostingNS {
  _client: XrpcClient

  constructor(client: XrpcClient) {
    this._client = client
  }

  getAccountHistory(
    params?: ToolsOzoneHostingGetAccountHistory.QueryParams,
    opts?: ToolsOzoneHostingGetAccountHistory.CallOptions,
  ): Promise<ToolsOzoneHostingGetAccountHistory.Response> {
    return this._client.call(
      'tools.ozone.hosting.getAccountHistory',
      params,
      undefined,
      opts,
    )
  }
}

export class ToolsOzoneModerationNS {
  _client: XrpcClient

  constructor(client: XrpcClient) {
    this._client = client
  }

  emitEvent(
    data?: ToolsOzoneModerationEmitEvent.InputSchema,
    opts?: ToolsOzoneModerationEmitEvent.CallOptions,
  ): Promise<ToolsOzoneModerationEmitEvent.Response> {
    return this._client
      .call('tools.ozone.moderation.emitEvent', opts?.qp, data, opts)
      .catch((e) => {
        throw ToolsOzoneModerationEmitEvent.toKnownErr(e)
      })
  }

  getAccountTimeline(
    params?: ToolsOzoneModerationGetAccountTimeline.QueryParams,
    opts?: ToolsOzoneModerationGetAccountTimeline.CallOptions,
  ): Promise<ToolsOzoneModerationGetAccountTimeline.Response> {
    return this._client
      .call(
        'tools.ozone.moderation.getAccountTimeline',
        params,
        undefined,
        opts,
      )
      .catch((e) => {
        throw ToolsOzoneModerationGetAccountTimeline.toKnownErr(e)
      })
  }

  getEvent(
    params?: ToolsOzoneModerationGetEvent.QueryParams,
    opts?: ToolsOzoneModerationGetEvent.CallOptions,
  ): Promise<ToolsOzoneModerationGetEvent.Response> {
    return this._client.call(
      'tools.ozone.moderation.getEvent',
      params,
      undefined,
      opts,
    )
  }

  getRecord(
    params?: ToolsOzoneModerationGetRecord.QueryParams,
    opts?: ToolsOzoneModerationGetRecord.CallOptions,
  ): Promise<ToolsOzoneModerationGetRecord.Response> {
    return this._client
      .call('tools.ozone.moderation.getRecord', params, undefined, opts)
      .catch((e) => {
        throw ToolsOzoneModerationGetRecord.toKnownErr(e)
      })
  }

  getRecords(
    params?: ToolsOzoneModerationGetRecords.QueryParams,
    opts?: ToolsOzoneModerationGetRecords.CallOptions,
  ): Promise<ToolsOzoneModerationGetRecords.Response> {
    return this._client.call(
      'tools.ozone.moderation.getRecords',
      params,
      undefined,
      opts,
    )
  }

  getRepo(
    params?: ToolsOzoneModerationGetRepo.QueryParams,
    opts?: ToolsOzoneModerationGetRepo.CallOptions,
  ): Promise<ToolsOzoneModerationGetRepo.Response> {
    return this._client
      .call('tools.ozone.moderation.getRepo', params, undefined, opts)
      .catch((e) => {
        throw ToolsOzoneModerationGetRepo.toKnownErr(e)
      })
  }

  getReporterStats(
    params?: ToolsOzoneModerationGetReporterStats.QueryParams,
    opts?: ToolsOzoneModerationGetReporterStats.CallOptions,
  ): Promise<ToolsOzoneModerationGetReporterStats.Response> {
    return this._client.call(
      'tools.ozone.moderation.getReporterStats',
      params,
      undefined,
      opts,
    )
  }

  getRepos(
    params?: ToolsOzoneModerationGetRepos.QueryParams,
    opts?: ToolsOzoneModerationGetRepos.CallOptions,
  ): Promise<ToolsOzoneModerationGetRepos.Response> {
    return this._client.call(
      'tools.ozone.moderation.getRepos',
      params,
      undefined,
      opts,
    )
  }

  getSubjects(
    params?: ToolsOzoneModerationGetSubjects.QueryParams,
    opts?: ToolsOzoneModerationGetSubjects.CallOptions,
  ): Promise<ToolsOzoneModerationGetSubjects.Response> {
    return this._client.call(
      'tools.ozone.moderation.getSubjects',
      params,
      undefined,
      opts,
    )
  }

  queryEvents(
    params?: ToolsOzoneModerationQueryEvents.QueryParams,
    opts?: ToolsOzoneModerationQueryEvents.CallOptions,
  ): Promise<ToolsOzoneModerationQueryEvents.Response> {
    return this._client.call(
      'tools.ozone.moderation.queryEvents',
      params,
      undefined,
      opts,
    )
  }

  queryStatuses(
    params?: ToolsOzoneModerationQueryStatuses.QueryParams,
    opts?: ToolsOzoneModerationQueryStatuses.CallOptions,
  ): Promise<ToolsOzoneModerationQueryStatuses.Response> {
    return this._client.call(
      'tools.ozone.moderation.queryStatuses',
      params,
      undefined,
      opts,
    )
  }

  searchRepos(
    params?: ToolsOzoneModerationSearchRepos.QueryParams,
    opts?: ToolsOzoneModerationSearchRepos.CallOptions,
  ): Promise<ToolsOzoneModerationSearchRepos.Response> {
    return this._client.call(
      'tools.ozone.moderation.searchRepos',
      params,
      undefined,
      opts,
    )
  }
}

export class ToolsOzoneSafelinkNS {
  _client: XrpcClient

  constructor(client: XrpcClient) {
    this._client = client
  }

  addRule(
    data?: ToolsOzoneSafelinkAddRule.InputSchema,
    opts?: ToolsOzoneSafelinkAddRule.CallOptions,
  ): Promise<ToolsOzoneSafelinkAddRule.Response> {
    return this._client
      .call('tools.ozone.safelink.addRule', opts?.qp, data, opts)
      .catch((e) => {
        throw ToolsOzoneSafelinkAddRule.toKnownErr(e)
      })
  }

  queryEvents(
    data?: ToolsOzoneSafelinkQueryEvents.InputSchema,
    opts?: ToolsOzoneSafelinkQueryEvents.CallOptions,
  ): Promise<ToolsOzoneSafelinkQueryEvents.Response> {
    return this._client.call(
      'tools.ozone.safelink.queryEvents',
      opts?.qp,
      data,
      opts,
    )
  }

  queryRules(
    data?: ToolsOzoneSafelinkQueryRules.InputSchema,
    opts?: ToolsOzoneSafelinkQueryRules.CallOptions,
  ): Promise<ToolsOzoneSafelinkQueryRules.Response> {
    return this._client.call(
      'tools.ozone.safelink.queryRules',
      opts?.qp,
      data,
      opts,
    )
  }

  removeRule(
    data?: ToolsOzoneSafelinkRemoveRule.InputSchema,
    opts?: ToolsOzoneSafelinkRemoveRule.CallOptions,
  ): Promise<ToolsOzoneSafelinkRemoveRule.Response> {
    return this._client
      .call('tools.ozone.safelink.removeRule', opts?.qp, data, opts)
      .catch((e) => {
        throw ToolsOzoneSafelinkRemoveRule.toKnownErr(e)
      })
  }

  updateRule(
    data?: ToolsOzoneSafelinkUpdateRule.InputSchema,
    opts?: ToolsOzoneSafelinkUpdateRule.CallOptions,
  ): Promise<ToolsOzoneSafelinkUpdateRule.Response> {
    return this._client
      .call('tools.ozone.safelink.updateRule', opts?.qp, data, opts)
      .catch((e) => {
        throw ToolsOzoneSafelinkUpdateRule.toKnownErr(e)
      })
  }
}

export class ToolsOzoneServerNS {
  _client: XrpcClient

  constructor(client: XrpcClient) {
    this._client = client
  }

  getConfig(
    params?: ToolsOzoneServerGetConfig.QueryParams,
    opts?: ToolsOzoneServerGetConfig.CallOptions,
  ): Promise<ToolsOzoneServerGetConfig.Response> {
    return this._client.call(
      'tools.ozone.server.getConfig',
      params,
      undefined,
      opts,
    )
  }
}

export class ToolsOzoneSetNS {
  _client: XrpcClient

  constructor(client: XrpcClient) {
    this._client = client
  }

  addValues(
    data?: ToolsOzoneSetAddValues.InputSchema,
    opts?: ToolsOzoneSetAddValues.CallOptions,
  ): Promise<ToolsOzoneSetAddValues.Response> {
    return this._client.call('tools.ozone.set.addValues', opts?.qp, data, opts)
  }

  deleteSet(
    data?: ToolsOzoneSetDeleteSet.InputSchema,
    opts?: ToolsOzoneSetDeleteSet.CallOptions,
  ): Promise<ToolsOzoneSetDeleteSet.Response> {
    return this._client
      .call('tools.ozone.set.deleteSet', opts?.qp, data, opts)
      .catch((e) => {
        throw ToolsOzoneSetDeleteSet.toKnownErr(e)
      })
  }

  deleteValues(
    data?: ToolsOzoneSetDeleteValues.InputSchema,
    opts?: ToolsOzoneSetDeleteValues.CallOptions,
  ): Promise<ToolsOzoneSetDeleteValues.Response> {
    return this._client
      .call('tools.ozone.set.deleteValues', opts?.qp, data, opts)
      .catch((e) => {
        throw ToolsOzoneSetDeleteValues.toKnownErr(e)
      })
  }

  getValues(
    params?: ToolsOzoneSetGetValues.QueryParams,
    opts?: ToolsOzoneSetGetValues.CallOptions,
  ): Promise<ToolsOzoneSetGetValues.Response> {
    return this._client
      .call('tools.ozone.set.getValues', params, undefined, opts)
      .catch((e) => {
        throw ToolsOzoneSetGetValues.toKnownErr(e)
      })
  }

  querySets(
    params?: ToolsOzoneSetQuerySets.QueryParams,
    opts?: ToolsOzoneSetQuerySets.CallOptions,
  ): Promise<ToolsOzoneSetQuerySets.Response> {
    return this._client.call(
      'tools.ozone.set.querySets',
      params,
      undefined,
      opts,
    )
  }

  upsertSet(
    data?: ToolsOzoneSetUpsertSet.InputSchema,
    opts?: ToolsOzoneSetUpsertSet.CallOptions,
  ): Promise<ToolsOzoneSetUpsertSet.Response> {
    return this._client.call('tools.ozone.set.upsertSet', opts?.qp, data, opts)
  }
}

export class ToolsOzoneSettingNS {
  _client: XrpcClient

  constructor(client: XrpcClient) {
    this._client = client
  }

  listOptions(
    params?: ToolsOzoneSettingListOptions.QueryParams,
    opts?: ToolsOzoneSettingListOptions.CallOptions,
  ): Promise<ToolsOzoneSettingListOptions.Response> {
    return this._client.call(
      'tools.ozone.setting.listOptions',
      params,
      undefined,
      opts,
    )
  }

  removeOptions(
    data?: ToolsOzoneSettingRemoveOptions.InputSchema,
    opts?: ToolsOzoneSettingRemoveOptions.CallOptions,
  ): Promise<ToolsOzoneSettingRemoveOptions.Response> {
    return this._client.call(
      'tools.ozone.setting.removeOptions',
      opts?.qp,
      data,
      opts,
    )
  }

  upsertOption(
    data?: ToolsOzoneSettingUpsertOption.InputSchema,
    opts?: ToolsOzoneSettingUpsertOption.CallOptions,
  ): Promise<ToolsOzoneSettingUpsertOption.Response> {
    return this._client.call(
      'tools.ozone.setting.upsertOption',
      opts?.qp,
      data,
      opts,
    )
  }
}

export class ToolsOzoneSignatureNS {
  _client: XrpcClient

  constructor(client: XrpcClient) {
    this._client = client
  }

  findCorrelation(
    params?: ToolsOzoneSignatureFindCorrelation.QueryParams,
    opts?: ToolsOzoneSignatureFindCorrelation.CallOptions,
  ): Promise<ToolsOzoneSignatureFindCorrelation.Response> {
    return this._client.call(
      'tools.ozone.signature.findCorrelation',
      params,
      undefined,
      opts,
    )
  }

  findRelatedAccounts(
    params?: ToolsOzoneSignatureFindRelatedAccounts.QueryParams,
    opts?: ToolsOzoneSignatureFindRelatedAccounts.CallOptions,
  ): Promise<ToolsOzoneSignatureFindRelatedAccounts.Response> {
    return this._client.call(
      'tools.ozone.signature.findRelatedAccounts',
      params,
      undefined,
      opts,
    )
  }

  searchAccounts(
    params?: ToolsOzoneSignatureSearchAccounts.QueryParams,
    opts?: ToolsOzoneSignatureSearchAccounts.CallOptions,
  ): Promise<ToolsOzoneSignatureSearchAccounts.Response> {
    return this._client.call(
      'tools.ozone.signature.searchAccounts',
      params,
      undefined,
      opts,
    )
  }
}

export class ToolsOzoneTeamNS {
  _client: XrpcClient

  constructor(client: XrpcClient) {
    this._client = client
  }

  addMember(
    data?: ToolsOzoneTeamAddMember.InputSchema,
    opts?: ToolsOzoneTeamAddMember.CallOptions,
  ): Promise<ToolsOzoneTeamAddMember.Response> {
    return this._client
      .call('tools.ozone.team.addMember', opts?.qp, data, opts)
      .catch((e) => {
        throw ToolsOzoneTeamAddMember.toKnownErr(e)
      })
  }

  deleteMember(
    data?: ToolsOzoneTeamDeleteMember.InputSchema,
    opts?: ToolsOzoneTeamDeleteMember.CallOptions,
  ): Promise<ToolsOzoneTeamDeleteMember.Response> {
    return this._client
      .call('tools.ozone.team.deleteMember', opts?.qp, data, opts)
      .catch((e) => {
        throw ToolsOzoneTeamDeleteMember.toKnownErr(e)
      })
  }

  listMembers(
    params?: ToolsOzoneTeamListMembers.QueryParams,
    opts?: ToolsOzoneTeamListMembers.CallOptions,
  ): Promise<ToolsOzoneTeamListMembers.Response> {
    return this._client.call(
      'tools.ozone.team.listMembers',
      params,
      undefined,
      opts,
    )
  }

  updateMember(
    data?: ToolsOzoneTeamUpdateMember.InputSchema,
    opts?: ToolsOzoneTeamUpdateMember.CallOptions,
  ): Promise<ToolsOzoneTeamUpdateMember.Response> {
    return this._client
      .call('tools.ozone.team.updateMember', opts?.qp, data, opts)
      .catch((e) => {
        throw ToolsOzoneTeamUpdateMember.toKnownErr(e)
      })
  }
}

export class ToolsOzoneVerificationNS {
  _client: XrpcClient

  constructor(client: XrpcClient) {
    this._client = client
  }

  grantVerifications(
    data?: ToolsOzoneVerificationGrantVerifications.InputSchema,
    opts?: ToolsOzoneVerificationGrantVerifications.CallOptions,
  ): Promise<ToolsOzoneVerificationGrantVerifications.Response> {
    return this._client.call(
      'tools.ozone.verification.grantVerifications',
      opts?.qp,
      data,
      opts,
    )
  }

  listVerifications(
    params?: ToolsOzoneVerificationListVerifications.QueryParams,
    opts?: ToolsOzoneVerificationListVerifications.CallOptions,
  ): Promise<ToolsOzoneVerificationListVerifications.Response> {
    return this._client.call(
      'tools.ozone.verification.listVerifications',
      params,
      undefined,
      opts,
    )
  }

  revokeVerifications(
    data?: ToolsOzoneVerificationRevokeVerifications.InputSchema,
    opts?: ToolsOzoneVerificationRevokeVerifications.CallOptions,
  ): Promise<ToolsOzoneVerificationRevokeVerifications.Response> {
    return this._client.call(
      'tools.ozone.verification.revokeVerifications',
      opts?.qp,
      data,
      opts,
    )
  }
}
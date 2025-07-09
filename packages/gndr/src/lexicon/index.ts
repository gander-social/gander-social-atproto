/**
 * GENERATED CODE - DO NOT MODIFY
 */
import {
  type Auth,
  type Options as XrpcOptions,
  Server as XrpcServer,
  type StreamConfigOrHandler,
  type MethodConfigOrHandler,
  createServer as createXrpcServer,
} from '@atproto/xrpc-server'
import { schemas } from './lexicons.js'
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
import * as ComAtprotoIdentityGetRecommendedDidCredentials from './types/com/atproto/identity/getRecommendedDidCredentials.js'
import * as ComAtprotoIdentityRefreshIdentity from './types/com/atproto/identity/refreshIdentity.js'
import * as ComAtprotoIdentityRequestPlcOperationSignature from './types/com/atproto/identity/requestPlcOperationSignature.js'
import * as ComAtprotoIdentityResolveDid from './types/com/atproto/identity/resolveDid.js'
import * as ComAtprotoIdentityResolveHandle from './types/com/atproto/identity/resolveHandle.js'
import * as ComAtprotoIdentityResolveIdentity from './types/com/atproto/identity/resolveIdentity.js'
import * as ComAtprotoIdentitySignPlcOperation from './types/com/atproto/identity/signPlcOperation.js'
import * as ComAtprotoIdentitySubmitPlcOperation from './types/com/atproto/identity/submitPlcOperation.js'
import * as ComAtprotoIdentityUpdateHandle from './types/com/atproto/identity/updateHandle.js'
import * as ComAtprotoLabelQueryLabels from './types/com/atproto/label/queryLabels.js'
import * as ComAtprotoLabelSubscribeLabels from './types/com/atproto/label/subscribeLabels.js'
import * as ComAtprotoModerationCreateReport from './types/com/atproto/moderation/createReport.js'
import * as ComAtprotoRepoApplyWrites from './types/com/atproto/repo/applyWrites.js'
import * as ComAtprotoRepoCreateRecord from './types/com/atproto/repo/createRecord.js'
import * as ComAtprotoRepoDeleteRecord from './types/com/atproto/repo/deleteRecord.js'
import * as ComAtprotoRepoDescribeRepo from './types/com/atproto/repo/describeRepo.js'
import * as ComAtprotoRepoGetRecord from './types/com/atproto/repo/getRecord.js'
import * as ComAtprotoRepoImportRepo from './types/com/atproto/repo/importRepo.js'
import * as ComAtprotoRepoListMissingBlobs from './types/com/atproto/repo/listMissingBlobs.js'
import * as ComAtprotoRepoListRecords from './types/com/atproto/repo/listRecords.js'
import * as ComAtprotoRepoPutRecord from './types/com/atproto/repo/putRecord.js'
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
import * as ComAtprotoTempCheckSignupQueue from './types/com/atproto/temp/checkSignupQueue.js'
import * as ComAtprotoTempFetchLabels from './types/com/atproto/temp/fetchLabels.js'
import * as ComAtprotoTempRequestPhoneVerification from './types/com/atproto/temp/requestPhoneVerification.js'
import * as AppGndrActorGetPreferences from './types/app/gndr/actor/getPreferences.js'
import * as AppGndrActorGetProfile from './types/app/gndr/actor/getProfile.js'
import * as AppGndrActorGetProfiles from './types/app/gndr/actor/getProfiles.js'
import * as AppGndrActorGetSuggestions from './types/app/gndr/actor/getSuggestions.js'
import * as AppGndrActorPutPreferences from './types/app/gndr/actor/putPreferences.js'
import * as AppGndrActorSearchActors from './types/app/gndr/actor/searchActors.js'
import * as AppGndrActorSearchActorsTypeahead from './types/app/gndr/actor/searchActorsTypeahead.js'
import * as AppGndrFeedDescribeFeedGenerator from './types/app/gndr/feed/describeFeedGenerator.js'
import * as AppGndrFeedGetActorFeeds from './types/app/gndr/feed/getActorFeeds.js'
import * as AppGndrFeedGetActorLikes from './types/app/gndr/feed/getActorLikes.js'
import * as AppGndrFeedGetAuthorFeed from './types/app/gndr/feed/getAuthorFeed.js'
import * as AppGndrFeedGetFeed from './types/app/gndr/feed/getFeed.js'
import * as AppGndrFeedGetFeedGenerator from './types/app/gndr/feed/getFeedGenerator.js'
import * as AppGndrFeedGetFeedGenerators from './types/app/gndr/feed/getFeedGenerators.js'
import * as AppGndrFeedGetFeedSkeleton from './types/app/gndr/feed/getFeedSkeleton.js'
import * as AppGndrFeedGetLikes from './types/app/gndr/feed/getLikes.js'
import * as AppGndrFeedGetListFeed from './types/app/gndr/feed/getListFeed.js'
import * as AppGndrFeedGetPosts from './types/app/gndr/feed/getPosts.js'
import * as AppGndrFeedGetPostThread from './types/app/gndr/feed/getPostThread.js'
import * as AppGndrFeedGetQuotes from './types/app/gndr/feed/getQuotes.js'
import * as AppGndrFeedGetRepostedBy from './types/app/gndr/feed/getRepostedBy.js'
import * as AppGndrFeedGetSuggestedFeeds from './types/app/gndr/feed/getSuggestedFeeds.js'
import * as AppGndrFeedGetTimeline from './types/app/gndr/feed/getTimeline.js'
import * as AppGndrFeedSearchPosts from './types/app/gndr/feed/searchPosts.js'
import * as AppGndrFeedSendInteractions from './types/app/gndr/feed/sendInteractions.js'
import * as AppGndrGraphGetActorStarterPacks from './types/app/gndr/graph/getActorStarterPacks.js'
import * as AppGndrGraphGetBlocks from './types/app/gndr/graph/getBlocks.js'
import * as AppGndrGraphGetFollowers from './types/app/gndr/graph/getFollowers.js'
import * as AppGndrGraphGetFollows from './types/app/gndr/graph/getFollows.js'
import * as AppGndrGraphGetKnownFollowers from './types/app/gndr/graph/getKnownFollowers.js'
import * as AppGndrGraphGetList from './types/app/gndr/graph/getList.js'
import * as AppGndrGraphGetListBlocks from './types/app/gndr/graph/getListBlocks.js'
import * as AppGndrGraphGetListMutes from './types/app/gndr/graph/getListMutes.js'
import * as AppGndrGraphGetLists from './types/app/gndr/graph/getLists.js'
import * as AppGndrGraphGetMutes from './types/app/gndr/graph/getMutes.js'
import * as AppGndrGraphGetRelationships from './types/app/gndr/graph/getRelationships.js'
import * as AppGndrGraphGetStarterPack from './types/app/gndr/graph/getStarterPack.js'
import * as AppGndrGraphGetStarterPacks from './types/app/gndr/graph/getStarterPacks.js'
import * as AppGndrGraphGetSuggestedFollowsByActor from './types/app/gndr/graph/getSuggestedFollowsByActor.js'
import * as AppGndrGraphMuteActor from './types/app/gndr/graph/muteActor.js'
import * as AppGndrGraphMuteActorList from './types/app/gndr/graph/muteActorList.js'
import * as AppGndrGraphMuteThread from './types/app/gndr/graph/muteThread.js'
import * as AppGndrGraphSearchStarterPacks from './types/app/gndr/graph/searchStarterPacks.js'
import * as AppGndrGraphUnmuteActor from './types/app/gndr/graph/unmuteActor.js'
import * as AppGndrGraphUnmuteActorList from './types/app/gndr/graph/unmuteActorList.js'
import * as AppGndrGraphUnmuteThread from './types/app/gndr/graph/unmuteThread.js'
import * as AppGndrLabelerGetServices from './types/app/gndr/labeler/getServices.js'
import * as AppGndrNotificationGetPreferences from './types/app/gndr/notification/getPreferences.js'
import * as AppGndrNotificationGetUnreadCount from './types/app/gndr/notification/getUnreadCount.js'
import * as AppGndrNotificationListActivitySubscriptions from './types/app/gndr/notification/listActivitySubscriptions.js'
import * as AppGndrNotificationListNotifications from './types/app/gndr/notification/listNotifications.js'
import * as AppGndrNotificationPutActivitySubscription from './types/app/gndr/notification/putActivitySubscription.js'
import * as AppGndrNotificationPutPreferences from './types/app/gndr/notification/putPreferences.js'
import * as AppGndrNotificationPutPreferencesV2 from './types/app/gndr/notification/putPreferencesV2.js'
import * as AppGndrNotificationRegisterPush from './types/app/gndr/notification/registerPush.js'
import * as AppGndrNotificationUpdateSeen from './types/app/gndr/notification/updateSeen.js'
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
import * as AppGndrUnspeccedSearchActorsSkeleton from './types/app/gndr/unspecced/searchActorsSkeleton.js'
import * as AppGndrUnspeccedSearchPostsSkeleton from './types/app/gndr/unspecced/searchPostsSkeleton.js'
import * as AppGndrUnspeccedSearchStarterPacksSkeleton from './types/app/gndr/unspecced/searchStarterPacksSkeleton.js'
import * as AppGndrVideoGetJobStatus from './types/app/gndr/video/getJobStatus.js'
import * as AppGndrVideoGetUploadLimits from './types/app/gndr/video/getUploadLimits.js'
import * as AppGndrVideoUploadVideo from './types/app/gndr/video/uploadVideo.js'
import * as ChatGndrActorDeleteAccount from './types/chat/gndr/actor/deleteAccount.js'
import * as ChatGndrActorExportAccountData from './types/chat/gndr/actor/exportAccountData.js'
import * as ChatGndrConvoAcceptConvo from './types/chat/gndr/convo/acceptConvo.js'
import * as ChatGndrConvoAddReaction from './types/chat/gndr/convo/addReaction.js'
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

export const COM_ATPROTO_MODERATION = {
  DefsReasonSpam: 'com.atproto.moderation.defs#reasonSpam',
  DefsReasonViolation: 'com.atproto.moderation.defs#reasonViolation',
  DefsReasonMisleading: 'com.atproto.moderation.defs#reasonMisleading',
  DefsReasonSexual: 'com.atproto.moderation.defs#reasonSexual',
  DefsReasonRude: 'com.atproto.moderation.defs#reasonRude',
  DefsReasonOther: 'com.atproto.moderation.defs#reasonOther',
  DefsReasonAppeal: 'com.atproto.moderation.defs#reasonAppeal',
}
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

export function createServer(options?: XrpcOptions): Server {
  return new Server(options)
}

export class Server {
  xrpc: XrpcServer
  com: ComNS
  app: AppNS
  chat: ChatNS

  constructor(options?: XrpcOptions) {
    this.xrpc = createXrpcServer(schemas, options)
    this.com = new ComNS(this)
    this.app = new AppNS(this)
    this.chat = new ChatNS(this)
  }
}

export class ComNS {
  _server: Server
  atproto: ComAtprotoNS

  constructor(server: Server) {
    this._server = server
    this.atproto = new ComAtprotoNS(server)
  }
}

export class ComAtprotoNS {
  _server: Server
  admin: ComAtprotoAdminNS
  identity: ComAtprotoIdentityNS
  label: ComAtprotoLabelNS
  lexicon: ComAtprotoLexiconNS
  moderation: ComAtprotoModerationNS
  repo: ComAtprotoRepoNS
  server: ComAtprotoServerNS
  sync: ComAtprotoSyncNS
  temp: ComAtprotoTempNS

  constructor(server: Server) {
    this._server = server
    this.admin = new ComAtprotoAdminNS(server)
    this.identity = new ComAtprotoIdentityNS(server)
    this.label = new ComAtprotoLabelNS(server)
    this.lexicon = new ComAtprotoLexiconNS(server)
    this.moderation = new ComAtprotoModerationNS(server)
    this.repo = new ComAtprotoRepoNS(server)
    this.server = new ComAtprotoServerNS(server)
    this.sync = new ComAtprotoSyncNS(server)
    this.temp = new ComAtprotoTempNS(server)
  }
}

export class ComAtprotoAdminNS {
  _server: Server

  constructor(server: Server) {
    this._server = server
  }

  deleteAccount<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoAdminDeleteAccount.QueryParams,
      ComAtprotoAdminDeleteAccount.HandlerInput,
      ComAtprotoAdminDeleteAccount.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.admin.deleteAccount' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  disableAccountInvites<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoAdminDisableAccountInvites.QueryParams,
      ComAtprotoAdminDisableAccountInvites.HandlerInput,
      ComAtprotoAdminDisableAccountInvites.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.admin.disableAccountInvites' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  disableInviteCodes<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoAdminDisableInviteCodes.QueryParams,
      ComAtprotoAdminDisableInviteCodes.HandlerInput,
      ComAtprotoAdminDisableInviteCodes.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.admin.disableInviteCodes' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  enableAccountInvites<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoAdminEnableAccountInvites.QueryParams,
      ComAtprotoAdminEnableAccountInvites.HandlerInput,
      ComAtprotoAdminEnableAccountInvites.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.admin.enableAccountInvites' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getAccountInfo<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoAdminGetAccountInfo.QueryParams,
      ComAtprotoAdminGetAccountInfo.HandlerInput,
      ComAtprotoAdminGetAccountInfo.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.admin.getAccountInfo' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getAccountInfos<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoAdminGetAccountInfos.QueryParams,
      ComAtprotoAdminGetAccountInfos.HandlerInput,
      ComAtprotoAdminGetAccountInfos.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.admin.getAccountInfos' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getInviteCodes<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoAdminGetInviteCodes.QueryParams,
      ComAtprotoAdminGetInviteCodes.HandlerInput,
      ComAtprotoAdminGetInviteCodes.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.admin.getInviteCodes' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getSubjectStatus<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoAdminGetSubjectStatus.QueryParams,
      ComAtprotoAdminGetSubjectStatus.HandlerInput,
      ComAtprotoAdminGetSubjectStatus.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.admin.getSubjectStatus' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  searchAccounts<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoAdminSearchAccounts.QueryParams,
      ComAtprotoAdminSearchAccounts.HandlerInput,
      ComAtprotoAdminSearchAccounts.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.admin.searchAccounts' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  sendEmail<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoAdminSendEmail.QueryParams,
      ComAtprotoAdminSendEmail.HandlerInput,
      ComAtprotoAdminSendEmail.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.admin.sendEmail' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  updateAccountEmail<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoAdminUpdateAccountEmail.QueryParams,
      ComAtprotoAdminUpdateAccountEmail.HandlerInput,
      ComAtprotoAdminUpdateAccountEmail.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.admin.updateAccountEmail' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  updateAccountHandle<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoAdminUpdateAccountHandle.QueryParams,
      ComAtprotoAdminUpdateAccountHandle.HandlerInput,
      ComAtprotoAdminUpdateAccountHandle.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.admin.updateAccountHandle' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  updateAccountPassword<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoAdminUpdateAccountPassword.QueryParams,
      ComAtprotoAdminUpdateAccountPassword.HandlerInput,
      ComAtprotoAdminUpdateAccountPassword.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.admin.updateAccountPassword' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  updateAccountSigningKey<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoAdminUpdateAccountSigningKey.QueryParams,
      ComAtprotoAdminUpdateAccountSigningKey.HandlerInput,
      ComAtprotoAdminUpdateAccountSigningKey.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.admin.updateAccountSigningKey' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  updateSubjectStatus<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoAdminUpdateSubjectStatus.QueryParams,
      ComAtprotoAdminUpdateSubjectStatus.HandlerInput,
      ComAtprotoAdminUpdateSubjectStatus.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.admin.updateSubjectStatus' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }
}

export class ComAtprotoIdentityNS {
  _server: Server

  constructor(server: Server) {
    this._server = server
  }

  getRecommendedDidCredentials<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoIdentityGetRecommendedDidCredentials.QueryParams,
      ComAtprotoIdentityGetRecommendedDidCredentials.HandlerInput,
      ComAtprotoIdentityGetRecommendedDidCredentials.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.identity.getRecommendedDidCredentials' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  refreshIdentity<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoIdentityRefreshIdentity.QueryParams,
      ComAtprotoIdentityRefreshIdentity.HandlerInput,
      ComAtprotoIdentityRefreshIdentity.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.identity.refreshIdentity' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  requestPlcOperationSignature<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoIdentityRequestPlcOperationSignature.QueryParams,
      ComAtprotoIdentityRequestPlcOperationSignature.HandlerInput,
      ComAtprotoIdentityRequestPlcOperationSignature.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.identity.requestPlcOperationSignature' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  resolveDid<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoIdentityResolveDid.QueryParams,
      ComAtprotoIdentityResolveDid.HandlerInput,
      ComAtprotoIdentityResolveDid.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.identity.resolveDid' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  resolveHandle<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoIdentityResolveHandle.QueryParams,
      ComAtprotoIdentityResolveHandle.HandlerInput,
      ComAtprotoIdentityResolveHandle.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.identity.resolveHandle' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  resolveIdentity<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoIdentityResolveIdentity.QueryParams,
      ComAtprotoIdentityResolveIdentity.HandlerInput,
      ComAtprotoIdentityResolveIdentity.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.identity.resolveIdentity' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  signPlcOperation<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoIdentitySignPlcOperation.QueryParams,
      ComAtprotoIdentitySignPlcOperation.HandlerInput,
      ComAtprotoIdentitySignPlcOperation.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.identity.signPlcOperation' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  submitPlcOperation<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoIdentitySubmitPlcOperation.QueryParams,
      ComAtprotoIdentitySubmitPlcOperation.HandlerInput,
      ComAtprotoIdentitySubmitPlcOperation.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.identity.submitPlcOperation' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  updateHandle<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoIdentityUpdateHandle.QueryParams,
      ComAtprotoIdentityUpdateHandle.HandlerInput,
      ComAtprotoIdentityUpdateHandle.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.identity.updateHandle' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }
}

export class ComAtprotoLabelNS {
  _server: Server

  constructor(server: Server) {
    this._server = server
  }

  queryLabels<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoLabelQueryLabels.QueryParams,
      ComAtprotoLabelQueryLabels.HandlerInput,
      ComAtprotoLabelQueryLabels.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.label.queryLabels' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  subscribeLabels<A extends Auth = void>(
    cfg: StreamConfigOrHandler<
      A,
      ComAtprotoLabelSubscribeLabels.QueryParams,
      ComAtprotoLabelSubscribeLabels.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.label.subscribeLabels' // @ts-ignore
    return this._server.xrpc.streamMethod(nsid, cfg)
  }
}

export class ComAtprotoLexiconNS {
  _server: Server

  constructor(server: Server) {
    this._server = server
  }
}

export class ComAtprotoModerationNS {
  _server: Server

  constructor(server: Server) {
    this._server = server
  }

  createReport<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoModerationCreateReport.QueryParams,
      ComAtprotoModerationCreateReport.HandlerInput,
      ComAtprotoModerationCreateReport.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.moderation.createReport' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }
}

export class ComAtprotoRepoNS {
  _server: Server

  constructor(server: Server) {
    this._server = server
  }

  applyWrites<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoRepoApplyWrites.QueryParams,
      ComAtprotoRepoApplyWrites.HandlerInput,
      ComAtprotoRepoApplyWrites.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.repo.applyWrites' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  createRecord<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoRepoCreateRecord.QueryParams,
      ComAtprotoRepoCreateRecord.HandlerInput,
      ComAtprotoRepoCreateRecord.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.repo.createRecord' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  deleteRecord<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoRepoDeleteRecord.QueryParams,
      ComAtprotoRepoDeleteRecord.HandlerInput,
      ComAtprotoRepoDeleteRecord.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.repo.deleteRecord' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  describeRepo<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoRepoDescribeRepo.QueryParams,
      ComAtprotoRepoDescribeRepo.HandlerInput,
      ComAtprotoRepoDescribeRepo.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.repo.describeRepo' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getRecord<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoRepoGetRecord.QueryParams,
      ComAtprotoRepoGetRecord.HandlerInput,
      ComAtprotoRepoGetRecord.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.repo.getRecord' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  importRepo<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoRepoImportRepo.QueryParams,
      ComAtprotoRepoImportRepo.HandlerInput,
      ComAtprotoRepoImportRepo.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.repo.importRepo' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  listMissingBlobs<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoRepoListMissingBlobs.QueryParams,
      ComAtprotoRepoListMissingBlobs.HandlerInput,
      ComAtprotoRepoListMissingBlobs.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.repo.listMissingBlobs' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  listRecords<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoRepoListRecords.QueryParams,
      ComAtprotoRepoListRecords.HandlerInput,
      ComAtprotoRepoListRecords.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.repo.listRecords' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  putRecord<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoRepoPutRecord.QueryParams,
      ComAtprotoRepoPutRecord.HandlerInput,
      ComAtprotoRepoPutRecord.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.repo.putRecord' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  uploadBlob<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoRepoUploadBlob.QueryParams,
      ComAtprotoRepoUploadBlob.HandlerInput,
      ComAtprotoRepoUploadBlob.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.repo.uploadBlob' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }
}

export class ComAtprotoServerNS {
  _server: Server

  constructor(server: Server) {
    this._server = server
  }

  activateAccount<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoServerActivateAccount.QueryParams,
      ComAtprotoServerActivateAccount.HandlerInput,
      ComAtprotoServerActivateAccount.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.server.activateAccount' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  checkAccountStatus<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoServerCheckAccountStatus.QueryParams,
      ComAtprotoServerCheckAccountStatus.HandlerInput,
      ComAtprotoServerCheckAccountStatus.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.server.checkAccountStatus' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  confirmEmail<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoServerConfirmEmail.QueryParams,
      ComAtprotoServerConfirmEmail.HandlerInput,
      ComAtprotoServerConfirmEmail.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.server.confirmEmail' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  createAccount<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoServerCreateAccount.QueryParams,
      ComAtprotoServerCreateAccount.HandlerInput,
      ComAtprotoServerCreateAccount.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.server.createAccount' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  createAppPassword<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoServerCreateAppPassword.QueryParams,
      ComAtprotoServerCreateAppPassword.HandlerInput,
      ComAtprotoServerCreateAppPassword.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.server.createAppPassword' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  createInviteCode<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoServerCreateInviteCode.QueryParams,
      ComAtprotoServerCreateInviteCode.HandlerInput,
      ComAtprotoServerCreateInviteCode.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.server.createInviteCode' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  createInviteCodes<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoServerCreateInviteCodes.QueryParams,
      ComAtprotoServerCreateInviteCodes.HandlerInput,
      ComAtprotoServerCreateInviteCodes.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.server.createInviteCodes' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  createSession<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoServerCreateSession.QueryParams,
      ComAtprotoServerCreateSession.HandlerInput,
      ComAtprotoServerCreateSession.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.server.createSession' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  deactivateAccount<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoServerDeactivateAccount.QueryParams,
      ComAtprotoServerDeactivateAccount.HandlerInput,
      ComAtprotoServerDeactivateAccount.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.server.deactivateAccount' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  deleteAccount<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoServerDeleteAccount.QueryParams,
      ComAtprotoServerDeleteAccount.HandlerInput,
      ComAtprotoServerDeleteAccount.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.server.deleteAccount' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  deleteSession<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoServerDeleteSession.QueryParams,
      ComAtprotoServerDeleteSession.HandlerInput,
      ComAtprotoServerDeleteSession.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.server.deleteSession' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  describeServer<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoServerDescribeServer.QueryParams,
      ComAtprotoServerDescribeServer.HandlerInput,
      ComAtprotoServerDescribeServer.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.server.describeServer' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getAccountInviteCodes<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoServerGetAccountInviteCodes.QueryParams,
      ComAtprotoServerGetAccountInviteCodes.HandlerInput,
      ComAtprotoServerGetAccountInviteCodes.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.server.getAccountInviteCodes' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getServiceAuth<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoServerGetServiceAuth.QueryParams,
      ComAtprotoServerGetServiceAuth.HandlerInput,
      ComAtprotoServerGetServiceAuth.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.server.getServiceAuth' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getSession<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoServerGetSession.QueryParams,
      ComAtprotoServerGetSession.HandlerInput,
      ComAtprotoServerGetSession.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.server.getSession' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  listAppPasswords<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoServerListAppPasswords.QueryParams,
      ComAtprotoServerListAppPasswords.HandlerInput,
      ComAtprotoServerListAppPasswords.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.server.listAppPasswords' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  refreshSession<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoServerRefreshSession.QueryParams,
      ComAtprotoServerRefreshSession.HandlerInput,
      ComAtprotoServerRefreshSession.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.server.refreshSession' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  requestAccountDelete<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoServerRequestAccountDelete.QueryParams,
      ComAtprotoServerRequestAccountDelete.HandlerInput,
      ComAtprotoServerRequestAccountDelete.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.server.requestAccountDelete' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  requestEmailConfirmation<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoServerRequestEmailConfirmation.QueryParams,
      ComAtprotoServerRequestEmailConfirmation.HandlerInput,
      ComAtprotoServerRequestEmailConfirmation.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.server.requestEmailConfirmation' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  requestEmailUpdate<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoServerRequestEmailUpdate.QueryParams,
      ComAtprotoServerRequestEmailUpdate.HandlerInput,
      ComAtprotoServerRequestEmailUpdate.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.server.requestEmailUpdate' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  requestPasswordReset<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoServerRequestPasswordReset.QueryParams,
      ComAtprotoServerRequestPasswordReset.HandlerInput,
      ComAtprotoServerRequestPasswordReset.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.server.requestPasswordReset' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  reserveSigningKey<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoServerReserveSigningKey.QueryParams,
      ComAtprotoServerReserveSigningKey.HandlerInput,
      ComAtprotoServerReserveSigningKey.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.server.reserveSigningKey' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  resetPassword<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoServerResetPassword.QueryParams,
      ComAtprotoServerResetPassword.HandlerInput,
      ComAtprotoServerResetPassword.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.server.resetPassword' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  revokeAppPassword<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoServerRevokeAppPassword.QueryParams,
      ComAtprotoServerRevokeAppPassword.HandlerInput,
      ComAtprotoServerRevokeAppPassword.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.server.revokeAppPassword' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  updateEmail<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoServerUpdateEmail.QueryParams,
      ComAtprotoServerUpdateEmail.HandlerInput,
      ComAtprotoServerUpdateEmail.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.server.updateEmail' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }
}

export class ComAtprotoSyncNS {
  _server: Server

  constructor(server: Server) {
    this._server = server
  }

  getBlob<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoSyncGetBlob.QueryParams,
      ComAtprotoSyncGetBlob.HandlerInput,
      ComAtprotoSyncGetBlob.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.sync.getBlob' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getBlocks<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoSyncGetBlocks.QueryParams,
      ComAtprotoSyncGetBlocks.HandlerInput,
      ComAtprotoSyncGetBlocks.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.sync.getBlocks' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getCheckout<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoSyncGetCheckout.QueryParams,
      ComAtprotoSyncGetCheckout.HandlerInput,
      ComAtprotoSyncGetCheckout.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.sync.getCheckout' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getHead<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoSyncGetHead.QueryParams,
      ComAtprotoSyncGetHead.HandlerInput,
      ComAtprotoSyncGetHead.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.sync.getHead' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getHostStatus<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoSyncGetHostStatus.QueryParams,
      ComAtprotoSyncGetHostStatus.HandlerInput,
      ComAtprotoSyncGetHostStatus.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.sync.getHostStatus' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getLatestCommit<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoSyncGetLatestCommit.QueryParams,
      ComAtprotoSyncGetLatestCommit.HandlerInput,
      ComAtprotoSyncGetLatestCommit.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.sync.getLatestCommit' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getRecord<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoSyncGetRecord.QueryParams,
      ComAtprotoSyncGetRecord.HandlerInput,
      ComAtprotoSyncGetRecord.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.sync.getRecord' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getRepo<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoSyncGetRepo.QueryParams,
      ComAtprotoSyncGetRepo.HandlerInput,
      ComAtprotoSyncGetRepo.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.sync.getRepo' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getRepoStatus<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoSyncGetRepoStatus.QueryParams,
      ComAtprotoSyncGetRepoStatus.HandlerInput,
      ComAtprotoSyncGetRepoStatus.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.sync.getRepoStatus' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  listBlobs<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoSyncListBlobs.QueryParams,
      ComAtprotoSyncListBlobs.HandlerInput,
      ComAtprotoSyncListBlobs.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.sync.listBlobs' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  listHosts<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoSyncListHosts.QueryParams,
      ComAtprotoSyncListHosts.HandlerInput,
      ComAtprotoSyncListHosts.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.sync.listHosts' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  listRepos<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoSyncListRepos.QueryParams,
      ComAtprotoSyncListRepos.HandlerInput,
      ComAtprotoSyncListRepos.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.sync.listRepos' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  listReposByCollection<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoSyncListReposByCollection.QueryParams,
      ComAtprotoSyncListReposByCollection.HandlerInput,
      ComAtprotoSyncListReposByCollection.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.sync.listReposByCollection' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  notifyOfUpdate<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoSyncNotifyOfUpdate.QueryParams,
      ComAtprotoSyncNotifyOfUpdate.HandlerInput,
      ComAtprotoSyncNotifyOfUpdate.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.sync.notifyOfUpdate' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  requestCrawl<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoSyncRequestCrawl.QueryParams,
      ComAtprotoSyncRequestCrawl.HandlerInput,
      ComAtprotoSyncRequestCrawl.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.sync.requestCrawl' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  subscribeRepos<A extends Auth = void>(
    cfg: StreamConfigOrHandler<
      A,
      ComAtprotoSyncSubscribeRepos.QueryParams,
      ComAtprotoSyncSubscribeRepos.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.sync.subscribeRepos' // @ts-ignore
    return this._server.xrpc.streamMethod(nsid, cfg)
  }
}

export class ComAtprotoTempNS {
  _server: Server

  constructor(server: Server) {
    this._server = server
  }

  addReservedHandle<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoTempAddReservedHandle.QueryParams,
      ComAtprotoTempAddReservedHandle.HandlerInput,
      ComAtprotoTempAddReservedHandle.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.temp.addReservedHandle' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  checkSignupQueue<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoTempCheckSignupQueue.QueryParams,
      ComAtprotoTempCheckSignupQueue.HandlerInput,
      ComAtprotoTempCheckSignupQueue.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.temp.checkSignupQueue' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  fetchLabels<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoTempFetchLabels.QueryParams,
      ComAtprotoTempFetchLabels.HandlerInput,
      ComAtprotoTempFetchLabels.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.temp.fetchLabels' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  requestPhoneVerification<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ComAtprotoTempRequestPhoneVerification.QueryParams,
      ComAtprotoTempRequestPhoneVerification.HandlerInput,
      ComAtprotoTempRequestPhoneVerification.HandlerOutput
    >,
  ) {
    const nsid = 'com.atproto.temp.requestPhoneVerification' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }
}

export class AppNS {
  _server: Server
  gndr: AppGndrNS

  constructor(server: Server) {
    this._server = server
    this.gndr = new AppGndrNS(server)
  }
}

export class AppGndrNS {
  _server: Server
  actor: AppGndrActorNS
  embed: AppGndrEmbedNS
  feed: AppGndrFeedNS
  graph: AppGndrGraphNS
  labeler: AppGndrLabelerNS
  notification: AppGndrNotificationNS
  richtext: AppGndrRichtextNS
  unspecced: AppGndrUnspeccedNS
  video: AppGndrVideoNS

  constructor(server: Server) {
    this._server = server
    this.actor = new AppGndrActorNS(server)
    this.embed = new AppGndrEmbedNS(server)
    this.feed = new AppGndrFeedNS(server)
    this.graph = new AppGndrGraphNS(server)
    this.labeler = new AppGndrLabelerNS(server)
    this.notification = new AppGndrNotificationNS(server)
    this.richtext = new AppGndrRichtextNS(server)
    this.unspecced = new AppGndrUnspeccedNS(server)
    this.video = new AppGndrVideoNS(server)
  }
}

export class AppGndrActorNS {
  _server: Server

  constructor(server: Server) {
    this._server = server
  }

  getPreferences<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrActorGetPreferences.QueryParams,
      AppGndrActorGetPreferences.HandlerInput,
      AppGndrActorGetPreferences.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.actor.getPreferences' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getProfile<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrActorGetProfile.QueryParams,
      AppGndrActorGetProfile.HandlerInput,
      AppGndrActorGetProfile.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.actor.getProfile' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getProfiles<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrActorGetProfiles.QueryParams,
      AppGndrActorGetProfiles.HandlerInput,
      AppGndrActorGetProfiles.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.actor.getProfiles' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getSuggestions<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrActorGetSuggestions.QueryParams,
      AppGndrActorGetSuggestions.HandlerInput,
      AppGndrActorGetSuggestions.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.actor.getSuggestions' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  putPreferences<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrActorPutPreferences.QueryParams,
      AppGndrActorPutPreferences.HandlerInput,
      AppGndrActorPutPreferences.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.actor.putPreferences' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  searchActors<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrActorSearchActors.QueryParams,
      AppGndrActorSearchActors.HandlerInput,
      AppGndrActorSearchActors.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.actor.searchActors' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  searchActorsTypeahead<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrActorSearchActorsTypeahead.QueryParams,
      AppGndrActorSearchActorsTypeahead.HandlerInput,
      AppGndrActorSearchActorsTypeahead.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.actor.searchActorsTypeahead' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }
}

export class AppGndrEmbedNS {
  _server: Server

  constructor(server: Server) {
    this._server = server
  }
}

export class AppGndrFeedNS {
  _server: Server

  constructor(server: Server) {
    this._server = server
  }

  describeFeedGenerator<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrFeedDescribeFeedGenerator.QueryParams,
      AppGndrFeedDescribeFeedGenerator.HandlerInput,
      AppGndrFeedDescribeFeedGenerator.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.feed.describeFeedGenerator' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getActorFeeds<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrFeedGetActorFeeds.QueryParams,
      AppGndrFeedGetActorFeeds.HandlerInput,
      AppGndrFeedGetActorFeeds.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.feed.getActorFeeds' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getActorLikes<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrFeedGetActorLikes.QueryParams,
      AppGndrFeedGetActorLikes.HandlerInput,
      AppGndrFeedGetActorLikes.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.feed.getActorLikes' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getAuthorFeed<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrFeedGetAuthorFeed.QueryParams,
      AppGndrFeedGetAuthorFeed.HandlerInput,
      AppGndrFeedGetAuthorFeed.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.feed.getAuthorFeed' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getFeed<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrFeedGetFeed.QueryParams,
      AppGndrFeedGetFeed.HandlerInput,
      AppGndrFeedGetFeed.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.feed.getFeed' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getFeedGenerator<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrFeedGetFeedGenerator.QueryParams,
      AppGndrFeedGetFeedGenerator.HandlerInput,
      AppGndrFeedGetFeedGenerator.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.feed.getFeedGenerator' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getFeedGenerators<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrFeedGetFeedGenerators.QueryParams,
      AppGndrFeedGetFeedGenerators.HandlerInput,
      AppGndrFeedGetFeedGenerators.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.feed.getFeedGenerators' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getFeedSkeleton<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrFeedGetFeedSkeleton.QueryParams,
      AppGndrFeedGetFeedSkeleton.HandlerInput,
      AppGndrFeedGetFeedSkeleton.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.feed.getFeedSkeleton' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getLikes<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrFeedGetLikes.QueryParams,
      AppGndrFeedGetLikes.HandlerInput,
      AppGndrFeedGetLikes.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.feed.getLikes' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getListFeed<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrFeedGetListFeed.QueryParams,
      AppGndrFeedGetListFeed.HandlerInput,
      AppGndrFeedGetListFeed.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.feed.getListFeed' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getPosts<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrFeedGetPosts.QueryParams,
      AppGndrFeedGetPosts.HandlerInput,
      AppGndrFeedGetPosts.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.feed.getPosts' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getPostThread<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrFeedGetPostThread.QueryParams,
      AppGndrFeedGetPostThread.HandlerInput,
      AppGndrFeedGetPostThread.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.feed.getPostThread' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getQuotes<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrFeedGetQuotes.QueryParams,
      AppGndrFeedGetQuotes.HandlerInput,
      AppGndrFeedGetQuotes.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.feed.getQuotes' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getRepostedBy<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrFeedGetRepostedBy.QueryParams,
      AppGndrFeedGetRepostedBy.HandlerInput,
      AppGndrFeedGetRepostedBy.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.feed.getRepostedBy' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getSuggestedFeeds<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrFeedGetSuggestedFeeds.QueryParams,
      AppGndrFeedGetSuggestedFeeds.HandlerInput,
      AppGndrFeedGetSuggestedFeeds.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.feed.getSuggestedFeeds' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getTimeline<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrFeedGetTimeline.QueryParams,
      AppGndrFeedGetTimeline.HandlerInput,
      AppGndrFeedGetTimeline.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.feed.getTimeline' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  searchPosts<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrFeedSearchPosts.QueryParams,
      AppGndrFeedSearchPosts.HandlerInput,
      AppGndrFeedSearchPosts.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.feed.searchPosts' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  sendInteractions<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrFeedSendInteractions.QueryParams,
      AppGndrFeedSendInteractions.HandlerInput,
      AppGndrFeedSendInteractions.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.feed.sendInteractions' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }
}

export class AppGndrGraphNS {
  _server: Server

  constructor(server: Server) {
    this._server = server
  }

  getActorStarterPacks<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrGraphGetActorStarterPacks.QueryParams,
      AppGndrGraphGetActorStarterPacks.HandlerInput,
      AppGndrGraphGetActorStarterPacks.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.graph.getActorStarterPacks' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getBlocks<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrGraphGetBlocks.QueryParams,
      AppGndrGraphGetBlocks.HandlerInput,
      AppGndrGraphGetBlocks.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.graph.getBlocks' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getFollowers<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrGraphGetFollowers.QueryParams,
      AppGndrGraphGetFollowers.HandlerInput,
      AppGndrGraphGetFollowers.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.graph.getFollowers' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getFollows<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrGraphGetFollows.QueryParams,
      AppGndrGraphGetFollows.HandlerInput,
      AppGndrGraphGetFollows.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.graph.getFollows' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getKnownFollowers<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrGraphGetKnownFollowers.QueryParams,
      AppGndrGraphGetKnownFollowers.HandlerInput,
      AppGndrGraphGetKnownFollowers.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.graph.getKnownFollowers' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getList<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrGraphGetList.QueryParams,
      AppGndrGraphGetList.HandlerInput,
      AppGndrGraphGetList.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.graph.getList' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getListBlocks<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrGraphGetListBlocks.QueryParams,
      AppGndrGraphGetListBlocks.HandlerInput,
      AppGndrGraphGetListBlocks.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.graph.getListBlocks' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getListMutes<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrGraphGetListMutes.QueryParams,
      AppGndrGraphGetListMutes.HandlerInput,
      AppGndrGraphGetListMutes.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.graph.getListMutes' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getLists<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrGraphGetLists.QueryParams,
      AppGndrGraphGetLists.HandlerInput,
      AppGndrGraphGetLists.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.graph.getLists' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getMutes<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrGraphGetMutes.QueryParams,
      AppGndrGraphGetMutes.HandlerInput,
      AppGndrGraphGetMutes.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.graph.getMutes' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getRelationships<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrGraphGetRelationships.QueryParams,
      AppGndrGraphGetRelationships.HandlerInput,
      AppGndrGraphGetRelationships.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.graph.getRelationships' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getStarterPack<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrGraphGetStarterPack.QueryParams,
      AppGndrGraphGetStarterPack.HandlerInput,
      AppGndrGraphGetStarterPack.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.graph.getStarterPack' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getStarterPacks<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrGraphGetStarterPacks.QueryParams,
      AppGndrGraphGetStarterPacks.HandlerInput,
      AppGndrGraphGetStarterPacks.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.graph.getStarterPacks' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getSuggestedFollowsByActor<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrGraphGetSuggestedFollowsByActor.QueryParams,
      AppGndrGraphGetSuggestedFollowsByActor.HandlerInput,
      AppGndrGraphGetSuggestedFollowsByActor.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.graph.getSuggestedFollowsByActor' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  muteActor<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrGraphMuteActor.QueryParams,
      AppGndrGraphMuteActor.HandlerInput,
      AppGndrGraphMuteActor.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.graph.muteActor' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  muteActorList<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrGraphMuteActorList.QueryParams,
      AppGndrGraphMuteActorList.HandlerInput,
      AppGndrGraphMuteActorList.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.graph.muteActorList' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  muteThread<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrGraphMuteThread.QueryParams,
      AppGndrGraphMuteThread.HandlerInput,
      AppGndrGraphMuteThread.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.graph.muteThread' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  searchStarterPacks<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrGraphSearchStarterPacks.QueryParams,
      AppGndrGraphSearchStarterPacks.HandlerInput,
      AppGndrGraphSearchStarterPacks.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.graph.searchStarterPacks' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  unmuteActor<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrGraphUnmuteActor.QueryParams,
      AppGndrGraphUnmuteActor.HandlerInput,
      AppGndrGraphUnmuteActor.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.graph.unmuteActor' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  unmuteActorList<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrGraphUnmuteActorList.QueryParams,
      AppGndrGraphUnmuteActorList.HandlerInput,
      AppGndrGraphUnmuteActorList.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.graph.unmuteActorList' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  unmuteThread<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrGraphUnmuteThread.QueryParams,
      AppGndrGraphUnmuteThread.HandlerInput,
      AppGndrGraphUnmuteThread.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.graph.unmuteThread' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }
}

export class AppGndrLabelerNS {
  _server: Server

  constructor(server: Server) {
    this._server = server
  }

  getServices<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrLabelerGetServices.QueryParams,
      AppGndrLabelerGetServices.HandlerInput,
      AppGndrLabelerGetServices.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.labeler.getServices' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }
}

export class AppGndrNotificationNS {
  _server: Server

  constructor(server: Server) {
    this._server = server
  }

  getPreferences<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrNotificationGetPreferences.QueryParams,
      AppGndrNotificationGetPreferences.HandlerInput,
      AppGndrNotificationGetPreferences.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.notification.getPreferences' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getUnreadCount<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrNotificationGetUnreadCount.QueryParams,
      AppGndrNotificationGetUnreadCount.HandlerInput,
      AppGndrNotificationGetUnreadCount.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.notification.getUnreadCount' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  listActivitySubscriptions<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrNotificationListActivitySubscriptions.QueryParams,
      AppGndrNotificationListActivitySubscriptions.HandlerInput,
      AppGndrNotificationListActivitySubscriptions.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.notification.listActivitySubscriptions' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  listNotifications<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrNotificationListNotifications.QueryParams,
      AppGndrNotificationListNotifications.HandlerInput,
      AppGndrNotificationListNotifications.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.notification.listNotifications' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  putActivitySubscription<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrNotificationPutActivitySubscription.QueryParams,
      AppGndrNotificationPutActivitySubscription.HandlerInput,
      AppGndrNotificationPutActivitySubscription.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.notification.putActivitySubscription' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  putPreferences<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrNotificationPutPreferences.QueryParams,
      AppGndrNotificationPutPreferences.HandlerInput,
      AppGndrNotificationPutPreferences.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.notification.putPreferences' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  putPreferencesV2<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrNotificationPutPreferencesV2.QueryParams,
      AppGndrNotificationPutPreferencesV2.HandlerInput,
      AppGndrNotificationPutPreferencesV2.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.notification.putPreferencesV2' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  registerPush<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrNotificationRegisterPush.QueryParams,
      AppGndrNotificationRegisterPush.HandlerInput,
      AppGndrNotificationRegisterPush.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.notification.registerPush' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  updateSeen<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrNotificationUpdateSeen.QueryParams,
      AppGndrNotificationUpdateSeen.HandlerInput,
      AppGndrNotificationUpdateSeen.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.notification.updateSeen' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }
}

export class AppGndrRichtextNS {
  _server: Server

  constructor(server: Server) {
    this._server = server
  }
}

export class AppGndrUnspeccedNS {
  _server: Server

  constructor(server: Server) {
    this._server = server
  }

  getConfig<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrUnspeccedGetConfig.QueryParams,
      AppGndrUnspeccedGetConfig.HandlerInput,
      AppGndrUnspeccedGetConfig.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.unspecced.getConfig' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getPopularFeedGenerators<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrUnspeccedGetPopularFeedGenerators.QueryParams,
      AppGndrUnspeccedGetPopularFeedGenerators.HandlerInput,
      AppGndrUnspeccedGetPopularFeedGenerators.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.unspecced.getPopularFeedGenerators' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getPostThreadOtherV2<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrUnspeccedGetPostThreadOtherV2.QueryParams,
      AppGndrUnspeccedGetPostThreadOtherV2.HandlerInput,
      AppGndrUnspeccedGetPostThreadOtherV2.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.unspecced.getPostThreadOtherV2' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getPostThreadV2<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrUnspeccedGetPostThreadV2.QueryParams,
      AppGndrUnspeccedGetPostThreadV2.HandlerInput,
      AppGndrUnspeccedGetPostThreadV2.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.unspecced.getPostThreadV2' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getSuggestedFeeds<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrUnspeccedGetSuggestedFeeds.QueryParams,
      AppGndrUnspeccedGetSuggestedFeeds.HandlerInput,
      AppGndrUnspeccedGetSuggestedFeeds.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.unspecced.getSuggestedFeeds' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getSuggestedFeedsSkeleton<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrUnspeccedGetSuggestedFeedsSkeleton.QueryParams,
      AppGndrUnspeccedGetSuggestedFeedsSkeleton.HandlerInput,
      AppGndrUnspeccedGetSuggestedFeedsSkeleton.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.unspecced.getSuggestedFeedsSkeleton' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getSuggestedStarterPacks<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrUnspeccedGetSuggestedStarterPacks.QueryParams,
      AppGndrUnspeccedGetSuggestedStarterPacks.HandlerInput,
      AppGndrUnspeccedGetSuggestedStarterPacks.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.unspecced.getSuggestedStarterPacks' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getSuggestedStarterPacksSkeleton<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrUnspeccedGetSuggestedStarterPacksSkeleton.QueryParams,
      AppGndrUnspeccedGetSuggestedStarterPacksSkeleton.HandlerInput,
      AppGndrUnspeccedGetSuggestedStarterPacksSkeleton.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.unspecced.getSuggestedStarterPacksSkeleton' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getSuggestedUsers<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrUnspeccedGetSuggestedUsers.QueryParams,
      AppGndrUnspeccedGetSuggestedUsers.HandlerInput,
      AppGndrUnspeccedGetSuggestedUsers.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.unspecced.getSuggestedUsers' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getSuggestedUsersSkeleton<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrUnspeccedGetSuggestedUsersSkeleton.QueryParams,
      AppGndrUnspeccedGetSuggestedUsersSkeleton.HandlerInput,
      AppGndrUnspeccedGetSuggestedUsersSkeleton.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.unspecced.getSuggestedUsersSkeleton' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getSuggestionsSkeleton<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrUnspeccedGetSuggestionsSkeleton.QueryParams,
      AppGndrUnspeccedGetSuggestionsSkeleton.HandlerInput,
      AppGndrUnspeccedGetSuggestionsSkeleton.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.unspecced.getSuggestionsSkeleton' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getTaggedSuggestions<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrUnspeccedGetTaggedSuggestions.QueryParams,
      AppGndrUnspeccedGetTaggedSuggestions.HandlerInput,
      AppGndrUnspeccedGetTaggedSuggestions.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.unspecced.getTaggedSuggestions' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getTrendingTopics<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrUnspeccedGetTrendingTopics.QueryParams,
      AppGndrUnspeccedGetTrendingTopics.HandlerInput,
      AppGndrUnspeccedGetTrendingTopics.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.unspecced.getTrendingTopics' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getTrends<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrUnspeccedGetTrends.QueryParams,
      AppGndrUnspeccedGetTrends.HandlerInput,
      AppGndrUnspeccedGetTrends.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.unspecced.getTrends' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getTrendsSkeleton<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrUnspeccedGetTrendsSkeleton.QueryParams,
      AppGndrUnspeccedGetTrendsSkeleton.HandlerInput,
      AppGndrUnspeccedGetTrendsSkeleton.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.unspecced.getTrendsSkeleton' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  searchActorsSkeleton<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrUnspeccedSearchActorsSkeleton.QueryParams,
      AppGndrUnspeccedSearchActorsSkeleton.HandlerInput,
      AppGndrUnspeccedSearchActorsSkeleton.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.unspecced.searchActorsSkeleton' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  searchPostsSkeleton<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrUnspeccedSearchPostsSkeleton.QueryParams,
      AppGndrUnspeccedSearchPostsSkeleton.HandlerInput,
      AppGndrUnspeccedSearchPostsSkeleton.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.unspecced.searchPostsSkeleton' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  searchStarterPacksSkeleton<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrUnspeccedSearchStarterPacksSkeleton.QueryParams,
      AppGndrUnspeccedSearchStarterPacksSkeleton.HandlerInput,
      AppGndrUnspeccedSearchStarterPacksSkeleton.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.unspecced.searchStarterPacksSkeleton' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }
}

export class AppGndrVideoNS {
  _server: Server

  constructor(server: Server) {
    this._server = server
  }

  getJobStatus<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrVideoGetJobStatus.QueryParams,
      AppGndrVideoGetJobStatus.HandlerInput,
      AppGndrVideoGetJobStatus.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.video.getJobStatus' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getUploadLimits<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrVideoGetUploadLimits.QueryParams,
      AppGndrVideoGetUploadLimits.HandlerInput,
      AppGndrVideoGetUploadLimits.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.video.getUploadLimits' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  uploadVideo<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppGndrVideoUploadVideo.QueryParams,
      AppGndrVideoUploadVideo.HandlerInput,
      AppGndrVideoUploadVideo.HandlerOutput
    >,
  ) {
    const nsid = 'app.gndr.video.uploadVideo' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }
}

export class ChatNS {
  _server: Server
  gndr: ChatGndrNS

  constructor(server: Server) {
    this._server = server
    this.gndr = new ChatGndrNS(server)
  }
}

export class ChatGndrNS {
  _server: Server
  actor: ChatGndrActorNS
  convo: ChatGndrConvoNS
  moderation: ChatGndrModerationNS

  constructor(server: Server) {
    this._server = server
    this.actor = new ChatGndrActorNS(server)
    this.convo = new ChatGndrConvoNS(server)
    this.moderation = new ChatGndrModerationNS(server)
  }
}

export class ChatGndrActorNS {
  _server: Server

  constructor(server: Server) {
    this._server = server
  }

  deleteAccount<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ChatGndrActorDeleteAccount.QueryParams,
      ChatGndrActorDeleteAccount.HandlerInput,
      ChatGndrActorDeleteAccount.HandlerOutput
    >,
  ) {
    const nsid = 'chat.gndr.actor.deleteAccount' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  exportAccountData<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ChatGndrActorExportAccountData.QueryParams,
      ChatGndrActorExportAccountData.HandlerInput,
      ChatGndrActorExportAccountData.HandlerOutput
    >,
  ) {
    const nsid = 'chat.gndr.actor.exportAccountData' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }
}

export class ChatGndrConvoNS {
  _server: Server

  constructor(server: Server) {
    this._server = server
  }

  acceptConvo<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ChatGndrConvoAcceptConvo.QueryParams,
      ChatGndrConvoAcceptConvo.HandlerInput,
      ChatGndrConvoAcceptConvo.HandlerOutput
    >,
  ) {
    const nsid = 'chat.gndr.convo.acceptConvo' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  addReaction<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ChatGndrConvoAddReaction.QueryParams,
      ChatGndrConvoAddReaction.HandlerInput,
      ChatGndrConvoAddReaction.HandlerOutput
    >,
  ) {
    const nsid = 'chat.gndr.convo.addReaction' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  deleteMessageForSelf<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ChatGndrConvoDeleteMessageForSelf.QueryParams,
      ChatGndrConvoDeleteMessageForSelf.HandlerInput,
      ChatGndrConvoDeleteMessageForSelf.HandlerOutput
    >,
  ) {
    const nsid = 'chat.gndr.convo.deleteMessageForSelf' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getConvo<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ChatGndrConvoGetConvo.QueryParams,
      ChatGndrConvoGetConvo.HandlerInput,
      ChatGndrConvoGetConvo.HandlerOutput
    >,
  ) {
    const nsid = 'chat.gndr.convo.getConvo' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getConvoAvailability<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ChatGndrConvoGetConvoAvailability.QueryParams,
      ChatGndrConvoGetConvoAvailability.HandlerInput,
      ChatGndrConvoGetConvoAvailability.HandlerOutput
    >,
  ) {
    const nsid = 'chat.gndr.convo.getConvoAvailability' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getConvoForMembers<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ChatGndrConvoGetConvoForMembers.QueryParams,
      ChatGndrConvoGetConvoForMembers.HandlerInput,
      ChatGndrConvoGetConvoForMembers.HandlerOutput
    >,
  ) {
    const nsid = 'chat.gndr.convo.getConvoForMembers' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getLog<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ChatGndrConvoGetLog.QueryParams,
      ChatGndrConvoGetLog.HandlerInput,
      ChatGndrConvoGetLog.HandlerOutput
    >,
  ) {
    const nsid = 'chat.gndr.convo.getLog' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getMessages<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ChatGndrConvoGetMessages.QueryParams,
      ChatGndrConvoGetMessages.HandlerInput,
      ChatGndrConvoGetMessages.HandlerOutput
    >,
  ) {
    const nsid = 'chat.gndr.convo.getMessages' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  leaveConvo<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ChatGndrConvoLeaveConvo.QueryParams,
      ChatGndrConvoLeaveConvo.HandlerInput,
      ChatGndrConvoLeaveConvo.HandlerOutput
    >,
  ) {
    const nsid = 'chat.gndr.convo.leaveConvo' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  listConvos<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ChatGndrConvoListConvos.QueryParams,
      ChatGndrConvoListConvos.HandlerInput,
      ChatGndrConvoListConvos.HandlerOutput
    >,
  ) {
    const nsid = 'chat.gndr.convo.listConvos' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  muteConvo<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ChatGndrConvoMuteConvo.QueryParams,
      ChatGndrConvoMuteConvo.HandlerInput,
      ChatGndrConvoMuteConvo.HandlerOutput
    >,
  ) {
    const nsid = 'chat.gndr.convo.muteConvo' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  removeReaction<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ChatGndrConvoRemoveReaction.QueryParams,
      ChatGndrConvoRemoveReaction.HandlerInput,
      ChatGndrConvoRemoveReaction.HandlerOutput
    >,
  ) {
    const nsid = 'chat.gndr.convo.removeReaction' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  sendMessage<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ChatGndrConvoSendMessage.QueryParams,
      ChatGndrConvoSendMessage.HandlerInput,
      ChatGndrConvoSendMessage.HandlerOutput
    >,
  ) {
    const nsid = 'chat.gndr.convo.sendMessage' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  sendMessageBatch<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ChatGndrConvoSendMessageBatch.QueryParams,
      ChatGndrConvoSendMessageBatch.HandlerInput,
      ChatGndrConvoSendMessageBatch.HandlerOutput
    >,
  ) {
    const nsid = 'chat.gndr.convo.sendMessageBatch' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  unmuteConvo<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ChatGndrConvoUnmuteConvo.QueryParams,
      ChatGndrConvoUnmuteConvo.HandlerInput,
      ChatGndrConvoUnmuteConvo.HandlerOutput
    >,
  ) {
    const nsid = 'chat.gndr.convo.unmuteConvo' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  updateAllRead<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ChatGndrConvoUpdateAllRead.QueryParams,
      ChatGndrConvoUpdateAllRead.HandlerInput,
      ChatGndrConvoUpdateAllRead.HandlerOutput
    >,
  ) {
    const nsid = 'chat.gndr.convo.updateAllRead' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  updateRead<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ChatGndrConvoUpdateRead.QueryParams,
      ChatGndrConvoUpdateRead.HandlerInput,
      ChatGndrConvoUpdateRead.HandlerOutput
    >,
  ) {
    const nsid = 'chat.gndr.convo.updateRead' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }
}

export class ChatGndrModerationNS {
  _server: Server

  constructor(server: Server) {
    this._server = server
  }

  getActorMetadata<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ChatGndrModerationGetActorMetadata.QueryParams,
      ChatGndrModerationGetActorMetadata.HandlerInput,
      ChatGndrModerationGetActorMetadata.HandlerOutput
    >,
  ) {
    const nsid = 'chat.gndr.moderation.getActorMetadata' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getMessageContext<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ChatGndrModerationGetMessageContext.QueryParams,
      ChatGndrModerationGetMessageContext.HandlerInput,
      ChatGndrModerationGetMessageContext.HandlerOutput
    >,
  ) {
    const nsid = 'chat.gndr.moderation.getMessageContext' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  updateActorAccess<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      ChatGndrModerationUpdateActorAccess.QueryParams,
      ChatGndrModerationUpdateActorAccess.HandlerInput,
      ChatGndrModerationUpdateActorAccess.HandlerOutput
    >,
  ) {
    const nsid = 'chat.gndr.moderation.updateActorAccess' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }
}

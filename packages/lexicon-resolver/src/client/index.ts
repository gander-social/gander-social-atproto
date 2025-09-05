/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { type FetchHandler, type FetchHandlerOptions, XrpcClient, } from '@gander-social-atproto/xrpc'
import { schemas } from './lexicons.js'
import { type OmitKey, type Un$Typed } from './util.js'
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
import * as ComAtprotoIdentityGetRecommendedDidCredentials
  from './types/com/atproto/identity/getRecommendedDidCredentials.js'
import * as ComAtprotoIdentityRefreshIdentity from './types/com/atproto/identity/refreshIdentity.js'
import * as ComAtprotoIdentityRequestPlcOperationSignature
  from './types/com/atproto/identity/requestPlcOperationSignature.js'
import * as ComAtprotoIdentityResolveDid from './types/com/atproto/identity/resolveDid.js'
import * as ComAtprotoIdentityResolveHandle from './types/com/atproto/identity/resolveHandle.js'
import * as ComAtprotoIdentityResolveIdentity from './types/com/atproto/identity/resolveIdentity.js'
import * as ComAtprotoIdentitySignPlcOperation from './types/com/atproto/identity/signPlcOperation.js'
import * as ComAtprotoIdentitySubmitPlcOperation from './types/com/atproto/identity/submitPlcOperation.js'
import * as ComAtprotoIdentityUpdateHandle from './types/com/atproto/identity/updateHandle.js'
import * as ComAtprotoLabelQueryLabels from './types/com/atproto/label/queryLabels.js'
import * as ComAtprotoLexiconSchema from './types/com/atproto/lexicon/schema.js'
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
import * as ComAtprotoTempAddReservedHandle from './types/com/atproto/temp/addReservedHandle.js'
import * as ComAtprotoTempCheckHandleAvailability from './types/com/atproto/temp/checkHandleAvailability.js'
import * as ComAtprotoTempCheckSignupQueue from './types/com/atproto/temp/checkSignupQueue.js'
import * as ComAtprotoTempFetchLabels from './types/com/atproto/temp/fetchLabels.js'
import * as ComAtprotoTempRequestPhoneVerification from './types/com/atproto/temp/requestPhoneVerification.js'
import * as ComAtprotoTempRevokeAccountCredentials from './types/com/atproto/temp/revokeAccountCredentials.js'

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

export const COM_ATPROTO_MODERATION = {
  DefsReasonSpam: 'com.atproto.moderation.defs#reasonSpam',
  DefsReasonViolation: 'com.atproto.moderation.defs#reasonViolation',
  DefsReasonMisleading: 'com.atproto.moderation.defs#reasonMisleading',
  DefsReasonSexual: 'com.atproto.moderation.defs#reasonSexual',
  DefsReasonRude: 'com.atproto.moderation.defs#reasonRude',
  DefsReasonOther: 'com.atproto.moderation.defs#reasonOther',
  DefsReasonAppeal: 'com.atproto.moderation.defs#reasonAppeal',
}

export class AtpBaseClient extends XrpcClient {
  com: ComNS

  constructor(options: FetchHandler | FetchHandlerOptions) {
    super(options, schemas)
    this.com = new ComNS(this)
  }

  /** @deprecated use `this` instead */
  get xrpc(): XrpcClient {
    return this
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

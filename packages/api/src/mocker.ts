import {
  AppGndrActorDefs,
  AppGndrEmbedRecord,
  AppGndrFeedDefs,
  AppGndrFeedPost,
  AppGndrGraphDefs,
  AppGndrNotificationListNotifications,
  ComAtprotoLabelDefs,
} from './client'
import { $Typed, Un$Typed } from './client/util'

const FAKE_CID = 'bafyreiclp443lavogvhj3d2ob2cxbfuscni2k5jk7bebjzg7khl3esabwq'

export const mock = {
  post({
    text,
    facets,
    reply,
    embed,
  }: {
    text: string
    facets?: AppGndrFeedPost.Record['facets']
    reply?: AppGndrFeedPost.ReplyRef
    embed?: AppGndrFeedPost.Record['embed']
  }): $Typed<AppGndrFeedPost.Record> {
    return {
      $type: 'app.gndr.feed.post',
      text,
      facets,
      reply,
      embed,
      langs: ['en'],
      createdAt: new Date().toISOString(),
    }
  },

  postView({
    record,
    author,
    embed,
    replyCount,
    repostCount,
    likeCount,
    viewer,
    labels,
  }: {
    record: AppGndrFeedPost.Record
    author: AppGndrActorDefs.ProfileViewBasic
    embed?: AppGndrFeedDefs.PostView['embed']
    replyCount?: number
    repostCount?: number
    likeCount?: number
    viewer?: AppGndrFeedDefs.ViewerState
    labels?: ComAtprotoLabelDefs.Label[]
  }): $Typed<AppGndrFeedDefs.PostView> {
    return {
      $type: 'app.gndr.feed.defs#postView',
      uri: `at://${author.did}/app.gndr.feed.post/fake`,
      cid: FAKE_CID,
      author,
      record,
      embed,
      replyCount,
      repostCount,
      likeCount,
      indexedAt: new Date().toISOString(),
      viewer,
      labels,
    }
  },

  embedRecordView({
    record,
    author,
    labels,
  }: {
    record: AppGndrFeedPost.Record
    author: AppGndrActorDefs.ProfileViewBasic
    labels?: ComAtprotoLabelDefs.Label[]
  }): $Typed<AppGndrEmbedRecord.View> {
    return {
      $type: 'app.gndr.embed.record#view',
      record: {
        $type: 'app.gndr.embed.record#viewRecord',
        uri: `at://${author.did}/app.gndr.feed.post/fake`,
        cid: FAKE_CID,
        author,
        value: record,
        labels,
        indexedAt: new Date().toISOString(),
      },
    }
  },

  profileViewBasic({
    handle,
    displayName,
    description,
    viewer,
    labels,
  }: {
    handle: string
    displayName?: string
    description?: string
    viewer?: AppGndrActorDefs.ViewerState
    labels?: ComAtprotoLabelDefs.Label[]
  }): AppGndrActorDefs.ProfileViewBasic {
    return {
      did: `did:web:${handle}`,
      handle,
      displayName,
      // @ts-expect-error technically not in ProfileViewBasic but useful in some cases
      description,
      viewer,
      labels,
    }
  },

  actorViewerState({
    muted,
    mutedByList,
    blockedBy,
    blocking,
    blockingByList,
    following,
    followedBy,
  }: {
    muted?: boolean
    mutedByList?: AppGndrGraphDefs.ListViewBasic
    blockedBy?: boolean
    blocking?: string
    blockingByList?: AppGndrGraphDefs.ListViewBasic
    following?: string
    followedBy?: string
  }): AppGndrActorDefs.ViewerState {
    return {
      muted,
      mutedByList,
      blockedBy,
      blocking,
      blockingByList,
      following,
      followedBy,
    }
  },

  listViewBasic({ name }: { name: string }): AppGndrGraphDefs.ListViewBasic {
    return {
      uri: 'at://did:plc:fake/app.gndr.graph.list/fake',
      cid: FAKE_CID,
      name,
      purpose: 'app.gndr.graph.defs#modlist',
      indexedAt: new Date().toISOString(),
    }
  },

  replyNotification({
    author,
    record,
    labels,
  }: {
    record: AppGndrFeedPost.Record
    author: Un$Typed<AppGndrActorDefs.ProfileViewBasic>
    labels?: ComAtprotoLabelDefs.Label[]
  }): AppGndrNotificationListNotifications.Notification {
    return {
      uri: `at://${author.did}/app.gndr.feed.post/fake`,
      cid: FAKE_CID,
      author,
      reason: 'reply',
      reasonSubject: `at://${author.did}/app.gndr.feed.post/fake-parent`,
      record,
      isRead: false,
      indexedAt: new Date().toISOString(),
      labels,
    }
  },

  followNotification({
    author,
    subjectDid,
    labels,
  }: {
    author: Un$Typed<AppGndrActorDefs.ProfileViewBasic>
    subjectDid: string
    labels?: ComAtprotoLabelDefs.Label[]
  }): AppGndrNotificationListNotifications.Notification {
    return {
      uri: `at://${author.did}/app.gndr.graph.follow/fake`,
      cid: FAKE_CID,
      author,
      reason: 'follow',
      record: {
        $type: 'app.gndr.graph.follow',
        createdAt: new Date().toISOString(),
        subject: subjectDid,
      },
      isRead: false,
      indexedAt: new Date().toISOString(),
      labels,
    }
  },

  label({
    val,
    uri,
    src,
  }: {
    val: string
    uri: string
    src?: string
  }): ComAtprotoLabelDefs.Label {
    return {
      src: src || 'did:plc:fake-labeler',
      uri,
      val,
      cts: new Date().toISOString(),
    }
  },
}

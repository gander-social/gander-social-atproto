import { AppContext } from '../context'
import { Server } from '../lexicon'
import { ids } from '../lexicon/lexicons'

export default function (server: Server, ctx: AppContext) {
  server.app.gndr.actor.getProfile({
    auth: ctx.authVerifier.moderator,
    handler: async (request) => {
      const res = await ctx.appviewAgent.app.gndr.actor.getProfile(
        request.params,
        await ctx.appviewAuth(ids.AppGndrActorGetProfile),
      )
      return {
        encoding: 'application/json',
        body: res.data,
      }
    },
  })

  server.app.gndr.actor.getProfiles({
    auth: ctx.authVerifier.modOrAdminToken,
    handler: async (request) => {
      const res = await ctx.appviewAgent.app.gndr.actor.getProfiles(
        request.params,
        await ctx.appviewAuth(ids.AppGndrActorGetProfiles),
      )
      return {
        encoding: 'application/json',
        body: res.data,
      }
    },
  })

  server.app.gndr.feed.getAuthorFeed({
    auth: ctx.authVerifier.modOrAdminToken,
    handler: async (request) => {
      const res = await ctx.appviewAgent.app.gndr.feed.getAuthorFeed(
        request.params,
        await ctx.appviewAuth(ids.AppGndrFeedGetAuthorFeed),
      )
      return {
        encoding: 'application/json',
        body: res.data,
      }
    },
  })

  server.app.gndr.feed.searchPosts({
    auth: ctx.authVerifier.moderator,
    handler: async (request) => {
      const res = await ctx.appviewAgent.app.gndr.feed.searchPosts(
        request.params,
        await ctx.appviewAuth(ids.AppGndrFeedSearchPosts),
      )
      return {
        encoding: 'application/json',
        body: res.data,
      }
    },
  })

  server.app.gndr.feed.getPostThread({
    auth: ctx.authVerifier.modOrAdminToken,
    handler: async (request) => {
      const res = await ctx.appviewAgent.app.gndr.feed.getPostThread(
        request.params,
        await ctx.appviewAuth(ids.AppGndrFeedGetPostThread),
      )
      return {
        encoding: 'application/json',
        body: res.data,
      }
    },
  })

  server.app.gndr.feed.getFeedGenerator({
    auth: ctx.authVerifier.moderator,
    handler: async (request) => {
      const res = await ctx.appviewAgent.app.gndr.feed.getFeedGenerator(
        request.params,
        await ctx.appviewAuth(ids.AppGndrFeedGetFeedGenerator),
      )
      return {
        encoding: 'application/json',
        body: res.data,
      }
    },
  })

  server.app.gndr.graph.getFollows({
    auth: ctx.authVerifier.modOrAdminToken,
    handler: async (request) => {
      const res = await ctx.appviewAgent.app.gndr.graph.getFollows(
        request.params,
        await ctx.appviewAuth(ids.AppGndrGraphGetFollows),
      )
      return {
        encoding: 'application/json',
        body: res.data,
      }
    },
  })

  server.app.gndr.graph.getFollowers({
    auth: ctx.authVerifier.modOrAdminToken,
    handler: async (request) => {
      const res = await ctx.appviewAgent.app.gndr.graph.getFollowers(
        request.params,
        await ctx.appviewAuth(ids.AppGndrGraphGetFollowers),
      )
      return {
        encoding: 'application/json',
        body: res.data,
      }
    },
  })

  server.app.gndr.graph.getList({
    auth: ctx.authVerifier.modOrAdminToken,
    handler: async (request) => {
      const res = await ctx.appviewAgent.app.gndr.graph.getList(
        request.params,
        await ctx.appviewAuth(ids.AppGndrGraphGetList),
      )
      return {
        encoding: 'application/json',
        body: res.data,
      }
    },
  })

  server.app.gndr.graph.getLists({
    auth: ctx.authVerifier.modOrAdminToken,
    handler: async (request) => {
      const res = await ctx.appviewAgent.app.gndr.graph.getLists(
        request.params,
        await ctx.appviewAuth(ids.AppGndrGraphGetLists),
      )
      return {
        encoding: 'application/json',
        body: res.data,
      }
    },
  })

  server.com.atproto.admin.searchAccounts({
    auth: ctx.authVerifier.moderator,
    handler: async (request) => {
      if (!ctx.pdsAgent) {
        throw new Error('PDS not configured')
      }
      const res = await ctx.pdsAgent.com.atproto.admin.searchAccounts(
        request.params,
        await ctx.pdsAuth(ids.ComAtprotoAdminSearchAccounts),
      )
      return {
        encoding: 'application/json',
        body: res.data,
      }
    },
  })

  server.tools.ozone.hosting.getAccountHistory({
    auth: ctx.authVerifier.moderator,
    handler: async (request) => {
      if (!ctx.pdsAgent) {
        throw new Error('PDS not configured')
      }
      const res = await ctx.pdsAgent.tools.ozone.hosting.getAccountHistory(
        request.params,
        await ctx.pdsAuth(ids.ToolsOzoneHostingGetAccountHistory),
      )
      return {
        encoding: 'application/json',
        body: res.data,
      }
    },
  })

  server.tools.ozone.signature.findRelatedAccounts({
    auth: ctx.authVerifier.moderator,
    handler: async (request) => {
      if (!ctx.pdsAgent) {
        throw new Error('PDS not configured')
      }
      const res = await ctx.pdsAgent.tools.ozone.signature.findRelatedAccounts(
        request.params,
        await ctx.pdsAuth(ids.ToolsOzoneSignatureFindRelatedAccounts),
      )
      return {
        encoding: 'application/json',
        body: res.data,
      }
    },
  })

  server.tools.ozone.signature.searchAccounts({
    auth: ctx.authVerifier.moderator,
    handler: async (request) => {
      if (!ctx.pdsAgent) {
        throw new Error('PDS not configured')
      }
      const res = await ctx.pdsAgent.tools.ozone.signature.searchAccounts(
        request.params,
        await ctx.pdsAuth(ids.ToolsOzoneSignatureSearchAccounts),
      )
      return {
        encoding: 'application/json',
        body: res.data,
      }
    },
  })

  server.tools.ozone.signature.findCorrelation({
    auth: ctx.authVerifier.moderator,
    handler: async (request) => {
      if (!ctx.pdsAgent) {
        throw new Error('PDS not configured')
      }
      const res = await ctx.pdsAgent.tools.ozone.signature.findCorrelation(
        request.params,
        await ctx.pdsAuth(ids.ToolsOzoneSignatureFindCorrelation),
      )
      return {
        encoding: 'application/json',
        body: res.data,
      }
    },
  })

  server.app.gndr.graph.getStarterPack({
    auth: ctx.authVerifier.modOrAdminToken,
    handler: async (request) => {
      const res = await ctx.appviewAgent.api.app.gndr.graph.getStarterPack(
        request.params,
        await ctx.appviewAuth(ids.AppGndrGraphGetStarterPack),
      )
      return {
        encoding: 'application/json',
        body: res.data,
      }
    },
  })

  server.app.gndr.graph.getStarterPacks({
    auth: ctx.authVerifier.modOrAdminToken,
    handler: async (request) => {
      const res = await ctx.appviewAgent.app.gndr.graph.getStarterPacks(
        request.params,
        await ctx.appviewAuth(ids.AppGndrGraphGetStarterPacks),
      )
      return {
        encoding: 'application/json',
        body: res.data,
      }
    },
  })

  server.app.gndr.graph.getActorStarterPacks({
    auth: ctx.authVerifier.modOrAdminToken,
    handler: async (request) => {
      const res = await ctx.appviewAgent.app.gndr.graph.getActorStarterPacks(
        request.params,
        await ctx.appviewAuth(ids.AppGndrGraphGetActorStarterPacks),
      )
      return {
        encoding: 'application/json',
        body: res.data,
      }
    },
  })

  server.app.gndr.feed.getLikes({
    auth: ctx.authVerifier.modOrAdminToken,
    handler: async (request) => {
      const res = await ctx.appviewAgent.app.gndr.feed.getLikes(
        request.params,
        await ctx.appviewAuth(ids.AppGndrFeedGetLikes),
      )
      return {
        encoding: 'application/json',
        body: res.data,
      }
    },
  })

  server.app.gndr.feed.getRepostedBy({
    auth: ctx.authVerifier.moderator,
    handler: async (request) => {
      const res = await ctx.appviewAgent.app.gndr.feed.getRepostedBy(
        request.params,
        await ctx.appviewAuth(ids.AppGndrFeedGetRepostedBy),
      )
      return {
        encoding: 'application/json',
        body: res.data,
      }
    },
  })

  server.app.gndr.actor.searchActorsTypeahead({
    auth: ctx.authVerifier.moderator,
    handler: async (request) => {
      const res = await ctx.appviewAgent.app.gndr.actor.searchActorsTypeahead(
        request.params,
        await ctx.appviewAuth(ids.AppGndrActorSearchActorsTypeahead),
      )
      return {
        encoding: 'application/json',
        body: res.data,
      }
    },
  })
}

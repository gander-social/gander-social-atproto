import { InvalidRequestError } from '@gander-social-atproto/oauth-provider'
import { AtUri } from '@gander-social-atproto/syntax'
import { AppContext } from '../../../../context'
import { Server } from '../../../../lexicon'
import { ids } from '../../../../lexicon/lexicons'
import { computeProxyTo, pipethrough } from '../../../../pipethrough'

export default function (server: Server, ctx: AppContext) {
  const { gndrAppView } = ctx
  if (!gndrAppView) return

  server.app.gndr.feed.getFeed({
    auth: ctx.authVerifier.authorization({
      authorize: (permissions, { req }) => {
        const lxm = ids.AppGndrFeedGetFeed
        const aud = computeProxyTo(ctx, req, lxm)
        permissions.assertRpc({ aud, lxm })
        permissions.assertRpc({ aud, lxm: ids.AppGndrFeedGetFeedSkeleton })
      },
    }),
    handler: async ({ params, auth, req }) => {
      const requester = auth.credentials.did

      const feedUrl = new AtUri(params.feed)
      const { data } = await gndrAppView.agent.com.atproto.repo.getRecord({
        repo: feedUrl.hostname,
        collection: feedUrl.collection,
        rkey: feedUrl.rkey,
      })
      const feedDid = data.value['did']
      if (typeof feedDid !== 'string') {
        throw new InvalidRequestError(
          'could not resolve feed did',
          'UnknownFeed',
        )
      }

      return pipethrough(ctx, req, {
        iss: requester,
        aud: feedDid,
        lxm: ids.AppGndrFeedGetFeedSkeleton,
      })
    },
  })
}

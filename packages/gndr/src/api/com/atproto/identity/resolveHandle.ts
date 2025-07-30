import * as ident from '@gander-social-atproto/syntax'
import { InvalidRequestError } from '@gander-social-atproto/xrpc-server'
import { AppContext } from '../../../../context'
import { Server } from '../../../../lexicon'

export default function (server: Server, ctx: AppContext) {
  server.com.atproto.identity.resolveHandle(async ({ req, params }) => {
    const handle = ident.normalizeHandle(params.handle || req.hostname)

    const [did] = await ctx.hydrator.actor.getDids([handle], {
      lookupUnidirectional: true,
    })
    if (!did) {
      throw new InvalidRequestError('Unable to resolve handle')
    }

    return {
      encoding: 'application/json',
      body: { did },
    }
  })
}

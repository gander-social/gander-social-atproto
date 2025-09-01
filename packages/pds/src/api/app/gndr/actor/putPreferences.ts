import { InvalidRequestError } from '@gander-social-atproto/xrpc-server'
import { AccountPreference } from '../../../../actor-store/preference/reader'
import { isAccessFull } from '../../../../auth-scope'
import { AppContext } from '../../../../context'
import { Server } from '../../../../lexicon'
import { ids } from '../../../../lexicon/lexicons'
import { computeProxyTo, pipethrough } from '../../../../pipethrough'

export default function (server: Server, ctx: AppContext) {
  const { gndrAppView } = ctx
  if (!gndrAppView) return

  server.app.gndr.actor.putPreferences({
    auth: ctx.authVerifier.authorization({
      checkTakedown: true,
      authorize: (permissions, { req }) => {
        const lxm = ids.AppGndrActorPutPreferences
        const aud = computeProxyTo(ctx, req, lxm)
        permissions.assertRpc({ aud, lxm })
      },
    }),
    handler: async ({ req, auth, input }) => {
      const { did } = auth.credentials

      // If the request has a proxy header different from the gndr app view,
      // we need to proxy the request to the requested app view.
      // @TODO This behavior should not be implemented as part of the XRPC framework
      const lxm = ids.AppGndrActorPutPreferences
      const aud = computeProxyTo(ctx, req, lxm)
      if (aud !== `${gndrAppView.did}#gndr_appview`) {
        return pipethrough(ctx, req, { iss: did, aud, lxm })
      }

      const checkedPreferences: AccountPreference[] = []
      for (const pref of input.body.preferences) {
        if (typeof pref.$type === 'string') {
          checkedPreferences.push(pref as AccountPreference)
        } else {
          throw new InvalidRequestError('Preference is missing a $type')
        }
      }

      const hasAccessFull =
        auth.credentials.type === 'access' &&
        isAccessFull(auth.credentials.scope)

      await ctx.actorStore.transact(did, async (actorTxn) => {
        await actorTxn.pref.putPreferences(checkedPreferences, 'app.gndr', {
          hasAccessFull,
        })
      })
    },
  })
}
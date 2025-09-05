import { AtpAgent } from '@gander-social-atproto/api'
import { getNotif } from '@gander-social-atproto/identity'
import { InvalidRequestError } from '@gander-social-atproto/xrpc-server'
import { AuthScope } from '../../../../auth-scope'
import { AppContext } from '../../../../context'
import { Server } from '../../../../lexicon'
import { ids } from '../../../../lexicon/lexicons'
import { getDidDoc } from '../util/resolver'

export default function (server: Server, ctx: AppContext) {
  const { gndrAppView } = ctx
  if (!gndrAppView) return

  server.app.gndr.notification.registerPush({
    auth: ctx.authVerifier.authorization({
      additional: [AuthScope.SignupQueued],
      authorize: () => {
        // @NOTE this endpoint predates generic service proxying but we want to
        // map the permission to the "RPC" scope for consistency. However, since
        // the service info is only available in the request body, we can't
        // assert permissions here.
      },
    }),
    handler: async ({ auth, input }) => {
      const { serviceDid } = input.body
      const { did } = auth.credentials

      if (auth.credentials.type === 'oauth') {
        auth.credentials.permissions.assertRpc({
          aud: `${serviceDid}#gndr_notif`,
          lxm: ids.AppGndrNotificationRegisterPush,
        })
      }

      const authHeaders = await ctx.serviceAuthHeaders(
        did,
        serviceDid,
        ids.AppGndrNotificationRegisterPush,
      )

      if (gndrAppView.did === serviceDid) {
        await gndrAppView.agent.app.gndr.notification.registerPush(input.body, {
          ...authHeaders,
          encoding: 'application/json',
        })
        return
      }

      const notifEndpoint = await getEndpoint(ctx, serviceDid)
      const agent = new AtpAgent({ service: notifEndpoint })
      await agent.api.app.gndr.notification.registerPush(input.body, {
        ...authHeaders,
        encoding: 'application/json',
      })
    },
  })
}

const getEndpoint = async (ctx: AppContext, serviceDid: string) => {
  const doc = await getDidDoc(ctx, serviceDid)
  const notifEndpoint = getNotif(doc)
  if (!notifEndpoint) {
    throw new InvalidRequestError(
      `invalid notification service details in did document: ${serviceDid}`,
    )
  }
  return notifEndpoint
}

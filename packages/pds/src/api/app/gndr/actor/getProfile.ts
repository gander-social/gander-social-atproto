import { AppContext } from '../../../../context'
import { Server } from '../../../../lexicon'
import { ids } from '../../../../lexicon/lexicons'
import { OutputSchema } from '../../../../lexicon/types/app/gndr/actor/getProfile'
import { computeProxyTo } from '../../../../pipethrough'
import {
  LocalRecords,
  LocalViewer,
  pipethroughReadAfterWrite,
} from '../../../../read-after-write'

export default function (server: Server, ctx: AppContext) {
  if (!ctx.gndrAppView) return

  server.app.gndr.actor.getProfile({
    auth: ctx.authVerifier.authorization({
      authorize: (permissions, { req }) => {
        const lxm = ids.AppGndrActorGetProfile
        const aud = computeProxyTo(ctx, req, lxm)
        permissions.assertRpc({ aud, lxm })
      },
    }),
    handler: async (reqCtx) => {
      return pipethroughReadAfterWrite(ctx, reqCtx, getProfileMunge)
    },
  })
}

const getProfileMunge = async (
  localViewer: LocalViewer,
  original: OutputSchema,
  local: LocalRecords,
  requester: string,
): Promise<OutputSchema> => {
  if (!local.profile) return original
  if (original.did !== requester) return original
  return localViewer.updateProfileDetailed(original, local.profile.record)
}

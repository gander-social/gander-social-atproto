import { AppContext } from '../context'
import { Server } from '../lexicon'
import appGndr from './app/gndr'
import comAtproto from './com/atproto'

export default function (server: Server, ctx: AppContext) {
  comAtproto(server, ctx)
  appGndr(server, ctx)
  return server
}

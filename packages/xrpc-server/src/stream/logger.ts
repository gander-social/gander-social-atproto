import { subsystemLogger } from '@gander-social-atproto/common'

export const logger: ReturnType<typeof subsystemLogger> =
  subsystemLogger('xrpc-stream')

export default logger

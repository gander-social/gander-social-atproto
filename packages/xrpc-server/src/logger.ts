import { subsystemLogger } from '@gander-social-atproto/common'

export const LOGGER_NAME = 'xrpc-server'

export const logger: ReturnType<typeof subsystemLogger> =
  subsystemLogger(LOGGER_NAME)

export default logger

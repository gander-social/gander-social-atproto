import { subsystemLogger } from '@gander-social-atproto/common'

export const logger: ReturnType<typeof subsystemLogger> =
  subsystemLogger('repo')

export default logger

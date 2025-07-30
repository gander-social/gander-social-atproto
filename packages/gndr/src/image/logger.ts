import { subsystemLogger } from '@gander-social-atproto/common'

export const logger: ReturnType<typeof subsystemLogger> =
  subsystemLogger('gndr:image')

export default logger

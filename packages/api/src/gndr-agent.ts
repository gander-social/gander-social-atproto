import { AtpAgent } from './atp-agent'

/** @deprecated use {@link AtpAgent} instead */
export class GndrAgent extends AtpAgent {
  clone(): this {
    if (this.constructor === GndrAgent) {
      const agent = new GndrAgent(this.sessionManager)
      return this.copyInto(agent as this)
    }

    // sub-classes should override this method
    throw new TypeError('Cannot clone a subclass of GndrAgent')
  }
}

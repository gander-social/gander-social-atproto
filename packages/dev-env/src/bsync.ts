import getPort from 'get-port'
import * as bsync from '@gander-social-atproto/bsync'
import { BsyncConfig } from './types'

export class TestBsync {
  constructor(
    public url: string,
    public port: number,
    public service: bsync.BsyncService,
  ) {}

  get ctx(): bsync.AppContext {
    return this.service.ctx
  }

  static async create(cfg: BsyncConfig): Promise<TestBsync> {
    const port = cfg.port || (await getPort())
    const url = `http://localhost:${port}`

    const config = bsync.envToCfg({
      port,
      apiKeys: cfg.apiKeys ?? ['api-key'],
      ...cfg,
    })

    const service = await bsync.BsyncService.create(config)
    await service.ctx.db.migrateToLatestOrThrow()
    await service.start()

    return new TestBsync(url, port, service)
  }

  async close() {
    await this.service.destroy()
  }
}

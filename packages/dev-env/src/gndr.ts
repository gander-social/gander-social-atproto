import { Client as PlcClient } from '@did-plc/lib'
import { AtpAgent } from '@gander-social-atproto/api'
import { Secp256k1Keypair } from '@gander-social-atproto/crypto'
import * as gndr from '@gander-social-atproto/gndr'
import getPort from 'get-port'
import * as ui8 from 'uint8arrays'
import { ADMIN_PASSWORD, EXAMPLE_LABELER } from './const'
import { GndrConfig } from './types'

export * from '@gander-social-atproto/gndr'

export class TestGndr {
  constructor(
    public url: string,
    public port: number,
    public db: gndr.Database,
    public server: gndr.GndrAppView,
    public dataplane: gndr.DataPlaneServer,
    public bsync: gndr.MockBsync,
    public sub: gndr.RepoSubscription,
  ) {}

  static async create(cfg: GndrConfig): Promise<TestGndr> {
    const serviceKeypair = await Secp256k1Keypair.create()
    const plcClient = new PlcClient(cfg.plcUrl)

    const port = cfg.port || (await getPort())
    const url = `http://localhost:${port}`
    const serverDid = await plcClient.createDid({
      signingKey: serviceKeypair.did(),
      rotationKeys: [serviceKeypair.did()],
      handle: 'gndr.test',
      pds: `http://localhost:${port}`,
      signer: serviceKeypair,
    })

    const endpoint = `http://localhost:${port}`

    await plcClient.updateData(serverDid, serviceKeypair, (x) => {
      x.services['gndr_notif'] = {
        type: 'GndrNotificationService',
        endpoint,
      }
      x.services['gndr_appview'] = {
        type: 'GndrAppView',
        endpoint,
      }
      return x
    })

    // shared across server, ingester, and indexer in order to share pool, avoid too many pg connections.
    const db = new gndr.Database({
      url: cfg.dbPostgresUrl,
      schema: cfg.dbPostgresSchema,
      poolSize: 10,
    })

    const dataplanePort = await getPort()
    const dataplane = await gndr.DataPlaneServer.create(
      db,
      dataplanePort,
      cfg.plcUrl,
    )

    const bsyncPort = await getPort()
    const bsync = await gndr.MockBsync.create(db, bsyncPort)

    const config = new gndr.ServerConfig({
      version: 'unknown',
      port,
      didPlcUrl: cfg.plcUrl,
      publicUrl: 'https://gndr.public.url',
      serverDid,
      alternateAudienceDids: [],
      dataplaneUrls: [`http://localhost:${dataplanePort}`],
      dataplaneHttpVersion: '1.1',
      bsyncUrl: `http://localhost:${bsyncPort}`,
      bsyncHttpVersion: '1.1',
      modServiceDid: cfg.modServiceDid ?? 'did:example:invalidMod',
      labelsFromIssuerDids: [EXAMPLE_LABELER],
      bigThreadUris: new Set(),
      maxThreadParents: cfg.maxThreadParents ?? 50,
      disableSsrfProtection: true,
      threadTagsBumpDown: new Set(),
      threadTagsHide: new Set(),
      ...cfg,
      adminPasswords: [ADMIN_PASSWORD],
      etcdHosts: [],
    })

    // Separate migration db in case migration changes some connection state that we need in the tests, e.g. "alter database ... set ..."
    const migrationDb = new gndr.Database({
      url: cfg.dbPostgresUrl,
      schema: cfg.dbPostgresSchema,
    })
    if (cfg.migration) {
      await migrationDb.migrateToOrThrow(cfg.migration)
    } else {
      await migrationDb.migrateToLatestOrThrow()
    }
    await migrationDb.close()

    // api server
    const server = gndr.GndrAppView.create({
      config,
      signingKey: serviceKeypair,
    })

    const sub = new gndr.RepoSubscription({
      service: cfg.repoProvider,
      db,
      idResolver: dataplane.idResolver,
    })

    await server.start()

    sub.start()

    return new TestGndr(url, port, db, server, dataplane, bsync, sub)
  }

  get ctx(): gndr.AppContext {
    return this.server.ctx
  }

  getClient(): AtpAgent {
    const agent = new AtpAgent({ service: this.url })
    agent.configureLabelers([EXAMPLE_LABELER])
    return agent
  }

  adminAuth(): string {
    const [password] = this.ctx.cfg.adminPasswords
    return (
      'Basic ' +
      ui8.toString(ui8.fromString(`admin:${password}`, 'utf8'), 'base64pad')
    )
  }

  adminAuthHeaders() {
    return {
      authorization: this.adminAuth(),
    }
  }

  async close() {
    await this.server.destroy()
    await this.bsync.destroy()
    await this.dataplane.destroy()
    await this.sub.destroy()
    await this.db.close()
  }
}

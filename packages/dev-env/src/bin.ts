import './env'

import * as dotenv from 'dotenv'
import { generateMockSetup } from './mock'
import { TestNetwork } from './network'
import { mockMailer } from './util'

dotenv.config({ path: './config/env.dev' })

console.log('Loaded Environment Variables:', {
  DB_POSTGRES_URL: process.env.DB_POSTGRES_URL,
  REDIS_HOST: process.env.REDIS_HOST,
  DB_POSTGRES_SCHEMA: process.env.DB_POSTGRES_SCHEMA,
})

const run = async () => {
  console.log(`
██████╗
██╔═══██╗
██║██╗██║
██║██║██║
╚█║████╔╝
 ╚╝╚═══╝  protocol

[ created by Gander ]`)

  const network = await TestNetwork.create({
    pds: {
      port: 2583,
      hostname: 'localhost',
      enableDidDocWithSession: true,
    },
    gndr: {
      dbPostgresSchema: 'gndr',
      port: 2584,
      publicUrl: 'http://localhost:2584',
    },
    plc: { port: 2582 },
    ozone: {
      port: 2587,
      chatUrl: 'http://localhost:2590', // must run separate chat service
      chatDid: 'did:example:chat',
      dbMaterializedViewRefreshIntervalMs: 30_000,
    },
    introspect: { port: 2581 },
  })
  mockMailer(network.pds)
  await generateMockSetup(network)

  if (network.introspect) {
    console.log(
      `🔍 Dev-env introspection server started http://localhost:${network.introspect.port}`,
    )
  }
  console.log(
    `👤 DID Placeholder server started http://localhost:${network.plc.port}`,
  )
  console.log(
    `🌞 Personal Data server started http://localhost:${network.pds.port}`,
  )
  console.log(`🗼 Ozone server started http://localhost:${network.ozone.port}`)
  console.log(`🗼 Ozone service DID ${network.ozone.ctx.cfg.service.did}`)
  console.log(`🌅 Gndr Appview started http://localhost:${network.gndr.port}`)
  for (const fg of network.feedGens) {
    console.log(`🤖 Feed Generator started http://localhost:${fg.port}`)
  }
}

run()

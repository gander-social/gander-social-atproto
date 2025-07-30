import * as gndr from '@gander-social-atproto/gndr'
import * as bsync from '@gander-social-atproto/bsync'
import { ExportableKeypair, Keypair } from '@gander-social-atproto/crypto'
import * as ozone from '@gander-social-atproto/ozone'
import * as pds from '@gander-social-atproto/pds'

export type IntrospectConfig = {
  port?: number
}

export type PlcConfig = {
  port?: number
  version?: string
}

export type PdsConfig = Partial<pds.ServerEnvironment> & {
  didPlcUrl: string
  migration?: string
}

export type GndrConfig = Partial<gndr.ServerConfig> & {
  plcUrl: string
  repoProvider: string
  dbPostgresUrl: string
  dbPostgresSchema: string
  redisHost: string
  pdsPort: number
  migration?: string
}

export type BsyncConfig = Partial<bsync.ServerEnvironment> & {
  dbUrl: string
}

export type OzoneConfig = Partial<ozone.OzoneEnvironment> & {
  plcUrl: string
  appviewUrl: string
  appviewDid: string
  dbPostgresUrl: string
  migration?: string
  signingKey?: ExportableKeypair
  imgInvalidator?: ozone.ImageInvalidator
}

export type TestServerParams = {
  dbPostgresUrl: string
  dbPostgresSchema: string
  pds: Partial<PdsConfig>
  plc: Partial<PlcConfig>
  gndr: Partial<GndrConfig>
  ozone: Partial<OzoneConfig>
  introspect: Partial<IntrospectConfig>
}

export type DidAndKey = {
  did: string
  key: Keypair
}

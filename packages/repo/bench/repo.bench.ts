import { TID } from '@gander-social-atproto/common'
import * as crypto from '@gander-social-atproto/crypto'
import { Secp256k1Keypair } from '@gander-social-atproto/crypto'
import { MemoryBlockstore, Repo, WriteOpAction } from '../src'
import * as util from '../tests/_util'

describe('Repo Benchmarks', () => {
  const size = 10000

  let blockstore: MemoryBlockstore
  let keypair: crypto.Keypair
  let repo: Repo

  beforeAll(async () => {
    blockstore = new MemoryBlockstore()
    keypair = await Secp256k1Keypair.create()
    repo = await Repo.create(blockstore, await keypair.did(), keypair)
  })

  it('calculates size', async () => {
    for (let i = 0; i < size; i++) {
      if (i % 500 === 0) {
        console.log(i)
      }

      await repo.applyCommit(
        {
          action: WriteOpAction.Create,
          collection: 'app.gndr.post',
          rkey: TID.nextStr(),
          value: {
            $type: 'app.gndr.post',
            text: util.randomStr(150),
            reply: {
              root: 'at://did:plc:1234abdefeoi23/app.gndr.post/12345678912345',
              parent:
                'at://did:plc:1234abdefeoi23/app.gndr.post/12345678912345',
            },
            createdAt: new Date().toISOString(),
          },
        },
        keypair,
      )
    }

    console.log('SIZE: ', await blockstore.sizeInBytes())
  })
})

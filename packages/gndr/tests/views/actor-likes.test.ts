import { AtUri, AtpAgent } from '@gander-social-atproto/api'
import {
  SeedClient,
  TestNetwork,
  basicSeed,
} from '@gander-social-atproto/dev-env'
import { ids } from '../../src/lexicon/lexicons'

describe('gndr actor likes feed views', () => {
  let network: TestNetwork
  let agent: AtpAgent
  let pdsAgent: AtpAgent
  let sc: SeedClient

  // account dids, for convenience
  let alice: string
  let bob: string
  let carol: string

  beforeAll(async () => {
    network = await TestNetwork.create({
      dbPostgresSchema: 'gndr_views_actor_likes',
    })
    agent = network.gndr.getClient()
    pdsAgent = network.pds.getClient()
    sc = network.getSeedClient()
    await basicSeed(sc)
    await network.processAll()
    alice = sc.dids.alice
    bob = sc.dids.bob
    carol = sc.dids.carol
  })

  afterAll(async () => {
    await network.close()
  })

  it('returns posts liked by actor', async () => {
    const {
      data: { feed: bobLikes },
    } = await agent.api.app.gndr.feed.getActorLikes(
      { actor: sc.accounts[bob].handle },
      {
        headers: await network.serviceHeaders(
          bob,
          ids.AppGndrFeedGetActorLikes,
        ),
      },
    )

    expect(bobLikes).toHaveLength(3)

    await expect(
      agent.api.app.gndr.feed.getActorLikes(
        { actor: sc.accounts[bob].handle },
        {
          headers: await network.serviceHeaders(
            carol,
            ids.AppGndrFeedGetActorLikes,
          ),
        },
      ),
    ).rejects.toThrow('Profile not found')
  })

  it('viewer has blocked author of liked post(s)', async () => {
    const bobBlocksAlice = await pdsAgent.api.app.gndr.graph.block.create(
      {
        repo: bob, // bob blocks alice
      },
      {
        subject: alice,
        createdAt: new Date().toISOString(),
      },
      sc.getHeaders(bob),
    )

    await network.processAll()

    const {
      data: { feed },
    } = await agent.api.app.gndr.feed.getActorLikes(
      { actor: sc.accounts[bob].handle },
      {
        headers: await network.serviceHeaders(
          bob,
          ids.AppGndrFeedGetActorLikes,
        ),
      },
    )

    expect(
      feed.every((item) => {
        return item.post.author.did !== alice
      }),
    ).toBe(true)

    // unblock
    await pdsAgent.api.app.gndr.graph.block.delete(
      { repo: bob, rkey: new AtUri(bobBlocksAlice.uri).rkey },
      sc.getHeaders(bob),
    )
  })

  it('liked post author has blocked viewer', async () => {
    const aliceBlockBob = await pdsAgent.api.app.gndr.graph.block.create(
      {
        repo: alice, // alice blocks bob
      },
      {
        subject: bob,
        createdAt: new Date().toISOString(),
      },
      sc.getHeaders(alice),
    )

    await network.processAll()

    const {
      data: { feed },
    } = await agent.api.app.gndr.feed.getActorLikes(
      { actor: sc.accounts[bob].handle },
      {
        headers: await network.serviceHeaders(
          bob,
          ids.AppGndrFeedGetActorLikes,
        ),
      },
    )

    expect(
      feed.every((item) => {
        return item.post.author.did !== alice
      }),
    ).toBe(true)

    // unblock
    await pdsAgent.api.app.gndr.graph.block.delete(
      { repo: alice, rkey: new AtUri(aliceBlockBob.uri).rkey },
      sc.getHeaders(alice),
    )
  })
})

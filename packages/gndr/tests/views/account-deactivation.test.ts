import { AtpAgent } from '@gander-social-atproto/api'
import {
  SeedClient,
  TestNetwork,
  basicSeed,
} from '@gander-social-atproto/dev-env'
import { ids } from '../../src/lexicon/lexicons'

describe('gndr account deactivation', () => {
  let network: TestNetwork
  let agent: AtpAgent
  let sc: SeedClient

  let alice: string

  beforeAll(async () => {
    network = await TestNetwork.create({
      dbPostgresSchema: 'gndr_views_account_deactivation',
    })
    agent = network.gndr.getClient()
    sc = network.getSeedClient()
    await basicSeed(sc)
    alice = sc.dids.alice
    const pdsAgent = network.pds.getClient()
    await pdsAgent.com.atproto.server.deactivateAccount(
      {},
      { encoding: 'application/json', headers: sc.getHeaders(alice) },
    )
    await network.processAll()
  })

  afterAll(async () => {
    await network.close()
  })

  it('does not return deactivated profiles', async () => {
    const attempt = agent.api.app.gndr.actor.getProfile({
      actor: alice,
    })
    await expect(attempt).rejects.toThrow('Account is deactivated')
    const res = await agent.api.app.gndr.actor.getProfiles({
      actors: [sc.dids.alice, sc.dids.bob, sc.dids.carol],
    })
    expect(res.data.profiles.length).toBe(2)
    expect(res.data.profiles.some((p) => p.did === alice)).toBe(false)
  })

  it('does not return deactivated accounts in follows', async () => {
    const follows = await agent.api.app.gndr.graph.getFollows({
      actor: sc.dids.bob,
    })
    expect(follows.data.follows.some((f) => f.did === alice)).toBe(false)
    const followers = await agent.api.app.gndr.graph.getFollowers({
      actor: sc.dids.bob,
    })
    expect(followers.data.followers.some((f) => f.did === alice)).toBe(false)
  })

  it('does not return posts from deactivated accounts', async () => {
    const uris = [
      sc.posts[sc.dids.alice][0].ref.uriStr,
      sc.posts[sc.dids.alice][1].ref.uriStr,
      sc.posts[sc.dids.bob][0].ref.uriStr,
      sc.posts[sc.dids.carol][0].ref.uriStr,
      sc.posts[sc.dids.dan][1].ref.uriStr,
      sc.replies[sc.dids.alice][0].ref.uriStr,
    ]
    const res = await agent.api.app.gndr.feed.getPosts({ uris })

    expect(res.data.posts.length).toBe(3)
    expect(res.data.posts.some((p) => p.author.did === alice)).toBe(false)
  })

  it('does not return posts from deactivated in timelines', async () => {
    const res = await agent.api.app.gndr.feed.getTimeline(
      {},
      {
        headers: await network.serviceHeaders(
          sc.dids.bob,
          ids.AppGndrFeedGetTimeline,
        ),
      },
    )
    expect(res.data.feed.some((p) => p.post.author.did === alice)).toBe(false)
  })
})

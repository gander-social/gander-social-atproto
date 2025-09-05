import { AtpAgent } from '@gander-social-atproto/api'
import {
  SeedClient,
  TestNetwork,
  followsSeed,
} from '@gander-social-atproto/dev-env'
import { ids } from '../../src/lexicon/lexicons'
import { OutputSchema as GetFollowersOutputSchema } from '../../src/lexicon/types/app/gndr/graph/getFollowers'
import { OutputSchema as GetFollowsOutputSchema } from '../../src/lexicon/types/app/gndr/graph/getFollows'
import { forSnapshot, paginateAll, stripViewer } from '../_util'

describe('pds follow views', () => {
  let agent: AtpAgent
  let network: TestNetwork
  let sc: SeedClient

  // account dids, for convenience
  let alice: string

  beforeAll(async () => {
    network = await TestNetwork.create({
      dbPostgresSchema: 'gndr_views_follows',
    })
    agent = network.gndr.getClient()
    sc = network.getSeedClient()
    await followsSeed(sc)
    await network.processAll()
    alice = sc.dids.alice
  })

  afterAll(async () => {
    await network.close()
  })

  // TODO(gndr) blocks followers by actor takedown via labels
  // TODO(gndr) blocks follows by actor takedown via labels

  it('fetches followers', async () => {
    const aliceFollowers = await agent.api.app.gndr.graph.getFollowers(
      { actor: sc.dids.alice },
      {
        headers: await network.serviceHeaders(
          alice,
          ids.AppGndrGraphGetFollowers,
        ),
      },
    )

    expect(forSnapshot(aliceFollowers.data)).toMatchSnapshot()

    const bobFollowers = await agent.api.app.gndr.graph.getFollowers(
      { actor: sc.dids.bob },
      {
        headers: await network.serviceHeaders(
          alice,
          ids.AppGndrGraphGetFollowers,
        ),
      },
    )

    expect(forSnapshot(bobFollowers.data)).toMatchSnapshot()

    const carolFollowers = await agent.api.app.gndr.graph.getFollowers(
      { actor: sc.dids.carol },
      {
        headers: await network.serviceHeaders(
          alice,
          ids.AppGndrGraphGetFollowers,
        ),
      },
    )

    expect(forSnapshot(carolFollowers.data)).toMatchSnapshot()

    const danFollowers = await agent.api.app.gndr.graph.getFollowers(
      { actor: sc.dids.dan },
      {
        headers: await network.serviceHeaders(
          alice,
          ids.AppGndrGraphGetFollowers,
        ),
      },
    )

    expect(forSnapshot(danFollowers.data)).toMatchSnapshot()

    const eveFollowers = await agent.api.app.gndr.graph.getFollowers(
      { actor: sc.dids.eve },
      {
        headers: await network.serviceHeaders(
          alice,
          ids.AppGndrGraphGetFollowers,
        ),
      },
    )

    expect(forSnapshot(eveFollowers.data)).toMatchSnapshot()
  })

  it('fetches followers by handle', async () => {
    const byDid = await agent.api.app.gndr.graph.getFollowers(
      { actor: sc.dids.alice },
      {
        headers: await network.serviceHeaders(
          alice,
          ids.AppGndrGraphGetFollowers,
        ),
      },
    )
    const byHandle = await agent.api.app.gndr.graph.getFollowers(
      { actor: sc.accounts[alice].handle },
      {
        headers: await network.serviceHeaders(
          alice,
          ids.AppGndrGraphGetFollowers,
        ),
      },
    )
    expect(byHandle.data).toEqual(byDid.data)
  })

  it('paginates followers', async () => {
    const results = (results: GetFollowersOutputSchema[]) =>
      results.flatMap((res) => res.followers)
    const paginator = async (cursor?: string) => {
      const res = await agent.api.app.gndr.graph.getFollowers(
        {
          actor: sc.dids.alice,
          cursor,
          limit: 2,
        },
        {
          headers: await network.serviceHeaders(
            alice,
            ids.AppGndrGraphGetFollowers,
          ),
        },
      )
      return res.data
    }

    const paginatedAll = await paginateAll(paginator)
    paginatedAll.forEach((res) =>
      expect(res.followers.length).toBeLessThanOrEqual(2),
    )

    const full = await agent.api.app.gndr.graph.getFollowers(
      { actor: sc.dids.alice },
      {
        headers: await network.serviceHeaders(
          alice,
          ids.AppGndrGraphGetFollowers,
        ),
      },
    )

    expect(full.data.followers.length).toEqual(4)
    expect(results(paginatedAll)).toEqual(results([full.data]))
  })

  it('fetches followers unauthed', async () => {
    const { data: authed } = await agent.api.app.gndr.graph.getFollowers(
      { actor: sc.dids.alice },
      {
        headers: await network.serviceHeaders(
          alice,
          ids.AppGndrGraphGetFollowers,
        ),
      },
    )
    const { data: unauthed } = await agent.api.app.gndr.graph.getFollowers({
      actor: sc.dids.alice,
    })
    expect(unauthed.followers.length).toBeGreaterThan(0)
    expect(unauthed.followers).toEqual(authed.followers.map(stripViewer))
  })

  it('blocks followers by actor takedown', async () => {
    await network.gndr.ctx.dataplane.takedownActor({
      did: sc.dids.dan,
    })

    const aliceFollowers = await agent.api.app.gndr.graph.getFollowers(
      { actor: sc.dids.alice },
      {
        headers: await network.serviceHeaders(
          alice,
          ids.AppGndrGraphGetFollowers,
        ),
      },
    )

    expect(aliceFollowers.data.followers.map((f) => f.did)).not.toContain(
      sc.dids.dan,
    )

    await network.gndr.ctx.dataplane.untakedownActor({
      did: sc.dids.dan,
    })
  })

  it('fetches follows', async () => {
    const aliceFollowers = await agent.api.app.gndr.graph.getFollows(
      { actor: sc.dids.alice },
      {
        headers: await network.serviceHeaders(
          alice,
          ids.AppGndrGraphGetFollows,
        ),
      },
    )

    expect(forSnapshot(aliceFollowers.data)).toMatchSnapshot()

    const bobFollowers = await agent.api.app.gndr.graph.getFollows(
      { actor: sc.dids.bob },
      {
        headers: await network.serviceHeaders(
          alice,
          ids.AppGndrGraphGetFollows,
        ),
      },
    )

    expect(forSnapshot(bobFollowers.data)).toMatchSnapshot()

    const carolFollowers = await agent.api.app.gndr.graph.getFollows(
      { actor: sc.dids.carol },
      {
        headers: await network.serviceHeaders(
          alice,
          ids.AppGndrGraphGetFollows,
        ),
      },
    )

    expect(forSnapshot(carolFollowers.data)).toMatchSnapshot()

    const danFollowers = await agent.api.app.gndr.graph.getFollows(
      { actor: sc.dids.dan },
      {
        headers: await network.serviceHeaders(
          alice,
          ids.AppGndrGraphGetFollows,
        ),
      },
    )

    expect(forSnapshot(danFollowers.data)).toMatchSnapshot()

    const eveFollowers = await agent.api.app.gndr.graph.getFollows(
      { actor: sc.dids.eve },
      {
        headers: await network.serviceHeaders(
          alice,
          ids.AppGndrGraphGetFollows,
        ),
      },
    )

    expect(forSnapshot(eveFollowers.data)).toMatchSnapshot()
  })

  it('fetches follows by handle', async () => {
    const byDid = await agent.api.app.gndr.graph.getFollows(
      { actor: sc.dids.alice },
      {
        headers: await network.serviceHeaders(
          alice,
          ids.AppGndrGraphGetFollows,
        ),
      },
    )
    const byHandle = await agent.api.app.gndr.graph.getFollows(
      { actor: sc.accounts[alice].handle },
      {
        headers: await network.serviceHeaders(
          alice,
          ids.AppGndrGraphGetFollows,
        ),
      },
    )
    expect(byHandle.data).toEqual(byDid.data)
  })

  it('paginates follows', async () => {
    const results = (results: GetFollowsOutputSchema[]) =>
      results.flatMap((res) => res.follows)
    const paginator = async (cursor?: string) => {
      const res = await agent.api.app.gndr.graph.getFollows(
        {
          actor: sc.dids.alice,
          cursor,
          limit: 2,
        },
        {
          headers: await network.serviceHeaders(
            alice,
            ids.AppGndrGraphGetFollows,
          ),
        },
      )
      return res.data
    }

    const paginatedAll = await paginateAll(paginator)
    paginatedAll.forEach((res) =>
      expect(res.follows.length).toBeLessThanOrEqual(2),
    )

    const full = await agent.api.app.gndr.graph.getFollows(
      { actor: sc.dids.alice },
      {
        headers: await network.serviceHeaders(
          alice,
          ids.AppGndrGraphGetFollows,
        ),
      },
    )

    expect(full.data.follows.length).toEqual(4)
    expect(results(paginatedAll)).toEqual(results([full.data]))
  })

  it('fetches follows unauthed', async () => {
    const { data: authed } = await agent.api.app.gndr.graph.getFollows(
      { actor: sc.dids.alice },
      {
        headers: await network.serviceHeaders(
          alice,
          ids.AppGndrGraphGetFollows,
        ),
      },
    )
    const { data: unauthed } = await agent.api.app.gndr.graph.getFollows({
      actor: sc.dids.alice,
    })
    expect(unauthed.follows.length).toBeGreaterThan(0)
    expect(unauthed.follows).toEqual(authed.follows.map(stripViewer))
  })

  it('blocks follows by actor takedown', async () => {
    await network.gndr.ctx.dataplane.takedownActor({
      did: sc.dids.dan,
    })

    const aliceFollows = await agent.api.app.gndr.graph.getFollows(
      { actor: sc.dids.alice },
      {
        headers: await network.serviceHeaders(
          alice,
          ids.AppGndrGraphGetFollows,
        ),
      },
    )

    expect(aliceFollows.data.follows.map((f) => f.did)).not.toContain(
      sc.dids.dan,
    )

    await network.gndr.ctx.dataplane.untakedownActor({
      did: sc.dids.dan,
    })
  })

  it('fetches relationships between users', async () => {
    const res = await agent.api.app.gndr.graph.getRelationships({
      actor: sc.dids.bob,
      others: [sc.dids.alice, sc.dids.bob, sc.dids.carol],
    })
    expect(res.data.actor).toEqual(sc.dids.bob)
    expect(res.data.relationships.length).toBe(3)
    expect(forSnapshot(res.data)).toMatchSnapshot()
  })
})

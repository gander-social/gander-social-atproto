import { AtpAgent } from '@gander-social-atproto/api'
import {
  SeedClient,
  TestNetwork,
  basicSeed,
} from '@gander-social-atproto/dev-env'
import { ids } from '../../src/lexicon/lexicons'
import { stripViewer } from '../_util'

describe('pds user search views', () => {
  let network: TestNetwork
  let agent: AtpAgent
  let sc: SeedClient

  beforeAll(async () => {
    network = await TestNetwork.create({
      dbPostgresSchema: 'gndr_views_suggestions',
    })
    agent = network.gndr.getClient()
    sc = network.getSeedClient()
    await basicSeed(sc)
    await network.processAll()

    const suggestions = [
      { did: sc.dids.alice, order: 1 },
      { did: sc.dids.bob, order: 2 },
      { did: sc.dids.carol, order: 3 },
      { did: sc.dids.dan, order: 4 },
    ]

    await network.gndr.db.db
      .insertInto('suggested_follow')
      .values(suggestions)
      .execute()
  })

  afterAll(async () => {
    await network.close()
  })

  it('actor suggestion gives users', async () => {
    const result = await agent.api.app.gndr.actor.getSuggestions(
      {},
      {
        headers: await network.serviceHeaders(
          sc.dids.carol,
          ids.AppGndrActorGetSuggestions,
        ),
      },
    )

    // does not include carol, because she is requesting
    expect(result.data.actors.length).toBe(2)
    expect(result.data.actors[0].handle).toEqual('bob.test')
    expect(result.data.actors[0].displayName).toEqual('bobby')
    expect(result.data.actors[1].handle).toEqual('dan.test')
    expect(result.data.actors[1].displayName).toBeUndefined()
  })

  it('does not suggest followed users', async () => {
    const result = await agent.api.app.gndr.actor.getSuggestions(
      {},
      {
        headers: await network.serviceHeaders(
          sc.dids.alice,
          ids.AppGndrActorGetSuggestions,
        ),
      },
    )

    // alice follows everyone
    expect(result.data.actors.length).toBe(0)
  })

  it('paginates', async () => {
    const result1 = await agent.api.app.gndr.actor.getSuggestions(
      { limit: 2 },
      {
        headers: await network.serviceHeaders(
          sc.dids.carol,
          ids.AppGndrActorGetSuggestions,
        ),
      },
    )
    expect(result1.data.actors.length).toBe(1)
    expect(result1.data.actors[0].handle).toEqual('bob.test')

    const result2 = await agent.api.app.gndr.actor.getSuggestions(
      { limit: 2, cursor: result1.data.cursor },
      {
        headers: await network.serviceHeaders(
          sc.dids.carol,
          ids.AppGndrActorGetSuggestions,
        ),
      },
    )
    expect(result2.data.actors.length).toBe(1)
    expect(result2.data.actors[0].handle).toEqual('dan.test')

    const result3 = await agent.api.app.gndr.actor.getSuggestions(
      { limit: 2, cursor: result2.data.cursor },
      {
        headers: await network.serviceHeaders(
          sc.dids.carol,
          ids.AppGndrActorGetSuggestions,
        ),
      },
    )
    expect(result3.data.actors.length).toBe(0)
    expect(result3.data.cursor).toBeUndefined()
  })

  it('fetches suggestions unauthed', async () => {
    const { data: authed } = await agent.api.app.gndr.actor.getSuggestions(
      {},
      {
        headers: await network.serviceHeaders(
          sc.dids.carol,
          ids.AppGndrActorGetSuggestions,
        ),
      },
    )
    const { data: unauthed } = await agent.api.app.gndr.actor.getSuggestions({})
    const omitViewerFollows = ({ did }) => {
      return did !== sc.dids.carol && !sc.follows[sc.dids.carol][did]
    }
    expect(unauthed.actors.length).toBeGreaterThan(0)
    expect(unauthed.actors.filter(omitViewerFollows)).toEqual(
      authed.actors.map(stripViewer),
    )
  })

  it('returns tagged suggestions', async () => {
    const suggestions = [
      {
        tag: 'test',
        subject: 'did:example:test',
        subjectType: 'actor',
      },
      {
        tag: 'another',
        subject: 'at://did:example:another/app.gndr.feed.generator/my-feed',
        subjectType: 'feed',
      },
    ]
    await network.gndr.db.db
      .insertInto('tagged_suggestion')
      .values(suggestions)
      .execute()
    const res = await agent.api.app.gndr.unspecced.getTaggedSuggestions()
    expect(res.data.suggestions).toEqual(suggestions)
  })
})

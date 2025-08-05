import assert from 'node:assert'
import {
  AppGndrLabelerDefs,
  AtpAgent,
  ComAtprotoModerationDefs,
} from '@gander-social-atproto/api'
import {
  RecordRef,
  SeedClient,
  TestNetwork,
  basicSeed,
} from '@gander-social-atproto/dev-env'
import { ids } from '../../src/lexicon/lexicons'
import { isView as isRecordEmbedView } from '../../src/lexicon/types/app/gndr/embed/record'
import { forSnapshot, stripViewerFromLabeler } from '../_util'

describe('labeler service views', () => {
  let network: TestNetwork
  let agent: AtpAgent
  let pdsAgent: AtpAgent
  let sc: SeedClient

  // account dids, for convenience
  let alice: string
  let bob: string
  let carol: string

  let aliceService: RecordRef

  beforeAll(async () => {
    network = await TestNetwork.create({
      dbPostgresSchema: 'gndr_views_labeler_service',
    })
    agent = network.gndr.getClient()
    pdsAgent = network.pds.getClient()
    sc = network.getSeedClient()
    await basicSeed(sc)
    alice = sc.dids.alice
    bob = sc.dids.bob
    carol = sc.dids.carol

    const aliceRes = await pdsAgent.api.com.atproto.repo.createRecord(
      {
        repo: alice,
        collection: ids.AppGndrLabelerService,
        rkey: 'self',
        record: {
          policies: {
            labelValues: ['spam', '!hide', 'scam', 'impersonation'],
          },
          createdAt: new Date().toISOString(),
        },
      },
      { headers: sc.getHeaders(alice), encoding: 'application/json' },
    )
    await pdsAgent.api.com.atproto.repo.createRecord(
      {
        repo: bob,
        collection: ids.AppGndrLabelerService,
        rkey: 'self',
        record: {
          policies: {
            labelValues: ['nudity', 'sexual', 'porn'],
          },
          createdAt: new Date().toISOString(),
        },
      },
      { headers: sc.getHeaders(bob), encoding: 'application/json' },
    )

    aliceService = new RecordRef(aliceRes.data.uri, aliceRes.data.cid)

    await sc.like(bob, aliceService)
    await network.processAll()
  })

  afterAll(async () => {
    await network.close()
  })

  it('fetches labelers', async () => {
    const view = await agent.api.app.gndr.labeler.getServices(
      { dids: [alice, bob, 'did:example:missing'] },
      {
        headers: await network.serviceHeaders(
          bob,
          ids.AppGndrLabelerGetServices,
        ),
      },
    )

    expect(forSnapshot(view.data)).toMatchSnapshot()
  })

  it('fetches labelers detailed', async () => {
    const view = await agent.api.app.gndr.labeler.getServices(
      { dids: [alice, bob, 'did:example:missing'], detailed: true },
      {
        headers: await network.serviceHeaders(
          bob,
          ids.AppGndrLabelerGetServices,
        ),
      },
    )

    expect(forSnapshot(view.data)).toMatchSnapshot()
  })

  it('fetches labelers unauthed', async () => {
    const { data: authed } = await agent.api.app.gndr.labeler.getServices(
      { dids: [alice] },
      {
        headers: await network.serviceHeaders(
          bob,
          ids.AppGndrLabelerGetServices,
        ),
      },
    )
    const { data: unauthed } = await agent.api.app.gndr.labeler.getServices({
      dids: [alice],
    })
    expect(unauthed.views).toEqual(authed.views.map(stripViewerFromLabeler))
  })

  it('fetches multiple labelers unauthed', async () => {
    const { data: authed } = await agent.api.app.gndr.labeler.getServices(
      {
        dids: [alice, bob, 'did:example:missing'],
      },
      {
        headers: await network.serviceHeaders(
          bob,
          ids.AppGndrLabelerGetServices,
        ),
      },
    )
    const { data: unauthed } = await agent.api.app.gndr.labeler.getServices({
      dids: [alice, bob, 'did:example:missing'],
    })
    expect(unauthed.views.length).toBeGreaterThan(0)
    expect(unauthed.views).toEqual(authed.views.map(stripViewerFromLabeler))
  })

  it('renders a post embed of a labeler', async () => {
    const postRes = await pdsAgent.api.app.gndr.feed.post.create(
      { repo: sc.dids.bob },
      {
        text: 'check out this labeler',
        embed: {
          $type: 'app.gndr.embed.record',
          record: aliceService.raw,
        },
        createdAt: new Date().toISOString(),
      },
      sc.getHeaders(sc.dids.bob),
    )

    await network.processAll()

    const postViews = await agent.api.app.gndr.feed.getPosts({
      uris: [postRes.uri],
    })
    const serviceViews = await agent.api.app.gndr.labeler.getServices({
      dids: [alice],
    })
    assert(isRecordEmbedView(postViews.data.posts[0].embed))
    expect(postViews.data.posts[0].embed.record).toMatchObject(
      serviceViews.data.views[0],
    )
  })

  it('renders profile as labeler in non-detailed profile views', async () => {
    const { data: res } = await agent.api.app.gndr.actor.searchActors(
      { q: sc.accounts[alice].handle },
      {
        headers: await network.serviceHeaders(
          bob,
          ids.AppGndrActorSearchActors,
        ),
      },
    )
    expect(res.actors.length).toBe(1)
    expect(res.actors[0].associated?.labeler).toBe(true)
  })

  it('blocked by labeler takedown', async () => {
    await network.gndr.ctx.dataplane.takedownActor({ did: alice })
    const res = await agent.api.app.gndr.labeler.getServices(
      { dids: [alice, bob] },
      {
        headers: await network.serviceHeaders(
          bob,
          ids.AppGndrLabelerGetServices,
        ),
      },
    )
    expect(res.data.views.length).toBe(1)
    // @ts-ignore
    expect(res.data.views[0].creator.did).toEqual(bob)

    // Cleanup
    await network.gndr.ctx.dataplane.untakedownActor({ did: alice })
  })

  it(`returns additional labeler data`, async () => {
    await pdsAgent.api.com.atproto.repo.createRecord(
      {
        repo: carol,
        collection: ids.AppGndrLabelerService,
        rkey: 'self',
        record: {
          policies: {
            labelValues: ['spam', '!hide', 'scam', 'impersonation'],
          },
          createdAt: new Date().toISOString(),
          reasonTypes: [ComAtprotoModerationDefs.REASONOTHER],
          subjectTypes: ['record'],
          subjectCollections: ['app.gndr.feed.post'],
        },
      },
      { headers: sc.getHeaders(carol), encoding: 'application/json' },
    )
    await network.processAll()

    const view = await agent.api.app.gndr.labeler.getServices(
      { dids: [carol], detailed: true },
      {
        headers: await network.serviceHeaders(
          bob,
          ids.AppGndrLabelerGetServices,
        ),
      },
    )

    const labelerView = view.data.views[0]
    expect(AppGndrLabelerDefs.isLabelerViewDetailed(labelerView)).toBe(true)
    // for TS only
    if (!AppGndrLabelerDefs.isLabelerViewDetailed(labelerView)) return
    expect(labelerView).toBeTruthy()
    expect(labelerView.reasonTypes).toEqual([
      ComAtprotoModerationDefs.REASONOTHER,
    ])
    expect(labelerView.subjectTypes).toEqual(['record'])
    expect(labelerView.subjectCollections).toEqual(['app.gndr.feed.post'])
    expect(forSnapshot(view.data)).toMatchSnapshot()
  })
})

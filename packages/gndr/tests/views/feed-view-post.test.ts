import assert from 'node:assert'
import { AppGndrFeedDefs, AtUri, AtpAgent } from '@gander-social-atproto/api'
import {
  SeedClient,
  TestNetwork,
  basicSeed,
} from '@gander-social-atproto/dev-env'
import { ids } from '../../src/lexicon/lexicons'

/**
 * The frontend computes feed slices for display using at-most one
 * `FeedViewPost` slice. If that slice results in an "orphaned" thread e.g.
 * parent or root is blocked, that slice is tossed out and the next
 * `FeedViewPost` slice is considered. That process continues until a
 * contiguous `root -> child` slice can be found.
 *
 * For the tests below, we test with up to 4 slices: one root and up to 3
 * replies. Some tests focus on the first slice, and others ensure that at
 * least one contiguous slice is returned.
 */
const LIMIT = 4

describe('pds thread views', () => {
  let network: TestNetwork
  let agent: AtpAgent
  let pdsAgent: AtpAgent
  let sc: SeedClient

  // account dids, for convenience
  let alice: string
  let bob: string
  let carol: string
  let dan: string

  beforeAll(async () => {
    network = await TestNetwork.create({
      dbPostgresSchema: 'gndr_views_feed_view_post',
    })
    agent = network.gndr.getClient()
    pdsAgent = network.pds.getClient()
    sc = network.getSeedClient()
    await basicSeed(sc)
    alice = sc.dids.alice
    bob = sc.dids.bob
    carol = sc.dids.carol
    dan = sc.dids.dan

    await sc.follow(carol, alice)
    await sc.follow(carol, bob)
    await sc.follow(carol, dan)
    await sc.follow(dan, alice)
    await sc.follow(dan, bob)
    await sc.follow(dan, carol)

    await network.processAll()
  })

  afterAll(async () => {
    await network.close()
  })

  it(`[A] -> [B], A blocks B, viewed as C`, async () => {
    const A = await sc.post(alice, `A`)
    await network.processAll()
    const B = await sc.reply(bob, A.ref, A.ref, `B`)
    await network.processAll()
    const block = await pdsAgent.api.app.gndr.graph.block.create(
      { repo: alice },
      { createdAt: new Date().toISOString(), subject: bob },
      sc.getHeaders(alice),
    )

    await network.processAll()

    const timeline = await agent.api.app.gndr.feed.getTimeline(
      { limit: LIMIT },
      {
        headers: await network.serviceHeaders(
          carol,
          ids.AppGndrFeedGetTimeline,
        ),
      },
    )

    const sliceA = timeline.data.feed.find((f) => f.post.uri === A.ref.uriStr)
    const sliceB = timeline.data.feed.find((f) => f.post.uri === B.ref.uriStr)

    expect(sliceA).toBeDefined()
    expect(sliceB).toBeDefined()

    if (!sliceA || !sliceB) {
      throw new Error('sliceA or sliceB is undefined')
    }

    assert(AppGndrFeedDefs.isBlockedPost(sliceB.reply?.parent))
    assert(AppGndrFeedDefs.isBlockedPost(sliceB.reply?.root))

    await pdsAgent.api.app.gndr.graph.block.delete(
      { repo: alice, rkey: new AtUri(block.uri).rkey },
      sc.getHeaders(alice),
    )
  })

  it(`[A] -> [B] -> [C], A blocks B, viewed as C`, async () => {
    const A = await sc.post(alice, `A`)
    await network.processAll()
    const B = await sc.reply(bob, A.ref, A.ref, `B`)
    await network.processAll()
    const C = await sc.reply(carol, A.ref, B.ref, `C`)
    const block = await pdsAgent.api.app.gndr.graph.block.create(
      { repo: alice },
      { createdAt: new Date().toISOString(), subject: bob },
      sc.getHeaders(alice),
    )

    await network.processAll()

    const timeline = await agent.api.app.gndr.feed.getTimeline(
      { limit: LIMIT },
      {
        headers: await network.serviceHeaders(
          carol,
          ids.AppGndrFeedGetTimeline,
        ),
      },
    )

    const sliceC = timeline.data.feed.find((f) => f.post.uri === C.ref.uriStr)

    expect(sliceC).toBeDefined()
    expect(sliceC?.reply).toBeDefined()

    if (!sliceC || !sliceC.reply) {
      throw new Error('sliceC is undefined')
    }

    assert(AppGndrFeedDefs.isPostView(sliceC.reply.parent))
    expect(sliceC.reply.parent.uri).toEqual(B.ref.uriStr)
    assert(AppGndrFeedDefs.isBlockedPost(sliceC.reply.root))
    expect(sliceC.reply.root.uri).toEqual(A.ref.uriStr)

    await pdsAgent.api.app.gndr.graph.block.delete(
      { repo: alice, rkey: new AtUri(block.uri).rkey },
      sc.getHeaders(alice),
    )
  })

  it(`[A] -> [B] -> [C], C blocks A, viewed as C`, async () => {
    const A = await sc.post(alice, `A`)
    await network.processAll()
    const B = await sc.reply(bob, A.ref, A.ref, `B`)
    await network.processAll()
    const C = await sc.reply(carol, A.ref, B.ref, `C`)
    const block = await pdsAgent.api.app.gndr.graph.block.create(
      { repo: carol },
      { createdAt: new Date().toISOString(), subject: alice },
      sc.getHeaders(carol),
    )

    await network.processAll()

    const timeline = await agent.api.app.gndr.feed.getTimeline(
      // make sure we process all slices in this test
      { limit: LIMIT },
      {
        headers: await network.serviceHeaders(
          carol,
          ids.AppGndrFeedGetTimeline,
        ),
      },
    )

    const sliceB = timeline.data.feed.find((f) => f.post.uri === B.ref.uriStr)
    const sliceC = timeline.data.feed.find((f) => f.post.uri === C.ref.uriStr)

    expect(sliceB).toBeUndefined()
    expect(sliceC).toBeUndefined()

    await pdsAgent.api.app.gndr.graph.block.delete(
      { repo: carol, rkey: new AtUri(block.uri).rkey },
      sc.getHeaders(carol),
    )
  })

  it(`[A] -> [B] -> [C], C blocks B, viewed as C`, async () => {
    const A = await sc.post(alice, `A`)
    await network.processAll()
    const B = await sc.reply(bob, A.ref, A.ref, `B`)
    await network.processAll()
    const C = await sc.reply(carol, A.ref, B.ref, `C`)
    const block = await pdsAgent.api.app.gndr.graph.block.create(
      { repo: carol },
      { createdAt: new Date().toISOString(), subject: bob },
      sc.getHeaders(carol),
    )

    await network.processAll()

    const timeline = await agent.api.app.gndr.feed.getTimeline(
      // make sure we process all slices in this test
      { limit: LIMIT },
      {
        headers: await network.serviceHeaders(
          carol,
          ids.AppGndrFeedGetTimeline,
        ),
      },
    )

    const sliceA = timeline.data.feed.find((f) => f.post.uri === A.ref.uriStr)
    const sliceC = timeline.data.feed.find((f) => f.post.uri === C.ref.uriStr)

    expect(sliceA).toBeDefined()
    expect(sliceC).toBeUndefined()

    await pdsAgent.api.app.gndr.graph.block.delete(
      { repo: carol, rkey: new AtUri(block.uri).rkey },
      sc.getHeaders(carol),
    )
  })

  it(`[A] -> [B] -> [C] -> [D], A blocks C, viewed as C`, async () => {
    const A = await sc.post(alice, `A`)
    await network.processAll()
    const B = await sc.reply(bob, A.ref, A.ref, `B`)
    await network.processAll()
    const C = await sc.reply(carol, A.ref, B.ref, `C`)
    await network.processAll()
    const D = await sc.reply(dan, A.ref, C.ref, `D`)
    const block = await pdsAgent.api.app.gndr.graph.block.create(
      { repo: alice },
      { createdAt: new Date().toISOString(), subject: carol },
      sc.getHeaders(alice),
    )

    await network.processAll()

    const timeline = await agent.api.app.gndr.feed.getTimeline(
      { limit: LIMIT },
      {
        headers: await network.serviceHeaders(
          carol,
          ids.AppGndrFeedGetTimeline,
        ),
      },
    )

    const sliceD = timeline.data.feed.find((f) => f.post.uri === D.ref.uriStr)

    expect(sliceD).toBeDefined()
    expect(sliceD?.reply).toBeDefined()

    if (!sliceD || !sliceD.reply) {
      throw new Error('sliceD is undefined')
    }

    assert(AppGndrFeedDefs.isPostView(sliceD.reply.parent))
    expect(sliceD.reply.parent.uri).toEqual(C.ref.uriStr)
    assert(AppGndrFeedDefs.isBlockedPost(sliceD.reply.root))
    expect(sliceD.reply.root.uri).toEqual(A.ref.uriStr)

    await pdsAgent.api.app.gndr.graph.block.delete(
      { repo: alice, rkey: new AtUri(block.uri).rkey },
      sc.getHeaders(alice),
    )
  })

  it(`[A] -> [B] -> [C] -> [D], A blocks C, viewed as D`, async () => {
    const A = await sc.post(alice, `A`)
    await network.processAll()
    const B = await sc.reply(bob, A.ref, A.ref, `B`)
    await network.processAll()
    const C = await sc.reply(carol, A.ref, B.ref, `C`)
    await network.processAll()
    const D = await sc.reply(dan, A.ref, C.ref, `D`)
    const block = await pdsAgent.api.app.gndr.graph.block.create(
      { repo: alice },
      { createdAt: new Date().toISOString(), subject: carol },
      sc.getHeaders(alice),
    )

    await network.processAll()

    const timeline = await agent.api.app.gndr.feed.getTimeline(
      { limit: LIMIT },
      {
        headers: await network.serviceHeaders(dan, ids.AppGndrFeedGetTimeline),
      },
    )

    const sliceD = timeline.data.feed.find((f) => f.post.uri === D.ref.uriStr)

    expect(sliceD).toBeDefined()
    expect(sliceD?.reply).toBeDefined()

    if (!sliceD || !sliceD.reply) {
      throw new Error('sliceD is undefined')
    }

    assert(AppGndrFeedDefs.isPostView(sliceD.reply.parent))
    expect(sliceD.reply.parent.uri).toEqual(C.ref.uriStr)
    assert(AppGndrFeedDefs.isBlockedPost(sliceD.reply.root))
    expect(sliceD.reply.root.uri).toEqual(A.ref.uriStr)

    await pdsAgent.api.app.gndr.graph.block.delete(
      { repo: alice, rkey: new AtUri(block.uri).rkey },
      sc.getHeaders(alice),
    )
  })

  it(`[A] -> [B] -> [C] -> [D], A blocks B, viewed as C`, async () => {
    const A = await sc.post(alice, `A`)
    await network.processAll()
    const B = await sc.reply(bob, A.ref, A.ref, `B`)
    await network.processAll()
    const C = await sc.reply(carol, A.ref, B.ref, `C`)
    await network.processAll()
    const D = await sc.reply(dan, A.ref, C.ref, `D`)
    const block = await pdsAgent.api.app.gndr.graph.block.create(
      { repo: alice },
      { createdAt: new Date().toISOString(), subject: bob },
      sc.getHeaders(alice),
    )

    await network.processAll()

    const timeline = await agent.api.app.gndr.feed.getTimeline(
      { limit: LIMIT },
      {
        headers: await network.serviceHeaders(
          carol,
          ids.AppGndrFeedGetTimeline,
        ),
      },
    )

    const sliceD = timeline.data.feed.find((f) => f.post.uri === D.ref.uriStr)

    expect(sliceD).toBeDefined()
    expect(sliceD?.reply).toBeDefined()

    if (!sliceD || !sliceD.reply) {
      throw new Error('sliceD is undefined')
    }

    assert(AppGndrFeedDefs.isPostView(sliceD.reply.parent))
    expect(sliceD.reply.parent.uri).toEqual(C.ref.uriStr)
    /*
     * We don't walk the reply ancestors past whats available in the ReplyRef
     */
    assert(AppGndrFeedDefs.isPostView(sliceD.reply.root))
    expect(sliceD.reply.root.uri).toEqual(A.ref.uriStr)

    await pdsAgent.api.app.gndr.graph.block.delete(
      { repo: alice, rkey: new AtUri(block.uri).rkey },
      sc.getHeaders(alice),
    )
  })

  it(`[A] -> [B] -> [C] -> [D], B blocks C, viewed as D`, async () => {
    const A = await sc.post(alice, `A`)
    await network.processAll()
    const B = await sc.reply(bob, A.ref, A.ref, `B`)
    await network.processAll()
    const C = await sc.reply(carol, A.ref, B.ref, `C`)
    await network.processAll()
    const D = await sc.reply(dan, A.ref, C.ref, `D`)
    const block = await pdsAgent.api.app.gndr.graph.block.create(
      { repo: bob },
      { createdAt: new Date().toISOString(), subject: carol },
      sc.getHeaders(bob),
    )

    await network.processAll()

    const timeline = await agent.api.app.gndr.feed.getTimeline(
      { limit: LIMIT },
      {
        headers: await network.serviceHeaders(dan, ids.AppGndrFeedGetTimeline),
      },
    )

    const sliceD = timeline.data.feed.find((f) => f.post.uri === D.ref.uriStr)

    expect(sliceD).toBeDefined()
    expect(sliceD?.reply).toBeDefined()

    if (!sliceD || !sliceD.reply) {
      throw new Error('sliceD is undefined')
    }

    assert(AppGndrFeedDefs.isPostView(sliceD.reply.parent))
    expect(sliceD.reply.parent.uri).toEqual(C.ref.uriStr)

    /*
     * We don't walk the reply ancestors past whats available in the ReplyRef
     */
    assert(AppGndrFeedDefs.isPostView(sliceD.reply.root))
    expect(sliceD.reply.root.uri).toEqual(A.ref.uriStr)

    await pdsAgent.api.app.gndr.graph.block.delete(
      { repo: bob, rkey: new AtUri(block.uri).rkey },
      sc.getHeaders(bob),
    )
  })

  it(`[A] -> [B] -> [C] -> [D], A blocks D, viewed as C`, async () => {
    const A = await sc.post(alice, `A`)
    await network.processAll()
    const B = await sc.reply(bob, A.ref, A.ref, `B`)
    await network.processAll()
    const C = await sc.reply(carol, A.ref, B.ref, `C`)
    await network.processAll()
    const D = await sc.reply(dan, A.ref, C.ref, `D`)
    const block = await pdsAgent.api.app.gndr.graph.block.create(
      { repo: alice },
      { createdAt: new Date().toISOString(), subject: dan },
      sc.getHeaders(alice),
    )

    await network.processAll()

    const timeline = await agent.api.app.gndr.feed.getTimeline(
      { limit: LIMIT },
      {
        headers: await network.serviceHeaders(
          carol,
          ids.AppGndrFeedGetTimeline,
        ),
      },
    )

    const sliceD = timeline.data.feed.find((f) => f.post.uri === D.ref.uriStr)
    const sliceC = timeline.data.feed.find((f) => f.post.uri === C.ref.uriStr)

    expect(sliceD).toBeDefined()
    expect(sliceC).toBeDefined()

    if (!sliceD || !sliceC) {
      throw new Error('sliceD or sliceC is undefined')
    }

    assert(AppGndrFeedDefs.isBlockedPost(sliceD.reply?.root))
    assert(AppGndrFeedDefs.isPostView(sliceC.reply?.parent))
    assert(AppGndrFeedDefs.isPostView(sliceC.reply?.root))

    await pdsAgent.api.app.gndr.graph.block.delete(
      { repo: alice, rkey: new AtUri(block.uri).rkey },
      sc.getHeaders(alice),
    )
  })

  it(`[A] -> [B] -> [C] -> [D], A blocks C, viewed as D, A/B/C are outside first page`, async () => {
    const A = await sc.post(alice, `A`)
    await network.processAll()
    const B = await sc.reply(bob, A.ref, A.ref, `B`)
    await network.processAll()
    const C = await sc.reply(carol, A.ref, B.ref, `C`)
    await network.processAll()

    // push A/B/C to send page of results
    await sc.post(alice, `Aa`)
    await sc.post(alice, `Ab`)
    await sc.post(alice, `Ac`)
    await sc.post(alice, `Ad`)

    await network.processAll()

    const D = await sc.reply(dan, A.ref, C.ref, `D`)
    const block = await pdsAgent.api.app.gndr.graph.block.create(
      { repo: alice },
      { createdAt: new Date().toISOString(), subject: carol },
      sc.getHeaders(alice),
    )

    await network.processAll()

    const timeline = await agent.api.app.gndr.feed.getTimeline(
      { limit: LIMIT },
      {
        headers: await network.serviceHeaders(dan, ids.AppGndrFeedGetTimeline),
      },
    )

    const sliceD = timeline.data.feed.find((f) => f.post.uri === D.ref.uriStr)
    const sliceA = timeline.data.feed.find((f) => f.post.uri === A.ref.uriStr)

    expect(sliceD).toBeDefined()
    expect(sliceD?.reply).toBeDefined()
    // not in first page of results
    expect(sliceA).toBeUndefined()

    if (!sliceD || !sliceD.reply) {
      throw new Error('sliceD is undefined')
    }

    assert(AppGndrFeedDefs.isPostView(sliceD.reply.parent))
    expect(sliceD.reply.parent.uri).toEqual(C.ref.uriStr)
    assert(AppGndrFeedDefs.isBlockedPost(sliceD.reply.root))
    expect(sliceD.reply.root.uri).toEqual(A.ref.uriStr)

    await pdsAgent.api.app.gndr.graph.block.delete(
      { repo: alice, rkey: new AtUri(block.uri).rkey },
      sc.getHeaders(alice),
    )
  })
})

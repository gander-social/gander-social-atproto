import { AtUri, AtpAgent } from '@gander-social-atproto/api'
import {
  RecordRef,
  SeedClient,
  TestNetwork,
  basicSeed,
} from '@gander-social-atproto/dev-env'
import { ids } from '../../src/lexicon/lexicons'
import { forSnapshot } from '../_util'

describe('pds views with blocking from block lists', () => {
  let network: TestNetwork
  let agent: AtpAgent
  let pdsAgent: AtpAgent
  let sc: SeedClient
  let aliceReplyToDan: { ref: RecordRef }

  let alice: string
  let bob: string
  let carol: string
  let dan: string

  beforeAll(async () => {
    network = await TestNetwork.create({
      dbPostgresSchema: 'views_block_lists',
    })
    agent = network.gndr.getClient()
    pdsAgent = network.pds.getClient()
    sc = network.getSeedClient()
    await basicSeed(sc)
    alice = sc.dids.alice
    bob = sc.dids.bob
    carol = sc.dids.carol
    dan = sc.dids.dan
    // add follows to ensure blocks work even w follows
    await sc.follow(carol, dan)
    await sc.follow(dan, carol)
    aliceReplyToDan = await sc.reply(
      alice,
      sc.posts[dan][0].ref,
      sc.posts[dan][0].ref,
      'alice replies to dan',
    )
    await network.processAll()
  })

  afterAll(async () => {
    await network.close()
  })

  let listUri: string

  it('creates a list with some items', async () => {
    const avatar = await sc.uploadFile(
      alice,
      '../dev-env/assets/key-portrait-small.jpg',
      'image/jpeg',
    )
    // alice creates block list with bob & carol that dan uses
    const list = await pdsAgent.api.app.gndr.graph.list.create(
      { repo: alice },
      {
        name: 'alice blocks',
        purpose: 'app.gndr.graph.defs#modlist',
        description: 'big list of blocks',
        avatar: avatar.image,
        createdAt: new Date().toISOString(),
      },
      sc.getHeaders(alice),
    )
    listUri = list.uri
    await pdsAgent.api.app.gndr.graph.listitem.create(
      { repo: alice },
      {
        subject: sc.dids.bob,
        list: list.uri,
        createdAt: new Date().toISOString(),
      },
      sc.getHeaders(alice),
    )
    await pdsAgent.api.app.gndr.graph.listitem.create(
      { repo: alice },
      {
        subject: sc.dids.carol,
        list: list.uri,
        createdAt: new Date().toISOString(),
      },
      sc.getHeaders(alice),
    )
    await pdsAgent.api.app.gndr.graph.listitem.create(
      { repo: alice },
      {
        subject: sc.dids.dan,
        list: list.uri,
        createdAt: new Date().toISOString(),
      },
      sc.getHeaders(alice),
    )
    await network.processAll()
  })

  it('uses a list for blocks', async () => {
    await pdsAgent.api.app.gndr.graph.listblock.create(
      { repo: dan },
      {
        subject: listUri,
        createdAt: new Date().toISOString(),
      },
      sc.getHeaders(dan),
    )
    await network.processAll()
  })

  it('blocks thread post', async () => {
    const { carol, dan } = sc.dids
    const { data: threadAlice } = await agent.api.app.gndr.feed.getPostThread(
      { depth: 1, uri: sc.posts[carol][0].ref.uriStr },
      {
        headers: await network.serviceHeaders(
          dan,
          ids.AppGndrFeedGetPostThread,
        ),
      },
    )
    expect(threadAlice.thread).toEqual(
      expect.objectContaining({
        $type: 'app.gndr.feed.defs#blockedPost',
        uri: sc.posts[carol][0].ref.uriStr,
        blocked: true,
      }),
    )
    const { data: threadCarol } = await agent.api.app.gndr.feed.getPostThread(
      { depth: 1, uri: sc.posts[dan][0].ref.uriStr },
      {
        headers: await network.serviceHeaders(
          carol,
          ids.AppGndrFeedGetPostThread,
        ),
      },
    )
    expect(threadCarol.thread).toEqual(
      expect.objectContaining({
        $type: 'app.gndr.feed.defs#blockedPost',
        uri: sc.posts[dan][0].ref.uriStr,
        blocked: true,
      }),
    )
  })

  it('blocks thread reply', async () => {
    // Contains reply by carol
    const { data: thread } = await agent.api.app.gndr.feed.getPostThread(
      { depth: 1, uri: sc.posts[alice][1].ref.uriStr },
      {
        headers: await network.serviceHeaders(
          dan,
          ids.AppGndrFeedGetPostThread,
        ),
      },
    )
    expect(forSnapshot(thread)).toMatchSnapshot()
  })

  it('blocks thread parent', async () => {
    // Parent is a post by dan
    const { data: thread } = await agent.api.app.gndr.feed.getPostThread(
      { depth: 1, uri: aliceReplyToDan.ref.uriStr },
      {
        headers: await network.serviceHeaders(
          carol,
          ids.AppGndrFeedGetPostThread,
        ),
      },
    )
    expect(forSnapshot(thread)).toMatchSnapshot()
  })

  it('blocks record embeds', async () => {
    // Contains a deep embed of carol's post, blocked by dan
    const { data: thread } = await agent.api.app.gndr.feed.getPostThread(
      { depth: 0, uri: sc.posts[alice][2].ref.uriStr },
      {
        headers: await network.serviceHeaders(
          dan,
          ids.AppGndrFeedGetPostThread,
        ),
      },
    )
    expect(forSnapshot(thread)).toMatchSnapshot()
  })

  it('errors on getting author feed', async () => {
    const attempt1 = agent.api.app.gndr.feed.getAuthorFeed(
      { actor: carol },
      {
        headers: await network.serviceHeaders(
          dan,
          ids.AppGndrFeedGetAuthorFeed,
        ),
      },
    )
    await expect(attempt1).rejects.toMatchObject({
      error: 'BlockedActor',
    })

    const attempt2 = agent.api.app.gndr.feed.getAuthorFeed(
      { actor: dan },
      {
        headers: await network.serviceHeaders(
          carol,
          ids.AppGndrFeedGetAuthorFeed,
        ),
      },
    )
    await expect(attempt2).rejects.toMatchObject({
      error: 'BlockedByActor',
    })
  })

  it('strips blocked users out of getTimeline', async () => {
    const resCarol = await agent.api.app.gndr.feed.getTimeline(
      { limit: 100 },
      {
        headers: await network.serviceHeaders(
          carol,
          ids.AppGndrFeedGetTimeline,
        ),
      },
    )
    expect(
      resCarol.data.feed.some((post) => post.post.author.did === dan),
    ).toBeFalsy()

    const resDan = await agent.api.app.gndr.feed.getTimeline(
      { limit: 100 },
      {
        headers: await network.serviceHeaders(dan, ids.AppGndrFeedGetTimeline),
      },
    )
    expect(
      resDan.data.feed.some((post) =>
        [bob, carol].includes(post.post.author.did),
      ),
    ).toBeFalsy()
  })

  it('returns block status on getProfile', async () => {
    const resCarol = await agent.api.app.gndr.actor.getProfile(
      { actor: dan },
      {
        headers: await network.serviceHeaders(
          carol,
          ids.AppGndrActorGetProfile,
        ),
      },
    )
    expect(resCarol.data.viewer?.blocking).toBeUndefined()
    expect(resCarol.data.viewer?.blockingByList).toBeUndefined()
    expect(resCarol.data.viewer?.blockedBy).toBe(true)

    const resDan = await agent.api.app.gndr.actor.getProfile(
      { actor: carol },
      {
        headers: await network.serviceHeaders(dan, ids.AppGndrActorGetProfile),
      },
    )
    expect(resDan.data.viewer?.blocking).toBeDefined()
    expect(resDan.data.viewer?.blockingByList?.uri).toEqual(
      resDan.data.viewer?.blocking,
    )
    expect(resDan.data.viewer?.blockedBy).toBe(false)
  })

  it('returns block status on getProfiles', async () => {
    const resCarol = await agent.api.app.gndr.actor.getProfiles(
      { actors: [alice, dan] },
      {
        headers: await network.serviceHeaders(
          carol,
          ids.AppGndrActorGetProfiles,
        ),
      },
    )
    expect(resCarol.data.profiles[0].viewer?.blocking).toBeUndefined()
    expect(resCarol.data.profiles[0].viewer?.blockingByList).toBeUndefined()
    expect(resCarol.data.profiles[0].viewer?.blockedBy).toBe(false)
    expect(resCarol.data.profiles[1].viewer?.blocking).toBeUndefined()
    expect(resCarol.data.profiles[1].viewer?.blockingByList).toBeUndefined()
    expect(resCarol.data.profiles[1].viewer?.blockedBy).toBe(true)

    const resDan = await agent.api.app.gndr.actor.getProfiles(
      { actors: [alice, carol] },
      {
        headers: await network.serviceHeaders(dan, ids.AppGndrActorGetProfiles),
      },
    )
    expect(resDan.data.profiles[0].viewer?.blocking).toBeUndefined()
    expect(resDan.data.profiles[0].viewer?.blockingByList).toBeUndefined()
    expect(resDan.data.profiles[0].viewer?.blockedBy).toBe(false)
    expect(resDan.data.profiles[1].viewer?.blocking).toBeDefined()
    expect(resDan.data.profiles[1].viewer?.blockingByList?.uri).toEqual(
      resDan.data.profiles[1].viewer?.blocking,
    )
    expect(resDan.data.profiles[1].viewer?.blockedBy).toBe(false)
  })

  it('ignores self-blocks', async () => {
    const res = await agent.api.app.gndr.actor.getProfile(
      { actor: dan }, // dan subscribes to list that contains himself
      {
        headers: await network.serviceHeaders(dan, ids.AppGndrActorGetProfile),
      },
    )
    expect(res.data.viewer?.blocking).toBeUndefined()
    expect(res.data.viewer?.blockingByList).toBeUndefined()
    expect(res.data.viewer?.blockedBy).toBe(false)
  })

  it('does not return notifs for blocked accounts', async () => {
    const resCarol = await agent.api.app.gndr.notification.listNotifications(
      {
        limit: 100,
      },
      {
        headers: await network.serviceHeaders(
          carol,
          ids.AppGndrNotificationListNotifications,
        ),
      },
    )
    expect(
      resCarol.data.notifications.some((notif) => notif.author.did === dan),
    ).toBeFalsy()

    const resDan = await agent.api.app.gndr.notification.listNotifications(
      {
        limit: 100,
      },
      {
        headers: await network.serviceHeaders(
          carol,
          ids.AppGndrNotificationListNotifications,
        ),
      },
    )
    expect(
      resDan.data.notifications.some((notif) => notif.author.did === carol),
    ).toBeFalsy()
  })

  it('does not return blocked accounts in actor search', async () => {
    const resCarol = await agent.api.app.gndr.actor.searchActors(
      {
        term: 'dan.test',
      },
      {
        headers: await network.serviceHeaders(
          carol,
          ids.AppGndrActorSearchActors,
        ),
      },
    )
    expect(resCarol.data.actors.some((actor) => actor.did === dan)).toBeFalsy()

    const resDan = await agent.api.app.gndr.actor.searchActors(
      {
        term: 'carol.test',
      },
      {
        headers: await network.serviceHeaders(
          dan,
          ids.AppGndrActorSearchActors,
        ),
      },
    )
    expect(resDan.data.actors.some((actor) => actor.did === carol)).toBeFalsy()
  })

  it('does not return blocked accounts in actor search typeahead', async () => {
    const resCarol = await agent.api.app.gndr.actor.searchActorsTypeahead(
      {
        term: 'dan.tes',
      },
      {
        headers: await network.serviceHeaders(
          carol,
          ids.AppGndrActorSearchActorsTypeahead,
        ),
      },
    )
    expect(resCarol.data.actors.some((actor) => actor.did === dan)).toBeFalsy()

    const resDan = await agent.api.app.gndr.actor.searchActorsTypeahead(
      {
        term: 'carol.tes',
      },
      {
        headers: await network.serviceHeaders(
          dan,
          ids.AppGndrActorSearchActorsTypeahead,
        ),
      },
    )
    expect(resDan.data.actors.some((actor) => actor.did === carol)).toBeFalsy()
  })

  it('does return blocked accounts in actor search typeahead when term is exact handle', async () => {
    const resCarol = await agent.api.app.gndr.actor.searchActorsTypeahead(
      {
        term: 'dan.test',
      },
      {
        headers: await network.serviceHeaders(
          carol,
          ids.AppGndrActorSearchActorsTypeahead,
        ),
      },
    )
    expect(resCarol.data.actors.some((actor) => actor.did === dan)).toBeTruthy()

    const resDan = await agent.api.app.gndr.actor.searchActorsTypeahead(
      {
        term: 'carol.test',
      },
      {
        headers: await network.serviceHeaders(
          dan,
          ids.AppGndrActorSearchActorsTypeahead,
        ),
      },
    )
    expect(resDan.data.actors.some((actor) => actor.did === carol)).toBeTruthy()
  })

  it('does not return blocked accounts in get suggestions', async () => {
    // unfollow so they _would_ show up in suggestions if not for block
    await sc.unfollow(carol, dan)
    await sc.unfollow(dan, carol)
    await network.processAll()

    const resCarol = await agent.api.app.gndr.actor.getSuggestions(
      {
        limit: 100,
      },
      {
        headers: await network.serviceHeaders(
          carol,
          ids.AppGndrActorGetSuggestions,
        ),
      },
    )
    expect(resCarol.data.actors.some((actor) => actor.did === dan)).toBeFalsy()

    const resDan = await agent.api.app.gndr.actor.getSuggestions(
      {
        limit: 100,
      },
      {
        headers: await network.serviceHeaders(
          dan,
          ids.AppGndrActorGetSuggestions,
        ),
      },
    )
    expect(resDan.data.actors.some((actor) => actor.did === carol)).toBeFalsy()
  })

  it('returns the contents of a list', async () => {
    const res = await agent.api.app.gndr.graph.getList(
      { list: listUri },
      { headers: await network.serviceHeaders(dan, ids.AppGndrGraphGetList) },
    )
    expect(forSnapshot(res.data)).toMatchSnapshot()
  })

  it('paginates getList', async () => {
    const full = await agent.api.app.gndr.graph.getList(
      { list: listUri },
      { headers: await network.serviceHeaders(dan, ids.AppGndrGraphGetList) },
    )
    const first = await agent.api.app.gndr.graph.getList(
      { list: listUri, limit: 1 },
      { headers: await network.serviceHeaders(dan, ids.AppGndrGraphGetList) },
    )
    const second = await agent.api.app.gndr.graph.getList(
      { list: listUri, cursor: first.data.cursor },
      { headers: await network.serviceHeaders(dan, ids.AppGndrGraphGetList) },
    )
    const combined = [...first.data.items, ...second.data.items]
    expect(combined).toEqual(full.data.items)
  })

  let otherListUri: string

  it('returns lists associated with a user', async () => {
    const listRes = await pdsAgent.api.app.gndr.graph.list.create(
      { repo: alice },
      {
        name: 'new list',
        purpose: 'app.gndr.graph.defs#modlist',
        description: 'blah blah',
        createdAt: new Date().toISOString(),
      },
      sc.getHeaders(alice),
    )
    otherListUri = listRes.uri
    await network.processAll()

    const res = await agent.api.app.gndr.graph.getLists(
      { actor: alice },
      { headers: await network.serviceHeaders(dan, ids.AppGndrGraphGetLists) },
    )
    expect(forSnapshot(res.data)).toMatchSnapshot()
  })

  it('paginates getLists', async () => {
    const full = await agent.api.app.gndr.graph.getLists(
      { actor: alice },
      { headers: await network.serviceHeaders(dan, ids.AppGndrGraphGetLists) },
    )
    const first = await agent.api.app.gndr.graph.getLists(
      { actor: alice, limit: 1 },
      { headers: await network.serviceHeaders(dan, ids.AppGndrGraphGetLists) },
    )
    const second = await agent.api.app.gndr.graph.getLists(
      { actor: alice, cursor: first.data.cursor },
      { headers: await network.serviceHeaders(dan, ids.AppGndrGraphGetLists) },
    )
    const combined = [...first.data.lists, ...second.data.lists]
    expect(combined).toEqual(full.data.lists)
  })

  it('returns a users own list blocks', async () => {
    await pdsAgent.api.app.gndr.graph.listblock.create(
      { repo: dan },
      {
        subject: otherListUri,
        createdAt: new Date().toISOString(),
      },
      sc.getHeaders(dan),
    )
    await network.processAll()

    const res = await agent.api.app.gndr.graph.getListBlocks(
      {},
      {
        headers: await network.serviceHeaders(
          dan,
          ids.AppGndrGraphGetListBlocks,
        ),
      },
    )
    expect(forSnapshot(res.data)).toMatchSnapshot()
  })

  it('paginates getListBlocks', async () => {
    const full = await agent.api.app.gndr.graph.getListBlocks(
      {},
      {
        headers: await network.serviceHeaders(
          dan,
          ids.AppGndrGraphGetListBlocks,
        ),
      },
    )
    const first = await agent.api.app.gndr.graph.getListBlocks(
      { limit: 1 },
      {
        headers: await network.serviceHeaders(
          dan,
          ids.AppGndrGraphGetListBlocks,
        ),
      },
    )
    const second = await agent.api.app.gndr.graph.getListBlocks(
      { cursor: first.data.cursor },
      {
        headers: await network.serviceHeaders(
          dan,
          ids.AppGndrGraphGetListBlocks,
        ),
      },
    )
    const combined = [...first.data.lists, ...second.data.lists]
    expect(combined).toEqual(full.data.lists)
  })

  it('does not apply "curate" blocklists', async () => {
    const parsedUri = new AtUri(listUri)
    await pdsAgent.api.com.atproto.repo.putRecord(
      {
        repo: parsedUri.hostname,
        collection: parsedUri.collection,
        rkey: parsedUri.rkey,
        record: {
          name: 'curate list',
          purpose: 'app.gndr.graph.defs#curatelist',
          createdAt: new Date().toISOString(),
        },
      },
      { headers: sc.getHeaders(alice), encoding: 'application/json' },
    )
    await network.processAll()

    const resCarol = await agent.api.app.gndr.feed.getTimeline(
      { limit: 100 },
      {
        headers: await network.serviceHeaders(
          carol,
          ids.AppGndrFeedGetTimeline,
        ),
      },
    )
    expect(
      resCarol.data.feed.some((post) => post.post.author.did === dan),
    ).toBeTruthy()

    const resDan = await agent.api.app.gndr.feed.getTimeline(
      { limit: 100 },
      {
        headers: await network.serviceHeaders(dan, ids.AppGndrFeedGetTimeline),
      },
    )
    expect(
      resDan.data.feed.some((post) =>
        [bob, carol].includes(post.post.author.did),
      ),
    ).toBeTruthy()
  })

  it('does not apply deleted blocklists (whose items are still around)', async () => {
    const parsedUri = new AtUri(listUri)
    await pdsAgent.api.app.gndr.graph.list.delete(
      {
        repo: parsedUri.hostname,
        rkey: parsedUri.rkey,
      },
      sc.getHeaders(alice),
    )
    await network.processAll()

    const resCarol = await agent.api.app.gndr.feed.getTimeline(
      { limit: 100 },
      {
        headers: await network.serviceHeaders(
          carol,
          ids.AppGndrFeedGetTimeline,
        ),
      },
    )
    expect(
      resCarol.data.feed.some((post) => post.post.author.did === dan),
    ).toBeTruthy()

    const resDan = await agent.api.app.gndr.feed.getTimeline(
      { limit: 100 },
      {
        headers: await network.serviceHeaders(dan, ids.AppGndrFeedGetTimeline),
      },
    )
    expect(
      resDan.data.feed.some((post) =>
        [bob, carol].includes(post.post.author.did),
      ),
    ).toBeTruthy()
  })
})

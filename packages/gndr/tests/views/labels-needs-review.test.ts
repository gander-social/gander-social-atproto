import assert from 'node:assert'
import { AtpAgent } from '@gander-social-atproto/api'
import {
  SeedClient,
  TestNetwork,
  basicSeed,
} from '@gander-social-atproto/dev-env'
import { ids } from '../../src/lexicon/lexicons'
import { isThreadViewPost } from '../../src/lexicon/types/app/gndr/feed/defs'

describe('gndr needs-review labels', () => {
  let network: TestNetwork
  let agent: AtpAgent
  let sc: SeedClient

  beforeAll(async () => {
    network = await TestNetwork.create({
      dbPostgresSchema: 'gndr_views_needs_review_labels',
    })
    agent = network.gndr.getClient()
    sc = network.getSeedClient()
    await basicSeed(sc)

    await sc.createAccount('geoff', {
      email: 'geoff@test.com',
      handle: 'geoff.test',
      password: 'geoff',
    })

    await sc.reply(
      sc.dids.geoff,
      sc.posts[sc.dids.alice][0].ref,
      sc.posts[sc.dids.alice][0].ref,
      'my name geoff',
    )

    await sc.post(
      sc.dids.geoff,
      'her name alice',
      undefined,
      undefined,
      sc.posts[sc.dids.alice][0].ref,
    )

    await sc.follow(sc.dids.bob, sc.dids.geoff)

    await network.processAll()

    AtpAgent.configure({ appLabelers: [network.ozone.ctx.cfg.service.did] })
  })

  afterAll(async () => {
    await network.close()
  })

  describe('account-level', () => {
    beforeAll(async () => {
      await network.gndr.db.db
        .insertInto('label')
        .values({
          src: network.ozone.ctx.cfg.service.did,
          uri: sc.dids.geoff,
          cid: '',
          val: 'needs-review',
          exp: null,
          neg: false,
          cts: new Date().toISOString(),
        })
        .execute()
    })

    afterAll(async () => {
      await network.gndr.db.db
        .deleteFrom('label')
        .where('src', '=', network.ozone.ctx.cfg.service.did)
        .execute()
    })

    it('applies to thread replies.', async () => {
      const {
        data: { thread },
      } = await agent.app.gndr.feed.getPostThread({
        uri: sc.posts[sc.dids.alice][0].ref.uriStr,
      })
      assert(isThreadViewPost(thread))
      expect(
        thread.replies?.some((reply) => {
          return (
            isThreadViewPost(reply) && reply.post.author.did === sc.dids.geoff
          )
        }),
      ).toBe(false)
    })

    it('applies to quote lists.', async () => {
      const {
        data: { posts },
      } = await agent.app.gndr.feed.getQuotes({
        uri: sc.posts[sc.dids.alice][0].ref.uriStr,
      })
      expect(
        posts.some((post) => {
          return post.author.did === sc.dids.geoff
        }),
      ).toBe(false)
    })

    it('applies to reply, quote, and mention notifications.', async () => {
      const {
        data: { notifications },
      } = await agent.app.gndr.notification.listNotifications(
        {},
        {
          headers: await network.serviceHeaders(
            sc.dids.alice,
            ids.AppGndrNotificationListNotifications,
          ),
        },
      )
      expect(
        notifications.some((notif) => {
          return notif.reason === 'reply' && notif.author.did === sc.dids.geoff
        }),
      ).toBe(false)
      expect(
        notifications.some((notif) => {
          return notif.reason === 'quote' && notif.author.did === sc.dids.geoff
        }),
      ).toBe(false)
      expect(
        notifications.some((notif) => {
          return (
            notif.reason === 'mention' && notif.author.did === sc.dids.geoff
          )
        }),
      ).toBe(false)
    })

    it('does not apply to self.', async () => {
      const {
        data: { thread },
      } = await agent.app.gndr.feed.getPostThread(
        {
          uri: sc.posts[sc.dids.alice][0].ref.uriStr,
        },
        {
          headers: await network.serviceHeaders(
            sc.dids.geoff,
            ids.AppGndrFeedGetPostThread,
          ),
        },
      )
      assert(isThreadViewPost(thread))
      expect(
        thread.replies?.some((reply) => {
          return (
            isThreadViewPost(reply) && reply.post.author.did === sc.dids.geoff
          )
        }),
      ).toBe(true)
    })

    it('does not apply to followers.', async () => {
      const {
        data: { thread },
      } = await agent.app.gndr.feed.getPostThread(
        {
          uri: sc.posts[sc.dids.alice][0].ref.uriStr,
        },
        {
          headers: await network.serviceHeaders(
            sc.dids.bob, // follows geoff
            ids.AppGndrFeedGetPostThread,
          ),
        },
      )
      assert(isThreadViewPost(thread))
      expect(
        thread.replies?.some((reply) => {
          return (
            isThreadViewPost(reply) && reply.post.author.did === sc.dids.geoff
          )
        }),
      ).toBe(true)
    })
  })

  describe('record-level', () => {
    beforeAll(async () => {
      const geoffPostUris = [
        ...sc.posts[sc.dids.geoff],
        ...sc.replies[sc.dids.geoff],
      ].map((post) => post.ref.uriStr)
      await network.gndr.db.db
        .insertInto('label')
        .values(
          geoffPostUris.map((uri) => ({
            src: network.ozone.ctx.cfg.service.did,
            uri,
            cid: '',
            val: 'needs-review',
            exp: null,
            neg: false,
            cts: new Date().toISOString(),
          })),
        )
        .execute()
    })

    it('applies to thread replies.', async () => {
      const {
        data: { thread },
      } = await agent.app.gndr.feed.getPostThread({
        uri: sc.posts[sc.dids.alice][0].ref.uriStr,
      })
      assert(isThreadViewPost(thread))
      expect(
        thread.replies?.some((reply) => {
          return (
            isThreadViewPost(reply) && reply.post.author.did === sc.dids.geoff
          )
        }),
      ).toBe(false)
    })

    it('applies to quote lists.', async () => {
      const {
        data: { posts },
      } = await agent.app.gndr.feed.getQuotes({
        uri: sc.posts[sc.dids.alice][0].ref.uriStr,
      })
      expect(
        posts.some((post) => {
          return post.author.did === sc.dids.geoff
        }),
      ).toBe(false)
    })

    it('applies to reply, quote, and mention notifications.', async () => {
      const {
        data: { notifications },
      } = await agent.app.gndr.notification.listNotifications(
        {},
        {
          headers: await network.serviceHeaders(
            sc.dids.alice,
            ids.AppGndrNotificationListNotifications,
          ),
        },
      )
      expect(
        notifications.some((notif) => {
          return notif.reason === 'reply' && notif.author.did === sc.dids.geoff
        }),
      ).toBe(false)
      expect(
        notifications.some((notif) => {
          return notif.reason === 'quote' && notif.author.did === sc.dids.geoff
        }),
      ).toBe(false)
      expect(
        notifications.some((notif) => {
          return (
            notif.reason === 'mention' && notif.author.did === sc.dids.geoff
          )
        }),
      ).toBe(false)
    })

    it('does not apply to self.', async () => {
      const {
        data: { thread },
      } = await agent.app.gndr.feed.getPostThread(
        {
          uri: sc.posts[sc.dids.alice][0].ref.uriStr,
        },
        {
          headers: await network.serviceHeaders(
            sc.dids.geoff,
            ids.AppGndrFeedGetPostThread,
          ),
        },
      )
      assert(isThreadViewPost(thread))
      expect(
        thread.replies?.some((reply) => {
          return (
            isThreadViewPost(reply) && reply.post.author.did === sc.dids.geoff
          )
        }),
      ).toBe(true)
    })

    it('does not apply to followers.', async () => {
      const {
        data: { thread },
      } = await agent.app.gndr.feed.getPostThread(
        {
          uri: sc.posts[sc.dids.alice][0].ref.uriStr,
        },
        {
          headers: await network.serviceHeaders(
            sc.dids.bob, // follows geoff
            ids.AppGndrFeedGetPostThread,
          ),
        },
      )
      assert(isThreadViewPost(thread))
      expect(
        thread.replies?.some((reply) => {
          return (
            isThreadViewPost(reply) && reply.post.author.did === sc.dids.geoff
          )
        }),
      ).toBe(true)
    })
  })
})

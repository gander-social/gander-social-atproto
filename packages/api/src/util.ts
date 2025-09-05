import { z } from 'zod'
import { AtUri } from '@gander-social-atproto/syntax'
import { AppGndrActorDefs } from './client'
import { Nux } from './client/types/app/gndr/actor/defs'

export function sanitizeMutedWordValue(value: string) {
  return (
    value
      .trim()
      .replace(/^#(?!\ufe0f)/, '')
      // eslint-disable-next-line no-misleading-character-class
      .replace(/[\r\n\u00AD\u2060\u200D\u200C\u200B]+/, '')
  )
}

export function savedFeedsToUriArrays(
  savedFeeds: AppGndrActorDefs.SavedFeed[],
): {
  pinned: string[]
  saved: string[]
} {
  const pinned: string[] = []
  const saved: string[] = []

  for (const feed of savedFeeds) {
    if (feed.pinned) {
      pinned.push(feed.value)
      // saved in v1 includes pinned
      saved.push(feed.value)
    } else {
      saved.push(feed.value)
    }
  }

  return {
    pinned,
    saved,
  }
}

/**
 * Get the type of a saved feed, used by deprecated methods for backwards
 * compat. Should not be used moving forward. *Invalid URIs will throw.*
 *
 * @param uri - The AT URI of the saved feed
 */
export function getSavedFeedType(
  uri: string,
): AppGndrActorDefs.SavedFeed['type'] {
  const urip = new AtUri(uri)

  switch (urip.collection) {
    case 'app.gndr.feed.generator':
      return 'feed'
    case 'app.gndr.graph.list':
      return 'list'
    default:
      return 'unknown'
  }
}

export function validateSavedFeed(savedFeed: AppGndrActorDefs.SavedFeed) {
  if (!savedFeed.id) {
    throw new Error('Saved feed must have an `id` - use a TID')
  }

  if (['feed', 'list'].includes(savedFeed.type)) {
    const uri = new AtUri(savedFeed.value)
    const isFeed = uri.collection === 'app.gndr.feed.generator'
    const isList = uri.collection === 'app.gndr.graph.list'

    if (savedFeed.type === 'feed' && !isFeed) {
      throw new Error(
        `Saved feed of type 'feed' must be a feed, got ${uri.collection}`,
      )
    }
    if (savedFeed.type === 'list' && !isList) {
      throw new Error(
        `Saved feed of type 'list' must be a list, got ${uri.collection}`,
      )
    }
  }
}

export type Did = `did:${string}`

// @TODO use tools from @gander-social-atproto/did
export const isDid = (str: unknown): str is Did =>
  typeof str === 'string' &&
  str.startsWith('did:') &&
  str.includes(':', 4) &&
  str.length > 8 &&
  str.length <= 2048

export const asDid = (value: string): Did => {
  if (isDid(value)) return value
  throw new TypeError(`Invalid DID: ${value}`)
}

export const nuxSchema = z
  .object({
    id: z.string().max(64),
    completed: z.boolean(),
    data: z.string().max(300).optional(),
    expiresAt: z.string().datetime().optional(),
  })
  .strict()

export function validateNux(nux: Nux) {
  nuxSchema.parse(nux)
}

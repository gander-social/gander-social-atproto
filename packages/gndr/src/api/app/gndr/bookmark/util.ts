import { AtUri } from '@gander-social-atproto/syntax'
import { InvalidRequestError } from '@gander-social-atproto/xrpc-server'
import { ids } from '../../../../lexicon/lexicons'

export const validateUri = (uri: string) => {
  const atUri = new AtUri(uri)
  if (atUri.collection !== ids.AppGndrFeedPost) {
    throw new InvalidRequestError(
      `Only '${ids.AppGndrFeedPost}' records can be bookmarked`,
      'UnsupportedCollection',
    )
  }
}

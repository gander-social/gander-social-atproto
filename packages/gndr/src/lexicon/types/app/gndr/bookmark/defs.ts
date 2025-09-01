/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { type ValidationResult, BlobRef } from '@gander-social-atproto/lexicon'
import { CID } from 'multiformats/cid'
import { validate as _validate } from '../../../../lexicons'
import {
  type $Typed,
  is$typed as _is$typed,
  type OmitKey,
} from '../../../../util'
import type * as ComAtprotoRepoStrongRef from '../../../com/atproto/repo/strongRef.js'
import type * as AppGndrFeedDefs from '../feed/defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.gndr.bookmark.defs'

/** Object used to store bookmark data in stash. */
export interface Bookmark {
  $type?: 'app.gndr.bookmark.defs#bookmark'
  subject: ComAtprotoRepoStrongRef.Main
}

const hashBookmark = 'bookmark'

export function isBookmark<V>(v: V) {
  return is$typed(v, id, hashBookmark)
}

export function validateBookmark<V>(v: V) {
  return validate<Bookmark & V>(v, id, hashBookmark)
}

export interface BookmarkView {
  $type?: 'app.gndr.bookmark.defs#bookmarkView'
  subject: ComAtprotoRepoStrongRef.Main
  createdAt?: string
  item:
    | $Typed<AppGndrFeedDefs.BlockedPost>
    | $Typed<AppGndrFeedDefs.NotFoundPost>
    | $Typed<AppGndrFeedDefs.PostView>
    | { $type: string }
}

const hashBookmarkView = 'bookmarkView'

export function isBookmarkView<V>(v: V) {
  return is$typed(v, id, hashBookmarkView)
}

export function validateBookmarkView<V>(v: V) {
  return validate<BookmarkView & V>(v, id, hashBookmarkView)
}

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
import type * as AppGndrRichtextFacet from '../../../app/gndr/richtext/facet.js'
import type * as AppGndrEmbedRecord from '../../../app/gndr/embed/record.js'
import type * as ChatGndrActorDefs from '../actor/defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'chat.gndr.convo.defs'

export interface MessageRef {
  $type?: 'chat.gndr.convo.defs#messageRef'
  did: string
  convoId: string
  messageId: string
}

const hashMessageRef = 'messageRef'

export function isMessageRef<V>(v: V) {
  return is$typed(v, id, hashMessageRef)
}

export function validateMessageRef<V>(v: V) {
  return validate<MessageRef & V>(v, id, hashMessageRef)
}

export interface MessageInput {
  $type?: 'chat.gndr.convo.defs#messageInput'
  text: string
  /** Annotations of text (mentions, URLs, hashtags, etc) */
  facets?: AppGndrRichtextFacet.Main[]
  embed?: $Typed<AppGndrEmbedRecord.Main> | { $type: string }
}

const hashMessageInput = 'messageInput'

export function isMessageInput<V>(v: V) {
  return is$typed(v, id, hashMessageInput)
}

export function validateMessageInput<V>(v: V) {
  return validate<MessageInput & V>(v, id, hashMessageInput)
}

export interface MessageView {
  $type?: 'chat.gndr.convo.defs#messageView'
  id: string
  rev: string
  text: string
  /** Annotations of text (mentions, URLs, hashtags, etc) */
  facets?: AppGndrRichtextFacet.Main[]
  embed?: $Typed<AppGndrEmbedRecord.View> | { $type: string }
  /** Reactions to this message, in ascending order of creation time. */
  reactions?: ReactionView[]
  sender: MessageViewSender
  sentAt: string
}

const hashMessageView = 'messageView'

export function isMessageView<V>(v: V) {
  return is$typed(v, id, hashMessageView)
}

export function validateMessageView<V>(v: V) {
  return validate<MessageView & V>(v, id, hashMessageView)
}

export interface DeletedMessageView {
  $type?: 'chat.gndr.convo.defs#deletedMessageView'
  id: string
  rev: string
  sender: MessageViewSender
  sentAt: string
}

const hashDeletedMessageView = 'deletedMessageView'

export function isDeletedMessageView<V>(v: V) {
  return is$typed(v, id, hashDeletedMessageView)
}

export function validateDeletedMessageView<V>(v: V) {
  return validate<DeletedMessageView & V>(v, id, hashDeletedMessageView)
}

export interface MessageViewSender {
  $type?: 'chat.gndr.convo.defs#messageViewSender'
  did: string
}

const hashMessageViewSender = 'messageViewSender'

export function isMessageViewSender<V>(v: V) {
  return is$typed(v, id, hashMessageViewSender)
}

export function validateMessageViewSender<V>(v: V) {
  return validate<MessageViewSender & V>(v, id, hashMessageViewSender)
}

export interface ReactionView {
  $type?: 'chat.gndr.convo.defs#reactionView'
  value: string
  sender: ReactionViewSender
  createdAt: string
}

const hashReactionView = 'reactionView'

export function isReactionView<V>(v: V) {
  return is$typed(v, id, hashReactionView)
}

export function validateReactionView<V>(v: V) {
  return validate<ReactionView & V>(v, id, hashReactionView)
}

export interface ReactionViewSender {
  $type?: 'chat.gndr.convo.defs#reactionViewSender'
  did: string
}

const hashReactionViewSender = 'reactionViewSender'

export function isReactionViewSender<V>(v: V) {
  return is$typed(v, id, hashReactionViewSender)
}

export function validateReactionViewSender<V>(v: V) {
  return validate<ReactionViewSender & V>(v, id, hashReactionViewSender)
}

export interface MessageAndReactionView {
  $type?: 'chat.gndr.convo.defs#messageAndReactionView'
  message: MessageView
  reaction: ReactionView
}

const hashMessageAndReactionView = 'messageAndReactionView'

export function isMessageAndReactionView<V>(v: V) {
  return is$typed(v, id, hashMessageAndReactionView)
}

export function validateMessageAndReactionView<V>(v: V) {
  return validate<MessageAndReactionView & V>(v, id, hashMessageAndReactionView)
}

export interface ConvoView {
  $type?: 'chat.gndr.convo.defs#convoView'
  id: string
  rev: string
  members: ChatGndrActorDefs.ProfileViewBasic[]
  lastMessage?:
    | $Typed<MessageView>
    | $Typed<DeletedMessageView>
    | { $type: string }
  lastReaction?: $Typed<MessageAndReactionView> | { $type: string }
  muted: boolean
  status?: 'request' | 'accepted' | (string & {})
  unreadCount: number
}

const hashConvoView = 'convoView'

export function isConvoView<V>(v: V) {
  return is$typed(v, id, hashConvoView)
}

export function validateConvoView<V>(v: V) {
  return validate<ConvoView & V>(v, id, hashConvoView)
}

export interface LogBeginConvo {
  $type?: 'chat.gndr.convo.defs#logBeginConvo'
  rev: string
  convoId: string
}

const hashLogBeginConvo = 'logBeginConvo'

export function isLogBeginConvo<V>(v: V) {
  return is$typed(v, id, hashLogBeginConvo)
}

export function validateLogBeginConvo<V>(v: V) {
  return validate<LogBeginConvo & V>(v, id, hashLogBeginConvo)
}

export interface LogAcceptConvo {
  $type?: 'chat.gndr.convo.defs#logAcceptConvo'
  rev: string
  convoId: string
}

const hashLogAcceptConvo = 'logAcceptConvo'

export function isLogAcceptConvo<V>(v: V) {
  return is$typed(v, id, hashLogAcceptConvo)
}

export function validateLogAcceptConvo<V>(v: V) {
  return validate<LogAcceptConvo & V>(v, id, hashLogAcceptConvo)
}

export interface LogLeaveConvo {
  $type?: 'chat.gndr.convo.defs#logLeaveConvo'
  rev: string
  convoId: string
}

const hashLogLeaveConvo = 'logLeaveConvo'

export function isLogLeaveConvo<V>(v: V) {
  return is$typed(v, id, hashLogLeaveConvo)
}

export function validateLogLeaveConvo<V>(v: V) {
  return validate<LogLeaveConvo & V>(v, id, hashLogLeaveConvo)
}

export interface LogMuteConvo {
  $type?: 'chat.gndr.convo.defs#logMuteConvo'
  rev: string
  convoId: string
}

const hashLogMuteConvo = 'logMuteConvo'

export function isLogMuteConvo<V>(v: V) {
  return is$typed(v, id, hashLogMuteConvo)
}

export function validateLogMuteConvo<V>(v: V) {
  return validate<LogMuteConvo & V>(v, id, hashLogMuteConvo)
}

export interface LogUnmuteConvo {
  $type?: 'chat.gndr.convo.defs#logUnmuteConvo'
  rev: string
  convoId: string
}

const hashLogUnmuteConvo = 'logUnmuteConvo'

export function isLogUnmuteConvo<V>(v: V) {
  return is$typed(v, id, hashLogUnmuteConvo)
}

export function validateLogUnmuteConvo<V>(v: V) {
  return validate<LogUnmuteConvo & V>(v, id, hashLogUnmuteConvo)
}

export interface LogCreateMessage {
  $type?: 'chat.gndr.convo.defs#logCreateMessage'
  rev: string
  convoId: string
  message: $Typed<MessageView> | $Typed<DeletedMessageView> | { $type: string }
}

const hashLogCreateMessage = 'logCreateMessage'

export function isLogCreateMessage<V>(v: V) {
  return is$typed(v, id, hashLogCreateMessage)
}

export function validateLogCreateMessage<V>(v: V) {
  return validate<LogCreateMessage & V>(v, id, hashLogCreateMessage)
}

export interface LogDeleteMessage {
  $type?: 'chat.gndr.convo.defs#logDeleteMessage'
  rev: string
  convoId: string
  message: $Typed<MessageView> | $Typed<DeletedMessageView> | { $type: string }
}

const hashLogDeleteMessage = 'logDeleteMessage'

export function isLogDeleteMessage<V>(v: V) {
  return is$typed(v, id, hashLogDeleteMessage)
}

export function validateLogDeleteMessage<V>(v: V) {
  return validate<LogDeleteMessage & V>(v, id, hashLogDeleteMessage)
}

export interface LogReadMessage {
  $type?: 'chat.gndr.convo.defs#logReadMessage'
  rev: string
  convoId: string
  message: $Typed<MessageView> | $Typed<DeletedMessageView> | { $type: string }
}

const hashLogReadMessage = 'logReadMessage'

export function isLogReadMessage<V>(v: V) {
  return is$typed(v, id, hashLogReadMessage)
}

export function validateLogReadMessage<V>(v: V) {
  return validate<LogReadMessage & V>(v, id, hashLogReadMessage)
}

export interface LogAddReaction {
  $type?: 'chat.gndr.convo.defs#logAddReaction'
  rev: string
  convoId: string
  message: $Typed<MessageView> | $Typed<DeletedMessageView> | { $type: string }
  reaction: ReactionView
}

const hashLogAddReaction = 'logAddReaction'

export function isLogAddReaction<V>(v: V) {
  return is$typed(v, id, hashLogAddReaction)
}

export function validateLogAddReaction<V>(v: V) {
  return validate<LogAddReaction & V>(v, id, hashLogAddReaction)
}

export interface LogRemoveReaction {
  $type?: 'chat.gndr.convo.defs#logRemoveReaction'
  rev: string
  convoId: string
  message: $Typed<MessageView> | $Typed<DeletedMessageView> | { $type: string }
  reaction: ReactionView
}

const hashLogRemoveReaction = 'logRemoveReaction'

export function isLogRemoveReaction<V>(v: V) {
  return is$typed(v, id, hashLogRemoveReaction)
}

export function validateLogRemoveReaction<V>(v: V) {
  return validate<LogRemoveReaction & V>(v, id, hashLogRemoveReaction)
}

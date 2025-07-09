import {
  AppGndrEmbedExternal,
  AppGndrEmbedImages,
  AppGndrEmbedRecordWithMedia,
  AppGndrEmbedVideo,
  AppGndrFeedPost,
} from '@atproto/api'
import { ids } from '../lexicon/lexicons'
import { langLogger as log } from '../logger'
import { ContentTagger } from './content-tagger'

export class EmbedTagger extends ContentTagger {
  tagPrefix = 'embed:'

  isApplicable(): boolean {
    return (
      !!this.subjectStatus &&
      !this.tagAlreadyExists() &&
      this.subject.isRecord() &&
      this.subject.parsedUri.collection === ids.AppGndrFeedPost
    )
  }

  async buildTags(): Promise<string[]> {
    try {
      const recordValue = await this.getRecordValue()
      if (!recordValue) {
        return []
      }
      const tags: string[] = []
      const result = AppGndrFeedPost.validateRecord(recordValue)

      if (result.success) {
        const embedContent = AppGndrEmbedRecordWithMedia.isMain(
          result.value.embed,
        )
          ? result.value.embed.media
          : result.value.embed

        if (AppGndrEmbedImages.isMain(embedContent)) {
          tags.push(`${this.tagPrefix}image`)
        }

        if (AppGndrEmbedVideo.isMain(embedContent)) {
          tags.push(`${this.tagPrefix}video`)
        }

        if (AppGndrEmbedExternal.isMain(embedContent)) {
          tags.push(`${this.tagPrefix}external`)
        }
      }
      return tags
    } catch (err) {
      log.error({ subject: this.subject, err }, 'Error getting record langs')
      return []
    }
  }

  async getRecordValue(): Promise<Record<string, unknown> | undefined> {
    if (!this.subject.isRecord()) {
      return undefined
    }
    const recordByUri = await this.moderationService.views.fetchRecords([
      this.subject,
    ])

    const record = recordByUri.get(this.subject.uri)
    return record?.value
  }
}

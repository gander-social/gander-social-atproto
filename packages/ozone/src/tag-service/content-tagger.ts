import { ModerationService } from '../mod-service'
import { ModSubject } from '../mod-service/subject'
import { ModerationSubjectStatusRow } from '../mod-service/types'

export abstract class ContentTagger {
  protected abstract tagPrefix: string

  constructor(
    protected subject: ModSubject,
    protected subjectStatus: ModerationSubjectStatusRow | null,
    protected moderationService: ModerationService,
  ) {}

  async getTags(): Promise<string[]> {
    if (!this.isApplicable()) {
      return []
    }

    return this.buildTags()
  }

  protected abstract isApplicable(): boolean

  protected abstract buildTags(): Promise<string[]>

  protected tagAlreadyExists(): boolean {
    return Boolean(
      this.subjectStatus?.tags?.some((tag) => tag.startsWith(this.tagPrefix)),
    )
  }
}

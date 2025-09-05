/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { BlobRef } from '@gander-social-atproto/lexicon'
import { validate as _validate } from '../../../../lexicons'
import { is$typed as _is$typed, } from '../../../../util'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.gndr.video.defs'

export interface JobStatus {
  $type?: 'app.gndr.video.defs#jobStatus'
  jobId: string
  did: string
  /** The state of the video processing job. All values not listed as a known value indicate that the job is in process. */
  state: 'JOB_STATE_COMPLETED' | 'JOB_STATE_FAILED' | (string & {})
  /** Progress within the current processing state. */
  progress?: number
  blob?: BlobRef
  error?: string
  message?: string
}

const hashJobStatus = 'jobStatus'

export function isJobStatus<V>(v: V) {
  return is$typed(v, id, hashJobStatus)
}

export function validateJobStatus<V>(v: V) {
  return validate<JobStatus & V>(v, id, hashJobStatus)
}

import { ensureValidDid } from '@gander-social-atproto/syntax'

export function isValidDid(did: string) {
  try {
    ensureValidDid(did)
    return true
  } catch {
    return false
  }
}

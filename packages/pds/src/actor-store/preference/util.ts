const FULL_ACCESS_ONLY_PREFS = new Set([
  'app.gndr.actor.defs#personalDetailsPref',
])

export type PrefAllowedOptions = {
  hasAccessFull?: boolean
}

export function prefAllowed(
  prefType: string,
  options?: PrefAllowedOptions,
): boolean {
  if (options?.hasAccessFull === true) {
    return true
  }

  return !FULL_ACCESS_ONLY_PREFS.has(prefType)
}

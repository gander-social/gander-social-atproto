/**
 * Internal Package Re-exports
 * Centralizes commonly used internal workspace packages
 */

// Common utilities
export * from '@gander-social-atproto/common'
export * from '@gander-social-atproto/common-web'

// Core functionality
export * from '@gander-social-atproto/syntax'
export * from '@gander-social-atproto/lexicon'
export * from '@gander-social-atproto/crypto'
export * from '@gander-social-atproto/identity'

// XRPC
export * from '@gander-social-atproto/xrpc'
export * from '@gander-social-atproto/xrpc-server'

// Specific commonly used exports with aliases for clarity
export {
  // From common
  DAY,
  HOUR,
  MINUTE,
  SECOND,
  wait,
  bailableWait,
  createPromise,
  createDeferredPromise,
  parseIntWithFallback,
  noUndefinedVals,
  mapDefined,
} from '@gander-social-atproto/common'

export {
  // From common-web
  parseLanguage,
  validateLanguage,
  formatRecordKey,
  ensureValidRecordKey,
  ensureValidAtUri,
  normalizeAndValidateHandle,
} from '@gander-social-atproto/common-web'

export {
  // From syntax
  AtUri,
  AtIdentifier,
  NSID,
  isValidHandle,
  isValidDid,
  isValidNsid,
  isValidAtUri,
  isValidRecordKey,
  isValidCIDString,
} from '@gander-social-atproto/syntax'

export {
  // From lexicon
  Lexicons,
  BlobRef,
  jsonStringToLex,
  jsonToLex,
  lexToJson,
  stringifyLex,
} from '@gander-social-atproto/lexicon'

export {
  // From crypto
  Keypair,
  Secp256k1Keypair,
  P256Keypair,
  sha256,
  sha256Stream,
  verify,
  DidKey,
  parseDidKey,
} from '@gander-social-atproto/crypto'

export {
  // From identity
  IdResolver,
  MemoryCache,
  CacheResult,
  HandleResolver,
  DidResolver,
  ResolveHandleInput,
  ResolveDidInput,
  GetKeyInput,
} from '@gander-social-atproto/identity'

export {
  // From xrpc
  XrpcClient,
  ServiceClient,
} from '@gander-social-atproto/xrpc'

export {
  // From xrpc-server
  Server as XrpcServer,
  ServerConfig as XrpcServerConfig,
  AuthVerifier,
  StreamAuthVerifier,
  InvalidRequestError,
  AuthRequiredError,
  ForbiddenError,
  ServerError,
} from '@gander-social-atproto/xrpc-server'

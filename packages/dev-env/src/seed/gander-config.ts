// Gander Social seed configuration overrides
export const GANDER_SEED_CONFIG = {
  // Disable operations that require external services
  skipExternalDependencies: true,

  // Operations to skip
  skipOperations: {
    mutes: true,
    reports: true,
    takedowns: true,
    appeals: true,
    moderation: true,
  },

  // Use local mock services
  services: {
    pds: 'http://localhost:2583',
    bgs: 'http://localhost:2585',
    plc: 'http://localhost:2582',
    mod: null, // No moderation service for now
    reportService: null, // No report service
  },

  // Simplified seed data for development
  seedData: {
    users: 5, // Reduced from default
    posts: 20, // Reduced from default
    follows: 10,
    likes: 15,
    reposts: 5,
    // Skip complex operations
    mutes: 0,
    blocks: 0,
    reports: 0,
  },
}

import { runUpstreamTests } from './runUpstreamTests'

/**
 * Ensures that the test suite contains at least one test.
 * If runUpstreamTests is false, adds a dummy test that always passes.
 */
export function ensureTestSuiteHasTest() {
  if (!runUpstreamTests) {
    // @ts-ignore
    it('dummy test to prevent empty test suite', () => {
      // @ts-ignore
      expect(true).toBe(true)
    })
  }
}

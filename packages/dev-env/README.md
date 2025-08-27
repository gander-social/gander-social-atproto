# @atproto/dev-env: Local Developer Environment

A command-line application for developers to construct and manage development environments.

[![NPM](https://img.shields.io/npm/v/@atproto/dev-env)](https://www.npmjs.com/package/@atproto/dev-env)
[![Github CI Status](https://github.com/gander-social/atproto/actions/workflows/repo.yaml/badge.svg)](https://github.com/gander-social/atproto/actions/workflows/repo.yaml)

## REPL API

The following methods are available in the REPL.

### `status()`

List the currently active servers.

### `startPds(port?: number)`

Create a new PDS instance. Data is stored in memory.

### `stop(port: number)`

Stop the server at the given port.

### `mkuser(handle: string, pdsPort?: number)`

Create a new user.

### `user(handle: string): ServiceClient`

Get the `ServiceClient` for the given user.

If you want to run a fully native dev environment, move docker-compose.dev-env-native.yml to docker-compose.dev-env.yml in 
the root of the project. Ensure that you copy the docker-compose.dev-env.yml to the dev-env as docker-compose.dev-env-hybrid.yml.

Add back in to package.json the following with scripts start & dev inside the quotations:

../dev-infra/with-test-redis-and-db.sh

## License

This project is dual-licensed under MIT and Apache 2.0 terms:

- MIT license ([LICENSE-MIT.txt](https://github.com/gander-social/atproto/blob/main/LICENSE-MIT.txt) or http://opensource.org/licenses/MIT)
- Apache License, Version 2.0, ([LICENSE-APACHE.txt](https://github.com/gander-social/atproto/blob/main/LICENSE-APACHE.txt) or http://www.apache.org/licenses/LICENSE-2.0)

Downstream projects and end users may choose either license individually, or both together, at their discretion. The motivation for this dual-licensing is the additional software patent assurance provided by Apache 2.0.

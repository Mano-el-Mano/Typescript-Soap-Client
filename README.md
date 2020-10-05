<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#5" alt="Coverage" /></a>

</p>

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Requirements

* [node](https://nodejs.org/en/)
* [yarn](https://yarnpkg.com/)

#### Optional

* [npx](https://github.com/npm/npx)
* [docker](https://www.docker.com/)

Before the app can be run, create an `.env` file based on `.env.example`. 

## Installation

```bash
$ yarn
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod

# docker development
$ docker-compose up
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## Code style

The repo is opinionated about code style. On every commit the set of checks defined in eslintrc is run, and on every push the test suit is run (both checks implemented using [husky](https://github.com/typicode/husky)).

## Dependencies

The repo is built around [Nest](https://github.com/nestjs/nest) and tries to follow its best practices. In any argument, the official docs must lead the final decision.

**Every time the project is opened, making a PR with bumped dependencies should be considered (`yarn bump` is added for convenience).**

## Docker

Every service is provided with simple docker starter.

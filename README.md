# Componentia

![Github Release](https://github.com/akashahmad/componentia/actions/workflows/CI.yml/badge.svg)

This Project uses [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

## Development

**Prerequisites:** Node.js (see version specified in `.nvmrc`), Yarn v3+ (see version specified in `.yarnrc`)

### One-time setup

First, ensure you have [nvm](https://github.com/nvm-sh/nvm/blob/master/README.md) (Node Version Manager) installed.

After cloning this repo, run:

-   `nvm install` to install the required [node](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) version.
-   `nvm use` to use the required Node version for development.
-   `yarn install` to install the dependencies.
-   `yarn postinstall` to setup [husky](https://typicode.github.io/husky/) and [lint-staged](https://www.npmjs.com/package/lint-staged).
-   `yarn start` to start storybook and watch the output while you are developing.

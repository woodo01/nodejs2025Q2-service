**This PR is a migration of a [PR](https://github.com/woodo01/nodejs2024Q3-service/pull/3) from the previous course**

# Home Library Service

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

## Downloading

```shell
git clone https://github.com/woodo01/nodejs2025Q2-service.git
```

### Change directory
```shell
cd nodejs2025Q2-service
```

### Switch branch
```shell
git checkout develop
```

### Install NPM modules
```shell
npm install
```

## Running application
```shell
npm run start
```

After starting the app on port (4000 as default) you can open
in your browser OpenAPI documentation by typing http://localhost:4000/doc/.
For more information about OpenAPI/Swagger please visit https://swagger.io/.

## Testing

After application running open new terminal and enter:

To run all tests without authorization

```
npm run test
```

To run only one of all test suites

```
npm run test -- <path to suite>
```

To run all test with authorization

```
npm run test:auth
```

To run only specific test suite with authorization

```
npm run test:auth -- <path to suite>
```

### Auto-fix and format

```
npm run lint
```

```
npm run format
```

### Debugging in VSCode

Press <kbd>F5</kbd> to debug.

For more information, visit: https://code.visualstudio.com/docs/editor/debugging

## App in Docker

To up app
```bash
npm run docker:compose
```

Dev mode
```bash
npm run docker:compose:dev
```

To run tests
```bash
npm run test
```

To scan vulnerabilities
```bash
npm run docker:scan
```

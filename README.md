# @barchart/events-public

[![AWS CodeBuild](https://codebuild.us-east-1.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoiK2ZWQjNjVVlmMXFQOEJDUjd3SDcxRDI3QUV6NjdFNndoZDRPTjJSa040TDhOMFNpUzdyUXoxVHdha2k0RVlGMW54NjVTVHNhaHNsbzBPdVFhL0h5dFkwPSIsIml2UGFyYW1ldGVyU3BlYyI6IlVGdVpuckREUlRXSVY4LzYiLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=master)](https://github.com/barchart/events-public)
[![Lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

Public packages for the Barchart Usage Tracking System.

### Packages

* [events-client-js](./packages/sdk-js) - JavaScript SDK. Simplifies interaction with backend.
* [events-api-common](./packages/common-js) - Shared JavaScript code, used by the SDK and backend.

### Tools

* [Yarn](https://classic.yarnpkg.com/en/) and [Lerna](https://lerna.js.org/) are used for dependency management.

### Publishing

```shell
yarn install
yarn run bump
lerna publish from-package
```

### Related Repositories

* [@barchart/events-private](https://github.com/barchart/events-private) - Private packages for the usage-tracking system, including [Serverless](https://www.serverless.com/) applications.

### License

This software is provided under the MIT license.

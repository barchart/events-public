# @barchart/events-public

[![AWS CodeBuild](https://codebuild.us-east-1.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoiK2ZWQjNjVVlmMXFQOEJDUjd3SDcxRDI3QUV6NjdFNndoZDRPTjJSa040TDhOMFNpUzdyUXoxVHdha2k0RVlGMW54NjVTVHNhaHNsbzBPdVFhL0h5dFkwPSIsIml2UGFyYW1ldGVyU3BlYyI6IlVGdVpuckREUlRXSVY4LzYiLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=master)](https://github.com/barchart/events-public)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

Public packages for the Barchart Usage Tracking System.

### Packages

* [events-client-js](https://github.com/barchart/events-public/tree/master/packages/sdk-js) - JavaScript SDK for Barchart's Event Tracking System.
* [events-api-common](https://github.com/barchart/events-public/tree/master/packages/common-js) - A library of shared JavaScript code used by the Barchart Event Tracking System and client SDK.

### Tools

* [Yarn](https://classic.yarnpkg.com/en/) and [Lerna](https://lerna.js.org/) are used for dependency management.

### Publishing

```shell
yarn install
yarn run bump
lerna publish from-package
```

### Related Repositories

* [@barchart/events-private](https://github.com/barchart/events-private) - Private services for the events system.

### License

This software is provided under the MIT license.

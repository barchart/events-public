# @barchart/events-public

[![AWS CodeBuild](https://codebuild.us-east-1.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoiK2ZWQjNjVVlmMXFQOEJDUjd3SDcxRDI3QUV6NjdFNndoZDRPTjJSa040TDhOMFNpUzdyUXoxVHdha2k0RVlGMW54NjVTVHNhaHNsbzBPdVFhL0h5dFkwPSIsIml2UGFyYW1ldGVyU3BlYyI6IlVGdVpuckREUlRXSVY4LzYiLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=master)](https://github.com/barchart/events-public)
[![Lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

**Public packages** for the _Barchart Usage Tracking System_.

### Packages

* [events-client-js](./packages/sdk-js) - JavaScript SDK. Simplifies interaction with backend.
* [events-api-common](./packages/common-js) - Shared JavaScript code, used by the SDK and backend.

### Development

If you are working on packages within this repository, please follow these procedures for release:

* Ensure dependencies are up-to-date.
* Scan the code for lint.
* Create a new file in the ```.releases``` folder and commit it.
* Bump the software version across all ```package.json``` files and tag the repository.
* Use the release notes and tag to create a [GitHub Release](https://github.com/barchart/events-public/releases).
* Finally, publish the packages to NPM.

In other words, execute the following:

```shell
yarn install
yarn run lint
yarn run bump
lerna publish from-package
```

### License

This software is provided under the MIT license.

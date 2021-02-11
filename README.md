# @barchart/events-public

[![AWS CodeBuild](https://codebuild.us-east-1.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoiK2ZWQjNjVVlmMXFQOEJDUjd3SDcxRDI3QUV6NjdFNndoZDRPTjJSa040TDhOMFNpUzdyUXoxVHdha2k0RVlGMW54NjVTVHNhaHNsbzBPdVFhL0h5dFkwPSIsIml2UGFyYW1ldGVyU3BlYyI6IlVGdVpuckREUlRXSVY4LzYiLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=master)](https://github.com/barchart/events-public)
[![Lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

Public packages for the _Barchart Usage Tracking Service_ — a simple tool for collecting and reporting usage statistics.

### Packages

* [common-js](./packages/common-js) - Shared JavaScript package, used by the SDK and backend — published to [NPM](https://www.npmjs.com/package/@barchart/events-api-common).
* [sdk-js](./packages/sdk-js) - JavaScript SDK which simplifies interaction with the backend — published to [NPM](https://www.npmjs.com/package/@barchart/events-client-js).

### Releases

If you are working on packages within this repository, use the following procedure to release changes:

* Ensure dependencies are up-to-date.
* Scan the code for lint.
* Create a new file in the ```.releases``` folder and commit it.
* Bump the software version across all ```package.json``` files and tag the repository.
* Create a [GitHub Release](https://github.com/barchart/events-public/releases) based on the tag and add the release notes.
* Finally, publish the packages to NPM.

In other words, execute the following:

```shell
yarn install
yarn run lint
yarn run release
```

### License

This software is provided under the MIT license.

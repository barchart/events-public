# @barchart/events-api-common

[![AWS CodeBuild](https://codebuild.us-east-1.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoicXh1c2JCQUxUczU5YTZrUnN0QVNTaTl0VDlQSElobFh4QS9ua2FJZnkvZW1kL0RXVzlub1FqM0d5M3ovNjNydUROTUpzK3FtT0pWSTBRZzFYTk83THBBPSIsIml2UGFyYW1ldGVyU3BlYyI6IkYzL1pjVmlYakp6SEN6VTMiLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=master)](https://github.com/barchart/events-api-common)

A *public* library of shared JavaScript code used by the [Barchart Event Tracking System](https://github.com/barchart/aws-lambda-events) and client SDK.

### Overview

Simply put, this project contains code that runs on both the servers (i.e. Serverless applications) and clients (e.g. browser, mobile, etc).

#### [/lib/data/serialization](https://github.com/barchart/events-api-common/tree/master/lib/data/serialization)

Data is passed between client and server in JSON format. However, the code works with more complex types. For example, [```Decimal```](https://github.com/barchart/barchart-common-js/blob/master/lang/Decimal.js) instances are used in place of [native JavaScript floats](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) and [```Day```](https://github.com/barchart/barchart-common-js/blob/master/lang/Day.js) instances are used instead of [native JavaScript Dates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date).

So, before data is exchanged, it must be converted to pure JSON. Conversely, when data is received, as pure JSON, its translated into more complex types before use. This is facilitated by the [```Schema```](https://github.com/barchart/barchart-common-js/blob/master/serialization/json/Schema.js) definitions which build custom "reviver" functions for [JSON parsing](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse).

### Notable Consumers

* [@barchart/aws-lambda-events](https://github.com/barchart/aws-lambda-events) - Serverless applications (i.e. the backend)
* [@barchart/events-client-js](https://github.com/barchart/events-client-js) - JavaScript SDK for communicating with the backend.

### Package Managers

This library has been published as a *public* module to NPM as [@barchart/events-api-common](https://www.npmjs.com/package/@barchart/events-api-common).

```shell
npm install @barchart/events-api-common -S
```


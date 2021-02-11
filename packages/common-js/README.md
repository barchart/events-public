# @barchart/events-api-common

[![NPM](https://img.shields.io/npm/v/@barchart/events-api-common)](https://www.npmjs.com/package/@barchart/events-api-common)

A *public* library of JavaScript code used Barchart Event Tracking Service — a simple tool for collecting and reporting usage statistics.

### Overview

Simply put, this project contains code that runs on both the servers (i.e. Serverless applications) and clients (e.g. browser, mobile, etc).

#### [/lib/data/serialization](https://github.com/barchart/events-public/tree/master/packages/common-js/lib/data/serialization)

Data is passed between client and server in JSON format. However, the code works with more complex types. For example, [```Decimal```](https://github.com/barchart/barchart-common-js/blob/master/lang/Decimal.js) instances are used in place of [native JavaScript floats](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) and [```Day```](https://github.com/barchart/barchart-common-js/blob/master/lang/Day.js) instances are used instead of [native JavaScript Dates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date).

So, before data is exchanged, it must be converted to pure JSON. Conversely, when data is received, as pure JSON, it's translated into more complex types before use. This is facilitated by the [```Schema```](https://github.com/barchart/barchart-common-js/blob/master/serialization/json/Schema.js) definitions which build custom "reviver" functions for [JSON parsing](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse).

### Notable Consumers

* [@barchart/events-private](https://github.com/barchart/events-private) - Serverless applications (i.e. the backend).
* [@barchart/events-client-js](https://github.com/barchart/events-public/tree/master/packages/sdk-js) - JavaScript SDK for communicating with the backend.

### Package Managers

This library has been published as a *public* module to NPM as [@barchart/events-api-common](https://www.npmjs.com/package/@barchart/events-api-common).

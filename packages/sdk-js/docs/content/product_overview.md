**This SDK connects your software to the Barchart Event Tracking Service -- a simple tool for collecting usage statistics.**

## Event Definition

The concept of an event is intuitive.

* An event occurs during the execution of software.
* An event occurs at a specific moment in time.
* An event are categorized by type (e.g. lightning struck).
* An event can include contextual information (e.g. the voltage of a lightning strike).

## Event Tracking

Your software identifies events as they occur. It sends information regarding these events to the Barchart Event Tracking Service which records the data, making it available for subsequent query.

**Embedded within your software, this SDK simplifies the process of transmitting event data to the backend.**

## Event Analysis

The Barchart Event Tracking Service can emit a listing of events, filtered according to your criteria. However, statistical analysis and visualization must be performed by external tools (e.g. [Tableau](https://www.tableau.com/) or [Grafana](https://grafana.com/)).

**Embedded within your software, this SDK simplifies the process of requesting and downloading reports from the backend.**

## Supported Environments

This SDK is intended for use in JavaScript environments.

#### Web Browsers

The SDK can be distributed as part of your browser-based applications. The source code is written in [ES2018](https://en.wikipedia.org/wiki/ECMAScript#9th_Edition_%E2%80%93_ECMAScript_2018). Consequently, transpilation (or polyfill use) is recommended before distribution.

#### Node.js

This SDK is compatible with Node.js.

#### Direct Access

The remote service implements a REST interface. If desired, you may bypass this SDK entirely. The interface is documented with [OpenAPI](https://www.openapis.org/). See the [API Reference](/content/api_reference) section for more details.
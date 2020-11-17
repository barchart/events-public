# API Reference

## Event API 1.3.0 {docsify-ignore}
    
> The Barchart Event Tracking System collects usage statistics from various software systems.

## OpenAPI Definition {docsify-ignore}

[Download](static/openapi.yaml)

## Contents {docsify-ignore}

* [Servers](#Servers)
* [Components](#Components)
* [Paths](#Paths)
* [Try Me](#tryme)

## Servers {docsify-ignore}

* [https://events-stage.aws.barchart.com](https://events-stage.aws.barchart.com)  - Hostname for stage environment.
* [https://events.aws.barchart.com](https://events.aws.barchart.com)  - Hostname for production environment.

## Components {docsify-ignore}

### Responses 

* [ServerError](/content/api/components?id=responsesServerError)
* [Unauthorized](/content/api/components?id=responsesUnauthorized)

### Schemas 

* [Event](/content/api/components?id=schemasEvent)
* [EventFull](/content/api/components?id=schemasEventFull)
* [ReportFilter](/content/api/components?id=schemasReportFilter)
* [ReportStatus](/content/api/components?id=schemasReportStatus)

### Security 

* [Basic](/content/api/components?id=securityBasic)

## Paths {docsify-ignore}

* [POST /events](/content/api/paths?id=post-events)
* [POST /reports](/content/api/paths?id=post-reports)
* [GET /reports/{source}/availability](/content/api/paths?id=get-reportssourceavailability)
* [GET /reports/{source}](/content/api/paths?id=get-reportssource)
* [GET /system/version](/content/api/paths?id=get-systemversion)

## Try Me :id=tryme {docsify-ignore}

**Try Me** page allows anyone to interact with the API’s resources without having any of the implementation logic in place. It’s automatically generated from a OpenAPI Specification, with the visual documentation making it easy for back end implementation and client side consumption.

> You can test the API by following link: [Try Me](content/api/try)

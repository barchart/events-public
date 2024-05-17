# API Reference

## Event API 5.2.0 {docsify-ignore}
    
> The Barchart Event Tracking System collects usage statistics from various software systems.

## OpenAPI Definition {docsify-ignore}

[Download](static/openapi.yaml)

## Contents {docsify-ignore}

* [Servers](#Servers)
* [Components](#Components)
* [Paths](#Paths)

## Servers {docsify-ignore}

* [https://events-stage.aws.barchart.com](https://events-stage.aws.barchart.com)  - Hostname for the staging (test) environment.
* [https://events.aws.barchart.com](https://events.aws.barchart.com)  - Hostname for the production environment.

## Components {docsify-ignore}

### Responses 

* [ServerError](/content/api/components?id=responsesServerError)
* [Unauthorized](/content/api/components?id=responsesUnauthorized)

### Schemas 

* [Event](/content/api/components?id=schemasEvent)
* [EventFull](/content/api/components?id=schemasEventFull)
* [ReportFilter](/content/api/components?id=schemasReportFilter)
* [ReportStatus](/content/api/components?id=schemasReportStatus)
* [Service](/content/api/components?id=schemasService)

### Security 

* [Basic](/content/api/components?id=securityBasic)


## Paths {docsify-ignore}

* [POST /events](/content/api/paths?id=post-events)
* [POST /reports](/content/api/paths?id=post-reports)
* [GET /reports/{source}/availability](/content/api/paths?id=get-reportssourceavailability)
* [GET /reports/{source}](/content/api/paths?id=get-reportssource)
* [GET /service/version](/content/api/paths?id=get-serviceversion)
* [GET /service/authenticate](/content/api/paths?id=get-serviceauthenticate)

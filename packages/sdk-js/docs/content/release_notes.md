# Release Notes

## 4.0.1
**Other**

* Minor updates to documentation. No functional changes. No breaking changes.

## 4.0.0
**Breaking Changes**

* Adapted the `ReportGateway` to comply with a new major version of the remote API. While classified as a "breaking change," this update should be transparent to the consumer.

## 3.3.1
**Bug Fixes**

* Removed `alertId` attribute from `EventType.ALERT_DELETED_ALL` definition.

## 3.1.1
**Technical Enhancements**

* Upgraded the [@barchart/common-js](https://github.com/barchart/common-js) library to the next major version.

## 3.1.0
**New Features**

* Added new `ProductType` for the Barchart Alerting Service.
* Added several `EventType` items for the Barchart Alerting Service.

**Bug Fixes**

* Added new second enumeration item to correct for misspelling of `ENTITLEMWENTS_AUTHORIZATION_FAILED` item.

## 3.0.3
**Other**

* Minor updates to documentation. No functional changes. No breaking changes.

## 3.0.0
**Other**

* Bumped major version because GitHub repository moved. No functional changes. No breaking changes.


## 2.1.0
**New Features**

* Added support for `ENTITLEMENTS` product.

## 2.0.2
**Other**

* Update SDK documentation (adding `Import` and `File` attributes).

## 2.0.1
**Other**

* Added ```openapi.yaml``` file, defining the remote web service. Updated documentation to include [API Reference](https://docs.barchart.com/events-client-js/#/content/api_reference) section.
* Completed [Key Concepts: Event Export](https://docs.barchart.com/events-client-js/#/content/concepts/event_export) section of documentation.
* Updated SDK documentation for ```EventGateway``` and ```ReportGateway``` classes, adding documentation for data structures.
* General improvements to documentation wording and format.


## 2.0.0
**Breaking Changes**

* The ```lib/meta.js``` file was removed and replaced with the ```lib/index.js``` file.

**New Features**

* Added support for [cmdtyView](https://www.barchart.com/cmdty/trading/cmdtyview) trading platform.

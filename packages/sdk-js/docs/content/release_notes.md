# Release Notes

## 4.1.0
**New Features**

* Added validators for the `EventType`.

## 4.0.1
**Other**

* Minor updates to documentation. No functional changes. No breaking changes.

## 4.0.0
**Breaking Changes**

* Adapted the `ReportGateway` to comply with a new major version of the remote API. This update should be transparent to the user.

## 3.3.6
**Other**

* Modified release script to automatically update the API version embedded in `openapi.yaml` file.

## 3.3.5
**Other**

* Improved build process (which uses the [Lerna](https://lerna.js.org/) version and publish commands).

## 3.3.1
**Bug Fixes**

* Removed `alertId` attribute from `EventType.ALERT_DELETED_ALL` definition.

## 3.3.0
**New Features**

* Added new `EventType` items for the Barchart Alerting Service.

## 3.2.0
**New Features**

* Added a new `ProductType` for Barchart Alerting Service for `sdk-js` example page.

## 3.1.2
**Other**

* Updated hyperlinks in the documentation site to refer to the correct GitHub repository.

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
**No Functional Changes**

* Use correct URL for GitHub source code on documentation site.

## 3.0.0
**Other**

* Packages consolidated from other repositories. Synchronized version numbers (with major version bump). No breaking changes for consumers.


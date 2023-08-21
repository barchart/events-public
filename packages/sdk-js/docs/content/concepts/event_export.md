Events can be exported for analysis by external tools (e.g. [Tableau](https://www.tableau.com/) or [Grafana](https://grafana.com/)).

It can take the remote service several minutes to generate an export file. So, report generation is broken into three steps:

* Send a request to begin the report,
* Periodically check on the report status, and
* Download the report, once complete.

## Security

Exporting data requires authentication. **Contact Barchart to obtain your username and password.**

#### Using the SDK

When you create a ```ReportGateway``` you will need to provide credentials in the following format:

```js
const credentials = {
	username: 'my-username',
	password: 'my-password'
};
```

#### Using the API

The web service uses [basic authentication](https://en.wikipedia.org/wiki/Basic_access_authentication) to validate your identity.

Assuming:

* Username: bryan
* Password: green-eggs-and-spam

**First** combine the username and password, separating them with a colon:

```
bryan:green-eggs-and-spam
```

**Then** [base64 encode](https://en.wikipedia.org/wiki/Base64) the entire string, yielding the following output:

```
YnJ5YW46Z3JlZW4tZWdncy1hbmQtc3BhbQ==
```

**Finally** include this encoded string in your HTTP request, as an ```Authorization``` header:

```
Authorization: Basic YnJ5YW46Z3JlZW4tZWdncy1hbmQtc3BhbQ==
```

## Environments

Two environments exist. Here are the hostnames:

* **staging** — used for testing purposes @ events-stage.aws.barchart.com
* **production** — used to query "real" data @ events.aws.barchart.com

## Report Gateway

If you are using the SDK, the ```ReportGateway``` class handles communication with the remote service on your behalf, obtain an instance as follows:

```js
const ReportGateway = require('@barchart/events-client-js/lib/gateway/ReportGateway');

ReportGateway.forStaging({ username: 'my-username', password: 'my-password' })
	.then((reportGateway) => {
		// ready ...
	});
```

or

```js
const ReportGateway = require('@barchart/events-client-js/lib/gateway/ReportGateway');

ReportGateway.forProduction({ username: 'my-username', password: 'my-password' })
	.then((reportGateway) => {
		// ready ...
	});
```

## Report Start

To begin a new export, provide the following filter criteria:

**REQUIRED:**

* The **customer** -- see the [CustomerType](https://github.com/barchart/events-public/tree/master/packages/common-js/lib/data/CustomerType.js) enumeration
* The **product** -- see the [ProductType](https://github.com/barchart/events-public/tree/master/packages/common-js/lib/data/ProductType.js) enumeration

**OPTIONAL:**

* A **start** time
* An **end** time

#### Using the SDK

```js
const CustomerType = require('@barchart/events-api-common/lib/data/CustomerType'),
	ProductType = require('@barchart/events-api-common/lib/data/ProductType'),
	Timestamp = require('@barchart/common-js/lang/Timestamp');

const criteria = { };

criteria.customer = CustomerType.BARCHART;
criteria.product = ProductType.WATCHLIST;
criteria.end = Timestamp.now();
criteria.start = criteria.end.add(-1 * 60 * 60 * 1000); // an hour ago

reportGateway.startReport(criteria)
	.then((result) => {
		console.log(`Job ID [ ${result.source} ] is [ ${result.status.code} ]`);
	});
```

#### Using the API

Refer to the [API Reference](content/api/paths?id=post-reports) section for more details.

Here is a sample [cURL](https://curl.haxx.se/) request; however it will return an [HTTP 401](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401) error (because these particular credentials are invalid).

```shell
curl 'https://events-stage.aws.barchart.com/reports' \
  -X 'POST' \
  -H 'Accept: application/json' \
  -H 'Content-Type: application/json;charset=UTF-8' \
  -H 'authorization: Basic YnJ5YW46Z3JlZW4tZWdncy1hbmQtc3BhbQ==' \
  --data-binary '{"filter":{"customer":"BARCHART","product":"WATCHLIST","start":1599858207242,"end":1599861807242}}'
```

## Report Progress

Once a report has been started, we can check its progress, as follows:

#### Using the SDK

```js
const EventJobStatus = require('@barchart/events-api-common/lib/data/EventJobStatus');

reportGateway.getReportAvailability(source)
	.then((result) => {
		if (result.status === EventJobStatus.RUNNING) {
			// Still running, check back again.
		} else if (result.status === EventJobStatus.COMPLETE) {
			// Ready for download.
		} else if (result.status === EventJobStatus.TIMEOUT) {
			// Too many records. Try narrowing the date range.
		} else if (result.status === EventJobStatus.FAILED) {
			// Check your input and try again. If all else fails, contact support.
		}
	});
```

#### Using the API

Refer to the [API Reference](content/api/paths?id=get-reportssourceavailability) section for more details.

Here is a sample [cURL](https://curl.haxx.se/) request; however it will return an [HTTP 401](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401) error (because these particular credentials are invalid and the ```source``` identifier does not exist).

```
curl 'https://events-stage.aws.barchart.com/reports/JOB-cb08e3f5-2669-46e9-93e9-d6cb175d3497/availability' \
  -X 'GET' \
  -H 'Accept: application/json' \
  -H 'authorization: Basic YnJ5YW46Z3JlZW4tZWdncy1hbmQtc3BhbQ=='
```

## Report Download

Once the report is complete, you can access a secure download link. This link will be valid for 15 minutes. After 15 minutes, the link will not work; hwoever, you can get another link for the report, if desired.

**Caution:** Anyone with this link can access the report (within the 15 minute window).

#### Using the SDK

```js
reportGateway.getReport(source)
	.then((result) => {
		const url = result.link; // Use to download...
	});
```

#### Using the API

Refer to the [API Reference](content/api/paths?id=get-reportssource) section for more details.

Here is a sample [cURL](https://curl.haxx.se/) request; however it will return an [HTTP 401](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401) error (because these particular credentials are invalid and the ```source``` identifier does not exist).

```shell
curl 'https://events-stage.aws.barchart.com/reports/JOB-cb08e3f5-2669-46e9-93e9-d6cb175d3497' \
  -X 'GET' \
  -H 'Accept: application/json' \
  -H 'authorization: Basic YnJ5YW46Z3JlZW4tZWdncy1hbmQtc3BhbQ=='
```

The result of this request will be a JSON document, containing a link to the actual file. This link will only be valid for 15 minutes. After 15 minutes elapses, you'll need to retrieve a new link (by calling the "report download" endpoint again).

## Report Format

Export files are pipe-delimited, plain text files which have "csv" file extensions. Inside the file, every row represents a discrete event. Columns used for different product types are slightly different (see the [ProductType](https://github.com/barchart/events-public/tree/master/packages/common-js/lib/data/ProductType.js) enumeration and [EventType](https://github.com/barchart/events-public/tree/master/packages/common-js/lib/data/EventType.js) enumeration).

**COMMON COLUMNS:**

* [1] timestamp - The millisecond-style [Unix time](https://en.wikipedia.org/wiki/Unix_time) at which the event occurred.
* [2] type - A description of the event type (e.g. WATCHLIST-CREATED or PORTFOLIO-DELETED).

**WATCHLIST COLUMNS:**

* [3] userId - The identifier of the user who triggered the event.
* [4] watchlistId - The identifier of the watchlist which was affected by the event.
* [5] symbol - The symbol which the event pertains to.
* [6] viewName - The name of the watchlist view which the event pertains to.
* [7] viewType - The type of watchlist view which the event pertains to.
* [8] dataMode - The data mode which the event pertains to.
* [9] classFilter - The asset class the event pertains to.

**PORTFOLIO COLUMNS:**

* [3] userId - The identifier of the user who triggered the event.
* [4] portfolioId - The identifier of the portfolio which was affected by the event.
* [5] positionId - The identifier of the position which was affected by the event.
* [6] frame - The time "frame" of the position which was affected by the event.
* [7] viewName - The name of the portfolio view which the event pertains to.
* [8] showClosedPositions - Indicates the state of "show closed positions" checkbox related to the event.
* [9] dividendStrategy - Indicates "dividend strategy" associated with the event.
* [10] cashAdjustmentStrategy - Indicates "cash adjustment" strategy associated with the event.

**ALERTING COLUMNS:**

* [3] userId - The identifier of the user who triggered the event.
* [4] alertId - The identifier of alert which was affected by the event.

**CMDTYVIEW COLUMNS:**

* [3] userId - The identifier of the user who triggered the event.
* [4] sessionId - The identifier of session which was affected by the event.
* [5] browser - Ad hoc description of the the browser used when the event occurred by the event.
* [6] workspace - The workspace that was activated when the event occurred.
As events occur, they are transmitted to the backend.

## Environments

Two environments exist. Here are the hostnames:

* **staging** — used for testing purposes @ events-stage.aws.barchart.com
* **production** — used to store "real" data @ events.aws.barchart.com

## Event Gateway

If you are using the SDK, the ```EventGateway``` class handles communication with the remote service on your behalf. Connect to the appropriate environment, as follows:

```js
const EventGateway = require('@barchart/events-client-js/lib/gateway/EventGateway');

EventGateway.forStaging()
	.then((eventGateway) => {
		// ready ...
	});
```

or

```js
const EventGateway = require('@barchart/events-client-js/lib/gateway/EventGateway');

EventGateway.forProduction()
	.then((eventGateway) => {
		// ready ...
	});
```

## Immediate Capture

Assuming you have defined an event as described in the [Key Concepts: Event Structure](content/concepts/event_structure) section, it can be sent to the remote service as follows:

#### Using the SDK

```js
const events = [ eventA, eventB, eventC ];

eventGateway.createEvents(events)
	.then((created) => {
		console.log(`Sent [ ${created.length} ] event(s) to the Barchart Event Tracking Service.`);
	});
```

#### Using the API

Refer to the [API Reference](content/api/paths?id=post-events) section for details. Here is a sample [cURL](https://curl.haxx.se/) request:

```shell
curl 'https://events-stage.aws.barchart.com/events' \
  -X 'POST' \
  -H 'Accept: application/json' \
  -H 'Content-Type: application/json;charset=UTF-8' \
  --data-binary '{"events":[{"customer":"BARCHART","product":"WATCHLIST","type":"WATCHLIST-SYMBOL-ADDED","timestamp":1599482731026,"context":["user-123","watchlist-456","AAPL"]}]}'
```

## Buffered Capture

Depending on the number of events which your software generates, it may be advisable to buffer communication with the remote service.

#### Using the SDK

The ```EventBarcher``` utility accepts events and periodically sends them to the remote service.

Here is an example:

```js
const EventBatcher = require('@barchart/events-client-js/lib/engine/EventBatcher');

const batcher = new EventBatcher(eventGateway);

batcher.push(eventA);
batcher.push(eventB);
batcher.push(eventC);
```

#### Using the API

Since you are handling communication with the service, you will need to devise a mechanism to buffer requests.


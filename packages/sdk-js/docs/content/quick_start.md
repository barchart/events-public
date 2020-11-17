## Setup

As a consumer of the Barchart Event Tracking Service, you have two options:

1. Communicate with the backend _by embedding this SDK in your software_, or
2. Communicate with the backend _by invoking the REST API directly_.

**If you choose to use the SDK**, you can install it from NPM (Node Package Manager).

```shell
npm install @barchart/events-client-js -S
```

**If you choose not to use the SDK**, please finish reviewing this page, then refer to the [API Reference](/content/api_reference) section.

## Connecting

#### Environments

Pick an environment:

* The **staging** environment is intended for integration testing.
* The **production** environment is intended for use with production software.

#### Using the SDK

Use the appropriate static functions create an ```EventGateway``` instance:

* ```EventGateway.forStaging```
* ```EventGateway.forProduction```

For example:

```js
const EventGateway = require('@barchart/events-client-js/lib/gateway/EventGateway');

EventGateway.forStaging()
	.then((eventGateway) => {
		// ready ...
	});
```

#### Using the API

No explicit initialization is required. Each HTTP request is processed independently.

## Defining an Event

As your software identifies an event for capture, it will need to collect the relevant information regarding the event. Please refer to [Key Concepts: Event Structure](content/concepts/event_structure) for a detailed discussion of the data to collect.

### Using the SDK

Assuming the following circumstances:

A ```BARCHART``` user identified as ```user-123``` added ```AAPL``` to his/her watchlist identified as ```watchlist-456``` at around ```7:45 AM on September 9, 2020```.

Here is the JavaScript object representing that event:

```js
const CustomerType = require('@barchart/events-api-common/lib/data/CustomerType'),
	ProductType = require('@barchart/events-api-common/lib/data/ProductType'),
	EventType = require('@barchart/events-api-common/lib/data/EventType');

const Timestamp = require('@barchart/common-js/lang/Timestamp');

const event = { 
	customer: CustomerType.BARCHART,
	product: ProductType.WATCHLIST,
	type: EventType.WATCHLIST_SYMBOL_ADDED,
	timestamp: Timestamp.parse(1599482731026),
	context: [
		"user-123",
		"watchlist-456",
		"AAPL"
	]
};
```

### Using the API

Here is the JSON representation of the aforementioned JavaScript object:

```json
{"customer":"BARCHART","product":"WATCHLIST","type":"WATCHLIST-SYMBOL-ADDED","timestamp":1599482731026,"context":["user-123","watchlist-456","AAPL"]}
```

## Saving an Event

After your software has compiled data regarding an event, it should be saved.

#### Using the SDK

Events can be sent immediately after they occur, as follows:

```js
const events = [ event ];

eventGateway.createEvents(events)
	.then((created) => {
		console.log(`Sent [ ${created.length} ] event(s) to the Barchart Event Tracking Service.`);
	});
```

Alternately, event transmission can be buffered. See [Key Concepts: Event Capture](content/concepts/event_capture?id=buffered-capture) for more information.

#### Using the API

```shell
curl 'https://events-stage.aws.barchart.com/events' \
  -X 'POST' \
  -H 'Accept: application/json' \
  -H 'Content-Type: application/json;charset=UTF-8' \
  --data-binary '{"events":[{"customer":"BARCHART","product":"WATCHLIST","type":"WATCHLIST-SYMBOL-ADDED","timestamp":1599482731026,"context":["user-123","watchlist-456","AAPL"]}]}'
```
Depending on your environment, you will either work with JavaScript objects or JSON data. Regardless, [Schema.Event](content/sdk/lib-data?id=schemaevent) defines five basic attributes:

* Customer
* Product
* Type
* Context
* Timestamp

## Customers

Each event must be associated with a known customer. Known customers are enumerated in an external library. Refer to the the [CustomerType](https://github.com/barchart/events-api-common/blob/master/lib/data/CustomerType.js) enumeration for an exact listing.

When constructing a JavaScript object use an enumeration item for the ```customer``` property, as follows:

```js
const CustomerType = require('@barchart/events-api-common/lib/data/CustomerType');

const event = { };
event.customer = CustomerType.BARCHART;
```

When constructing a JSON string, use the enumeration item's code, as follows:

```json
{"customer":"BARCHART"}
```

## Products

Each event must be associated with a known product. Known products are enumerated in an external library. Refer to the the [ProductType](https://github.com/barchart/events-api-common/blob/master/lib/data/ProductType.js) enumeration for an exact listing.

When constructing a JavaScript object use an enumeration item for the ```product``` property, as follows:

```js
const ProductType = require('@barchart/events-api-common/lib/data/ProductType');

const event = { };
event.product = ProductType.WATCHLIST;
```

When constructing a JSON string, use the enumeration item's code, as follows:

```json
{"product":"WATCHLIST"}
```

## Types

Each event must be categorized. For example:

* User Logged In,
* User Logged Out,
* User Entered Trade,
* Broker Acknowledged Trade,
* etc...

Ad hoc categories are not permitted. Refer to the the [EventType](https://github.com/barchart/events-api-common/blob/master/lib/data/EventType.js) enumeration for an exact listing of categories.

When constructing a JavaScript object use an enumeration item for the ```type``` property, as follows:

```js
const EventType = require('@barchart/events-api-common/lib/data/EventType');

const event = { };
event.type = EventType.WATCHLIST_SYMBOL_ADDED;
```

When constructing a JSON string, use the enumeration item's code, as follows:

```json
{"type":"WATCHLIST-SYMBOL-ADDED"}
```

**IMPORTANT**: Notice the enumeration item's name is not necessarily the same as the enumeration item's code. In this case, the former uses underscore characters and the latter uses dash characters.

## Context

Depending on the event's type, additional information regarding the exact circumstances for the event may be required. For example, ```EventType.WATCHLIST_SYMBOL_ADDED``` requires three additional pieces of information:

* userId,
* watchlistId, and
* symbol

This can be extracted from an enumeration item's ```contextKeys``` property, as follows:

```js
const contextKeys = EventType.WATCHLIST_SYMBOL_ADDED.contextKeys;

for (let i = 0; i < context.keys.length; i++) {
	console.log(contextKeys[i]);
}
```

Here is a JavaScript example:

```js
const event = { };

event.type = EventType.WATCHLIST_SYMBOL_ADDED;
event.context = [
	'user-123',
	'watchlist-456',
	'the-symbol'
];
```

Here is a JSON example:

```json
{"type":"WATCHLIST-SYMBOL-ADDED","context":["user-123","watchlist-456","the-symbol"]}
```

## Timestamp

The ```timestamp``` property indicates the moment the event occurred.

In JavaScript, use the [Timestamp](https://github.com/barchart/common-js/blob/master/lang/Timestamp.js) object, as follows:

```js
const Timestamp = require('@barchart/common-js/lang/Timestamp');

const event = { };
event.timestamp = Timestamp.now();
```

For JSON, use the serialized form of a Timestamp (i.e. a number representing the millisecond-style [Unix time](https://en.wikipedia.org/wiki/Unix_time)):

```json
{"timestamp":1599482731026}
```

## Example

Assuming the following circumstances:

A ```BARCHART``` user identified as ```user-123``` added ```AAPL``` to his/her watchlist identified as ```watchlist-456``` at around ```7:45 AM on September 9, 2020```.

Here is the JavaScript object representing that event:

```js
const event = {
	customer: CustomerType.BARCHART,
	product: ProductType.WATCHLIST,
	type: EventType.WATCHLIST_SYMBOL_ADDED,
	timestamp: Timestamp.parse(1599482731026),
	context: [
		"user-id-123",
		"watchlist-id-456",
		"AAPL"
	]
};
```

Here is the JSON representation of the aforementioned JavaScript object:

```json
{"customer":"BARCHART","product":"WATCHLIST","type":"WATCHLIST-SYMBOL-ADDED","timestamp":1599482731026,"context":["user-id-123","watchlist-id-456","AAPL"]}
```
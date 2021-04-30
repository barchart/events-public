const Enum = require('@barchart/common-js/lang/Enum');

const CustomerType = require('@barchart/events-api-common/lib/data/CustomerType'),
	EventType = require('@barchart/events-api-common/lib/data/EventType'),
	ProductType = require('@barchart/events-api-common/lib/data/ProductType');

const version = require('../../../lib/index').version;

module.exports = (() => {
	'use strict';

	return {
		version: version,
		stages: [
			'staging',
			'production',
		],
		customers: [
			CustomerType.BARCHART,
			CustomerType.TGAM
		],
		products: [
			ProductType.PORTFOLIO,
			ProductType.WATCHLIST,
			ProductType.ENTITLEMENTS,
			ProductType.ALERT
		],
		types: {
			[ProductType.PORTFOLIO.code]: Enum.getItems(EventType).filter(eventType => eventType.product === ProductType.PORTFOLIO),
			[ProductType.WATCHLIST.code]: Enum.getItems(EventType).filter(eventType => eventType.product === ProductType.WATCHLIST),
			[ProductType.ENTITLEMENTS.code]: Enum.getItems(EventType).filter(eventType => eventType.product === ProductType.ENTITLEMENTS),
			[ProductType.ALERT.code]: Enum.getItems(EventType).filter(eventType => eventType.product === ProductType.ALERT)
		}
	};
})();

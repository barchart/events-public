const assert = require('@barchart/common-js/lang/assert'),
	Timestamp = require('@barchart/common-js/lang/Timestamp');

const CustomerType = require('@barchart/events-api-common/lib/data/CustomerType'),
	EventType = require('@barchart/events-api-common/lib/data/EventType'),
	ProductType = require('@barchart/events-api-common/lib/data/ProductType');

module.exports = (() => {
	'use strict';

	/**
	 * A utility for simplifying the construction of event.
	 *
	 * @public
	 * @exported
	 * @param {CustomerType} customer
	 * @param {ProductType} product
	 */
	class EventFactory {
		constructor(customer, product) {
			assert.argumentIsRequired(customer, 'customer', CustomerType, 'CustomerType');
			assert.argumentIsRequired(product, 'product', ProductType, 'ProductType');

			this._customer = customer;
			this._product = product;
		}

		/**
		 * Creates a new {@link Schema.Event} object, using the factory's customer and product.
		 *
		 * @public
		 * @param {EventType} type
		 * @param {Array} context
		 * @returns {Schema.Event}
		 */
		build(type, context) {
			assert.argumentIsRequired(type, 'type', EventType, 'EventType');
			assert.argumentIsArray(context, 'context');

			return {
				customer: this._customer,
				product: this._product,
				type: type,
				timestamp: Timestamp.now().timestamp,
				context: context
			};
		}

		/**
		 * Configures a new event factory, which will build events for a specific customer and product.
		 *
		 * @public
		 * @param {CustomerType} customer
		 * @param {ProductType} product
		 * @returns {EventFactory}
		 */
		static for(customer, product) {
			return new EventFactory(customer, product);
		}

		toString() {
			return '[EventFactory]';
		}
	}

	return EventFactory;
})();

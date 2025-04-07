const assert = require('@barchart/common-js/lang/assert'),
	is = require('@barchart/common-js/lang/is'),
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
	 * @param {String} version
	 */
	class EventFactory {
		constructor(customer, product, version) {
			assert.argumentIsRequired(customer, 'customer', CustomerType, 'CustomerType');
			assert.argumentIsRequired(product, 'product', ProductType, 'ProductType');
			assert.argumentIsRequired(version, 'version', String, 'String');

			this._customer = customer;
			this._product = product;
			this._version = version;

			this._contextCache = new Map();
		}

		/**
		 * Sets a context key (and value) to an internal cache for future use by
		 * when building a new {@link Schema.Event}.
		 *
		 * @public
		 * @param {String} key
		 * @param {String} value
		 */
		setContext(key, value) {
			assert.argumentIsRequired(key, 'key', String);
			assert.argumentIsRequired(value, 'value', String);

			this._contextCache.set(key, value);
		}

		/**
		 * Removes a context key (and value) from an internal cache.
		 *
		 * @public
		 * @param {String} key
		 */
		clearContext(key) {
			assert.argumentIsRequired(key, 'key', String);

			this._contextCache.delete(key);
		}

		/**
		 * Clears the entire internal cache of context keys (and values).
		 *
		 * @public
		 */
		resetContext() {
			this._contextCache = new Map();
		}

		/**
		 * Creates a new {@link Schema.Event} object, using the factory's customer and product.
		 *
		 * @public
		 * @param {EventType} type
		 * @param {Array|Object} context
		 * @returns {Schema.Event}
		 */
		build(type, context) {
			assert.argumentIsRequired(type, 'type', EventType, 'EventType');

			let c;

			if (is.array(context)) {
				assert.argumentIsArray(context, 'context');

				c = contextFromArray(type, context, this._contextCache);
			} else {
				assert.argumentIsRequired(context, 'context', Object);

				c = contextFromObject(type, context, this._contextCache);
			}
			
			return {
				customer: this._customer,
				product: this._product,
				version: this._version,
				type: type,
				timestamp: Timestamp.now().timestamp,
				context: c
			};
		}

		/**
		 * Configures a new event factory, which will build events for a specific customer and product.
		 *
		 * @public
		 * @param {CustomerType} customer
		 * @param {ProductType} product
		 * @param {String} version
		 * @returns {EventFactory}
		 */
		static for(customer, product, version) {
			return new EventFactory(customer, product, version);
		}

		toString() {
			return '[EventFactory]';
		}
	}

	function contextFromArray(type, context, contextCache) {
		return context.map((value, index) => {
			if (value !== null) {
				return value;
			}

			let cached = null;

			const keys = type.contextKeys;

			if (index < keys.length) {
				const key = keys[index];

				if (contextCache.has(key)) {
					cached = contextCache.get(key);
				}
			}

			return cached;
		});
	}

	function contextFromObject(type, context, contextCache) {
		return type.contextKeys.map((key) => {
			let value;

			if (contextCache.has(key)) {
				value = contextCache.get(key);
			} else {
				value = context[key] || null;
			}

			return value;
		});
	}

	return EventFactory;
})();

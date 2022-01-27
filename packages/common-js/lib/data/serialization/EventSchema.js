const assert = require('@barchart/common-js/lang/assert'),
	DataType = require('@barchart/common-js/serialization/json/DataType'),
	Enum = require('@barchart/common-js/lang/Enum'),
	Schema = require('@barchart/common-js/serialization/json/Schema'),
	SchemaBuilder = require('@barchart/common-js/serialization/json/builders/SchemaBuilder');

const CustomerType = require('@barchart/events-api-common/lib/data/CustomerType'),
	EventType = require('@barchart/events-api-common/lib/data/EventType'),
	ProductType = require('@barchart/events-api-common/lib/data/ProductType');

module.exports = (() => {
	'use strict';

	/**
	 * An enumeration, defining schemas related to events.
	 *
	 * @public
	 * @extends {Enum}
	 * @param {Schema} schema
	 */
	class EventSchema extends Enum {
		constructor(schema) {
			assert.argumentIsRequired(schema, 'schema', Schema, 'Schema');

			super(schema.name, schema.name);

			this._schema = schema;
		}

		/**
		 * The actual {@link Schema}.
		 *
		 * @public
		 * @returns {Schema}
		 */
		get schema() {
			return this._schema;
		}

		/**
		 * A schema containing all data points for an event.
		 *
		 * @static
		 * @public
		 * @returns {EventSchema}
		 */
		static get COMPLETE() {
			return complete;
		}

		/**
		 * A schema using a reduced set of data points, used for inbound
		 * and outbound client communication.
		 *
		 * @static
		 * @public
		 * @returns {EventSchema}
		 */
		static get CLIENT() {
			return client;
		}

		toString() {
			return `[EventSchema (code=${this._code})]`;
		}
	}

	const complete = new EventSchema(SchemaBuilder.withName('complete')
		.withField('customer', DataType.forEnum(CustomerType, 'CustomerType'))
		.withField('product', DataType.forEnum(ProductType, 'ProductType'))
		.withField('type', DataType.forEnum(EventType, 'EventType'))
		.withField('version', DataType.STRING, true)
		.withField('timestamp', DataType.TIMESTAMP)
		.withField('batch', DataType.STRING)
		.withField('sequence', DataType.NUMBER)
		.withField('context', DataType.ARRAY)
		.schema
	);

	const client = new EventSchema(SchemaBuilder.withName('client')
		.withField('customer', DataType.forEnum(CustomerType, 'CustomerType'))
		.withField('product', DataType.forEnum(ProductType, 'ProductType'))
		.withField('type', DataType.forEnum(EventType, 'EventType'))
		.withField('version', DataType.STRING, true)
		.withField('timestamp', DataType.TIMESTAMP)
		.withField('context', DataType.ARRAY)
		.schema
	);

	return EventSchema;
})();

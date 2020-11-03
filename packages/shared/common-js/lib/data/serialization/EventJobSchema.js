const assert = require('@barchart/common-js/lang/assert'),
	DataType = require('@barchart/common-js/serialization/json/DataType'),
	Enum = require('@barchart/common-js/lang/Enum'),
	Schema = require('@barchart/common-js/serialization/json/Schema'),
	SchemaBuilder = require('@barchart/common-js/serialization/json/builders/SchemaBuilder');

const CustomerType = require('../CustomerType'),
	EventJobStatus = require('../EventJobStatus'),
	ProductType = require('../ProductType');

module.exports = (() => {
	'use strict';

	/**
	 * An enumeration, defining schemas related to jobs.
	 *
	 * @public
	 * @extends {Enum}
	 * @param {Schema} schema
	 */
	class EventJobSchema extends Enum {
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
		 * Data required to get report.
		 *
		 * @static
		 * @public
		 * @return {EventJobSchema}
		 */
		static get GET() {
			return get;
		}

		/**
		 * Data required to start report.
		 *
		 * @static
		 * @public
		 * @returns {EventJobSchema}
		 */
		static get START() {
			return start;
		}

		/**
		 * Data required to process report.
		 *
		 * @static
		 * @public
		 * @returns {EventJobSchema}
		 */
		static get PROCESS() {
			return process;
		}

		toString() {
			return `[EventJobSchema (code=${this._code})]`;
		}
	}

	const get = new EventJobSchema(SchemaBuilder.withName('get')
		.withField('source', DataType.STRING)
		.schema
	);

	const start = new EventJobSchema(SchemaBuilder.withName('start')
		.withField('filter.customer', DataType.forEnum(CustomerType, 'CustomerType'))
		.withField('filter.product', DataType.forEnum(ProductType, 'ProductType'))
		.withField('filter.start', DataType.TIMESTAMP, true)
		.withField('filter.end', DataType.TIMESTAMP, true)
		.schema
	);

	const process = new EventJobSchema(SchemaBuilder.withName('process')
		.withField('job', DataType.STRING)
		.withField('source', DataType.STRING)
		.withField('status', DataType.forEnum(EventJobStatus, 'EventJobStatus'))
		.withField('filter.customer', DataType.forEnum(CustomerType, 'CustomerType'))
		.withField('filter.product', DataType.forEnum(ProductType, 'ProductType'))
		.withField('filter.start', DataType.TIMESTAMP, true)
		.withField('filter.end', DataType.TIMESTAMP, true)
		.withField('timing.day', DataType.DAY)
		.withField('timing.start', DataType.TIMESTAMP)
		.withField('timing.end', DataType.TIMESTAMP, true)
		.schema
	);

	return EventJobSchema;
})();

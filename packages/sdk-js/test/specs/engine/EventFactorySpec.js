const CustomerType = require('@barchart/events-api-common/lib/data/CustomerType'),
	EventType = require('@barchart/events-api-common/lib/data/EventType'),
	ProductType = require('@barchart/events-api-common/lib/data/ProductType');

const EventFactory = require('./../../../lib/engine/EventFactory');

describe('When an event factory is created', () => {
	'use strict';

	const TEST_CUSTOMER_TYPE = new CustomerType('TEST-CUSTOMER', 'test customer');
	const TEST_PRODUCT_TYPE = new ProductType('TEST-CUSTOMER', 'test product');
	const TEST_EVENT_TYPE = new EventType('TEST-TYPE', 'Test event happened', TEST_PRODUCT_TYPE, ['key_1', 'key_2', 'key_3']);

	let customer;
	let product;
	let version;

	let factory;

	beforeEach(() => {
		factory = new EventFactory(customer = TEST_CUSTOMER_TYPE, product = TEST_PRODUCT_TYPE, version = '1.2.3');
	});

	describe('and no context key(s) or value(s) are cached', () => {
		describe('and an event is built from an array', () => {
			let type;
			let event;

			let passed;

			beforeEach(() => {
				event = factory.build(type = TEST_EVENT_TYPE, passed = [ 'value_1', 'value_2', 'value_3' ])
			});

			it('the event customer should be correct', () => {
				expect(event.customer).toBe(customer);
			});

			it('the event product should be correct', () => {
				expect(event.product).toBe(product);
			});

			it('the event version should be correct', () => {
				expect(event.version).toBe(version);
			});

			it('the event type should be correct', () => {
				expect(event.type).toBe(type);
			});

			it('the first context value should be taken from the argument to the build function', () => {
				expect(event.context[0]).toEqual(passed[0]);
			});

			it('the second context value should be taken from the argument to the build function', () => {
				expect(event.context[1]).toEqual(passed[1]);
			});

			it('the third context value should be taken from the argument to the build function', () => {
				expect(event.context[2]).toEqual(passed[2]);
			});
		});

		describe('and an event is built from an object', () => {
			let type;
			let event;

			let passed;

			beforeEach(() => {
				let value_1 = 'value_1'
				let value_2 = 'value_2';
				let value_3 = 'value_3';

				event = factory.build(type = TEST_EVENT_TYPE, passed = { key_1: value_1, key_2: value_2, key_3: value_3  });
			});

			it('the event customer should be correct', () => {
				expect(event.customer).toBe(customer);
			});

			it('the event product should be correct', () => {
				expect(event.product).toBe(product);
			});

			it('the event version should be correct', () => {
				expect(event.version).toBe(version);
			});

			it('the event type should be correct', () => {
				expect(event.type).toBe(type);
			});

			it('the first context value should be taken from the argument to the build function', () => {
				expect(event.context[0]).toEqual(passed.key_1);
			});

			it('the second context value should be taken from the argument to the build function', () => {
				expect(event.context[1]).toEqual(passed.key_2);
			});

			it('the third context value should be taken from the argument to the build function', () => {
				expect(event.context[2]).toEqual(passed.key_3);
			});
		});
	});

	describe('and a context key (and value) is cached', () => {
		let key_1;
		let value_1;

		beforeEach(() => {
			factory.setContext(key_1 = 'key_1', value_1 = 'value_1');
		});

		describe('and an event is built from an array (wih cached context key(s))', () => {
			let type;
			let event;

			let passed;

			beforeEach(() => {
				event = factory.build(type = TEST_EVENT_TYPE, passed = [ null, 'value_2', 'value_3' ])
			});

			it('the event customer should be correct', () => {
				expect(event.customer).toBe(customer);
			});

			it('the event product should be correct', () => {
				expect(event.product).toBe(product);
			});

			it('the event version should be correct', () => {
				expect(event.version).toBe(version);
			});

			it('the event type should be correct', () => {
				expect(event.type).toBe(type);
			});

			it('the first context value be taken from the cache', () => {
				expect(event.context[0]).toEqual(value_1);
			});

			it('the second context value should be taken from the argument to the build function', () => {
				expect(event.context[1]).toEqual(passed[1]);
			});

			it('the third context value should be taken from the argument to the build function', () => {
				expect(event.context[2]).toEqual(passed[2]);
			});
		});

		describe('and an event is built from an object (wih cached context key(s))', () => {
			let type;
			let event;

			let passed;

			beforeEach(() => {
				let value_2 = 'value_2';
				let value_3 = 'value_3';

				event = factory.build(type = TEST_EVENT_TYPE, passed = { key_2: value_2, key_3: value_3  });
			});

			it('the event customer should be correct', () => {
				expect(event.customer).toBe(customer);
			});

			it('the event product should be correct', () => {
				expect(event.product).toBe(product);
			});

			it('the event version should be correct', () => {
				expect(event.version).toBe(version);
			});

			it('the event type should be correct', () => {
				expect(event.type).toBe(type);
			});

			it('the first context value be taken from the cache', () => {
				expect(event.context[0]).toEqual(value_1);
			});

			it('the second context value should be taken from the argument to the build function', () => {
				expect(event.context[1]).toEqual(passed.key_2);
			});

			it('the third context value should be taken from the argument to the build function', () => {
				expect(event.context[2]).toEqual(passed.key_3);
			});
		});
	});
});

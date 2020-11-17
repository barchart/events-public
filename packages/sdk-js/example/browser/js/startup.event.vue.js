const EventBatcher = require('./../../../lib/engine/EventBatcher'),
	EventGateway = require('./../../../lib/gateway/EventGateway');

const CustomerType = require('@barchart/events-api-common/lib/data/CustomerType'),
	ProductType = require('@barchart/events-api-common/lib/data/ProductType'),
	EventType = require('@barchart/events-api-common/lib/data/EventType');

const Timestamp = require('@barchart/common-js/lang/Timestamp');

const Config = require('./example.config');

module.exports = (() => {
	'use strict';

	const app = new Vue({
		el: '.wrapper',
		data: {
			selectedCustomer: '',
			selectedProduct: '',
			selectedType: '',
			inputContext: '',

			message: '',

			events: [ ],

			auto: false,

			eventBatcher: null,
			eventGateway: null,

			showAuth: true,
			stage: 'production',

			config: Config,
		},
		methods: {
			connect() {
				return EventGateway.for(this.stage)
					.then((gateway) => {
						this.eventGateway = gateway;
						this.eventBatcher = new EventBatcher(gateway, callback.bind(this));
						this.showAuth = false;
					});
			},
			disconnect() {
				this.clear();

				this.eventGateway = null;
				this.eventBatcher = null;
				this.showAuth = true;
			},
			generate() {
				if (!validateFields.call(this)) {
					this.message = 'Fill all fields';

					return;
				}

				const event = {
					customer: CustomerType.parse(this.selectedCustomer),
					product: ProductType.parse(this.selectedProduct),
					type: EventType.parse(this.selectedType),
					timestamp: Timestamp.now(),
					context: this.inputContext.replace(' ', '').split(','),
				};

				this.events.push(event);

				if (this.auto) {
					this.eventBatcher.push(event);
				}
			},
			send() {
				if (!validateFields.call(this)) {
					this.message = 'Fill all fields';

					return;
				}

				if (this.events.length === 0) {
					this.message = 'Event stack is empty';

					return;
				}

				this.message = 'Sending...';

				this.eventGateway.createEvents(this.events)
					.then((response) => {
						clear.call(this);

						this.message = response;
					}).catch((err) => {
						clear.call(this);

						this.message = err;
					});
			},
			clear() {
				clear.call(this);
			},
			switchMode() {
				if (this.auto) {
					this.events.forEach(event => this.eventBatcher.push(event));
					this.eventBatcher.start();

					this.message = 'Auto mode enabled';
				} else {
					this.eventBatcher.stop();
					this.eventBatcher.clear();

					this.message = 'Auto mode disabled';
				}
			}
		}
	});

	function callback(response) {
		clear.call(this);

		this.message = response;
	}


	function clear() {
		this.events = [ ];
		this.message = '';
	}

	function validateFields() {
		if (!this.selectedCustomer || !this.selectedProduct || !this.selectedType || !this.inputContext) {
			return false;
		}

		return true;
	}
})();

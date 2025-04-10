const assert = require('@barchart/common-js/lang/assert'),
	is = require('@barchart/common-js/lang/is'),
	Scheduler = require('@barchart/common-js/timing/Scheduler');

const EventGateway = require('../gateway/EventGateway');

module.exports = (() => {
	'use strict';

	/**
	 * A utility which buffers {@link Schema.Event} objects and periodically
	 * transmits them to backend in batches.
	 *
	 * @public
	 * @exported
	 * @param {EventGateway}
	 * @param {Function=} callback
	 */
	class EventBatcher {
		constructor(eventGateway, callback) {
			assert.argumentIsRequired(eventGateway, 'eventGateway', EventGateway, 'EventGateway');
			assert.argumentIsOptional(callback, 'callback', Function, 'Function');

			this._eventGateway = eventGateway;
			this._callback = callback;

			this._scheduler = new Scheduler();

			this._buffer = [ ];
			this._running = false;
		}

		/**
		 * Begins queue processing. Items in the buffer will begin to be transmitted
		 * to the remote service.
		 *
		 * @public
		 */
		start() {
			if (this._running) {
				return;
			}

			this._scheduler = new Scheduler();
			this._running = true;

			scheduleBuffer.call(this);
		}

		/**
		 * Attempts to immediately flush the buffer.
		 *
		 * @public
		 * @async
		 * @param {boolean=} stop
		 */
		async flush(stop) {
			assert.argumentIsOptional(stop, 'stop', Boolean);

			const batch = this._buffer;

			if (stop) {
				this.stop();
			}

			if (!this._running) {
				return;
			}

			return processBuffer.call(this, batch);
		}

		/**
		 * Stops the queue processing. Items in the buffer accumulate without being
		 * transmitted to the remote service.
		 * 
		 * @public
		 */
		stop() {
			this._running = false;

			if (this._scheduler !== null) {
				this._scheduler.dispose();
				this._scheduler = null;
			}
		}

		/**
		 * Clears the internal buffer.
		 *
		 * @public
		 */
		clear() {
			this._buffer = [ ];
		}

		/**
		 * Adds a new event to the buffer.
		 *
		 * @public
		 * @param {Schema.Event|Callbacks.EventGenerator} event
		 */
		push(event) {
			this._buffer.push(event);
		}

		toString() {
			return '[EventBatcher]';
		}
	}

	function scheduleBuffer() {
		if (!this._running) {
			return;
		}

		if (this._buffer.length === 0) {
			return this._scheduler.schedule(scheduleBuffer.bind(this), 5000, 'scheduleBuffer');
		}

		const batch = this._buffer;

		this._buffer = [ ];

		processBuffer.call(this, batch)
			.then(() => {
				if (this._running) {
					this._scheduler.schedule(scheduleBuffer.bind(this), 5000, 'scheduleBuffer');
				}
			});
	}

	async function processBuffer(batch) {
		if (batch.length === 0) {
			return;
		}

		const events = batch.map((item) => {
			let event;

			if (is.fn(item)) {
				event = item();
			} else {
				event = item;
			}

			return event;
		});

		return this._eventGateway.createEvents(events)
			.then((response) => {
				if (this._callback) {
					this._callback(response);
				}

				return response;
			}).catch((e) => {
				console.error('Failed to transmit events to Barchart Usage Tracking Service', e);

				return null;
			});
	}

	return EventBatcher;
})();

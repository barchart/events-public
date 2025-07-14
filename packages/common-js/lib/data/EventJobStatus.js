const assert = require('@barchart/common-js/lang/assert'),
	Enum = require('@barchart/common-js/lang/Enum');

module.exports = (() => {
	'use strict';

	/**
	 * The state of an event job.
	 *
	 * @public
	 * @extends {Enum}
	 * @param {String} code
	 * @param {String} description
	 * @param {Boolean} initial
	 * @param {Boolean} terminal
	 */
	class EventJobStatus extends Enum {
		constructor(code, description, initial, terminal) {
			super(code, description);

			assert.argumentIsRequired(initial, 'initial', Boolean);
			assert.argumentIsRequired(terminal, 'terminal', Boolean);

			this._initial = initial;
			this._terminal = terminal;
		}

		/**
		 * Indicates if the status represents an initial state.
		 *
		 * @public
		 * @returns {Boolean}
		 */
		get initial() {
			return this._initial;
		}

		/**
		 * Indicates if the status represents a terminal state.
		 *
		 * @public
		 * @returns {Boolean}
		 */
		get terminal() {
			return this._terminal;
		}

		/**
		 * The job is in-progress.
		 *
		 * @public
		 * @static
		 * @returns {EventJobStatus}
		 */
		static get RUNNING() {
			return running;
		}

		/**
		 * The job succeeded.
		 *
		 * @public
		 * @static
		 * @returns {EventJobStatus}
		 */
		static get COMPLETE() {
			return complete;
		}

		/**
		 * The job timed out.
		 *
		 * @public
		 * @static
		 * @returns {EventJobStatus}
		 */
		static get TIMEOUT() {
			return timeout;
		}

		/**
		 * The job failed.
		 *
		 * @public
		 * @static
		 * @returns {EventJobStatus}
		 */
		static get FAILED() {
			return failed;
		}

		toString() {
			return `[EventJobStatus (code=${this.code})]`;
		}
	}

	const running = new EventJobStatus('RUNNING', 'Running', true, false);
	const complete = new EventJobStatus('COMPLETE', 'Complete', false, true);
	const timeout = new EventJobStatus('TIMEOUT', 'Timeout', false, true);
	const failed = new EventJobStatus('FAILED', 'Failed', false, true);

	return EventJobStatus;
})();

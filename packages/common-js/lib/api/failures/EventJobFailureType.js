const FailureType = require('@barchart/common-js/api/failures/FailureType');

module.exports = (() => {
	'use strict';

	/**
	 * A static container for {@link FailureType} objects.
	 *
	 * @public
	 */
	class EventJobFailureType {
		constructor() {

		}

		/**
		 * Unable to get by unexpected reasons.
		 *
		 * @public
		 * @static
		 * @returns {FailureType}
		 */
		static get EVENT_JOB_GET_FAILED() {
			return eventJobGetFailed;
		}

		/**
		 * Unable to get, the report is still running.
		 *
		 * @public
		 * @static
		 * @returns {FailureType}
		 */
		static get EVENT_JOB_GET_FAILED_RUNNING() {
			return eventJobGetFailedRunning;
		}

		/**
		 * Unable to get, the job source does not exist.
		 *
		 * @public
		 * @static
		 * @returns {FailureType}
		 */
		static get EVENT_JOB_GET_FAILED_NO_JOB() {
			return eventJobGetFailedNoJob;
		}
	}

	const eventJobGetFailed = new FailureType('EVENT_JOB_GET_FAILED', 'Unable to get report because it\'s failed.');
	const eventJobGetFailedRunning = new FailureType('EVENT_JOB_GET_FAILED_RUNNING', 'Unable to get report while it\'s running.');
	const eventJobGetFailedNoJob = new FailureType('EVENT_JOB_GET_FAILED_NO_JOB', 'Unable to get report. The job source does not exist.');

	return EventJobFailureType;
})();

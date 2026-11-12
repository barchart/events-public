const Enum = require('@barchart/common-js/lang/Enum');

module.exports = (() => {
	'use strict';

	/**
	 * An enumeration of application environments used to log in.
	 *
	 * @public
	 * @extends {Enum}
	 * @param {String} code
	 * @param {String} description
	 */
	class AppType extends Enum {
		constructor(code, description) {
			super(code, description);
		}

		/**
		 * Returns the application type for a code, or null if none matches.
		 *
		 * @public
		 * @static
		 * @param {String} code
		 * @returns {AppType|null}
		 */
		static parse(code) {
			return Enum.fromCode(AppType, code);
		}

		/**
		 * The desktop application environment.
		 *
		 * @public
		 * @static
		 * @returns {AppType}
		 */
		static get DESKTOP() {
			return desktop;
		}

		/**
		 * The web application environment.
		 *
		 * @public
		 * @static
		 * @returns {AppType}
		 */
		static get WEB() {
			return web;
		}

		toString() {
			return `[AppType (code=${this.code})]`;
		}
	}

	const desktop = new AppType('desktop', 'Desktop');
	const web = new AppType('web', 'Web');

	return AppType;
})();

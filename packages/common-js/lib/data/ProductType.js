const Enum = require('@barchart/common-js/lang/Enum');

module.exports = (() => {
	'use strict';

	/**
	 * An enumeration of products (which are associated with events).
	 *
	 * @public
	 * @extends {Enum}
	 * @param {String} code
	 * @param {String} description
	 */
	class ProductType extends Enum {
		constructor(code, description) {
			super(code, description);
		}

		/**
		 * Returns the {@link ProductType} which corresponds to the code supplied.
		 * If no matching {@link ProductType} exists, a null value is returned.
		 *
		 * @public
		 * @param {String} code
		 * @returns {ProductType|null}
		 */
		static parse(code) {
			return Enum.fromCode(ProductType, code);
		}

		/**
		 * The portfolio service.
		 *
		 * @public
		 * @static
		 * @returns {ProductType}
		 */
		static get PORTFOLIO() {
			return portfolio;
		}

		/**
		 * The watchlist service.
		 *
		 * @public
		 * @static
		 * @returns {ProductType}
		 */
		static get WATCHLIST() {
			return watchlist;
		}

		/**
		 * The cmdtyView trading platform.
		 *
		 * @public
		 * @static
		 * @returns {ProductType}
		 */
		static get CMDTYVIEW() {
			return cmdtyView;
		}

		/**
		 * The entitlements service.
		 *
		 * @public
		 * @static
		 * @returns {ProductType}
		 */
		static get ENTITLEMENTS() {
			return entitlements;
		}

		toString() {
			return `[ProductType (code=${this.code})]`;
		}
	}

	const portfolio = new ProductType('PORTFOLIO', 'PORTFOLIO');
	const watchlist = new ProductType('WATCHLIST', 'WATCHLIST');
	const cmdtyView = new ProductType('CMDTYVIEW', 'CMDTYVIEW');
	const entitlements = new ProductType('ENTITLEMENTS', 'ENTITLEMENTS');

	return ProductType;
})();

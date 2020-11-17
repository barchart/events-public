const assert = require('@barchart/common-js/lang/assert'),
	array = require('@barchart/common-js/lang/array'),
	Enum = require('@barchart/common-js/lang/Enum');

const ProductType = require('./ProductType');

module.exports = (() => {
	'use strict';

	/**
	 * An enumeration of event types that can be tracked.
	 *
	 * @public
	 * @extends {Enum}
	 * @param {String} code
	 * @param {String} description
	 * @param {ProductType=} product
	 * @param {Array=} contextKeys
	 */
	class EventType extends Enum {
		constructor(code, description, product, contextKeys) {
			super(code, description);

			assert.argumentIsOptional(product, 'product', ProductType, 'ProductType');
			assert.argumentIsOptional(contextKeys, 'contextKeys', Array);

			this._product = product || null;
			this._contextKeys = contextKeys || [ ];
		}

		/**
		 * The {@link ProductType} which the event applies to.
		 *
		 * @public
		 * @returns {ProductType|null}
		 */
		get product() {
			return this._product;
		}

		/**
		 * The context keys.
		 *
		 * @public
		 * @returns {Array}
		 */
		get contextKeys() {
			return this._contextKeys;
		}

		/**
		 * Returns the {@link EventType} which corresponds to the code supplied.
		 * If no matching {@link EventType} exists, a null value is returned.
		 *
		 * @public
		 * @param {String} code
		 * @returns {EventType|null}
		 */
		static parse(code) {
			return Enum.fromCode(EventType, code);
		}

		static get WATCHLIST_APPLICATION_LOADED() {
			return watchlistApplicationLoaded;
		}

		static get WATCHLIST_ACCESSED() {
			return watchlistAccessed;
		}

		static get WATCHLIST_CREATED() {
			return watchlistCreated;
		}

		static get WATCHLIST_DOWNLOADED() {
			return watchlistDownloaded;
		}

		static get WATCHLIST_PRINTED() {
			return watchlistPrinted;
		}

		static get WATCHLIST_DELETED() {
			return watchlistDeleted;
		}

		static get WATCHLIST_SYMBOL_ADDED() {
			return watchlistSymbolAdded;
		}

		static get WATCHLIST_SYMBOL_REMOVED() {
			return watchlistSymbolRemoved;
		}

		static get WATCHLIST_CUSTOM_VIEW_CREATED() {
			return watchlistCustomViewCreated;
		}

		static get WATCHLIST_CUSTOM_VIEW_DELETED() {
			return watchlistCustomViewDeleted;
		}

		static get WATCHLIST_VIEW_TYPE_CHANGED() {
			return watchlistViewTypeChanged;
		}

		static get WATCHLIST_VIEW_CHANGED() {
			return watchlistViewChanged;
		}

		static get WATCHLIST_DATA_MODE_CHANGED() {
			return watchlistDataModeChanged;
		}

		static get WATCHLIST_EDIT_SCREEN_INVOKED() {
			return watchlistEditScreenInvoked;
		}

		static get WATCHLIST_PORTFOLIO_ADD_SCREEN_INVOKED() {
			return watchlistPortfolioAddScreenInvoked;
		}

		static get WATCHLIST_SYMBOL_NOTES_SCREEN_INVOKED() {
			return watchlistSymbolNotesScreenInvoked;
		}

		static get WATCHLIST_ASSET_CLASS_FILTER_ACTIVATED() {
			return watchlistAssetClassFilterActivated;
		}

		static get WATCHLIST_ASSET_CLASS_FILTER_DEACTIVATED() {
			return watchlistAssetClassFilterDeactivated;
		}

		static get PORTFOLIO_APPLICATION_LOADED() {
			return portfolioApplicationLoaded;
		}

		static get PORTFOLIO_ACCESSED() {
			return portfolioAccessed;
		}

		static get PORTFOLIO_CREATED() {
			return portfolioCreated;
		}

		static get PORTFOLIO_DOWNLOADED() {
			return portfolioDownloaded;
		}

		static get PORTFOLIO_DELETED() {
			return portfolioDeleted;
		}

		static get PORTFOLIO_TRANSACTION_CREATED() {
			return portfolioTransactionCreated;
		}

		static get PORTFOLIO_TRANSACTION_EDITED() {
			return portfolioTransactionEdited;
		}

		static get PORTFOLIO_TRANSACTION_DELETED() {
			return portfolioTransactionDeleted;
		}

		static get PORTFOLIO_POSITION_CREATED() {
			return portfolioPositionCreated;
		}

		static get PORTFOLIO_POSITION_DELETED() {
			return portfolioPositionDeleted;
		}

		static get PORTFOLIO_BROKERAGE_REPORT_DOWNLOADED() {
			return portfolioBrokerageReportDownloaded;
		}

		static get PORTFOLIO_CUSTOM_VIEW_CREATED() {
			return portfolioCustomViewCreated;
		}

		static get PORTFOLIO_CUSTOM_VIEW_DELETED() {
			return portfolioCustomViewDeleted;
		}

		static get PORTFOLIO_VIEW_TYPE_CHANGED() {
			return portfolioViewTypeChanged;
		}

		static get PORTFOLIO_SHOW_CLOSED_POSITIONS_CHANGED() {
			return portfolioShowClosedPositionsChanged;
		}

		static get PORTFOLIO_DIVIDEND_STRATEGY_CHANGED() {
			return portfolioDividendStrategyChanged;
		}

		static get PORTFOLIO_CASH_ADJUSTMENT_STRATEGY_CHANGED() {
			return portfolioCashAdjustmentStrategyChanged;
		}

		static get PORTFOLIO_TRANSACTION_HISTORY_SINGLE_INVOKED() {
			return portfolioTransactionHistorySingleInvoked;
		}

		static get PORTFOLIO_TRANSACTION_HISTORY_ALL_INVOKED() {
			return portfolioTransactionHistoryAllInvoked;
		}

		static get PORTFOLIO_EDIT_PORTFOLIO_SCREEN_INVOKED() {
			return portfolioEditPortfolioScreenInvoked;
		}

		static get PORTFOLIO_EDIT_TRANSACTION_SCREEN_INVOKED() {
			return portfolioEditTransactionScreenInvoked;
		}

		static get PORTFOLIO_WATCHLIST_ADD_SCREEN_INVOKED() {
			return portfolioWatchlistAddScreenInvoked;
		}

		static get PORTFOLIO_WEALTHSCOPE_REPORT_VIEWED() {
			return portfolioWealthscopeReportViewed;
		}

		static get PORTFOLIO_VALUE_GRAPH_OPENED() {
			return portfolioValueGraphOpened;
		}

		static get PORTFOLIO_VALUE_GRAPH_DURATION_CHANGED() {
			return portfolioValueGraphDurationChanged;
		}

		static get CMDTYVIEW_LOGIN() {
			return cmdtyViewLogin;
		}

		static get CMDTYVIEW_LOGOUT() {
			return cmdtyViewLogout;
		}

		static get ENTITLEMWENTS_AUTHORIZATION_FAILED() {
			return entitlementsAuthorizationFailed;
		}

		/**
		 * Get all context keys for productType.
		 *
		 * @public
		 * @static
		 * @param {ProductType} productType
		 * @returns {Array}
		 */
		static getContextKeysFor(productType) {
			assert.argumentIsRequired(productType, 'productType', ProductType, 'ProductType');

			return array.unique(Enum.getItems(EventType)
				.filter(eventType => eventType.product === productType)
				.reduce((acc, item) => acc.concat(item.contextKeys), [ ])
			);
		}

		toString() {
			return `[EventType (code=${this.code})]`;
		}
	}

	// Watchlist

	const watchlistApplicationLoaded = new EventType('WATCHLIST-APPLICATION-LOADED', 'Application Loaded', ProductType.WATCHLIST, ['userId']);
	const watchlistAccessed = new EventType('WATCHLIST-ACCESSED', 'Watchlist Selected', ProductType.WATCHLIST, ['userId', 'watchlistId']);
	const watchlistCreated = new EventType('WATCHLIST-CREATED', 'Watchlist Created', ProductType.WATCHLIST, ['userId', 'watchlistId']);
	const watchlistDownloaded = new EventType('WATCHLIST-DOWNLOADED', 'Watchlist Downloaded', ProductType.WATCHLIST, ['userId', 'watchlistId']);
	const watchlistPrinted = new EventType('WATCHLIST-PRINTED', 'Watchlist Printed', ProductType.WATCHLIST, ['userId', 'watchlistId']);
	const watchlistDeleted = new EventType('WATCHLIST-DELETED', 'Watchlist Deleted', ProductType.WATCHLIST, ['userId', 'watchlistId']);
	const watchlistSymbolAdded = new EventType('WATCHLIST-SYMBOL-ADDED', 'Symbol Added', ProductType.WATCHLIST, ['userId', 'watchlistId', 'symbol']);
	const watchlistSymbolRemoved = new EventType('WATCHLIST-SYMBOL-REMOVED', 'Symbol Removed', ProductType.WATCHLIST, ['userId', 'watchlistId', 'symbol']);
	const watchlistCustomViewCreated = new EventType('WATCHLIST-CUSTOM-VIEW-CREATED', 'Custom View Created', ProductType.WATCHLIST, ['userId', 'viewName']);
	const watchlistCustomViewDeleted = new EventType('WATCHLIST-CUSTOM-VIEW-DELETED', 'Custom View Deleted', ProductType.WATCHLIST, ['userId', 'viewName']);
	const watchlistViewTypeChanged = new EventType('WATCHLIST-VIEW-TYPE-CHANGED', 'View Type Changed', ProductType.WATCHLIST, ['userId', 'watchlistId', 'viewType']);
	const watchlistViewChanged = new EventType('WATCHLIST-VIEW-CHANGED', 'View Changed', ProductType.WATCHLIST, ['userId', 'watchlistId', 'viewName']);
	const watchlistDataModeChanged = new EventType('WATCHLIST-DATA-MODE-CHANGED', 'Data mode changed', ProductType.WATCHLIST, ['userId', 'watchlistId', 'dataMode']);
	const watchlistEditScreenInvoked = new EventType('WATCHLIST-SCREEN-INVOKED-EDIT', 'Edit Screen Invoked', ProductType.WATCHLIST, ['userId', 'watchlistId']);
	const watchlistPortfolioAddScreenInvoked = new EventType('WATCHLIST-SCREEN-INVOKED-PORTFOLIO-ADD', 'Portfolio Add Screen Invoked', ProductType.WATCHLIST, ['userId', 'watchlistId', 'symbol']);
	const watchlistSymbolNotesScreenInvoked = new EventType('WATCHLIST-SCREEN-INVOKED-SYMBOL-NOTES', 'Symbol Notes Screen Accessed', ProductType.WATCHLIST, ['userId', 'watchlistId', 'symbol']);
	const watchlistAssetClassFilterActivated = new EventType('WATCHLIST-ASSET-CLASS-FILTER-ACTIVATED', 'Asset Filter Activated', ProductType.WATCHLIST, ['userId', 'classFilter']);
	const watchlistAssetClassFilterDeactivated = new EventType('WATCHLIST-ASSET-CLASS-FILTER-DEACTIVATED', 'Asset Filter Deactivated', ProductType.WATCHLIST, ['userId', 'classFilter']);

	// Portfolio

	const portfolioApplicationLoaded = new EventType('PORTFOLIO-APPLICATION-LOADED', 'Application Loaded', ProductType.PORTFOLIO, ['userId']);
	const portfolioAccessed = new EventType('PORTFOLIO-ACCESSED', 'Portfolio Accessed', ProductType.PORTFOLIO, ['userId', 'portfolioId']);
	const portfolioCreated = new EventType('PORTFOLIO-CREATED', 'Portfolio Created', ProductType.PORTFOLIO, ['userId', 'portfolioId']);
	const portfolioDownloaded = new EventType('PORTFOLIO-DOWNLOADED', 'Portfolio Downloaded', ProductType.PORTFOLIO, ['userId', 'portfolioId']);
	const portfolioDeleted = new EventType('PORTFOLIO-DELETED', 'Portfolio Deleted', ProductType.PORTFOLIO, ['userId', 'portfolioId']);
	const portfolioTransactionCreated = new EventType('PORTFOLIO-TRANSACTION-CREATED', 'Transaction Created', ProductType.PORTFOLIO, ['userId', 'portfolioId', 'positionId']);
	const portfolioTransactionEdited = new EventType('PORTFOLIO-TRANSACTION-EDITED', 'Transaction Edited', ProductType.PORTFOLIO, ['userId', 'portfolioId', 'positionId']);
	const portfolioTransactionDeleted = new EventType('PORTFOLIO-TRANSACTION-DELETED', 'Transaction Deleted', ProductType.PORTFOLIO, ['userId', 'portfolioId', 'positionId']);
	const portfolioPositionCreated = new EventType('PORTFOLIO-POSITION-CREATED', 'Position Created', ProductType.PORTFOLIO, ['userId', 'portfolioId', 'positionId']);
	const portfolioPositionDeleted = new EventType('PORTFOLIO-POSITION-DELETED', 'Position Deleted', ProductType.PORTFOLIO, ['userId', 'portfolioId', 'positionId']);
	const portfolioBrokerageReportDownloaded = new EventType('PORTFOLIO-BROKERAGE-REPORT-DOWNLOADED', 'Brokerage Report Downloaded', ProductType.PORTFOLIO, ['userId', 'portfolioId', 'frame']);
	const portfolioCustomViewCreated = new EventType('PORTFOLIO-CUSTOM-VIEW-CREATED', 'Custom View Created', ProductType.PORTFOLIO, ['userId', 'viewName']);
	const portfolioCustomViewDeleted = new EventType('PORTFOLIO-CUSTOM-VIEW-DELETED', 'Custom View Deleted', ProductType.PORTFOLIO, ['userId', 'viewName']);
	const portfolioViewTypeChanged = new EventType('PORTFOLIO-VIEW-TYPE-CHANGED', 'View Changed', ProductType.PORTFOLIO, ['userId', 'portfolioId', 'viewName']);
	const portfolioShowClosedPositionsChanged = new EventType('PORTFOLIO-CLOSED-POSITIONS-CHANGED', 'Closed Positions View Changed', ProductType.PORTFOLIO, ['userId', 'portfolioId', 'showClosedPositions']);
	const portfolioDividendStrategyChanged = new EventType('PORTFOLIO-DIVIDEND-STRATEGY-CHANGED', 'Dividend Strategy Changed', ProductType.PORTFOLIO, ['userId', 'portfolioId', 'dividendStrategy']);
	const portfolioCashAdjustmentStrategyChanged = new EventType('PORTFOLIO-CASH-ADJUSTMENT-STRATEGY-CHANGED', 'Cash Adjustment Strategy Changed', ProductType.PORTFOLIO, ['userId', 'portfolioId', 'cashAdjustmentStrategy']);
	const portfolioTransactionHistorySingleInvoked = new EventType('PORTFOLIO-SCREEN-INVOKED-TRANSACTIONS-SINGLE', 'Transaction History Viewed (Single Position)', ProductType.PORTFOLIO, ['userId', 'portfolioId', 'positionId']);
	const portfolioTransactionHistoryAllInvoked = new EventType('PORTFOLIO-SCREEN-INVOKED-TRANSACTIONS-ALL', 'Transaction History Viewed (All Positions)', ProductType.PORTFOLIO, ['userId', 'portfolioId']);
	const portfolioEditPortfolioScreenInvoked = new EventType('PORTFOLIO-SCREEN-INVOKED-EDIT-PORTFOLIO', 'Portfolio Edit Screen Invoked', ProductType.PORTFOLIO, ['userId', 'portfolioId']);
	const portfolioEditTransactionScreenInvoked = new EventType('PORTFOLIO-SCREEN-INVOKED-EDIT-TRANSACTION', 'Transaction Edit Screen Invoked', ProductType.PORTFOLIO, ['userId', 'portfolioId', 'positionId']);
	const portfolioWatchlistAddScreenInvoked = new EventType('PORTFOLIO-SCREEN-INVOKED-WATCHLIST-ADD', 'Watchlist Add Edit Screen Invoked', ProductType.PORTFOLIO, ['userId', 'portfolioId', 'positionId']);
	const portfolioWealthscopeReportViewed = new EventType('PORTFOLIO-WEALTHSCOPE-REPORT-VIEWED', 'Wealthscope Report Viewed', ProductType.PORTFOLIO, ['userId', 'portfolioId']);
	const portfolioValueGraphOpened = new EventType('PORTFOLIO-VALUE-GRAPH-OPENED', 'Portfolio Value Graph Opened', ProductType.PORTFOLIO, ['userId', 'portfolioId']);
	const portfolioValueGraphDurationChanged = new EventType('PORTFOLIO-VALUE-GRAPH-DURATION-CHANGED', 'Portfolio Value Graph Duration Changed', ProductType.PORTFOLIO, ['userId', 'portfolioId', 'duration']);

	// cmdtyView

	const cmdtyViewLogin = new EventType('CMDTYVIEW-LOGIN', 'User logged in', ProductType.PORTFOLIO, ['userId', 'sessionId']);
	const cmdtyViewLogout = new EventType('CMDTYVIEW-LOGOUT', 'User logged out', ProductType.PORTFOLIO, ['userId', 'sessionId']);

	// Entitlements

	const entitlementsAuthorizationFailed = new EventType('ENTITLEMENTS_AUTHORIZATION_FAILED', 'Authorization Failed', ProductType.ENTITLEMENTS, ['userId', 'operation']);

	return EventType;
})();

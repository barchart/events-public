const assert = require('@barchart/common-js/lang/assert'),
	array = require('@barchart/common-js/lang/array'),
	Enum = require('@barchart/common-js/lang/Enum'),
	is = require('@barchart/common-js/lang/is');

const uuid = require('uuid');

const CustomerType = require('./CustomerType'),
	ProductType = require('./ProductType');

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
		constructor(code, description, product, contextKeys, validators) {
			super(code, description);

			assert.argumentIsOptional(product, 'product', ProductType, 'ProductType');
			assert.argumentIsOptional(contextKeys, 'contextKeys', Array);
			assert.argumentIsOptional(validators, 'validators', Object);

			this._product = product || null;
			this._contextKeys = contextKeys || [ ];
			this._validators = validators || { };
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
		 * The validators.
		 *
		 * @public
		 * @returns {Array}
		 */
		get validators() {
			return this._validators;
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

		static get ALERT_APPLICATION_LOADED() {
			return alertApplicationLoaded;
		}

		static get ALERT_CREATED() {
			return alertCreated;
		}

		static get ALERT_STARTED() {
			return alertStarted;
		}

		static get ALERT_STARTED_ALL() {
			return alertStartedAll;
		}

		static get ALERT_STOPPED() {
			return alertStopped;
		}

		static get ALERT_STOPPED_ALL() {
			return alertStoppedAll;
		}

		static get ALERT_NOTES_EDITED() {
			return alertNotesEdited;
		}

		static get ALERT_DELETED() {
			return alertDeleted;
		}
		
		static get ALERT_DELETED_ALL() {
			return alertDeletedAll;
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

		static get CMDTYVIEW_WORKSPACE_CREATED() {
			return cmdtyViewWorkspaceCreated;
		}

		static get CMDTYVIEW_WORKSPACE_ACTIVATED() {
			return cmdtyViewWorkspaceActivated;
		}

		static get CMDTYVIEW_ADD_NEW_PANEL() {
			return cmdtyViewAddNewPanel;
		}

		static get CMDTYVIEW_REMOVE_PANEL() {
			return cmdtyViewRemovePanel;
		}

		static get CMDTYVIEW_COLUMNS_MENU_SHOW() {
			return cmdtyViewColumnsMenuShow;
		}

		static get CMDTYVIEW_COLUMN_ADDED() {
			return cmdtyViewColumnAdded;
		}

		static get CMDTYVIEW_COLUMN_REMOVED() {
			return cmdtyViewColumnRemoved;
		}

		static get CMDTYVIEW_QUOTES_SHOW_SYMBOL_BROWSER() {
			return cmdtyViewQuotesShowSymbolBrowser;
		}

		static get CMDTYVIEW_QUOTES_SHOW_EXPRESSION_DIALOG() {
			return cmdtyViewQuotesShowExpressionDialog;
		}

		static get CMDTYVIEW_COLUMNS_RESTORED() {
			return cmdtyViewColumnsRestored;
		}

		static get ENTITLEMENTS_AUTHORIZATION_FAILED() {
			return entitlementsAuthorizationFailed;
		}

		static get ENTITLEMWENTS_AUTHORIZATION_FAILED() {
			return entitlementsAuthorizationFailed;
		}

		static get MARKETPLACE_CUSTOMER_CREATED() {
			return marketplaceCustomerCreated;
		}

		static get MARKETPLACE_ACCOUNT_LINKED() {
			return marketplaceAccountLinked;
		}

		static get MARKETPLACE_CUSTOMER_OFFER_ACCESS_APPROVED() {
			return marketplaceCustomerOfferAccessApproved;
		}

		static get MARKETPLACE_OFFER_CREATED() {
			return marketplaceOfferCreated;
		}

		static get MARKETPLACE_CONTRACT_SIGNED() {
			return marketplaceContractSigned;
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

	const stringValidator = (x) => is.string(x) && x.length > 0;
	const uuidValidator = (x) => is.string(x) && x.length > 0 && uuid.validate(x);

	// Alerts

	const alertApplicationLoaded = new EventType('ALERT-APPLICATION-LOADED', 'Application Loaded', ProductType.ALERT, ['userId'], {[CustomerType.TGAM.code]: [stringValidator]});
	const alertCreated = new EventType('ALERT-CREATED', 'Alert Created', ProductType.ALERT, ['userId', 'alertId', 'symbol'], {[CustomerType.TGAM.code]: [stringValidator, uuidValidator, stringValidator]});
	const alertStarted = new EventType('ALERT-STARTED', 'Alert Started', ProductType.ALERT, ['userId', 'alertId', 'symbol'], {[CustomerType.TGAM.code]: [stringValidator, uuidValidator, stringValidator]});
	const alertStartedAll = new EventType('ALERT-STARTED-ALL', 'Alert Started', ProductType.ALERT, ['userId'], {[CustomerType.TGAM.code]: [stringValidator]});
	const alertStopped = new EventType('ALERT-STOPPED', 'Alert Stopped', ProductType.ALERT, ['userId', 'alertId', 'symbol'], {[CustomerType.TGAM.code]: [stringValidator, uuidValidator, stringValidator]});
	const alertStoppedAll = new EventType('ALERT-STOPPED-ALL', 'Alert Stopped', ProductType.ALERT, ['userId'], {[CustomerType.TGAM.code]: [stringValidator]});
	const alertNotesEdited = new EventType('ALERT-NOTES-EDITED', 'Alert Notes Edited', ProductType.ALERT, ['userId', 'alertId', 'symbol'], {[CustomerType.TGAM.code]: [stringValidator, uuidValidator, stringValidator]});
	const alertDeleted = new EventType('ALERT-DELETED', 'Alert Deleted', ProductType.ALERT, ['userId', 'alertId', 'symbol'], {[CustomerType.TGAM.code]: [stringValidator, uuidValidator, stringValidator]});
	const alertDeletedAll = new EventType('ALERT-DELETED-ALL', 'Alert Deleted', ProductType.ALERT, ['userId'], {[CustomerType.TGAM.code]: [stringValidator]});

	// Watchlist

	const watchlistApplicationLoaded = new EventType('WATCHLIST-APPLICATION-LOADED', 'Application Loaded', ProductType.WATCHLIST, ['userId'], {[CustomerType.TGAM.code]: [stringValidator]});
	const watchlistAccessed = new EventType('WATCHLIST-ACCESSED', 'Watchlist Selected', ProductType.WATCHLIST, ['userId', 'watchlistId'], {[CustomerType.TGAM.code]: [stringValidator, uuidValidator]});
	const watchlistCreated = new EventType('WATCHLIST-CREATED', 'Watchlist Created', ProductType.WATCHLIST, ['userId', 'watchlistId'], {[CustomerType.TGAM.code]: [stringValidator, uuidValidator]});
	const watchlistDownloaded = new EventType('WATCHLIST-DOWNLOADED', 'Watchlist Downloaded', ProductType.WATCHLIST, ['userId', 'watchlistId'], {[CustomerType.TGAM.code]: [stringValidator, uuidValidator]});
	const watchlistPrinted = new EventType('WATCHLIST-PRINTED', 'Watchlist Printed', ProductType.WATCHLIST, ['userId', 'watchlistId'], {[CustomerType.TGAM.code]: [stringValidator, uuidValidator]});
	const watchlistDeleted = new EventType('WATCHLIST-DELETED', 'Watchlist Deleted', ProductType.WATCHLIST, ['userId', 'watchlistId'], {[CustomerType.TGAM.code]: [stringValidator, uuidValidator]});
	const watchlistSymbolAdded = new EventType('WATCHLIST-SYMBOL-ADDED', 'Symbol Added', ProductType.WATCHLIST, ['userId', 'watchlistId', 'symbol'], {[CustomerType.TGAM.code]: [stringValidator, uuidValidator, stringValidator]});
	const watchlistSymbolRemoved = new EventType('WATCHLIST-SYMBOL-REMOVED', 'Symbol Removed', ProductType.WATCHLIST, ['userId', 'watchlistId', 'symbol'], {[CustomerType.TGAM.code]: [stringValidator, uuidValidator, stringValidator]});
	const watchlistCustomViewCreated = new EventType('WATCHLIST-CUSTOM-VIEW-CREATED', 'Custom View Created', ProductType.WATCHLIST, ['userId', 'viewName'], {[CustomerType.TGAM.code]: [stringValidator, stringValidator]});
	const watchlistCustomViewDeleted = new EventType('WATCHLIST-CUSTOM-VIEW-DELETED', 'Custom View Deleted', ProductType.WATCHLIST, ['userId', 'viewName'], {[CustomerType.TGAM.code]: [stringValidator, stringValidator]});
	const watchlistViewTypeChanged = new EventType('WATCHLIST-VIEW-TYPE-CHANGED', 'View Type Changed', ProductType.WATCHLIST, ['userId', 'watchlistId', 'viewType'], {[CustomerType.TGAM.code]: [stringValidator, uuidValidator, stringValidator]});
	const watchlistViewChanged = new EventType('WATCHLIST-VIEW-CHANGED', 'View Changed', ProductType.WATCHLIST, ['userId', 'watchlistId', 'viewName'], {[CustomerType.TGAM.code]: [stringValidator, uuidValidator, stringValidator]});
	const watchlistDataModeChanged = new EventType('WATCHLIST-DATA-MODE-CHANGED', 'Data mode changed', ProductType.WATCHLIST, ['userId', 'watchlistId', 'dataMode'], {[CustomerType.TGAM.code]: [stringValidator, uuidValidator, stringValidator]});
	const watchlistEditScreenInvoked = new EventType('WATCHLIST-SCREEN-INVOKED-EDIT', 'Edit Screen Invoked', ProductType.WATCHLIST, ['userId', 'watchlistId'], {[CustomerType.TGAM.code]: [stringValidator, uuidValidator]});
	const watchlistPortfolioAddScreenInvoked = new EventType('WATCHLIST-SCREEN-INVOKED-PORTFOLIO-ADD', 'Portfolio Add Screen Invoked', ProductType.WATCHLIST, ['userId', 'watchlistId', 'symbol'], {[CustomerType.TGAM.code]: [stringValidator, uuidValidator, stringValidator]});
	const watchlistSymbolNotesScreenInvoked = new EventType('WATCHLIST-SCREEN-INVOKED-SYMBOL-NOTES', 'Symbol Notes Screen Accessed', ProductType.WATCHLIST, ['userId', 'watchlistId', 'symbol'], {[CustomerType.TGAM.code]: [stringValidator, uuidValidator, stringValidator]});
	const watchlistAssetClassFilterActivated = new EventType('WATCHLIST-ASSET-CLASS-FILTER-ACTIVATED', 'Asset Filter Activated', ProductType.WATCHLIST, ['userId', 'classFilter'], {[CustomerType.TGAM.code]: [stringValidator, stringValidator]});
	const watchlistAssetClassFilterDeactivated = new EventType('WATCHLIST-ASSET-CLASS-FILTER-DEACTIVATED', 'Asset Filter Deactivated', ProductType.WATCHLIST, ['userId', 'classFilter'], {[CustomerType.TGAM.code]: [stringValidator, stringValidator]});

	// Portfolio

	const portfolioApplicationLoaded = new EventType('PORTFOLIO-APPLICATION-LOADED', 'Application Loaded', ProductType.PORTFOLIO, ['userId']);
	const portfolioAccessed = new EventType('PORTFOLIO-ACCESSED', 'Portfolio Accessed', ProductType.PORTFOLIO, ['userId', 'portfolioId']);
	const portfolioCreated = new EventType('PORTFOLIO-CREATED', 'Portfolio Created', ProductType.PORTFOLIO, ['userId', 'portfolioId']);
	const portfolioDownloaded = new EventType('PORTFOLIO-DOWNLOADED', 'Portfolio Downloaded', ProductType.PORTFOLIO, ['userId', 'portfolioId']);
	const portfolioDeleted = new EventType('PORTFOLIO-DELETED', 'Portfolio Deleted', ProductType.PORTFOLIO, ['userId', 'portfolioId']);
	const portfolioTransactionCreated = new EventType('PORTFOLIO-TRANSACTION-CREATED', 'Transaction Created', ProductType.PORTFOLIO, ['userId', 'portfolioId', 'positionId', 'symbol']);
	const portfolioTransactionEdited = new EventType('PORTFOLIO-TRANSACTION-EDITED', 'Transaction Edited', ProductType.PORTFOLIO, ['userId', 'portfolioId', 'positionId', 'symbol']);
	const portfolioTransactionDeleted = new EventType('PORTFOLIO-TRANSACTION-DELETED', 'Transaction Deleted', ProductType.PORTFOLIO, ['userId', 'portfolioId', 'positionId', 'symbol']);
	const portfolioPositionCreated = new EventType('PORTFOLIO-POSITION-CREATED', 'Position Created', ProductType.PORTFOLIO, ['userId', 'portfolioId', 'positionId', 'symbol']);
	const portfolioPositionDeleted = new EventType('PORTFOLIO-POSITION-DELETED', 'Position Deleted', ProductType.PORTFOLIO, ['userId', 'portfolioId', 'positionId', 'symbol']);
	const portfolioBrokerageReportDownloaded = new EventType('PORTFOLIO-BROKERAGE-REPORT-DOWNLOADED', 'Brokerage Report Downloaded', ProductType.PORTFOLIO, ['userId', 'portfolioId', 'frame']);
	const portfolioCustomViewCreated = new EventType('PORTFOLIO-CUSTOM-VIEW-CREATED', 'Custom View Created', ProductType.PORTFOLIO, ['userId', 'viewName']);
	const portfolioCustomViewDeleted = new EventType('PORTFOLIO-CUSTOM-VIEW-DELETED', 'Custom View Deleted', ProductType.PORTFOLIO, ['userId', 'viewName']);
	const portfolioViewTypeChanged = new EventType('PORTFOLIO-VIEW-TYPE-CHANGED', 'View Changed', ProductType.PORTFOLIO, ['userId', 'portfolioId', 'viewName']);
	const portfolioShowClosedPositionsChanged = new EventType('PORTFOLIO-CLOSED-POSITIONS-CHANGED', 'Closed Positions View Changed', ProductType.PORTFOLIO, ['userId', 'portfolioId', 'showClosedPositions']);
	const portfolioDividendStrategyChanged = new EventType('PORTFOLIO-DIVIDEND-STRATEGY-CHANGED', 'Dividend Strategy Changed', ProductType.PORTFOLIO, ['userId', 'portfolioId', 'dividendStrategy']);
	const portfolioCashAdjustmentStrategyChanged = new EventType('PORTFOLIO-CASH-ADJUSTMENT-STRATEGY-CHANGED', 'Cash Adjustment Strategy Changed', ProductType.PORTFOLIO, ['userId', 'portfolioId', 'cashAdjustmentStrategy']);
	const portfolioTransactionHistorySingleInvoked = new EventType('PORTFOLIO-SCREEN-INVOKED-TRANSACTIONS-SINGLE', 'Transaction History Viewed (Single Position)', ProductType.PORTFOLIO, ['userId', 'portfolioId', 'positionId', 'symbol']);
	const portfolioTransactionHistoryAllInvoked = new EventType('PORTFOLIO-SCREEN-INVOKED-TRANSACTIONS-ALL', 'Transaction History Viewed (All Positions)', ProductType.PORTFOLIO, ['userId', 'portfolioId']);
	const portfolioEditPortfolioScreenInvoked = new EventType('PORTFOLIO-SCREEN-INVOKED-EDIT-PORTFOLIO', 'Portfolio Edit Screen Invoked', ProductType.PORTFOLIO, ['userId', 'portfolioId']);
	const portfolioEditTransactionScreenInvoked = new EventType('PORTFOLIO-SCREEN-INVOKED-EDIT-TRANSACTION', 'Transaction Edit Screen Invoked', ProductType.PORTFOLIO, ['userId', 'portfolioId', 'positionId', 'symbol']);
	const portfolioWatchlistAddScreenInvoked = new EventType('PORTFOLIO-SCREEN-INVOKED-WATCHLIST-ADD', 'Watchlist Add Edit Screen Invoked', ProductType.PORTFOLIO, ['userId', 'portfolioId', 'positionId', 'symbol']);
	const portfolioWealthscopeReportViewed = new EventType('PORTFOLIO-WEALTHSCOPE-REPORT-VIEWED', 'Wealthscope Report Viewed', ProductType.PORTFOLIO, ['userId', 'portfolioId']);
	const portfolioValueGraphOpened = new EventType('PORTFOLIO-VALUE-GRAPH-OPENED', 'Portfolio Value Graph Opened', ProductType.PORTFOLIO, ['userId', 'portfolioId']);
	const portfolioValueGraphDurationChanged = new EventType('PORTFOLIO-VALUE-GRAPH-DURATION-CHANGED', 'Portfolio Value Graph Duration Changed', ProductType.PORTFOLIO, ['userId', 'portfolioId', 'duration']);

	// cmdtyView

	const cmdtyViewLogin = new EventType('CMDTYVIEW-LOGIN', 'User logged in', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'browser']);
	const cmdtyViewLogout = new EventType('CMDTYVIEW-LOGOUT', 'User logged out', ProductType.CMDTYVIEW, ['userId', 'sessionId']);
	const cmdtyViewWorkspaceCreated = new EventType('CMDTYVIEW-WORKSPACE-CREATED', 'Workspace Created', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'workspaceId', 'title']);
	const cmdtyViewWorkspaceActivated = new EventType('CMDTYVIEW-WORKSPACE-ACTIVATED', 'Workspace Activated', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'workspaceId', 'title', 'panels']);
	const cmdtyViewAddNewPanel = new EventType('CMDTYVIEW-ADD-NEW-PANEL', 'Add New Panel', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'title', 'origin']);
	const cmdtyViewRemovePanel = new EventType('CMDTYVIEW-REMOVE-PANEL', 'Add New Panel', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'title']);
	const cmdtyViewQuotesShowSymbolBrowser = new EventType('CMDTYVIEW-QUOTES-SHOW-SYMBOL-BROWSER', 'Show Symbol Browser in Quotes panel', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'title']);
	const cmdtyViewQuotesShowExpressionDialog = new EventType('CMDTYVIEW-QUOTES-SHOW-EXPRESSION-DIALOG', 'Show Expression Dialog in Quotes panel', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'title']);
	
	const cmdtyViewColumnsMenuShow = new EventType('CMDTYVIEW-COLUMNS-MENU-SHOW', 'Columns Menu Display', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'columns']);
	const cmdtyViewColumnAdded = new EventType('CMDTYVIEW-COLUMN-ADDED', 'Column Added', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'column', 'columns']);
	const cmdtyViewColumnRemoved = new EventType('CMDTYVIEW-COLUMN-REMOVED', 'Column Removed', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'column', 'columns']);
	const cmdtyViewColumnsRestored = new EventType('CMDTYVIEW-COLUMNS-RESTORED', 'Column Restored', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'columns']);

	// Entitlements

	const entitlementsAuthorizationFailed = new EventType('ENTITLEMENTS_AUTHORIZATION_FAILED', 'Authorization Failed', ProductType.ENTITLEMENTS, ['userId', 'operation']);

	// Marketplace

	const marketplaceCustomerCreated = new EventType('CUSTOMER-CREATED', 'Customer Created', ProductType.MARKETPLACE, ['userId', 'userType', 'companyId', 'companyName', 'entityId']);
	const marketplaceAccountLinked = new EventType('ACCOUNT-LINKED', 'Account Linked', ProductType.MARKETPLACE, ['userId', 'userType', 'companyId', 'companyName', 'entityId']);
	const marketplaceCustomerOfferAccessApproved = new EventType('CUSTOMER-OFFER-ACCESS-APPROVED', 'Offer Access Approved', ProductType.MARKETPLACE, ['userId', 'userType', 'companyId', 'companyName', 'entityId']);
	const marketplaceOfferCreated = new EventType('OFFER-CREATED', 'Offer Created', ProductType.MARKETPLACE, ['userId', 'userType', 'companyId', 'companyName', 'entityId']);
	const marketplaceContractSigned = new EventType('CONTRACT-SIGNED', 'Contract Signed', ProductType.MARKETPLACE, ['userId', 'userType', 'companyId', 'companyName', 'entityId']);

	return EventType;
})();

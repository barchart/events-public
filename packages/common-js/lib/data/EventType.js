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
	 * @param {Object=} validators
	 * @param {Object=} transformers
	 */
	class EventType extends Enum {
		constructor(code, description, product, contextKeys, validators, transformers) {
			super(code, description);

			assert.argumentIsOptional(product, 'product', ProductType, 'ProductType');
			assert.argumentIsOptional(contextKeys, 'contextKeys', Array);
			assert.argumentIsOptional(validators, 'validators', Object);
			assert.argumentIsOptional(transformers, 'transformers', Object);

			this._product = product || null;
			this._contextKeys = contextKeys || [ ];
			this._validators = validators || { };
			this._transformers = transformers || { };
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
		 * @returns {Object}
		 */
		get validators() {
			return this._validators;
		}

		/**
		 * The transformers.
		 *
		 * @public
		 * @returns {Object}
		 */
		get transformers() {
			return this._transformers;
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

		// ALERTING SERVICE

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

		// WATCHLIST

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

		// PORTFOLIO

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

		// CMDTYVIEW
		
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

		static get CMDTYVIEW_PANEL_ADDED() {
			return cmdtyViewPanelAdded;
		}

		static get CMDTYVIEW_PANEL_REMOVED() {
			return cmdtyViewPanelRemoved;
		}

		static get CMDTYVIEW_SYMBOL_BROWSER_SHOWN() {
			return cmdtyViewSymbolBrowserShown;
		}

		static get CMDTYVIEW_SYMBOL_BROWSER_SEARCH() {
			return cmdtyViewSymbolBrowserSearch;
		}

		static get CMDTYVIEW_SYMBOL_BROWSER_SYMBOL_CONFIRMED() {
			return cmdtyViewSymbolBrowerSymbolConfirmed;
		}

		static get CMDTYVIEW_SYMBOL_BROWSER_BRANCH_STATE_CHANGED() {
			return cmdtyViewSymbolBrowserBranchStateChanged;
		}

		static get CMDTYVIEW_SYMBOL_BROWSER_FILTER_CHANGED() {
			return cmdtyViewSymbolBrowserFilterChanged;
		}

		static get CMDTYVIEW_SYMBOL_BROWSER_SYMBOLS_INSERTED() {
			return cmdtyViewSymbolBrowserSymbolsInserted;
		}

		static get CMDTYVIEW_SYMBOL_SEARCH_SYMBOL_SELECTED() {
			return cmdtyViewSymbolSearchSymbolSelected;
		}

		static get CMDTYVIEW_SYMBOL_SEARCH_RESULTS_SHOWN() {
			return cmdtyViewSymbolSearchResultsShown;
		}

		static get CMDTYVIEW_SYMBOL_SEARCH_BRANCH_SELECTED() {
			return cmdtyViewSymbolSearchBranchSelected;
		}

		static get CMDTYVIEW_SYMBOL_SEARCH_OPTIONS_TREE_OPENED() {
			return cmdtyViewSymbolSearchOptionsTreeOpened;
		}

		static get CMDTYVIEW_EXPRESSION_DIALOG_SHOWN() {
			return cmdtyViewExpressionDialogShown;
		}

		static get CMDTYVIEW_EXPRESSION_ADDED() {
			return cmdtyViewExpressionAdded;
		}

		static get CMDTYVIEW_COLUMNS_MENU_SHOWN() {
			return cmdtyViewColumnsMenuShown;
		}

		static get CMDTYVIEW_COLUMNS_ADDED() {
			return cmdtyViewColumnsAdded;
		}

		static get CMDTYVIEW_COLUMNS_REMOVED() {
			return cmdtyViewColumnsRemoved;
		}

		static get CMDTYVIEW_COLUMNS_RESTORED() {
			return cmdtyViewColumnsRestored;
		}

		static get CMDTYVIEW_EXCEL_EXPORT_SHOWN() {
			return cmdtyViewExcelExportShown;
		}

		static get CMDTYVIEW_EXCEL_EXPORT_COMPLETED() {
			return cmdtyViewExcelExportCompleted;
		}

		static get CMDTYVIEW_QUOTES_PRICE_FORMAT_SHOWN() {
			return cmdtyViewQuotesPriceFormatShown;
		}

		static get CMDTYVIEW_QUOTES_PRICE_FORMAT_CHANGED() {
			return cmdtyViewQuotesPriceFormatChanged;
		}

		static get CMDTYVIEW_QUOTES_CONTEXT_MENU_SHOWN() {
			return cmdtyViewQuotesContextMenuShown;
		}

		static get CMDTYVIEW_QUOTES_CONTEXT_MENU_SELECTED() {
			return cmdtyViewQuotesContextMenuSelected;
		}

		static get CMDTYVIEW_OPTIONS_STRIKES_NUM_STRIKES_MENU_SHOWN() {
			return cmdtyViewOptionsStrikesNumStrikesMenuShown;
		}

		static get CMDTYVIEW_OPTIONS_STRIKES_NUM_STRIKES_CHANGED() {
			return cmdtyViewOptionsStrikesNumStrikesChanged;
		}

		static get CMDTYVIEW_OPTIONS_STRIKES_FIELDS_MENU_SHOWN() {
			return cmdtyViewOptionsStrikesFieldsMenuShown;
		}

		static get CMDTYVIEW_OPTIONS_STRIKES_FIELD_CHANGED() {
			return cmdtyViewOptionsStrikesFieldChanged;
		}

		static get CMDTYVIEW_OPTIONS_STRIKES_ROOT_SELECTED() {
			return cmdtyViewOptionsStrikesRootSelected;
		}

		static get CMDTYVIEW_OPTIONS_CHAIN_DATE_CHANGED() {
			return cmdtyViewOptionsChainDateChanged;
		}

		static get CMDTYVIEW_OPTIONS_CHAIN_HIGHLIGHT_CHANGED() {
			return cmdtyViewOptionsChainHighlightChanged;
		}

		static get CMDTYVIEW_OPTIONS_CHAIN_STRIKE_COUNT_CHANGED() {
			return cmdtyViewOptionsChainStrikeCountChanged;
		}

		static get CMDTYVIEW_OPTIONS_CHAIN_COLUMNS_VIEW_CHANGED() {
			return cmdtyViewOptionsChainColumnsViewChanged;
		}

		static get CMDTYVIEW_OPTIONS_CHAIN_EXPIRATION_MENU_SHOWN() {
			return cmdtyViewOptionsChainExpirationMenuShown;
		}

		static get CMDTYVIEW_OPTIONS_CHAIN_EXPIRATION_SELECTED() {
			return cmdtyViewOptionsChainExpirationSelected;
		}

		static get CMDTYVIEW_HISTORY_AGGREGATION_MENU_SHOWN() {
			return cmdtyViewHistoryAggregationMenuShown;
		}

		static get CMDTYVIEW_HISTORY_AGGREGATION_SELECTED() {
			return cmdtyViewHistoryAggregationSelected;
		}

		static get CMDTYVIEW_HISTORY_RANGE_SELECTED() {
			return cmdtyViewHistoryRangeSelected;
		}

		static get CMDTYVIEW_HISTORY_CONTRACT_ROLL_CHANGED() {
			return cmdtyViewHistoryContractRollChanged;
		}

		static get CMDTYVIEW_HISTORY_INDICATOR_DIALOG_SHOWN() {
			return cmdtyViewHistoryIndicatorDialogShown;
		}

		static get CMDTYVIEW_HISTORY_INDICATOR_ADDED() {
			return cmdtyViewHistoryIndicatorAdded;
		}

		static get CMDTYVIEW_HISTORY_INDICATOR_REMOVED() {
			return cmdtyViewHistoryIndicatorRemoved;
		}

		static get CMDTYVIEW_NEWS_FILTER_VISIBILITY_CHANGED() {
			return cmdtyViewNewsFilterVisibilityChanged;
		}
		
		static get CMDTYVIEW_NEWS_SHOW_SYMBOLS_CHANGED() {
			return cmdtyViewNewsShowSymbolsChanged;
		}

		static get CMDTYVIEW_NEWS_OPEN_CHART_ON_CLICK_CHANGED() {
			return cmdtyViewNewsOpenChartOnClickChanged;
		}

		static get CMDTYVIEW_NEWS_FILTER_CHANGED() {
			return cmdtyViewNewsFilterChanged;
		}

		static get CMDTYVIEW_GRAIN_BID_ZIP_CODE_CHANGED() {
			return cmdtyViewGraiBidZipCodeChanged;
		}

		static get CMDTYVIEW_GRAIN_BID_LOCATIONS_CHANGED() {
			return cmdtyViewGrainBidLocationsChanged;
		}

		static get CMDTYVIEW_GRAIN_BID_COMMODITIES_CHANGED() {
			return cmdtyViewGrainBidCommoditiesChanged;
		}

		static get CMDTYVIEW_GRAIN_BID_DISTANCE_CHANGED() {
			return cmdtyViewGrainBidDistanceChanged;
		}

		static get CMDTYVIEW_GRAIN_BID_DELIVERIES_CHANGED() {
			return cmdtyViewGrainBidDeliveriesChanged;
		}

		// ENTITLEMENTS

		static get ENTITLEMWENTS_AUTHORIZATION_FAILED() {
			return entitlementsAuthorizationFailed;
		}

		static get ENTITLEMENTS_AUTHORIZATION_FAILED() {
			return entitlementsAuthorizationFailed;
		}

		// MARKETPLACE

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

        // BARCHART EXCEL

        static get BARCHART_EXCEL_LOGIN() {
            return barchartExcelLogin;
        }

        static get BARCHART_EXCEL_LOGOUT() {
            return barchartExcelLogout;
        }

        static get BARCHART_EXCEL_QUOTES_OPENED() {
            return barchartExcelQuotesOpened;
        }

        static get BARCHART_EXCEL_QUOTES_CLOSED() {
            return barchartExcelQuotesClosed;
        }

        static get BARCHART_EXCEL_QUOTES_INSERTED() {
            return barchartExcelQuotesInserted;
        }

        static get BARCHART_EXCEL_HISTORY_OPENED() {
            return barchartExcelHistoryOpened;
        }

        static get BARCHART_EXCEL_HISTORY_CLOSED() {
            return barchartExcelHistoryClosed;
        }

        static get BARCHART_EXCEL_HISTORY_INSERTED() {
            return barchartExcelHistoryInserted;
        }

        static get BARCHART_EXCEL_OPTIONS_OPENED() {
            return barchartExcelOptionsOpened;
        }

        static get BARCHART_EXCEL_OPTIONS_CLOSED() {
            return barchartExcelOptionsClosed;
        }

        static get BARCHART_EXCEL_OPTIONS_INSERTED() {
            return barchartExcelOptionsInserted;
        }

        static get BARCHART_EXCEL_CHART_OPENED() {
            return barchartExcelChartOpened;
        }

        static get BARCHART_EXCEL_CHART_CLOSED() {
            return barchartExcelChartClosed;
        }

        static get BARCHART_EXCEL_CHART_INSERTED() {
            return barchartExcelChartInserted;
        }

        static get BARCHART_EXCEL_FORWARD_CURVES_OPENED() {
            return barchartExcelForwardCurvesOpened;
        }

        static get BARCHART_EXCEL_FORWARD_CURVES_CLOSED() {
            return barchartExcelForwardCurvesClosed;
        }

        static get BARCHART_EXCEL_FORWARD_CURVES_INSERTED() {
            return barchartExcelForwardCurvesInserted;
        }

        static get BARCHART_EXCEL_TIME_AND_SALES_OPENED() {
            return barchartExcelTimeAndSalesOpened;
        }

        static get BARCHART_EXCEL_TIME_AND_SALES_CLOSED() {
            return barchartExcelTimeAndSalesClosed;
        }

        static get BARCHART_EXCEL_TIME_AND_SALES_INSERTED() {
            return barchartExcelTimeAndSalesInserted;
        }

        static get BARCHART_EXCEL_REFRESH_SELECTED() {
            return barchartExcelRefreshSelected;
        }

        static get BARCHART_EXCEL_REFRESH_ALL() {
            return barchartExcelRefreshAll;
        }

        static get BARCHART_EXCEL_STOCKS_LISTS_OPENED() {
            return barchartExcelStocksListsOpened;
        }

        static get BARCHART_EXCEL_STOCKS_LISTS_CLOSED() {
            return barchartExcelStocksListsClosed;
        }

        static get BARCHART_EXCEL_STOCKS_LISTS_INSERTED() {
            return barchartExcelStocksListsInserted;
        }

        static get BARCHART_EXCEL_ETFS_LISTS_OPENED() {
            return barchartExcelEtfsListsOpened;
        }

        static get BARCHART_EXCEL_ETFS_LISTS_CLOSED() {
            return barchartExcelEtfsListsClosed;
        }

        static get BARCHART_EXCEL_ETFS_LISTS_INSERTED() {
            return barchartExcelEtfsListsInserted;
        }

        static get BARCHART_EXCEL_OPTIONS_LISTS_OPENED() {
            return barchartExcelOptionsListsOpened;
        }

        static get BARCHART_EXCEL_OPTIONS_LISTS_CLOSED() {
            return barchartExcelOptionsListsClosed;
        }

        static get BARCHART_EXCEL_OPTIONS_LISTS_INSERTED() {
            return barchartExcelOptionsListsInserted;
        }

        static get BARCHART_EXCEL_FUTURES_LISTS_OPENED() {
            return barchartExcelFuturesListsOpened;
        }

        static get BARCHART_EXCEL_FUTURES_LISTS_CLOSED() {
            return barchartExcelFuturesListsClosed;
        }

        static get BARCHART_EXCEL_FUTURES_LISTS_INSERTED() {
            return barchartExcelFuturesListsInserted;
        }

        static get BARCHART_EXCEL_CURRENCIES_LISTS_OPENED() {
            return barchartExcelCurrenciesListsOpened;
        }

        static get BARCHART_EXCEL_CURRENCIES_LISTS_CLOSED() {
            return barchartExcelCurrenciesListsClosed;
        }

        static get BARCHART_EXCEL_CURRENCIES_LISTS_INSERTED() {
            return barchartExcelCurrenciesListsInserted;
        }

        static get BARCHART_EXCEL_FUNDAMENTALS_OPENED() {
            return barchartExcelFundamentalsOpened;
        }

        static get BARCHART_EXCEL_FUNDAMENTALS_CLOSED() {
            return barchartExcelFundamentalsClosed;
        }

        static get BARCHART_EXCEL_FUNDAMENTALS_INSERTED() {
            return barchartExcelFundamentalsInserted;
        }

        static get BARCHART_EXCEL_STOCK_SCREENER_OPENED() {
            return barchartExcelStockScreenerOpened;
        }

        static get BARCHART_EXCEL_STOCK_SCREENER_CLOSED() {
            return barchartExcelStockScreenerClosed;
        }

        static get BARCHART_EXCEL_STOCK_SCREENER_INSERTED() {
            return barchartExcelStockScreenerInserted;
        }

        static get BARCHART_EXCEL_ETF_SCREENER_OPENED() {
            return barchartExcelEtfScreenerOpened;
        }

        static get BARCHART_EXCEL_ETF_SCREENER_CLOSED() {
            return barchartExcelEtfScreenerClosed;
        }

        static get BARCHART_EXCEL_ETF_SCREENER_INSERTED() {
            return barchartExcelEtfScreenerInserted;
        }

        static get BARCHART_EXCEL_OPTIONS_SCREENER_OPENED() {
            return barchartExcelOptionsScreenerOpened;
        }

        static get BARCHART_EXCEL_OPTIONS_SCREENER_CLOSED() {
            return barchartExcelOptionsScreenerClosed;
        }

        static get BARCHART_EXCEL_OPTIONS_SCREENER_INSERTED() {
            return barchartExcelOptionsScreenerInserted;
        }

        static get BARCHART_EXCEL_VOLATILITY_ANALYSIS_OPENED() {
            return barchartExcelVolatilityAnalysisOpened;
        }

        static get BARCHART_EXCEL_VOLATILITY_ANALYSIS_CLOSED() {
            return barchartExcelVolatilityAnalysisClosed;
        }

        static get BARCHART_EXCEL_VOLATILITY_ANALYSIS_INSERTED() {
            return barchartExcelVolatilityAnalysisInserted;
        }

        static get BARCHART_EXCEL_WATCHLIST_OPENED() {
            return barchartExcelWatchlistOpened;
        }

        static get BARCHART_EXCEL_WATCHLIST_CLOSED() {
            return barchartExcelWatchlistClosed;
        }

        static get BARCHART_EXCEL_WATCHLIST_INSERTED() {
            return barchartExcelWatchlistInserted;
        }

        static get BARCHART_EXCEL_PORTFOLIO_OPENED() {
            return barchartExcelPortfolioOpened;
        }

        static get BARCHART_EXCEL_PORTFOLIO_CLOSED() {
            return barchartExcelPortfolioClosed;
        }

        static get BARCHART_EXCEL_PORTFOLIO_INSERTED() {
            return barchartExcelPortfolioInserted;
        }

        static get BARCHART_EXCEL_ABOUT_OPENED() {
            return barchartExcelAboutOpened;
        }

        static get BARCHART_EXCEL_ABOUT_CLOSED() {
            return barchartExcelAboutClosed;
        }

        static get BARCHART_EXCEL_PREFERENCES_OPENED() {
            return barchartExcelPreferencesOpened;
        }

        static get BARCHART_EXCEL_PREFERENCES_CLOSED() {
            return barchartExcelPreferencesClosed;
        }

        static get BARCHART_EXCEL_SETTINGS_OPENED() {
            return barchartExcelSettingsOpened;
        }

        static get BARCHART_EXCEL_SETTINGS_CLOSED() {
            return barchartExcelSettingsClosed;
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
	
	const validators = { };
	
	validators.string = x => is.string(x) && x.length > 0;
	validators.uuid = x => is.string(x) && x.length > 0 && uuid.validate(x);

	validators.stringOptional = x => is.string(x);
	
	const transformers = { };

	transformers.stringOptional = x => x || '';
	
	// Alerts

	const alertApplicationLoaded = new EventType('ALERT-APPLICATION-LOADED', 'Application Loaded', ProductType.ALERT, ['userId'], {[CustomerType.TGAM.code]: [validators.string]});
	const alertCreated = new EventType('ALERT-CREATED', 'Alert Created', ProductType.ALERT, ['userId', 'alertId', 'symbol'], {[CustomerType.TGAM.code]: [validators.string, validators.uuid, validators.string]});
	const alertStarted = new EventType('ALERT-STARTED', 'Alert Started', ProductType.ALERT, ['userId', 'alertId', 'symbol'], {[CustomerType.TGAM.code]: [validators.string, validators.uuid, validators.string]});
	const alertStartedAll = new EventType('ALERT-STARTED-ALL', 'Alert Started', ProductType.ALERT, ['userId'], {[CustomerType.TGAM.code]: [validators.string]});
	const alertStopped = new EventType('ALERT-STOPPED', 'Alert Stopped', ProductType.ALERT, ['userId', 'alertId', 'symbol'], {[CustomerType.TGAM.code]: [validators.string, validators.uuid, validators.string]});
	const alertStoppedAll = new EventType('ALERT-STOPPED-ALL', 'Alert Stopped', ProductType.ALERT, ['userId'], {[CustomerType.TGAM.code]: [validators.string]});
	const alertNotesEdited = new EventType('ALERT-NOTES-EDITED', 'Alert Notes Edited', ProductType.ALERT, ['userId', 'alertId', 'symbol'], {[CustomerType.TGAM.code]: [validators.string, validators.uuid, validators.string]});
	const alertDeleted = new EventType('ALERT-DELETED', 'Alert Deleted', ProductType.ALERT, ['userId', 'alertId', 'symbol'], {[CustomerType.TGAM.code]: [validators.string, validators.uuid, validators.string]});
	const alertDeletedAll = new EventType('ALERT-DELETED-ALL', 'Alert Deleted', ProductType.ALERT, ['userId'], {[CustomerType.TGAM.code]: [validators.string]});

	// Watchlist

	const watchlistApplicationLoaded = new EventType('WATCHLIST-APPLICATION-LOADED', 'Application Loaded', ProductType.WATCHLIST, ['userId'], {[CustomerType.TGAM.code]: [validators.string]});
	const watchlistAccessed = new EventType('WATCHLIST-ACCESSED', 'Watchlist Selected', ProductType.WATCHLIST, ['userId', 'watchlistId'], {[CustomerType.TGAM.code]: [validators.string, validators.uuid]});
	const watchlistCreated = new EventType('WATCHLIST-CREATED', 'Watchlist Created', ProductType.WATCHLIST, ['userId', 'watchlistId'], {[CustomerType.TGAM.code]: [validators.string, validators.uuid]});
	const watchlistDownloaded = new EventType('WATCHLIST-DOWNLOADED', 'Watchlist Downloaded', ProductType.WATCHLIST, ['userId', 'watchlistId'], {[CustomerType.TGAM.code]: [validators.string, validators.uuid]});
	const watchlistPrinted = new EventType('WATCHLIST-PRINTED', 'Watchlist Printed', ProductType.WATCHLIST, ['userId', 'watchlistId'], {[CustomerType.TGAM.code]: [validators.string, validators.uuid]});
	const watchlistDeleted = new EventType('WATCHLIST-DELETED', 'Watchlist Deleted', ProductType.WATCHLIST, ['userId', 'watchlistId'], {[CustomerType.TGAM.code]: [validators.string, validators.uuid]});
	const watchlistSymbolAdded = new EventType('WATCHLIST-SYMBOL-ADDED', 'Symbol Added', ProductType.WATCHLIST, ['userId', 'watchlistId', 'symbol'], {[CustomerType.TGAM.code]: [validators.string, validators.uuid, validators.string]});
	const watchlistSymbolRemoved = new EventType('WATCHLIST-SYMBOL-REMOVED', 'Symbol Removed', ProductType.WATCHLIST, ['userId', 'watchlistId', 'symbol'], {[CustomerType.TGAM.code]: [validators.string, validators.uuid, validators.string]});
	const watchlistCustomViewCreated = new EventType('WATCHLIST-CUSTOM-VIEW-CREATED', 'Custom View Created', ProductType.WATCHLIST, ['userId', 'viewName'], {[CustomerType.TGAM.code]: [validators.string, validators.string]});
	const watchlistCustomViewDeleted = new EventType('WATCHLIST-CUSTOM-VIEW-DELETED', 'Custom View Deleted', ProductType.WATCHLIST, ['userId', 'viewName'], {[CustomerType.TGAM.code]: [validators.string, validators.string]});
	const watchlistViewTypeChanged = new EventType('WATCHLIST-VIEW-TYPE-CHANGED', 'View Type Changed', ProductType.WATCHLIST, ['userId', 'watchlistId', 'viewType'], {[CustomerType.TGAM.code]: [validators.string, validators.uuid, validators.string]});
	const watchlistViewChanged = new EventType('WATCHLIST-VIEW-CHANGED', 'View Changed', ProductType.WATCHLIST, ['userId', 'watchlistId', 'viewName'], {[CustomerType.TGAM.code]: [validators.string, validators.uuid, validators.string]});
	const watchlistDataModeChanged = new EventType('WATCHLIST-DATA-MODE-CHANGED', 'Data mode changed', ProductType.WATCHLIST, ['userId', 'watchlistId', 'dataMode'], {[CustomerType.TGAM.code]: [validators.string, validators.uuid, validators.string]});
	const watchlistEditScreenInvoked = new EventType('WATCHLIST-SCREEN-INVOKED-EDIT', 'Edit Screen Invoked', ProductType.WATCHLIST, ['userId', 'watchlistId'], {[CustomerType.TGAM.code]: [validators.string, validators.uuid]});
	const watchlistPortfolioAddScreenInvoked = new EventType('WATCHLIST-SCREEN-INVOKED-PORTFOLIO-ADD', 'Portfolio Add Screen Invoked', ProductType.WATCHLIST, ['userId', 'watchlistId', 'symbol'], {[CustomerType.TGAM.code]: [validators.string, validators.uuid, validators.string]});
	const watchlistSymbolNotesScreenInvoked = new EventType('WATCHLIST-SCREEN-INVOKED-SYMBOL-NOTES', 'Symbol Notes Screen Accessed', ProductType.WATCHLIST, ['userId', 'watchlistId', 'symbol'], {[CustomerType.TGAM.code]: [validators.string, validators.uuid, validators.string]});
	const watchlistAssetClassFilterActivated = new EventType('WATCHLIST-ASSET-CLASS-FILTER-ACTIVATED', 'Asset Filter Activated', ProductType.WATCHLIST, ['userId', 'classFilter'], {[CustomerType.TGAM.code]: [validators.string, validators.string]});
	const watchlistAssetClassFilterDeactivated = new EventType('WATCHLIST-ASSET-CLASS-FILTER-DEACTIVATED', 'Asset Filter Deactivated', ProductType.WATCHLIST, ['userId', 'classFilter'], {[CustomerType.TGAM.code]: [validators.string, validators.string]});

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

	const cmdtyViewLogin = new EventType('CMDTYVIEW-LOGIN', 'User Logged In', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'browser', 'hostname'], {[CustomerType.BARCHART.code]: [null, null, null, validators.stringOptional]}, {[CustomerType.BARCHART.code]: [null, null, null, transformers.stringOptional]});
	const cmdtyViewLogout = new EventType('CMDTYVIEW-LOGOUT', 'User Logged Out', ProductType.CMDTYVIEW, ['userId', 'sessionId']);

	const cmdtyViewWorkspaceCreated = new EventType('CMDTYVIEW-WORKSPACE-CREATED', 'Workspace Created', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'workspaceId', 'title']);
	const cmdtyViewWorkspaceActivated = new EventType('CMDTYVIEW-WORKSPACE-ACTIVATED', 'Workspace Activated', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'workspaceId', 'title', 'panels']);

	const cmdtyViewPanelAdded = new EventType('CMDTYVIEW-PANEL-ADDED', 'Panel Added', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'title', 'origin']);
	const cmdtyViewPanelRemoved = new EventType('CMDTYVIEW-PANEL-REMOVED', 'Panel Removed', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'title']);
	
	const cmdtyViewSymbolBrowserShown = new EventType('CMDTYVIEW-SYMBOL-BROWSER-SHOWN', 'Symbol Browser Shown', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'title']);
	const cmdtyViewSymbolBrowserSearch = new EventType('CMDTYVIEW-SYMBOL-BROWSER-SEARCH', 'Symbol Browser Search Performed', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'title', 'searchString']);
	const cmdtyViewSymbolBrowerSymbolConfirmed = new EventType('CMDTYVIEW-SYMBOL-BROWSER-SYMBOL-CONFIRMED', 'Symbol Browser Symbol Confirmed', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'title', 'symbol', 'path']);
	const cmdtyViewSymbolBrowserBranchStateChanged = new EventType('CMDTYVIEW-SYMBOL-BROWSER-BRANCH-STATE-CHANGED', 'Symbol Browser Branch State Changed', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'title', 'path', 'isOpen']);
	const cmdtyViewSymbolBrowserFilterChanged = new EventType('CMDTYVIEW-SYMBOL-BROWSER-FILTER-CHANGED', 'Symbol Browser Filter Changed', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'title', 'filter', 'filterSelected', 'activeFilters']);
	const cmdtyViewSymbolBrowserSymbolsInserted = new EventType('CMDTYVIEW-SYMBOL-BROWSER-SYMBOLS-INSERTED', 'Symbol Browser Symbols Inserted', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'title', 'symbols']);

	const cmdtyViewSymbolSearchSymbolSelected = new EventType('CMDTYVIEW-SYMBOL-SEARCH-SYMBOL-SELECTED', 'Symbol Search Symbol Selected', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'title', 'symbol', 'path']);
	const cmdtyViewSymbolSearchResultsShown = new EventType('CMDTYVIEW-SYMBOL-SEARCH-RESULTS-SHOWN', 'Symbol Search Results Shown', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'title', 'searchString']);
	const cmdtyViewSymbolSearchBranchSelected = new EventType('CMDTYVIEW-SYMBOL-SEARCH-BRANCH-SELECTED', 'Symbol Search Branch Selected', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'title', 'path', 'collapsed']);
	const cmdtyViewSymbolSearchOptionsTreeOpened = new EventType('CMDTYVIEW-SYMBOL-SEARCH-OPTIONS-TREE-OPENED', 'Symbol Search Options Tree Opened', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'title', 'path']);

	const cmdtyViewExpressionDialogShown = new EventType('CMDTYVIEW-EXPRESSION-DIALOG-SHOWN', 'Expression Dialog Shown', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'title']);
	const cmdtyViewExpressionAdded = new EventType('CMDTYVIEW-EXPRESSION-ADDED', 'Expression Added', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'title', 'expressionName', 'expressionSource', 'expression']);

	const cmdtyViewColumnsMenuShown = new EventType('CMDTYVIEW-COLUMNS-MENU-SHOWN', 'Columns Menu Shown', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'columns']);
	const cmdtyViewColumnsAdded = new EventType('CMDTYVIEW-COLUMNS-ADDED', 'Column(s) Added', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'column', 'columns']);
	const cmdtyViewColumnsRemoved = new EventType('CMDTYVIEW-COLUMNS-REMOVED', 'Column(s) Removed', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'column', 'columns']);
	const cmdtyViewColumnsRestored = new EventType('CMDTYVIEW-COLUMNS-RESTORED', 'Column(s) Restored', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'columns']);

	const cmdtyViewExcelExportShown = new EventType('CMDTYVIEW-EXCEL-EXPORT-SHOWN', 'Export Menu Shown', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'title']);
	const cmdtyViewExcelExportCompleted = new EventType('CMDTYVIEW-EXCEL-EXPORT-COMPLETED', 'Data Exported to Excel', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'title', 'exportType']);

	const cmdtyViewQuotesPriceFormatShown = new EventType('CMDTYVIEW-QUOTES-PRICE-FORMAT-SHOWN', 'Price Format Drop Down Menu Shown', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'title']);
	const cmdtyViewQuotesPriceFormatChanged = new EventType('CMDTYVIEW-QUOTES-PRICE-FORMAT-CHANGED', 'Price Format Changed', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'title', 'previousFormat', 'newFormat']);

	const cmdtyViewQuotesContextMenuShown = new EventType('CMDTYVIEW-QUOTES-CONTEXT-MENU-SHOWN', 'Quoteboard Context Menu Shown', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'title', 'symbol']);
	const cmdtyViewQuotesContextMenuSelected = new EventType('CMDTYVIEW-QUOTES-CONTEXT-MENU-SELECTED', 'Quoteboard Context Menu Selected', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'title', 'action', 'symbol']);

	const cmdtyViewOptionsStrikesNumStrikesMenuShown = new EventType('CMDTYVIEW-OPTIONS-STRIKES-NUM-STRIKES-MENU-SHOWN', 'Options Strikes Num Strikes Menu Shown', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'title']);
	const cmdtyViewOptionsStrikesNumStrikesChanged = new EventType('CMDTYVIEW-OPTIONS-STRIKES-NUM-STRIKES-CHANGED', 'Options Strikes Num Strikes Changed', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'title', 'previousNumber', 'newNumber']);
	const cmdtyViewOptionsStrikesFieldsMenuShown = new EventType('CMDTYVIEW-OPTIONS-STRIKES-FIELDS-MENU-SHOWN', 'Options Strikes Fields Menu Shown', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'title']);
	const cmdtyViewOptionsStrikesFieldChanged = new EventType('CMDTYVIEW-OPTIONS-STRIKES-FIELD-CHANGED', 'Options Strikes Field Changed', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'title', 'oldField', 'newField']);
	const cmdtyViewOptionsStrikesRootSelected = new EventType('CMDTYVIEW-OPTIONS-STRIKES-ROOT-SELECTED', 'Options Strikes Root Selected', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'title', 'oldRoot', 'newRoot']);

	const cmdtyViewOptionsChainDateChanged = new EventType('CMDTYVIEW-OPTIONS-CHAIN-DATE-CHANGED', 'Options Chain Date Changed', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'title', 'date']);
	const cmdtyViewOptionsChainHighlightChanged = new EventType('CMDTYVIEW-OPTIONS-CHAIN-HIGHLIGHT-CHANGED', 'Options Chain Highlight Changed', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'title', 'oldValue', 'newValue']);
	const cmdtyViewOptionsChainStrikeCountChanged = new EventType('CMDTYVIEW-OPTIONS-CHAIN-STRIKE-COUNT-CHANGED', 'Options Chain Strike Count Changed', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'title', 'strikeCount']);
	const cmdtyViewOptionsChainColumnsViewChanged = new EventType('CMDTYVIEW-OPTIONS-CHAIN-COLUMNS-VIEW-CHANGED', 'Options Chain Columns View Changed', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'title', 'view']);
	const cmdtyViewOptionsChainExpirationMenuShown = new EventType('CMDTYVIEW-OPTIONS-CHAIN-EXPIRATION-MENU-SHOWN', 'Options Chain Expiration Menu Shown', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'title']);
	const cmdtyViewOptionsChainExpirationSelected = new EventType('CMDTYVIEW-OPTIONS-CHAIN-EXPIRATION-SELECTED', 'Options Chain Expiration Selected', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'title', 'monthCode', 'underlier', 'date']);

	const cmdtyViewHistoryAggregationMenuShown = new EventType('CMDTYVIEW-HISTORY-AGGREGATION-MENU_SHOWN', 'History Aggregation Menu Shown', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'title', 'symbol']);
	const cmdtyViewHistoryAggregationSelected = new EventType('CMDTYVIEW-HISTORY-AGGREGATION-SELECTED', 'History Aggregation Selected', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'title', 'symbol', 'previousAggregation', 'newAggregation']);
	const cmdtyViewHistoryRangeSelected = new EventType('CMDTYVIEW-HISTORY-RANGE-SELECTED', 'History Range Selected', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'title', 'symbol', 'previousRange', 'newRange']);
	const cmdtyViewHistoryContractRollChanged = new EventType('CMDTYVIEW-HISTORY-CONTRACT-ROLL-CHANGED', 'History Contract Roll Changed', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'title', 'symbol', 'oldRollType', 'newRollType', 'oldBackAdjust', 'newBackAdjust']);
	const cmdtyViewHistoryIndicatorDialogShown = new EventType('CMDTYVIEW-HISTORY-INDICATOR-DIALOG-SHOWN', 'History Indicator Dialog Shown', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'title', 'symbol']);
	const cmdtyViewHistoryIndicatorAdded = new EventType('CMDTYVIEW-HISTORY-INDICATOR-ADDED', 'History Indicator Added', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'title', 'symbol', 'indicator', 'indicators']);
	const cmdtyViewHistoryIndicatorRemoved = new EventType('CMDTYVIEW-HISTORY-INDICATOR-REMOVED', 'History Indicator Removed', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'title', 'symbol', 'indicator', 'indicators']);

	const cmdtyViewNewsFilterVisibilityChanged = new EventType('CMDTYVIEW-NEWS-FILTER-VISIBILITY-CHANGED', 'News Filter Sidebar Visibility Changed', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'title', 'filterVisible']);
	const cmdtyViewNewsShowSymbolsChanged = new EventType('CMDTYVIEW-NEWS-SHOW-SYMBOLS-CHANGED', 'News Show Symbols Option Changed', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'title', 'value']);
	const cmdtyViewNewsOpenChartOnClickChanged = new EventType('CMDTYVIEW-NEWS-OPEN-CHART-ON-CLICK-CHANGED', 'News Open Chart On Click Option Changed', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'title', 'value']);
	const cmdtyViewNewsFilterChanged = new EventType('CMDTYVIEW-NEWS-FILTER-CHANGED', 'News Filter Selection Changed', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'title', 'filter']);

	const cmdtyViewGraiBidZipCodeChanged = new EventType('CMDTYVIEW-GRAIN-BID-ZIP-CODE-CHANGED', 'Grain Bid Zip Code Changed', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'title', 'zipCode', 'previousZipCode']);
	const cmdtyViewGrainBidLocationsChanged = new EventType('CMDTYVIEW-GRAIN-BID-LOCATIONS-CHANGED', 'Grain Bid Locations Changed', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'title', 'locations', 'previousLocations']);
	const cmdtyViewGrainBidCommoditiesChanged = new EventType('CMDTYVIEW-GRAIN-BID-COMMODITIES-CHANGED', 'Grain Bid Commodities Changed', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'title', 'commodities', 'previousCommodities']);
	const cmdtyViewGrainBidDistanceChanged = new EventType('CMDTYVIEW-GRAIN-BID-DISTANCE-CHANGED', 'Grain Bid Distance Changed', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'title', 'distance', 'previousDistance']);
	const cmdtyViewGrainBidDeliveriesChanged = new EventType('CMDTYVIEW-GRAIN-BID-DELIVERIES-CHANGED', 'Grain Bid Deliveries Changed', ProductType.CMDTYVIEW, ['userId', 'sessionId', 'panelId', 'title', 'deliveries', 'previousDeliveries']);

	// Entitlements

	const entitlementsAuthorizationFailed = new EventType('ENTITLEMENTS_AUTHORIZATION_FAILED', 'Authorization Failed', ProductType.ENTITLEMENTS, ['userId', 'operation']);

	// Marketplace

	const marketplaceCustomerCreated = new EventType('CUSTOMER-CREATED', 'Customer Created', ProductType.MARKETPLACE, ['userId', 'userType', 'companyId', 'companyName', 'entityId']);
	const marketplaceAccountLinked = new EventType('ACCOUNT-LINKED', 'Account Linked', ProductType.MARKETPLACE, ['userId', 'userType', 'companyId', 'companyName', 'entityId']);
	const marketplaceCustomerOfferAccessApproved = new EventType('CUSTOMER-OFFER-ACCESS-APPROVED', 'Offer Access Approved', ProductType.MARKETPLACE, ['userId', 'userType', 'companyId', 'companyName', 'entityId']);
	const marketplaceOfferCreated = new EventType('OFFER-CREATED', 'Offer Created', ProductType.MARKETPLACE, ['userId', 'userType', 'companyId', 'companyName', 'entityId']);
	const marketplaceContractSigned = new EventType('CONTRACT-SIGNED', 'Contract Signed', ProductType.MARKETPLACE, ['userId', 'userType', 'companyId', 'companyName', 'entityId']);

    // Barchart Excel

    const barchartExcelLogin = new EventType('BARCHART-EXCEL-LOGIN', 'User Logged In', ProductType.BARCHART_EXCEL, ['userId']);
    const barchartExcelLogout = new EventType('BARCHART-EXCEL-LOGOUT', 'User Logged Out', ProductType.BARCHART_EXCEL, ['userId']);

    const barchartExcelQuotesOpened = new EventType('BARCHART-EXCEL-QUOTES-OPENED', 'Quotes Opened', ProductType.BARCHART_EXCEL, ['userId']);
    const barchartExcelQuotesClosed = new EventType('BARCHART-EXCEL-QUOTES-CLOSED', 'Quotes Closed', ProductType.BARCHART_EXCEL, ['userId']);
    const barchartExcelQuotesInserted = new EventType('BARCHART-EXCEL-QUOTES-INSERTED', 'Quotes Inserted', ProductType.BARCHART_EXCEL, ['userId', 'symbolsCount', 'fieldsCount']);

    const barchartExcelHistoryOpened = new EventType('BARCHART-EXCEL-HISTORY-OPENED', 'History Opened', ProductType.BARCHART_EXCEL, ['userId']);
    const barchartExcelHistoryClosed = new EventType('BARCHART-EXCEL-HISTORY-CLOSED', 'History Closed', ProductType.BARCHART_EXCEL, ['userId']);
    const barchartExcelHistoryInserted = new EventType('BARCHART-EXCEL-HISTORY-INSERTED', 'History Inserted', ProductType.BARCHART_EXCEL, ['userId', 'symbolsCount', 'fieldsCount']);

    const barchartExcelOptionsOpened = new EventType('BARCHART-EXCEL-OPTIONS-OPENED', 'Options Opened', ProductType.BARCHART_EXCEL, ['userId']);
    const barchartExcelOptionsClosed = new EventType('BARCHART-EXCEL-OPTIONS-CLOSED', 'Options Closed', ProductType.BARCHART_EXCEL, ['userId']);

    const barchartExcelOptionsInserted = new EventType('BARCHART-EXCEL-OPTIONS-INSERTED', 'Options Inserted', ProductType.BARCHART_EXCEL, ['userId', 'optionsType', 'strikeType', 'lookBackDate'], {[CustomerType.BARCHART.code]: [null, null, null, validators.stringOptional]}, {[CustomerType.BARCHART.code]: [null, null, null, transformers.stringOptional]});

    const barchartExcelChartOpened = new EventType('BARCHART-EXCEL-CHART-OPENED', 'Chart Opened', ProductType.BARCHART_EXCEL, ['userId']);
    const barchartExcelChartClosed = new EventType('BARCHART-EXCEL-CHART-CLOSED', 'Chart Closed', ProductType.BARCHART_EXCEL, ['userId']);
    const barchartExcelChartInserted = new EventType('BARCHART-EXCEL-CHART-INSERTED', 'Chart Inserted', ProductType.BARCHART_EXCEL, ['userId', 'symbolsCount', 'chartType']);

    const barchartExcelForwardCurvesOpened = new EventType('BARCHART-EXCEL-FORWARD-CURVES-OPENED', 'Forward Curves Opened', ProductType.BARCHART_EXCEL, ['userId']);
    const barchartExcelForwardCurvesClosed = new EventType('BARCHART-EXCEL-FORWARD-CURVES-CLOSED', 'Forward Curves Closed', ProductType.BARCHART_EXCEL, ['userId']);
    const barchartExcelForwardCurvesInserted = new EventType('BARCHART-EXCEL-FORWARD-CURVES-INSERTED', 'Forward Curves Inserted', ProductType.BARCHART_EXCEL, ['userId', 'rootsCount']);

    const barchartExcelTimeAndSalesOpened = new EventType('BARCHART-EXCEL-TIME-AND-SALES-OPENED', 'Time And Sales Opened', ProductType.BARCHART_EXCEL, ['userId']);
    const barchartExcelTimeAndSalesClosed = new EventType('BARCHART-EXCEL-TIME-AND-SALES-CLOSED', 'Time And Sales Closed', ProductType.BARCHART_EXCEL, ['userId']);
    const barchartExcelTimeAndSalesInserted = new EventType('BARCHART-EXCEL-TIME-AND-SALES-INSERTED', 'Time And Sales Inserted', ProductType.BARCHART_EXCEL, ['userId', 'symbolsCount', 'fieldsCount']);

    const barchartExcelRefreshSelected = new EventType('BARCHART-EXCEL-REFRESH-SELECTED', 'Refresh Selected', ProductType.BARCHART_EXCEL, ['userId', 'refreshModule']);
    const barchartExcelRefreshAll = new EventType('BARCHART-EXCEL-REFRESH-ALL', 'Refresh All', ProductType.BARCHART_EXCEL, ['userId']);

    const barchartExcelStocksListsOpened = new EventType('BARCHART-EXCEL-STOCKS-LISTS-OPENED', 'Stocks Lists Opened', ProductType.BARCHART_EXCEL, ['userId']);
    const barchartExcelStocksListsClosed = new EventType('BARCHART-EXCEL-STOCKS-LISTS-CLOSED', 'Stocks Lists Closed', ProductType.BARCHART_EXCEL, ['userId']);
    const barchartExcelStocksListsInserted = new EventType('BARCHART-EXCEL-STOCKS-LISTS-INSERTED', 'Stocks Lists Inserted', ProductType.BARCHART_EXCEL, ['userId', 'reportsType', 'marketType']);

    const barchartExcelEtfsListsOpened = new EventType('BARCHART-EXCEL-ETFS-LISTS-OPENED', 'ETFs Lists Opened', ProductType.BARCHART_EXCEL, ['userId']);
    const barchartExcelEtfsListsClosed = new EventType('BARCHART-EXCEL-ETFS-LISTS-CLOSED', 'ETFs Lists Closed', ProductType.BARCHART_EXCEL, ['userId']);
    const barchartExcelEtfsListsInserted = new EventType('BARCHART-EXCEL-ETFS-LISTS-INSERTED', 'ETFs Lists Inserted', ProductType.BARCHART_EXCEL, ['userId', 'reportsType', 'marketType']);

    const barchartExcelOptionsListsOpened = new EventType('BARCHART-EXCEL-OPTIONS-LISTS-OPENED', 'Options Lists Opened', ProductType.BARCHART_EXCEL, ['userId']);
    const barchartExcelOptionsListsClosed = new EventType('BARCHART-EXCEL-OPTIONS-LISTS-CLOSED', 'Options Lists Closed', ProductType.BARCHART_EXCEL, ['userId']);
    const barchartExcelOptionsListsInserted = new EventType('BARCHART-EXCEL-OPTIONS-LISTS-INSERTED', 'Options Lists Inserted', ProductType.BARCHART_EXCEL, ['userId', 'reportsType', 'listsType', 'marketType']);

    const barchartExcelFuturesListsOpened = new EventType('BARCHART-EXCEL-FUTURES-LISTS-OPENED', 'Futures Lists Opened', ProductType.BARCHART_EXCEL, ['userId']);
    const barchartExcelFuturesListsClosed = new EventType('BARCHART-EXCEL-FUTURES-LISTS-CLOSED', 'Futures Lists Closed', ProductType.BARCHART_EXCEL, ['userId']);
    const barchartExcelFuturesListsInserted = new EventType('BARCHART-EXCEL-FUTURES-LISTS-INSERTED', 'Futures Lists Inserted', ProductType.BARCHART_EXCEL, ['userId', 'reportsType']);

    const barchartExcelCurrenciesListsOpened = new EventType('BARCHART-EXCEL-CURRENCIES-LISTS-OPENED', 'Currencies Lists Opened', ProductType.BARCHART_EXCEL, ['userId']);
    const barchartExcelCurrenciesListsClosed = new EventType('BARCHART-EXCEL-CURRENCIES-LISTS-CLOSED', 'Currencies Lists Closed', ProductType.BARCHART_EXCEL, ['userId']);
    const barchartExcelCurrenciesListsInserted = new EventType('BARCHART-EXCEL-CURRENCIES-LISTS-INSERTED', 'Currencies Lists Inserted', ProductType.BARCHART_EXCEL, ['userId', 'reportsType']);

    const barchartExcelFundamentalsOpened = new EventType('BARCHART-EXCEL-FUNDAMENTALS-OPENED', 'Fundamentals Opened', ProductType.BARCHART_EXCEL, ['userId']);
    const barchartExcelFundamentalsClosed = new EventType('BARCHART-EXCEL-FUNDAMENTALS-CLOSED', 'Fundamentals Closed', ProductType.BARCHART_EXCEL, ['userId']);
    const barchartExcelFundamentalsInserted = new EventType('BARCHART-EXCEL-FUNDAMENTALS-INSERTED', 'Fundamentals Inserted', ProductType.BARCHART_EXCEL, ['userId', 'symbolsCount', 'category', 'types']);

    const barchartExcelStockScreenerOpened = new EventType('BARCHART-EXCEL-STOCK-SCREENER-OPENED', 'Stock Screener Opened', ProductType.BARCHART_EXCEL, ['userId']);
    const barchartExcelStockScreenerClosed = new EventType('BARCHART-EXCEL-STOCK-SCREENER-CLOSED', 'Stock Screener Closed', ProductType.BARCHART_EXCEL, ['userId']);
    const barchartExcelStockScreenerInserted = new EventType('BARCHART-EXCEL-STOCK-SCREENER-INSERTED', 'Stock Screener Inserted', ProductType.BARCHART_EXCEL, ['userId', 'marketType']);

    const barchartExcelEtfScreenerOpened = new EventType('BARCHART-EXCEL-ETF-SCREENER-OPENED', 'ETF Screener Opened', ProductType.BARCHART_EXCEL, ['userId']);
    const barchartExcelEtfScreenerClosed = new EventType('BARCHART-EXCEL-ETF-SCREENER-CLOSED', 'ETF Screener Closed', ProductType.BARCHART_EXCEL, ['userId']);
    const barchartExcelEtfScreenerInserted = new EventType('BARCHART-EXCEL-ETF-SCREENER-INSERTED', 'ETF Screener Inserted', ProductType.BARCHART_EXCEL, ['userId', 'marketType']);

    const barchartExcelOptionsScreenerOpened = new EventType('BARCHART-EXCEL-OPTIONS-SCREENER-OPENED', 'Options Screener Opened', ProductType.BARCHART_EXCEL, ['userId']);
    const barchartExcelOptionsScreenerClosed = new EventType('BARCHART-EXCEL-OPTIONS-SCREENER-CLOSED', 'Options Screener Closed', ProductType.BARCHART_EXCEL, ['userId']);
    const barchartExcelOptionsScreenerInserted = new EventType('BARCHART-EXCEL-OPTIONS-SCREENER-INSERTED', 'Options Screener Inserted', ProductType.BARCHART_EXCEL, ['userId', 'marketType']);

    const barchartExcelVolatilityAnalysisOpened = new EventType('BARCHART-EXCEL-VOLATILITY-ANALYSIS-OPENED', 'Volatility Analysis Opened', ProductType.BARCHART_EXCEL, ['userId']);
    const barchartExcelVolatilityAnalysisClosed = new EventType('BARCHART-EXCEL-VOLATILITY-ANALYSIS-CLOSED', 'Volatility Analysis Closed', ProductType.BARCHART_EXCEL, ['userId']);
    const barchartExcelVolatilityAnalysisInserted = new EventType('BARCHART-EXCEL-VOLATILITY-ANALYSIS-INSERTED', 'Volatility Analysis Inserted', ProductType.BARCHART_EXCEL, ['userId', 'volatilityType']);

    const barchartExcelWatchlistOpened = new EventType('BARCHART-EXCEL-WATCHLIST-OPENED', 'Watchlist Opened', ProductType.BARCHART_EXCEL, ['userId']);
    const barchartExcelWatchlistClosed = new EventType('BARCHART-EXCEL-WATCHLIST-CLOSED', 'Watchlist Closed', ProductType.BARCHART_EXCEL, ['userId']);
    const barchartExcelWatchlistInserted = new EventType('BARCHART-EXCEL-WATCHLIST-INSERTED', 'Watchlist Inserted', ProductType.BARCHART_EXCEL, ['userId', 'symbolsCount', 'fieldsCount']);

    const barchartExcelPortfolioOpened = new EventType('BARCHART-EXCEL-PORTFOLIO-OPENED', 'Portfolio Opened', ProductType.BARCHART_EXCEL, ['userId']);
    const barchartExcelPortfolioClosed = new EventType('BARCHART-EXCEL-PORTFOLIO-CLOSED', 'Portfolio Closed', ProductType.BARCHART_EXCEL, ['userId']);
    const barchartExcelPortfolioInserted = new EventType('BARCHART-EXCEL-PORTFOLIO-INSERTED', 'Portfolio Inserted', ProductType.BARCHART_EXCEL, ['userId', 'fieldsCount']);

    const barchartExcelAboutOpened = new EventType('BARCHART-EXCEL-ABOUT-OPENED', 'About Opened', ProductType.BARCHART_EXCEL, ['userId']);
    const barchartExcelAboutClosed = new EventType('BARCHART-EXCEL-ABOUT-CLOSED', 'About Closed', ProductType.BARCHART_EXCEL, ['userId']);

    const barchartExcelPreferencesOpened = new EventType('BARCHART-EXCEL-PREFERENCES-OPENED', 'Preferences Opened', ProductType.BARCHART_EXCEL, ['userId']);
    const barchartExcelPreferencesClosed = new EventType('BARCHART-EXCEL-PREFERENCES-CLOSED', 'Preferences Closed', ProductType.BARCHART_EXCEL, ['userId']);

    const barchartExcelSettingsOpened = new EventType('BARCHART-EXCEL-SETTINGS-OPENED', 'Settings Opened', ProductType.BARCHART_EXCEL, ['userId']);
    const barchartExcelSettingsClosed = new EventType('BARCHART-EXCEL-SETTINGS-CLOSED', 'Settings Closed', ProductType.BARCHART_EXCEL, ['userId']);

    return EventType;
})();

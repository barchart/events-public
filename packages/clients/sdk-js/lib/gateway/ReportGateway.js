const assert = require('@barchart/common-js/lang/assert'),
	Disposable = require('@barchart/common-js/lang/Disposable'),
	Enum = require('@barchart/common-js/lang/Enum');

const EndpointBuilder = require('@barchart/common-js/api/http/builders/EndpointBuilder'),
	ErrorInterceptor = require('@barchart/common-js/api/http/interceptors/ErrorInterceptor'),
	Gateway = require('@barchart/common-js/api/http/Gateway'),
	ProtocolType = require('@barchart/common-js/api/http/definitions/ProtocolType'),
	RequestInterceptor = require('@barchart/common-js/api/http/interceptors/RequestInterceptor'),
	ResponseInterceptor = require('@barchart/common-js/api/http/interceptors/ResponseInterceptor'),
	VerbType = require('@barchart/common-js/api/http/definitions/VerbType');

const EventJobSchema = require('@barchart/events-api-common/lib/data/serialization/EventJobSchema');

const Configuration = require('../common/Configuration');

module.exports = (() => {
	'use strict';

	/**
	 * A **central component of the SDK** which is responsible for requesting a new
	 * usage statistic report, checking on report progress, and downloading the
	 * report when completed.
	 *
	 * @public
	 * @exported
	 * @extends {Disposable}
	 * @param {String} protocol - The protocol to use (either HTTP or HTTPS).
	 * @param {String} host - The host name of the Events web service.
	 * @param {Number} port - The TCP port number of the Events web service.
	 * @param {Schema.ReportCredentials} credentials - The credentials for authenticate.
	 */
	class ReportGateway extends Disposable {
		constructor(protocol, host, port, credentials) {
			super();

			assert.argumentIsRequired(protocol, 'protocol', String);
			assert.argumentIsRequired(host, 'host', String);
			assert.argumentIsRequired(port, 'port', Number);
			assert.argumentIsRequired(credentials, 'credentials', Object);
			assert.argumentIsRequired(credentials.username, 'credentials.username', String, 'String');
			assert.argumentIsRequired(credentials.password, 'credentials.password', String, 'String');

			this._started = false;
			this._startPromise = null;

			const protocolType = Enum.fromCode(ProtocolType, protocol.toUpperCase());

			this._startReportEndpoint = EndpointBuilder.for('start-report', 'start report')
				.withVerb(VerbType.POST)
				.withProtocol(protocolType)
				.withHost(host)
				.withPort(port)
				.withPathBuilder((pb) => {
					pb.withLiteralParameter('reports', 'reports');
				})
				.withBody('filter')
				.withBasicAuthentication(credentials.username, credentials.password)
				.withRequestInterceptor(RequestInterceptor.PLAIN_TEXT_RESPONSE)
				.withResponseInterceptor(responseInterceptorForReportStartDeserialization)
				.withErrorInterceptor(ErrorInterceptor.GENERAL)
				.endpoint;

			this._getReportAvailabilityEndpoint = EndpointBuilder.for('get-report-availability', 'get report availability')
				.withVerb(VerbType.GET)
				.withProtocol(protocolType)
				.withHost(host)
				.withPort(port)
				.withPathBuilder((pb) => {
					pb.withLiteralParameter('reports', 'reports')
						.withVariableParameter('source', 'source', 'source', false)
						.withLiteralParameter('availability', 'availability');
				})
				.withBasicAuthentication(credentials.username, credentials.password)
				.withRequestInterceptor(RequestInterceptor.PLAIN_TEXT_RESPONSE)
				.withResponseInterceptor(responseInterceptorForReportAvailabilityDeserialization)
				.withErrorInterceptor(ErrorInterceptor.GENERAL)
				.endpoint;

			this._getReportEndpoint = EndpointBuilder.for('get-report', 'get report')
				.withVerb(VerbType.GET)
				.withProtocol(protocolType)
				.withHost(host)
				.withPort(port)
				.withPathBuilder((pb) => {
					pb.withLiteralParameter('reports', 'reports')
						.withVariableParameter('source', 'source', 'source', false);
				})
				.withBasicAuthentication(credentials.username, credentials.password)
				.withRequestInterceptor(RequestInterceptor.PLAIN_TEXT_RESPONSE)
				.withResponseInterceptor(responseInterceptorForGetReport)
				.withErrorInterceptor(ErrorInterceptor.GENERAL)
				.endpoint;

			this._getVersionEndpoint = EndpointBuilder.for('get-api-version', 'get API version')
				.withVerb(VerbType.GET)
				.withProtocol(protocolType)
				.withHost(host)
				.withPort(port)
				.withPathBuilder((pb) => {
					pb.withLiteralParameter('system', 'system')
						.withLiteralParameter('version', 'version');
				})
				.withBasicAuthentication(credentials.username, credentials.password)
				.withRequestInterceptor(RequestInterceptor.PLAIN_TEXT_RESPONSE)
				.withResponseInterceptor(responseInterceptorForGetVersion)
				.withErrorInterceptor(ErrorInterceptor.GENERAL)
				.endpoint;
		}

		/**
		 * Initializes the connection to the remote server and returns a promise
		 * containing the current instance.
		 *
		 * @public
		 * @returns {Promise<ReportGateway>}
		 */
		start() {
			return Promise.resolve()
				.then(() => {
					if (this._startPromise === null) {
						this._startPromise = Promise.resolve()
							.then(() => {
								this._started = true;

								return this;
							}).catch((e) => {
								this._startPromise = null;

								throw e;
							});
					}

					return this._startPromise;
				});
		}

		/**
		 * Starts a report.
		 *
		 * @public
		 * @param {Schema.ReportFilter} filter
		 * @returns {Promise<Schema.ReportStatus>}
		 */
		startReport(filter) {
			return Promise.resolve()
				.then(() => {
					checkStart.call(this);

					assert.argumentIsRequired(filter, 'filter', Object);

					return Gateway.invoke(this._startReportEndpoint, EventJobSchema.START.schema.format({ filter }));
				});
		}

		/**
		 * Returns data regarding the status of a report (i.e. running, finished, etc).
		 *
		 * @public
		 * @param {String} source - The "source" identifier for the report.
		 * @return {Promise<Schema.ReportStatus>}
		 */
		getReportAvailability(source) {
			return Promise.resolve()
				.then(() => {
					checkStart.call(this);

					assert.argumentIsRequired(source, 'source', String);

					return Gateway.invoke(this._getReportAvailabilityEndpoint, { source });
				});
		}

		/**
		 * Assuming the report has completed, gets a link which can be used to
		 * download the actual report in CSV format.
		 *
		 * @public
		 * @param {String} source - The "source" identifier for the report.
		 * @return {Promise<ReportDownloadLink>}
		 */
		getReport(source) {
			return Promise.resolve()
				.then(() => {
					checkStart.call(this);

					assert.argumentIsRequired(source, 'source', String);

					return Gateway.invoke(this._getReportEndpoint, { source });
				});
		}

		/**
		 * Returns the version of the remote service.
		 *
		 * @public
		 * @return {Promise<ServiceMetadata>}
		 */
		getVersion() {
			return Promise.resolve()
				.then(() => {
					checkStart.call(this);

					return Gateway.invoke(this._getVersionEndpoint, { });
				});
		}

		/**
		 * Creates and starts a new {@link ReportGateway} for an environment.
		 *
		 * @public
		 * @param {String} stage
		 * @param {Schema.ReportCredentials} credentials
		 * @returns {Promise<ReportGateway|null>}
		 */
		static for(stage, credentials) {
			let gatewayPromise;

			if (stage === 'staging') {
				gatewayPromise = ReportGateway.forStaging(credentials);
			} else if (stage === 'production') {
				gatewayPromise = ReportGateway.forProduction(credentials);
			} else {
				gatewayPromise = Promise.resolve(null);
			}

			return gatewayPromise;
		}

		/**
		 * Creates and starts a new {@link ReportGateway} for the staging environment.
		 *
		 * @public
		 * @static
		 * @param {Schema.ReportCredentials} credentials
		 * @returns {Promise<ReportGateway>}
		 */
		static forStaging(credentials) {
			return Promise.resolve()
				.then(() => {
					return start(new ReportGateway('https', Configuration.stagingHost, 443, credentials));
				});
		}

		/**
		 * Creates and starts a new {@link ReportGateway} for the production environment.
		 *
		 * @public
		 * @static
		 * @param {Schema.ReportCredentials} credentials
		 * @returns {Promise<ReportGateway>}
		 */
		static forProduction(credentials) {
			return Promise.resolve()
				.then(() => {
					return start(new ReportGateway('https', Configuration.productionHost, 443, credentials));
				});
		}

		toString() {
			return '[ReportGateway]';
		}
	}

	const responseInterceptorForReportStartDeserialization = ResponseInterceptor.fromDelegate((response) => {
		try {
			return JSON.parse(response.data, EventJobSchema.PROCESS.schema.getReviver());
		} catch (e) {
			console.log('Error deserializing report (using EventJobSchema.PROCESS schema)', e);
		}
	});

	const responseInterceptorForReportAvailabilityDeserialization = ResponseInterceptor.fromDelegate((response) => {
		try {
			return JSON.parse(response.data, EventJobSchema.PROCESS.schema.getReviver());
		} catch (e) {
			console.log('Error deserializing report availability (using EventJobSchema.PROCESS schema)', e);
		}
	});

	const responseInterceptorForGetReport = ResponseInterceptor.fromDelegate((response) => {
		try {
			return JSON.parse(response.data);
		} catch (e) {
			console.log('Error deserializing report', e);
		}
	});

	const responseInterceptorForGetVersion = ResponseInterceptor.fromDelegate((response) => {
		try {
			return JSON.parse(response.data);
		} catch (e) {
			console.log('Error deserializing report service version', e);
		}
	});

	function start(gateway) {
		return gateway.start()
			.then(() => {
				return gateway;
			});
	}

	function checkStart() {
		if (this.getIsDisposed()) {
			throw new Error('Unable to use gateway, the gateway has been disposed.');
		}

		if (!this._started) {
			throw new Error('Unable to use gateway, the gateway has not started.');
		}
	}

	return ReportGateway;
})();

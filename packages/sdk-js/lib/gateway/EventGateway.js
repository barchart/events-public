const assert = require('@barchart/common-js/lang/assert'),
	Disposable = require('@barchart/common-js/lang/Disposable'),
	Enum = require('@barchart/common-js/lang/Enum');

const EndpointBuilder = require('@barchart/common-js/api/http/builders/EndpointBuilder'),
	ErrorInterceptor = require('@barchart/common-js/api/http/interceptors/ErrorInterceptor'),
	Gateway = require('@barchart/common-js/api/http/Gateway'),
	FailureReason = require('@barchart/common-js/api/failures/FailureReason'),
	ProtocolType = require('@barchart/common-js/api/http/definitions/ProtocolType'),
	RequestInterceptor = require('@barchart/common-js/api/http/interceptors/RequestInterceptor'),
	ResponseInterceptor = require('@barchart/common-js/api/http/interceptors/ResponseInterceptor'),
	VerbType = require('@barchart/common-js/api/http/definitions/VerbType');

const EventSchema = require('@barchart/events-api-common/lib/data/serialization/EventSchema');

const Configuration = require('../common/Configuration');

module.exports = (() => {
	'use strict';

	/**
	 * A **central component of the SDK** which is responsible for sending events (i.e. usage
	 * statistics to the backend).
	 *
	 * @public
	 * @exported
	 * @extends {Disposable}
	 * @param {String} protocol - The protocol to use (either HTTP or HTTPS).
	 * @param {String} host - The host name of the Events web service.
	 * @param {Number} port - The TCP port number of the Events web service.
	 */
	class EventGateway extends Disposable {
		constructor(protocol, host, port) {
			super();

			this._started = false;
			this._startPromise = null;

			const protocolType = Enum.fromCode(ProtocolType, protocol.toUpperCase());

			this._createEventEndpoint = EndpointBuilder.for('create-events', 'create events')
				.withVerb(VerbType.POST)
				.withProtocol(protocolType)
				.withHost(host)
				.withPort(port)
				.withPathBuilder((pb) => {
					pb.withLiteralParameter('events', 'events');
				})
				.withBody('events')
				.withRequestInterceptor(RequestInterceptor.PLAIN_TEXT_RESPONSE)
				.withRequestInterceptor(RequestInterceptor.fromDelegate(createEventRequestInterceptor))
				.withResponseInterceptor(responseInterceptorForEventDeserialization)
				.withErrorInterceptor(ErrorInterceptor.GENERAL)
				.endpoint;
		}

		/**
		 * Initializes the connection to the remote server and returns a promise
		 * containing the current instance.
		 *
		 * @public
		 * @returns {Promise<EventGateway>}
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
		 * Saves one (or many) events.
		 *
		 * @public
		 * @param {Schema.Event[]} events
		 * @returns {Promise<Schema.Event[]>}
		 */
		createEvents(events) {
			return Promise.resolve()
				.then(() => {
					checkStart.call(this);

					assert.argumentIsArray(events, 'events');

					return Gateway.invoke(this._createEventEndpoint, { events: events.map((event) => EventSchema.CLIENT.schema.format(event)) });
				});
		}

		/**
		 * Creates and starts a new {@link EventGateway} for an environment.
		 *
		 * @public
		 * @param {String} stage
		 * @returns {Promise<EventGateway>|Promise<null>}
		 */
		static for(stage) {
			let gatewayPromise;

			if (stage === 'staging') {
				gatewayPromise = EventGateway.forStaging();
			} else if (stage === 'production') {
				gatewayPromise = EventGateway.forProduction();
			} else {
				gatewayPromise = Promise.resolve(null);
			}

			return gatewayPromise;
		}

		/**
		 * Creates and starts a new {@link EventGateway} for the development environment.
		 *
		 * @public
		 * @static
		 * @returns {Promise<EventGateway>}
		 */
		static forDevelopment() {
			return Promise.resolve()
				.then(() => {
					return start(new EventGateway('https', Configuration.developmentHost, 443));
				});
		}

		/**
		 * Creates and starts a new {@link EventGateway} for the staging environment.
		 *
		 * @public
		 * @static
		 * @returns {Promise<EventGateway>}
		 */
		static forStaging() {
			return Promise.resolve()
				.then(() => {
					return start(new EventGateway('https', Configuration.stagingHost, 443));
				});
		}

		/**
		 * Creates and starts a new {@link EventGateway} for the production environment.
		 *
		 * @public
		 * @static
		 * @returns {Promise<EventGateway>}
		 */
		static forProduction() {
			return Promise.resolve()
				.then(() => {
					return start(new EventGateway('https', Configuration.productionHost, 443));
				});
		}

		toString() {
			return '[EventGateway]';
		}
	}

	function start(gateway) {
		return gateway.start()
			.then(() => {
				return gateway;
			});
	}

	const createEventRequestInterceptor = (request) => {
		return Promise.all(request.data.events.map((event) => FailureReason.validateSchema(EventSchema.CLIENT, event)))
			.then(() => {
				return Promise.resolve(request);
			}).catch((e) => {
				console.error('Error serializing data for event creation (using EventSchema.CLIENT schema)', e);

				return Promise.reject();
			});
	};

	const responseInterceptorForEventDeserialization = ResponseInterceptor.fromDelegate((response, ignored) => {
		return JSON.parse(response.data);
	});

	function checkStart() {
		if (this.getIsDisposed()) {
			throw new Error('Unable to use gateway, the gateway has been disposed.');
		}

		if (!this._started) {
			throw new Error('Unable to use gateway, the gateway has not started.');
		}
	}

	return EventGateway;
})();

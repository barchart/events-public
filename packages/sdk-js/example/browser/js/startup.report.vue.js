const ReportGateway = require('./../../../lib/gateway/ReportGateway');

const CustomerType = require('@barchart/events-api-common/lib/data/CustomerType'),
	ProductType = require('@barchart/events-api-common/lib/data/ProductType');

const EventJobStatus = require('@barchart/events-api-common/lib/data/EventJobStatus');

const FailureType = require('@barchart/common-js/api/failures/FailureType');

const Config = require('./example.config');

module.exports = (() => {
	'use strict';

	const app = new Vue({
		el: '.wrapper',
		data: {
			selectedCustomer: '',
			selectedProduct: '',
			startTime: '',
			endTime: '',

			username: '',
			password: '',

			showAuth: true,
			stage: 'production',
			connecting: false,

			message: '',

			reports: [ ],

			reportGateway: null,

			config: Config,
		},
		methods: {
			connect() {
				if (this.connecting) {
					return;
				}

				if (!this.username || !this.password) {
					alert('Fill all required fields');

					return;
				}

				this.connecting = true;

				return ReportGateway.for(this.stage, { username: this.username, password: this.password })
					.then((gateway) => {
						return gateway.checkAuthentication()
							.catch((errors) => {
								const valid = !errors.some(error => FailureType.fromCode(FailureType, error.value.code) === FailureType.REQUEST_AUTHORIZATION_FAILURE);

								return valid;
							}).then((valid) => {
								this.connecting = false;

								if (valid) {
									this.reportGateway = gateway;
									this.showAuth = false;
								} else {
									alert('Invalid credentials');
								}
							});
					});
			},
			disconnect() {
				this.clear();

				this.username = '';
				this.password = '';

				this.reportGateway = null;

				this.showAuth = true;
			},
			start() {
				if (!validateFields.call(this)) {
					this.message = 'Fill required fields';

					return;
				}

				this.message = 'Sending...';

				const filter = {
					customer: CustomerType.parse(this.selectedCustomer),
					product: ProductType.parse(this.selectedProduct)
				};

				if (this.startTime) {
					filter.start = parseInt(this.startTime);
				}

				if (this.endTime) {
					filter.end = parseInt(this.endTime);
				}

				this.reportGateway.startReport(filter)
					.then((response) => {
						this.reports.push(format(response));

						this.message = response;
					}).catch((err) => {
						this.message = err;
					});
			},
			get(report) {
				if (report.status === EventJobStatus.RUNNING) {
					this.message = 'Sending...';

					return this.reportGateway.getReportAvailability(report.source)
						.then((response) => {
							const index = this.reports.findIndex(r => r.source === report.source);

							if (index >= 0) {
								this.reports[index] = format(response);
							}

							this.message = response;

							if (response.status === EventJobStatus.COMPLETE) {
								this.get(this.reports[index]);
							}
						})
						.catch((err) => {
							this.message = err;
						});
				} else if (report.status === EventJobStatus.COMPLETE) {
					return this.reportGateway.getReport(report.source)
						.then((response) => {
							const index = this.reports.findIndex(r => r.source === report.source);

							this.reports[index].link = response.link;

							this.message = `Report [ ${index + 1} ] is ready for download, click link (on left side of screen)`;
						});
				}
			},
			clear() {
				clear.call(this);
			},
		}
	});

	function format(response) {
		return {
			filter: response.filter,
			source: response.source,
			status: response.status,
		};
	}

	function clear() {
		this.reports = [ ];
		this.message = '';
	}

	function validateFields() {
		return !!this.selectedCustomer && !!this.selectedProduct;
	}
})();

/**
 * A meta namespace containing structural contracts of anonymous objects.
 *
 * @namespace Schema
 */

/**
 * Describes the occurrence of a single event. In other words, a usage statistic.
 *
 * @typedef Event
 * @type {Object}
 * @memberOf Schema
 * @property {CustomerType} customer - The customer using the software which generated the event.
 * @property {ProductType} product - The software system which generated the event.
 * @property {EventType} type - The type of event.
 * @property {String} version - The version of the product.
 * @property {Timestamp} timestamp - The time of the event's occurrence.
 * @property {String[]} context - Additional data which qualifies the event's type.
 */

/**
 * Credentials required to access reporting features.
 *
 * @typedef ReportCredentials
 * @type {Object}
 * @memberOf Schema
 * @property {String} username
 * @property {String} password
 */

/**
 * Criteria used to filter events (i.e. usage statistics) for extraction to a
 * report file.
 *
 * @typedef ReportFilter
 * @type {Object}
 * @memberOf Schema
 * @property {CustomerType} customer - The customer to extract events for.
 * @property {ProductType} product - The software system to extract events for.
 * @property {Array<EventType>=} types - The type(s) of events to include. If not specified, all event types will be included.
 * @property {Timestamp=} start - The time to begin extracting events.
 * @property {Timestamp=} end - The time to stop extracting events.
 */

/**
 * Criteria used to export events to a report file.
 *
 * @typedef ReportOutputConfig
 * @type {Object}
 * @memberOf Schema
 * @property {String=} delimiter - The delimiter to use in the report file. Defaults to '|'.
 * @property {String=} bucketName - The name of the S3 bucket to export the report to.
 * @property {String=} bucketKey - The key (i.e. path) in the S3 bucket to export the report to.
 */

/**
 * Describes the status (i.e. progress) of event extraction to a report file.
 *
 * @typedef ReportStatus
 * @type {Object}
 * @memberOf Schema
 * @property {String} job - The job's "short" identifier.
 * @property {String} source - The job's identifier (used for must purposes).
 * @property {EventJobStatus} status - Current status of report generation (e.g. running, complete, timeout, or failed).
 * @property {Schema.ReportFilter} filter - The criteria used for report generation.
 * @property {Day} timing.day - The day the report was started.
 * @property {Timestamp} timing.start - The moment the report was started.
 * @property {Timestamp=} timing.end - The moment the report was finished.
 */

/**
 * Information regarding the remote service.
 *
 * @typedef ReportDownloadLink
 * @type {Object}
 * @memberOf Schema
 * @property {String} link - A URL which can be used to download the actual report. Good for 15 minutes only.
 */

/**
 * Information regarding the remote service.
 *
 * @typedef ServiceMetadata
 * @type {Object}
 * @memberOf Schema
 * @property {String} service.name - Name of the remote service.
 * @property {String} service.description - Description of the remote service.
 * @property {String} service.version - The version of the remote service ([semver](https://semver.org/)).
 */

/**
 * Information regarding the authenticated user (and remote service).
 *
 * @typedef AuthenticationMetadata
 * @type {Object}
 * @memberOf Schema
 * @property {String} service.name - Name of the remote service.
 * @property {String} service.description - Description of the remote service.
 * @property {String} service.version - The version of the remote service ([semver](https://semver.org/)).
 * @property {String} user.id - The user identifier.
 * @property {String} user.context- The user's context (i.e. customer identifier).
 * @property {String} user.permissions - Not used.
 */

/**
 * A meta namespace definitions for anonymous functions.
 *
 * @namespace Callbacks
 */

/**
 * A function that builds an event.
 *
 * @callback EventGenerator
 * @memberOf Callbacks
 * @returns {Schema.Event}
 */
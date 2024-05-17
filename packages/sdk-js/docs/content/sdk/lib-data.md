## Schema :id=schema
> A meta namespace containing structural contracts of anonymous objects.

**Kind**: global namespace  

* [Schema](#Schema) : <code>object</code>
    * _static_
        * [.Event](#SchemaEvent) : <code>Object</code>
        * [.ReportCredentials](#SchemaReportCredentials) : <code>Object</code>
        * [.ReportFilter](#SchemaReportFilter) : <code>Object</code>
        * [.ReportStatus](#SchemaReportStatus) : <code>Object</code>
        * [.ReportDownloadLink](#SchemaReportDownloadLink) : <code>Object</code>
        * [.ServiceMetadata](#SchemaServiceMetadata) : <code>Object</code>
        * [.AuthenticationMetadata](#SchemaAuthenticationMetadata) : <code>Object</code>


* * *

### Schema.Event :id=schemaevent
> Describes the occurrence of a single event. In other words, a usage statistic.

**Kind**: static typedef of [<code>Schema</code>](#Schema)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| customer | <code>CustomerType</code> | <p>The customer using the software which generated the event.</p> |
| product | <code>ProductType</code> | <p>The software system which generated the event.</p> |
| type | <code>EventType</code> | <p>The type of event.</p> |
| version | <code>String</code> | <p>The version of the product.</p> |
| timestamp | <code>Timestamp</code> | <p>The time of the event's occurrence.</p> |
| context | <code>Array.&lt;String&gt;</code> | <p>Additional data which qualifies the event's type.</p> |


* * *

### Schema.ReportCredentials :id=schemareportcredentials
> Credentials required to access reporting features.

**Kind**: static typedef of [<code>Schema</code>](#Schema)  
**Properties**

| Name | Type |
| --- | --- |
| username | <code>String</code> | 
| password | <code>String</code> | 


* * *

### Schema.ReportFilter :id=schemareportfilter
> Criteria used to filter events (i.e. usage statistics) for extraction to a
> report file.

**Kind**: static typedef of [<code>Schema</code>](#Schema)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| customer | <code>CustomerType</code> | <p>The customer to extract events for.</p> |
| product | <code>ProductType</code> | <p>The software system to extract events for.</p> |
| [types] | <code>Array.&lt;EventType&gt;</code> | <p>The type(s) of events to include. If not specified, all event types will be included.</p> |
| [start] | <code>Timestamp</code> | <p>The time to begin extracting events.</p> |
| [end] | <code>Timestamp</code> | <p>The time to stop extracting events.</p> |


* * *

### Schema.ReportStatus :id=schemareportstatus
> Describes the status (i.e. progress) of event extraction to a report file.

**Kind**: static typedef of [<code>Schema</code>](#Schema)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| job | <code>String</code> | <p>The job's &quot;short&quot; identifier.</p> |
| source | <code>String</code> | <p>The job's identifier (used for must purposes).</p> |
| status | <code>EventJobStatus</code> | <p>Current status of report generation (e.g. running, complete, timeout, or failed).</p> |
| filter | [<code>ReportFilter</code>](#SchemaReportFilter) | <p>The criteria used for report generation.</p> |
| timing.day | <code>Day</code> | <p>The day the report was started.</p> |
| timing.start | <code>Timestamp</code> | <p>The moment the report was started.</p> |
| [timing.end] | <code>Timestamp</code> | <p>The moment the report was finished.</p> |


* * *

### Schema.ReportDownloadLink :id=schemareportdownloadlink
> Information regarding the remote service.

**Kind**: static typedef of [<code>Schema</code>](#Schema)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| link | <code>String</code> | <p>A URL which can be used to download the actual report. Good for 15 minutes only.</p> |


* * *

### Schema.ServiceMetadata :id=schemaservicemetadata
> Information regarding the remote service.

**Kind**: static typedef of [<code>Schema</code>](#Schema)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| service.name | <code>String</code> | <p>Name of the remote service.</p> |
| service.description | <code>String</code> | <p>Description of the remote service.</p> |
| service.version | <code>String</code> | <p>The version of the remote service (<a href="https://semver.org/">semver</a>).</p> |


* * *

### Schema.AuthenticationMetadata :id=schemaauthenticationmetadata
> Information regarding the authenticated user (and remote service).

**Kind**: static typedef of [<code>Schema</code>](#Schema)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| service.name | <code>String</code> | <p>Name of the remote service.</p> |
| service.description | <code>String</code> | <p>Description of the remote service.</p> |
| service.version | <code>String</code> | <p>The version of the remote service (<a href="https://semver.org/">semver</a>).</p> |
| user.id | <code>String</code> | <p>The user identifier.</p> |
| user.context- | <code>String</code> | <p>The user's context (i.e. customer identifier).</p> |
| user.permissions | <code>String</code> | <p>Not used.</p> |


* * *


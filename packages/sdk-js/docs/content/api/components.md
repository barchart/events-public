# Components

## Responses

### ServerError :id=responsesservererror
> Server Error

**Content Type**: <code>application/json</code>

**Response Type:** <code><code>Array&lt;Object&gt;</code></code>

| Name | Type | Required | Nullable | Description |
| ---- | ---- | -------- | -------- | ----------- |
| value | <code>Object</code> | true | false |  |
| value.code | <code>String</code> | false | false | An error code. |
| value.message | <code>String</code> | false | false | An error message. |
| children | <code>Array</code> | true | false |  |

**Example**:

```json
[
  {
    "value": {
      "code": "REQUEST_GENERAL_FAILURE",
      "message": "An attempt to accept new events failed for unspecified reason(s)."
    },
    "children": []
  }
]
```

* * *

### Unauthorized :id=responsesunauthorized
> Authorization failure.

**Content Type**: <code>application/json</code>

**Response Type:** <code><code>Object</code></code>

| Name | Type | Required | Nullable | Description |
| ---- | ---- | -------- | -------- | ----------- |
| message | <code>String</code> | true | false | An error message. |

**Example**:

```json
{
  "message": "Unauthorized"
}
```

* * *

## Schemas

### Event :id=schemasevent
**Type**: <code>Object</code>
    
| Name | Type | Required | Nullable | Description |
| ---- | ---- | -------- | -------- | ----------- |
| customer | <code>String</code> | true | false | Code for customer using the software which generated the event. |
| product | <code>String</code> | true | false | Code for software system which generated the event. |
| type | <code>String</code> | true | false | Code for event type. |
| timestamp | <code>Number</code> | true | false | The time of the event's occurrence — milliseconds since epoch. |
| context | <code>Array</code> | true | false | An array data which qualifies the event (differnt items are required based on event's type). |
| context[i] | <code>String</code> | false | false |  |

**Example**:

```json
{
  "customer": "BARCHART",
  "product": "PORTFOLIO",
  "type": "PORTFOLIO-APPLICATION-LOADED",
  "timestamp": 1568381886060,
  "context": [
    "string"
  ]
}
```

* * *

### EventFull :id=schemaseventfull
**Type**: <code>Object</code>
    
| Name | Type | Required | Nullable | Description |
| ---- | ---- | -------- | -------- | ----------- |
| customer | <code>String</code> | true | false | Code for customer using the software which generated the event. |
| product | <code>String</code> | true | false | Code for software system which generated the event. |
| type | <code>String</code> | true | false | Code for event type. |
| timestamp | <code>Number</code> | true | false | The time of the event's occurrence — milliseconds since epoch. |
| context | <code>Array</code> | true | false | An of additional data which qualifies the event's type. |
| context[i] | <code>String</code> | false | false |  |
| sequence | <code>Number</code> | true | false | The event's order within the batch. Irrelevant to most consumers. |
| batch | <code>String</code> | true | false | The identifier for the batch this event was inserted with. Irrelevant to most consumers. |

**Example**:

```json
{
  "customer": "BARCHART",
  "product": "PORTFOLIO",
  "type": "PORTFOLIO-APPLICATION-LOADED",
  "timestamp": 1568381886060,
  "context": [
    "string"
  ],
  "sequence": 1,
  "batch": "e2d04b89-972d-4a0a-b0ee-427bef63a8d0"
}
```

* * *

### ReportFilter :id=schemasreportfilter
**Type**: <code>Object</code>
    
| Name | Type | Required | Nullable | Description |
| ---- | ---- | -------- | -------- | ----------- |
| customer | <code>String</code> | true | false | The customer code to extract events for. |
| product | <code>String</code> | true | false | The code of the software system to extract events for. |
| start | <code>String</code> | false | false | The time of the first event to extract — milliseconds since epoch. |
| end | <code>String</code> | false | false | The time of the final event to extract — milliseconds since epoch. |

**Example**:

```json
{
  "customer": "BARCHART",
  "product": "PORTFOLIO",
  "start": 1571029200000,
  "end": 1571115600000
}
```

* * *

### ReportStatus :id=schemasreportstatus
**Type**: <code>Object</code>
    
| Name | Type | Required | Nullable | Description |
| ---- | ---- | -------- | -------- | ----------- |
| job | <code>String</code> | true | false | Short identifier for job. Irrelevant to most consumers. |
| source | <code>String</code> | true | false | Identifier for job. Used in other API calls to refer to job. |
| status | <code>String</code> | true | false | Current status of report generation job. |
| filter | [<code>ReportFilter</code>](#schemasReportFilter) | true | false |  |
| timing | <code>Object</code> | true | false |  |
| timing.day | <code>String</code> | false | false | The day the report was started. |
| timing.start | <code>Number</code> | false | false | The moment the report was started — milliseconds since epoch. |
| timing.end | <code>Number</code> | false | false | The moment the report was finished — milliseconds since epoch. |

**Example**:

```json
{
  "job": "0527e342-c92c-45ec-a3cf-fd93f87cb068",
  "source": "JOB-0527e342-c92c-45ec-a3cf-fd93f87cb068",
  "status": "RUNNING",
  "filter": {
    "customer": "BARCHART",
    "product": "PORTFOLIO",
    "start": 1571029200000,
    "end": 1571115600000
  },
  "timing": {
    "day": "2021-05-05T14:31:55.235Z",
    "start": 1571073977278,
    "end": 1571073977279
  }
}
```

* * *

## Security

### Basic :id=securitybasic

>

**Type**: http basic
    
#### Headers
| Name | Example |
| ---- | ------- |
| Authorization | Authorization: Basic <code>&lt;Token&gt;</code> |

* * *



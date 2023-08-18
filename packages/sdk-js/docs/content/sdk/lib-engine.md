## Contents {docsify-ignore}

* [EventBatcher](#EventBatcher) 

* [EventFactory](#EventFactory) 


* * *

## EventBatcher :id=eventbatcher
> A utility which buffers [Schema.Event](/content/sdk/lib-data?id=schemaevent) objects and periodically
> transmits them to backend in batches.

**Kind**: global class  
**Access**: public  
**Import**: @barchart/events-client-js/lib/engine/EventBatcher  
**File**: /lib/engine/EventBatcher.js  

* [EventBatcher](#EventBatcher)
    * _instance_
        * [.start()](#EventBatcherstart)
        * [.stop()](#EventBatcherstop)
        * [.clear()](#EventBatcherclear)
        * [.push(event)](#EventBatcherpush)
    * _constructor_
        * [new EventBatcher(eventGateway, [callback])](#new_EventBatcher_new)


* * *

### eventBatcher.start() :id=eventbatcherstart
> Begins queue processing. Items in the buffer will begin to be transmitted
> to the remote service.

**Kind**: instance method of [<code>EventBatcher</code>](#EventBatcher)  
**Access**: public  

* * *

### eventBatcher.stop() :id=eventbatcherstop
> Stops the queue processing. Items in the buffer accumulate without being
> transmitted to the remote service.

**Kind**: instance method of [<code>EventBatcher</code>](#EventBatcher)  
**Access**: public  

* * *

### eventBatcher.clear() :id=eventbatcherclear
> Clears the internal buffer.

**Kind**: instance method of [<code>EventBatcher</code>](#EventBatcher)  
**Access**: public  

* * *

### eventBatcher.push(event) :id=eventbatcherpush
> Adds a new event to the buffer.

**Kind**: instance method of [<code>EventBatcher</code>](#EventBatcher)  
**Access**: public  

| Param | Type |
| --- | --- |
| event | [<code>Schema.Event</code>](/content/sdk/lib-data?id=schemaevent) | 


* * *

### new EventBatcher(eventGateway, [callback]) :id=new_eventbatcher_new
**Kind**: constructor of [<code>EventBatcher</code>](#EventBatcher)  

| Param | Type |
| --- | --- |
| eventGateway | [<code>EventGateway</code>](/content/sdk/lib-gateway?id=eventgateway) | 
| [callback] | <code>function</code> | 


* * *

## EventFactory :id=eventfactory
> A utility for simplifying the construction of event.

**Kind**: global class  
**Access**: public  
**Import**: @barchart/events-client-js/lib/engine/EventFactory  
**File**: /lib/engine/EventFactory.js  

* [EventFactory](#EventFactory)
    * _instance_
        * [.build(type, context)](#EventFactorybuild) ⇒ [<code>Schema.Event</code>](/content/sdk/lib-data?id=schemaevent)
    * _static_
        * [.for(customer, product, version)](#EventFactoryfor) ⇒ [<code>EventFactory</code>](#EventFactory)
    * _constructor_
        * [new EventFactory(customer, product, version)](#new_EventFactory_new)


* * *

### eventFactory.build(type, context) :id=eventfactorybuild
> Creates a new [Schema.Event](/content/sdk/lib-data?id=schemaevent) object, using the factory's customer and product.

**Kind**: instance method of [<code>EventFactory</code>](#EventFactory)  
**Returns**: [<code>Schema.Event</code>](/content/sdk/lib-data?id=schemaevent)  
**Access**: public  

| Param | Type |
| --- | --- |
| type | <code>EventType</code> | 
| context | <code>Array</code> | 


* * *

### EventFactory.for(customer, product, version) :id=eventfactoryfor
> Configures a new event factory, which will build events for a specific customer and product.

**Kind**: static method of [<code>EventFactory</code>](#EventFactory)  
**Returns**: [<code>EventFactory</code>](#EventFactory)  
**Access**: public  

| Param | Type |
| --- | --- |
| customer | <code>CustomerType</code> | 
| product | <code>ProductType</code> | 
| version | <code>String</code> | 


* * *

### new EventFactory(customer, product, version) :id=new_eventfactory_new
**Kind**: constructor of [<code>EventFactory</code>](#EventFactory)  

| Param | Type |
| --- | --- |
| customer | <code>CustomerType</code> | 
| product | <code>ProductType</code> | 
| version | <code>String</code> | 


* * *


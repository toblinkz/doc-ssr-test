---
title: Events and Report
description: 'Termii provides RESTful API which is based on simple HTTP POST/GET requests. Our API lets you create, send, and verify messages, as well as, track your delivery statistics.'
position: 14
category: Insights
---
### Introduction 

Events are our way of letting you know when something happens on your account. When an event occurs, we create an ``Event`` object.

### Verifying events

It is important to verify that an event originated from Termii. 
You can verify an event by validating the signature, a valid event is raised with an header ``X-Termii-Signature`` which is a ```HMAC SHA512``` signature of the event payload signed with your secret key.

## Outbound Message
An outbound message is a message routed from a client or an application and delivered to the end user's mobile phone.
You can receive the outbound message status update reports directly in your application using Termii's Webhook Notiifcation.
Add your webhook url in your <a href="https://termii.com/account/webhook/config">termii developer console</a>

<b>Request Type : </b>
`POST`
<br><br> <b>Content-Type : </b> `application/json`

Options | Description |
--- | --- |
type |*string*<br> Represents the type of message that is sent | 
id | *string*<br> Represents the ID of the request sent| 
message_id |*string*<br> Represents the ID of the message sent  | 
receiver |*string*<br> Represents the destination phone number | 
sender |*string*<br> Represents a sender ID for sms or Device ID for Whatsapp which can be Alphanumeric | 
message |*string*<br> Text of a message that would be sent to the destination phone number | 
sent_at |*string*<br> Represents the time the message was sent | 
cost |*string*<br> Represent amount charged for the message sent | 
status |*string*<br> Represents the status of the message sent.v A message can have any of the following states; <span style="color:#880000"><code>DELIVERED &#124; Message delivered to handset</code>, `DND Active on Phone Number`, `Message Failed`</span> | 
channel |*string*<br> This is the route through which the message is sent. It is either dnd, whatsapp, or generic | 



[comment]: <> (####  Webhook Notification Data)


[comment]: <> (```JSON)

[comment]: <> ({  )

[comment]: <> (   "type":"outbound",)

[comment]: <> (   "message_id":"5964465985113503103",)

[comment]: <> (   "receiver":"2343459509389",)

[comment]: <> (   "sender":"N-Alert",)

[comment]: <> (   "message":"Your Termii confirmation code is 234u53.",)

[comment]: <> (   "sent_at":"2020-12-16 11:34:36",)

[comment]: <> (   "cost":"3.9",)

[comment]: <> (   "command":"deliver",)

[comment]: <> (   "status":"DELIVERED | Message delivered to handset",)

[comment]: <> (   "channel":"Number Api")

[comment]: <> (}	        )

[comment]: <> (```)

## Device offline Notification
You can receive your device offline notification update  directly in your application using Termii's Webhook Notiifcation.
Add your webhook url in your <a href="https://termii.com/account/webhook/config">termii developer console</a>

<b>Request Type : </b>
`POST`
<br><br> <b>Content-Type : </b> `application/json`


Options | Description |
--- | --- |
type |*string*<br> Represents the type of request that is sent | 
status | *string*<br> Represents the current status of the device | 
device_id |*string*<br> Represents the ID of the device | 
name |*string*<br> Represents the name of the device | 

```JSON
{  
   "type":"device_status",
   "status":"disconnected",
   "device_id":"e0c5a9b-0136-4751-9be9-a3c9zzTc0a19",
   "name":"TermiiWh"
}	        
```


---
title: Incoming
description: 'Termii provides RESTful API which is based on simple HTTP POST/GET requests. Our API lets you create, send, and verify messages, as well as, track your delivery statistics.'
position: 3
category: Inbox
---

## Inbound-Message Received
An inbound message is a mobile message routed from an end user's mobile device and delivered to a mobile phone or an application.
You can receive the inbound messages directly in your application using Termii's Webhook Notiifcation.
Add your webhook url in your <a href="https://termii.com/account/webhook/config" target="_blank">termii developer console</a>



Options | Description |
--- | --- |
type | The classification of message that is received  | 
id |   The  ID of the request sent| 
message_id | Represents the ID of the message received  | 
receiver |  The destination phone number  | 
sender | It represents the source or sender of the message | 
message | Text of a message that would be sent to the destination phone number | 
received_at | Time the message sent was received | 
cost | The amount charged for the message received | 
status | The status of the message received | 
channel | This is the route through which the message is received. It is either dnd, whatsapp, or generic | 

####  Webhook Notification Data


```JSON
    {  "type":"inbound",
       "id":"8248611476370959318",
       "message_id":"3905204342778053556",
       "receiver":"12022214836",
       "sender":"2347069549231",
       "message":"Great ",
       "received_at":"2020-12-16T10:51:03.000000Z",
       "cost":null,
       "command":"Received",
       "status":"Received",
       "channel":null
}	        
```



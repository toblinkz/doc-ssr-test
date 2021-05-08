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

## Outbound Message (Delivery Report)
An outbound message is a message routed from a client or an application and delivered to the end user's mobile phone.
You can receive delivery status report of your messages sent in your application using Termii's Webhook Notification.
Add your webhook url in your <a style="" href="https://termii.com/account/webhook/config">termii developer console</a>

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
status |*string*<br> Represents the status of the message sent. A message can have any of the following states; <span style="color:#880000"><code>DELIVERED &#124; Message delivered to handset</code>, `DND Active on Phone Number`, `Message Failed`</span> | 
channel |*string*<br> This is the route through which the message is sent. It is either dnd, whatsapp, or generic | 

<b>Status of messages sent</b>
Status | Description |
--- | --- |
Delivered  | The message has been delivered to the recipient phone number
DND Active on Phone Number | It means do-not-disturb is active on the recipient phone number
Message Sent | It means the message has been delivered, but the telcos are yet to update the delivery report
Received | The message has been delivered to the recipient phone number
Message Failed | The message failed due to poor network from the recipient end
Rejected |It means do-not-disturb is active on the recipient phone number
Expired | It means the message 



## Device offline Notification
You can receive your device offline notification update  directly in your application using Termii's Webhook Notiifcation.
Add your webhook url in your <a style="color:#406DAD; text-decoration: underline;" href="https://accounts.termii.com/#/account/webhook/config" target="_blank">termii developer console</a>

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


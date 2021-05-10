---
title: Error 
description: 'API response error'
position: 3
category: Error
---

Termii uses HTTP response codes to indicate the success or failure of requests. 
In general: 
* Codes in the 2xx range indicate success.
* Codes in the 4xx range indicate an error that failed given the information provided 
* Codes in the 5xx range indicate an error from Termii's end (these are rare).


## HTTP status code summary
|  Code      | Description |
| ----------- | ----------- |
| 200   | OK: Request was successful.        |
| 400   |Bad Request:  Indicates that the server cannot or will not process the request due to something that is perceived to be a client error        |
| 401 | Unauthorized:   No valid API key provided        |
| 403  |Forbidden: The API key doesn't have permissions to perform the request.      |
| 404 | Not Found: The requested resource doesn't exist.      |
| 405 | Method Not allowed:  The selected http method is not allowed      |
| 422 |  Unprocessable entity:   indicates that the server understands the content type of the request entity, and the syntax of the request entity is correct, but it was unable to process the contained instructions  |
| 429 | Too Many Requests: Indicates the user has sent too many requests in a given amount of time|
| 5xx | Server Errors: Something went wrong on Termii's end      |

## Common Errors

<b>Unauthorized:</b> 
<br>
Getting Unauthorized and you are passing the right key? Check your API endpoint. This could also occur when you use <b>http</b> instead of <b>https</b>
<br>
<br>
<b>Your account is not active: </b> 
<br>
Account has either been deactivated or disabled by the administrators. Kindly contact the administrator for more information to reactivate.
<br>
<br>
<b>You are not set up on this route: </b>
<br>
In this instance, that particular country route or intended destination is not set up for the user. Do contact your account manager to activate the route.
<br>
<br>
<b>Your device has reached the daily limit: </b> 
<br>
The message volume activated on your device has reached the daily message limit.
<br>
<br>
<b>Invalid Sender Id: </b>
<br>
This prompt is received when the inputed sender ID is not registered or misspelt. Kindly confirm your sender ID on the <a href="https://accounts.termii.com/#/sms/sender-id-management" target="_blank" style="cursor:pointer;text-decoration:underline; color:#406DAD">dashboard</a> or via <a href="https://developers.termii.com/sender-id" target="_blank" style="cursor:pointer; text-decoration:underline;  color:#406DAD">API</a>.
<br> 
<br> 
<b>Device not found: </b>
<br>
This occurs when your device is not registered or recognised by our system. Visit your dashboard to <a href="https://accounts.termii.com/#/devices" target="_blank" style="cursor:pointer;text-decoration:underline; color:#406DAD">register</a> your device.
<br>
<br>
<b>Insufficient balance: </b>
<br>
Wallet balance is not sufficient to perform that particular transaction. Kindly visit your dashboard to <a href="https://accounts.termii.com/#/billing/fund" target="_blank" style="cursor:pointer;text-decoration:underline;color:#406DAD">top-up</a> your account or request an invoice.
<br>
<br>
<b>No active subscription on your device:</b>
<br>
Your device subscription has expired. Visit your <a href="https://accounts.termii.com/#/devices" target="_blank" style="cursor:pointer;text-decoration:underline;  color:#406DAD">dashboard</a> to renew subscription.
<br>
<br>
<b>Service temporarily unavailable:</b>
<br>
In this rare instance, Termii is experiencing a downtime. <a id="CHATID"  style="cursor:pointer;text-decoration:underline; color:#406DAD">Kindly contact the administrator</a>.
<br>
<br>
<b>This service is currently not active on your account:</b>
<br>
The service in question is not active on your account. <a id="CHATID"   style="cursor:pointer; text-decoration:underline; color:#406DAD">Kindly contact your account manager</a>.
<br>
<br>
<b>Device not active:</b>
<br>
Rescan device barcode to the web server and ensure the device is connected to an active internet.
<br>
<br>
<b>This WhatsApp 'destination' is not in a free-form window and no template matched with your content:</b>
<br>
This happens when you are trying to send a free-form window message without your customer initiating the conversation or none of the registered approved templates matches the message content you are trying to send.
In cases like this, your customer must have initiated the conversation by sending a WhatsApp message to your business registered WhatsApp number

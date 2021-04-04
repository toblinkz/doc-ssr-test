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
Getting Unauthorized and you are passing the right key? Check your API endpoint. This could also occur when you use <b>http</b> instead of <b>https</b>
<br>
<br>
<b>You are not set up on this route: </b>
<br>
Getting Unauthorized and you are passing the right key? Check your API endpoint. This could also occur when you use <b>http</b> instead of <b>https</b>
<br>
<br>
<b>Your device has reached the daily limit: </b> 
<br>
Getting Unauthorized and you are passing the right key? Check your API endpoint. This could also occur when you use <b>http</b> instead of <b>https</b>
<br>
<br>
<b>Invalid Sender Id: </b>
<br>
Getting Unauthorized and you are passing the right key? Check your API endpoint. This could also occur when you use <b>http</b> instead of <b>https</b>
<br> 
<br> 
<b>Device not found: </b>
<br>
Getting Unauthorized and you are passing the right key? Check your API endpoint. This could also occur when you use <b>http</b> instead of <b>https</b>
<br>
<br>
<b>Insufficient balance: </b>
<br>
Getting Unauthorized and you are passing the right key? Check your API endpoint. This could also occur when you use <b>http</b> instead of <b>https</b>
<br>
<br>
<b>No active subscription on your device:</b>
<br>
Getting Unauthorized and you are passing the right key? Check your API endpoint. This could also occur when you use <b>http</b> instead of <b>https</b>



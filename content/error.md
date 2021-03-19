---
title: Error 
description: 'API response error'
position: 3
category: Home
---

Termii's API is a  RESTful API which is based on simple HTTP POST/GET requests.
Termii uses HTTP response codes to indicate the success or failure of requests.



## HTTP status code
|  Code      | Description |
| ----------- | ----------- |
| 200      | Request resource was found and intended action was successful.        |
| 400      | A validation or client side error occurred and the request was not fulfilled.        |
| 401   |  The request was not authorized. This can be triggered by passing an invalid secret key in the authorization header or the lack of one        |
| 404      | The requested resource doesn't exist..      |
| 405      | The selected http method is not allowed      |
| 422    | This is a client-side error, meaning the problem is with the request body itself, and not the API.      |
| 500   |  Request could not be fulfilled due to an error on Termii's end. This shouldn't happen so please report as soon as you encounter any instance of this.       |



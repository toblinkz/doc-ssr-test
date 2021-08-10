---
title: Balance
description: 'Termii provides RESTful API which is based on simple HTTP POST/GET requests. Our API lets you create, send, and verify messages, as well as, track your delivery statistics.'
position: 19
category: Insights
---


The Balance API returns your total balance and balance information from your wallet, such as currency.

<b>Endpoint : </b>
`
https://termii.com/api/get-balance?api_key=YourAPIKey
`<br><br> <b>Request Type : </b> **`GET`**

Options | Required | Description |
--- | --- | --- |
api_key | yes |*string*<br> Your API key (It can be found on your <a href="https://accounts.termii.com/#/" target="_blank" style="text-decoration:underline; cursor:pointer">Termii dashboard</a>). | 



<hr />


#### Response


```JSON
  {
      "user": "Tayo Joel",
      "balance": 0,
      "currency": "NGN"
  }
          
```

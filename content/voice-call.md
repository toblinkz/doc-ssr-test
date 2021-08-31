---
title: Voice Call
description: 'Termii Voice Call'
position: 15
category: Token
---

The voice call API enables you to send messages from your application through our voice channel to a phone number. Only one-time-passwords (OTP) are allowed for now, and these OTPs can not be verified using our Verify Token API
<b>Endpoint : </b>
`
https://termii.com/api/sms/otp/call
`<br><br> <b>Request Type : </b> **`POST`**


Options |Required| Description |
--- | --- | --- |
api_key |yes|*string*<br> Your API key (It can be found on your <a href="https://accounts.termii.com/#/" target="_blank" style="text-decoration:underline; cursor:pointer">Termii dashboard</a>). |
phone_number |yes |*string*<br> The destination phone number. Phone number must be in the international format (`Example: 23490126727`)|
code |yes|*numeric*<br> Example: `3344` <br> The code you want your users to receive. It has to be numeric and length must be between 4 and  8 digits.| 


<code-group>
   <code-block label="JSON" active>

  ```bash
   {
       "api_key" : "Your API key",
       "phone_number" : "23409800000000",
       "code" : 55675,
      
   }
  ```

  </code-block>
  <code-block label="JavaScript">

  ```bash
 var data = {
               "api_key" : "Your API key",
               "phone_number" : "23409800000000",
               "code" : 55675
        };

var data = JSON.stringify(data);

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://termii.com/api/sms/otp/send/voice");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.send(data);


  ```

  </code-block>
 <code-block label="NodeJs" >

  ```bash
 var request = require('request');
    var data = {
                   "api_key" : "Your API key",
                   "phone_number" : "23409800000000",
                   "code" : 55675
                };
    var options = {
      'method': 'POST',
      'url': 'https://termii.com/api/sms/otp/send/voice',
      'headers': {
        'Content-Type': ['application/json', 'application/json']
      },
      body: JSON.stringify(data)
    
    };
    request(options, function (error, response) { 
      if (error) throw new Error(error);
      console.log(response.body);
    });

  ```

  </code-block>
 <code-block label="Python" >

  ```bash
import requests
url = "https://termii.com/api/sms/otp/send/voice"
payload = {
             "api_key" : "Your API key",
             "phone_number" : "23409800000000",
             "code" : 55675
         }
headers = {
  'Content-Type': 'application/json',
}
response = requests.request("POST", url, headers=headers, json=payload)
print(response.text)

   ```
  </code-block>

<code-block label="C#" >

  ```bash
RestClient restClient = new RestClient("https://termii.com/api/sms/otp/send/voice");
    
    //Creating Json object
    JObject objectBody = new JObject();
    objectBody.Add("api_key","Your API Key");
    objectBody.Add("phone_number","+2348109077743");
    objectBody.Add("code", 55675)

    RestRequest restRequest = new RestRequest(Method.POST);
    
    restRequest.AddHeader("Content-Type", "application/json");
    restRequest.AddParameter("application/json", objectBody,  ParameterType.RequestBody);
    IRestResponse restResponse = restClient.Execute(restRequest);
    Console.WriteLine(restResponse.Content);  
  ```
  </code-block>
<code-block label="Java" >

  ```bash
 Unirest.setTimeouts(0, 0);
 HttpResponse<String> response = Unirest.get("https://termii.com/api/sms/otp/send/voice")
  .header("Content-Type", "application/json")
  .body("{\n\n  \"api_key\" : \"Your API key\",\n    
         \"phone_number\" : \"23409800000000\",\n   
             \"code\" : 55675\n }")
  .asString();



  ```
  </code-block>
<code-block label="PHP" >

  ```bash
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://termii.com/api/sms/otp/send/voice',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 55675,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'GET',
  CURLOPT_POSTFIELDS =>'{

       "api_key" : "Your API key",
       "phone_number" : "23409800000000",
       "code" : 55675
}',
  CURLOPT_HTTPHEADER => array(
    'Content-Type: application/json'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;

  ```
  </code-block>
</code-group>


<hr />


#### Response

```JSON
  {
     "code": "ok",
     "message_id": "453166532802459832",
     "pinId": "29ae67c2-c8e1-4165-8a51-8d3d7c298081",
     "message": "Successfully Sent",
     "balance": 77.5,
     "user": "Termii Test"
  }
```

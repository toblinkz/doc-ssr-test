---
title: Voice Token
description: 'Termii Voice Token'
position: 14
category: Token
---

The voice token API enables you to generate and trigger one-time passwords (OTP) through the voice channel to a phone number. OTPs are generated and sent to the phone number and can only be verified using our <a href="/verify-token"  target="_blank"  style="text-decoration=underline; cursor: pointer;  color: rgb(64, 109, 173);">Verify Token API</a> .

<b>Endpoint : </b>
`
https://termii.com/api/sms/otp/send/voice
`<br><br> <b>Request Type : </b> **`POST`**


Options |Required| Description |
--- | --- | --- |
api_key |yes|*string*<br> Your API key (It can be found on your <a href="https://accounts.termii.com/#/" target="_blank" style="text-decoration:underline; cursor:pointer">Termii dashboard</a>). |
phone_number |yes |*string*<br> The destination phone number. Phone number must be in the international format (`Example: 23490126727`)|
pin_attempts |yes| Enum: `"NUMERIC"` `"ALPHANUMERIC"`<br> Type of PIN code that will be generated and sent as part of the OTP message. It has a minimum of one attempt. | 
pin_time_to_live |yes|*integer*<br>Example: `1`<br> Represents how long the PIN is valid before expiration. The time is in minutes. The minimum time value is 0 and the maximum time value is 60  | 
pin_length |yes|*integer*<br> Example: `4` <br> The length of the PIN code.It has a minimum of 4 and maximum of 8.| 


<code-group>
   <code-block label="JSON" active>

  ```bash
   {
       "api_key" : "Your API key",
       "phone_number" : "23409800000000",
       "pin_attempts" : 10,
       "pin_time_to_live" :  5,
       "pin_length" : 6,
   }
  ```

  </code-block>
  <code-block label="JavaScript">

  ```bash
 var data = {
               "api_key" : "Your API key",
               "phone_number" : "23409800000000",
               "pin_attempts" : 10,
               "pin_time_to_live" :  5,
               "pin_length" : 6,
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
                   "pin_attempts" : 10,
                   "pin_time_to_live" :  5,
                   "pin_length" : 6,
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
             "pin_attempts" : 10,
             "pin_time_to_live" :  5,
             "pin_length" : 6,
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
    objectBody.Add("pin_attempts", 3);
    objectBody.Add("pin_time_to_live", 0);
    objectBody.Add("pin_length", 6);

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
             \"pin_attempts\" : 10,\n  \"pin_time_to_live\" :  5,\n  
              \"pin_length\" : 6\n\n}")
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
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'GET',
  CURLOPT_POSTFIELDS =>'{

       "api_key" : "Your API key",
       "phone_number" : "23409800000000",
       "pin_attempts" : 10,
       "pin_time_to_live" :  5,
       "pin_length" : 6

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

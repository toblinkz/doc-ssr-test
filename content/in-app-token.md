---
title: In-App Token
description: 'Termii provides RESTful API which is based on simple HTTP POST/GET requests. Our API lets you create, send, and verify messages, as well as, track your delivery statistics.'
position: 13
category: Token
---

This API returns OTP codes in JSON format which can be used within any web or mobile app.
Tokens are numeric or alpha-numeric codes generated to authenticate login requests and verify customer transactions. <br>
<br>
<b>Endpoint : </b>
`
https://termii.com/api/sms/otp/generate
`<br> <br> <b>Request Type : </b>**`POST`**


Options | Description |
--- | --- |
api_key* |*string*<br> Your live API key (It can be found on your Termii dashboard).  | 
pin_type* |Enum: `"NUMERIC"` `"ALPHANUMERIC"`<br> Type of PIN code that will be generated and sent as part of the OTP message. You can set PIN type to numeric or alphanumeric | 
phone_number* | *string*<br> Represents the destination phone number.Phone number must be in the international format (`Example: 23490126727`)| 
pin_attempts* |*integer*<br>Example: `3`<br> Represents the number of times the PIN can be attempted before expiration. It has a minimum of one attempt| 
pin_time_to_live* |*integer*<br> Example: `1`<br> Represents how long the PIN is valid before expiration. The time is in minutes. The minimum time value is 0 and the maximum time value is 60 | 
pin_length* |*integer*<br>Example: `4` <br> The length of the PIN code. It has a minimum of 4 and maximum of 8.| 



<code-group>
   <code-block label="JSON" active>

  ```bash
   {
     "api_key": "Your API Key",
     "pin_type": "NUMERIC",
     "phone_number": "2348109477743",
     "pin_attempts": 3,
     "pin_time_to_live": 0,
     "pin_length": 4
   }
  ```

  </code-block>
  <code-block label="JavaScript">

  ```bash
 var data = {
            "api_key": "Your API Key",
            "pin_type": "NUMERIC",
            "phone_number": "2348109477743",
            "pin_attempts": 3,
            "pin_time_to_live": 0,
            "pin_length": 4
            };

var data = JSON.stringify(data);

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://termii.com/api/sms/otp/generate");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.send(data);

  ```

  </code-block>
 <code-block label="NodeJs" >

  ```bash
 var request = require('request');
var data = {
               "api_key": "Your API Key",
               "pin_type": "NUMERIC",
               "phone_number": "2348109477743",
               "pin_attempts": 3,
               "pin_time_to_live": 0,
               "pin_length": 4
            };
var options = {
  'method': 'POST',
  'url': 'https://termii.com/api/sms/otp/generate',
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
import http.client
import json
conn = http.client.HTTPSConnection("https://termii.com/api/sms/otp/generate")
headers = {'Content-Type': 'application/json'}
        
data = {
         "api_key": "Your API Key",
          "pin_type": "NUMERIC",
          "phone_number": "2348109477743",
          "pin_attempts": 3,
          "pin_time_to_live": 0,
          "pin_length": 4
        }
conn.request("POST", "", data, headers)
response = conn.getresponse()
print(response.read().decode())
   ```
  </code-block>

<code-block label="C#" >

  ```bash
RestClient restClient = new RestClient("https://termii.com/api/sms/otp/generate");

//Creating Json object
JObject objectBody = new JObject();
objectBody.Add("api_key","Your API Key");
objectBody.Add("pin_type","NUMERIC");
objectBody.Add("phone_number","2348109477743");
objectBody.Add("pin_attempts", 3);
objectBody.Add("pin_time_to_live", 0);
objectBody.Add("pin_length",4);


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
HttpResponse<String> response = Unirest.post("https://termii.com/api/sms/otp/generate")
  .header("Content-Type", "application/json")
  .body("{\r\n  \"api_key\": \"Your API Key\",\r\n    \"pin_type\": \"NUMERIC\",\r\n  \"phone_number\": \"2348109477743\",\r\n    \"pin_attempts\": 3,\r\n   \"pin_time_to_live\": 0,\r\n    \"pin_length\": 4\r\n }")
  .asString();

  ```
  </code-block>
<code-block label="PHP" >

  ```bash
$curl = curl_init();
$data = array("api_key" => "Your API key", "pint_type" => "NUMERIC", 
"phone_number" => "2348109477743", "pin_attempts" => 3, "pin_time_to_live" => 0, "pin_length" => 4 );

$post_data = json_encode($data);

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://termii.com/api/sms/otp/generate",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => $post_data,
  CURLOPT_HTTPHEADER => array(
    "Content-Type: application/json"
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
       "status": "success",
       "data": 
     {
         "pin_id": "db34d5ce-9bd4-4f10-b8ec-8ee402ccd0",
         "otp": "522726",
         "phone_number": "2348109077743",
         "phone_number_other": "Termii"
     }
  }
```

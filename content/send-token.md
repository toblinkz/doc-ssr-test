---
title: Send Token
description: 'Termii Send Token'
position: 11
category: Token
---

The send token API allows businesses trigger one-time-passwords (pins) across any available messaging channel on Termii. One-time-passwords created are generated randomly and there's an option to set an expiry time.

<b>Endpoint : </b>
`
https://termii.com/api/sms/otp/send
`<br><br> <b>Request Type : </b> **`POST`**


Options |Required| Description |
--- | --- | --- |
api_key |yes|*string*<br> Your API key (It can be found on your Termii dashboard). | 
message_type |yes| Enum: `"NUMERIC"` `"ALPHANUMERIC"`<br> Type of message that will be generated and sent as part of the OTP message. You can set message type to numeric or alphanumeric  | 
to |yes |*string*<br> The destination phone number. Phone number must be in the international format (`Example: 23490126727`)| 
from |yes|*string*<br> Represents a sender ID which can be alphanumeric or numeric. Alphanumeric sender ID length should be between 3 and 11 characters (Example:`CompanyName`)   | 
channel |yes|*string*<br> This is the route through which the message is sent. It is either `dnd`, `WhatsApp`, or `generic` | 
pin_attempts |yes| Enum: `"NUMERIC"` `"ALPHANUMERIC"`<br> Type of PIN code that will be generated and sent as part of the OTP message. It has a minimum of one attempt. | 
pin_time_to_live |yes|*integer*<br>Example: `1`<br> Represents how long the PIN is valid before expiration. The time is in minutes. The minimum time value is 0 and the maximum time value is 60  | 
pin_length |yes|*integer*<br> Example: `4` <br> The length of the PIN code.It has a minimum of 4 and maximum of 8.| 
pin_placeholder |yes|*string*<br>Example: `"< 1234 >"` <br> PIN placeholder. Right before sending the message, PIN code placeholder will be replaced with generate PIN code. | 
message_text |yes|*string*<br> Text of a message that would be sent to the destination phone number |
 


<code-group>
   <code-block label="JSON" active>

  ```bash
   {
       "api_key" : "Your API key",
       "message_type" : "NUMERIC",
       "to" : "eg. 2348109077743",
       "from" : "Aproved Sender or Device IDs",
       "channel" : "dnd",
       "pin_attempts" : 10,
       "pin_time_to_live" :  5,
       "pin_length" : 6,
       "pin_placeholder" : "< 1234 >",
       "message_text" : "Your pin is < 1234 >",
       "pin_type" : "NUMERIC"
   }
  ```

  </code-block>
  <code-block label="JavaScript">

  ```bash
 var data = {
               "api_key" : "Your API key",
               "message_type" : "NUMERIC",
               "to" : "eg. 2348109077743",
               "from" : "Aproved Sender or Device IDs",
               "channel" : "dnd",
               "pin_attempts" : 10,
               "pin_time_to_live" :  5,
               "pin_length" : 6,
               "pin_placeholder" : "< 1234 >",
               "message_text" : "Your pin is < 1234 >",
               "pin_type" : "NUMERIC"
        };

var data = JSON.stringify(data);

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://termii.com/api/sms/otp/send");
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
                   "message_type" : "NUMERIC",
                   "to" : "eg. 2348109077743",
                   "from" : "Aproved Sender or Device IDs",
                   "channel" : "dnd",
                   "pin_attempts" : 10,
                   "pin_time_to_live" :  5,
                   "pin_length" : 6,
                   "pin_placeholder" : "< 1234 >",
                   "message_text" : "Your pin is < 1234 >",
                   "pin_type" : "NUMERIC"
                };
    var options = {
      'method': 'POST',
      'url': 'https://termii.com/api/sms/otp/send',
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
conn = http.client.HTTPSConnection("https://termii.com/api/sms/otp/send")
headers = {'Content-Type': 'application/json'}
        
data = {
        "api_key" : "Your API key",
        "message_type" : "NUMERIC",
        "to" : "eg. 2348109077743",
        "from" : "Aproved Sender or Device IDs",
        "channel" : "dnd",
        "pin_attempts" : 10,
        "pin_time_to_live" :  5,
        "pin_length" : 6,
        "pin_placeholder" : "< 1234 >",
        "message_text" : "Your pin is < 1234 >",
        "pin_type" : "NUMERIC"
        }
conn.request("POST", "", data, headers)        
response = conn.getresponse()
print(response.read().decode())
   ```
  </code-block>

<code-block label="C#" >

  ```bash
RestClient restClient = new RestClient("https://termii.com/api/sms/otp/send");
    
    //Creating Json object
    JObject objectBody = new JObject();
    objectBody.Add("api_key","Your API Key");
    objectBody.Add("message_type","NUMERIC");
    objectBody.Add("to","+2348109077743");
    objectBody.Add("channel","dnd");
    objectBody.Add("pin_attempts", 3);
    objectBody.Add("pin_time_to_live", 0);
    objectBody.Add("pin_length", 6);
    objectBody.Add("pin_placeholder", "< 1234 >");
    objectBody.Add("message_text", "Your pin is < 1234 >");
    objectBody.Add("pin_type","NUMERIC");
 
    
    
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
  HttpResponse<String> response = Unirest.post("https://termii.com/api/sms/otp/send")
    .header("Content-Type", "application/json")
    .body("{\r\n  \"api_key\" : \"Your API key\",\r\n \"message_type\" : \"NUMERIC\",\r\n  \"to\" : \"eg. 2348109077743\",\r\n       \"from\" : \"Aproved Sender or Device IDs\",\r\n       \"channel\" : \"dnd\",\r\n       \"pin_attempts\" : 10,\r\n       \"pin_time_to_live\" :  5,\r\n       \"pin_length\" : 6,\r\n       \"pin_placeholder\" : \"< 1234 >\",\r\n       \"message_text\" : \"Your pin is < 1234 >\",\r\n       \"pin_type\" : \"NUMERIC\"\r\n   }\r\n      ")
    .asString();


  ```
  </code-block>
<code-block label="PHP" >

  ```bash
$curl = curl_init();
$data = array( "api_key" => "Your API key",
               "message_type" => "NUMERIC",
               "to" => "eg. 2348109077743",
               "from" => "Aproved Sender or Device IDs",
               "channel" => "dnd",
               "pin_attempts" => 10,
               "pin_time_to_live" =>  5,
               "pin_length" => 6,
               "pin_placeholder" => "< 1234 >",
               "message_text" => "Your pin is < 1234 >",
               "pin_type" => "NUMERIC");
 
 $post_data = json_encode($data);
 
 curl_setopt_array($curl, array(
   CURLOPT_URL => "https://termii.com/api/sms/otp/send",
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
    "pinId": "29ae67c2-c8e1-4165-8a51-8d3d7c298081",
    "to": "2348109077743",
    "smsStatus": "Message Sent"
  }
```

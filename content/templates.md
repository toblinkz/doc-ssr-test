---
title: Templates
description: 'Termii  Templates'
position: 8
category: Switch
---

Templates is a feature that helps businesses set a template for the one-time-passwords (pins) sent to their customers via whatsapp or sms.

## Device Template

<b>Endpoint : </b>
`
https://termii.com/api/device/send/template
`<br><br> <b>Request Type : </b>**`POST`**

Options | Required | Description |
--- | --- | ---|
phone_number | yes |*string*<br> The destination phone number. Phone number must be in the international format (`Example: 23490126727`).  | 
device_id | yes |*string*<br>Represents the Device ID for Whatsapp. It can be Alphanumeric. It should be passed when the message is sent via whatsapp (It can be found on the manage device page on your Termii dashboard) | 
template_id | yes | *string*<br>  The ID of the template used| 
api_key | yes | *string*<br> Your API key (It can be found on your Termii dashboard). |  
data | yes |*object*<br> Represents an object of `key: value` pair. The keys for the data object can be found on the device subscription page on your dashboard. (`Example: {"product_name": "Termii",  "otp" : 120435, }`)| 


<code-group>
   <code-block label="JSON" active>

  ```bash
   {
       "phone_number": "2347880234567",
       "device_id": "talert",
       "template_id": "1493-csdn3-ns34w-sd3434-dfdf",
       "api_key": "plain",
       "data": {
           "product_name": "Termii",
           "otp" : 120435,
           "expiry_time": "10 minutes"
       } 
   }
  ```

  </code-block>
  <code-block label="JavaScript">

  ```bash
 var data = {
              "phone_number": "2347880234567",
              "device_id": "talert",
              "template_id": "1493-csdn3-ns34w-sd3434-dfdf",
              "api_key": "plain",
             "data": {
                 "product_name": "Termii",
                 "otp" : 120435,
                 "expiry_time": "10 minutes"
             } 
            };

var data = JSON.stringify(data);

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", " https://termii.com/api/device/send/template");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.send(data);
  ```

  </code-block>
 <code-block label="NodeJs" >

  ```bash
 var request = require('request');
var data = {
               "phone_number": "2347880234567",
               "device_id": "talert",
               "template_id": "1493-csdn3-ns34w-sd3434-dfdf",
               "api_key": "plain",
               "data": {
                   "product_name": "Termii",
                   "otp" : 120435,
                   "expiry_time": "10 minutes"
               }
            };
var options = {
  'method': 'POST',
  'url': ' https://termii.com/api/device/send/template',
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
url = "https://termii.com/api/device/send/template"
payload = {
            "phone_number": "2347880234567",
             "device_id": "talert",
             "template_id": "1493-csdn3-ns34w-sd3434-dfdf",
             "api_key": "plain",
             "data": {
                 "product_name": "Termii",
                 "otp" : 120435,
                 "expiry_time": "10 minutes"
             }
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
var client = new RestClient("https://termii.com/api/device/send/template");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
request.AddHeader("Content-Type", "application/json");
request.AddParameter("application/json", " {\r\n \"phone_number\": \"2347880234567\",\r\n  \"device_id\": \"talert\",\r\n \"template_id\": \"1493-csdn3-ns34w-sd3434-dfdf\",\r\n  \"api_key\": \"plain\",\r\n  \"data\": {\r\n   \"product_name\": \"Termii\",\r\n   \"otp\" : 120435,\r\n  \"expiry_time\": \"10 minutes\"\r\n     } \r\n   }",  
                    ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
  ```
  </code-block>
<code-block label="Java" >

  ```bash
Unirest.setTimeouts(0, 0);
HttpResponse<String> response = Unirest.POST(" https://termii.com/api/device/send/template")
  .header("Content-Type", "application/json")
  .body(" {\r\n \"phone_number\": \"2347880234567\",\r\n \"device_id\": \"talert\",\r\n \"template_id\": \"1493-csdn3-ns34w-sd3434-dfdf\",\r\n \"api_key\": \"plain\",\r\n \"data\": {\r\n \"product_name\": \"Termii\",\r\n \"otp\" : 120435,\r\n \"expiry_time\": \"10 minutes\"\r\n } \r\n   }")
  .asString();

  ```
  </code-block>
<code-block label="PHP" >

  ```bash
 $curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://termii.com/api/device/send/template',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'GET',
  CURLOPT_POSTFIELDS =>' {
       "phone_number": "2347880234567",
       "device_id": "talert",
       "template_id": "1493-csdn3-ns34w-sd3434-dfdf",
       "api_key": "plain",
       "data": {
           "product_name": "Termii",
           "otp" : 120435,
           "expiry_time": "10 minutes"
       } 
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
   [
      {
          "code": "ok",
          "message_id": "2255298515609943356",
          "message": "Successfully Sent",
          "balance": "unlimited",
          "user": "Termii Inc."
      }
   ]
          
```

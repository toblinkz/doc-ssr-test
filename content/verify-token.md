---
title: Verify Token
description: 'Termii provides RESTful API which is based on simple HTTP POST/GET requests. Our API lets you create, send, and verify messages, as well as, track your delivery statistics.'
position: 15
category: Token
---

Verify token API, checks tokens sent to customers and returns a response confirming the status of the token. A token can either be confirmed as verified or expired based on the timer set for the token.


<b>Endpoint :</b>
`
https://termii.com/api/sms/otp/verify
`<br> <br> <b>Request Type : </b>**`POST`**

Options | Required | Description |
--- | --- | --- |
api_key | yes |*string*<br> Your API key (It can be found on your <a href="https://accounts.termii.com/#/" target="_blank" style="text-decoration:underline; cursor:pointer">Termii dashboard</a>). | 
pin_id | yes |*string*<br> ID of the PIN sent (Example: `"c8dcd048-5e7f-4347-8c89-4470c3af0b"`)  | 
pin | yes | *string*<br> The PIN code (Example: `"195558"`)| 


<alert>This API requires a numeric or alphanumeric token to have been sent out to a customer. 
It collects this token when inputed by the user and confirms its status.</alert>

<code-group>
   <code-block label="JSON" active>

  ```bash
   {
      "api_key": "Your API key",
      "pin_id": "c8dcd048-5e7f-4347-8c89-4470c3af0b",
      "pin": "195558"
   }
  ```

  </code-block>
  <code-block label="JavaScript">

  ```bash
 var data = {
               "api_key": "Your API key",
               "pin_id": "c8dcd048-5e7f-4347-8c89-4470c3af0b",
               "pin": "195558"
           };

var data = JSON.stringify(data);

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://termii.com/api/sms/otp/verify");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.send(data);
   

  ```

  </code-block>
 <code-block label="NodeJs" >

  ```bash
var request = require('request');
    var data = {
                   "api_key": "Your API key",
                   "pin_id": "c8dcd048-5e7f-4347-8c89-4470c3af0b",
                   "pin": "195558"
               };
    var options = {
      'method': 'POST',
      'url': 'https://termii.com/api/sms/otp/verify',
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
url = "https://termii.com/api/sms/otp/verify"
payload = {
            "api_key": "Your API Key",
            "pin_id": "NUMERIC",
            "pin": "2348109477743",
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
RestClient restClient = new RestClient("https://termii.com/api/sms/otp/verify");

//Creating Json object
JObject objectBody = new JObject();
objectBody.Add("api_key","Your API Key");
objectBody.Add("pin_id","c8dcd048-5e7f-4347-8c89-4470c3af0b");
objectBody.Add("pin","195558");

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
HttpResponse<String> response = Unirest.post("https://termii.com/api/sms/otp/verify")
  .header("Content-Type", "application/json")
  .body("{\r\n  \"api_key\": \"Your API key\",\r\n    \"pin_id\": \"c8dcd048-5e7f-4347-8c89-4470c3af0b\",\r\n    \"pin\": \"195558\"\r\n\t}")
  .asString();



  ```
  </code-block>
<code-block label="PHP" >

  ```bash
$curl = curl_init();
$data = array ( "api_key" => "Your API key",
               "pin_id" => "NUMERIC",
               "pin" => "eg. 2348109077743",
              );
 
 $post_data = json_encode($data);
 
 curl_setopt_array($curl, array(
   CURLOPT_URL => "https://termii.com/api/sms/otp/verify",
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
     "pinId": "c8dcd048-5e7f-4347-8c89-4470c3af0b",
     "verified": "True",
     "msisdn": "2348109077743"
   }
```


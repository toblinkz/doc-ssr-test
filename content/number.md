---
title: Number
description: 'Termii Number'
position: 9
category: Switch
---

This API allows businesses send messages to customers using Termii's auto-generated messaging numbers that adapt to customers location.

## Send Message
<b>Endpoint :</b>
`
https://termii.com/api/sms/number/send
`<br> <br> <b>Request Type : </b>**`POST`**


Options | Required | Description |
--- | --- | --- |
api_key | yes | *string*<br> Your API key (It can be found on your Termii dashboard). | 
to | yes |*string*<br> Represents the destination phone number. Phone number must be in the international format (`Example: 2349012672711`)  | 
sms | yes |*string*<br>Text of a message that would be sent to the destination phone number  | 

<code-group>
   <code-block label="JSON" active>

  ```bash
 {
        "to": "2347089509111",
        "sms": "Hi there, testing Termii",
        "api_key": "Your API Key"
    }
  ```

  </code-block>
  <code-block label="JavaScript">

  ```bash
  var data = {
            "to": "2347449229657",
            "sms":"Hi there, testing Termii",
            "api_key":"Your API key",
            };

var data = JSON.stringify(data);

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://termii.com/api/sms/number/send");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.send(data);


  ```

  </code-block>
 <code-block label="NodeJs" >

  ```bash
 var request = require('request');
var data = {
            "to":"2347044501257",
            "sms":"Hi there, testing Termii",
            "api_key":"Your API key",
            };
var options = {
  'method': 'POST',
  'url': 'https://termii.com/api/sms/number/send',
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
 <code-block label="Python">

  ```bash
 import http.client
import json
conn = http.client.HTTPSConnection("https://termii.com/api/sms/number/send")
headers = {'Content-Type': 'application/json'}
   
data = {
         "to": "2347089229611",
         "sms": "Hi there, testing Termii",
         "api_key": "Your API Key"
        }   
conn.request("POST", "", data, headers)
response = conn.getresponse()
print(response.read().decode())

  ```
  </code-block>

<code-block label="C#" >

  ```bash
RestClient restClient = new RestClient("https://termii.com/api/sms/number/send");

//Creating Json object
JObject objectBody = new JObject();
objectBody.Add("to","+2347033511657");
objectBody.Add("sms","Hi there, testing Termii");
objectBody.Add("api_key","Your API Key");

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
HttpResponse<String> response = Unirest.post(" https://termii.com/api/sms/number/send")
  .header("Content-Type", "application/json")
  .body("{\r\n \"to\": \"2347089239667\",\r\n  \"sms\": \"Hi there, testing Termii \",\r\n   \"api_key\": \"Your API Key\"\r\n    }")
  .asString();
  ```
  </code-block>
<code-block label="PHP" >

  ```bash
$curl = curl_init();
$data = array("to" => "2347230545644","sms"=>"Hi there, testing Termii","api_key" => "Your API key",  );

$post_data = json_encode($data);

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://termii.com/api/sms/number/send",
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
     "code": "ok",
     "message_id": "174749423",
     "message": "Successfully Sent",
     "balance": 8,
     "user": "Seun Junior"
   }
```

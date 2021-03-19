---
title: Sender ID
description: 'Termii Sender Id'
position: 4
category: Switch
---
A Sender ID is the name or number that identifies the sender of an SMS message.
This API allows businesses retrieve the status of all registered sender ID and request registration of sender ID through GET and POST request type respectively.

### Get Sender ID
<b>Endpoint : </b>
`
https://termii.com/api/sender-id?api_key=api-key
`<br> <br> <b>Request Type : </b>**`GET`**


#### Response:
```
  {
  current_page: 1,
  data: [
      {
          sender_id: "Acme Corp",
          status: "unblock",
          company: "Acme Company",
          usecase: "Hello Musa, your registration with Acme has been approved, your confirmation code is 1234",
          created_at: "2020-05-06 04:42:36"
      },
      {
          sender_id: "Hooli",
          status: "unblock",
          company: "Hooli",
          usecase: "Hello Galvin, Your Hooli security code is now ready",
          created_at: "2020-05-05 15:23:49"
      }
  ]
  }
```
### Request Sender ID

<b>Endpoint : </b>
`
https://termii.com/api/sender-id/request
`<br> <br> <b>Request Type : </b><span class="lio" style="color:red !important"> <code>POST</code></span>


Options | Description |
--- | --- |
api_key* |*string*<br> Your API key (It can be found on your Termii dashboard).  | 
sender_id* |*string*<br>Represents the ID of the sender which can be alphanumeric or numeric. Alphanumeric sender ID length should be between 3 and 11 characters (Example:`CompanyName`)  | 
usecase* | *string*<br>A sample of the type of message sent. | 
company* |*string*<br> Represents the name of the company with the sender ID.  | 

<code-group>
   <code-block label="JSON" active>

  ```bash
 {
        "api_key":"Your API key",
        "sender_id": "Acme",
        "usecase": "Your OTP code is zxsds",
        "company": "Acme Corp"
    }
  ```

  </code-block>
  <code-block label="JavaScript">

  ```bash
  var data = {
                   "api_key":"Your API key",
                   "sender_id": "Acme",
                   "usecase": "Your OTP code is zxsds",
                   "company": "Acme Corp"
            };

var data = JSON.stringify(data);

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://termii.com/api/sender-id/request");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.send(data);
  ```

  </code-block>
 <code-block label="NodeJs" >

  ```bash
 var request = require('request');
var data = {
            "api_key":"Your API key",
            "sender_id": "Acme",
            "usecase": "Your OTP code is zxsds",
            "company": "Acme Corp"
            };
var options = {
  'method': 'POST',
  'url': 'https://termii.com/api/sender-id/request',
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
conn = http.client.HTTPSConnection("https://termii.com/api/sender-id/request")
headers = {'Content-Type': 'application/json'}
    
data = {
         "api_key":"Your API key",
         "sender_id": "Acme",
         "usecase": "Your OTP code is zxsds",
         "company": "Acme Corp"
          }
conn.request("POST", "", data, headers)
response = conn.getresponse()
print(response.read().decode())
  ```
  </code-block>

<code-block label="C#" >

  ```bash
RestClient restClient = new RestClient("https://termii.com/api/sender-id/request");

//Creating Json object
JObject objectBody = new JObject();
objectBody.Add("api_key","Your API Key");
objectBody.Add("sender_id","Acme");
objectBody.Add("usecase","Acme Corp");


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
 HttpResponse<String> response = Unirest.post("https://termii.com/api/sender-id/request")
   .header("Content-Type", "application/json")
   .body("   {\r\n \"api_key\":\"Your API key\",\r\n  \"sender_id\": \"Acme\",\r\n  \"usecase\": \"Your OTP code is zxsds\",\r\n   \"company\": \"Acme Corp\"\r\n    }")
   .asString();
  ```
  </code-block>
<code-block label="PHP" >

  ```bash
$curl = curl_init();
$data = array("api_key" => "Your API key", "sender_id" => "Acme", 
"usecase" => "Your OTP code is zxsdc", "company" => "Acme Corp" );

$post_data = json_encode($data);

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://termii.com/api/sender-id/request",
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
     "message": "Sender Id requested. You will be contacted by your account manager."       
   }
```





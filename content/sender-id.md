---
title: Sender ID API
description: 'Termii Sender Id'
position: 5
category: Switch
---
A Sender ID is the name or number that identifies the sender of an SMS message.
This API allows businesses retrieve the status of all registered sender ID and request registration of sender ID through GET and POST request type respectively.

## Fetch Sender ID
<b>Endpoint : </b>
`
https://termii.com/api/sender-id?api_key=api-key
`<br> <br> <b>Request Type : </b>**`GET`**


#### Sample Response:
```
  {
      "current_page": 1,
      "data": [
          {
              "sender_id": "ACME Key",
              "status": "unblock",
              "company": ACME,
              "usecase": null,
              "country": null,
              "created_at": "2021-03-29 16:51:53"
          },
          {
              "sender_id": "ACME Alert",
              "status": "unblock",
              "company": ACME,
              "usecase": null,
              "country": null,
              "created_at": "2021-03-29 16:51:09"
          },
          {
              "sender_id": "ACME Wall",
              "status": "unblock",
              "company": ACME,
              "usecase": null,
              "country": null,
              "created_at": "2021-03-29 16:50:38"
          },
          {
              "sender_id": "Hooli",
              "status": "unblock",
              "company": Hooli,
              "usecase": null,
              "country": null,
              "created_at": "2021-03-26 13:19:16"
          },
          {
              "sender_id": "Google",
              "status": "unblock",
              "company": null,
              "usecase": null,
              "country": null,
              "created_at": "2021-01-19 17:41:30"
          },
          {
              "sender_id": "Facebook",
              "status": "unblock",
              "company": null,
              "usecase": null,
              "country": null,
              "created_at": "2021-01-19 17:41:14"
          },
         
      ],
      "first_page_url": "https://termii.com/api/sender-id?page=1",
      "from": 1,
      "last_page": 47,
      "last_page_url": "https://termii.com/api/sender-id?page=47",
      "next_page_url": "https://termii.com/api/sender-id?page=2",
      "path": "https://termii.com/api/sender-id",
      "per_page": 10,
      "prev_page_url": null,
      "to": 15,
      "total": 704
  }
```


## Request Sender ID

<b>Endpoint : </b>
`
https://termii.com/api/sender-id/request
`<br> <br> <b>Request Type : </b><span class="lio" style="color:red !important"> <code>POST</code></span>


Options |Required | Description |
--- | --- | --- |
api_key | yes |*string*<br> Your API key (It can be found on your <a href="https://accounts.termii.com/#/" target="_blank" style="text-decoration:underline; cursor:pointer">Termii dashboard</a>).  | 
sender_id | yes |*string*<br>Represents the ID of the sender which can be alphanumeric or numeric. Alphanumeric sender ID length should be between 3 and 11 characters (Example:`CompanyName`)  | 
usecase | yes | *string*<br>A sample of the type of message sent. | 
company | yes | *string*<br> Represents the name of the company with the sender ID.  | 

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
  var data = {  "api_key":"Your API key",
                "sender_id": "Acme",
                "usecase": "Your OTP code is zxsds",
                "company": "Acme Corp" };

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
var data = {"api_key":"Your API key",
            "sender_id": "Acme",
            "usecase": "Your OTP code is zxsds",
            "company": "Acme Corp"};

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
 
import requests
url = "https://termii.com/api/sender-id/request"
payload = {
           "api_key":"Your API key",
           "sender_id": "Acme",
           "usecase": "Your OTP code is zxsds",
           "company": "Acme Corp"
         }
headers = {
  'Content-Type': 'application/json',
}
response = requests.request("GET", url, headers=headers, json=payload)
print(response.text)
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
	"message": "Sender Id requested. You will be  contacted by your account manager."
  
  
}
```





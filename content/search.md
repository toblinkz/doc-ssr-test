---
title: Search
description: 'Termii provides RESTful API which is based on simple HTTP POST/GET requests. Our API lets you create, send, and verify messages, as well as, track your delivery statistics.'
position: 16
category: Insights
---

The search API allows businesses verify phone numbers and automatically detect their status as well as current network. It also tells if the number has activated the do-not-disturb settings.

<b>Endpoint : </b>
`
https://termii.com/api/check/dnd?api_key=my_api_key&phone_number=phone_number
`<br> <br> <b>Request Type : </b> **`GET`**

Options | Required | Description |
--- | --- | --- |
api_key | yes |*string*<br> Your API key (It can be found on your Termii dashboard). | 
phone_number | yes |*string*<br>Represents the phone number to be verified. Phone number must be in the international format (`Example: 23490126727`)   | 


<alert>DND represents Do-Not-Distrub routes and messages sent to phone numbers with DND settings activated are blocked by telcom providers. 
To ensure your messages deliver, use the dnd channel.</alert>

<code-group>
   <code-block label="JSON" active>

  ```bash
    {
      "api_key": "Your API key",
      "phone_number": "2348753243651"
    }
  ```

  </code-block>
  <code-block label="JavaScript">

  ```bash
 var data = {
                "api_key": "Your API key",
                "phone_number": "234875324365"
            };

var data = JSON.stringify(data);

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://termii.com/api/check/dnd");
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
                  "phone_number": "2348753243651"
                };
    var options = {
      'method': 'GET',
      'url': 'https://termii.com/api/check/dnd',
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
url = "https://termii.com/api/check/dnd"
payload = {
           "api_key": "Your API key",
           "phone_number": "2348753243651"
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
RestClient restClient = new RestClient("https://termii.com/api/check/dnd");

//Creating Json object
JObject objectBody = new JObject();
objectBody.Add("api_key","Your API Key");
objectBody.Add("phone_number","+2348753243651");


RestRequest restRequest = new RestRequest(Method.GET);

restRequest.AddHeader("Content-Type", "application/json");
restRequest.AddParameter("application/json", objectBody,  ParameterType.RequestBody);
IRestResponse restResponse = restClient.Execute(restRequest);
Console.WriteLine(restResponse.Content);
   ```
  </code-block>
<code-block label="Java" >

  ```bash
 Unirest.setTimeouts(0, 0);
HttpResponse<String> response = Unirest.get("https://termii.com/api/check/dnd")
  .header("Content-Type", "application/json")
  .body("{\r\n \"api_key\": \"Your API Key\",\r\n \"phone_number\": \"2348753243651\"\r\n }")
  .asString();

  ```
  </code-block>
<code-block label="PHP" >

  ```bash
$curl = curl_init();
$data = array ( "api_key" => "Your API key","phone_number" => "+2348753243651",);
 
 $post_data = json_encode($data);
 
 curl_setopt_array($curl, array(
   CURLOPT_URL => "https://termii.com/api/check/dnd",
   CURLOPT_RETURNTRANSFER => true,
   CURLOPT_ENCODING => "",
   CURLOPT_MAXREDIRS => 10,
   CURLOPT_TIMEOUT => 0,
   CURLOPT_FOLLOWLOCATION => true,
   CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
   CURLOPT_CUSTOMREQUEST => "GET",
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
      "number": "2347089509657",
      "status": "DND blacklisted",
      "network": "Airtel Nigeria",
      "network_code": "62120"
    }   
```

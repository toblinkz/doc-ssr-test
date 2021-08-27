---
title: Status
description: 'Termii provides RESTful API which is based on simple HTTP POST/GET requests. Our API lets you create, send, and verify messages, as well as, track your delivery statistics.'
position: 21
category: Insights
---

The status API allows businesses to detect if a number is fake or has ported to a new network.

<b>Endpoint : </b>
`
https://termii.com/api/insight/number/query?phone_number=phone_number&api_key=api_key&country_code=NG
`<br> <br> <b>Request Type : </b> **`GET`**

Options | Required | Description |
--- | --- |  --- |
api_key | yes |*string*<br> Your API key (It can be found on your <a href="https://accounts.termii.com/#/" target="_blank" style="text-decoration:underline; cursor:pointer">Termii dashboard</a>). | 
phone_number| yes |*string*<br>Represents the phone number to be verified. Phone number must be in the international format (`Example: 2348753243651`)   | 
country_code| yes |*string*<br>Represents short alphabetic codes developed to represent countries (`Example: NG `) .


<code-group>
   <code-block label="JSON" active>

  ```bash
     {
      "api_key": "Your API key",
      "phone_number": "2348753243651",
      "country_code": "NG"
    }
  ```

  </code-block>
  <code-block label="JavaScript">

  ```bash
 var data = {
                "api_key": "Your API key",
                "phone_number": "2348753243651",
                "country_code": "NG"
            };

var data = JSON.stringify(data);

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", " https://termii.com/api/insight/number/query");
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
                  "phone_number": "2348753243651",
                  "country_code": "NG"
                };
    var options = {
      'method': 'GET',
      'url': ' https://termii.com/api/insight/number/query',
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
url = "https://termii.com/api/insight/number/query"
payload = {
           "api_key": "Your API key",
           "phone_number": "2348753243651",
           "country_code": "NG"
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
RestClient restClient = new RestClient(" https://termii.com/api/insight/number/query");

//Creating Json object
JObject objectBody = new JObject();
objectBody.Add("api_key","Your API Key");
objectBody.Add("phone_number","+2348753243651");
objectBody.Add("country_code","NG");

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
HttpResponse<String> response = Unirest.get(" https://termii.com/api/insight/number/query")
  .header("Content-Type", "application/json")
  .body("{\r\n \"api_key\": \"Your API Key\",\r\n \"phone_number\": \"2348753243651\"\r\n \"country_code\": \"NG"\"\r\n }")
  .asString();
  ```
  </code-block>
<code-block label="PHP" >

  ```bash
$curl = curl_init();
$data = array ( "api_key" => "Your API key","phone_number" => "+2348753243651", "country_code" => "NG");
 
 $post_data = json_encode($data);
 
 curl_setopt_array($curl, array(
   CURLOPT_URL => " https://termii.com/api/insight/number/query",
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
       "result": [
           {
               "routeDetail": {
                   "number": "2348753243651",
                   "ported": 0
               },
               "countryDetail": {
                   "countryCode": "234",
                   "mobileCountryCode": "621",
                   "iso": "NG"
               },
               "operatorDetail": {
                   "operatorCode": "ANG",
                   "operatorName": "Airtel Nigeria",
                   "mobileNumberCode": "20",
                   "mobileRoutingCode": "41",
                   "carrierIdentificationCode": "23433",
                   "lineType": "Mobile"
               },
               "status": 200
           }
       ]
   }
```


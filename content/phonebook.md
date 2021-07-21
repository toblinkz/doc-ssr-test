---
title: Phonebooks
description: 'Termii  Phonebooks'
position: 9
category: Switch
---

Phonebooks API allows you to manage phonebooks that are identified by a unique ID. You can create, view, update or delete phonebooks.  The API accepts JSON request payload and returns JSON encoded responses, and uses standard HTTP response codes.

### Fetch Phonebooks

<b>Endpoint : </b>
`
https://termii.com/api/phonebooks?api_key=YourAPIKey
`<br><br> <b>Request Type : </b> **`GET`**


#### Response

```JSON
{
    "data": [
        {
            "id": "f9c28de9-ab5a-4513-9c9f-338be8e1c390",
            "name": "labore",
            "total_number_of_contacts": 0,
            "date_created": "2021-07-01 14:44:42",
            "last_updated": "2021-07-01 14:44:42"
        },
        {
            "id": "0d974867-7fc8-4dd9-b069-6ca33dc12930",
            "name": "numquam",
            "total_number_of_contacts": 0,
            "date_created": "2021-07-01 14:44:33",
            "last_updated": "2021-07-01 14:44:33"
        },
        {
            "id": "b8bd4d35-1dba-4ffb-9fd6-8ecd672801fd",
            "name": "totam",
            "total_number_of_contacts": 0,
            "date_created": "2021-07-01 14:44:16",
            "last_updated": "2021-07-01 14:44:16"
        },
        {
            "id": "2d9f4a02-85b8-45e5-9f5b-30f93ef472e2",
            "name": "adeyinka",
            "total_number_of_contacts": 0,
            "date_created": "2021-06-29 12:23:42",
            "last_updated": "2021-06-29 12:23:42"
        },
        {
            "id": "779c2bbe-130b-4ea8-a30e-1e81f7e4d4d9",
            "name": "testerboos",
            "total_number_of_contacts": 0,
            "date_created": "2021-06-28 15:50:06",
            "last_updated": "2021-06-28 15:50:06"
        },
        {
            "id": "04c3ebcc-3a7e-485a-88c1-68e731386f77",
            "name": "omnis",
            "total_number_of_contacts": 22,
            "date_created": "2021-06-25 15:11:56",
            "last_updated": "2021-06-30 12:02:23"
        },
        {
            "id": "145d23bd-daef-4403-8236-73f648c63387",
            "name": "bosun",
            "total_number_of_contacts": 0,
            "date_created": "2021-06-25 12:59:10",
            "last_updated": "2021-06-25 12:59:10"
        },
        {
            "id": "67503708-0725-49eb-9bc6-feee9faea58a",
            "name": "test",
            "total_number_of_contacts": 776,
            "date_created": "2021-06-25 12:58:45",
            "last_updated": "2021-07-01 15:39:35"
        }
    ],
    "links": {
        "first": "https://termii.com/api/phonebooks?page=1",
        "last": "https://termii.com/api/phonebooks?page=1",
        "prev": null,
        "next": null
    },
    "meta": {
        "current_page": 1,
        "from": 1,
        "last_page": 1,
        "path": "https://termii.com/api/phonebooks",
        "per_page": 15,
        "to": 8,
        "total": 8
    }
}
```

### Create  a Phonebook
<b>Endpoint :</b>
`
https://termii.com/api/phonebooks
`<br> <br> <b>Request Type : </b>**`POST`**


Options | Required | Description |
--- | --- | --- |
api_key | yes | *string*<br> Your API key (It can be found on your <a href="https://accounts.termii.com/#/" target="_blank" style="text-decoration:underline; cursor:pointer">Termii dashboard</a>). | 
phonebook_name | yes |*string*<br> The name of the phonebook | 
description | no |*string*<br> A description of the contacts stored in the phonebook | 

<code-group>
   <code-block label="JSON" active>

  ```bash
   {
      "api_key": "Your API Key",
      "phonebook_name":"Phone test",
      "description":"Phonebook for test"
  }
  ```

  </code-block>
  <code-block label="JavaScript">

  ```bash
  var data = {
            "api_key": "Your API Key",
            "phonebook_name":"Phone test",
            "description":"Phonebook for test"
            };

var data = JSON.stringify(data);

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "http://termii.com/api/phonebooks");
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
            "phonebook_name":"Phone test",
            "description":"Phonebook for test"
            };
var options = {
  'method': 'POST',
  'url': 'http://termii.com/api/phonebooks',
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
url = "https://termii.com/api/phonebooks"
payload = {
              "api_key": "Your API Key",
              "phonebook_name":"Phone test",
              "description":"Phonebook for test"
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
RestClient restClient = new RestClient("http://termii.com/api/phonebooks");

//Creating Json object
JObject objectBody = new JObject();
objectBody.Add("api_key","Your API Key");
objectBody.Add("phone_book", "Phone test");
objectBody.Add( "description", "Phonebook for test");

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
HttpResponse<String> response = Unirest.post("http://termii.com/api/phonebooks")
  .header("Content-Type", "application/json")
  .body("{\r\n \"api_key\": \"Your API Key\",\r\n  \"phone_book\": \"Phone Test \",\r\n   \"description\": \"Phonebook for test\"\r\n    }")
  .asString();
  ```
  </code-block>
<code-block label="PHP" >

  ```bash
$curl = curl_init();
$data = array("api_key" => "Your API key","phone_book" => "Phone Test","description"=>"Phonebook for test" );

$post_data = json_encode($data);

curl_setopt_array($curl, array(
  CURLOPT_URL => "http://termii.com/api/phonebooks",
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
  
      "message": "Phonebook added successfully"
  
  }
```

### Update Phonebook
<b>Endpoint :</b>
`
https://termii.com/api/phonebooks/{phonebook_id}
`<br> <br> <b>Request Type : </b>**`PATCH`**


Options | Required | Description |
--- | --- | --- |
api_key | yes | *string*<br> Your API key (It can be found on your <a href="https://accounts.termii.com/#/" target="_blank" style="text-decoration:underline; cursor:pointer">Termii dashboard</a>). | 
phonebook_name | yes |*string*<br> The name of the phonebook  | 

<code-group>
   <code-block label="JSON" active>

  ```bash
   {
      "api_key": "Your API Key",
      "phonebook_name":"Phone test",
      "description":"Phonebook for test"
  }
  ```

  </code-block>
  <code-block label="JavaScript">

  ```bash
  var data = {
            "api_key": "Your API Key",
            "phonebook_name":"Phone test",
            "description":"Phonebook for test"
            };

var data = JSON.stringify(data);

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("PATCH", "http://termii.com/api/phonebooks/{phonebook_id}");
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
            "phonebook_name":"Phone test",
            "description":"Phonebook for test"
            };
var options = {
  'method': 'PATCH',
  'url': 'http://termii.com/api/phonebooks/{phonebook_id}',
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
url = "https://termii.com/api/phonebooks/{phonebook_id}"
payload = {
              "api_key": "Your API Key",
              "phonebook_name":"Phone test",
              "description":"Phonebook for test"
         }
headers = {
  'Content-Type': 'application/json',
}
response = requests.request("PATCH", url, headers=headers, json=payload)
print(response.text)
  ```
  </code-block>

<code-block label="C#" >

  ```bash
RestClient restClient = new RestClient("http://termii.com/api/phonebooks/{phonebook_id}");

//Creating Json object
JObject objectBody = new JObject();
objectBody.Add("api_key","Your API Key");
objectBody.Add("phone_book", "Phone test");
objectBody.Add( "description", "Phonebook for test");

RestRequest restRequest = new RestRequest(Method.PATCH);

restRequest.AddHeader("Content-Type", "application/json");
restRequest.AddParameter("application/json", objectBody,  ParameterType.RequestBody);
IRestResponse restResponse = restClient.Execute(restRequest);
Console.WriteLine(restResponse.Content);

  ```

  </code-block>
<code-block label="Java" >

  ```bash
Unirest.setTimeouts(0, 0);
HttpResponse<String> response = Unirest.patch("http://termii.com/api/phonebooks/{phonebook_id}")
  .header("Content-Type", "application/json")
  .body("{\r\n \"api_key\": \"Your API Key\",\r\n  \"phone_book\": \"Phone Test \",\r\n   \"description\": \"Phonebook for test\"\r\n    }")
  .asString();
  ```
  </code-block>
<code-block label="PHP" >

  ```bash
$curl = curl_init();
$data = array("api_key" => "Your API key", "phone_book" => "Phone Test", "description"=>"Phonebook for test" );

$post_data = json_encode($data);

curl_setopt_array($curl, array(
  CURLOPT_URL => "http://termii.com/api/phonebooks/{phonebook_id}",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "PATCH",
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

        "message": "Phonebook Updated Successfully"
  
  }
```


### Delete phonebook
<b>Endpoint :</b>
`
https://termii.com/api/phonebooks/{phonebook_id}?api_key=YourAPIKey
`<br> <br> <b>Request Type : </b>**`DELETE`**



#### Response

```JSON
   {

        "message": "Phonebook deleted successfully"
  
  }
```





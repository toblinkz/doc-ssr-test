---
title: Contacts
description: 'Termii  Phonebook'
position: 10
category: Switch
---

Contacts API allows you manage (i.e. edit, update, & delete) contacts in your phonebook. 

### Fetch contacts by phonebook ID

<b>Endpoint : </b>
`
https://api.ng.termii.com/api/phonebooks/{phonebook_id}/contacts
`<br><br> <b>Request Type : </b> **`GET`**


#### Response

```JSON
{
    "data": [
        {
            "id": 3,
            "pid": 4,
            "phone_number": "2347062609181",
            "email_address": null,
            "message": null,
            "company": null,
            "first_name": null,
            "last_name": null,
            "create_at": "2021-06-30 12:02:15",
            "updated_at": "2021-06-30 12:02:15"
        },
        {
            "id": 4,
            "pid": 4,
            "phone_number": "2347051428948",
            "email_address": null,
            "message": null,
            "company": null,
            "first_name": null,
            "last_name": null,
            "create_at": "2021-06-30 12:02:20",
            "updated_at": "2021-06-30 12:02:20"
        },
        {
            "id": 5,
            "pid": 4,
            "phone_number": "2348173343852",
            "email_address": null,
            "message": null,
            "company": null,
            "first_name": null,
            "last_name": null,
            "create_at": "2021-06-30 12:02:20",
            "updated_at": "2021-06-30 12:02:20"
        },
        {
            "id": 6,
            "pid": 4,
            "phone_number": "2348057616056",
            "email_address": null,
            "message": null,
            "company": null,
            "first_name": null,
            "last_name": null,
            "create_at": "2021-06-30 12:02:20",
            "updated_at": "2021-06-30 12:02:20"
        },
        {
            "id": 7,
            "pid": 4,
            "phone_number": "2348060463787",
            "email_address": null,
            "message": null,
            "company": null,
            "first_name": null,
            "last_name": null,
            "create_at": "2021-06-30 12:02:20",
            "updated_at": "2021-06-30 12:02:20"
        }
       
    ],
  
    "links": {
        "first": "https://api.ng.termii.com/api/phonebooks/04c3ebcc-3a7e-485a-88c1-68e731386f77/contacts?page=1",
        "last": "https://api.ng.termii.com/api/phonebooks/04c3ebcc-3a7e-485a-88c1-68e731386f77/contacts?page=1",
        "prev": null,
        "next": null
    },
    "meta": {
        "current_page": 1,
        "from": 1,
        "last_page": 1,
        "path": "https://api.ng.termii.com/api/phonebooks/04c3ebcc-3a7e-485a-88c1-68e731386f77/contacts",
        "per_page": 25,
        "to": 22,
        "total": 22
    }
}
```
### Add single contacts to phonebook
<b>Endpoint :</b>
`
https://api.ng.termii.com/api/phonebooks/{phonebook_id}/contacts
`<br> <br> <b>Request Type : </b>**`POST`**


Options | Required | Description |
--- | --- | --- |
api_key | yes | *string*<br> Your API key (It can be found on your <a href="https://accounts.termii.com/#/" target="_blank" style="text-decoration:underline; cursor:pointer">Termii dashboard</a>). | 
phone_number | yes |*string*<br> Phone number of the contact  | 
country_code | no |*string*<br>Represents short numeric geographical codes developed to represent countries (`Example: 234 `) .  | 
email_address | no |*string*<br> email address of the contact  |
first_name | no |*string*<br> first name of the contact  | 
last_name | no |*string*<br> last name of the contact  | 
company | no |*string*<br> name of the company of the contact  | 


<code-group>
   <code-block label="JSON" active>

  ```bash
   {
      "api_key": "Your API Key",
      "phone_number":"8123696237",
      "email_address":"test@gmail.com",
      "first_name": "test",
      "last_name": "contact",
      "company": "Termii",
      "country_code": "234"
  }
  ```

  </code-block>
  <code-block label="JavaScript">

  ```bash
   var data = {
                "api_key": "Your API Key",
                "phone_number":"8123696237",
                "email_address":"test@gmail.com",
                "first_name": "test",
                "last_name": "contact",
                "company": "Termii",
                "country_code": "234"
            };

var data = JSON.stringify(data);

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://api.ng.termii.com/api/phonebooks/{phonebook_id}/contacts");
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
                  "phone_number":"8123696237",
                  "email_address":"test@gmail.com",
                  "first_name": "test",
                  "last_name": "contact",
                  "company": "Termii",
                  "country_code": "234"
                };
    var options = {
      'method': 'POST',
      'url': 'https://api.ng.termii.com/api/phonebooks/{phonebook_id}/contacts',
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
  url = "https://api.ng.termii.com/api/phonebooks/{phonebook_id}/contacts"
  payload = {
                "api_key": "Your API Key",
                "phone_number":"8123696237",
                "email_address":"test@gmail.com",
                "first_name": "test",
                "last_name": "contact",
                "company": "Termii",
                "country_code": "234"
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
RestClient restClient = new RestClient("https://api.ng.termii.com/api/phonebooks/{phonebook_id}/contacts");

//Creating Json object
JObject objectBody = new JObject();
objectBody.Add("api_key","Your API Key");
objectBody.Add("phone_number", "8123696237");
objectBody.Add("email_address", "test@gmail.com");
objectBody.Add("first_name", "test");
objectBody.Add("last_name", "contact");
objectBody.Add("company", "Termii");
objectBody.Add("country_code", "234");

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
HttpResponse<String> response = Unirest.post("https://api.ng.termii.com/api/phonebooks/{phonebook_id}/contacts")
  .header("Content-Type", "application/json")
  .body(" {\r\n    \"api_key\": \"Your API Key\",\r\n \
    "phone_number\":\"8123696237\",\r\n \
     "email_address\":\"test@gmail.com\",\r\n  \
      "first_name\": \"test\",\r\n  \
       "last_name\": \"contact\",\r\n \
        "company\": \"Termii\",\r\n   \
        "country_code\": \"234\"\r\n}")
  .asString();


  ```
  </code-block>
<code-block label="PHP" >

  ```bash
<?php

<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.ng.termii.com/api/phonebooks/{phonebook_id}/contacts',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>' {
    "api_key": "Your API Key",
    "phone_number":"8123696237",
    "email_address":"test@gmail.com",
    "first_name": "test",
    "last_name": "contact",
    "company": "Termii",
    "country_code": "234"
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
  {
    "data": {
      "id": 3647982,
      "phone_number": "2448123696237",
      "email_address": "test@gmail.com",
      "message": null,
      "company": "Termii",
      "first_name": "test",
      "last_name": "contact",
      "create_at": "2021-10-11 10:15:35",
      "updated_at": "2021-10-11 10:15:35"
    }
}
```
 
### Add multiple contacts to phonebook
<b>Endpoint :</b>
`
https://api.ng.termii.com/api/phonebooks/{phonebook_id}/contacts
`<br> <br> <b>Request Type : </b>**`POST`**


Options | Required | Description |
--- | --- | --- |
api_key | yes | *string*<br> Your API key (It can be found on your <a href="https://accounts.termii.com/#/" target="_blank" style="text-decoration:underline; cursor:pointer">Termii dashboard</a>). | 
contact_file | yes |*string*<br> File containing the list of contacts you want to add to your phonebook.  Supported files include : 'txt',  'xlsx', and 'csv'.  | 
country_code | yes |*string*<br>Represents short numeric geographical codes developed to represent countries (`Example: 234 `) .  | 

<code-group>
   <code-block label="JSON" active>

  ```bash
   {
      "api_key": "Your API Key",
      "contact_file":"test_names.csv",
      "country_code":"234"
  }
  ```

  </code-block>
  <code-block label="JavaScript">

  ```bash
   
  var formdata = new FormData();
  formdata.append("contact_file", fileInput.files[0], "test_names.csv");
  formdata.append("country_code", "234");
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
  };
  
  fetch("https://api.ng.termii.com/api/phonebooks/{phonebook_id}/contacts", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));


  ```

  </code-block>
 <code-block label="NodeJs" >

  ```bash
    var axios = require('axios');
    var FormData = require('form-data');
    var fs = require('fs');
    var data = new FormData();
    data.append('api_key', 'TLtX0534XcuIpjfghpD8qOIKezptPlEAQoipJdcz
                        2omiPwtQ6g2YypJEO570jg');
    data.append('contact_file', fs.createReadStream('test_names.csv'));
    data.append('country_code', '234');
    
    var config = {
      method: 'post',
      url: 'https://api.ng.termii.com/api/phonebooks/{phonebook_id}/contacts',
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  ```

  </code-block>
 <code-block label="Python">

  ```bash

  import requests
  
  url = "https://api.ng.termii.com/api/phonebooks/{phonebook_id}/contacts"
  
  payload={'country_code': '234'}
  files=[
    ('contact_file',('test_names.csv','rb'),'text/csv'))
  ]
  headers = {
    'Content-Type': 'application/json',
  }
  
  response = requests.request("POST", url, headers=headers, data=payload, files=files)
  
  print(response.text)

  ```
  </code-block>

<code-block label="C#" >

  ```bash
var client = new RestClient("https://api.ng.termii.com/api/phonebooks/{phonebook_id}/contacts");
client.Timeout = -1;

var request = new RestRequest(Method.POST);

restRequest.AddHeader("Content-Type", "application/json");
request.AddFile("contact_file", "test_names.csv");
request.AddParameter("country_code", "234");

IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
  ```

  </code-block>
<code-block label="Java" >

  ```bash
Unirest.setTimeouts(0, 0);
HttpResponse<String> response = Unirest.post("http://termii.com/api/phonebooks/{phonebook_id}/contacts")
  .header("Content-Type", "application/json")
  .field("file", new File("test_names.csv"))
  .field("country_code", "234")
  .asString();

  ```
  </code-block>
<code-block label="PHP" >

  ```bash
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'http://termii.com/api/phonebooks/{phonebook_id}/contacts',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS => array('contact_file'=> new CURLFILE('test_names.csv'),'country_code' => '234'),
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
  
      "message": "Your list is being uploaded in the background. Go ahead with other things while we handle this. Please note that it could take a couple minutes to get it done."
  
  }
```

### Delete phonebook
<b>Endpoint :</b>
`
https://api.ng.termii.com/api/phonebook/contact/contact_id?api_key=YourAPIKey
`<br> <br> <b>Request Type : </b>**`DELETE`**



#### Response

```JSON
   {

        "message":"Contact deleted successfully"
  
  }
```






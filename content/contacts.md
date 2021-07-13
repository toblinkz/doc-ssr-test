---
title: Contacts
description: 'Termii  Phonebook'
position: 10
category: Switch
---

Contacts API allows you manage contacts in your phonebook. You can view, add and also delete contacts in your phonebook. 

### Fetch contacts in a phonebook

<b>Endpoint : </b>
`
http://termii.com/api/phonebook/{phonebook_id}/contacts
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
        "first": "http://termii.com/api/phonebooks/04c3ebcc-3a7e-485a-88c1-68e731386f77/contacts?page=1",
        "last": "http://termii.com/api/phonebooks/04c3ebcc-3a7e-485a-88c1-68e731386f77/contacts?page=1",
        "prev": null,
        "next": null
    },
    "meta": {
        "current_page": 1,
        "from": 1,
        "last_page": 1,
        "path": "http://termii.com/api/phonebooks/04c3ebcc-3a7e-485a-88c1-68e731386f77/contacts",
        "per_page": 25,
        "to": 22,
        "total": 22
    }
}
```

### Add contacts to phonebook
<b>Endpoint :</b>
`
http://termii.com/api/phonebooks/{phonebook_id}/contacts
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
  
  fetch("http://termii.com/api/phonebooks/{phonebook_id}/contacts", requestOptions)
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
    data.append('contact_file', fs.createReadStream('test_names.csv'));
    data.append('country_code', '234');
    
    var config = {
      method: 'post',
      url: 'http://termii.com/api/phonebooks/{phonebook_id}/contacts',
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
  
  url = "http://termii.com/api/phonebooks/{phonebook_id}/contacts"
  
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
var client = new RestClient("http://termii.com/api/phonebooks/{phonebook_id}/contacts");
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
http://termii.com/api/phonebook/contact/contact_id?api_key=YourAPIKey
`<br> <br> <b>Request Type : </b>**`DELETE`**



#### Response

```JSON
   {

        "message":"Contact deleted successfully"
  
  }
```






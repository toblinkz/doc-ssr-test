---
title: Campaign
description: 'Termii  Phonebook'
position: 11
category: Switch
---

Campaign API helps you manage the campaigns you send. You can view campaign and send a campaign to a phonebook.

### Fetch Campaigns

<b>Endpoint : </b>
`
http://termii.com/api/sms/campaigns?api_key=Your API KEY
`<br><br> <b>Request Type : </b> **`GET`**


#### Response

```JSON

{
    "data": [
        {
            "campaign_id": "C60e30b2c806da",
            "phone_book": "test",
            "sender": "Termii",
            "camp_type": "scheduled",
            "channel": "-",
            "total_recipients": 0,
            "run_at": "2022-07-05 00:00:00",
            "status": "Scheduled",
            "created_at": "2021-07-05T13:37:48.000000Z"
        },
        {
            "campaign_id": "C60e306e63478d",
            "phone_book": "test",
            "sender": "Termii",
            "camp_type": "scheduled",
            "channel": "-",
            "total_recipients": 0,
            "run_at": "2022-07-05 00:00:00",
            "status": "Scheduled",
            "created_at": "2021-07-05T13:19:34.000000Z"
        },
        {
            "campaign_id": "C60e306c106c21",
            "phone_book": "test",
            "sender": "Termii",
            "camp_type": "scheduled",
            "channel": "-",
            "total_recipients": 0,
            "run_at": "2022-07-05 00:00:00",
            "status": "Scheduled",
            "created_at": "2021-07-05T13:18:57.000000Z"
        },
        {
            "campaign_id": "C60e2f2a4782b8",
            "phone_book": "test",
            "sender": "Termii",
            "camp_type": "scheduled",
            "channel": "-",
            "total_recipients": 0,
            "run_at": "2021-07-22 00:00:00",
            "status": "Scheduled",
            "created_at": "2021-07-05T11:53:08.000000Z"
        },
        {
            "campaign_id": "C60ddda932de77",
            "phone_book": "test",
            "sender": "Termii",
            "camp_type": "scheduled",
            "channel": "-",
            "total_recipients": 0,
            "run_at": "2021-07-22 00:00:00",
            "status": "Scheduled",
            "created_at": "2021-07-01T15:09:07.000000Z"
        },
        {
            "campaign_id": "C60ddda80ea6cc",
            "phone_book": "test",
            "sender": "Termii",
            "camp_type": "scheduled",
            "channel": "-",
            "total_recipients": 0,
            "run_at": "2021-07-22 00:00:00",
            "status": "Scheduled",
            "created_at": "2021-07-01T15:08:48.000000Z"
        },
        {
            "campaign_id": "C60dc5a8437e63",
            "phone_book": "adeyinka",
            "sender": "Termii",
            "camp_type": "scheduled",
            "channel": "-",
            "total_recipients": 0,
            "run_at": "2021-06-30 06:00:00",
            "status": "Scheduled",
            "created_at": "2021-06-30T11:50:28.000000Z"
        },
        {
            "campaign_id": "C60db3fc2954a0",
            "phone_book": "adeyinka",
            "sender": "Termii",
            "camp_type": "scheduled",
            "channel": "-",
            "total_recipients": 0,
            "run_at": "2021-06-29 05:00:00",
            "status": "Scheduled",
            "created_at": "2021-06-29T15:44:02.000000Z"
        },
        {
            "campaign_id": "C60db3f70c8df9",
            "phone_book": "-",
            "sender": "Termii",
            "camp_type": "scheduled",
            "channel": "-",
            "total_recipients": 0,
            "run_at": "2021-06-29 05:00:00",
            "status": "Pending",
            "created_at": "2021-06-29T15:42:40.000000Z"
        },
        {
            "campaign_id": "C60db3ef5a3ceb",
            "phone_book": "-",
            "sender": "Termii",
            "camp_type": "scheduled",
            "channel": "-",
            "total_recipients": 0,
            "run_at": "2021-06-29 05:00:00",
            "status": "Pending",
            "created_at": "2021-06-29T15:40:37.000000Z"
        },
        {
            "campaign_id": "C5dbae7faa2b65",
            "phone_book": "-",
            "sender": "Termii",
            "camp_type": "regular",
            "channel": "Sms",
            "total_recipients": 2,
            "run_at": "2019-10-31 15:56:10",
            "status": "Delivered",
            "created_at": "2019-10-31T14:56:10.000000Z"
        }
    ],
    "links": {
        "first": "http://termii.com/api/sms/campaigns?page=1",
        "last": "http://termii.com/api/sms/campaigns?page=1",
        "prev": null,
        "next": null
    },
    "meta": {
        "current_page": 1,
        "from": 1,
        "last_page": 1,
        "path": "http://termii.com/api/sms/campaigns",
        "per_page": 15,
        "to": 11,
        "total": 11
    }
}

```


### Send a Campaign

<b>Endpoint :</b>
`
https://termii.com/api/sms/campaigns/send
`<br> <br> <b>Request Type : </b>**`POST`**


Options | Required | Description |
--- | --- | --- |
api_key | yes | *string*<br> Your API key (It can be found on your <a href="https://accounts.termii.com/#/" target="_blank" style="text-decoration:underline; cursor:pointer">Termii dashboard</a>). | 
country_code | yes |*string*<br> Represents short numeric geographical codes developed to represent countries (`Example: 234 `) .| 
sender_id | yes |*string*<br>Represents the ID of the sender which can be alphanumeric or numeric. Alphanumeric sender ID length should be between 3 and 11 characters (Example:`CompanyName`)  | 
message | yes |*string*<br>Text of a message that would be sent to the destination phone number  | 
channel | yes |*string*<br>This is the route through which the message is sent. It is either `dnd`, `whatsapp`, or `generic`  | 
message_type | yes |*string*<br>The type of message that is sent, which is a plain message.| 
phonebook_id | yes |*string*<br> ID of the phonebook selected | 
campaign_type | yes |*string*<br>Represents type of campaign  | 
schedule_sms_status | no |*string*<br> To send a scheduled campaign,  pass `scheduled` as the value  | 
schedule_time | no |*string*<br>The time to send scheduled campaign. This is required if scheduled_sm_status is `scheduled` | 


<code-group>
   <code-block label="JSON" active>

  ```bash
   {
      "api_key":"Your API KEY",
      "country_code":"234",
      "sender_id" : "Termii",
      "message":"Welcome to Termii.", 
      "channel": "generic",
      "message_type": "Plain", 
      "phonebook_id": "2d9f4a02-85b8-45e5-9f5b-30f93ef472e2",
      "delimiter":",",
      "remove_duplicate":"yes",
      "campaign_type":"personalized",
      "schedule_time":"30-06-2021 6:00",
      "schedule_sms_status":"scheduled"
  }
  ```

  </code-block>
  <code-block label="JavaScript">

  ```bash
  var data = {
                "api_key":"Your API KEY",
                "country_code":"234",
                "sender_id" : "Termii",
                "message":"Welcome to Termii.", 
                "channel": "generic",
                "message_type": "Plain", 
                "phonebook_id": "2d9f4a02-85b8-45e5-9f5b-30f93ef472e2",
                "delimiter":",",
                "remove_duplicate":"yes",
                "campaign_type":"personalized",
                "schedule_time":"30-06-2021 6:00",
                "schedule_sms_status":"scheduled"
            };

var data = JSON.stringify(data);

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", " https://termii.com/api/sms/campaigns/send");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.send(data);


  ```

  </code-block>
 <code-block label="NodeJs" >

  ```bash
 var request = require('request');
var data = {
               "api_key":"Your API KEY",
                "country_code":"234",
                "sender_id" : "Termii",
                "message":"Welcome to Termii.", 
                "channel": "generic",
                "message_type": "Plain", 
                "phonebook_id": "2d9f4a02-85b8-45e5-9f5b-30f93ef472e2",
                "delimiter":",",
                "remove_duplicate":"yes",
                "campaign_type":"personalized",
                "schedule_time":"30-06-2021 6:00",
                "schedule_sms_status":"scheduled"
            };
var options = {
  'method': 'POST',
  'url': ' https://termii.com/api/sms/campaigns/send',
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
url = " https://termii.com/api/sms/campaigns/send"
payload = {
               "api_key":"Your API KEY",
                "country_code":"234",
                "sender_id" : "Termii",
                "message":"Welcome to Termii.", 
                "channel": "generic",
                "message_type": "Plain", 
                "phonebook_id": "2d9f4a02-85b8-45e5-9f5b-30f93ef472e2",
                "delimiter":",",
                "remove_duplicate":"yes",
                "campaign_type":"personalized",
                "schedule_time":"30-06-2021 6:00",
                "schedule_sms_status":"scheduled"
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
RestClient restClient = new RestClient(" https://termii.com/api/sms/campaigns/send");

//Creating Json object
JObject objectBody = new JObject();
objectBody.Add("api_key","Your API Key");
objectBody.Add("country_code", "234");
objectBody.Add( "sender_id", "Termii");
objectBody.Add( "message", "Welcome to Termii.");
objectBody.Add( "channel", "generic");
objectBody.Add( "message_type", "plain");
objectBody.Add( "phonebook_id", "2d9f4a02-85b8-45e5-9f5b-30f93ef472e2");
objectBody.Add( "delimiter", ",");
objectBody.Add( "remove_duplicate", "yes");
objectBody.Add( "campaign_type","personalized");
objectBody.Add( "schedule_time","30-06-2021 6:00");
objectBody.Add("schedule_sms_status":, "scheduled");

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
HttpResponse<String> response = Unirest.post("https://termii.com/api/sms/campaigns/send")
  .header("Content-Type", "application/json")
  .body("{\r\n \"api_key\": \"Your API Key\",\r\n  \"phone_book\": \"Phone Test \",\r\n   \"description\": \"Phonebook for test\"\r\n    }")
  .asString();
  ```
  </code-block>
<code-block label="PHP" >

  ```bash
$curl = curl_init();

curl_setopt_array($curl, array(
CURLOPT_URL => 'https://termii.com/api/sms/campaigns/send',
CURLOPT_RETURNTRANSFER => true,
CURLOPT_ENCODING => '',
CURLOPT_MAXREDIRS => 10,
CURLOPT_TIMEOUT => 0,
CURLOPT_FOLLOWLOCATION => true,
CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
CURLOPT_CUSTOMREQUEST => 'POST',
CURLOPT_POSTFIELDS =>' 
      {
                "api_key":"Your API KEY",
                "country_code":"234",
                "sender_id" : "Termii",
                "message":"Welcome to Termii.", 
                "channel": "generic",
                "message_type": "Plain", 
                "phonebook_id": "2d9f4a02-85b8-45e5-9f5b-30f93ef472e2",
                "delimiter":",",
                "remove_duplicate":"yes",
                "campaign_type":"personalized",
                "schedule_time":"30-06-2021 6:00",
                "schedule_sms_status":"scheduled"
      }
      ',
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

        "message": "Your campaign has been scheduled"
  
  }
```


### Fetch a Campaign
<b>Endpoint :</b>
`
https://termii.com/api/sms/campaigns/campaign_id?api_key=Your API KEY
`<br> <br> <b>Request Type : </b>**`GET`**




#### Response

```JSON
  {
      "data": [
        {
          "campaign_id": 6,
          "phone_book": "-",
          "sender": "TestAccount",
          "camp_type": null,
          "channel": "Sms",
          "total_recipients": null,
          "run_at": null,
          "status": "Message Sent | Pending",
          "created_at": "2020-01-26T06:47:16.000000Z"
        },
        {
          "campaign_id": 6,
          "phone_book": "-",
          "sender": "TestAccount",
          "camp_type": null,
          "channel": "Sms",
          "total_recipients": null,
          "run_at": null,
          "status": "Message Sent | Pending",
          "created_at": "2020-01-26T06:29:23.000000Z"
        },
        {
          "campaign_id": 6,
          "phone_book": "-",
          "sender": "TestAccount",
          "camp_type": null,
          "channel": "Sms",
          "total_recipients": null,
          "run_at": null,
          "status": "Message Sent | Pending",
          "created_at": "2020-01-26T06:24:30.000000Z"
        }
      ],
      "links": {
        "first": "http://termii.com/api/sms/campaigns/C60db3fc2954a0?page=1",
        "last": "http://termii.com/api/sms/campaigns/C60db3fc2954a0?page=1",
        "prev": null,
        "next": null
      },
      "meta": {
        "current_page": 1,
        "from": 1,
        "last_page": 1,
        "path": "http://termii.com/api/sms/campaigns/C60db3fc2954a0",
        "per_page": 15,
        "to": 3,
        "total": 3
      }
}
```

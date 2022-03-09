---
title: Messaging API
description: 'Termii Messaging'
position: 6
category: Switch
---

This API allows businesses send text messages to their customers across different messaging channels.
The API accepts JSON request payload and returns JSON encoded responses, and uses standard HTTP response codes.

<b> Messaging Channels/Routes </b>
Channel | Description |
--- | --- |
generic | This channel is used to send promotional messages and messages to phone number not on dnd | 
dnd | On this channel all your messages  deliver whether there is <a href="https://termii.medium.com/the-dnd-service-in-nigeria-everything-you-need-to-know-72b7247e3968" target="_blank" style="text-decoration:underline">dnd restriction</a> or not on the phone number | 
whatsapp | This channel sends messages via WhatsApp | 


## Send message
<b>Endpoint : </b> `https://api.ng.termii.com/api/sms/send`
<br><br> <b>Request Type : </b>**`POST`**


<b>Body params</b>
Options | Required |Description |
--- | --- | --- |
api_key | yes |*string*<br> Your API key (It can be found on your <a href="https://accounts.termii.com/#/" target="_blank" style="text-decoration:underline; cursor:pointer">Termii dashboard</a>. |
to |yes|*string*<br> Represents the destination phone number. Phone number must be in the international format (`Example: 23490126727`). You can also send to multiple numbers. To do so put numbers in an array (Example: `["23490555546", "23423490126999"]`) Please note: the array takes only 100 phone numbers at a time |
from |yes|*string*<br>Represents a sender ID for sms which can be Alphanumeric or Device name for Whatsapp. Alphanumeric sender ID length should be between 3 and 11 characters (Example:`CompanyName`)  |
sms |yes| *string*<br> Text of a message that would be sent to the destination phone number|
type |yes|*string*<br>  The kind of message that is sent, which is  a `plain` message.  |
channel |yes|*string*<br> This is the route through which the message is sent. It is either `dnd`, `whatsapp`, or `generic` |
media |no|*object*<br> This is a media object, it is only available for the `High Volume WhatsApp`. When using the media parameter, ensure you are not using the sms parameter|
media.url |no|*string*<br> The url to the file resource,
media.caption |no|*string*<br> The caption that should be added to the image,


<b>Media Types</b>
File | Supported Format |
--- | --- 
Image | JPG, JPEG, PNG
Audio | MP3, OGG, AMR
Documents | PDF
Video | MP4 (<b>Note:</b>  WhatsApp currently does not support MP4 files without an audio)


<alert>
<b>Note:</b> For customers sending messages to Nigeria, DND stands for <a href="https://termii.medium.com/the-dnd-service-in-nigeria-everything-you-need-to-know-72b7247e3968" target="_blank" style="text-decoration:underline">Do-Not-Disturb</a> and phone numbers with DND settings activated are blocked from receiving messages from the generic route by the Mobile Network Operators. 
To deliver messages to phone numbers on DND, the Termii DND route needs to be activated on your account. Kindly reach out to<a id="CHATID"  style="cursor:pointer; color:#406DAD; text-decoration: underline;">  our support team.</a>
</alert>
<br>
<br>
<code-group>
   <code-block label="JSON" active>

  ```bash
  {
       "to": "2347880234567",
       "from": "talert",
       "sms": "Hi there, testing Termii",
       "type": "plain",
       "channel": "generic",
       "api_key": "Your API Key",
       "media": {
        "url": "https://media.example.com/file",
        "caption": "your media file"
    }    
   }
  ```

  </code-block>
  <code-block label="JavaScript">

  ```bash
  var data = {
            "to":"2347880234567",
            "from":"talert",
            "sms":"Hi there, testing Termii",
            "type":"plain",
            "api_key":"Your API key",
            "channel":"generic",
            "media": {
              "url": "https://media.example.com/file",
              "caption": "your media file"
               }       
          };

var data = JSON.stringify(data);

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://api.ng.termii.com/api/sms/send");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.send(data);
  ```

  </code-block>
 <code-block label="NodeJs" >

  ```bash
 var request = require('request');
var data = {
            "to":"2347880234567",
            "from":"talert",
            "sms":"Hi there, testing Termii",
            "type":"plain",
            "api_key":"Your API key",
            "channel":"generic",
             "media": {
                "url": "https://media.example.com/file",
                "caption": "your media file"
              }   
          };
var options = {
  'method': 'POST',
  'url': 'https://api.ng.termii.com/api/sms/send',
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
url = "https://api.ng.termii.com/api/sms/send"
payload = {
            "to": "2347880234567",
             "from": "talert",
             "sms": "Hi there, testing Termii ",
             "type": "plain",
             "channel": "generic",
             "api_key": "Your API Key",
               "media": {
                  "url": "https://media.example.com/file",
                  "caption": "your media file"
              }   
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
var client = new RestClient("https://api.ng.termii.com/api/sms/send");
client.Timeout = -1;
var request = new RestRequest(Method.POST);
request.AddHeader("Content-Type", "application/json");
request.AddParameter("application/json", "{\r\n \"to\":\"2347880234567\",\r\n  \"from\":\"talert\",\r\n  \"sms\":\"Hi there, testing Termii\",\r\n 
   \"type\":\"plain\",\r\n  \"api_key\":\"Your API key\",\r\n \"channel\":\"generic\",\r\n  \"media\": {\r\n \"url\": \"https://media.example.com/file\",\r\n  \"caption\": \"your media file\"\r\n }   \r\n  };", 
 ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);


  ```

  </code-block>
<code-block label="Java" >

  ```bash
Unirest.setTimeouts(0, 0);
HttpResponse<String> response = Unirest.post("https://api.ng.termii.com/api/sms/send")
  .header("Content-Type", "application/json")
  .body("{\r\n \"to\":\"2347880234567\",\r\n \"from\":\"talert\",\r\n  \"sms\":\"Hi there, testing Termii\",\r\n \"type\":\"plain\",\r\n  \"api_key\":\"Your API key\",\r\n  \"channel\":\"generic\",\r\n  \"media\": {\r\n \"url\": \"https://media.example.com/file\",\r\n  \"caption\": \"your media file\"\r\n  } \r\n  };")
  .asString();


  ```
  </code-block>
<code-block label="PHP" >

  ```bash
  $curl = curl_init();
  $data = array("api_key" => "Your API key", "to" => "2347880234567",  "from" => "talert",
  "sms" => "Hi there, testing Termii ",  "type" => "plain",  "channel" => "generic" );
  
  $post_data = json_encode($data);
  
  curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.ng.termii.com/api/sms/send",
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

````
   {
      "message_id": "9122821270554876574",
      "message": "Successfully Sent",
      "balance": 9,
      "user": "Peter Mcleish"
   }
````
## Send Bulk  message
<b>Endpoint : </b> `https://api.ng.termii.com/api/sms/send/bulk`
<br><br> <b>Request Type : </b>**`POST`**


<b>Body params</b>
Options | Required |Description |
--- | --- | --- |
api_key | yes |*string*<br> Your API key (It can be found on your <a href="https://accounts.termii.com/#/" target="_blank" style="text-decoration:underline; cursor:pointer">Termii dashboard</a>. |
to |yes|*string*<br> Represents the array of phone numbers you are sending to (Example: `["23490555546", "23423490126999","23490555546"]`). Phone numbers must be in international format (`Example: 23490126727`). Please note: the array can take up to 10,000 phone numbers |
from |yes|*string*<br>Represents a sender ID for sms which can be Alphanumeric or Device name for Whatsapp. Alphanumeric sender ID length should be between 3 and 11 characters (Example:`CompanyName`)  |
sms |yes| *string*<br> Text of a message that would be sent to the destination phone number|
type |yes|*string*<br>  The type of message that is sent, which is  a `plain` message.  |
channel |yes|*string*<br> This is the channel through which the message is sent. It is either `dnd`, `whatsapp`, or `generic` |


<br>
<br>
<code-group>
   <code-block label="JSON" active>

  ```bash
  {
       "to": ["23490555546", "23423490126999","23490555546"],
       "from": "talert",
       "sms": "Hi there, testing Termii",
       "type": "plain",
       "channel": "generic",
       "api_key": "Your API Key",
   }
  ```

  </code-block>
  <code-block label="JavaScript">

  ```bash
  var data = {
            "to":["23490555546", "23423490126999","23490555546"],
            "from":"talert",
            "sms":"Hi there, testing Termii",
            "type":"plain",
            "api_key":"Your API key",
            "channel":"generic",
               
          };

var data = JSON.stringify(data);

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://api.ng.termii.com/api/sms/send/bulk");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.send(data);
  ```

  </code-block>
 <code-block label="NodeJs" >

  ```bash
 var request = require('request');
var data = {
            "to":["23490555546", "23423490126999","23490555546"],
            "from":"talert",
            "sms":"Hi there, testing Termii",
            "type":"plain",
            "api_key":"Your API key",
            "channel":"generic", 
          };
var options = {
  'method': 'POST',
  'url': 'https://api.ng.termii.com/api/sms/send/bulk',
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
url = "https://api.ng.termii.com/api/sms/send/bulk"
payload = {
            "to": ["23490555546", "23423490126999","23490555546"],
             "from": "talert",
             "sms": "Hi there, testing Termii ",
             "type": "plain",
             "channel": "generic",
             "api_key": "Your API Key",
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
var client = new RestClient("https://api.ng.termii.com/api/sms/send/bulk");
client.Timeout = -1;
var request = new RestRequest(Method.POST);
request.AddHeader("Content-Type", "application/json");
request.AddParameter("application/json", "{\r\n \"to\":\["2347880234567","2347880234567"],\r\n  \"from\":\"talert\",\r\n  \"sms\":\"Hi there, testing Termii\",\r\n 
   \"type\":\"plain\",\r\n  \"api_key\":\"Your API key\",\r\n \"channel\":\"generic\",\r\n  };", 
 ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);


  ```

  </code-block>
<code-block label="Java" >

  ```bash
Unirest.setTimeouts(0, 0);
HttpResponse<String> response = Unirest.post("https://api.ng.termii.com/api/sms/send/bulk")
  .header("Content-Type", "application/json")
  .body("{\r\n \"to\":\["2347880234567","2347880234567"],\r\n \"from\":\"talert\",\r\n  \"sms\":\"Hi there, testing Termii\",\r\n \"type\":\"plain\",\r\n  \"api_key\":\"Your API key\",\r\n  \"channel\":\"generic\",\r\n };")
  .asString();


  ```
  </code-block>
<code-block label="PHP" >

  ```bash
$curl = curl_init();
$data = array("to" => ["2347880234567","2347880234567"], "from" => "talert", 
"sms" => "Hi there, testing Termii", "type" => "plain", "channel" => "generic", "api_key" => "Your API Key" );

$post_data = json_encode($data);

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.ng.termii.com/api/sms/send/bulk',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>' {
            "to": "2347880234567",
             "from": "talert",
             "sms": "Hi there, testing Termii ",
             "type": "plain",
             "channel": "generic",
             "api_key": "Your API Key",
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

````
   {
      "code": "ok",
      "message_id": "9122821270554876574",
      "message": "Successfully Sent",
      "balance": 9,
      "user": "Peter Mcleish"
   }
````

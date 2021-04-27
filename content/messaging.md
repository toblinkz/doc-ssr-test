---
title: Messaging
description: 'Termii Messaging'
position: 6
category: Switch
---

This API allows businesses send text messages to their customers across different messaging channels.
The API accepts JSON request payload and returns JSON encoded responses, and uses standard HTTP response codes.

<alert>
<b>Note for Nigerian customers:</b> DND stands for Do-Not-Disturb and phone numbers with DND settings activated are blocked from receiving messages from the generic route by the Mobile Network Operators. 
To deliver messages to phone numbers on DND, the Termii DND route needs to be activated on your account. Kindly reach out to our <a id="CHATID" style="cursor: pointer; color: #406DAD">support team</a>
</alert>

## Send message
<b>Endpoint : </b> `https://termii.com/api/sms/send`
<br><br> <b>Request Type : </b>**`POST`**

<b> Messaging Channels/Routes </b>
Channel | Description |
--- | --- |
generic |*string*<br> Your API key (It can be found on your Termii dashboard). | 
dnd |*string*<br> Represents the destination phone number. Phone number must be in the international format (`Example: 23490126727`). You can also send to multiple numbers. To do that put numbers in an array (Example: `["23490555546", "23423490126999"]`  | 
whatsapp |*string*<br>Represents a sender ID for sms or Device ID for Whatsapp which can be Alphanumeric. Alphanumeric sender ID length should be between 3 and 11 characters (Example:`CompanyName`)  | 



<b>Body params</b>
Options | Required |Description |
--- | --- | --- |
api_key | yes |*string*<br> Your API key (It can be found on your Termii dashboard). | 
to |yes|*string*<br> Represents the destination phone number. Phone number must be in the international format (`Example: 23490126727`). You can also send to multiple numbers. To do that put numbers in an array (Example: `["23490555546", "23423490126999"]`  | 
from |yes|*string*<br>Represents a sender ID for sms which can be Alphanumeric or Device name for Whatsapp. Alphanumeric sender ID length should be between 3 and 11 characters (Example:`CompanyName`)  | 
sms |yes| *string*<br> Text of a message that would be sent to the destination phone number| 
type |yes|*string*<br>  The kind of message that is sent, which is  a `plain` message.  | 
channel |yes|*string*<br> This is the route through which the message is sent. It is either `dnd`, `whatsapp`, or `generic` | 




<code-group>
   <code-block label="JSON" active>

  ```bash
  {
       "to": "2347880234567",
       "from": "talert",
       "sms": "Hi there, testing Termii",
       "type": "plain",
       "channel": "generic",
       "api_key": "Your API Key"    
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
            "channel":"generic"
            };

var data = JSON.stringify(data);

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://termii.com/api/sms/send");
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
            "channel":"generic"
            };
var options = {
  'method': 'POST',
  'url': 'https://termii.com/api/sms/send',
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
url = "https://termii.com/api/sms/send"
payload = {
            "to": "2347880234567",
             "from": "talert",
             "sms": "Hi there, testing Termii ",
             "type": "plain",
             "channel": "generic",
             "api_key": "Your API Key"
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
RestClient restClient = new RestClient("https://termii.com/api/sms/send");

//Creating Json object
JObject objectBody = new JObject();
objectBody.Add("to","2347880234567");
objectBody.Add("from","talert");
objectBody.Add("sms","Hi there, testing Termii");
objectBody.Add("type","plain");
objectBody.Add("channel","generic");
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
HttpResponse<String> response = Unirest.POST("https://termii.com/api/sms/send")
  .header("Content-Type", "application/json")
  .body(" {\r\n \"to\": \"2347089545357\",\r\n  \"from\": \"talert\",\r\n   \"sms\": \"Hi there, testing Termii\",\r\n   \"type\": \"plain\",\r\n   \"channel\": \"whatsapp\",\r\n   \"api_key\": \"Your API Key\"\r\n  \r\n }")
  .asString();

  ```
  </code-block>
<code-block label="PHP" >

  ```bash
  $curl = curl_init();
$data = array("to" => "2347880234567","from" => "talert",
"sms"=>"Hi there, testing Termii","type" => "plain","channel" => "generic","api_key" => "Your API key");

$post_data = json_encode($data);

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://termii.com/api/sms/send",
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

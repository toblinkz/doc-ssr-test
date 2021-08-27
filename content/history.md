---
title: History
description: 'Termii provides RESTful API which is based on simple HTTP POST/GET requests. Our API lets you create, send, and verify messages, as well as, track your delivery statistics.'
position: 22
category: Insights
---

This Inbox API returns reports for messages sent across the sms, voice & whatsapp channels. Reports can either display all messages on termii or a single message.

<b>Endpoint : </b>
`
https://termii.com/api/sms/inbox?api_key=YourAPIKey
`<br><br> <b>Request Type : </b> **`GET`**

<alert>Message IDs are gotten when a message is sent on Termii. Find the ID in the JSON response and input it into the inbox API to get a specific delivery report,
 else we would return all reports on your account.</alert>

<hr />


#### Response


```JSON
   [
      {
            "sender": "N-Alert",
             "receiver": "233257883990",
             "message": "New year in a bit",
             "amount": 1,
             "reroute": 0,
             "status": "DND Active on Phone Number",
             "sms_type": "plain",
             "send_by": "sender",
             "media_url": null,
             "message_id": "5508751839629937023",
             "notify_url": null,
             "notify_id": null,
             "created_at": "2020-08-15 12:36:42"
      },
      {
                "sender": "N-Alert",
                 "receiver": "233222883380",
                 "message": "New year in a bit",
                 "amount": 1,
                 "reroute": 0,
                 "status": "DND Active on Phone Number",
                 "sms_type": "plain",
                 "send_by": "sender",
                 "media_url": null,
                 "message_id": "5508755559629937033",
                 "notify_url": null,
                 "notify_id": null,
                 "created_at": "2020-08-15 12:36:42"
      }

   ]
          
```



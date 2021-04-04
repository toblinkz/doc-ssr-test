---
title: Authentication
description: 'Termii Authentication'
position: 2
category: Authentication
---
The Termii API uses API keys to authenticate requests. 
You can view and manage your API keys in the <a href='https://accounts.termii.com/#/login' target="_blank">Termii Dashboard</a>.
API calls are authenticated by including your API key in the body of the request you make.
If you do not include your API key when making an API request or use a valid API key, Termii returns a http error.

## Retrieving your API Key

Your API key can be obtained from your <a href='https://accounts.termii.com/#/login' target="_blank">Termii Dashboard</a>. 

Take the following steps to access it:
* <a href='https://accounts.termii.com/#/login' target="_blank">Login</a> to your Termii Dashboard
* Navigate to Settings
* Select the API token tab

<img src="/api_token_tab.png"/>

You can copy your API key from here and make the required API calls.


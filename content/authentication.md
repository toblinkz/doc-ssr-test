---
title: Authentication
description: 'Termii Authentication'
position: 2
category: Home
---

Termii authenticates your API requests using your account’s API key.
API calls are authenticated by including your secret key in the Authorization header of every request you make.
If you do not include your key when making an API request or use one that is invalid, Termii returns an http error.
To get your Termii API key <a href='https://accounts.termii.com/#/register' target="_blank">sign up</a> here.

<alert> <span style="font-weight: bold!important;">Authorization Sample</span> <br>Authorization: Bearer 4588jdhdkjkshdjkhdj827391nV4Lid</alert>

## Retrieving your API Key

Your API key can be obtained from your Termii Dashboard. Take the following steps to access it:
* <a href='https://accounts.termii.com/#/login' target="_blank">Login</a> to your Termii Dashboard
* Navigate to Settings
* Select the API token tab

<img src="/api_token_dashboard.jpg"/>

You can copy your API key from here and make the required API calls.


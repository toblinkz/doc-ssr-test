---
title: Introduction
description: 'Termii Authentication'
position: 1
category: Home
---

These docs will give you a deep dive into our full API Reference Documentation and how to seamlessly integrate our messaging channels and verification functionalities into your product.

## Basics
Our API is organised around using HTTP verbs and REST. Our API  accepts and returns JSON formatted payload.

We provide sample code snippets and API calls that can serve as guide during your integration process.

We also advice running some tests using Postman. Postman is a collaboration platform for API development which makes testing endpoints easy. We have also provided a <a style="cursor:pointer; text-decoration:underline; color:#406DAD" href="https://termii.s3.us-west-1.amazonaws.com/upload/files/75963Z65FmbjqAohATnC.json" download="termii_postman_collection.json">Postman Collection</a> you can easily import to your postman and start testing.

## SDKs
Ship your products faster & in any language you are proficient in by using SDKs provided by our community of open source developers. You can submit & view available ones <a style="cursor:pointer; text-decoration:underline; color:#406DAD"  href="https://developers.termii.com/community-sdks">here</a>.

## API Endpoint

In order to use Termii's APIs, you need to first create an account for free at <a class="link">www.termii.com</a>. 

<b>BASE URL</b>
<br>
<br>
Your Termii account has its own Base URL, which you should use in all API requests.  
The base URL shown below is a sample base URL. Your base URL can be found on your <a style="cursor:pointer; text-decoration:underline; color:#406DAD"  href="https://accounts.termii.com/#/" target ="_blank">dashboard<a/>.
 <code-block active>

  ```bash

 https://api.ng.termii.com
  ```
The base URL is used to route your request to the appropriate "regulatory region" and to optimize traffic between data centers with the region.
  </code-block>


  
## Explore Products

<quickNavigation-card></quick-navigation-card>

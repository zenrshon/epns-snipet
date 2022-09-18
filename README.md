# EPNS snippet

back-end implementation of EPNS for mumbai

# About EPNS

With EPNS you can
Send notifications on polygon mumbai network

1. from smart contracts
2. from the backend
3. from the administration GUI

This time, we aim to implement with 2.

Receiving Notifications

1. EPNS add-on for browser extensions
2. EPNS application for smartphones

This time we will use 1 for staging.

2 can also be used in a production environment.

# Getting started

What you can do with this backend snippet

1. Send notifications to all or individual subscribers
2. Start subscriptions
3. Unsubscribe

To receive notifications, please install the EPNS staging extension from

https://chrome.google.com/webstore/detail/epns-staging-protocol-alp/bjiennpmhdcandkpigcploafccldlakj/related

(supplementation)
If you have not created a channel for staging distribution, please follow the documentation to create one.

URL: https://staging.epns.io/

Docs: https://docs.epns.io/hub/

# Development

## Installation

```
yarn add @epnsproject/sdk-restapi ethers
```

```
npm install @epnsproject/sdk-restapi ethers
```

## epns-snippet.js

Please set and use the following values

```
PRIVATE_KEY: Private key in the channel administrator's wallet
RECIEVE_WALLET_ADDRESS: Recipient's wallet address
```

## Function

sendNotification：send notification

optIn: start subscription

optOut: unsubscribe

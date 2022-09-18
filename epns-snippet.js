const { ethers } = require("hardhat");
const EpnsAPI = require("@epnsproject/sdk-restapi")
const PK = 'PRIVATE_KEY';
const Pkey16 = `0x${PK}`;
const signer = new ethers.Wallet(Pkey16);

const optOut = async (toWalletAddress) => {
    await EpnsAPI.channels.unsubscribe({
        signer: signer,
        // MUMBAI:80001, KOVAN:42
        channelAddress: `eip155:80001:${signer.address}`,
        userAddress: `eip155:80001:${toWalletAddress}`,
        onSuccess: () => {
            console.log('opt out success');
        },
        onError: () => {
            console.error('opt out error');
        },
        env: 'staging'
    })
}

const optIn = async (toWalletAddress) => {
    await EpnsAPI.channels.subscribe({
        signer: signer,
        channelAddress: `eip155:80001:${signer.address}`,
        userAddress: `eip155:80001:${toWalletAddress}`,
        onSuccess: () => {
            console.log('opt in success');
        },
        onError: () => {
            console.error('opt in error');
        },
        env: 'staging'
    })
}

const sendNotification = async (toWalletAddress) => {
    try {
        const apiResponse = await EpnsAPI.payloads.sendNotification({
            signer,
            type: 1, // 3: distribution to target users(to recipients), 1:broadcast to all (please delete recipients)
            identityType: 2, // direct payload
            notification: {
                title: `Input Title`,
                body: `Input Body`,
            },
            payload: {
                title: `Input Title`,
                body: `Input Body`,
                cta: '',
                img: ''
            },
            recipients: `eip155:80001:${toWalletAddress}`,
            channel: `eip155:80001:${signer.address}`,
            env: 'staging'
        });

        // apiResponse?.status === 204, if sent successfully!
        console.log('API repsonse: ', apiResponse);
    } catch (err) {
        console.error('Error: ', err);
    }
}

const toWalletAddress = "RECIEVE_WALLET_ADDRESS"
//optIn(toWalletAddress);
//optOut(toWalletAddress);
sendNotification(toWalletAddress);
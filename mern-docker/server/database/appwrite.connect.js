import dotenv from 'dotenv';
dotenv.config();

import sdk from 'node-appwrite';

const client = new sdk.Client();

client
    .setEndpoint(process.env.APPWRITE_ENDPOINT)
    .setProject(process.env.APPWRITE_PROJECT_ID)
    .setKey(process.env.APPWRITE_API_KEY);

const databases = new sdk.Databases(client);
console.log("Appwrite database connected");

export {sdk, client, databases};
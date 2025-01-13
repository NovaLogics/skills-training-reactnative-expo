import { Client, Account, ID } from 'react-native-appwrite';
import { config } from './appwrite-config';

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) 
    .setProject(config.projectId) 
    .setPlatform(config.platform) 
;

const account = new Account(client);


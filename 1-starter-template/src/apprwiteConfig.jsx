
import { Client, Account } from 'appwrite';

export const API_ENDPOINT = 'https://cloud.appwrite.io/v1'
export const PROJECT_ID = '65b2207b286da7172fe6'

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') 
    .setProject('65b2207b286da7172fe6');    

export const account = new Account(client);

export default client;
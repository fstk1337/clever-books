import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://strapi.cleverland.by/api',
    withCredentials: false,
    headers: {
        Accept: 'application/json'
    }
});
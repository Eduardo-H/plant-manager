import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.123.136:3333/'
})

export default api;
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://data.fixer4.io/api/'
});

export default instance;
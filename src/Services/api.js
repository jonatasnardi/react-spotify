import axios from 'axios';
import { BASE_URL_API } from '../Helpers/variables';
import { getUrlParameter } from '../Helpers/functions';

let token = getUrlParameter('access_token') || localStorage.getItem('access_token');
let refreshToken = getUrlParameter('refresh_token') || localStorage.getItem('refresh_token');
const API_TOKEN = token || refreshToken;

const api = axios.create({
  baseURL: BASE_URL_API,
  headers: {
    "Authorization" : `Bearer ${API_TOKEN}`
  }
});

export default api;
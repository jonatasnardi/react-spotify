import axios from 'axios';
import { BASE_URL_API_ACCOUNT } from '../Helpers/variables';

const client_id = 'b46245111c2649fba63751896abe937b';
const client_secret = '518093f56d3e4a2685c28e174e7bdb4f';

const apiSpotify = axios.create({
  baseURL: BASE_URL_API_ACCOUNT,
  headers: {
    "Authorization" : 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
  }
});

export default apiSpotify;
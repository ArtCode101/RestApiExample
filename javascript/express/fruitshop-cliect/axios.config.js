import axios from 'axios';
import {
    HOST_NAME
} from './next.apiServer.config'

axios.defaults.baseURL = HOST_NAME;
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default axios;
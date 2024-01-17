import axios from 'axios'
import {baseUrl} from '../constants/Permanent'

const instance = axios.create({
    baseURL: baseUrl,
    
  });

  export default instance
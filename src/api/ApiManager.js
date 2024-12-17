import axios from 'axios';

const ApiManager = axios.create({
    BaseURL:`http://localhost:8085/api`,
    responseType:'json',
    withCredentials:true,

});
export default ApiManager; 
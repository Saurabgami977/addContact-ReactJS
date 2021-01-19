import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://addtocontact-e5966-default-rtdb.firebaseio.com/'
})

export default instance;
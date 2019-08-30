import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-c0f1d.firebaseio.com/'
})

export default instance;
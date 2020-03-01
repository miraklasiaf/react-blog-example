import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/css/styles.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

//  axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN'
axios.defaults.headers.post["Content-type"] = "application/json";

axios.interceptors.request.use(config => {
    console.log(config)
    return config
}, err => {
    // No internet
    console.log(err)
    return Promise.reject(err)
})

axios.interceptors.response.use(res => {
    return res
}, err => {
    return Promise.reject(err)
})

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

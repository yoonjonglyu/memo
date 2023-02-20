import axios from 'axios';

const client = axios.create({
  timeout: 2500,
});

client.interceptors.request.use(
  config => config,
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);
client.interceptors.response.use(
  res => res.data,
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default client;
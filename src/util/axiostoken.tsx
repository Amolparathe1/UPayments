import axios from 'axios';
import {Urls} from './url';

const InstanceToken = axios.create({
  baseURL: Urls.baseUrl,
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

InstanceToken.interceptors.request.use(
  async config => {
    // let token;
    // token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFtb2xwYXJhdGhlQGdtYWlsLmNvbSIsImdpdGh1YiI6Imh0dHBzOi8vZ2l0aHViLmNvbS9BbW9scGFyYXRoZTEiLCJpYXQiOjE2NTk3MDM0NTQsImV4cCI6MTY2MDEzNTQ1NH0.japRw4FR1Oz6eV8as4K7bzKp3ty9PP7GgIDPdhSrUPU';
    // if (token) {
    config.headers.Authorization =
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFtb2xwYXJhdGhlQGdtYWlsLmNvbSIsImdpdGh1YiI6Imh0dHBzOi8vZ2l0aHViLmNvbS9BbW9scGFyYXRoZTEiLCJpYXQiOjE2NTk3MDM0NTQsImV4cCI6MTY2MDEzNTQ1NH0.japRw4FR1Oz6eV8as4K7bzKp3ty9PP7GgIDPdhSrUPU';
    // }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

InstanceToken.interceptors.response.use(
  response => {
    // console.log('response', response);
    return response;
  },
  function (error) {
    // console.log('error', error);
    return error.response;
  },
);

export default InstanceToken;

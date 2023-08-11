import axios from 'axios';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import { API_URL, API_TIMEOUT } from '@/assets/constants';
const instance = () => {
  let createInstance = axios.create({
    url: API_URL,
    timeout: API_TIMEOUT,
    withCredentials: true,
    responseType: 'json',
    params: {},
  });

  createInstance.interceptors.response.use(handleResponse, handleError);
  createInstance.interceptors.request.use(handleRequest, handleError);

  return createInstance;
};

//Response
const handleResponse = (res) => {
  try {
    // res.data.code 后台
    if (res.status !== 200) {
      throw new Error(res?.data?.message);
    }
    nprogress.done();
    return res.data;
  } catch (error) {
    nprogress.done();
  }
};
//Request
const handleRequest = (config) => {
  const storage = JSON.parse(sessionStorage.getItem('storage'));
  if (storage?.userInfo?.token) {
    config.params['token'] = storage.userInfo.token;
  }
  nprogress.start();

  return config;
};

//Error
const handleError = (error) => {
  const { response, msg } = error;
  nprogress.done();
  Promise.reject(response ? new Error(response.data.message || msg) : error);
};

const request = instance();
export default request;

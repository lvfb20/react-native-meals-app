import axios from 'axios';
import * as AxiosLogger from 'axios-logger';

const BASE_URL = "https://mealsapp-fb9e5-default-rtdb.firebaseio.com/"

// Axios instance & logger configs
const MealsApi = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {"Content-Type": "application/json"},
  paramsSerializer: function (params) {
    var qs = require('qs');
    return qs.stringify(params, { arrayFormat: 'comma' });
  },
});

const loggerConfig = {
  prefixText: 'MealsApi',
  method: true,
  url: true,
  status: true,
  headers: true,
  data: true,
};

AxiosLogger.setGlobalConfig(loggerConfig);

MealsApi.interceptors.request.use(
  AxiosLogger.requestLogger,
  AxiosLogger.errorLogger,
);

MealsApi.interceptors.request.use(async function (config) {
  try {
    console.log('====================================');
    console.log('SUCCESS interceptors.request');
    console.log('====================================');
  } catch (error) {
    console.log('ERROR interceptors.request');
  }
  return config;
});

MealsApi.interceptors.response.use(
  (response) => {
    const responseLoggerConfig = loggerConfig;
    responseLoggerConfig.data = false;
    AxiosLogger.responseLogger(response, responseLoggerConfig);
    console.log(
      `[${responseLoggerConfig.prefixText}][Response Data] \n` +
        JSON.stringify(response.data, null, 5),
    );
    return response;
  },
  (error) => {
    return AxiosLogger.errorLogger(error);
  },
);

export default MealsApi;

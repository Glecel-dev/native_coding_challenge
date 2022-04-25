import axios, { AxiosResponse } from 'axios';
import qs from 'qs';
import { Config } from 'react-native-config';

import { Interceptor } from '../interfaces/interceptor.interface';

const axiosInstance = axios.create({
  baseURL: Config.BASE_URL
});

/**
 * Service for making http requests
 */
const apiService = {
  /**
   * Sends a GET request to an endpoint
   * @param url the endpoint
   * @param config the request config
   */
  get(url: string, config?: any): Promise<AxiosResponse<any>> {
    return axiosInstance.get(url, {
      params: config,
      paramsSerializer: (params: any) => qs.stringify(params),
    });
  },

  /**
   * Attaches an interceptor the axios instance
   * @param interceptor the interceptor to attach
   */
  attachInterceptor: (interceptor: Interceptor): void => {
    if (interceptor.request) {
      axiosInstance.interceptors.request.use(
        interceptor.request.onFulfilled,
        interceptor.request.onRejected,
      );
    }
    if (interceptor.response) {
      axiosInstance.interceptors.response.use(
        interceptor.response.onFulfilled,
        interceptor.response.onRejected,
      );
    }
  },
};
export default apiService;

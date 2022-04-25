import { AxiosError } from 'axios';
import { Interceptor } from '../interfaces/interceptor.interface';

/**
 * Interceptor for error responses
 */
const errorInterceptor: Interceptor = {
  response: {
    onRejected(error: AxiosError<any>) {
      return Promise.reject(error?.response?.data);
    },
  },
};
export default errorInterceptor;
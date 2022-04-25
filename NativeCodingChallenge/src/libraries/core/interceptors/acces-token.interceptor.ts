import { AxiosRequestConfig } from "axios";
import { Interceptor } from "../interfaces/interceptor.interface";
import Config from "react-native-config";


/**
 * Interceptor for setting the ACCESS token in the request headers
 */

const accesTokenInterceptor: Interceptor ={
    request:{
        onFulfilled(value: AxiosRequestConfig){
            const accessToken = Config.FR_ACCESS_TOKEN;
                value.headers['fr-access-token'] = accessToken
            return value;
        }
    }
}
export default accesTokenInterceptor;
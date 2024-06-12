import axios from 'axios';
import { cancelRequestInterceptors, getRequestLog } from './interceptor';
import type { FetchFunc, CommonResponsePrefix } from '@/types/service';

const http = axios.create({
  timeout: 20000,
  baseURL: import.meta.env.VITE_BASE_URL,
});

cancelRequestInterceptors(http);
// getRequestLog(http);

/**
 * 直接将response data抛出
 */
http.interceptors.response.use(
  function (response) {
    // console.log('[Response]:', response.config?.url, '\n', response);
    // return response.data;
    return response;
  },
  function (error) {
    // console.error('[Response-error]:', error);
    return Promise.reject(error);
  },
);

// const require = {
//   get()
// }

type GetParams = Parameters<typeof http.get>;
const returnGetData = async <T = any>(...arg: GetParams) => {
  const { data } = await http.get<CommonResponsePrefix<T>>(...arg);
  return data;
};

type DeleteParams = Parameters<typeof http.delete>;
const returnDeleteData = async <T = any>(...arg: DeleteParams) => {
  const { data } = await http.delete<CommonResponsePrefix<T>>(...arg);
  return data;
};

type PostParams = Parameters<typeof http.post>;
const returnPostData = async <T = any>(...arg: PostParams) => {
  const { data } = await http.post<CommonResponsePrefix<T>>(...arg);
  return data;
};

const returnPutData = async <T = any>(...arg: PostParams) => {
  const { data } = await http.put<CommonResponsePrefix<T>>(...arg);
  return data;
};

export default {
  get: returnGetData,
  delete: returnDeleteData,
  post: returnPostData,
  put: returnPutData,
};

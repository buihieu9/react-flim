import axios from 'axios'
import queryString from 'query-string'

const axiosClient = axios.create(
    {
        baseURL=process.env.API_BASE_URL,
        headers:{
            'content-type': 'application/json',
        },
        paramsSerializer: params => queryString.stringify(params),
    }
)
axiosClient.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

export default axiosClient
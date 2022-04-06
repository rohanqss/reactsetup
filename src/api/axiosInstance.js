import axios from "axios";
import { BASE_URL } from "./urls";
import store from "../store";
import { SESSION_EXPIRED } from "../actions/types";
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  transformResponse: [
    function (data) {
      // Do whatever you want to transform the data
      // console.log(data);
      return data;
    },
  ],
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    var user = localStorage.getItem("user");
    if (user !== null) {
      const parsedUser = JSON.parse(user);
      var accessToken = parsedUser.sessionId;
      // console.log("inside request interceptors-->");
      // config.headers.Authorization = accessToken ? `Bearer ${accessToken}` : '';
      // config.headers.Authorization = "token " + accessToken;
      config.headers.Authorization = "Bearer " + accessToken;
    }

    // console.log(config);
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    const res = JSON.parse(response.data);
    if (res.code === 401 && res.message === "Unknown user ") {
      const { dispatch } = store;
      dispatch({
        type: SESSION_EXPIRED,
      });
      return;
    }
    return Promise.resolve(response);
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosInstance;

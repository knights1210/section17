import Vue from "vue";
import axios from "axios";
import App from "./App.vue";

Vue.config.productionTip = false;

axios.defaults.baseURL =
  "https://firestore.googleapis.com/v1/projects/vuejs-http-217c0/databases/(default)/documents";

  

const interceptorRequests = axios.interceptors.request.use(
  config => {
    return config;
   },
  error => {
    return Promise.reject(error)
  }
);
axios.interceptors.response.use(
  response => {
    return response;
   },
  error => {
    return Promise.reject(error)
  }
);
console.log(interceptorRequests);

axios.interceptors.request.eject(interceptorRequests);
new Vue({
  render: (h) => h(App),
}).$mount("#app");

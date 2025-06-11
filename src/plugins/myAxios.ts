import axios from "axios";

//创建axios实例
const myAxios = axios.create({
  baseURL: 'http://localhost:8080',
});
//允许携带cookie
myAxios.defaults.withCredentials = true;
//请求拦截器
myAxios.interceptors.request.use(function (config){
    return config;
}, function (error){
    return Promise.reject(error);
});
//响应拦截器
myAxios.interceptors.response.use(function (response){
    return response;
}, function (error){
    return Promise.reject(error)
});
//导出axios实例
export default myAxios;
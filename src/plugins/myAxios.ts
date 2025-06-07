import axios from "axios";

//创建axios实例
const myAxios = axios.create({
  baseURL: 'http://localhost:8080',
});
//请求拦截器
myAxios.interceptors.request.use(function (config){
    console.log('我把你的请求拦截了，通过');
    return config;
}, function (error){
    console.log('我把你的请求拦截了，不通过');
    return Promise.reject(error);
});
//响应拦截器
myAxios.interceptors.response.use(function (response){
    console.log('我收到你的响应了');
    return response;
}, function (error){
    return Promise.reject(error)
});
//导出axios实例
export default myAxios;
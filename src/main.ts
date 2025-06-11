//引入主页面
import { createApp } from 'vue';
import App from './App.vue';
//引入路由
import { createWebHistory, createRouter } from 'vue-router';
import routes from "./config/route.ts";
//创建主页面App
const app=createApp(App)
//创建路由
const router = createRouter({
    history: createWebHistory(),
    routes,
})
//挂载路由
app.use(router)
//渲染index.html页面中的‘app’区块
app.mount('#app')


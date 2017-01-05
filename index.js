import Vue from "vue"
import VueRouter from "vue-router"
import Article from "./vue/article.vue"
import Content from "./vue/content.vue"
Vue.use(VueRouter);
//获取路由模板
const article = Article;
const content = Content;

//定义路由

const routes = [
    {path:'/',component:article},
    {path:'/article',component:article},
    {path:'/content',component:content}
];

//创建router实例

const router = new VueRouter({
    routes
});

//创建和挂载根实例

const app = new Vue({
    router
}).$mount('#app')
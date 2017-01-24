import Vue from "vue"
import VueRouter from "vue-router"
import VueResource from "vue-resource"
/*引入ElementUI*/
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './common.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import index from "./vue/index.vue"
import Article from "./vue/article.vue"
import Content from "./vue/content.vue"

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper);
//获取路由模板
const article = Article;
const content = Content;

//定义路由

const routes = [
    {path:'/',component:index},
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
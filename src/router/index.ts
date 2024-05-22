import { createRouter, createWebHistory } from 'vue-router'
import HomeVue from '@/views/Home.vue'
import AboutVue from '@/views/About.vue'
//创建一个路由
const router = createRouter({
  history: createWebHistory(),
  routes: [
    //重定向
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomeVue },
    { path: '/about', component: AboutVue }
  ]
})
export default router

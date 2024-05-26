import { createRouter, createWebHistory } from 'vue-router'
// import HomeVue from '@/views/Home.vue'
// import AboutVue from '@/views/About.vue'
const AboutVue = () => import(/*webpackChunkName:'about'*/ '@/views/About.vue')
//创建一个路由
const router = createRouter({
  history: createWebHistory(),
  routes: [
    //重定向
    { path: '/', redirect: '/home' },
    {
      name: 'home',
      path: '/home',
      component: () => import(/*webpackChunkName:'home'*/ '@/views/Home.vue'),
      meta: {
        name: 'zzy',
        age: 18
      },
      children: [
        {
          path: 'recommend', // /home/recommend
          component: () => import('@/views/HomeRecommend.vue')
        },
        {
          path: 'homeranking',
          component: () => import('@/views/HomeRanking.vue')
        }
      ]
    },
    { path: '/about', component: AboutVue },
    {
      path: '/user/:id',
      component: () => import('../views/User.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/NotFound.vue')
    }
  ]
})
export default router

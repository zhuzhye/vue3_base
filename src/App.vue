<template>
  <div>
    <router-view></router-view>
    <div>
      <!-- 路由链接 -->
      <router-link :to="{ path: '/home' }" replace>首页</router-link>
      <router-link to="/about" replace>关于</router-link>
      <router-link to="/user/123" replace>用户123</router-link>
      <router-link to="/user/321" replace>用户321</router-link>
      <span @click="homeSpanClick">首页</span>
      <span @click="aboutSpanClick">关于</span>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function homeSpanClick() {
  router.push('/home')
}
function aboutSpanClick() {
  router.push({ path: '/about', query: { name: 'zzy' } })
}
</script>
<style scoped>
.router-link-active {
  color: red;
}
</style>

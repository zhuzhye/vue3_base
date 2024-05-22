<template>
  <div>
    <router-view></router-view>
    <div>
      <!-- 路由链接 -->
      <router-link :to="{ path: '/home' }" replace>首页</router-link>
      <router-link to="/about" replace>关于</router-link>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.router-link-active {
  color: red;
}
</style>

<template>
  <div>您配置{{ $route.params.pathMatch }}的页面暂时无法找到</div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
console.log(route.params)
</script>

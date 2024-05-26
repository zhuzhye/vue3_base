<template>
  <div>About</div>
  <div>{{ $route.query }}</div>
  <button @click="backBtnClick">返回</button>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
function backBtnClick() {
  router.back()
}
</script>

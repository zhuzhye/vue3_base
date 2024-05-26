<template>
  <div>{{ $route.params.id }}</div>
</template>
<script setup lang="ts">
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
const route = useRoute()
console.log(route.params.pathMatch)
onBeforeRouteUpdate((to, from) => {
  console.log(from, 'from')
  console.log(to, 'to')
})
</script>

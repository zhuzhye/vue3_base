<template>
  <div>{{ info }}</div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const info = ref(0)
function showInfo() {
  console.log('Hello, World!')
}
defineExpose({
  showInfo,
  info
})
</script>

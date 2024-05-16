<template>
  <div>
    <h2 ref="title">我是标题</h2>
    <button ref="titleRef">我是标题</button>
    <button @click="getElement">getElement</button>
    <ShowInfo></ShowInfo>
  </div>
</template>

<script setup lang="ts">
import ShowInfo from './ShowInfo.vue'
import { ref } from 'vue'
const titleRef = ref()
function getElement() {
  console.log(titleRef.value)
}
</script>

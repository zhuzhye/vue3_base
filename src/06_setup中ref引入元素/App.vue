<template>
  <div>
    <h2 ref="title">我是标题</h2>
    <button ref="titleRef">我是标题</button>
    <button @click="getElement">getElement</button>
    <ShowInfo ref="showInfoRef"></ShowInfo>
  </div>
</template>

<script setup lang="ts">
import ShowInfo from './ShowInfo.vue'
import { onMounted, ref } from 'vue'
const titleRef = ref()
const showInfoRef = ref()

function getElement() {
  console.log(titleRef.value)
}
onMounted(() => {
  console.log(showInfoRef.value.info++)
})
</script>

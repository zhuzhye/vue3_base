<template>
  <div>AppCotent</div>
  {{ message }}
  <button @click="message = 'hello vue3'">修改message</button>
  {{ info }}
  <button @click="info.name = 'zs'">修改info.name</button>
</template>
<script lang="ts" setup>
import { reactive, ref, watch } from 'vue'
//定义数据
const message = ref('hello world')
const info = reactive({
  name: 'zzy',
  age: 18
})
//监听数据变化
watch(message, (newValue, oldValue) => {
  console.log(newValue, oldValue)
})
watch(info, (newValue, oldValue) => {
  console.log(newValue, oldValue)
})
</script>

<template>
  <div>AppCotent</div>
  {{ message }}
  <button @click="message = 'hello vue3'">修改message</button>
  {{ info }}
  <button @click="info.name = 'zs'">修改info.name</button>
  <button @click="info.name = 'zsx'">修改info.name</button>
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
//默认深度监听
// watch(
//   info,
//   (newValue, oldValue) => {
//     console.log(newValue, oldValue)
//     newValue === oldValue
//   },
//   {
//     //是否立即执行
//     immediate: true,
//     deep: true
//   }
// )
// //3.监听reactive数据变化后，获取普通对象
// watch(
//   () => ({ ...info }),
//   (newValue, oldValue) => {
//     console.log(newValue, oldValue, 'info')
//   },
//   {
//     deep: true
//   }
// )
watch(
  [() => ({ ...info }), message],
  (newValue, oldValue) => {
    console.log(newValue, oldValue, '多个数据监听')
  },
  {
    deep: true
  }
)
</script>

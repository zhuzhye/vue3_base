<template>
  <div>当前计数{{ counter }}</div>
  <div>{{ name }}</div>
  <button @click="counter++">+!</button>
  <button @click="name = 'zzx'">修改name</button>
</template>
<script lang="ts" setup>
import { watchEffect, ref } from 'vue'
const counter = ref(0)
const name = ref('name')
// 1.watchEffect传入的函数默认会立即执行
// 2.在执行过程中，会自动的收集以来（依赖哪些响应式数据）
const stopWatch = watchEffect(
  (onInvalidate) => {
    const timer = setTimeout(() => {
      console.log('请求成功')
    }, 2000)
    console.log('监听开始', counter.value, name.value)
    //判断counter.value>10
    if (counter.value > 10) {
      // 3.停止监听
      stopWatch()
    }
    //在这个函数中清除额外的副作用
    onInvalidate(() => {
      clearTimeout(timer)
      console.log('继续执行')
    })
  },
  { flush: 'post' }
)
</script>

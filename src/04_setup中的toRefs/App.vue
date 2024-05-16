<template>
  <div>
    <h2>info:{{ name }}-{{ age }} - {{ height }}</h2>
    <button @click="age++">修改age</button>
    <button @click="height++">修改height</button>
  </div>
</template>
<script lang="ts" setup>
import { reactive, toRefs, toRef } from 'vue'
const info = reactive({
  name: 'zzy',
  age: 19,
  height: 1.88
})
// reactive 被解构后会变成普通的值，失去响应式
// const { name, age } = info
const { name, age } = toRefs(info)

const height = toRef(info, 'height')
</script>

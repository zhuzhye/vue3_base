<template>
  <div>
    <form>账号：<input type="text" v-model="account.username" /></form>
    <form>密码：<input type="text" v-model="account.password" /></form>
  </div>
  <ShowInfo name="text" :age="19"></ShowInfo>
</template>
<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue'
import ShowInfo from './ShowInfo.vue'
import type { userType } from './types'
//定义相应式数据 reactive / ref
//强调:ref也可以重新定义复杂的数据类型
const info = ref({})
console.log(info.value)
//1.reactive的应用场景
//1.1 条件一：reactive应用与本地的数据
//1.2 条件二：多个数据之间有关系/联系（聚合的数据，组织在一起会有特定的作用）
const account = reactive<userType>({
  username: '',
  password: 0
})
console.log(account)
//2.其他常见的场景：其他的场景基本都使用ref（computed）
//2.1定义本地的简单数据
const message = ref<string>('hello word')
const counter = ref(0)
console.log(message, counter)
//2.定义从网络中获取的数据使用ref
const musics = ref<string[]>([])

onMounted(() => {
  const serverMusic = ['海阔天空', '小苹果']
  musics.value = serverMusic
})
</script>

<template>
  <div>
    <h2>message:{{ message }}</h2>
    <button @click="changeMessage">修改message</button>
    <h2>账号：{{ account.username }}</h2>
    <h2>密码：{{ account.password }}</h2>
    <button @click="changeAcount">修改账号密码</button>
    <hr />
    <!-- 默认情况想在template中ref时，vue会自动对其进行解包（取出value的值） -->
    <h2>counter:{{ counter }}</h2>
    <button @click="increment">+1</button>
    <hr />
    <!-- 使用的时候不需要写.value -->
    <!-- 但是在template中修改的时候需要写.value -->
    <h2>当前计数{{ info.counter }}</h2>
    <button @click="info.counter.value++">+1</button>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { userType } from './types'
// 1.定义普通的数据，可以正常使用
// 缺点：数据不是响应式的
let message: string = 'hello world'
// 2.定义响应式数据
// 2.1reactive:定义复杂类型数据

function changeMessage() {
  message = '你好'
  console.log(message)
}

const account = reactive<userType>({
  username: 'zzy',
  password: 12345
})
//2.2ref函数：定义简单类型的数据（也可以定义复杂类型的数据）
const counter = ref<number>(0)
function increment() {
  counter.value++
}

// 3. Vue3版本3.1 ref是浅层解包

const info = {
  counter
}
function changeAcount() {
  account.username = 'code'
  account.password = 123456
}
</script>

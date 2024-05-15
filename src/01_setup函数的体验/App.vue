<template>
  <div id="app">
    <!-- template 变量 ref会自动解包 -->
    {{ counter }}
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>
<script>
import UserCounter from './hooks/useCounter'
export default {
  setup() {
    const { counter, increment, decrement } = UserCounter()
    return {
      counter,
      increment,
      decrement
    }
  }
}
</script>
<style scoped></style>

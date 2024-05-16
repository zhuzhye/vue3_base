<template>
  <div>AppCount:{{ info }}</div>
  <button @click="showInfoClick">kobe</button>
  <!-- 代码没有错误，但是违背了单向数据流规范 -->
  <!-- <button @click="info.name = 'kobe'">x</button> -->
  <!-- 正确的做法 -->
  <!-- readonly -->
  <h2>roInfo :{{ roInfo }}</h2>
  <!-- 代码就会无效（报警告） -->
  <!-- <button @click="roInfo.name = 'bb'"></button> -->
  <!-- 正确做法 -->
  <button @click="roInfoBtnClick">ccc</button>
</template>
<script lang="ts" setup>
defineProps({
  //reactive 数据
  info: {
    type: Object,
    default: () => {}
  },
  roInfo: {
    type: Object,
    default: () => {}
  }
})
const emit = defineEmits(['changeInfoName', 'changeRoInfo'])

function showInfoClick() {
  emit('changeInfoName', 'kobe')
}

function roInfoBtnClick() {
  emit('changeRoInfo', 'ccc')
}
</script>

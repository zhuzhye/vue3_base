<template>
  <div>
    <h2>showInfo {{ info }}</h2>
    <ShowInfo
      :info="info"
      @changeInfoName="changeInfoName"
      :roInfo="roInfo"
      @changeRoInfo="changeRoInfo"
    ></ShowInfo>
  </div>
</template>
<script lang="ts" setup>
import { reactive, readonly } from 'vue'
import ShowInfo from './ShowInfo.vue'
//本地定义多个数据，都需要传递给组件
const info = reactive({
  name: 'zzy',
  age: 18,
  height: 1.88
})

function changeInfoName(name: string) {
  info.name = name
}
const roInfo = readonly(info)
function changeRoInfo(name: string) {
  info.name = name
}
</script>

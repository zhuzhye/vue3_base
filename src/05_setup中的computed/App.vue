<template>
  <div>AppCount:{{ fullName }}</div>
  <button @click="setFullName">cc</button>
</template>
<script setup lang="ts">
import { reactive, computed } from 'vue'

const names = reactive({
  fistName: 'kobe',
  lastName: 'byant'
})
// const fullName = computed(() => {
//   return names.fistName + names.lastName
// })
const fullName = computed({
  set: function (newVal: string) {
    const templateNames = newVal.split(' ')
    names.fistName = templateNames[0]
    names.lastName = templateNames[1]
  },
  get() {
    return names.fistName + names.lastName
  }
})
function setFullName() {
  fullName.value = 'cc xx'
}
</script>

<template>
  <div>{{ name }} - {{ age }}</div>
</template>
<script lang="ts" setup>
defineProps({
  name: {
    type: String,
    defalut: ''
  },
  age: {
    type: Number,
    default: 18
  }
})
</script>

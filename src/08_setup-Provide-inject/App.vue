<template>
  <div>
    <ShowInfo></ShowInfo>
  </div>
</template>
<script lang="ts" setup>
import { provide } from 'vue'
import ShowInfo from './ShowInfo.vue'
provide('theme', 'dark')
</script>

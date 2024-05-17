<template>
  <div>{{ theme }}</div>
</template>
<script lang="ts" setup>
import { inject } from 'vue'
const theme = inject('theme')
</script>

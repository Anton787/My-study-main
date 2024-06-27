<template>
  <div>
    <label><input type="checkbox">{{ title }}</label>
  </div>
</template>
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: String,
  name: String,
})
</script>
<template>
  <div>
    <h3>Фильтры</h3>
    <div class="components">
      <filter-element
        v-for="(e, i) in elements"
        :key="i"
        :title="e" />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import filterElement from './components/filter-element.vue';

const props = defineProps({
  elements: Array,
})
</script>

<style scoped>
.components {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>

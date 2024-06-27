<template>
  <div>
    Привет! <br>
    <filter-component :elements="items" />
    <button @click="inc">Тык</button> <br>
    {{ count }}
    <ul>
      <li v-for="i in items" :key="i">
        <span v-if="i % 2 == 0">Тык</span>
        <span v-else>{{ i }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import FilterComponent from './components/filter/index.vue'

const count = ref(0);
const items = ref([]);

const filters = [
  "Новелла",
  "Сайт"
]

function inc() {
  count.value += 1
  items.value.push(count.value)
}

</script>

<template>
    <h1>{{ name }}Note</h1>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();
const name = computed(() => {
    return store.state.name;
})
</script>

<style scoped>
h1{
    color: blue;
    margin: 0 auto;
}
</style>
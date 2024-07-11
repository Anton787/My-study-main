<template>
  <div>
    <calc-component v-model="res1"/> 
    <calc-component znak="+"/>
    <calc-component znak="*"/>
    <calc-component znak="/"/>

    {{ res1 }}
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CalcComponent from './components/filter/components/calc-component.vue';

const res1 = ref();

</script>

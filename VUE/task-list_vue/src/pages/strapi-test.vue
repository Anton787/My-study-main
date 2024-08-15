<template>
<header>

</header>
<main>
    <input type="text" v-model="id"> <button @click="getPostBtn">Swap</button>
    <!-- <div v-for="(post, i) in data" :key="i">
        <h2>{{ post.title }}</h2>
        <p> {{ post.createdAt }}</p>
    </div> -->
    <div v-if="data">
        <h2>{{ data.attributes?.title }}</h2>
        <p> {{ data.attributes?.createdAt }}</p>
    </div>
</main>
</template>

<style scoped>

</style>

<script setup>
import { getPosts, getPost } from '../api/index.js';
import { onBeforeMount, ref } from 'vue';

// const data = ref([]);
// onBeforeMount(async () =>{
//     const res = await getPosts();
//     data.value = res;
// });

const id = ref('1');
const data = ref();

const getPostBtn = async () =>{
    const res = await getPost(id.value);
    data.value = res;
};



</script>
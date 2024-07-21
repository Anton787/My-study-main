<template>
    <div>
        <h1>Home Page</h1>
        <router-link to="/task">TASK</router-link>
        <button @click="goPage">Go to</button>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goPage() {
    router.push({
        name: 'Task',
        query: {
            id: 1,
            name: 'DSAd sad'
    }
    });
}
</script>
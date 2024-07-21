<template>
    <div>
        <h1>Home Page {{ name }}</h1>
        <router-link to="/task">TASK</router-link>
        <button @click="goPage">Go to</button>
        <input type="text" placeholder="Смена имени" v-model="newName"> <button @click="setName">Изменить</button>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

const newName = ref('')

const store = useStore();
const name = computed(() => {
    return store.state.name;
});

function setName(){
    store.dispatch('A_SET_LOCALSTORAGE', newName.value);
    newName.value = '';
}

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
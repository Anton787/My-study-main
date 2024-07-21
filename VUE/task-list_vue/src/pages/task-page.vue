<template>
    <div class="viev-note">
        <h4>{{ title }}</h4>
        <p>{{ text }}</p>
        <div class="interact-note">
            <icon-btn text="X" @click="Delet(id)"></icon-btn>
            <icon-btn text="Cancel" @click="Cancel"></icon-btn>
            <icon-btn text="Complite" @click="Complite"></icon-btn>
        </div>
    </div>
</template>

<script setup>
import IconBtn from '../components/icon-btn.vue';
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
import { computed } from 'vue';
import { defineEmits } from 'vue';

const emit = defineEmits('Delet','Complite', 'Cancel')
const route = useRoute();
const router = useRouter();

const title = computed(() => route.query.title)
const text = computed(() => route.query.text)
const id = computed (() => route.query.id)

function Delet(id){
    router.push({
        name: 'Task',
        query: {
            delet: id,
        }
    });
}


</script>

<style scoped>
.viev-note{
    display: flex;
    flex-direction: column;
    width: 400px;
    gap: 20px;
    background-color: #6e6e81;
    border-radius: 5px;
    padding: 10px 5px;
}

.interact-note{
    display: flex;
    gap: 5px;
    justify-content: space-around;
}
</style>
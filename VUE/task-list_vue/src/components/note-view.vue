<template>  
    <div class="viev-note">
        <h4>{{ title }}</h4>
        <p>{{ text }}</p>
        <div class="interact-note">
            <icon-btn text="X" @click="Delet"></icon-btn>
            <icon-btn text="Cancel" @click="Cancel"></icon-btn>
            <icon-btn text="Complite" @click="Complite"></icon-btn>
            <icon-btn text="TaskPage" @click="Page"></icon-btn>
        </div>
    </div>
</template>

<script setup>
import IconBtn from './icon-btn.vue';
import { defineEmits } from 'vue';

const emit = defineEmits('Delet','Complite', 'Cancel', 'Page')

function Page(){
    emit('Page')
}
function Delet(){
    emit('Delet')
}

function Complite(){
    emit('Complite')
}

function Cancel(){
    emit('Cancel')
}

const props = defineProps({
    title: String,
    text: String,
})
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
<template>
    <div class="viev-note">
        <h4>{{ title }}</h4>
        <p>{{ text }}</p>
        <div class="interact-note">
            <icon-btn text="X" @click="Delet"></icon-btn>
            <icon-btn text="Return" @click="Return"></icon-btn>
            <icon-btn text="Cancel" @click="Cancel"></icon-btn>
        </div>
    </div>
</template>

<script setup>
import IconBtn from './icon-btn.vue';

import { defineEmits } from 'vue';

const emit = defineEmits('Delet','Cancel', 'Return')

function Delet(){
    emit('Delet')
}

function Cancel(){
    emit('Cancel')
}

function Return(){
    emit('Return')
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
    width: 260px;
    gap: 20px;
    background-color: #86aa8d;
    border-radius: 5px;
    padding: 10px 5px;
}

.interact-note{
    display: flex;
    gap: 5px;
    justify-content: space-around;
}
</style>
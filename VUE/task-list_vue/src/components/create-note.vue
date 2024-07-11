<template>
    <div class="add-note">
        <textarea v-model="postTitle"></textarea>
        <textarea v-model="postText"></textarea>
        <icon-btn text="Add" @click="createPost"></icon-btn>
    </div>
</template>

<script setup>
import IconBtn from './icon-btn.vue';
import { defineEmits } from 'vue';
import { ref } from 'vue';

const emit = defineEmits(['createPost'])

const infoPost = ref()

const postText = ref('')
const postTitle = ref('')

function createPost (){
    if(postText.value && postTitle.value){
        emit('createPost', {
        title: postTitle.value,
        text: postText.value,
    })
        postText.value = '';
        postTitle.value = '';
    }
}
</script>

<style scoped>
.add-note{
    display: flex;
    gap: 20px;
    align-items: center;
}
</style>
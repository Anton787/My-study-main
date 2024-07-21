<template>
    <h1 v-if="posts.length == 0 && complitePosts.length == 0 && cancelTask.length == 0">Ты ничего ещё не удалил, иди от сюда</h1>
    <div class="view-note" v-if="posts.length > 0">
        <h4>Удалённые текущие задачи</h4>
        <div class="tasks-view">
            <delet-post
            v-for="(post, i) in posts"
            :key="i"
            :title="post.title"
            :text="post.text"></delet-post>
        </div>
    </div>
    <div class="view-note" v-if="complitePosts.length > 0">
        <h4>Удалённые выполненые задачи</h4>
        <div class="tasks-view">
            <delet-complite
            v-for="(post, i) in complitePosts"
            :key="i"
            :title="post.title"
            :text="post.text"
            @Delet="Delet(i,complitePosts)"></delet-complite>
        </div>
    </div>
    <div class="view-note" v-if="cancelTask.length > 0">
        <h4>Удалённые отменённые задачи</h4>
        <div class="tasks-view">
            <delet-cancel
            v-for="(post, i) in cancelTask"
            :key="i"
            :title="post.title"
            :text="post.text"
            @Delet="Delet(i, cancelTask)"></delet-cancel>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import DeletPost from '../components/delet-post.vue';
import DeletComplite from '../components/delet-complite.vue';
import DeletCancel from '../components/delet-cancel.vue';

let posts = ref([])

let complitePosts = ref([])

let cancelTask = ref([])

let count_tasks = localStorage.getItem("id");
for(let i = 1; i <= count_tasks; i++){
    let Tasktype = 'type' + i;
    let Tasktext = 'text' + i;
    let Tasktitle = 'title' + i;
    if(localStorage.getItem(Tasktype) == 'Now'){
        posts.value.push({
            type: 'Now',
            title: localStorage.getItem(Tasktitle),
            text: localStorage.getItem(Tasktext)
        });
    }else if(localStorage.getItem(Tasktype) == 'Complite'){
        complitePosts.value.push({
            type: 'Now',
            title: localStorage.getItem(Tasktitle),
            text: localStorage.getItem(Tasktext)
        });
    }else{
        cancelTask.value.push({
            type: 'Now',
            title: localStorage.getItem(Tasktitle),
            text: localStorage.getItem(Tasktext)
        });
    }
}
console.log(posts);

</script>

<style scoped>
.tasks-view{
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
}

.view-note{
    display: flex;
    flex-direction: column;
    background-color: gray;
    border-radius: 15px;
    padding: 20px 10px;
    gap: 25px;
    margin-top: 30px;
}

.view-note > h4{
    color: #28103f;
}

complite-task{
    margin-top: 50px;
}
</style>
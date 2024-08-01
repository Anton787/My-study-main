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
import { ref, computed } from 'vue';
import DeletPost from '../components/delet-post.vue';
import DeletComplite from '../components/delet-complite.vue';
import DeletCancel from '../components/delet-cancel.vue';
import { useStore } from 'vuex';

const store = useStore();

let posts = computed(() => {
    return store.state.now;
});

let complitePosts = computed(() => {
    return store.state.complited;
});

let cancelTask = computed(() => {
    return store.state.cancel;
});

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
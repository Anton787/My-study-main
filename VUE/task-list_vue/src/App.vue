<template>
  <header>
    <header-note></header-note>
  </header>
  <main>
    <create-note @createPost="AddPost"></create-note>
    <div class="view-note">
      <h4>Текущий список задач</h4>
      <div class="tasks-view">
        <note-view
        v-for="(post, i) in posts"
        :key="i"
        :title="post.title"
        :text="post.text"
        @Delet="Delet(i, posts)"
        @Complite="Complite(i)"
        @Cancel="Cancel(i)"></note-view>
      </div>
    </div>
    <div class="view-note">
      <h4>Выполненые задачи</h4>
      <div class="tasks-view">
        <complite-task
            v-for="(post, i) in complitePosts"
            :key="i"
            :title="post.title"
            :text="post.text"
            @Delet="Delet(i,complitePosts)"></complite-task>
      </div>
    </div>
    <div class="view-note">
      <h4>Отменённые задачи</h4>
      <div class="tasks-view">
        <cancel-task
            v-for="(post, i) in cancelTask"
            :key="i"
            :title="post.title"
            :text="post.text"
            @Delet="Delet(i, cancelTask)"></cancel-task>
      </div>
    </div>
  </main>
</template>

<script setup>
import CreateNote from './components/create-note.vue';
import NoteView from './components/note-view.vue';
import HeaderNote from './components/header-note.vue';
import CompliteTask from './components/complite-task.vue';
import CancelTask from './components/cancel-task.vue';
import {ref} from 'vue';

let posts = ref([
  {
    title: "First",
    text: "FirstText"
  },
  {
    title: "Second",
    text: "SecondText"
  }])

  let complitePosts = ref([{
    title: "Second",
    text: "SecondText"
  }])

  let cancelTask = ref([{
    title: "Second",
    text: "SecondText"
  }])

function AddPost (x){
  posts.value.push({
    title: x.title,
    text: x.text,
  })
}

function Delet(i,m){
  m.splice(i,1)
}

function Complite(i){
  let a = posts.value.slice(i,i+1)
  console.log(a[0].title)
  complitePosts.value.push({
    title: a[0].title,
    text: a[0].text
  })
  posts.value.splice(i,1)
}

function Cancel(i){
  let a = posts.value.slice(i,i+1)
  console.log(a[0].title)
  cancelTask.value.push({
    title: a[0].title,
    text: a[0].text
  })
  posts.value.splice(i,1)
}
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

<!-- Как проверить где именно я нажимаю то кнопку? -->
<!--  -->
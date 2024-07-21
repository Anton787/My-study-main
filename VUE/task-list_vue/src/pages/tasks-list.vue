<template>
  <header>
    <div>
      <router-link to="/">
        HomePage
      </router-link>
    </div>
    <header-note></header-note>
    <router-link to="/deletTask">Delet Task</router-link>
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
        @Cancel="Cancel(i)"
        @Page="Page(post,i)"></note-view>
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
import CreateNote from '../components/create-note.vue';
import NoteView from '../components/note-view.vue';
import HeaderNote from '../components/header-note.vue';
import CompliteTask from '../components/complite-task.vue';
import CancelTask from '../components/cancel-task.vue';
import { useRouter, useRoute } from 'vue-router';
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const name = computed(() => {
  return store.state.name;
})

const router = useRouter();
const route = useRoute();

const id = computed(() => router.query.id);
const { delet } = route.query;

function Page(x,i){
  router.push({
    name: 'TaskPage',
    query: {
      title: x.title,
      text: x.text, 
      id: i,
    }
  });
}

let posts = ref([
  {
    type: "Now",
    title: "First",
    text: "FirstText"
  },
  {
    type: "Now",
    title: "Second",
    text: "SecondText"
  }])

  let complitePosts = ref([{
    type: "Complite",
    title: "Second",
    text: "SecondText"
  }])

  let cancelTask = ref([{
    type: "Cancel",
    title: "Second",
    text: "SecondText"
  }])

function AddPost (x){
  posts.value.push({
    type: "Now",
    title: x.title,
    text: x.text,
  })
}

function Delet(i,m){
  alert()
  if(localStorage.getItem("id") >= 1){
    // let id = localStorage.getItem("id");
    // id = Number(id) + 1;
    // localStorage.id = id;
    // let keyTitle = 'title' + String(id);
    // let keytext = 'text' + String(id);
    // let keyType = 'type' + String(id);
    // localStorage.setItem(keyTitle, m.slice(i,i+1)[0].title)
    // localStorage.setItem(keytext, m.slice(i,i+1)[0].text)
    // localStorage.setItem(keyType, m.slice(i,i+1)[0].type)
  } else{
    // localStorage.setItem("id", 1);
    // localStorage.setItem("type1", m.slice(i,i+1)[0].type)
    // localStorage.setItem("title1", m.slice(i,i+1)[0].title)
    // localStorage.setItem("text1", m.slice(i,i+1)[0].text)
  }
  m.splice(i,1)
}

function Complite(i){
  let a = posts.value.slice(i,i+1)
  console.log(a[0].title)
  complitePosts.value.push({
    type: "Complitle",
    title: a[0].title,
    text: a[0].text
  })
  posts.value.splice(i,1)
}

function Cancel(i){
  let a = posts.value.slice(i,i+1)
  console.log(a[0].title)
  cancelTask.value.push({
    type: "Cancel",
    title: a[0].title,
    text: a[0].text
  })
  posts.value.splice(i,1)
}

if(delet){Delet(delet,posts.value)}

console.log(posts.value);
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

header{
  display: flex;
  align-items: center;
  background-color: rgb(188, 126, 10);
  width: 100%;
  border-radius: 5px;
}

body{
  padding: 0;
}

.app{
  margin: 0;
  padding: 0;
}
</style>
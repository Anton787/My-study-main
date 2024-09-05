import { createRouter, createWebHistory } from 'vue-router';
import Main from '../pages/main/main.vue';
import Catalog from '../pages/catalog/feed.vue';
import ClieantProfile from '../pages/client-profile/profile.vue';
import CreateProject from '../pages/create-project/create.vue';
import ProjectPage from '../pages/project-page/project.vue';
import UserAuth from '../pages/user-auth/login.vue';
import UserPage from '../pages/user-page/account.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/feed',
      name: 'feed',
      component: Catalog
    },
    {
      path: '/profile',
      name: 'profile',
      component: ClieantProfile
    },
    {
      path: '/create',
      name: 'create',
      component: CreateProject
    },
    {
      path: '/Project',
      name: 'ProjectPage',
      component: ProjectPage
    },
    {
      path: '/login',
      name: 'Log in',
      component: UserAuth
    },
    {
      path: '/userPage',
      name: 'UserPage',
      component: UserPage
    }
  ]
})

export default router

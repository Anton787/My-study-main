import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/home-page.vue';
import TasksPage from '../pages/tasks-list.vue';
import PageTask from '../pages/task-page.vue';
import DeletTask from '../pages/delet-task.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/task',
        name: 'Task',
        component: TasksPage,
    },
    {
        path: '/taskPage',
        name: 'TaskPage',
        component: PageTask,
    },
    {
        path: '/deletTask',
        name: 'DeletTask',
        component: DeletTask,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
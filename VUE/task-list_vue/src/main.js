import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './routers/routes.js';

createApp(App)
    .use(router)
    .use(store)
    .mount('#app');

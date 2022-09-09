import {createApp} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import routes from './network/routes.js'
import request from "./network/request.js";

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App)
app.config.globalProperties.$request = request

app.use(router)

app.mount('#app')

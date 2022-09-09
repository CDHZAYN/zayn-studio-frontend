import {createApp} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import routes from './network/routes.js'
import axios from 'axios'

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App)

// axios.defaults.baseURL="http://localhost:8080"
axios.defaults.timeout=1000
axios.defaults.auth={
    username: 'user',
    password: '17a4ea76-3dc2-4b8d-a07b-639161b77dc1'
}
app.config.globalProperties.$axios = axios

app.use(router)

app.mount('#app')

import Games from "../components/games/Games.vue";
import Forum from "../components/forum/Forum.vue";
import Blog from "../components/blog/Blog.vue";
import Home from "../components/home/Home.vue";


export default [
    {
        path: '/',
        redirect: '/home'
    },
    {
        name: 'home',
        path: '/home',
        component: Home,
        color: '#FFCA02'
    }, {
        name: 'games',
        path: '/games',
        component: Games,
        color: '#E83A37'
    },
    {
        name: 'forum',
        path: '/forum',
        component: Forum,
        color: '#66CC33'
    }, {
        name: 'blog',
        path: '/blog',
        component: Blog,
        color: '#0E619E'
    }
]
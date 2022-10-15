import Games from "../components/games/Games.vue";
import Forum from "../components/forum/Forum.vue";
import Blog from "../components/blog/Blog.vue";
import Home from "../components/home/Home.vue";
import BAG from "../components/blogMaker/BAG.vue";


export default [
    {
        path: '/',
        redirect: '/home',
        show: false
    },
    {
        name: 'HOME',
        path: '/home',
        component: Home,
        color: '#FFCA02',
        show: true
    }, {
        name: 'GAMES',
        path: '/games',
        component: Games,
        color: '#E83A37',
        show: true
    },
    {
        name: 'FORUM',
        path: '/forum',
        component: Forum,
        color: '#66CC33',
        show: true
    }, {
        name: 'BLOG',
        path: '/blog',
        component: Blog,
        color: '#0E619E',
        show: true
    },
    {
        name: 'BAG',
        path: '/bag',
        component: BAG,
        color: '#FFCA02',
        show: false
    }
]
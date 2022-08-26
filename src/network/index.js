import Games from "../components/games/Games.vue";
import Forum from "../components/forum/Forum.vue";
import Blog from "../components/blog/Blog.vue";
import Home from "../components/home/Home.vue";


export default [
    {
        name: 'home',
        path: '',
        component: Home,
        alias: ['/home']
    },{
        name: 'games',
        path: '/games',
        component: Games
    },
    {
        name: 'forum',
        path: '/forum',
        component: Forum
    },{
        name: 'blog',
        path: '/blog',
        component: Blog
    }
]
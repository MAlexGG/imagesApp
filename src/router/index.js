import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Create from '../views/Create.vue';
import Show from '../views/Show.vue';

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/create',
        name: 'Create',
        component: Create
    },
    {
        path: '/show/:id',
        name: 'Show',
        component: Show
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
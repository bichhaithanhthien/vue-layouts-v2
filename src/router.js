import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import( '/src/views/Home'),
        meta: {
            layout: 'AppLayoutHome'
        }
    },
    {
        path: '/about',
        name: 'About',
        component: () => import( '/src/views/About'),
        meta: {
            layout: 'AppLayoutAbout'
        }
    },
    {
        path: '/contacts',
        name: 'Contacts',
        component: () => import( '/src/views/Contacts'),
        meta: {
            layout: 'AppLayoutContacts'
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router

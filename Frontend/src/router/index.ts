import { createRouter, createWebHistory } from "vue-router"

let router = createRouter({

    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../layout/index.vue')

        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/Login.vue')

        },
        {
            path: '/404',
            name: '404',
            component: () => import('../views/NotFound.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: '/404',
        }
    ]
})

export default router
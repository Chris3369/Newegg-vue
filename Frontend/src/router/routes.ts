export const constantRoutes = [
    {
        path: '/',
        name: 'layout',
        component: () => import('../layout/Layout.vue'),
        meta: {
            title: 'Layout',
            hidden: false
        },
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('../views/Home.vue'),
                meta: {
                    title: 'Home',
                    hidden: false
                }
            },
            {
                path: '/about',
                name: 'about',
                component: () => import('../views/About.vue'),
                meta: {
                    title: 'About',
                    hidden: false
                }
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue'),
        meta: {
            title: 'Login',
            hidden: true
        }
    },
    {
        path: '/404',
        name: '404',
        component: () => import('../views/NotFound.vue'),
        meta: {
            title: '404',
            hidden: true
        }
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404',
        meta: {
            hidden: true
        }
    }
]
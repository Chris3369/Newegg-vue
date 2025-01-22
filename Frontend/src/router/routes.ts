export const constantRoutes = [
    {
        path: '/',
        name: 'layout',
        component: () => import('../layout/Layout.vue'),
        redirect: '/home',
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
        ]
    },
    {
        path:'/management',
        name: 'management',
        component: () => import('../layout/Layout.vue'),
        meta: {
            title: 'Management',
            hidden: false
        },
        children: [
            {
                path: '/management/menu',
                name: 'menu-management',
                component: () => import('../views/MenuManagement.vue'),
                meta: {
                    title: 'Menu',
                    hidden: false
                }
            },
            {
                path: '/management/user',
                name: 'user-management',
                component: () => import('../views/UserManagement.vue'),
                meta: {
                    title: 'User',
                    hidden: false
                }
            },
            {
                path: '/management/role',
                name: 'role-management',
                component: () => import('../views/RoleManagement.vue'),
                meta: {
                    title: 'Role',
                    hidden: false
                }
            }
        ]
    },
    {
        path: '/screen',
        name: 'screen',
        component: () => import('../views/Screen.vue'),
        meta: {
            title: 'Screen',
            hidden: false
        }
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
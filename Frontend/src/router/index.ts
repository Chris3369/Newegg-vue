import { createRouter, createWebHistory } from "vue-router"
import { constantRoutes } from "./routes"
import pinia from '../store/index'
import userStore from "../store/user.store"

// 在组件外使用 store
// https://pinia.vuejs.org/zh/core-concepts/outside-component-usage.html
const store = userStore(pinia)

let router = createRouter({

    history: createWebHistory(import.meta.env.BASE_URL),
    routes: constantRoutes,
})

router.beforeEach((to: any, from: any, next) => {

    // 未登錄: 可以訪問 login, 但是不可以訪問其他頁面
    // 已登錄: 可以訪問所有頁面

    if (store.isLogin) {
        next()
    } else {
        if (to.path === '/login') {
            next()
        } else {
            next({ path: '/login', query: { redirect: to.path } })
        }
    }
})

router.afterEach((to: any, from: any) => {
})

export default router
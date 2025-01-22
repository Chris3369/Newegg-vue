import { createRouter, createWebHistory } from "vue-router"
import { constantRoutes } from "./routes"

let router = createRouter({

    history: createWebHistory(import.meta.env.BASE_URL),
    routes: constantRoutes
})

export default router
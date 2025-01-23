import { defineStore } from 'pinia'
import type { RouteRecordRaw } from 'vue-router'
import axios from '../lib/axios'
import { constantRoutes } from '../router/routes'

interface UserState {
    name: string,
    email: string,
    role: string,
    menuRoutes: RouteRecordRaw[]
}


let userStore = defineStore('user', {
    state: (): UserState => {
        const userData = localStorage.getItem('user')
        let user = userData ? JSON.parse(userData) : null

        user = user ? {
            ...user,
        } : {
            name: '',
            email: '',
            role: '',
        }

        return {
            ...user,
            menuRoutes: constantRoutes
        }
    },
    actions: {
        async login(loginForm: { email: string, password: string }) {

            try {
                const data: { name: string, email: string, role: string } = await axios.post('/auth/login', loginForm)
                this.name = data.name
                this.email = data.email
                this.role = data.role

                // 將 user 存入 localStorage
                localStorage.setItem('user', JSON.stringify({
                    name: this.name,
                    email: this.email,
                    role: this.role
                }))

                // async 返回成功的 promise
                return 'ok'

                // 另一種作法是 service 返回 token, 將 token 存入 localStorage
                // localStorage.setItem('token', data.token) 
            } catch (error: any) {
                return Promise.reject(error.response.data.message)
            }
        },
        async logout() {
            try {
                await axios.post('/auth/logout')

                this.name = ''
                this.email = ''
                this.role = ''
                this.menuRoutes = []

                localStorage.removeItem('user')
                return 'ok'
            } catch (error: any) {
                return Promise.reject(error.response.data.message)
            }
        }
    },
    getters: {}
})

export default userStore
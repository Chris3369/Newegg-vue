import { defineStore } from 'pinia'
import axios from '../lib/axios'

let userStore = defineStore('user', {
    state: () => {
        return {
            name: '',
            email: '',
            role: ''

            // 另一種作法是去 localStorage 取 token, 來實現持久化
            // token: localStorage.getItem('token')
        }
    },
    actions: {
        async login(loginForm: { email: string, password: string }) {

            try {
                const data: { name: string, email: string, role: string } = await axios.post('/auth/login', loginForm)
                this.name = data.name
                this.email = data.email
                this.role = data.role

                // async 返回成功的 promise
                return 'ok'

                // 另一種作法是 service 返回 token, 將 token 存入 localStorage
                // localStorage.setItem('token', data.token) 
            } catch (error: any) {
                return Promise.reject(error.response.data.message)
            }
        }
    },
    getters: {}
})

export default userStore
import { defineStore } from 'pinia'
import axios from '../lib/axios'

let userStore = defineStore('user', {
    state: () => {
        return {
            username: ''
        }
    },
    actions: {
        async login(loginForm: { username: string, password: string }) {
            const response = await axios.post('/login', loginForm)
        }
    },
    getters: {}
})

export default userStore
import axios from 'axios'
import { ElMessage } from 'element-plus'

let instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 5000
})

instance.interceptors.request.use((config) => {
    // config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

instance.interceptors.response.use((response) => {
    return response.data
}, (error) => {
    let message = ''
    let status = error.response.status

    switch (status) {
        case 400:
            message = '請求錯誤'
            break
        case 401:
            message = '未授權'
            break
        case 403:
            message = '禁止訪問'
            break
        case 404:
            message = '找不到資源'
            break
        case 500:
            message = '伺服器錯誤'
            break
        default:
            message = '未知錯誤'
            break
    }

    ElMessage({
        type: 'error',
        message,
    })

    return Promise.reject(error)
})

export default instance
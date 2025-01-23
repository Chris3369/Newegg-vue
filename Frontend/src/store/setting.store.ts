import { defineStore } from 'pinia'

interface SettingState {
    collapse: boolean
    refresh: boolean
}

const settingStore = defineStore('setting', {
    state: (): SettingState => {
        return {
            collapse: false,
            refresh: false
        }
    },
    actions: {
        toggleCollapse() {
            this.collapse = !this.collapse
        },
        toggleRefresh() {
            this.refresh = !this.refresh
        }
    }
})

export default settingStore
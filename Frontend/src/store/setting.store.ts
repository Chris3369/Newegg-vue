import { defineStore } from 'pinia'

interface SettingState {
    collapse: boolean
}

const settingStore = defineStore('setting', {
    state: (): SettingState => {
        return {
            collapse: false
        }
    },
    actions: {
        toggleCollapse() {
            this.collapse = !this.collapse
        }
    }
})

export default settingStore
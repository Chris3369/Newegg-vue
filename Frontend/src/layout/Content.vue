<template>
    <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
            <component :is="Component" v-if="flag"></component>
        </transition>
    </router-view>
</template>

<script setup lang='ts'>
import { ref, watch, nextTick } from 'vue'
import settingStore from '../store/setting.store'

const store = settingStore()

const flag = ref(true)

// watch 可以監聽 store 的響應式數據
watch(() => store.refresh, () => {
    flag.value = false

    // 数据的修改，同时会触发dom渲染，即执行一个同步修改数据任务，再执行一个dom渲染的异步任务，
    // 此时完成了一轮loop，如果此时去获取dom，那必然会在异步任务执行前获取，当然获取不到，
    // 想要获取更新后的dom，必须再一次开启一个时间循环，即使用nexttick
    nextTick(() => {
        flag.value = true
    })
})

</script>

<style scoped>
.fade-enter-from {
    opacity: 0;
}

.fade-enter-to {
    opacity: 1;
}

.fade-enter-active {
    transition: opacity 0.5s ease;
}
</style>
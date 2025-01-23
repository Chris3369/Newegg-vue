<template>
    <div class="container">
        <div class="slider" :class="settingStore.collapse ? 'collapse' : ''">
            <Logo />
            <el-scrollbar class="scrollbar">
                <el-menu :collapse="settingStore.collapse" background-color="#001529" text-color="white" active-text-color="#ffd04b"
                    :default-active="$route.path">
                    <Menu :menus="userStore.menuRoutes"></Menu>
                </el-menu>
            </el-scrollbar>
        </div>
        <div class="layout-tabbar" :class="settingStore.collapse ? 'collapse' : ''">
            <TabBar />
        </div>
        <div class="layout-content" :class="settingStore.collapse ? 'collapse' : ''">
            <Content />
        </div>
    </div>
</template>

<script setup lang='ts'>
import { useRoute } from 'vue-router'
import Logo from './Logo.vue'
import Menu from './Menu.vue'
import TabBar from './TabBar.vue'
import Content from './Content.vue'

import UserStore from '../store/user.store'
import SettingStore from '../store/setting.store'

const userStore = UserStore()
const settingStore = SettingStore()

const $route = useRoute()


</script>

<style scoped>
.container {
    width: 100%;
    height: 100vh;
}

.container .slider {
    width: 260px;
    height: 100vh;
    background-color: #001529;

    transition: all 0.3s ease;
}

.container .slider.collapse {
    width: 55px;
}

.container .layout-tabbar {
    width: calc(100vw - 260px);
    height: 50px;

    position: fixed;
    top: 0px;
    left: 260px;

    transition: all 0.3s ease;
}

.container .layout-tabbar.collapse {
    width: calc(100vw - 55px);
    left: 55px;
}

.container .layout-content {
    width: calc(100% - 260px);
    height: calc(100vh - 50px);
    background-color: yellowgreen;

    position: absolute;
    top: 50px;
    left: 260px;

    padding: 1rem;
    overflow: auto;

    transition: all 0.3s ease;
}

.container .layout-content.collapse {
    width: calc(100vw - 55px);
    left: 55px;
}

.scrollbar {
    width: 100%;
    height: calc(100vh - 50px);
}

.scrollbar .el-menu {
    border-right: none;
}
</style>
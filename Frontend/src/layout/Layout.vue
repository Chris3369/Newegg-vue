<template>
    <div class="container">
        <div class="slider">
            <Logo />
            <el-scrollbar class="scrollbar">
                <el-menu 
                    background-color="#001529" 
                    text-color="white"
                    active-text-color="#ffd04b"
                    :default-active="$route.path"
                >
                    <Menu :menus="store.menuRoutes"></Menu>
                </el-menu>
            </el-scrollbar>
        </div>
        <div class="tabbar"></div>
        <div class="main">
           <Content></Content>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { useRoute } from 'vue-router'
import Logo from './Logo.vue'
import Menu from './Menu.vue'
import Content from './Content.vue'

import userStore from '../store/user.store'

const store = userStore()

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
}

.container .tabbar {
    width: calc(100% - 260px);
    height: 50px;
    background-color: cyan;

    position: fixed;
    top: 0px;
    left: 260px;
}

.container .main {
    width: calc(100% - 260px);
    height: calc(100vh - 50px);
    background-color: yellowgreen;

    position: absolute;
    top: 50px;
    left: 260px;

    padding: 1rem;
    overflow: auto;
}

.scrollbar {
    width: 100%;
    height: calc(100vh - 50px);
}

.scrollbar .el-menu {
    border-right: none;
}

</style>
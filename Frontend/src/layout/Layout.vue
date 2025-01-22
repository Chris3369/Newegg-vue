<template>
    <div class="container">
        <div class="slider">
            <Logo />
            <el-scrollbar class="scrollbar">
                <el-menu background-color="#001529" text-color="white">
                    <el-menu-item index="1">Home</el-menu-item>
                    <el-menu-item index="2">About</el-menu-item>

                    <el-sub-menu index="3">
                        <template #title>Submenu</template>
                        <el-menu-item index="2-1">item one</el-menu-item>
                        <el-menu-item index="2-2">item two</el-menu-item>
                        <el-menu-item index="2-3">item three</el-menu-item>
                    </el-sub-menu>
                </el-menu>

            </el-scrollbar>
        </div>
        <div class="tabbar"></div>
        <div class="main">
            <p class="test">orange</p>
        </div>

    </div>
</template>

<script setup lang='ts'>
import Logo from './Logo.vue';
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







.scrollbar p {
    color: white;
}



.test {
    height: 10000px;
    background-color: aliceblue;
}
</style>
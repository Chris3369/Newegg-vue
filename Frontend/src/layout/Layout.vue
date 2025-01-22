<template>
    <div class="container">
        <div class="slider">
            <Logo />
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

.test {
    height: 10000px;
    background-color: aliceblue;
}
</style>
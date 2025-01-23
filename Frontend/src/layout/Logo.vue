<template>
    <div class="logo">
        <img :src="settings.logo" alt="newegg">
        <p>{{ settings.title }}</p>
    </div>
</template>

<script setup lang='ts'>
import settings from '../settings'
</script>

<style scoped>
.logo {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    margin-left: 20px;
}

.logo img {
    width: 30px;
    height: 30px;
}

.logo p {
    color: white;
    font-size: 20px;
    margin-left: 10px;
}
</style>
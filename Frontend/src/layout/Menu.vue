<template>
    <template v-for="menu in menus" :key="menu.path">
        <template v-if="!menu.children">
            <el-menu-item :index="menu.path" v-if="menu?.meta && !menu.meta.hidden">
                <span>{{ menu.meta && menu.meta.title }}</span>
            </el-menu-item>
        </template>

        <template v-if="menu.children && menu.children.length == 1">
            <el-menu-item :index="menu.children[0].path">
                <span>{{ menu.children[0].meta && menu.children[0].meta.title }}</span>
            </el-menu-item>
        </template>

        <template v-if="menu.children && menu.children.length > 1">
            <el-sub-menu v-if="menu?.meta && !menu.meta.hidden" :index="menu.path">
                <template #title>{{ menu.meta && menu.meta.title }}</template>
                <Menu :menus="menu.children"></Menu>
            </el-sub-menu>
        </template>

    </template>
</template>

<script setup lang='ts' name="Menu">
import type { RouteRecordRaw } from 'vue-router'

defineProps({
    menus: Array<RouteRecordRaw>
})

</script>

<style></style>
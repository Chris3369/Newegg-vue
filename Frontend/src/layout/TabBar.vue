<template>
    <div class="tabbar">
        <div class="left">
            <el-icon style="margin-right: 10px;" @click="store.toggleCollapse">
                <!-- <Expand /> -->
                <component class="collapse" :is="store.collapse ? Expand : Fold"></component>
            </el-icon>

            <el-breadcrumb :separator-icon="ArrowRight">
                <el-breadcrumb-item 
                    v-for="item in $route.matched.filter(item => item.meta.title)" 
                    :key="item.path">
                    {{ item.meta.title }}
                </el-breadcrumb-item>
            </el-breadcrumb>

        </div>
        <div class="right">
            <el-button type="primary" size="small" circle :icon="Refresh"></el-button>
            <el-button type="primary" size="small" circle :icon="FullScreen"></el-button>
            <el-button type="primary" size="small" circle :icon="Setting"></el-button>
            <img src="/logo.svg" alt="">

            <el-dropdown>
                <span>admin</span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>Logout</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ArrowRight, Expand, Fold, Refresh, FullScreen, Setting } from '@element-plus/icons-vue'
import settingStore from '../store/setting.store'
import { useRoute } from 'vue-router'

const $route = useRoute()

const store = settingStore()

</script>

<style scoped>
.tabbar {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: space-between;
}

.tabbar .left {
    display: flex;
    align-items: center;
    margin-left: 1rem;

}

.tabbar .right {
    display: flex;
    align-items: center;
    margin-right: 1rem;
}

.tabbar .right img {
    width: 24px;
    height: 24px;
    margin: 0 12px;
}

.tabbar .right span {
    line-height: 50px;
    cursor: pointer;
}

.collapse {
    cursor: pointer;
}
</style>
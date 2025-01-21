<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form" :model="loginForm" ref="loginForms">
          <el-form-item prop="username">
            <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" :prefix-icon="Lock" v-model="loginForm.password" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="login_btn" type="primary" size="default" @click="login">Login</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang='ts'>
import { reactive } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
import userStore from '../store/user.store'

const store = userStore()

const loginForm = reactive({ username: '', password: '' })

const login = () => {
  // send login request
  // scuccess => home page
  // fail => show error message

  store.login(loginForm)
}

</script>

<style></style>
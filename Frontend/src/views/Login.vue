<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form" :model="loginForm" ref="loginForms">
          <el-form-item prop="email">
            <el-input :prefix-icon="User" v-model="loginForm.email"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" :prefix-icon="Lock" v-model="loginForm.password" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button :loading="loading" class="login_btn" type="primary" size="default" @click="login">Login</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang='ts'>
import { reactive, ref } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
import userStore from '../store/user.store'

const store = userStore()
const $router = useRouter()
const loginForm = reactive({ email: 'chris@gmail.com', password: 'Aa12345' })
const loading = ref(false)
const login = async () => {

  loading.value = true

  try {
    // send login request
    await store.login(loginForm)

    loading.value = false
    
    // scuccess => home page
    $router.push({ name: 'home' })

    ElNotification({
      title: 'Success',
      message: 'Login successfully',
      type: 'success'
    })
  } catch (error) {

    loading.value = false

    // fail => show error message
    ElNotification({
      title: 'Error',
      message: error as string,
      type: 'error'
    })
  }
}

</script>

<style></style>
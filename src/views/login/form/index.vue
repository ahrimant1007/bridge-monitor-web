<style scoped lang="scss" src="./index.scss" />
<template>
  <div class="login-page-form">
    <div class="title">智慧桥梁系统</div>
    <hr />
    <el-form ref="validateForm" :model="validateForm" :rules="rules">
      <el-form-item prop="name">
        <el-input v-model="validateForm.name" placeholder="请输入用户名">
          <template slot="prepend"><i class="el-icon-user-solid" /></template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="validateForm.password" placeholder="请输入密码" show-password>
          <template slot="prepend"><i class="el-icon-lock" /></template>
        </el-input>
      </el-form-item>
      <el-form-item style="text-align: right">
        <el-button @click="resetForm()">重置</el-button>
        <el-button type="primary" @click="submitForm()">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import service from '@/services'
  import tokenUtils from '@/utils/token'

  export default {
    name: 'LoginForm',
    data() {
      return {
        validateForm: {
          name: '',
          password: '',
        },
        rules: {
          name: [
            { required: true, message: '用户名名称不能为空', trigger: 'change' },
          ],
          password: [
            { required: true, message: '密码不能为空', trigger: 'change' }
          ],
        }
      }
    },
    methods: {
      submitForm() {
        this.$refs.validateForm.validate((valid) => {
          if (valid) {
            this.login()
          } else {
            return false
          }
        })
      },
      resetForm() {
        this.$refs.validateForm.resetFields()
      },
      async login() {
        const body = {
          username: this.validateForm.name,
          password: this.validateForm.password,
        }
        const token = await service.login(body)
        if (token) {
          tokenUtils.setToken(token)
          this.$store.dispatch({ type: 'setUser' })
          return this.$router.push({ path: '/home' })
        } else {
          this.$message.warning('登录失败')
        }
      }
    }
  }
</script>


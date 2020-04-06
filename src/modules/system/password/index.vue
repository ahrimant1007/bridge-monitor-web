<template>
  <div class="page password form-page">
    <el-card>
      <el-form ref="passForm" :model="passForm" status-icon :rules="rules" label-width="100px" class="demo-passForm">
        <el-form-item label="原密码" prop="srcPass">
          <el-input v-model="passForm.srcPass" type="password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="pass">
          <el-input v-model="passForm.pass" type="password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认新密码" prop="checkPass">
          <el-input v-model="passForm.checkPass" type="password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('passForm')">提交</el-button>
          <el-button @click="resetForm('passForm')">重置</el-button>
          <el-button @click="goBack">返回</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import service from '@/services'

  export default {
    name: 'Password',
    data() {
      const validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.passForm.pass) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      }
      return {
        passForm: {
          srcPass: '',
          pass: '',
          checkPass: '',
        },
        rules: {
          srcPass: [
            { required: true, message: '原来密码不能为空', trigger: 'blur' },
          ],
          pass: [
            { required: true, message: '新密码不能为空', trigger: 'blur' }
          ],
          checkPass: [
            { required: true, validator: validatePass, trigger: 'blur' }
          ],
        }
      }
    },
    computed: {
      ...mapGetters(['userInfo']),
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate(async (valid) => {
          if (valid) {
            // alert('submit!')
            const model = {
              userName: this.userInfo.userName,
              oldPasswd: this.passForm.srcPass,
              newPasswd: this.passForm.pass,
            }
            const data = await service.updatePassword(model)
            if (data) {
              this.$message.success('密码更新成功')
              this.goBack()
            }
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
      },
      goBack() {
        this.$router.go(-1)
      },
    }
  }
</script>

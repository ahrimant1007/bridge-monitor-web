<template>
  <el-form ref="cForm" class="form" :model="item" :rules="rules" label-width="130px">
    <el-form-item label="字典名称：" prop="name">
      <el-input v-model="item.name" placeholder="请输入名称"></el-input>
    </el-form-item>
    <el-form-item label="字典描述：">
      <el-input v-model="item.info" type="textarea" :rows="3" placeholder="请输入备注"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" class="form-btn" @click="submitHandle">提交</el-button>
      <el-button class="form-btn" @click="goBack">取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
  export default {
    name: 'CcForm',
    props: {
      options: {
        type: Array,
        required: true,
        default: () => []
      },
      rules: {
        type: Object,
        required: false,
        default: () => ({})
      },
      paramsKey: {
        type: String,
        required: false,
        default: 'id'
      },
      service: {
        type: Function,
        required: true,
        default: new Function(),
      }
    },
    data() {
      return {
        item: {}
      }
    },
    created() {
      this.id = this.$route.params[this.paramsKey]
      this.isEditForm = this.$route.meta.formType === 'edit'
      if (this.isEditForm) {
        setTimeout(() => this.getData(), 0)
      }
    },
    methods: {
      async getData() {
        if (this.id) {
          const data = await this.service.getItem(this.id)
          this.updateItemFunc(data)
        } else {
          this.$message.error('数据ID不存在，请检查后重写')
        }
      },
      submitHandle() {
        const { cForm: form } = this.$refs
        form.valid(async valid => {
          if (valid) {
            const item = form.obj
            await this.service.editItem(this.id, item)
            this.$message.success('修改成功!')
            this.goBack()
          } else {
            this.$message.error('数据填写错误，请按要求填写!')
          }
        })
      },
      goBack() {
        this.$router.go(-1)
      }
    }
  }
</script>
<style scoped>
</style>

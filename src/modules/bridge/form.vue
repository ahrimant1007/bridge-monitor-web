<template>
  <div class="bridge-form-page">
    <el-row>
      <el-col :span="12">
        <el-card>
          <c-form
            :key-code="codeKey"
            :columns="formColumns"
            :service="service"
            :is-edit-form="isEditForm"
            :inline="true"
            :response-intercept="formIntercept"
            :submit-intercept="onSubmitIntercept"
            classname="bridge-form"
          />
        </el-card>
      </el-col>
      <el-col :span="12" style="text-align: left;padding-left: 20px">
        <el-card>
          <h4>桥梁图片:</h4>
          <c-image-upload :image-url="searchForm.imgUrl" @onUpload="uploadImage" />
        </el-card>
        <el-card style="margin-top: 20px">
          <h4>测点布设图:</h4>
          <c-image-upload :image-url="searchForm.pointUrl" @onUpload="uploadPointImage" />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import { config } from './config'
  import CForm from '@/components/cc-form'
  import cImageUpload from '@/components/cc-image-upload'

  export default {
    components: { CForm, cImageUpload },
    data() {
      return {
        ...config,
        isEditForm: this.$route.meta.formType === 'edit',
        searchForm: {
          imgUrl: '',
          pointUrl: '',
        },
      }
    },
    created() {
      this.id = this.$route.params.id
    },
    methods: {
      async uploadImage(imgFile) {
        console.log('page uploadImage')
        const url = await this.service.uploadImage(this.id, imgFile)
        if (url) {
          this.searchForm.imgUrl = url
          this.$message.success('桥梁图片上传成功')
        }
      },
      async uploadPointImage(imgFile) {
        const url = await this.service.uploadPointImage(this.id, imgFile)
        if (url) {
          this.searchForm.pointUrl = url
          this.$message.success('点图上传成功')
        }
      },
      formIntercept(data) {
        this.searchForm.imgUrl = data.imgUrl
        this.searchForm.pointUrl = data.pointUrl
        return data
      },
      onSubmitIntercept(data = {}) {
        return {
          ...data,
          ...this.searchForm,
        }
      }
    }
  }
</script>
<style scoped lang="scss">
  .bridge-form-page {
    .el-form.c-form.bridge-form {
      padding: 60px 20px 0;

      .el-form-item {
        margin-bottom: 8px;
      }
    }
  }

  h4 {
    margin: 4px 0;
  }
</style>

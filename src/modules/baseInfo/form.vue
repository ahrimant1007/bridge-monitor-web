<template>
  <div class="bridge-form-page">
    <el-row>
      <el-col :span="12">
        <c-form
          :code-key="codeKey"
          :code-value="bridgeId"
          :columns="formColumns"
          :service="service"
          :is-review="true"
          :inline="true"
          classname="bridge-show-form"
          @getDataCallBack="afterGetItem"
        />
      </el-col>
      <el-col :span="12" style="text-align: left;padding-left: 20px">
        <h5>桥梁图片:</h5>
        <br />
        <el-image
          style="width: 460px;height: 300px"
          :src="imgUrl"
          fit="cover"
          :preview-src-list="[imgUrl]"
        >
        </el-image>
        <h5>测点布设图:</h5>
        <br />
        <el-image
          style="width: 460px;height: 300px"
          :src="pointUrl"
          fit="cover"
          :preview-src-list="[pointUrl]"
        >
        </el-image>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import { formConfig as config } from './config'
  import CForm from '@/components/cc-form'

  export default {
    components: { CForm },
    props: {
      bridgeId: {
        type: String,
        required: true,
      }
    },
    data() {
      config.formColumns = config.formColumns.map(e => ({ ...e, disabled: true }))
      return {
        ...config,
        pointUrl: '',
        imgUrl: ''
      }
    },
    methods: {
      afterGetItem(v) {
        this.pointUrl = v.pointUrl
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
</style>

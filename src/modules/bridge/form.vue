<template>
  <div class="bridge-form-page">
    <el-row>
      <el-col :span="12">
        <c-form
          :key-code="codeKey"
          :columns="formColumns"
          :service="service"
          :is-edit-form="isEditForm"
          :inline="true"
          classname="bridge-form"
        />
      </el-col>
      <el-col :span="12" style="text-align: left;padding-left: 20px">
        <el-upload
          ref="upload-img"
          action="/"
          :on-change="onImageFileChange"
          :auto-upload="false"
          list-type="text"
          style="width: 300px"
          accept="image/*"
          :show-file-list="false"
        >
          <el-button slot="trigger" size="small" type="primary">选择桥梁图片</el-button>
          <el-button
            style="margin-left: 10px;"
            size="small"
            type="success"
            @click="uploadImage(true)"
          >
            上传<i class="el-icon-upload el-icon--right"></i>
          </el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
        <el-image
          :style="imageStyle"
          :src="imgUrlBase64 || searchForm.imgUrl"
          fit="cover"
          :preview-src-list="[searchForm.imgUrl]"
        >
        </el-image>
        <br />
        <el-upload
          ref="upload-img-2"
          action="/"
          :on-change="onPointFileChange"
          :auto-upload="false"
          list-type="text"
          style="width: 300px"
          accept="image/*"
          :show-file-list="false"
        >
          <el-button slot="trigger" size="small" type="primary">选择测点布设图</el-button>
          <el-button
            style="margin-left: 10px;"
            size="small"
            type="success"
            @click="uploadImage(false)"
          >
            上传<i class="el-icon-upload el-icon--right"></i>
          </el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
        <el-image
          :style="imageStyle"
          :src="pointUrlBase64 || searchForm.pointUrl"
          fit="cover"
          :preview-src-list="[searchForm.pointUrl]"
        >
        </el-image>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import { config } from './config'
  import CForm from '@/components/cc-form'


  function blobToDataURL(blob, callback) {
    const reader = new FileReader()
    reader.onload = function (e) {
      callback(e.target.result)
    }
    reader.readAsDataURL(blob)
  }

  export default {
    components: { CForm },
    data() {
      return {
        ...config,
        isEditForm: this.$route.meta.formType === 'edit',
        searchForm: {},
        imgUrl: '',
        pointUrl: '',
        imgUrlBase64: '',
        pointUrlBase64: '',
        imageStyle: 'width: 520px;height: 300px'
      }
    },
    created() {
      this.id = this.$route.params.id
    },
    methods: {
      onImageFileChange(file, fileList) {
        this.imgUrl = file.raw
        this.transfer(this.imgUrl, 'imgUrlBase64')
      },
      onPointFileChange(file, fileList) {
        this.pointUrl = file.raw
        this.transfer(this.pointUrl, 'pointUrlBase64')
      },
      transfer(file, name) {
        const self = this
        blobToDataURL(file, function (dataurl) {
          self[name] = dataurl
        })
      },
      async uploadImage(isImg) {
        const { uploadImage, uploadPointImage } = this.service
        const uploadFunc = isImg ? uploadImage : uploadPointImage
        const img = isImg ? this.imgUrl : this.pointUrl
        console.log(isImg)
        const res = await uploadFunc(this.id, img)
        if (res) {
          this.$message.success('图片上传成功')
        }
      },
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

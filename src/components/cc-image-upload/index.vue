<template>
  <div class="upload-cmp">
    <el-image
      :style="imageStyle"
      :src="showImageUrl"
      fit="cover"
      :preview-src-list="[showImageUrl]"
    >
    </el-image>
    <div class="btns">
      <el-upload
        action="/"
        :on-change="onFileChange"
        :auto-upload="false"
        list-type="text"
        style="width: 540px;text-align: right"
        accept="image/*"
        :show-file-list="false"
      >
        <el-button slot="trigger" size="small" type="primary">
          选择图片
        </el-button>
        <el-button
          style="margin-left: 10px;"
          size="small"
          type="success"
          :disabled="!imageFile"
          @click="uploadImage"
        >
          上传提交<i class="el-icon-upload el-icon--right"></i>
        </el-button>
        <div slot="tip" class="el-upload__tip">{{ tip }}</div>
      </el-upload>
    </div>
  </div>
</template>
<script>
  function blobToDataURL(blob, callback) {
    const reader = new FileReader()
    reader.onload = function (e) {
      callback(e.target.result)
    }
    reader.readAsDataURL(blob)
  }

  export default {
    name: 'ImageUpload',
    props: {
      imageUrl: {
        type: String,
        default: ''
      },
      imageStyle: {
        type: String,
        default: 'width: 540px;height: 300px'
      },
      tip: {
        type: String,
        default: '只能上传jpg/png文件，且不超过500kb'
      },
      onUpload: {
        type: Function,
        default: new Function(),
      }
    },
    data() {
      return {
        imageFile: '',
        imgBase64: '',
      }
    },
    computed: {
      showImageUrl() {
        return this.imgBase64 || this.imageUrl
      },
    },
    methods: {
      onFileChange(file, fileList) {
        this.imageFile = file.raw
        this.transfer(this.imageFile)
      },
      transfer(file, name) {
        const self = this
        blobToDataURL(file, function (data) {
          self.imgBase64 = data
        })
      },
      uploadImage() {
        console.log('cmp uploadImage')
        this.$emit('onUpload', this.imageFile)
      },
    }
  }
</script>
<style scoped>
</style>

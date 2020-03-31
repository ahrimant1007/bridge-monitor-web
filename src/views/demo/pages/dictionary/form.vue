<template>
  <el-form class="mo-form" ref="cForm" :model="item" :rules="rules" label-width="130px">
    <el-form-item label="字典名称：" prop="name">
      <el-input v-model="item.name" placeholder="请输入名称"></el-input>
    </el-form-item>
    <el-form-item label="字典描述：">
      <el-input v-model="item.info" type="textarea" :rows="3" placeholder="请输入备注"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" class="form-btn" @click="handleSubmitClick()">提交</el-button>
      <el-button class="form-btn" @click="$router.go(-1)">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import { CrudFMixin } from '@/mixins'

  export default {
    mixins: [CrudFMixin],
    props: ['item', 'type'],
    data() {
      return {
        rules: {
          name: [
            { required: true, message: '请输入名称', trigger: 'blur' },
          ],
          info: [
            { required: true, message: '请输入描述', trigger: 'blur' },
          ],
        }
      }
    },
    computed: {
      obj() {
        return {
          name: this.item.name,
          info: this.item.info,
        }
      }
    },
  }
</script>

<style scoped>

</style>

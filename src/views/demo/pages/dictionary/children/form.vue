<template>
  <el-form class="mo-form" ref="moForm" :model="item" :rules="rules" label-width="130px">
    <el-form-item label="子项名称：" prop="name">
      <el-input v-model="item.name" placeholder="请输入子项名称"></el-input>
    </el-form-item>
    <el-form-item label="子项描述：">
      <el-input v-model="item.info" type="textarea" :rows="3" placeholder="请输入子项描述"></el-input>
    </el-form-item>
    <el-form-item label="排序：">
      <el-input type="number" v-model="item.orderNum" placeholder="请输入排序"></el-input>
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
          orderNum: [
            { required: true, message: '请输入排序', trigger: 'blur' },
          ],
        }
      }
    },
    computed: {
      obj() {
        return {
          code: this.item.code,
          name: this.item.name,
          info: this.item.info,
          orderNum: this.item.orderNum,
          typeCode: this.item.typeCode,
        }
      }
    },
  }
</script>

<style scoped>

</style>

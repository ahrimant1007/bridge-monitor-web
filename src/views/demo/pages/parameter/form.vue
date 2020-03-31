<template>
  <el-form class="mo-form" ref="moForm" :model="item" :rules="rules" label-width="130px">
    <el-form-item label="名称：" prop="name">
      <el-input v-model="item.name" placeholder="请输入名称"></el-input>
    </el-form-item>
    <el-form-item label="属性编码：" prop="code">
      <el-input v-model="item.code" placeholder="请输入属性编码"></el-input>
    </el-form-item>
    <el-form-item label="属性值：">
      <el-input v-model="item.value" type="textarea" :rows="3" placeholder="请输入属性值"></el-input>
    </el-form-item>
    <el-form-item label="备注：">
      <el-input v-model="item.remark" type="textarea" :rows="3" placeholder="请输入备注"></el-input>
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
            { required: true, message: '请输入表达式名称', trigger: 'blur' },
          ],
          code: [
            { required: true, message: '请输入code表达式', trigger: 'blur' },
          ],
        }
      }
    },
    computed: {
      obj() {
        return {
          name: this.item.name,
          code: this.item.code,
          value: this.item.value,
          remark: this.item.remark
        }
      }
    },
    watch: {},
    created() {

    },
    methods: {}
  }
</script>

<style scoped>

</style>

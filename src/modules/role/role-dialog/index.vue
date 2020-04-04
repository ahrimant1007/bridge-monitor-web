<template>
  <el-dialog
    :title="title"
    :visible.sync="visible"
    width="60%"
    :before-close="closeHandle"
  >
    <slot name="content"></slot>
    <span slot="footer" class="dialog-footer">
      <el-button @click="closeHandle">取 消</el-button>
      <el-button type="primary" @click="doSubmit">确 定</el-button>
    </span>
  </el-dialog>
</template>
<script>
  export default {
    name: 'RoleDialog',
    model: {
      prop: 'visible',
      event: 'change'
    },
    props: {
      visible: {
        type: Boolean,
        default: false,
      },
      title: {
        type: String,
        default: '提示',
      },
      submit: {
        type: Function,
        default: new Function(),
      }
    },
    data() {
      return {
        model: {}
      }
    },
    watch: {
      visible(value) {
        this.$emit('change', value)
      }
    },
    methods: {
      doSubmit() {
        this.$emit('submit')
      },
      closeHandle(done) {
        this.$emit('change', false)
      }
    }
  }
</script>
<style scoped>
  .el-dialog__body {
    text-align: left;
  }
</style>

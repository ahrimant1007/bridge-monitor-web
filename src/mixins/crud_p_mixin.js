export const CrudPMixin = {
  data() {
    return {
      inlineForm: 'InlineForm',
      addItemFunc: (item) => {
      },
    }
  },
  methods: {
    handleDoSubmit(func) {
      const form = this.$refs[this.inlineForm]
      if (!form) return
      form.valid(valid => {
        if (valid) {
          const item = form.obj
          this.addItemFunc(item).then(data => {
            this.$message.success('添加成功!')
            this.$router.go(-1)
          })
        } else {
          this.$message.error('数据填写错误，请按要求填写!')
        }
      })
    }
  }
}

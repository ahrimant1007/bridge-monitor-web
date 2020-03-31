export const CrudCMixin = {
  data() {
    return {
      inlineForm: 'InlineForm',
      // url: '',
      addItemFunc: (item) => {}
    }
  },
  created() {
    // const sysPermissionList = this.$store.getters.sysPermissionList
    // const rowList = sysPermissionList.filter((item) => item.vueUrl === this.$route.path)
    // this.url = rowList[0].url
  },
  methods: {
    handleDoSubmit(func) {
      const form = this.$refs[this.inlineForm]
      if (!form) return
      form.valid(valid => {
        if (valid) {
          const item = form.obj
          this.addItemFunc(item).then(data => {
            this.$message.success('添加成功')
            this.$router.go(-1)
          })
        } else {
          this.$message.error('数据填写错误，请按要求填写!')
        }
      })
    }
  }
}

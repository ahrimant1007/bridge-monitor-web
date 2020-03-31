export const CrudUMixin = {
  data() {
    return {
      item: {},
      getItemFunc: (id) => {},
      editItemFunc: (id, item) => {},
      updateItemFunc: (target) => {},
      // url: ''
    }
  },
  created() {
    this.id = this.$route.params.id
    setTimeout(() => this.get_item(), 0)
    // let path1 = this.$route.path
    // let a = path1.replace(path1.split('/')[path1.split('/').length - 1], ':id')
    // const sysPermissionList = this.$store.getters.sysPermissionList
    // const rowList = sysPermissionList.filter((item) => item.vueUrl === a)
    // console.log(this.$route.path)
    // console.log(rowList)
    // this.url = rowList[0].url
    // console.log(this.url)
  },
  methods: {
    get_item() {
      if (this.id) {
        this.getItemFunc(this.id).then((data = {}) => {
          this.updateItemFunc(data)
        })
      } else {
        this.$message.error('数据ID不存在，请检查后重写')
      }
    },
    handleDoSubmit() {
      const form = this.$refs[this.inlineForm]
      form.valid(valid => {
        if (valid) {
          const item = form.obj
          this.editItemFunc(this.id, item).then(data => {
            this.$message.success('修改成功!')
            this.$router.go(-1)
          })
        } else {
          this.$message.error('数据填写错误，请按要求填写!')
        }
      })
    },
  }
}

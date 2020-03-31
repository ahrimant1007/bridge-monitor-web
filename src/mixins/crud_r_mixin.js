const defaultPage = 0

export const CrudRMixin = {
  data() {
    return {
      id: null,
      item: {},
      currentPage: defaultPage,
      total: 0,
      pageSize: 10,
      loadList: true,
      tableData: [],
      pageSizeList: [10, 20, 50, 100, 200],
      layoutConf: 'total, sizes, prev, pager, next, jumper',
      getListFunc: new Function(),
      delItemFunc: new Function(),
      addUrl: '',
      editUrl: (id) => '',
      url: '',
      dialogVisibleDel: false,
      deleteId: '',
    }
  },
  created() {
    this.refreshData()
    this.id = this.$route.params.id
  },
  methods: {
    refreshData(currentPage = defaultPage) {
      const page = currentPage > defaultPage ? currentPage : defaultPage
      this.getListFunc({
        currentPage: page,
        pageSize: this.pageSize,
        ...(this.searchForm || {})
      }).then(data => {
        if (!data) return
        const { list, total, currentPage } = data
        this.tableData = list
        this.total = total
        this.currentPage = currentPage + (1 - defaultPage)
      }).finally(e => {
        this.loadList = false
      })
    },
    add(item) {
      this.$router.push(this.addUrl)
    },
    edit(id) {
      this.$router.push(this.editUrl(id))
    },
    del(id) {
      this.dialogVisibleDel = true
      this.deleteId = id
    },
    delSubmit() {
      this.dialogVisibleDel = false
      this.delItemFunc(this.deleteId).then(() => {
        this.refreshData()
        if (this.reset) this.reset()
        this.$message.success('删除成功')
      })
    },
    delCancel() {
      this.dialogVisibleDel = false
    },
    handleSizeChange(val) {
      this.pageSize = val
      this.refreshData()
    },
    handleCurrentChange(page) {
      this.refreshData(page > defaultPage ? page - (1 - defaultPage) : defaultPage)
    },
    search() {
      this.refreshData()
    }
  }
}

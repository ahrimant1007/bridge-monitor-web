<template>
  <div class="cc-table-container">
    <div v-if="hasAddAction" class="add-section">
      <el-button
        icon="el-icon-plus"
        type="success"
        @click="add"
      >添加
      </el-button>
    </div>
    <el-table
      stripe
      border
      :data="tableData"
      :min-height="height"
      element-loading-text="拼命加载中..."
      style="width: 100%"
      :height="height"
      :max-height="800"
    >
      <el-table-column
        type="index"
        align="center"
        label="序号"
        width="80"
      >
      </el-table-column>
      <template v-for="column of columns">
        <el-table-column
          v-if="column.slot"
          :key="column.value"
          :prop="column.value"
          :label="column.label"
          :width="column.width || 'auto'"
        >
          <template slot-scope="scope">
            <slot :name="column.value" :row="scope.row"></slot>
          </template>
        </el-table-column>
        <el-table-column
          v-else
          :key="column.value"
          :prop="column.value"
          :label="column.label"
          :width="column.width || 'auto'"
          :min-width="140"
          show-overflow-tooltip
          header-align="center"
          :align="column.align || 'center'"
          :formatter="column.render"
        >
        </el-table-column>
      </template>
      <el-table-column
        v-if="!!tableActions.length"
        label="操作"
        :width="tableActions.length * 50 + 40"
        align="center"
        fixed="right"
      >
        <template slot-scope="scope">
          <div v-for="action of tableActions" :key="action.text || action" class="group-btn-item">
            <el-popconfirm
              v-if="action === 'del'"
              icon="el-icon-info"
              title="确定删除吗？"
              @onConfirm="del(scope.row)"
            >
              <el-button
                slot="reference"
                class="danger"
                type="text"
              >删除
              </el-button>
            </el-popconfirm>
            <el-button
              v-else-if="typeof action === 'string'"
              :class="(buttonConfig[action]||{}).classname"
              type="text"
              @click="(buttonConfig[action]||{}).func(scope.row)"
            >{{ (buttonConfig[action]||{}).text }}
            </el-button>
            <el-button
              v-if="typeof action === 'object'"
              :class="action.classname || 'info'"
              type="text"
              @click="doAction(action.action,scope.row)"
            >{{ action.text }}
            </el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination-container">
      <el-pagination
        :current-page="currentPage"
        :page-sizes="pageSizeList"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
  const PAGE_START_NO = 1

  export default {
    name: 'CcTable',
    props: {
      columns: {
        type: Array,
        required: false,
        default: () => []
      },
      actions: {
        type: Array,
        required: false,
        default: () => []
      },
      frontendUrl: {
        type: String,
        default: '/',
      },
      service: {
        type: Object,
        required: true,
        default: () => ({}),
      },
      height: {
        type: Number,
        default: 530,
      },
      searchForm: {
        type: Object,
        default: () => ({}),
      },
      codeKey: {
        type: String,
        default: 'id',
      },
      childCodeKey: {
        type: String,
        default: 'id',
      },
      doOtherAction: {
        type: Function,
        default: new Function(),
      },
    },
    data() {
      this.getListFunc = this.service.getList
      this.delItemFunc = this.service.delItem
      return {
        dialogVisibleDel: false,
        buttonConfig: {
          add: { classname: 'success', text: '新增', func: this.add },
          del: { classname: 'danger', text: '删除', func: this.del },
          edit: { classname: 'warning', text: '编辑', func: this.edit },
          child: { classname: 'info', text: '子项', func: this.child },
        },
        tableData: [],
        currentPage: PAGE_START_NO,
        pageSize: 10,
        total: 0,
        pageSizeList: [10, 20, 50, 100, 200],
        layoutConf: 'total, sizes, prev, pager, next, jumper',
        loadList: true,
      }
    },
    computed: {
      hasAddAction() {
        return !!this.actions.find(e => e === 'add')
      },
      tableActions() {
        return this.actions.filter(e => e !== 'add')
      }
    },
    watch: {
      searchForm() {
        return this.refreshData()
      }
    },

    created() {
      this.id = this.$route.params.id
      this.addUrl = `${this.frontendUrl}/add`
      this.editUrl = key => `${this.frontendUrl}/edit/${[key]}`
      this.childUrl = key => `${this.frontendUrl}/${key}/children`
      this.refreshData()
    },
    methods: {
      async refreshData(pageNo = PAGE_START_NO) {
        const page = pageNo > PAGE_START_NO ? pageNo : PAGE_START_NO
        const params = {
          currentPage: page,
          pageSize: this.pageSize,
          ...(this.searchForm || {})
        }
        const data = await this.getListFunc(params).finally(() => {
          return (this.loadList = false)
        })
        if (!data) return
        const { list, total, currentPage, pageNum } = data
        this.tableData = list
        this.total = total
        this.currentPage = (currentPage || pageNum) + (1 - PAGE_START_NO)
      },
      handleSizeChange(pageSize) {
        this.pageSize = pageSize
        this.refreshData()
      },
      handleCurrentChange(page) {
        const currentPage = page > PAGE_START_NO
          ? page - (1 - PAGE_START_NO) : PAGE_START_NO
        this.refreshData(currentPage)
      },
      add() {
        this.$router.push(this.addUrl)
      },
      edit(row) {
        const key = row[this.codeKey]
        this.$router.push(this.editUrl(key))
      },
      async del(row) {
        const value = row[this.codeKey]
        await this.delItemFunc(value)
        this.refreshData()
        this.reset && this.reset()
        this.$message.success('删除成功')
      },
      /** 下钻 */
      child(row) {
        const key = row[this.childCodeKey]
        this.$router.push(this.childUrl(key))
      },
      /**
       * 除了增删改 下钻以外的 action 传到外面处理
       * @param type
       * @param data
       */
      doAction(type, data) {
        this.$emit('doOtherAction', { type, data })
      },
    },
  }
</script>
<style scoped lang="less">
  .group-btn-item {
    display: inline;
    padding: 0 1px;
  }
  .pagination-container {
    margin-top: 20px;
    text-align: right;
  }
  .cc-table {
    margin-top: 20px;
  }
</style>

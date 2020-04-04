<template>
  <div class="role-page">
    <c-searcher
      :options="searchColumns"
      @submitHandle="onSearch"
    />
    <c-table
      :code-key="codeKey"
      :columns="tableColumns"
      :actions="actions"
      :frontend-url="frontendUrl"
      :service="service"
      :search-form="searchForm"
      @doOtherAction="otherActionHandle"
    />
    <role-dialog
      v-model="dialog.visible"
      :title="`${dialog.title}选择`"
      @submit="onSubmit"
    >
      <template #content>
        <div class="transfer-container">
          <el-transfer
            v-model="dialog.selectedKeys"
            :data="dialog.allDataList"
            :titles="['未选择', '已选择']"
            :button-texts="['到左边', '到右边']"
          ></el-transfer>
        </div>
      </template>
    </role-dialog>
  </div>
</template>
<script>
  import { config } from './config'
  import CTable from '@/components/cc-table'
  import CSearcher from '@/components/cc-searcher'
  import RoleDialog from './role-dialog'

  export default {
    name: 'RoleList',
    components: { CSearcher, CTable, RoleDialog },
    data() {
      return {
        ...config,
        searchForm: {},
        dialog: {
          visible: false,
          title: '',
          getFunc: null,
          submitFunc: null,
          selectedKeys: [],
          allDataList: [],
        }
      }
    },
    created() {
      const { service } = this
      this.serviceOptions = {
        user: { title: '用户', getFunc: service.getUsers, submitFunc: service.updateUsers },
        bridge: { title: '桥梁', getFunc: service.getBridges, submitFunc: service.updateBridges },
        menu: { title: '菜单', getFunc: service.getMenus, submitFunc: service.updateMenus },
      }
    },
    methods: {
      onSearch(form = {}) {
        this.searchForm = { ...(this.searchForm || {}), ...form }
      },
      async otherActionHandle({ type, data }) {
        const config = this.serviceOptions[type]
        const res = await config.getFunc(data.roleId)
        this.dialog = {
          id: data.roleId,
          allDataList: res.all,
          selectedKeys: res.include.map(e => e.key),
          visible: true,
          ...config,
        }
      },
      async onSubmit() {
        const { id, selectedKeys, submitFunc } = this.dialog
        const ids = JSON.stringify(selectedKeys)
        const model = {
          ids: ids.slice(1, ids.length - 1).replace(/"/g, ''),
          roleId: id,
        }
        try {
          const res = await submitFunc(model)
          if (res) {
            this.$message.success(this.dialog.title + '保存成功')
          }
        } catch (e) {
          console.log(e)
        } finally {
          this.dialog.visible = false
        }
      }
    }
  }
</script>
<style scoped>
  .transfer-container {
    display: flex;
    justify-content: center;
  }

  .role-page {
    text-align: left;
  }
</style>

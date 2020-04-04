<template>
  <div class="parameter">
    <c-searcher
      :options="searchColumns"
      @submitHandle="onSearch"
    >
      <template #button>
        <el-button
          type="success"
          class="download-btn"
          icon="el-icon-download"
          @click="downloadData"
        >数据下载
        </el-button>
      </template>
    </c-searcher>
    <c-table
      :columns="tableColumns"
      :frontend-url="frontendUrl"
      :service="service"
      :search-form="searchForm"
    />
  </div>
</template>
<script>
  import { effConfig as config } from './config'
  import CTable from '@/components/cc-table'
  import CSearcher from '@/components/cc-searcher'

  export default {
    name: 'Download',
    components: { CSearcher, CTable },
    data() {
      return {
        ...config,
        searchForm: {},
      }
    },
    methods: {
      onSearch(form = {}) {
        this.searchForm = { ...(this.searchForm || {}), ...form }
      },
      downloadData() {
        this.service.downloadData(this.searchForm)
      }
    }
  }
</script>
<style scoped lang="less">
  .download-btn {
    transform: translateX(10px);
  }
</style>

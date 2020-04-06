<template>
  <el-container>
    <el-aside>
      <el-card>
        <bridge-tree v-model="searchForm.sensorId" :use-level="1" />
      </el-card>
    </el-aside>
    <el-main v-if="searchForm.sensorId">
      <el-card>
        <c-searcher
          :options="searchColumns"
          :value-form="defaultValueForm"
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
      </el-card>
    </el-main>
  </el-container>
</template>
<script>
  import { effConfig as config } from './config'
  import CTable from '@/components/cc-table'
  import CSearcher from '@/components/cc-searcher'
  import BridgeTree from '../monitor/tree'

  export default {
    name: 'Download',
    components: { CSearcher, CTable, BridgeTree },
    data() {
      return {
        ...config,
        defaultValueForm: {
          _: [new Date() - 60000, new Date()]
        },
        searchForm: {
          sensorId: ''
        },
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

<template>
  <el-container>
    <el-aside>
      <el-card>
        <bridge-tree v-model="searchForm.sensorId" :use-level="1" />
      </el-card>
    </el-aside>
    <el-main v-if="searchForm.sensorId">
      <c-searcher
        :key="searchForm.sensorId"
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
          >下载
          </el-button>
        </template>
      </c-searcher>
      <c-table
        :key="searchForm.sensorId"
        :columns="tableColumns"
        :frontend-url="frontendUrl"
        :service="service"
        :search-form="searchForm"
      />
    </el-main>
  </el-container>
</template>
<script>
  import { effConfig as config } from './config'
  import CTable from '@/components/cc-table'
  import CSearcher from '@/components/cc-searcher'
  import BridgeTree from '../monitor/tree'
  import { getDefaultRangeTime } from '@/utils'

  export default {
    name: 'Download',
    components: { CSearcher, CTable, BridgeTree },
    data() {
      const {
        startTime, endTime,
        startStrTime, endStrTime
      } = getDefaultRangeTime()
      return {
        ...config,
        defaultValueForm: {
          _: [startTime, endTime]
        },
        searchForm: {
          sensorId: '',
          startTime: startStrTime,
          endTime: endStrTime,
        },
      }
    },
    methods: {
      onSearch(form = {}) {
        this.searchForm = { ...(this.searchForm || {}), ...form }
      },
      downloadData() {
        const model = { ...this.searchForm }
        delete model._
        this.service.downloadData(model)
      }
    }
  }
</script>
<style scoped lang="less">
  .download-btn {
    transform: translateX(10px);
  }
</style>

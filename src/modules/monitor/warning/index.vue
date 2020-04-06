<template>
  <div class="parameter">
    <c-searcher
      :options="searchColumns"
      :value-form="defaultValueForm"
      @submitHandle="onSearch"
    />
    <c-table
      :columns="tableColumns"
      :frontend-url="frontendUrl"
      :service="service"
      :search-form="searchForm"
    />
  </div>
</template>
<script>
  import { config } from './config'
  import CTable from '@/components/cc-table'
  import CSearcher from '@/components/cc-searcher'
  import { getDefaultRangeTime } from '@/utils'

  export default {
    name: 'Warn',
    components: { CSearcher, CTable },
    props: {
      sensorId: {
        type: String,
        required: true,
      },
    },
    data() {
      const {
        startTime, endTime,
        startStrTime, endStrTime
      } = getDefaultRangeTime()
      return {
        ...config,
        searchForm: {
          sensorId: this.sensorId,
          startTime: startStrTime,
          endTime: endStrTime,
        },
        defaultValueForm: {
          _: [startTime, endTime]
        },
      }
    },
    methods: {
      onSearch(form = {}) {
        this.searchForm = { ...(this.searchForm || {}), ...form, sensorId: this.sensorId }
      }
    }
  }
</script>

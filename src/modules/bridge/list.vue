<template>
  <div class="parameter">
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
    />
  </div>
</template>
<script>
  import { config } from './config'
  import CTable from '@/components/cc-table'
  import CSearcher from '@/components/cc-searcher'

  export default {
    name: 'BridgeList',
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
      }
    }
  }
</script>

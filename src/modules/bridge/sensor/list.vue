<template>
  <div class="parameter">
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

  export default {
    name: 'Parameter',
    components: { CTable },
    data() {
      return {
        ...config,
        searchForm: {
          bridgeId: this.$route.params.id
        },
      }
    },
    methods: {
      onSearch(form = {}) {
        this.searchForm = { ...(this.searchForm || {}), ...form }
      }
    }
  }
</script>

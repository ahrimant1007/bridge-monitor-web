<template>
  <div class="parameter">
    <div class="search-container">
      <search-bar
        :options="searchOptions"
        @submitHandle="onSearch"
      />
    </div>
    <simple-table
      :child-code-key="childCodeKey"
      :columns="columns"
      :actions="actions"
      :frontend-url="frontendUrl"
      :service="service"
      :search-form="searchForm"
    />
  </div>
</template>
<script>

  import SimpleTable from '@/components/cc-table'
  import SearchBar from '@/components/cc-searcher'
  import { dictionaryConfig } from '../../config'

  export default {
    name: 'Dictionary',
    components: { SimpleTable, SearchBar },
    data() {
      return {
        ...dictionaryConfig,
        searchForm: {}
      }
    },
    methods: {
      onSearch(form = {}) {
        this.searchForm = { ...this.searchForm, ...form }
      }
    }
  }
</script>
<style type="text/scss" lang="less" scoped>
</style>


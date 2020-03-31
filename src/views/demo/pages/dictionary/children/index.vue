<template>
  <div class="parameter">
    <div class="search-container">
      <search-bar
        :options="searchOptions"
        @submitHandle="onSearch"
      />
    </div>
    <simple-table
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
  import { subDictionaryConfig } from '../../../config'

  export default {
    name: 'SubDictionary',
    components: { SimpleTable, SearchBar },
    data() {
      const frontendUrl = this.urlReplaceId(subDictionaryConfig.frontendUrl)
      return {
        ...subDictionaryConfig,
        frontendUrl,
        searchForm: {
          typeCode: this.$route.params.id,
        }
      }
    },
    methods: {
      onSearch(form = {}) {
        this.searchForm = { ...this.searchForm, ...form }
      },
      urlReplaceId(url) {
        return url.replace(':id', this.$route.params.id)
      }
    }
  }
</script>
<style type="text/scss" lang="less" scoped>
</style>


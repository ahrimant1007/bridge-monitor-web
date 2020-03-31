<template>
  <div class="report-page">
    <div class="title">{{ title }}</div>
    <simple-table
      :columns="tableColumns"
      :data-list="tableData"
    />
    <simple-chart :option="chartOption" />
  </div>
</template>
<script>
  import SimpleTable from '../sample-table'
  import SimpleChart from '../simple-e-charts'

  export default {
    name: 'ReportModules',
    components: { SimpleTable, SimpleChart },
    props: {
      title: {
        type: String,
        default: ''
      },
      tableColumns: {
        type: Array,
        default: () => []
      },
      tableData: {
        type: Array,
        default: () => []
      },
      chartOption: {
        type: Object,
        default: () => ({}),
      },
    },
  }
</script>
<style scoped>
  .title {
    background: white;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    height: 20px;
    line-height: 40px;
    color: #666;
  }
</style>

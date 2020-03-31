<style scoped lang="scss" src="./index.scss" />
<template>
  <div class="monitor-page">
    <el-container>
      <el-aside>
        <Nav :menus="menus" @select="selectModule" />
      </el-aside>
      <el-main>
        <Module
          :title="title"
          :table-columns="tableColumns"
          :table-data="tableData"
          :chart-option="chartOption"
        />
      </el-main>
    </el-container>
  </div>
</template>
<script>
  import Nav from './components/nav'
  import Module from './components/modules'
  import service from './service'
  import {
    moduleConfig,
    getChartOption,
    getTableColumns,
  } from './config'

  const menus = Object.values(moduleConfig)
  const defaultModule = menus[0]

  export default {
    name: 'Monitor',
    components: { Nav, Module },
    data() {
      return {
        title: '',
        menus,
        tableColumns: [],
        tableData: [],
        chartOption: {},
      }
    },
    mounted() {
      this.getData()
    },
    methods: {
      async getData(moduleName = defaultModule.key) {
        const {
          title,
          chartType,
          chartTitle,
        } = moduleConfig[moduleName]
        this.title = title
        this.tableColumns = getTableColumns(moduleName)
        this.tableData = await service.getDataList(moduleName)
        const chartKey = this.tableColumns.find(e => !!e.isChartKey).value
        const chartValue = this.tableColumns.find(e => !!e.isChartValue).value
        const chartData = this.tableData.map(e => ({ name: e[chartKey], value: e[chartValue] }))
        this.chartOption = getChartOption(chartType, chartData, chartTitle)
      },
      selectModule(moduleName) {
        this.getData(moduleName)
      }
    }
  }
</script>


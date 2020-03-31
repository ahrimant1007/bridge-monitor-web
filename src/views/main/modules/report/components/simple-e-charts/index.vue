<template>
  <div class="chart-container">
    <div :id="documentId" class="e-charts" />
  </div>
</template>
<script>
  import echarts from 'echarts'

  export default {
    name: 'Chart',
    props: {
      documentId: {
        type: String,
        required: false,
        default: 'e-chart-dom'
      },
      option: {
        type: Object,
        default: () => ({}),
      },
    },
    watch: {
      option() {
        this.initData()
      }
    },
    mounted() {
      this.initData()
    },
    methods: {
      initData() {
        const el = document.getElementById(this.documentId)
        this.chart = echarts.init(el)
        this.chart.clear();
        this.chart.setOption(this.option)
      }
    },
  }
</script>
<style scoped lang="scss">
  .chart-container {
    width: 100%;
    height: 400px;
    background: white;
    border-radius: 10px;
    margin-top: 10px;

    .e-charts {
      width: 100%;
      height: 100%;
    }
  }
</style>

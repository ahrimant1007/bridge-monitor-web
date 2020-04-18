<template>
  <el-card>
    <div id="chart-wrapper" />
  </el-card>
</template>
<script>
  import echarts from 'echarts'
  import moment from 'moment'
  import service from '@/services/modules/monitor'
  import { getLineOption } from '../chartOptions'

  const timerFormat = 'YYYY-MM-DD HH:mm:ss'

  export default {
    props: {
      sensorId: {
        type: String,
        required: true,
      },
      detail: {
        type: Object,
        default: () => ({}),
      }
    },
    data() {
      return {}
    },
    created() {
      this.list = []
    },
    mounted() {
      const el = document.getElementById('chart-wrapper')
      this.chart = echarts.init(el)
      const { sensorShowNo } = this.detail
      const opt = getLineOption(
        '实时曲线',
        [],
        undefined,
        sensorShowNo,
        undefined,
        undefined,
        '(mm)',
      )
      this.chart.setOption(opt)
      const startTime = moment().add(-10, 'minutes').format(timerFormat)
      this.getData(startTime, true)
      this.timer = setInterval(this.getIncreaseData, 3000)
    },
    beforeDestroy() {
      clearInterval(this.timer)
    },
    methods: {
      async init() {

      },
      async getData(startTime, isInit, cb) {
        const params = {
          sensorId: this.sensorId,
          startTime,
          endTime: moment().format(timerFormat)
        }
        const dataList = await service.realTimeCurve(params)
        const incrementList = dataList.map(e => [e.captureTime, e.captureValue])
        if (isInit) {
          this.list = incrementList
        } else {
          incrementList.forEach(d => {
            this.list.shift()
            this.list.push(d)
          })
        }
        this.setChartData()
        cb && cb()
      },
      setChartData() {
        this.chart.setOption({
          series: [{
            data: this.list
          }]
        })
      },
      getIncreaseData() {
        const startTime = moment().add(-3, 'seconds').format(timerFormat)
        this.getData(startTime)
      }
    }
  }
</script>
<style scoped>
</style>

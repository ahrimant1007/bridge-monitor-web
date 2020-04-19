<template>
  <el-card>
    <div id="chart-wrapper" />
  </el-card>
</template>
<script>
  import echarts from 'echarts'
  // import moment from 'moment'
  import service from '@/services/modules/monitor'
  import { getLineOption } from '../chartOptions'
  // import { APP_COLORS } from '@/common/constants'

  // const timerFormat = 'YYYY-MM-DD HH:mm:ss'

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
      const { sensorShowNo, orangeWarningValue, yellowWarningValue } = this.detail
      const opt = getLineOption(
        '实时车辆',
        [],
        undefined,
        sensorShowNo,
        orangeWarningValue,
        yellowWarningValue,
        '(mm)',
      )
      this.chart.setOption(opt)
      // const startTime = moment().add(-1, 'hours').format(timerFormat)
      this.getData(true)
      this.timer = setInterval(this.getIncreaseData, 10000)
    },
    beforeDestroy() {
      clearInterval(this.timer)
    },
    methods: {
      async getData(isInit, cb) {
        const params = {
          sensorId: this.sensorId
          // startTime,
          // endTime: moment().format(timerFormat)
        }
        // const dataList = await service.realTimeCurveEff(params)
        var dataList
        if (isInit) {
          dataList = await service.realTimeCurveEffAll(params)
        } else {
          dataList = await service.realTimeCurveEffStep(params)
        }
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
        // const startTime = moment().add(-3, 'seconds').format(timerFormat)
        this.getData()
      }
    }
  }
</script>
<style scoped>
</style>

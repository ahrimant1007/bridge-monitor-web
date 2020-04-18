<template>
  <div class="search-flex">
    <el-form
      ref="cForm"
      class="c-form"
      :model="model"
      :rules="rules"
      label-width="130px"
      inline
    >
      <el-form-item
        label="选择时间(15分钟):"
        prop="dateTimes"
      >
        <el-date-picker
          v-model="model.dateTimes"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="form-btn" @click="search">查询</el-button>
      </el-form-item>
    </el-form>
    <el-card>
      <div id="chart-wrapper" />
    </el-card>
  </div>
</template>
<script>
  import echarts from 'echarts'
  import moment from 'moment'
  import service from '@/services/modules/monitor'
  import { APP_COLORS } from '@/common/constants'
  import { getLineZoomOption } from '../chartOptions'

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
      const validateTimerRange = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请选择时间'))
        } else {
          const [s, e] = value
          if (e - s > 15 * 60 * 1000) {
            callback(new Error('由于数据量太大，请选择15分钟以内的时间段'))
          }
          callback()
        }
      }
      return {
        model: {
          dateTimes: '',
        },
        rules: {
          dateTimes: [
            { validator: validateTimerRange, trigger: 'blur' }
          ],
        }
      }
    },
    created() {
      this.list = []
    },
    mounted() {
      const el = document.getElementById('chart-wrapper')
      this.chart = echarts.init(el)
      const { sensorShowNo } = this.detail
      const opt = getLineZoomOption(
        '历史曲线',
        [],
        APP_COLORS.BLUE,
        sensorShowNo,
        undefined,
        undefined,
        '(mm)',
      )
      this.chart.setOption(opt)
      const startTime = moment().add(-15, 'minute').format(timerFormat)
      const endTime = moment().format(timerFormat)
      this.model.dateTimes = [startTime, endTime]
      this.getData(startTime, endTime)
    },
    methods: {
      async getData(startTime, endTime) {
        const params = {
          sensorId: this.sensorId,
          startTime, endTime,
        }
        const dataList = await service.historyCurve(params)
        this.list = dataList.map(e => [e.captureTime, e.captureValue])
        this.setChartData()
      },
      search() {
        const { cForm: form } = this.$refs
        form.validate(async valid => {
          if (valid) {
            const [s, e] = this.model.dateTimes
            const startTime = moment(s).add(-15, 'minute').format(timerFormat)
            const endTime = moment(e).format(timerFormat)
            this.getData(startTime, endTime)
          }
        })
      },
      setChartData() {
        this.chart.setOption({
          series: [{
            data: this.list
          }]
        })
      }
    }
  }
</script>
<style scoped lang="less">
</style>

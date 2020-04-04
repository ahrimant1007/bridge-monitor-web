<template>
  <div>
    <div class="cc-bar-container">
      <el-form
        ref="cForm"
        class="c-form"
        :model="model"
        :rules="rules"
        label-width="130px"
      >
        <div class="searcher">
          <el-form-item
            label="选择时间(1小时):"
            prop="dateTimes"
          >
            <el-date-picker
              v-model="model.dateTimes"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="form-btn" @click="search">查询</el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>
    <div id="chart-wrapper" />
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
      }
    },
    data() {
      const validateTimerRange = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请选择时间'))
        } else {
          const [s, e] = value
          if (e - s > 60 * 60 * 1000) {
            callback(new Error('由于数据量太大，请选择1小时以内的时间段'))
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
      this.chart.setOption(getLineZoomOption('车辆历史', [], APP_COLORS.GREEN))
      const startTime = moment().add(-1, 'hours').format(timerFormat)
      const endTime = moment().format(timerFormat)
      this.model.dateTimes = [startTime, endTime]
      this.getData(startTime, endTime)
    },
    methods: {
      async getData(startTime, endTime) {
        const params = {
          sensorId: this.sensorId,
          startTime,
          endTime,
        }
        const dataList = await service.historyCurveEff(params)
        this.list = dataList.map(e => [e.captureTime, e.captureValue])
        this.setChartData()
      },
      search() {
        const { cForm: form } = this.$refs
        form.validate(async valid => {
          if (valid) {
            const [s, e] = this.model.dateTimes
            const startTime = moment(s).format(timerFormat)
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
  #chart-wrapper {
    width: 100%;
    min-height: 300px;
    height: 62vh;
  }
  .cc-bar-container {
    line-height: 100%;
    padding: 20px 40px;
    background: rgba(223, 228, 237, .4);
    border-radius: 10px;
    width: 100%;
    min-width: 1024px;
    display: flex;
    .searcher {
      display: flex;
      margin: 6px 12px;
      .label {
        white-space: nowrap;
        text-align: right;
        padding-right: 10px;
        line-height: 40px;
        color: #333;
        font-size: 16px;
        font-weight: bold;
      }
      .searcher-item {
        min-width: 230px;
      }
    }
    .submit-btn {
      text-align: center;
    }
  }
</style>

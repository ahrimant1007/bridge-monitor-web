<template>
  <el-card class="cc-bar-container" body-style="display:flex;width:100%;padding: 20px 40px">
    <div v-for="(item,idx) in options" :key="idx" class="searcher">
      <div class="label">{{ item.label }} :</div>
      <div class="searcher-item">
        <el-input
          v-if="item.type === TYPE_ENUM.INPUT || !item.type"
          v-model="searchForm[item.value]"
          :placeholder="`请输入${item.label}`"
          style="width:100%"
        ></el-input>
        <el-select
          v-if="item.type === TYPE_ENUM.SELECT"
          v-model="searchForm[item.value]"
          placeholder="请选择"
          style="width:100%"
        >
          <el-option
            v-for="opt in item.options"
            :key="opt.value"
            :label="opt.label"
            :value="opt.value"
          >
          </el-option>
        </el-select>
        <el-date-picker
          v-if="item.type === TYPE_ENUM.DATE"
          v-model="searchForm[item.value]"
          :type="item.dateType || 'date'"
          :clearable="false"
          placeholder="选择日期"
          format="yyyy 年 MM 月 dd 日"
        ></el-date-picker>
        <el-date-picker
          v-if="item.type === TYPE_ENUM.DATE_RANGE"
          v-model="searchForm[item.value]"
          :clearable="false"
          :type="item.dateType || 'daterange'"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          @change="dataRangePicker($event,item.startKey,item.endKey)"
        ></el-date-picker>
      </div>
    </div>
    <div class="searcher" :span="4">
      <div class="submit-btn">
        <el-button icon="el-icon-search" type="primary" @click="search">查询</el-button>
        <slot name="button"></slot>
      </div>
    </div>
  </el-card>
</template>
<script>
  import { TYPE_ENUM } from '@/components/cc-constants/constants'
  import moment from 'moment'

  export default {
    name: 'CcSearcher',
    props: {
      options: {
        type: Array,
        required: false,
        default: () => []
      },
      submitHandle: {
        type: Function,
        default: () => ({}),
      },
      valueForm: {
        type: Object,
        required: false,
        default: () => ({})
      },
      dateFormat: {
        type: String,
        default: 'YYYY-MM-DD HH:mm:ss'
      }
    },
    data() {
      return {
        TYPE_ENUM,
        searchForm: {},
      }
    },
    created() {
      this.initSearchForm()
    },
    methods: {
      search() {
        const form = { ...this.searchForm };
        ['', '_', '__', '___', 'undefined', 'null'].forEach(key => {
          if (form[key]) {
            delete form[key]
          }
        })
        this.$emit('submitHandle', this.searchForm)
      },
      initSearchForm() {
        this.options.forEach(e => {
          const { value, type } = e
          const valueFormValue = this.valueForm[value]
          if (type === TYPE_ENUM.DATE_RANGE && valueFormValue) {
            this.dataRangePicker(valueFormValue)
          }
          this.searchForm[value] = valueFormValue || ''
        })
        this.searchForm = { ...this.searchForm }
      },
      mergeForm(form = {}) {
        this.options.forEach(e => {
          const { value } = e
          this.searchForm[value] = this.valueForm[value] || ''
        })
        return form
      },
      dataRangePicker(event, startKey = 'startTime', endKey = 'endTime') {
        const [b, e] = event
        this.searchForm[startKey] = moment(b).format(this.dateFormat)
        this.searchForm[endKey] = moment(e).format(this.dateFormat)
      },
    },
  }
</script>
<style scoped lang="less">
  .el-card.cc-bar-container {
    line-height: 100%;
    width: 100%;
    min-width: 1024px;
    display: flex;
    .el-card__body {
      display: flex;
      width: 100%;
    }
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

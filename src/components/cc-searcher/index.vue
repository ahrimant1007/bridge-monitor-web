<template>
  <div class="cc-bar-container">
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
          clearable
          placeholder="选择日期"
          format="yyyy 年 MM 月 dd 日"
        ></el-date-picker>
        <el-date-picker
          v-if="item.type === TYPE_ENUM.DATE_RANGE"
          v-model="searchForm[item.value]"
          clearable
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
  </div>
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
      defaultValueForm: {
        type: Object,
        required: false,
        default: () => ({})
      },
    },
    data() {
      const searchForm = this.mergeForm()
      return {
        TYPE_ENUM,
        searchForm,
      }
    },
    watch: {
      defaultValueForm(value) {
        this.mergeForm(value)
      }
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
      mergeForm() {
        const form = this.searchForm || {}
        this.options.forEach(e => {
          const { value } = e
          form[value] = this.defaultValueForm[value] || ''
        })
        return form
      },
      dataRangePicker(event, startKey = 'startTime', endKey = 'endTime') {
        const [b, e] = event
        this.searchForm[startKey] = moment(b).format('YYYY-MM-DD')
        this.searchForm[endKey] = moment(e).format('YYYY-MM-DD')
      },
    },
  }
</script>
<style scoped lang="less">
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

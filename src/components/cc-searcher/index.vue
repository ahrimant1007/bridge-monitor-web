<template>
  <div class="cc-bar-container">
    <el-row :gutter="8">
      <el-col v-for="(item,idx) in options" :key="idx" :span="24/perCount">
        <div class="searcher">
          <div class="label">{{ item.label }} :</div>
          <div class="searcher-item">
            <el-input
              v-if="item.type === TYPE_ENUM.INPUT"
              v-model="searchForm[item.value]"
              :placeholder="`请输入${item.label}`"
            ></el-input>
            <el-select
              v-if="item.type === TYPE_ENUM.SELECT"
              v-model="searchForm[item.value]"
              placeholder="请选择"
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
            <treeselect
              v-if="item.type === TYPE_ENUM.TREE_SELECT"
              v-model="searchForm[item.value]"
              :options="treeOptions[item.value]"
              placeholder="请选择组织机构"
              :normalizer="normalizer"
              no-options-text="没有子节点"
              no-children-text="没有子节点"
            ></treeselect>
          </div>
        </div>
      </el-col>
      <el-col :span="24/perCount" :offset="24 - (options.length% perCount + 1) * (24/ perCount)">
        <div class="submit-btn">
          <el-button icon="el-icon-search" type="primary" @click="search">查询</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import { TYPE_ENUM } from './constants'
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
      perCount: {
        type: Number,
        default: 4,
      }
    },
    data() {
      const searchForm = {}
      const treeOptions = {}
      this.options.forEach(e => {
        const { type, value, service, param } = e
        searchForm[value] = ''
        // 定义树的options
        if (type === TYPE_ENUM.TREE_SELECT) {
          searchForm[value] = null
          treeOptions[value] = []
          this.setTreesOptions(value, service, param)
        }
      })
      return {
        TYPE_ENUM,
        treeOptions,
        searchForm,
        normalizer(node) {
          return {
            id: node.id,
            label: node.name
          }
        },
      }
    },
    methods: {
      search() {
        ['', '_', 'undefined', 'null'].forEach(key => delete this.searchForm[key])
        this.$emit('submitHandle', this.searchForm)
      },
      dataRangePicker(event, startKey = 'startTime', endKey = 'endTime') {
        const [b, e] = event
        this.searchForm[startKey] = moment(b).format('YYYY-MM-DD')
        this.searchForm[endKey] = moment(e).format('YYYY-MM-DD')
      },
      async setTreesOptions(key, service, param) {
        this.treeOptions[key] = await service(param)
      },
    },
  }
</script>

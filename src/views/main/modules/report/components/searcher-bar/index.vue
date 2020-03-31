<template>
  <div class="search-bar-container">
    <el-row :gutter="8">
      <el-col v-for="(item,idx) in options" :key="idx" :span="24/PER_ROW_COUNT">
        <div class="searcher">
          <div class="label">{{ item.label }} :</div>
          <div class="searcher-item">
            <el-input
              v-if="item.type === TYPE_ENUM.INPUT"
              v-model="searchForm[item.value]"
              :placeholder="`请输入${item.label}`"
            />
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
            />
            <el-date-picker
              v-if="item.type === TYPE_ENUM.DATE_RANGE"
              v-model="searchForm[item.value]"
              clearable
              :type="item.dateType || 'daterange'"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            />
          </div>
        </div>
      </el-col>
      <el-col :span="24/PER_ROW_COUNT" :offset="24 - (options.length% PER_ROW_COUNT + 1) * (24/ PER_ROW_COUNT)">
        <div class="submit-btn">
          <el-button icon="el-icon-search" type="primary" @click="search">查询</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  const TYPE_ENUM = {
    INPUT: 'INPUT',
    SELECT: 'SELECT',
    DATE: 'DATE',
    DATE_RANGE: 'DATE_RANGE',
    TREE_SELECT: 'TREE_SELECT'
  }

  export default {
    name: 'SearcherBar',
    props: {
      options: {
        type: Array,
        required: false,
        default: () => []
      },
      submitHandle: {
        type: Function,
        default: () => ({}),
      }
    },
    data() {
      const searchForm = {}
      this.options.forEach(e => {
        searchForm[e.value] = ''
      })
      return {
        PER_ROW_COUNT: 3,
        TYPE_ENUM,
        searchForm,
      }
    },
    methods: {
      search() {
        this.$emit('submitHandle', this.searchForm)
      }
    }
  }
</script>
<style scoped lang="scss">
  .search-bar-container {
    width: 100%;
    min-width: 1024px;
    line-height: 100%;
    padding: 20px;
    background: white;
    border-radius: 10px;
    margin-bottom: 10px;

    .searcher {
      display: flex;
      margin-bottom: 6px;

      .label {
        white-space: nowrap;
        width: 120px;
        text-align: right;
        padding-right: 10px;
        line-height: 40px;
        color: #333;
        font-size: 16px;
        font-weight: bold;
      }

      .searcher-item {
        width: 200px;
      }
    }

    .submit-btn {
      text-align: left;
      padding-left: 120px;
    }
  }
</style>

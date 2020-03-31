<template>
  <div class="sample-table-container">
    <el-table
      stripe
      border
      :data="dataList"
      :height="height"
      show-summary
    >
      <el-table-column
        v-for="column of columns"
        :key="column.value"
        :prop="column.value"
        :label="column.label"
        header-align="center"
        align="right"
      >
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
    name: 'SearcherBar',
    props: {
      columns: {
        type: Array,
        required: false,
        default: () => []
      },
      dataList: {
        type: Array,
        default: () => ({}),
      },
      height: {
        type: Number,
        default: 460,
      },
    },
    data() {
      return {}
    },
    methods: {
      getSummaries(param) {
        const { columns, data } = param
        const sums = []
        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = '合计'
            return
          }
          const values = data.map(item => Number(item[column.property]))
          if (!values.every(value => isNaN(value))) {
            sums[index] = values.reduce((prev, curr) => {
              const value = Number(curr)
              if (!isNaN(value)) {
                return prev + curr
              } else {
                return prev
              }
            }, 0)
          } else {
            sums[index] = 'N/A'
          }
        })

        return sums
      }
    }
  }
</script>
<style scoped>
  .sample-table-container {
    padding: 40px;
    background: white;
    border-radius: 10px;
    width: 100%;
    margin: auto;
  }
</style>

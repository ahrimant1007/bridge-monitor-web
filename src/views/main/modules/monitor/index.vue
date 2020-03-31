<style scoped lang="scss" src="./index.scss" />
<template>
  <div class="monitor-page">
    <el-container>
      <el-main>
      </el-main>
    </el-container>
  </div>
</template>
<script>
  export default {
    name: 'Monitor',
    data() {
      return {
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    methods: {
      selectModule(v, n) {
        console.log(v, n)
      }
    }
  }
</script>
<style scoped>
  .el-tree {
    height: 100%;
    background: #D3DCE6;
  }

  .el-tree-node__content {

  }
</style>

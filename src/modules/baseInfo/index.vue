<template>
  <div class="base-info-page">
    <el-container>
      <el-aside class="base-section">
        <bridge-list v-model="selectedId" />
      </el-aside>
      <el-main class="base-section">
        <bridge-detail
          v-if="selectedId"
          :bridge-id="selectedId"
        />
      </el-main>
    </el-container>
  </div>
</template>
<script>
  import BridgeDetail from './form'
  import BridgeList from './list'

  export default {
    name: 'BaseBridgeList',
    components: { BridgeDetail, BridgeList },
    data() {
      return {
        selectedId: null,
      }
    },
  }
</script>
<style>
</style>

<template>
  <div class="base-info-page">
    <el-container>
      <el-aside class="base-section">
        <bridge-tree v-model="selectedId" />
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
  import BridgeTree from '../components/tree'

  export default {
    name: 'BaseBridgeList',
    components: { BridgeDetail, BridgeTree },
    data() {
      return {
        selectedId: null,
      }
    },
  }
</script>
<style>
</style>

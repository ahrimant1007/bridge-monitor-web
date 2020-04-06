<template>
  <div class="base-info-page">
    <el-container>
      <el-aside>
        <el-card>
          <bridge-list v-model="selectedId" />
        </el-card>
      </el-aside>
      <el-main>
        <el-card>
          <bridge-detail
            v-if="selectedId"
            :bridge-id="selectedId"
          />
        </el-card>
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

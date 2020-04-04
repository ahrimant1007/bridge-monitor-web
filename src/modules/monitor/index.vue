<template>
  <div class="base-info-page">
    <el-container>
      <el-aside class="base-section">
        <bridge-tree v-model="selectedId" :use-level="1" />
      </el-aside>
      <el-main class="base-section">
        <el-tabs v-if="selectedId" v-model="tabIndex" type="border-card">
          <el-tab-pane
            v-for="item of tabList"
            :key="item.value"
            :label="item.label"
            :name="item.value"
          >
          </el-tab-pane>
          <realtime v-if="tabIndex === '0'" :sensor-id="selectedId" />
          <history v-if="tabIndex === '1'" :sensor-id="selectedId" />
          <realtime-eff v-if="tabIndex === '2'" :sensor-id="selectedId" />
          <history-eff v-if="tabIndex === '3'" :sensor-id="selectedId" />
          <warning v-if="tabIndex === '4'" :sensor-id="selectedId" />
        </el-tabs>
      </el-main>
    </el-container>
  </div>
</template>
<script>
  import BridgeTree from '../components/tree'
  import Realtime from './realtime'
  import RealtimeEff from './realtimeEff'
  import History from './history'
  import HistoryEff from './historyEff'
  import Warning from './warning'

  const tabList = [
    { value: '0', label: '实时曲线' },
    { value: '1', label: '历史曲线' },
    { value: '2', label: '车辆效应实时曲线' },
    { value: '3', label: '车辆效应历史曲线' },
    { value: '4', label: '安全预警' },
  ]

  export default {
    name: 'Monitor',
    components: {
      BridgeTree,
      Realtime,
      RealtimeEff,
      History,
      HistoryEff,
      Warning,
    },
    data() {
      return {
        selectedId: '',
        tabIndex: '0',
        tabList,
      }
    },
    watch: {
      selectedId() {
        console.log(this.selectedId)
      },
      tabIndex() {
        console.log(this.tabIndex, this.selectedId)
      }
    },
    methods: {
      tabClick(e) {
        console.log(e)
      }
    }
  }
</script>
<style>
</style>

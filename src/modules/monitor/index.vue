<template>
  <div class="base-info-page">
    <el-container>
      <el-aside>
        <el-card>
          <bridge-tree v-model="selectedId" />
        </el-card>
      </el-aside>
      <el-main :key="selectedId">
        <el-tabs
          v-if="selectedId && !!selectedSensor"
          :key="selectedId"
          v-model="tabIndex"
          type="border-card">
          <el-tab-pane
            v-for="item of tabList"
            :key="item.value"
            :label="item.label"
            :name="item.value"
          >
          </el-tab-pane>
          <realtime v-if="tabIndex === '0'" :sensor-id="selectedId" :detail="selectedSensor" />
          <history v-if="tabIndex === '1'" :sensor-id="selectedId" :detail="selectedSensor" />
          <realtime-eff v-if="tabIndex === '2'" :sensor-id="selectedId" :detail="selectedSensor" />
          <history-eff v-if="tabIndex === '3'" :sensor-id="selectedId" :detail="selectedSensor" />
          <warning v-if="tabIndex === '4'" :sensor-id="selectedId" :detail="selectedSensor" />
        </el-tabs>
      </el-main>
    </el-container>
  </div>
</template>
<script>
  import BridgeTree from './tree'
  import Realtime from './realtime'
  import RealtimeEff from './realtimeEff'
  import History from './history'
  import HistoryEff from './historyEff'
  import Warning from './warning'
  import service from '@/services/modules/sensor'

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
        selectedSensor: null,
        tabList,
      }
    },
    watch: {
      selectedId(n) {
        if (n !== this.bakId) {
          this.selectedSensor = null
          this.getSensorDetail(n)
          this.bakId = n
        }
      }
    },
    methods: {
      async getSensorDetail(id) {
        this.selectedSensor = await service.getItem(id)
      }
    }
  }
</script>
<style>
</style>

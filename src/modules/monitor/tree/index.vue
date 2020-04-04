<template>
  <div class="base-tree">
    <el-tree
      :props="props"
      :load="loadNode"
      style="min-height: 80vh"
      lazy
      @node-click="handleNodeClick"
    >
    </el-tree>
  </div>
</template>
<script>
  import service from '@/services/modules/base'
  // import sensorService from '@/services/modules/sensor'
  import monitorService from '@/services/modules/monitor'

  export default {
    model: {
      prop: 'selectedId',
      event: 'change'
    },
    props: {
      onSelectNode: {
        type: Function,
        default: () => [],
      },
      useLevel: {
        type: Number,
        default: 0,
      }
    },
    data() {
      return {
        selectedId: null,
        props: {
          label: 'label',
          children: 'children',
          isLeaf: 'isLeaf'
        },
      }
    },
    watch: {
      selectedId(value) {
        this.$emit('change', value)
      }
    },
    methods: {
      async loadNode(node, resolve) {
        if (node.level === this.useLevel + 1) {
          return resolve([])
        }
        if (node.level === 0) {
          const { list = [] } = await service.getList(
            { currentPage: 1, pageSize: 2000 })
          if (!this.selectedId && this.useLevel === 0 && list.length) {
            this.selectedId = list[0].bridgeId
          }
          return resolve(
            list.map(e => ({ ...e, id: e.bridgeId, label: e.bridgeName, isLeaf: this.useLevel < node.level }))
          )
        }
        if (node.level === 1) {
          const { bridgeId } = node.data
          const list = await monitorService.getBridgeSensorsList(bridgeId)
          // const { list = [] } = await sensorService.getList({ bridgeId, currentPage: 1, pageSize: 2000 })

          if (!this.selectedId && this.useLevel <= 1 && list.length) {
            this.selectedId = list[0].sensorId
          }
          return resolve(
            list.map(e => ({ ...e, id: e.sensorId, label: e.sensorShowNo, isLeaf: this.useLevel < node.level }))
          )
        }
      },
      handleNodeClick({ bridgeId, sensorId }) {
        if (this.useLevel === 0 && bridgeId) {
          this.selectedId = bridgeId
        } else if (this.useLevel === 1 && sensorId) {
          this.selectedId = sensorId
        }
      }
    }
  }
</script>
<style scoped lang="scss">
  .base-tree {
    padding: 2vh;
  }
</style>

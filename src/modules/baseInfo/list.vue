<template>
  <div class="base-tree">
    <div
      v-for="item in list"
      :key="item.bridgeId"
      :class="selectedId === item.bridgeId?'list-item selected':'list-item'"
      @click="selectedId=item.bridgeId"
    >
      {{ item.bridgeName }}
      <el-icon v-if="selectedId === item.bridgeId" class="el-icon-caret-right" />
    </div>
  </div>
</template>
<script>
  import service from '@/services/modules/base'

  export default {
    model: {
      prop: 'selectedId',
      event: 'change'
    },
    props: {},
    data() {
      return {
        selectedId: null,
        list: [],
      }
    },
    watch: {
      selectedId(value) {
        this.$emit('change', value)
      }
    },
    mounted() {
      this.getList()
    },
    methods: {
      async getList() {
        const { list = [] } = await service.getList({ currentPage: 1, pageSize: 2000 })
        this.list = list
        if (!this.selectedId && list.length) {
          this.selectedId = list[0].bridgeId
        }
      },
    }
  }
</script>
<style scoped lang="less">
  .base-tree {
    height: 75vh;
    overflow-y: auto;
    .list-item {
      margin: 4px 0;
      text-align: left;
      color: #333;
      padding: 4px 12px;
      cursor: pointer;
      display: flex;
      font-size: 14px;
      justify-content: space-between;
      line-height: 32px;
      background: rgba(255, 255, 255, .5);
      &.selected {
        color: white;
        font-size: 14px;
        font-weight: bold;
        background: rgba(0, 0, 0, .2);
        &:hover {
          filter: invert(5%);
        }
      }
      &:hover {
        filter: invert(10%);
      }
      .el-icon-caret-right {
        color: #ffd04b;
        font-size: 20px;
        line-height: 32px;
        font-weight: bold;
        transform: translateX(10px);
      }
    }
  }
</style>

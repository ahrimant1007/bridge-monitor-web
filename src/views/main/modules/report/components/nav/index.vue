<template>
  <div class="monitor-page-nav">
    <el-menu
      :default-active="menus[0].key"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
    >
      <el-menu-item
        v-for="menu of menus"
        :key="menu.key"
        :index="menu.key"
      >
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{ menu.title }}</span>
        </template>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
  export default {
    name: 'MonitorNav',
    props: {
      menus: {
        type: Array,
        default: () => []
      },
      select: {
        type: Function,
        default: () => []
      }
    },
    data() {
      return {}
    },
    methods: {
      handleSelect(path) {
        this.$emit('select', path)
      }
    }
  }
</script>
<style scoped lang="scss">
  .monitor-page-nav {
    background: #333;
    text-align: left;
    height: 100%;
  }
</style>

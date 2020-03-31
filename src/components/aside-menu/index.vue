<template>
  <div class="aside-page-nav">
    <el-menu
      router
      :default-active="matchedPath"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <template v-for="item of menus">
        <el-menu-item v-if="!item.sub" :key="item.path" :index="item.path">
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{ item.title }}</span>
          </template>
        </el-menu-item>
        <el-submenu v-else :key="item.path" :index="item.path">
          <template slot="title">
            <i :class="item.icon"></i>
            {{ item.title }}
          </template>
          <el-menu-item
            v-for="subItem of item.sub"
            :key="subItem.path"
            :index="subItem.path"
          >
            <template slot="title">
              <i :class="subItem.icon"></i>
              <span>{{ subItem.title }}</span>
            </template>
          </el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>
<script>
  import RouteMenuMixin from '@/mixins/route-menu-mixin'

  export default {
    name: 'AsidePageNav',
    mixins: [RouteMenuMixin],
    props: {
      menus: {
        type: Array,
        default: () => []
      },
    },
    data() {
      return {
      }
    },
  }
</script>
<style scoped lang="scss">
  .aside-page-nav {
    background: #555;
    text-align: left;
    height: 100%;
  }
</style>

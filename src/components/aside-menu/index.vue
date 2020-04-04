<template>
  <div class="aside-page-nav">
    <el-menu
      router
      :default-active="matchedPath"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="isCollapse"
    >
      <template v-for="item of menus">
        <el-menu-item v-if="!item.sub" :key="item.path" :index="item.path">
          <el-tooltip v-if="isCollapse" :content="item.title" placement="right">
            <i :class="item.icon"></i>
          </el-tooltip>
          <template v-else>
            <i :class="item.icon"></i>
          </template>
          <span>{{ item.title }}</span>
        </el-menu-item>
        <el-submenu v-else :key="item.path" :index="item.path" :title="item.title">
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{ item.title }}</span>
          </template>
          <el-menu-item
            v-for="subItem of item.sub"
            :key="subItem.path"
            :index="subItem.path"
          >
            <i :class="subItem.icon"></i>
            <span>{{ subItem.title }}</span>
          </el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
    <div class="collapse-btn" @click="isCollapse=!isCollapse">
      <el-icon :class="`el-icon-caret-${!isCollapse?'left':'right'}`" />
    </div>
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
        isCollapse: true
      }
    },
  }
</script>
<style scoped lang="scss">
  .collapse-btn {
    background-color: #646c74;
    color: #CCC;
    height: 28px;
    line-height: 20px;
    text-align: center;
    width: 99%;
    cursor: pointer;
    padding: 4px 0;

    &:hover {
      filter: invert(10%);
    }

    i {
      font-size: 22px;
    }
  }

  i.el-tooltip {
    font-size: 20px;
  }

  .el-tooltip__popper {
    background-color: #646c74;
  }
</style>

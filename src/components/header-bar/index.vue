<template>
  <div class="header-nav-bar">
    <div class="info">
      <p>{{ userInfo.realName || userInfo.name }}</p>
      <p>{{ nowTime }} {{ week }}</p>
    </div>
    <el-menu
      router
      :default-active="matchedPath"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      mode="horizontal"
      style="height: 60px"
    >
      <template v-for="group of menus">
        <el-menu-item
          v-if="!group.sub"
          :key="group.path"
          :index="group.path"
        >
          <template slot="title">
            <i :class="group.icon"></i>
            <span>{{ group.title }}</span>
          </template>
        </el-menu-item>
        <el-submenu
          v-else
          :key="group.path"
          :index="group.path"
        >
          <template slot="title">
            <i :class="group.icon"></i>
            {{ group.title }}
          </template>
          <el-menu-item
            v-for="item of group.sub"
            :key="item.path"
            :index="item.path"
          >
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{ item.title }}</span>
            </template>
          </el-menu-item>
        </el-submenu>
      </template>
      <el-menu-item index="/home">
        <template slot="title">
          <i class="el-icon-s-home" />
          <span>返回首页</span>
        </template>
      </el-menu-item>
      <el-menu-item index="/login">
        <template slot="title">
          <i class="el-icon-right" />
          <span>注销</span>
        </template>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import moment from 'moment'
  import RouteMenuMixin from '@/mixins/route-menu-mixin'

  const getTime = () => moment().format('YYYY-MM-DD hh:mm:ss')

  export default {
    mixins: [RouteMenuMixin],
    props: {
      menus: {
        type: Array,
        default: () => []
      },
    },
    data() {
      return {
        nowTime: getTime(),
        week: moment().format('dddd'),
        name: 'admin',
        matchedPath: '',
      }
    },
    computed: {
      ...mapGetters(['userInfo'])
    },
    created() {
      this.timer = setInterval(() => {
        this.nowTime = getTime()
      }, 1000)
    },
    beforeDestroy() {
      clearInterval(this.timer)
    }
  }
</script>
<style lang="less" scoped>
  .header-nav-bar {
    width: 640px;
    display: flex;
    justify-content: space-between;
  }
  .info {
    font-size: 14px;
    width: 240px;
    color: #eee;
    display: flex;
    justify-content: space-between;
  }
  .right {
    display: flex;
    font-size: 30px;
    a {
      color: rgba(255, 255, 255, .6);
      cursor: pointer;
      margin-right: 10px;
      &:hover {
        color: rgba(255, 255, 255, 1);
      }
      &:active {
        filter: invert(60%);
      }
    }
  }
</style>

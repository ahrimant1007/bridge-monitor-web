<style scoped lang="scss" src="./layout.scss" />
<template>
  <div class="page main-layout">
    <el-container v-if="initFinished">
      <el-header>
        <div class="header-title">
          <div class="title">{{ title }}</div>
        </div>
        <div class="header-right-bar">
          <header-bar :menus="headerMenus" />
        </div>
      </el-header>
      <el-container>
        <div class="aside-menus">
          <nav-menu :menus="asideMenus" />
        </div>
        <el-main>
          <breadcrumb />
          <router-view />
        </el-main>
      </el-container>
    </el-container>
    <div v-loading.fullscreen.lock="!initFinished" />
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import headerBar from '@/components/header-bar'
  import navMenu from '@/components/aside-menu'
  import breadcrumb from '@/components/breadcrumb'
  import { allModules } from '@/common/constants'

  export default {
    name: 'MainLayout',
    components: { headerBar, navMenu, breadcrumb },
    data() {
      return {
        title: '智慧桥梁监控平台'
      }
    },
    computed: {
      ...mapGetters(['userInfo', 'permissionMenus']),
      initFinished() {
        return !!this.userInfo.id
      },
      asideMenus() {
        return allModules.filter(e =>
          !e.headerNav && this.permissionMenus.find(pm => e.path.startsWith(pm.path))
        )
      },
      headerMenus() {
        return allModules.filter(e => e.headerNav)
      }
    },
    created() {
      this.$store.dispatch('getUserInfo')
    },
  }
</script>

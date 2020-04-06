<style scoped lang="scss" src="./index.scss"></style>
<template>
  <div class="page home-page">
    <div class="bg" />
    <div class="app-title">
      <span> {{ title }} </span>
    </div>
    <div class="demo-chart-0">
      <radar-charts />
    </div>
    <div class="router-path-container">
      <div v-for="(item,index) in checkedPermissionMenus" :key="item.subTitle">
        <div @click="routeTo(item.path)">
          <route-card
            :class="'fade-in-right-d'+index"
            :color="item.color"
            :bg-color="item.bgColor"
            :title="item.title"
            :sub-title="item.subTitle"
            :icon="item.icon"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import RouteCard from './components/RouteCard'
  import RadarCharts from './components/RadarCharts'
  import { allModules } from '@/common/constants'

  export default {
    name: 'Home',
    components: { RouteCard, RadarCharts },
    data() {
      return {
        title: '智慧桥梁检测系统',
        menu: allModules
      }
    },
    computed: {
      ...mapGetters(['userInfo', 'permissionMenus']),
      initFinished() {
        return !!this.userInfo.id && !!this.permissionMenus.length
      },
      checkedPermissionMenus() {
        return allModules.filter(m =>
          this.permissionMenus.find(pm => m.path.startsWith(pm.path))
        )
      }
    },
    created() {
      this.$store.dispatch('getUserInfo').catch(e => {
        console.log(123, e)
        alert(123)
      })
      this.$store.dispatch('getPermissionList').catch(e => {
        console.log(123, e)
        alert(123)
      })
    },
    methods: {
      routeTo(path) {
        this.$router.push(path)
      }
    }
  }
</script>

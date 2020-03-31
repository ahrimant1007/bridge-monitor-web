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
      <div v-for="(item,index) in menu" :key="item.subTitle">
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
  import { moduleConfigs } from '@/common/constants'

  export default {
    name: 'Home',
    components: { RouteCard, RadarCharts },
    data() {
      return {
        title: '智慧桥梁检测系统',
        menu: moduleConfigs
      }
    },
    computed: {
      ...mapGetters(['userInfo']),
      initFinished() {
        return !!this.userInfo.id
      },
    },
    created() {
      this.$store.dispatch('getUserInfo')
    },
    methods: {
      routeTo(path) {
        this.$router.push(path)
      }
    }
  }
</script>

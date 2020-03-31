<template>
  <div class="layout-breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        v-for="(route,idx) of matchedList"
        :key="route.path"
        :to="route.path"
      >
        <span v-if="idx===0" class="path-normal">{{ route.name }}</span>
        <span v-else-if="idx === matchedList.length - 1" class="path-normal">
          <b>{{ route.name }}</b></span>
        <span v-else class="path-a"><a>{{ route.name }}</a></span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
  export default {
    name: 'Breadcrumb',
    data() {
      return {
        matchedList: this.$route.matched,
      }
    },
    watch: {
      $route() {
        // console.log(this.$route.matched)
        this.matchedList = this.$route.matched
      }
    },
  }
</script>
<style scoped lang="less">
  .layout-breadcrumb {
    margin: 0 0 10px;
    .path-normal {
      color: #555;
      b {
        font-weight: bold;
      }
    }
  }
</style>

<template>
  <div class="not-found">
    <div class="code">404</div>
    <div>您访问的页面不存在！</div>
    <el-button type="primary" @click="$router.push('/login')">重新登录</el-button>
    <el-button style="margin: 10px" @click="$router.go(-1)">返回</el-button>
  </div>
</template>
<style scoped>
  .code {
    font-size: 60px;
  }
  .not-found {
    font-size: 26px;
    text-align: center;
    padding-top: 200px;
    color: rgba(0, 0, 0, .2)
  }
</style>

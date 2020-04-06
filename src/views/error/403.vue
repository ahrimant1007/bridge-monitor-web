<template>
  <div class="no-auth">
    <div class="code">403</div>
    <div>您访问没有访问的权限</div>
    <el-button style="margin: 10px" @click="$router.push('/home')">返回</el-button>
  </div>
</template>
<style scoped>
  .code {
    font-size: 60px;
  }
  .no-auth {
    font-size: 26px;
    text-align: center;
    padding-top: 200px;
    color: rgba(0, 0, 0, .2)
  }
</style>

<template>
  <div class="page login-page">
    <login-form />
    <background-canvas />
  </div>
</template>
<script>
  import backgroundCanvas from './background'
  import loginForm from './form'
  import tokenUtils from '@/utils/token'

  export default {
    name: 'Login',
    components: { backgroundCanvas, loginForm },
    created() {
      tokenUtils.clearToken();
    }
  }
</script>
<style scoped>
</style>

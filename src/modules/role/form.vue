<template>
  <div class="page form-page">
    <c-form
      :key-code="codeKey"
      :columns="formColumns"
      :service="service"
      :is-edit-form="isEditForm"
    />
  </div>
</template>
<script>
  import { config } from './config'
  import CForm from '@/components/cc-form'

  export default {
    components: { CForm },
    data() {
      console.log(this.$route.meta)
      return {
        ...config,
        isEditForm: this.$route.meta.formType === 'edit',
        searchForm: {},
      }
    },
    methods: {
      onSearch(form = {}) {
        this.searchForm = { ...(this.searchForm || {}), ...form }
      }
    }
  }
</script>
<style scoped lang="scss"></style>

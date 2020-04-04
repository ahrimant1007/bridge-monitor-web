<template>
  <div class="page form-page">
    <c-form
      :key-code="codeKey"
      frontend-key="sid"
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
      return {
        ...config,
        isEditForm: this.$route.meta.formType === 'edit',
        searchForm: {
          bridgeId: this.$route.params.id
        },
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

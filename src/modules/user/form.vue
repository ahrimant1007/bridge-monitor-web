<template>
  <div class="page form-page">
    <el-card>
      <c-form
        :columns="editOrAddColumns"
        :service="service"
        :is-edit-form="isEditForm"
      />
    </el-card>
  </div>
</template>
<script>
  import { config } from './config'
  import CForm from '@/components/cc-form'

  export default {
    components: { CForm },
    data() {
      console.log(config)
      return {
        ...config,
        isEditForm: this.$route.meta.formType === 'edit',
      }
    },
    computed: {
      editOrAddColumns() {
        return this.isEditForm ? this.formColumns.filter(e => e.value !== 'passwd')
          : this.formColumns
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

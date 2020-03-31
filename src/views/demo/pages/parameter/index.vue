<template>
  <div class="parameter">
    <simple-table
      :columns="columns"
      :actions="actions"
      :frontend-url="frontendUrl"
      :service="service"
    />
  </div>
</template>
<script>
  import { parameterConfig } from '../../config'
  import SimpleTable from '@/components/cc-table'

  export default {
    name: 'Parameter',
    components: { SimpleTable },
    data() {
      return { ...parameterConfig }
    },
  }
</script>

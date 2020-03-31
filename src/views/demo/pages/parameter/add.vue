<template>
  <div class="container">
    <inline-form
      ref="InlineForm"
      :item="item"
      cate="add"
      @doSubmit="handleDoSubmit"
    >
    </inline-form>
  </div>
</template>

<script>
  import _form from './form'
  import { CrudCMixin } from '@/mixins'
  import Service from '../../service/parameter_serv'

  export default {
    components: {
      'inline-form': _form
    },
    mixins: [CrudCMixin],
    data() {
      return {
        item: {
          name: '',
          crons: '',
          description: ''
        },
        addItemFunc: Service.addItem
      }
    },
    mounted() {
    },
    methods: {}
  }
</script>

<style scoped></style>

<template>
  <div class="container">
    <inline-form
      ref="InlineForm"
      :item="item"
      :type="type"
      cate="edit"
      @doSubmit="handleDoSubmit"
    >
    </inline-form>
  </div>
</template>
<script>
  import _form from './form'
  import { CrudUMixin } from '@/mixins'
  import service from '../../service/dictionary_serv'

  export default {
    components: {
      'inline-form': _form
    },
    mixins: [CrudUMixin],
    data() {
      return {
        type: 'edit',
        item: {
          name: '',
          info: '',
        },
        getItemFunc: service.getItem,
        editItemFunc: service.editItem,
        updateItemFunc: (target) => {
          for (const i in this.item) {
            this.item[i] = target[i]
          }
        }
      }
    },
    mounted() {

    },
    methods: {}
  }
</script>
<style scoped>
</style>

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
  import service from '../../../service/dictionary_sub_serv'

  export default {
    components: {
      'inline-form': _form
    },
    mixins: [CrudUMixin],
    data() {
      return {
        type: 'edit',
        item: {
          code: '',
          name: '',
          info: '',
          orderNum: '',
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
    created() {
      this.id = this.$route.params.child_id
    },
  }
</script>

<style scoped>

</style>

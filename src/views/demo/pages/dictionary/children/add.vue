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
  import _form from './form.vue'
  import { CrudCMixin } from '@/mixins'
  import Service from '../../../service/dictionary_sub_serv'

  export default {
    components: {
      'inline-form': _form
    },
    mixins: [CrudCMixin],
    data() {
      return {
        item: {
          name: '',
          code: '',
          info: '',
          orderNum: 0,
          typeCode: this.$route.params.id || '',
        },
        addItemFunc: Service.addItem
      }
    },
  }
</script>

<style scoped></style>

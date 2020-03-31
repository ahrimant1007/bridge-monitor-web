/**
 * CRUD中通用表单的依赖方法
 * @type {{methods: {handleBackClick(): void, handleSubmitClick(): void, valid(*): void}}}
 */
export const CrudFMixin = {
  data() {
    return {
      handleSubmitFunc: 'doSubmit',
      formName: 'moForm'
    }
  },
  methods: {
    handleBackClick() {
      this.$router.go(-1)
    },
    handleSubmitClick() {
      this.$emit(this.handleSubmitFunc)
    },
    valid(callback) {
      this.$refs[this.formName].validate(valid => {
        callback(valid)
      })
    }
  }
}

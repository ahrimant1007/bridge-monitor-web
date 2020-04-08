<template>
  <el-form
    ref="cForm"
    class="c-form"
    :model="model"
    :rules="rules"
    label-width="130px"
    :class="classname"
  >
    <el-row>
      <el-col v-for="column of columns" :key="column.value" :span="column.span || 24">
        <el-form-item
          :label="column.label+'：'"
          :prop="column.value"
          :rules="column.rules"
        >
          <el-input
            v-if="column.type === TYPE_ENUM.INPUT || !column.type"
            v-model="model[column.value]"
            :disabled="column.disabled"
          ></el-input>
          <el-input
            v-if="column.type === TYPE_ENUM.NUMBER"
            v-model="model[column.value]"
            :disabled="column.disabled"
            type="number"
          ></el-input>
          <el-input
            v-if="column.type === TYPE_ENUM.TEXT_AREA"
            v-model="model[column.value]"
            :disabled="column.disabled"
            :rows="3"
            type="textarea"
          ></el-input>
          <el-input
            v-if="column.type === TYPE_ENUM.PASSWORD"
            v-model="model[column.value]"
            :disabled="column.disabled"
            show-password
          ></el-input>
          <el-select
            v-if="column.type === TYPE_ENUM.SELECT"
            v-model="model[column.value]"
            :disabled="column.disabled"
            placeholder="请选择"
            style="width:100%"
          >
            <template v-if="!!column.service">
              <el-option
                v-for="opt in dimOptions[column.value]"
                :key="opt.value"
                :label="opt.label"
                :value="opt.value"
              />
            </template>
            <template v-else>
              <el-option
                v-for="opt in column.options"
                :key="opt.value"
                :label="opt.label"
                :value="opt.value"
              />
            </template>
          </el-select>
          <el-date-picker
            v-if="column.type === TYPE_ENUM.DATE"
            v-model="model[column.value]"
            :disabled="column.disabled"
            :type="column.dateType || 'date'"
            clearable
            placeholder="选择日期"
            format="yyyy 年 MM 月 dd 日"
          ></el-date-picker>
          <el-date-picker
            v-if="column.type === TYPE_ENUM.DATE_RANGE"
            v-model="model[column.value]"
            :disabled="column.disabled"
            clearable
            :type="column.dateType || 'daterange'"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            @change="dataRangePicker($event,column.startKey,column.endKey)"
          ></el-date-picker>
        </el-form-item>
      </el-col>
    </el-row>
    <el-form-item v-if="!isReview">
      <el-button type="primary" class="form-btn" @click="submitHandle">提交</el-button>
      <el-button class="form-btn" @click="goBack">取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
  import { TYPE_ENUM } from '@/components/cc-constants/constants'
  import moment from 'moment'

  export default {
    name: 'CcForm',
    props: {
      columns: {
        type: Array,
        required: true,
        default: () => []
      },
      rules: {
        type: Object,
        required: false,
        default: () => ({})
      },
      defaultValueForm: {
        type: Object,
        required: false,
        default: () => ({})
      },
      isEditForm: {
        type: Boolean,
        required: false,
        default: true,
      },
      codeKey: {
        type: String,
        required: false,
        default: 'id'
      },
      codeValue: {
        type: String,
        required: false,
        default: null
      },
      frontendKey: {
        type: String,
        required: false,
        default: 'id'
      },
      classname: {
        type: String,
        default: ''
      },
      service: {
        type: Object,
        required: true,
        default: () => ({}),
      },
      responseIntercept: {
        type: Function,
        default: d => d,
      },
      submitIntercept: {
        type: Function,
        default: d => d,
      },
      isReview: {
        type: Boolean,
        default: false,
      },
      outSubmit: {
        type: Function,
        default: null,
      },
      getDataCallBack: {
        type: Function,
        default: () => ({}),
      }
    },
    data() {
      const model = {}
      this.columns.forEach(e => {
        if (e.type === TYPE_ENUM.TREE_SELECT) {
          model[e.value] = null
        } else {
          model[e.value] = this.defaultValueForm[e.value] || ''
        }
        if (e.service) {
          this.setDimOptions(e.value, e.service, e.param)
        }
      })
      return {
        model,
        submitFunc: null,
        TYPE_ENUM,
        dimOptions: {}
      }
    },
    watch: {
      defaultValueForm(value) {
        this.model = { ...this.model, ...value }
      },
      codeValue(value) {
        this.id = value
        if (this.isEditForm) {
          this.getData()
        }
      }
    },
    created() {
      this.id = this.codeValue || this.$route.params[this.frontendKey]
      let submitFunc
      if (this.isEditForm) {
        this.getData()
        submitFunc = this.service.editItem
      } else {
        submitFunc = this.service.addItem
      }
      this.submitFunc = submitFunc
    },
    methods: {
      async getData() {
        const data = await this.service.getItem(this.id)
        if (this.responseIntercept && data) {
          this.model = this.responseIntercept(data)
          this.$emit('getDataCallBack', { ...this.model })
        }
      },
      async setDimOptions(key, service, param) {
        if (key && service) {
          this.dimOptions[key] = await service(param)
          this.dimOptions = { ...this.dimOptions }
        }
      },
      dataRangePicker(event, startKey = 'startTime', endKey = 'endTime') {
        const [b, e] = event
        this.model[startKey] = moment(b).format('YYYY-MM-DD')
        this.model[endKey] = moment(e).format('YYYY-MM-DD')
      },
      submitHandle() {
        const { cForm: form } = this.$refs
        form.validate(async valid => {
          if (valid) {
            const result = { ...this.model }
            if (this.outSubmit) {
              this.$emit('outSubmit', result)
            } else {
              const model = this.submitIntercept(result)
              await this.submitFunc(model)
              this.$message.success(`${this.isEditForm ? '修改' : '添加'}成功!`)
              this.goBack()
            }
          } else {
            this.$message.error('数据填写错误，请按要求填写!')
          }
        })
      },
      goBack() {
        this.$router.go(-1)
      },
    }
  }
</script>
<style scoped>
</style>

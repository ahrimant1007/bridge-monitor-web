<template>
  <div class="page form-page">
    <el-card>
      <div class="user-details">
        <div v-for="prop in propertyList" :key="prop.key" class="detail-row">
          <div class="detail-label">{{ prop.label }}:</div>
          <div class="detail-value">{{ prop.value }}</div>
        </div>
        <div style="text-align: center">
          <el-button @click="goBack">返回</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import service from '@/services'
  import moment from 'moment'

  export default {
    name: 'UserInfoDetail',

    data() {
      return {
        propertyList: []
      }
    },
    computed: {
      ...mapGetters(['userInfo']),
    },
    async mounted() {
      const data = await service.getUserInfo(this.userInfo.id)
      const columnList = [
        { key: 'userName', label: '用户名' },
        { key: 'institutionName', label: '单位' },
        { key: 'realName', label: '姓名' },
        { key: 'createUser', label: '创建人' },
      ]
      const list = columnList.map(e => ({ ...e, value: data[e.key] }))
      const t = { key: 'createTime', label: '创建时间', value: moment(data.createTime).format('YYYY-MM-DD HH:mm:ss') }
      list.push(t)
      this.propertyList = list
    },
    methods: {
      goBack() {
        this.$router.go(-1)
      },
    }
  }
</script>
<style scoped lang="less">
  .user-details {
    .detail-row {
      display: flex;
      color: #555;
      margin: 20px;
      line-height: 50px;
      .detail-label {
        width: 200px;
        font-size: 20px;
        text-align: right;
      }
      .detail-value {
        margin-left: 40px;
        color: #999;
        font-size: 22px;
        text-align: left;
      }
    }
  }
</style>

import service from '@/services'
import token from '@/utils/token';

const user = {
  state: {
    userInfo: {},
    orgList: []
  },

  mutations: {
    setUserInfo: (state, userInfo) => {
      state.userInfo = userInfo
    },
    setOrgList: (state, orgList = []) => {
      state.orgList = orgList
    },
  },
  actions: {
    // 获取当前登陆用户信息
    async getUserInfo({ commit, state }) {
      const tokenInfo = token.getToken()
      const userInfo = await service.getUserInfo(tokenInfo.id)
      // todo 临时用id替代
      userInfo.token = userInfo.id
      commit('setUserInfo', userInfo)
      return userInfo
    },
  }
}

export default user

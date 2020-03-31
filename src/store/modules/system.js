const system = {
  state: {
    sysId: '',
    language: 'zh'
  },
  mutations: {
    setSystemId: (state, sysId) => {
      state.sysId = sysId
    },
    setLanguage: (state, language) => {
      state.language = language
    },
  },
  actions: {
    changeLanguage({ commit }, { language = 'zh' }) {
      // some service update lang . then
      commit('setSystemId', language)
    }
  }
}

export default system

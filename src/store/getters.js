const getters = {
  language: state => state.system.language,
  sysId: state => state.system.sysId,
  token: state => state.user.userInfo.token,
  userInfo: state => state.user.userInfo,
  orgList: state => state.user.orgList,
  permissionMenus: state => state.user.menus,
}

export default getters

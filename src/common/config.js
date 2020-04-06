// const { NODE_ENV } = process.env
const NODE_ENV = 'dev'

const local = {
  // 本地mock地址
  baseUrl: '/mock/',
}
const dev = {
  // 服务端api 地址
  baseUrl: '/api/',
}
const prod = {
  // 生产环境
  baseUrl: '/api/',
}

const config = { local, dev, prod }[NODE_ENV]

export default {
  ...config,
  projectName: 'bridge-monitor',
  env: NODE_ENV,
}

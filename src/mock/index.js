import Mock from 'mockjs';

Mock.setup({
  timeout: '200-600'
});

let configArray = [];

const files = require.context('.', true, /\.js$/);
files.keys().forEach((key) => {
  if (key !== './index.js' && !String(key).startsWith('./data')) {
    configArray = configArray.concat(files(key).default);
  }
});
configArray.forEach((item) => {
  for (const [path, target] of Object.entries(item)) {
    const protocol = path.split('|');
    Mock.mock(new RegExp('^' + protocol[1]), protocol[0], target);
  }
});

import moment from 'moment'

// todo 1:增加传感器类型 （头部标题显示）
// todo 2:增加单位 （y轴标题显示）
// todo 3:增加传感器编号（x轴标题显示）
export const getLineOption = (title = '', data = [], color = '#7CB5EC') => {
  return {
    color: color,
    grid: {
      left: 80,
      right: 10,
    },
    title: {
      text: title,
      left: 'center',
      textStyle: {
        fontFamily: '微软雅黑',
        fontSize: 20,
        color: '#3E576F'
      }
    },
    tooltip: {
      trigger: 'axis',
      formatter: function (param) {
        const [time, value] = param[0].data
        return ` ${moment(time).format('YYYY-MM-DD HH:mm:ss')} : ${value}  `
      },
      axisPointer: {
        animation: false
      }
    },
    xAxis: {
      type: 'time',
      splitLine: {
        show: false
      },
      name: '传感器编号：' || title,
      nameLocation: 'center',
      nameGap: 40,
      nameTextStyle: {
        fontFamily: '微软雅黑',
        fontSize: 20,
        color: '#3E576F'
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '100%'],
      splitLine: {
        show: false
      },
      name: '单位：' || title,
      nameLocation: 'center',
      nameGap: 50,
      nameTextStyle: {
        fontFamily: '宋体',
        fontSize: 16,
        color: '#000'
      },
      axisLine: {
        show: true
      },
      axisTick: {
        show: false
      }
    },
    series: [{
      type: 'line',
      hoverAnimation: false,
      data: data,
      smooth: false,
      symbol: 'rect',
      symbolSize: 1
    }]
  }
}

export const getLineZoomOption = (title = '', data = [], color = '#17a2b8') => {
  return {
    color: color,
    grid: {
      left: 40,
      right: 20,
    },
    title: {
      text: title
    },
    tooltip: {
      trigger: 'axis',
      formatter: function (param) {
        const [time, value] = param[0].data
        return moment(time).format('YYYY-MM-DD HH:mm:ss') + ': ' + value
      },
      axisPointer: {
        animation: false
      }
    },
    dataZoom: [
      {
        show: true,
        realtime: true,
        start: 65,
        end: 85
      },
      {
        type: 'inside',
        realtime: true,
        start: 65,
        end: 85
      }
    ],
    xAxis: {
      type: 'time',
      splitLine: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '100%'],
      splitLine: {
        show: false
      }
    },
    series: [{
      type: 'line',
      showSymbol: false,
      hoverAnimation: false,
      data: data
    }]
  }
}

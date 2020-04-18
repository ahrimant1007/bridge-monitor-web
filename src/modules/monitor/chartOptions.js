import moment from 'moment'

const textStyle = {
  fontFamily: '微软雅黑',
  fontSize: 16,
  color: '#3E576F'
}
// todo 1:增加传感器类型 （头部标题显示）
// todo 2:增加单位 （y轴标题显示）
// todo 3:增加传感器编号（x轴标题显示）
export const getLineOption = (
  title = '',
  data = [],
  color = '#7CB5EC',
  xName,
  markLineOrangeValue = 0,
  markLineYellowValue = 0,
  unit,
) => {
  return {
    color: color,
    grid: {
      left: 80,
      right: 20,
    },
    title: {
      text: '传感器编号：' + xName + (unit ? ('  单位：' + unit) : ''),
      left: 'center',
      textStyle,
    },
    tooltip: {
      trigger: 'axis',
      formatter: function (param) {
        const [time, value] = param[0].data
        return `${moment(time).format('YYYY-MM-DD HH:mm:ss')}<br />${value}  `
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
      axisLine: {
        show: true
      },
      axisTick: {
        show: false
      },
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '100%'],
      splitLine: {
        show: false
      },
      axisLine: {
        show: true
      },
      axisTick: {
        show: false
      },
      scale: true,
      min: function (value) {
        const v = Math.floor(value.min - Math.abs(value.min * 0.1))
        return Math.min(v, Math.round(markLineOrangeValue - 1), markLineYellowValue)
      },
      max: function (value) {
        const v = Math.ceil(value.max + Math.abs(value.min * 0.1))
        return Math.max(v, Math.round(markLineOrangeValue + 1), markLineYellowValue)
      }
    },
    series: [{
      type: 'line',
      hoverAnimation: false,
      data: data,
      smooth: false,
      symbol: 'rect',
      symbolSize: 1,
      markLine: markLineOrangeValue ? {
        itemStyle: {
          normal: { label: { show: true, position: 'left' } }
        },
        data: [
          {
            name: '橙色预警',
            yAxis: markLineOrangeValue,
            lineStyle: {
              type: 'solid',
              color: 'orange'
            }
          },
          {
            name: '黄色预警',
            yAxis: markLineYellowValue,
            lineStyle: {
              type: 'solid',
              color: 'yellow'
            }
          },
        ]
      } : undefined
    }]
  }
}

export const getLineZoomOption = (
  title = '',
  data = [],
  color = '#17a2b8',
  xName,
  markLineOrangeValue = 0,
  markLineYellowValue = 0,
  unit,
) => {
  return {
    color: color,
    grid: {
      left: 40,
      right: 20,
    },
    title: {
      text: '传感器编号：' + xName + (unit ? ('  单位：' + unit) : ''),
      left: 'center',
      textStyle,
    },
    tooltip: {
      trigger: 'axis',
      formatter: function (param) {
        const [time, value] = param[0].data
        return moment(time).format('YYYY-MM-DD HH:mm:ss') + '<br/>' + value
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
      },
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '100%'],
      splitLine: {
        show: false
      },
      scale: true,
      min: function (value) {
        const v = Math.floor(value.min - Math.abs(value.min * 0.1))
        return Math.min(v, Math.round(markLineOrangeValue - 1), markLineYellowValue)
      },
      max: function (value) {
        const v = Math.ceil(value.max + Math.abs(value.min * 0.1))
        return Math.max(v, Math.round(markLineOrangeValue + 1), markLineYellowValue)
      }
    },
    series: [{
      type: 'line',
      showSymbol: false,
      hoverAnimation: false,
      data: data,
      markLine: markLineOrangeValue ? {
        itemStyle: {
          normal: { label: { show: true, position: 'left' } }
        },
        data: [
          {
            name: '橙色预警',
            yAxis: markLineOrangeValue,
            lineStyle: {
              type: 'solid',
              color: 'orange'
            }
          },
          {
            name: '黄色预警',
            yAxis: markLineYellowValue,
            lineStyle: {
              type: 'solid',
              color: 'yellow'
            }
          },
        ]
      } : undefined
    }]
  }
}

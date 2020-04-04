import moment from 'moment'

export const getLineOption = (title = '', data = [], color = '#17a2b8') => {
  return {
    color: color,
    title: {
      text: title
    },
    tooltip: {
      trigger: 'axis',
      formatter: function (param) {
        const [time, value] = param[0].data
        return ` ${moment(time).format('YYYY-MM-DD HH:mm:ss')} : ${value}  `;
      },
      axisPointer: {
        animation: false
      }
    },
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

export const getLineZoomOption = (title = '', data = [], color = '#17a2b8') => {
  return {
    color: color,
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

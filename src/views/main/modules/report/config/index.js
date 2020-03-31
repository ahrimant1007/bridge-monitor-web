export const MODULE_TYPE = {
  NAME1: 'NAME1',
  NAME2: 'NAME2',
  NAME3: 'NAME3',
  NAME4: 'NAME4',
  NAME5: 'NAME5',
  NAME6: 'NAME6',
  NAME7: 'NAME7',
  NAME8: 'NAME8',
}

const CHART_TYPE = {
  PIE: 'pie',
  BAR: 'bar',
}

const getBarOption = (list = [], title = '') => {
  const data = list.filter(e => e.value)
  const label = list.filter(e => e.name)
  return {
    color: ['#3398DB'],
    title: {
      text: title,
      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b} : {c}'
    },
    xAxis: {
      type: 'category',
      data: label
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data,
        type: 'bar',
        name: 'demoData',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(220, 220, 220, 0.8)'
        }
      },
    ]
  }
}

const getPieOption = (list = [], title = '') => {
  const data = list.filter(e => e.value)
  const label = list.filter(e => e.name)
  return {
    title: {
      text: title,
      top: 10,
      left: 50,
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b} : {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      right: '20%',
      data: label,
    },
    series: [
      {
        type: 'pie',
        radius: '65%',
        center: ['40%', '50%'],
        data,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
}

export const moduleConfig = {
  [MODULE_TYPE.NAME1]: {
    key: MODULE_TYPE.NAME1,
    title: '承诺偿还分区汇总',
    chartType: CHART_TYPE.PIE,
    chartTitle: '剩余总额分区分布',
  }, [MODULE_TYPE.NAME2]: {
    key: MODULE_TYPE.NAME2,
    title: '存量债务分区汇总',
    chartType: CHART_TYPE.PIE,
    chartTitle: '存量债务分区分布',
  }, [MODULE_TYPE.NAME3]: {
    key: MODULE_TYPE.NAME3,
    title: '全口径债务分区汇总',
    chartType: CHART_TYPE.PIE,
    chartTitle: '',
  }, [MODULE_TYPE.NAME4]: {
    key: MODULE_TYPE.NAME4,
    title: '提供担保分区汇总',
    chartType: CHART_TYPE.PIE,
    chartTitle: '剩余总金额占比分布',
  }, [MODULE_TYPE.NAME5]: {
    key: MODULE_TYPE.NAME5,
    title: '隐性债务分区汇总',
    chartType: CHART_TYPE.PIE,
    chartTitle: '剩余总金额占比分布',
  }, [MODULE_TYPE.NAME6]: {
    key: MODULE_TYPE.NAME6,
    title: '应付工程物资款分区汇总',
    chartType: CHART_TYPE.PIE,
    chartTitle: '应付工程物资款地区分布占比图',
  }, [MODULE_TYPE.NAME7]: {
    key: MODULE_TYPE.NAME7,
    title: '政府性债务分区汇总',
    chartType: CHART_TYPE.PIE,
    chartTitle: '',
  }, [MODULE_TYPE.NAME8]: {
    key: MODULE_TYPE.NAME8,
    title: '应付工程物资款贷款年度分析',
    chartType: CHART_TYPE.BAR,
    chartTitle: '应付工程物资年度分布图',
  },
}

export const getChartOption = (chartType, data, title) => {
  switch (chartType) {
    case CHART_TYPE.BAR:
      return getBarOption(data, title)
    case CHART_TYPE.PIE:
      return getPieOption(data, title)
    default:
      return getBarOption(data, title)
  }
}

export const getTableColumns = (moduleType) => {
  switch (moduleType) {
    case MODULE_TYPE.NAME1: {
      return [
        { value: 'name', label: '区县名称', isChartKey: true },
        { value: 'name1', label: '债务数量' },
        { value: 'name2', label: '剩余总金额', isChartValue: true },
        { value: 'name3', label: '单笔醉大金额' },
        { value: 'name4', label: '最早日期' },
      ]
    }
    case MODULE_TYPE.NAME2: {
      return [
        { value: 'name', label: '区县名称', isChartKey: true },
        { value: 'name1', label: '存量债务', isChartValue: true },
        { value: 'name2', label: '存量政府债务' },
        { value: 'name3', label: '存量或有债务' },
      ]
    }
    case MODULE_TYPE.NAME3: {
      return [
        { value: 'name', label: '区县名称', isChartKey: true },
        { value: 'name1', label: '预期余额(万元)', isChartValue: true },
      ]
    }
    case MODULE_TYPE.NAME4: {
      return [
        { value: 'name', label: '区县名称', isChartKey: true },
        { value: 'name1', label: '债务数量' },
        { value: 'name2', label: '剩余总金额', isChartValue: true },
        { value: 'name3', label: '单笔最大金额' },
        { value: 'name4', label: '最早时间' },
      ]
    }
    case MODULE_TYPE.NAME5: {
      return [
        { value: 'name', label: '区县名称', isChartKey: true },
        { value: 'name1', label: '债务数量' },
        { value: 'name2', label: '剩余总金额', isChartValue: true },
        { value: 'name3', label: '单笔最大金额' },
        { value: 'name4', label: '最早时间' },
      ]
    }
    case MODULE_TYPE.NAME6: {
      return [
        { value: 'name', label: '区县名称', isChartKey: true },
        { value: 'name1', label: '债务数量' },
        { value: 'name2', label: '剩余总金额', isChartValue: true },
        { value: 'name3', label: '单笔最大金额' },
        { value: 'name4', label: '最早时间' },
      ]
    }
    case MODULE_TYPE.NAME7: {
      return [
        { value: 'name', label: '区县名称', isChartKey: true },
        { value: 'name1', label: '期末余额(万元）', isChartValue: true },
      ]
    }
    case MODULE_TYPE.NAME8: {
      return [
        { value: 'name', label: '年份', isChartKey: true },
        { value: 'name1', label: '债务数量' },
        { value: 'name2', label: '债务金额', isChartValue: true },
      ]
    }
    default: {
      return []
    }
  }
}

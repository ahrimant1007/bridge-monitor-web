<template>
  <div class="home-radar-chart" />
</template>

<script>
  import echarts from 'echarts/lib/echarts';
  // 引入
  import 'echarts/lib/chart/radar';

  const demoData = [
    [228, 79, 120, 17, 75, 41],
    [94, 166, 110, 22, 62, 31],
    [31, 22, 130, 59, 32, 16],
    [131, 122, 30, 79, 132, 116],

  ];
  export default {
    name: 'RadarChart',
    mounted() {
      const el = document.querySelector('.home-radar-chart');
      this.chart = echarts.init(el);
      this.initData();
    },
    methods: {
      initData() {
        const option = {
          radar: {
            indicator: [
              { name: '疲劳分析', max: 300 },
              { name: '常规定检', max: 250 },
              { name: '常规评定', max: 300 },
              { name: '荷载测试', max: 100 },
              { name: '检测分析', max: 200 },
            ],
            // shape: 'circle',
            splitNumber: 5,
            name: {
              textStyle: {
                color: 'rgb(238, 197, 102)'
              }
            },
            splitLine: {
              lineStyle: {
                color: [
                  'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
                  'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.4)',
                  'rgba(238, 197, 102, 0.6)', 'rgba(238, 197, 102, .6)'
                ].reverse()
              }
            },
            splitArea: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(238, 197, 102, 0.5)'
              }
            }
          },
          series: [
            {
              name: '',
              type: 'radar',
              lineStyle: {
                normal: {
                  width: 1,
                  opacity: 0.6
                }
              },
              data: demoData,
              symbol: 'none',
              itemStyle: {
                color: '#F9713C'
              },
              areaStyle: {
                opacity: 0.1
              }
            },
          ]
        };

        this.chart.setOption(option);
      }
    },
  }
</script>

<style scoped>
  .home-radar-chart {
    width: 270px;
    height: 210px;
  }
</style>

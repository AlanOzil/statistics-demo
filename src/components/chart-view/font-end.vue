<template>
<div class="font-end">
  <transition name="fade">
    <charts-wrapper @_resize="_resize" @_initChart="_initChart" @closeModule="closeModule" v-if="chartsIndexList.includes(chartsIndex)" :width="'100%'" :height="350" :title="chartsList[chartsIndex].name">
      <div class="echarts" id="font-end-echarts">

      </div>
    </charts-wrapper>
  </transition>
</div>
</template>

<script type="text/ecmascript-6">
import ChartsWrapper from 'components/charts-wrapper/charts-wrapper'
import echarts from 'echarts'
import {
  CHARTSINDEX
} from 'js/config'
export default {
  components: {
    ChartsWrapper
  },
  props: {
    chartsIndexList: {
      type: Array,
      default: []
    },
    chartsList: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      myChart: {},
      chartsIndex: 0
    }
  },
  mounted() {
    setTimeout(() => {
      this.chartsIndex = CHARTSINDEX.fontEnd
    }, 20)
  },
  methods: {
    closeModule() {
      this.$emit('closeModule', CHARTSINDEX.fontEnd)
    },
    _initChart() {
      let option = {
        color: ['#3398DB', '#f7a510'],
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['前台使用人数', '后台使用人数']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          top: '20',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: ['13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30', '13:35', '13:40', '13:45', '13:50', '13:55'],
          axisTick: {
            alignWithLabel: true
          }
        }],
        yAxis: [{
          // type : 'category',
          // data : ['10','20','30','40'],
          axisTick: {
            alignWithLabel: true
          }
        }],
        series: [{
          name: '前台使用人数',
          type: 'line',
          barWidth: '40%',
          data: [1, 3, 2, 3, 4, 2, 1, 3, 3, 2, 3, 2]
        }, {
          name: '后台使用人数',
          type: 'line',
          barWidth: '40%',
          data: [7, 6, 5, 8, 8, 10, 7, 9, 8, 11, 10, 12]
        }],
        label: {
          normal: {
            show: true,
            position: 'top',
            formatter: '{c}'
          }
        },
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(17, 168,171, 1)'
            }, {
              offset: 1,
              color: 'rgba(17, 168,171, 0.1)'
            }]),
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowBlur: 10
          }
        }
      }

      this.myChart = echarts.init(document.getElementById('font-end-echarts'))
      this.myChart.setOption(option)
    },
    _resize() {
      if (this.myChart) {
        this.myChart.resize()
      }
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.font-end
  width: 100%
  /deep/ .charts-wrapper
    width: 40%
.echarts
  width: 100%
  height: 100%
.fade-enter-active, .fade-leave-active
  transition: opacity .5s
.fade-enter, .fade-leave-to
  opacity: 0
</style>

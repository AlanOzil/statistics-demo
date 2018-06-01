<template>
<div class="back-end">
  <transition name="fade">
    <charts-wrapper @_resize="_resize" @_initChart="_initChart" @closeModule="closeModule" v-if="chartsIndexList.includes(chartsIndex)" :width="'%'" :height="400" :title="chartsList[chartsIndex].name">
      <div class="echarts" id="back-end-echarts">

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
      chartsIndex: 1
    }
  },
  mounted() {
    setTimeout(() => {
      this.chartsIndex = CHARTSINDEX.backEnd
    }, 20)
  },
  methods: {
    closeModule() {
      this.$emit('closeModule', CHARTSINDEX.backEnd)
    },
    _initChart() {
      let option = {
        color: ['#3398DB'],
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
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
            name: '直接访问',
            type: 'line',
            barWidth: '40%',
            data: [7, 6, 5, 8, 8, 10, 7, 9, 8, 11, 10, 12]
          },

        ],
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

      this.myChart = echarts.init(document.getElementById('back-end-echarts'))
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
.back-end
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

<template>
<div class="leader-mail">
  <transition name="fade">
    <charts-wrapper @_resize="_resize" @_initChart="_initChart" @closeModule="closeModule" v-if="chartsIndexList.includes(chartsIndex)" :width="'%'" :height="350" :title="chartsList[chartsIndex].name">
      <div class="echarts" id="leader-mail-echarts">

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
      chartsIndex: 3,
      hover: -1,
    }
  },
  mounted() {
    setTimeout(() => {
      this.chartsIndex = CHARTSINDEX.leaderMail
    }, 20)
  },
  methods: {
    closeModule() {
      this.$emit('closeModule', CHARTSINDEX.leaderMail)
    },
    _initChart() {
      let option = {
        title: {
          text: ''
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['包租费', '装修费', '保洁费', '物业费'],
          align: 'right',
          right: 10
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: ['领导信箱']
        }],
        yAxis: [{
          type: 'value',
          name: '',
          axisLabel: {
            formatter: '{value}'
          }
        }],
        series: [{
          name: '新邮件',
          type: 'bar',
          data: [20, 12, 31, 34, 31]
        }, {
          name: '待办',
          type: 'bar',
          data: [10, 20, 5, 9, 3]
        }, {
          name: '办结',
          type: 'bar',
          data: [1, 1, 2, 3, 1]
        }]
      }

      this.myChart = echarts.init(document.getElementById('leader-mail-echarts'))
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
@import '~css/variable'
@import '~css/mixin'
.leader-mail
  width: 100%
  /deep/ .charts-wrapper
    width: 40%
.echarts
  width: 100%
  height: 100%
.view-panel
  height: 100%
  width: 100%
  .view-title
    font-size: $font-size-large
    fonr-weight: bold
    color: #333
    height: 60px
    line-height: 60px
  .view-circle
    width: 100px
    height: 100px
    margin: 0 auto
    margin-top: 20px
    round(100%)
    background-color: #079bfa
    line-height: 100px
    font-size: $font-size-large
    color: #fff
    cursor: pointer
    font-weight: bold
  .invalid-view
    width: 33.33%
    float: left
    height: 100%
  .blank-view
    width: 33.33%
    height: 100%
    float: left
    .view-circle
      background-color: #00fae3
  .done-view
    width: 33.33%
    height: 100%
    float: left
    .view-circle
      background-color: #83fa00
.fade-enter-active, .fade-leave-active
  transition: opacity .5s
.fade-enter, .fade-leave-to
  opacity: 0
</style>

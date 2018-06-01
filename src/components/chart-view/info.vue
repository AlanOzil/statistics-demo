<template>
<div class="info">
  <transition name="fade">
    <charts-wrapper @_resize="_resize" @_initChart="_initChart" @closeModule="closeModule" v-if="chartsIndexList.includes(chartsIndex)" :width="'100%'" :height="350" :title="chartsList[chartsIndex].name">
      <div class="echarts" id="info-echarts">

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
      chartsIndex: 6,
      wrapperWidth: 0
    }
  },
  mounted() {
    setTimeout(() => {
      this.chartsIndex = CHARTSINDEX.info
      this.wrapperWidth = document.getElementsByClassName("home")[0].style.width
    }, 20)
  },
  methods: {
    closeModule() {
      this.$emit('closeModule', CHARTSINDEX.info)
    },
    _initChart() {
      let option = {
        //title: {
        //    text: "站点点击量",
        //    x: 'center',
        //    y: 0
        //},
        //color: ['#188df0', '#83bff6', '#83bff6', '#e5323e'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['统计时间段内更新', '文章总数', '年度更新', '本月更新']
        },
        dataZoom: { //x轴时间滑动条
          show: true,
          realtime: true,
          start: 0,
          end: 100
        },
        //toolbox: {
        //    show: true,
        //    feature: {
        //        mark: { show: true },
        //        dataView: { show: true, readOnly: false },
        //        magicType: { show: true, type: ['line', 'bar'] },
        //        restore: { show: true },
        //        saveAsImage: { show: true }
        //    }
        //},
        xAxis: [{
          type: 'category',
          data: ["系统管理员", "雷州", "网站管理员", "雷州站点管理员", "雷州站点管理员", "系统管理员", "梁嫚娜", "系统管理员（系统服务）", null, "xushifang0001", "xushifang0001", null, "雷州市政府文章录入员", "雷州市环保局", "Anonymous User", "戴康宇", "雷州", "雷州市政府文章录入员"]

        }],
        yAxis: [{
          type: 'value'
        }],
        series: [{
          type: 'bar',
          barGap: 0,
          name: "统计时间段内更新",
          data: ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"]
        }, {
          type: 'bar',
          barGap: 0,
          name: "文章总数",
          data: ["2476", "1018", "375", "110", "106", "34", "24", "13", "9", "4", "3", "3", "3", "2", "2", "2", "1", "1"]
        }, {
          type: 'bar',
          barGap: 0,
          name: "年度更新",
          data: ["0", "0", "0", "3", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"]
        }, {
          type: 'bar',
          barGap: 0,
          name: "本月更新",
          data: ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"]
        }]
      }

      this.myChart = echarts.init(document.getElementById('info-echarts'))
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
.info
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

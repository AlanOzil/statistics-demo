<template>
<div class="website-view">
  <transition name="fade">
    <charts-wrapper @_resize="_resize" @_initChart="_initChart" @closeModule="closeModule" v-if="chartsIndexList.includes(chartsIndex)" :width="'100%'" :height="370" :title="chartsList[chartsIndex].name">
      <div class="echarts" id="website-echarts">

      </div>
    </charts-wrapper>
  </transition>
  <div class="clearfix">

  </div>
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
      chartsIndex: 9,
      wrapperWidth: 0
    }
  },
  mounted() {
    setTimeout(() => {
      this.chartsIndex = CHARTSINDEX.websiteView
      this.wrapperWidth = document.getElementsByClassName("home")[0].style.width
    }, 20)
  },
  methods: {
    closeModule() {
      this.$emit('closeModule', CHARTSINDEX.websiteView)
    },
    _initChart() {
      let option = {
        //title: {
        //    text: "站点点击量",
        //    x: 'center',
        //    y: 0
        //},
        // color: ['#188df0', '#83bff6', '#83bff6', '#e5323e'],
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
          data: ["雷州市人民政府网站", "雷州市财政局", "雷州市国土资源局", "雷州市海洋资源局", "雷州市环保局", "雷州市教育局", "雷州市人社局", "雷州市司法局", "雷州市市场监管局"]

        }],
        yAxis: [{
          type: 'value'
        }],
        series: [{
          type: 'bar',
          barGap: 0,
          name: "统计时间段内访问量",
          data: ["0", "0", "0", "0", "0", "0", "0", "0", "0"]
        }, {
          type: 'bar',
          barGap: 0,
          name: "访问总数",
          data: ["2476", "1018", "375", "1150", "1206", "234", "1424", "1353", "903"]
        }, {
          type: 'bar',
          barGap: 0,
          name: "年度访问量",
          data: ["1400", "860", "320", "423", "160", "210", "1240", "1107", "503"]
        }, {
          type: 'bar',
          barGap: 0,
          name: "本月访问量",
          data: ["634", "12", "53", "20", "65", "24", "355", "236", "93"]
        }]
      }

      this.myChart = echarts.init(document.getElementById('website-echarts'))
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
.website-view
  width: 100%
  /deep/ .charts-wrapper
    width: 50%
.echarts
  width: 100%
  height: 100%
.fade-enter-active, .fade-leave-active
  transition: opacity .5s
.fade-enter, .fade-leave-to
  opacity: 0
</style>

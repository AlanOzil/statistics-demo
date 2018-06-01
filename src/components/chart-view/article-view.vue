<template>
<div class="article-view">
  <transition name="fade">
    <charts-wrapper @_resize="_resize" @_initChart="_initChart" @closeModule="closeModule" v-if="chartsIndexList.includes(chartsIndex)" :width="'%'" :height="370" :title="chartsList[chartsIndex].name">
      <div class="table-view">
        <el-table :data="data" stripe style="width: 100%">
          <el-table-column prop="title" label="文章标题" width="200px" style="text-align: center">
          </el-table-column>
          <el-table-column prop="num1" label="统计时间段内访问量">
          </el-table-column>
          <el-table-column prop="num2" label="访问总数">
          </el-table-column>
          <el-table-column prop="num3" label="年度访问量">
          </el-table-column>
          <el-table-column prop="num4" label="本月访问量">
          </el-table-column>
        </el-table>
      </div>
    </charts-wrapper>
  </transition>
</div>
</template>

<script type="text/ecmascript-6">
import ChartsWrapper from 'components/charts-wrapper/charts-wrapper'
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
      chartsIndex: 8,
      hover: -1,
      data: [{
        title: "中国科学院大学教授：“纳米地球”神秘而令人神往",
        num1: 0,
        num2: 21,
        num3: 0,
        num4: 0
      },{
        title: "省人大专题调研组莅湛调研脱贫攻坚工作",
        num1: 0,
        num2: 16,
        num3: 4,
        num4: 0
      },{
        title: "雷州市2017年国家基本公共卫生服务 项目绩效评估方案",
        num1: 0,
        num2: 16,
        num3: 15,
        num4: 0
      },{
        title: "关于市住建局个别领导分工调整的通知",
        num1: 0,
        num2: 12,
        num3: 12,
        num4: 0
      }]
    }
  },
  mounted() {
    setTimeout(() => {
      this.chartsIndex = CHARTSINDEX.article
    }, 20)
  },
  methods: {
    closeModule() {
      this.$emit('closeModule', CHARTSINDEX.article)
    },
    _initChart() {

    },
    _resize() {

    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~css/variable'
@import '~css/mixin'
.article-view
  width: 100%
  /deep/ .charts-wrapper
    width: 50%
    /deep/ .el-table
      th
        text-align: center
.fade-enter-active, .fade-leave-active
  transition: opacity .5s
.fade-enter, .fade-leave-to
  opacity: 0
</style>

<template lang="html">
  <div class="home">
    <chart-menu :btnIndex='btnIndex' @showChart="showChart" :chartsList="chartsList"></chart-menu>
    <div class="charts-wrapper-panel" ref="wrapper">
      <server-view :chartsIndexList="chartsIndexList" :chartsList="chartsList" @closeModule="closeModule"></server-view>
      <font-end :chartsIndexList="chartsIndexList" :chartsList="chartsList" @closeModule="closeModule"></font-end>
      <leader-mail :chartsIndexList="chartsIndexList" :chartsList="chartsList" @closeModule="closeModule"></leader-mail>
      <website :chartsIndexList="chartsIndexList" :chartsList="chartsList" @closeModule="closeModule"></website>
      <!-- <back-end :chartsIndexList="chartsIndexList" :chartsList="chartsList" @closeModule="closeModule"></back-end> -->
      <info :chartsIndexList="chartsIndexList" :chartsList="chartsList" @closeModule="closeModule"></info>
      <invalid-link :chartsIndexList="chartsIndexList" :chartsList="chartsList" @closeModule="closeModule"></invalid-link>
      <rank :chartsIndexList="chartsIndexList" :chartsList="chartsList" @closeModule="closeModule"></rank>
      <article-view :chartsIndexList="chartsIndexList" :chartsList="chartsList" @closeModule="closeModule"></article-view>
      <website-view :chartsIndexList="chartsIndexList" :chartsList="chartsList" @closeModule="closeModule"></website-view>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import ChartMenu from 'components/chart-menu/chart-menu'
import FontEnd from 'components/chart-view/font-end'
// import BackEnd from 'components/chart-view/back-end'
import InvalidLink from 'components/chart-view/invalid-link'
import ServerView from 'components/chart-view/server-view'
import LeaderMail from 'components/chart-view/leader-mail'
import Info from 'components/chart-view/info'
import Website from 'components/chart-view/website'
import WebsiteView from 'components/chart-view/website-view'
import ArticleView from 'components/chart-view/article-view'
import Rank from 'components/chart-view/rank'

export default {
  name: 'Home',
  components: {
    ChartMenu,
    FontEnd,
    // BackEnd,
    InvalidLink,
    ServerView,
    Rank,
    LeaderMail,
    Info,
    Website,
    ArticleView,
    WebsiteView
  },
  data() {
    return {
      btnIndex: null,
      wrapperWidth: 0,
      chartsList: [{
        id: '1232344',
        name: '服务器状态'
      }, {
        id: '123',
        name: '使用人数统计'
      }, {
        id: '1202023',
        name: '领导信箱状态'
      }, {
        id: '1200111345623',
        name: '网站数量'
      }, {
        id: '120221122023',
        name: '信息新增/更新/发布数量'
      }, {
        id: '12223',
        name: '无效连接数与空白栏目数'
      }, {
        id: '120222023',
        name: '关键词热度'
      }, {
        id: '1202234522023',
        name: '文章访问量'
      }, {
        id: '12022342309522023',
        name: '站点访问量'
      }],
      chartsIndexList: []
    }
  },
  mounted() {
    setTimeout(() => {
      this.chartsList.forEach((el, i) => {
        this.chartsIndexList.push(i)
      })
    }, 20)
  },
  methods: {
    closeModule(index) {
      this.btnIndex = index
    },
    showChart(index) {
      if (this.chartsIndexList.includes(index)) {
        let arrayIndex = this.chartsIndexList.indexOf(index)
        if (arrayIndex > -1) {
          this.chartsIndexList.splice(arrayIndex, 1)
        }
      } else {
        this.chartsIndexList.push(index)
      }
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~css/mixin'
.home
  /deep/ .chart-menu
    position: fixed
    left: 0
    width: 240px
  .charts-wrapper-panel
    margin-top: 20px
    margin-bottom: 50px
    margin-left: 240px
    /deep/ .charts-wrapper
      float: left
      // width: 100%
      // margin-left: 10px
      // margin-top: 10px
</style>

<template>
<div class="invalid-link">
  <transition name="fade">
    <charts-wrapper @_resize="_resize" @_initChart="_initChart" @closeModule="closeModule" v-if="chartsIndexList.includes(chartsIndex)" :width="'%'" :height="350" :title="chartsList[chartsIndex].name">
      <div class="view-panel">
        <div class="invalid-view">
          <div class="view-wrapper" @click="getDetail">
            <div class="view-title">
              无效链接数
            </div>
            <div class="view-circle">
              30个
            </div>
          </div>
        </div>
        <div class="blank-view">
          <div class="view-wrapper" @click="getDetail">
            <div class="view-title">
              空白链接数
            </div>
            <div class="view-circle">
              24个
            </div>
          </div>
        </div>
        <div class="clearfix"></div>
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
      chartsIndex: 2,
      hover: -1
    }
  },
  mounted() {
    setTimeout(() => {
      this.chartsIndex = CHARTSINDEX.invalidLink
    }, 20)
  },
  methods: {
    closeModule() {
      this.$emit('closeModule', CHARTSINDEX.invalidLink)
    },
    _initChart() {

    },
    _resize() {

    },
    getDetail() {
      this.$router.push('/Link')
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~css/variable'
@import '~css/mixin'
.invalid-link
  width: 100%
  /deep/ .charts-wrapper
    width: 40%
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
    height: 100%
    margin: 0 auto
    line-height: 100px
    font-size: $font-size-title
    color: rgba(100,183,237,1)
    cursor: pointer
    font-weight: bold
  .view-wrapper
    width: 60%
    margin: 0 auto
    margin-top: 80px
    round(6px)
    border: 1px solid #efefef
    cursor: pointer
    .view-title
      height: 40px
      line-height: 40px
      background-color: #f7a510
      color: #fff
  .invalid-view
    width: 50%
    float: left
    height: 100%
    .view-circle
      color: #f7a510
  .blank-view
    width: 50%
    height: 100%
    float: left
    .view-title
      background-color: #06d1b1
    .view-circle
      color: #06d1b1
.fade-enter-active, .fade-leave-active
  transition: opacity .5s
.fade-enter, .fade-leave-to
  opacity: 0
</style>

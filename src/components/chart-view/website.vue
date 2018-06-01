<template>
<div class="website">
  <transition name="fade">
    <charts-wrapper @_resize="_resize" @_initChart="_initChart" @closeModule="closeModule" v-if="chartsIndexList.includes(chartsIndex)" :width="'%'" :height="350" :title="chartsList[chartsIndex].name">
      <div class="view-panel">
        <div class="invalid-view">
          <div class="view-circle">
            30个
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
      chartsIndex: 7,
      hover: -1
    }
  },
  mounted() {
    setTimeout(() => {
      this.chartsIndex = CHARTSINDEX.website
    }, 20)
  },
  methods: {
    closeModule() {
      this.$emit('closeModule', CHARTSINDEX.website)
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
.website
  width: 100%
  /deep/ .charts-wrapper
    width: 20%
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
    // margin-top: 80px
    line-height: 310px
    font-size: 60px
    color: rgba(100,183,237,1)
    height: 100%
  .invalid-view
    width: 100%
    float: left
    height: 100%
.fade-enter-active, .fade-leave-active
  transition: opacity .5s
.fade-enter, .fade-leave-to
  opacity: 0
</style>

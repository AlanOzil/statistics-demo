<template>
<div class="rank">
  <transition name="fade">
    <charts-wrapper @_resize="_resize" @_initChart="_initChart" @closeModule="closeModule" v-if="chartsIndexList.includes(chartsIndex)" :width="'%'" :height="350" :title="chartsList[chartsIndex].name">
      <div class="view-panel">
        <ul>
          <li v-for="(item, index) in rankList" :key="item.id">
            <div class="title">
              <div class="logo" :class="{'first': index === 0, 'second': index === 1, 'third': index === 2}">{{index+1}}</div>
              <div class="text">
                {{item.name}}
              </div>
            </div>
            <div class="count">
              {{item.count}}
            </div>
          </li>
        </ul>
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
      chartsIndex: 4,
      rankList: [{
        id: 123,
        name: '积分入户',
        count: '3244'
      }, {
        id: 2342,
        name: '温国辉',
        count: '2440'
      }, {
        id: 123543,
        name: '地铁',
        count: '1893'
      }, {
        id: 123415423,
        name: '新三板',
        count: '1344'
      }, {
        id: 1234343523,
        name: '创业',
        count: '910'
      }, {
        id: 12234263,
        name: '养老',
        count: '899'
      }, {
        id: 122224434263,
        name: '医保',
        count: '782'
      }, {
        id: 12222443204263,
        name: '就业',
        count: '642'
      }, {
        id: 12222442534263,
        name: '结婚登记',
        count: '529'
      }]
    }
  },
  mounted() {
    setTimeout(() => {
      this.chartsIndex = CHARTSINDEX.rank
    }, 20)
  },
  methods: {
    closeModule() {
      this.$emit('closeModule', CHARTSINDEX.rank)
    },
    _initChart() {

    },
    _resize() {

    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~css/mixin'
.rank
  width: 100%
  /deep/ .charts-wrapper
    width: 20%
.view-panel
  height: 100%
  width: 100%
  ul
    li
      flex(row, center, space-between)
      margin: 5px 10px
      .title
        height: 30px
        line-height: 30px
        flex(row, center, space-around)
        .logo
          background-repeat: no-repeat
          background-size: 20px 20px
          background-position: center
          width: 30px
          height: 30px
          line-height: 30px
          text-align: center
          color: #8eb9f5
          &.first
            background-image: url('~images/1st.png')
            color: transparent
          &.second
            background-image: url('~images/2ed.png')
            color: transparent
          &.third
            background-image: url('~images/3rd.png')
            color: transparent
      .count
        height: 30px
        line-height: 30px
        font-size: 14px
        color: rgb(65, 42, 54)
.fade-enter-active, .fade-leave-active
  transition: opacity .5s
.fade-enter, .fade-leave-to
  opacity: 0
</style>

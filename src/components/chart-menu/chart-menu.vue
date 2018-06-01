<template lang="html">
  <div class="chart-menu">
    <div class="cm-wrapper">
      <div class="cm-item"
        :class="{'active': item.active, 'animate-shadow': !item.active && item.hover}"
        v-for="(item, index) in chartsList"
        :key="item.id"
        @click="menuClick(index)"
        @mouseover="item.hover = true"
        @mouseout="item.hover = false"
        ref="chartBtn"
        >
        {{item.name}}
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    btnIndex: {
      type: Number,
      default: null
    },
    chartsList: {
      type: Array,
      default: []
    }
  },
  data() {
    return {}
  },
  mounted() {
    this.chartsList.forEach((el, i) => {
      this.$set(el, 'active', true)
      this.$set(el, 'hover', false)
    })
  },
  methods: {
    menuClick(index) {
      this.chartsList[index].active = !this.chartsList[index].active
      this.$emit('showChart', index)
      // console.log(this.$refs.chartBtn[3])
    }
  },
  watch: {
    btnIndex() {
      setTimeout(() => {
        this.menuClick(this.btnIndex)
      }, 20)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~css/mixin'
@import '~css/variable'
  .cm-wrapper
    width: 100%
    // border-bottom: 1px solid #efefef
    padding: 20px 0
    .cm-item
      float: left
      color: $color-text-ll
      padding: 7px 20px
      width: 150px
      border: 1px solid #dedede
      line-height: 20px
      round(6px)
      margin: 10px 0
      margin-left: 25px
      font-size: $font-size-medium
      cursor: pointer
      &.active{
        background-color: rgba(100,183,237,0.9)
        color: #fff
        border-color: transparent
        box-shadow: 2px 2px 10px 1px #9a9a9a
      }
</style>

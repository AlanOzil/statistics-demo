<template lang="html">
  <div class="charts-wrapper">
    <div class="de-wrapper module-wrapper" ref="chartsWrapper">
      <div class="mw-header">
        <div class="mw-name">{{title}}</div>
        <div class="mw-setting">
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              <i class="el-icon-arrow-down el-icon-setting"></i><i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看详情</el-dropdown-item>
              <el-dropdown-item command="close">关闭</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div class="mw-main" ref="chartPanel">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    width: {
      type: String,
      default: '270'
    },
    height: {
      type: Number,
      default: 300
    },
    title: {
      type: String,
      default: '123'
    }
  },
  data() {
    return {}
  },
  mounted() {
    setTimeout(() => {
      this.$refs.chartsWrapper.style.width = this.width.indexOf('%') > -1 ? '100%' : this.width + 'px'
      this.$refs.chartsWrapper.style.height = this.height + 'px'
      this.$refs.chartPanel.style.height = this.height - 40 + 'px'
      this.$emit('_initChart')
    }, 20)
  },
  methods: {
    handleCommand(text) {
      if (text === 'close') {
        this.$emit('closeModule')
      }
    }
  },
  watch: {
    width() {
      this.$refs.chartsWrapper.style.width = this.width.indexOf('%') > -1 ? '100%' : this.width + 'px'
      this.$emit('_resize')
    },
    height() {
      this.$refs.chartsWrapper.style.height = this.height + 'px'
      this.$refs.chartPanel.style.height = this.height - 40 + 'px'
      this.$emit('_resize')
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~css/mixin'
.module-wrapper
  // border: 1px solid #64b7ed
  border-right: 1px solid #efefef
  border-left: 1px solid #efefef
  border-bottom: 1px solid #efefef
  // round(3px)
  .mw-header
    height: 40px
    line-height: 40px
    background-color: rgba(100, 183, 237, 0.9)
    flex(row, center, space-between)
    color: #fff
    .mw-name
      text-indent: 35px
      background-image: url('~images/charts.png')
      background-repeat: no-repeat
      background-size: 20px 20px
      background-position: 10px center
    .mw-setting
      margin-right: 15px
      /deep/ .el-dropdown-link
        color: #fff
      .setting-logo
        width: 40px
        height: 40px
  .mw-main
    width: 100%
</style>

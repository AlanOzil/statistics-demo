<template>
<div class="server-view">
  <transition name="fade">
    <charts-wrapper @_resize="_resize" @_initChart="_initChart" @closeModule="closeModule" v-if="chartsIndexList.includes(chartsIndex)" :width="'%'" :height="350" :title="chartsList[chartsIndex].name">
      <div class="server-echarts" id="server-echarts-1">

      </div>
      <div class="server-echarts" id="server-echarts-2">

      </div>
      <div class="server-echarts" id="server-echarts-3">

      </div>
      <div class="server-echarts" id="server-echarts-4">

      </div>
      <div class="clearfix">

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
      myChart1: {},
      myChart2: {},
      myChart3: {},
      myChart4: {},
      chartsIndex: 3
    }
  },
  mounted() {
    setTimeout(() => {
      this.chartsIndex = CHARTSINDEX.server
    }, 20)
  },
  methods: {
    closeModule() {
      this.$emit('closeModule', CHARTSINDEX.server)
    },
    _initChart() {
      let option1 = {
        tooltip: {
          trigger: 'item',
          // formatter: "{a} <br/>{b} : {c} ({d}%)",
          formatter: (value) => {
            // console.log(value)
            return value.seriesName + ': ' + value.percent.toFixed(2) + '%'
          }
        },
        series: [{
          name: 'CPU使用率',
          type: 'pie',
          radius: ['60%', '70%'],
          label: {
            normal: {
              position: 'center'
            }
          },
          data: [{
            value: 20,
            name: '使用率',
            label: {
              normal: {
                formatter: (value, index) => {
                  // console.log(value.percent.toFixed(1))
                  return value.percent.toFixed(1) + '%'
                }, //'{d} %',
                textStyle: {
                  fontSize: 50
                }
              }
            }
          }, {
            value: 80,
            name: '占位',
            label: {
              normal: {
                formatter: '\nCPU使用率',
                textStyle: {
                  color: '#555',
                  fontSize: 20
                }
              }
            },
            tooltip: {
              show: false
            },
            itemStyle: {
              normal: {
                color: '#aaa'
              },
              emphasis: {
                color: '#aaa'
              }
            },
            hoverAnimation: false
          }]
        }]
      }

      this.myChart1 = echarts.init(document.getElementById('server-echarts-1'))
      app.timeTicket = setInterval(() => {
        let value = parseInt(Math.random() * 30) + 30,
          value_ = (100 - value) * 266 / 360
        // option1.title.subtext = value + "%"
        option1.series[0].data[0].value = value_
        option1.series[0].data[1].value = 100 - value_
        this.myChart1.setOption(option1, true)
      }, 3000);

      let value = parseInt(Math.random() * 30) + 30,
        value_ = (100 - value) * 266 / 360
      // option1.title.subtext = value + "%"
      option1.series[0].data[0].value = value_
      option1.series[0].data[1].value = 100 - value_
      this.myChart1.setOption(option1)

      let option2 = {
        tooltip: {
          trigger: 'item',
          // formatter: "{a} <br/>{b} : {c} ({d}%)"
          formatter: (value) => {
            // console.log(value)
            return value.seriesName + ': ' + value.percent.toFixed(2) + '%'
          }
        },
        series: [{
          name: '内存使用率',
          type: 'pie',
          radius: ['60%', '70%'],
          label: {
            normal: {
              position: 'center'
            }
          },
          data: [{
            value: 26,
            name: '占有率',
            label: {
              normal: {
                formatter: function(value, index) {
                  // console.log(value.percent.toFixed(1))
                  return value.percent.toFixed(1) + '%'
                }, //'{d} %',
                textStyle: {
                  fontSize: 50
                }
              }
            }
          }, {
            value: 24,
            name: '占位',
            label: {
              normal: {
                formatter: '\n内存使用率',
                textStyle: {
                  color: '#555',
                  fontSize: 20
                }
              }
            },
            tooltip: {
              show: false
            },
            itemStyle: {
              normal: {
                color: '#aaa'
              },
              emphasis: {
                color: '#aaa'
              }
            },
            hoverAnimation: false
          }]
        }]
      }

      this.myChart2 = echarts.init(document.getElementById('server-echarts-2'))
      app.timeTicket = setInterval(() => {
        let value = parseInt(Math.random() * 5) + 30,
          value_ = (100 - value) * 266 / 360
        // option1.title.subtext = value + "%"
        option2.series[0].data[0].value = value_
        option2.series[0].data[1].value = 100 - value_
        this.myChart2.setOption(option2, true)
      }, 5000);

      value = parseInt(Math.random() * 5) + 30,
        value_ = (100 - value) * 266 / 360
      // option1.title.subtext = value + "%"
      option2.series[0].data[0].value = value_
      option2.series[0].data[1].value = 100 - value_
      this.myChart2.setOption(option2, true)
      this.myChart2.setOption(option2)

      let option3 = {
        tooltip: {
          trigger: 'item',
          // formatter: "{a} <br/>{b} : {c} ({d}%)"
          formatter: (value) => {
            console.log(value)
            return value.seriesName + ': ' + value.percent.toFixed(2) + '%'
          }
        },
        series: [{
          name: '磁盘空间使用率',
          type: 'pie',
          radius: ['60%', '70%'],
          label: {
            normal: {
              position: 'center'
            }
          },
          data: [{
            value: 26,
            name: '占有率',
            label: {
              normal: {
                formatter: function(value, index) {
                  // console.log(value.percent.toFixed(1))
                  return value.percent.toFixed(1) + '%'
                }, //'{d} %',
                textStyle: {
                  fontSize: 50
                }
              }
            }
          }, {
            value: 24,
            name: '占位',
            label: {
              normal: {
                formatter: '\n磁盘空间使用率',
                textStyle: {
                  color: '#555',
                  fontSize: 20
                }
              }
            },
            tooltip: {
              show: false
            },
            itemStyle: {
              normal: {
                color: '#aaa'
              },
              emphasis: {
                color: '#aaa'
              }
            },
            hoverAnimation: false
          }]
        }]
      }

      this.myChart3 = echarts.init(document.getElementById('server-echarts-3'))
      this.myChart3.setOption(option3)

      let option4 = {
        tooltip: {
          trigger: 'item',
          // formatter: "{a} <br/>{b} : {c} ({d}%)"
          formatter: (value) => {
            console.log(value)
            return value.seriesName + ': ' + value.percent.toFixed(2) + '%'
          }
        },
        series: [{
          name: '磁盘空间使用率',
          type: 'pie',
          radius: ['60%', '70%'],
          label: {
            normal: {
              position: 'center'
            }
          },
          data: [{
            value: 96,
            name: '占有率',
            label: {
              normal: {
                formatter: function(value, index) {
                  // console.log(value.percent.toFixed(1))
                  return value.percent.toFixed(1) + '%'
                }, //'{d} %',
                textStyle: {
                  fontSize: 50
                }
              }
            }
          }, {
            value: 34,
            name: '占位',
            label: {
              normal: {
                formatter: '\n数据库容量',
                textStyle: {
                  color: '#555',
                  fontSize: 20
                }
              }
            },
            tooltip: {
              show: false
            },
            itemStyle: {
              normal: {
                color: '#aaa'
              },
              emphasis: {
                color: '#aaa'
              }
            },
            hoverAnimation: false
          }]
        }]
      }

      this.myChart4 = echarts.init(document.getElementById('server-echarts-4'))
      this.myChart4.setOption(option4)
    },
    _resize() {
      if (this.myChart1) {
        this.myChart1.resize()
      }
      if (this.myChart2) {
        this.myChart2.resize()
      }
      if (this.myChart3) {
        this.myChart3.resize()
      }
      if (this.myChart4) {
        this.myChart4.resize()
      }
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.server-view
  width: 100%
  /deep/ .charts-wrapper
    width: 100%
.server-echarts
  width: 25%
  height: 100%
  float: left
.fade-enter-active, .fade-leave-active
  transition: opacity .5s
.fade-enter, .fade-leave-to
  opacity: 0
</style>

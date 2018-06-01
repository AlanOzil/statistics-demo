<template>
<div class="link-detail">
  <div class="ld-header">
    <div class="ld-back" @click="back">
      <i class="el-icon-arrow-left">返回</i>
    </div>
    <div class="ld-title">
      无效链接、空白栏目详情
    </div>
  </div>
  <div class="ld-main">
    <div class="ld-wrapper">
      <div class="lw-title">无效链接</div>
      <div class="lw-table">
        <template>
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              prop="date"
              label="日期"
              width="280">
            </el-table-column>
            <el-table-column
              prop="url"
              label="网站路径"
              >
            </el-table-column>
            <el-table-column
              prop="belong"
              label="所属网站"
              width="350">
            </el-table-column>
          </el-table>
        </template>
      </div>
      <div class="pageing">
        <el-pagination layout="prev, pager, next" :total="50">
        </el-pagination>
      </div>
    </div>
      <div class="ld-wrapper">
        <div class="lw-title">空白栏目</div>
        <div class="lw-table">
          <template>
            <el-table
              :data="tableData"
              style="width: 100%">
              <el-table-column
                prop="date"
                label="日期"
                width="280">
              </el-table-column>
              <el-table-column
                prop="url"
                label="网站路径"
                >
              </el-table-column>
              <el-table-column
                prop="belong"
                label="所属网站"
                width="350">
              </el-table-column>
            </el-table>
          </template>
        </div>
        <div class="pageing">
          <el-pagination layout="prev, pager, next" :total="50">
          </el-pagination>
        </div>
      </div>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      tableData: [{
        date: '2017-08-02',
        url: 'http://www.leizhou.gov.cn&navId=6600544e-de2f-4988-a4ff-f1b8d1b25ec3',
        belong: '雷州市人民政府网站'
      }, {
        date: '2017-06-04',
        url: 'http://gtj.leizhou.gov.cn/&id=4c03e1ce-911b-4769-8079-691c2f8d2db2',
        belong: '雷州市国土局'
      }, {
        date: '2017-05-09',
        url: 'http://www.leizhou.gov.cn/Default.aspx?key=information_publicity/list&id=56eea858-7daf-4d97-8143-d58cb20e9088',
        belong: '雷州市人民政府网站'
      }, {
        date: '2017-05-03',
        url: 'http://zjj.leizhou.gov.cn/Default.aspx?key=information_publicity/list&id=d9d465f5-3c58-4d3c-bc65-a54f46e74ab7',
        belong: '雷州市住建局'
      }]
    }
  },
  methods: {
    back() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~css/mixin'
@import '~css/variable'
.ld-header
  height: 50px
  line-height: 50px
  text-align: left
  .ld-back
    float: left
    cursor: pointer
  .ld-title
    font-size: $font-size-large-x
    margin-left: 50px
    text-align: center
    margin-right: 40px
    border-bottom: 1px solid #dedede
.ld-main
  width: 90%
  margin: 0 auto
  text-align: left
  .ld-wrapper
    border: 1px solid rgba(100, 183, 237, 0.9)
    round(4px)
    margin-top: 40px
    .lw-title
      font-size: $font-size-large
      text-indent: 40px
      height: 40px
      line-height: 40px
      background-color: rgba(100, 183, 237, 0.9)
      flex(row, center, space-between)
      color: #fff
      background-image: url('~images/table.png')
      background-repeat: no-repeat
      background-position: 10px center
      background-size: 25px 25px
    .pageing
      padding: 10px
      text-align: center
</style>

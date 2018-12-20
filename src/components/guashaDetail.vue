<template>
  <div class="conntent">
    <div>
      <!-- <div class="toptitle">轴信息</div> -->
      <div class="detailinfo">
        <div>
          <div>原料名称</div>
          <span>XXXXX</span>
        </div>
        <div>
          <div>原料批号</div>
          <span>XXXXX</span>
        </div>
        <div>
          <div>筒子个数</div>
          <span>22</span>
        </div>
        <div>
          <div>筒子确认者</div>
          <span>陈薇薇</span>
        </div>
        <div>
          <div>垫圈确认者</div>
          <span>陈薇薇</span>
        </div>
        <div>
          <div>边丝颜色</div>
          <span>XXXXX</span>
        </div>
        <div>
          <div>时间</div>
          <span>2018-11-22 15:20</span>
        </div>
      </div>
    </div>
    <div>
      <div class="toptitle">责任人1</div>
      <div class="detailinfo">
        <div>
          <div>责任人1</div>
          <span>XXXXX</span>
        </div>
        <div>
          <div>开始时间</div>
          <span>XXXXX</span>
        </div>
        <div>
          <div>结束时间</div>
          <span>XXXXX</span>
        </div>
        <div>
          <div>筒子个数</div>
          <span>XXXXX</span>
        </div>
        <div>
          <div>班别</div>
          <span>甲班</span>
        </div>
      </div>
    </div>
    <div>
      <div class="toptitle">责任人2</div>
      <div class="detailinfo">
        <div>
          <div>责任人1</div>
          <span>XXXXX</span>
        </div>
        <div>
          <div>开始时间</div>
          <span>XXXXX</span>
        </div>
        <div>
          <div>结束时间</div>
          <span>XXXXX</span>
        </div>
        <div>
          <div>筒子个数</div>
          <span>XXXXX</span>
        </div>
        <div>
          <div>班别</div>
          <span>乙班</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "applydetail",
  data() {
    return {};
  },
  methods: {},
  created() {}
};
</script>

<style lang="less" scoped>
.conntent {
  font-size: 0.17rem;
  .toptitle {
    // width: 3.6rem;
    height: 0.35rem;
    background: rgba(243, 243, 243, 1);
    opacity: 1;
    font-size: 0.15rem;
    font-family: Microsoft YaHei UI;
    padding-left: 0.15rem;
    font-weight: 400;
    line-height: 0.35rem;
    color: rgba(153, 153, 153, 1);
  }
  .detailinfo {
    > div:not(:last-child) {
      border-bottom: 0.01rem solid #d5d5d5;
    }
    > div {
      height: 0.5rem;
      line-height: 0.5rem;
      //   width: 3.3rem;
      padding: 0 0.15rem 0 0;
      margin-left: 0.15rem;
      > div {
        //   width: 2.7rem;
        height: 0.5rem;
        display: inline-block;
        //   background: red;
        color: #999;
        font-family: Microsoft YaHei UI;
      }
      > span {
        float: right;
      }
    }
  }
}
</style>
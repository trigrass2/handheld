<template>
  <div class="conntent">
    <div>
      <div class="toptitle">轴信息</div>
      <div class="detailinfo">
        <div>
          <div>上浆条件</div>
          <span>XXXXX</span>
        </div>
        <div>
          <div>整经轴号</div>
          <span>XXXXX</span>
        </div>
        <div>
          <div>上浆轴号</div>
          <span>XXXXX</span>
        </div>
        <div>
          <div>套扣次数</div>
          <span>XXXXX</span>
        </div>
        <div>
          <div>备注</div>
          <span>XXXXX</span>
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
          <div>米数</div>
          <span>XXXXX</span>
        </div>
        <div>
          <div>套扣次数</div>
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
          <div>米数</div>
          <span>XXXXX</span>
        </div>
        <div>
          <div>套扣次数</div>
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
  .detailinfo{
	  >div:not(:last-child){
		  border-bottom: 0.01rem solid #D5D5D5;
	  }
	  >div{
		  height: 0.5rem;
		  line-height: 0.5rem;
		//   width: 3.3rem;
		  padding: 0 0.15rem 0 0;
		  margin-left: 0.15rem;
		  >div{
			//   width: 2.7rem;
			  height: 0.5rem;
			  display: inline-block;
			//   background: red;
			  color: #999;
			  font-family:Microsoft YaHei UI;
		  }
		  >span{
			  float: right
		  }

	  }
  }
}
</style>
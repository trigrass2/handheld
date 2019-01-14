<template>
  <div class="conntent">
    <HeaderSame :headerObj="headerObj"></HeaderSame>
    <div class="delatedetail" @click="delatelist"><img src="../assets/img/3314.png" alt=""></div>
    <div>
      <!-- <div class="toptitle">轴信息</div> -->
      <div class="detailinfo">
        <div>
          <div>原料名称</div>
          <span>{{shaDetails.MName}}</span>
        </div>
        <div>
          <div>原料批号</div>
          <span>{{shaDetails.BatchNo}}</span> 
        </div>
        <div>
          <div>筒子个数</div>
          <span>{{shaDetails.CheeseNum}}</span>
        </div>
        <div>
          <div>筒子确认者</div>
          <span>{{shaDetails.CheeseNumChekerName}}</span>
        </div>
        <div>
          <div>垫圈确认者</div>
          <span>{{shaDetails.CloutCheckerName}}</span>
        </div>
        <div>
          <div>边丝颜色</div>
          <span>{{shaDetails.EdgWireColor}}</span>
        </div>
        <div>
          <div>时间</div>
          <span>{{shaDetails.OprationDate}}</span>
        </div>
        <!-- <div>
          <div>时间</div>
          <span><input type="datetime-local"></span>
        </div> -->
      </div>
    </div>
    
    <div v-for="(item,index) in fuzeersLists">
      <div class="toptitle">责任人{{index+1}}</div>
      <div class="detailinfo">
        <div>
          <div>责任人1</div>
          <span>{{item.EmpName}}</span>
        </div>
        <div>
          <div>开始时间</div>
          <span>{{item.BeginTime}}</span>
        </div>
        <div>
          <div>结束时间</div>
          <span>{{item.EndTime}}</span>
        </div>
        <div>
          <div>筒子个数</div>
          <span>{{item.DoNum}}</span>
        </div>
        <div>
          <div>班别</div>
          <span>{{item.ClassBanName}}</span>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import HeaderSame from "./common/sameHeader.vue";
export default {
  components: { HeaderSame },
  name: "applydetail",
  data() {
    return {
      headerObj: {
        title: "挂纱详细",
        img: "",
        text: ""
      },
    	shaDetails:{},
    	fuzeersLists:[]
    };
  },
  methods:{
    // 删除
     delatelist:function(){
       this.$axios({
					method: 'post',
					url: 'api/WarpingOrder/DelWarYarnHung',
					data:{
						id:this.$route.query.id
					}
				}).then((res) => {
          // console.log(res);
          this.$router.push('guasha');
          this.$message({
              showClose: true,
              message: "删除成功",
              type: "success",
              center: true
            });
				}).catch((error) => {
					console.log(error);
				});
     },
			shaList:function(){
				this.$axios({
					method: 'post',
					url: 'api/WarpingOrder/GetWarpYarnHungByID',
					data:{
						id:this.$route.query.id
					}
				}).then((res) => {
					console.log(res);
					this.shaDetails = res.data.data.detailentity;
					this.fuzeersLists = res.data.data.emps;
				}).catch((error) => {
					console.log(error);
				});
			}
		},
		created() {
			this.shaList();
		}
};
</script>

<style lang="less" scoped>
.delatedetail{
  position: absolute;
  margin-left: 3.25rem;
  margin-top: -0.38rem;
  z-index: 99999;
  >img{
    height: 0.2rem;
  }
}
.conntent {
  font-size: 0.17rem;
  margin-top: 0.5rem;
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
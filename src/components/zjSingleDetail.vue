<template>
  <div class="conntent">
    <HeaderSame :headerObj="headerObj"></HeaderSame>
    <div class="delatedetail" @click="delatelist">
      <img src="../assets/img/3314.png" alt>
    </div>
    <div>
      <div class="toptitle">轴信息</div>
      <div class="detailinfo">
        <div>
          <div>经轴编号</div>
          <span>{{details.BeamCode}}</span>
        </div>
        <div>
          <div>断纱</div>
          <span>{{details.YarnBroken}}</span>
        </div>
        <div>
          <div>毛羽数</div>
          <span>{{details.BeamHairinessNum}}</span>
        </div>
        <div>
          <div>对头次数</div>
          <span>{{details.DTCount}}</span>
        </div>
        <div>
          <div>备注</div>
          <span>{{details.Remark}}</span>
        </div>
      </div>
    </div>

    <div v-for="(item , index) in lists">
      <div class="toptitle">责任人{{index+1}}</div>
      <div class="detailinfo">
        <div>
          <div>责任人</div>
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
          <div>米数</div>
          <span>{{item.Lenght}}</span>
        </div>
        <div>
          <div>对头次数</div>
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
        title: "整经工单详情",
        img: "",
        text: ""
      },
      details: {},
      lists: []
    };
  },
  methods: {
    // 删除
    delatelist: function() {
      this.$confirm("是否确认删除？", "", {
        // confirmButtonText: '确定',
        // cancelButtonText: '取消',
        type: ""
      })
        .then(() => {
          this.$axios({
            method: "post",
            url:  "/WarpingOrder/DelWarpingDetail",
            data: {
              id: this.$route.query.id
            }
          })
            .then(res => {
              // console.log(res);
              this.$router.push("zhengJ");
              this.$message({
                showClose: true,
                message: "删除成功",
                type: "success",
                center: true
              });
            })
            .catch(error => {
              console.log(error);
            });
        })
        .catch(() => {
          this.$message({
            showClose: true,
            type: "info",
            message: "已取消删除"
          });
        });
    },
    shaList: function() {
      this.$axios({
        method: "post",
        url:  "/WarpingOrder/GetWarpingDetailByID",
        data: {
          id: this.$route.query.id
        }
      })
        .then(res => {
          console.log(res);
          this.details = res.data.data;
          this.lists = res.data.emps;
        })
        .catch(error => {
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
.delatedetail {
  position: absolute;
  margin-left: 3.25rem;
  margin-top: -0.38rem;
  z-index: 99999;
  > img {
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
<template>
  <div class="bg1">
    <HeaderSame :headerObj="headerObj"></HeaderSame>
    <div class="bodys">
      <div class="body-item" v-for="item in lists">
        <!--上方具体数据部分-->
        <div class="top-item">
          <div class="left-item">
            <span>{{item.BeamCode}}</span>
            <span>经轴编号</span>
          </div>
          <div class="right-item">
            <div style="margin-top: .08rem;">
              <div>毛羽数</div>
              <div>{{item.BeamHairinessNum}}</div>
            </div>
            <div>
              <div>断纱</div>
              <div>{{item.YarnBroken}}</div>
            </div>
            <div>
              <div>米数</div>
              <div>{{item.Length}}</div>
            </div>
            <div>
              <div>时间</div>
              <div>{{item.OprationDate}}</div>
            </div> 
          </div>
        </div>
        <!--下方操作按钮部分-->
        <div class="watch-item">
          <span @click="$router.push('zjSingleDetail?id='+item.ID)">查看</span>
          <span @click="$router.push('addZhou?handle='+'edit&id='+item.ID)">编辑</span>
        </div>
      </div>
    </div>

    <div class="posit">
      <span @click="returnGD">返回工单</span><span @click="$router.push('addZhou?handle='+'add')">新增轴</span>
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
        title: "整经",
        img: "",
        text: ""
      },
      lists: []
    };
  },
  methods: {
    dataList: function() {
      this.$axios({
        method: "post",
        url: "api/WarpingOrder/GetWarpingDetailListData",
        data: {
          orderid: localStorage.getItem("zjID"),
          pageindex: "0",
          pagesize: "20"
        }
      })
        .then(res => {
          console.log(res);
          this.lists = res.data.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    //点击返回工单
    returnGD: function() {
      this.$router.push('zhengJSingle');
    }
  },
  created() {
    this.dataList();
  }
};
</script>

<style lang="less" scoped>
.bg1 {
  position: relative;
  font-size: 0.17rem;
  padding-top: 0.1rem;
  min-height: 100%;
  height: auto;
  padding-bottom: 0.5rem;
  .body-item {
    width: 3.4rem;
    height: 1.65rem;
    background-color: white;
    margin: 0 auto;
    margin-bottom: 0.1rem;
    .top-item {
      > div {
        display: inline-block;
        vertical-align: top;
      }
      .left-item {
        span {
          display: block;
        }
        span:first-child {
          font-size: 0.25rem; /*************正确字号为55*************/
          color: #ffa237;
          font-weight: bold;
          font-family: "dig"; /*---------------字体要改-------------------*/
          padding: 0.15rem 0 0 0.45rem;
        }
        span:last-child {
          margin-left: 0.52rem;
          font-size: 0.13rem;
          color: #333;
        }
      }
      .right-item {
        > div {
          margin-left: 0.4rem;
          margin-top: 0.04rem;
          div:first-child {
            color: #999;
            width: 0.65rem;
          }
          div:last-child {
            color: #333;
          }
        }
        > div div {
          display: inline-block;
        }
      }
    }
    .watch-item {
      margin-top: 0.08rem;
      span {
        text-align: center;
        width: 1.5rem;
        height: 0.37rem;
        line-height: 0.37rem;
        color: white;
        display: inline-block;
        background-color: #4cbec0;
        border-radius: 0.02rem;
      }
      span:first-child {
        margin-left: 0.15rem;
      }
      span:last-child {
        margin-left: 0.1rem;
      }
    }
  }
  .posit {
    position: fixed;
    bottom: 0;
    span {
      display: inline-block;
      width: 1.8rem;
      height: 0.5rem;
      line-height: 0.5rem;
      color: white;
      text-align: center;
      border: 0;
      cursor: pointer;
    }
    span:first-child {
      background-color: #ffad20;
    }
    span:last-child {
      background-color: #007eff;
    }
  }
  .bodys {
    margin-top: 0.1rem;
  }
  .bodys:first-child {
    margin-top: 0;
  }
}
</style>
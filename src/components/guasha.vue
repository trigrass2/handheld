<template>
  <div class="bg1">
    <HeaderSame :headerObj="headerObj"></HeaderSame>
    <div class="bodys" v-for="item in shaLists"> 
      <div class="body-item">
        <!--上方具体数据部分-->
        <div class="top-item">
          <div class="right-item">
            <div style="margin-top: .1rem;">
              <div>原料名称</div>
              <div>{{item.MName}}</div> 
            </div>
            <div>
              <div>原料批号</div>
              <div>{{item.BatchNo}}</div>
            </div>
            <div>
              <div>筒子个数</div>
              <div>{{item.CheeseNum}}</div>
            </div>
          </div>
        </div>
        <!--下方操作按钮部分-->
        <div class="watch-item">
          <span @click="$router.push('guashaDetail?id='+item.ID)">查看</span>
          <span @click="$router.push('addGuaSha?handle='+'edit&id='+item.ID)">编辑</span>
        </div>
      </div>
    </div>

    <div class="posit">
      <span @click="returnGD">返回工单</span><span @click="$router.push('addGuaSha?handle='+'add')">新增轴</span>
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
        title: "挂纱",
        img: "",
        text: "firstlist"
      },
      shaLists: []
    };
  },
  methods: {
    shaList: function() {
      this.$axios({
        method: "post",
        url: "api/WarpingOrder/GetWarpYarnHungListData",
        data: {
          orderid:localStorage.getItem("zjID"),
          pageindex: "0",
          pagesize: "20"
        }
      })
        .then(res => {
          console.log(res);
          this.shaLists = res.data.data;
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
    this.shaList();
  }
};
</script>

<style lang="less" scoped>
.bg1 {
  position: relative;
  font-size: 0.17rem;
  padding-top: 0.12rem;
  padding-bottom: 0.6rem;
  height: auto!important;
  min-height: 100%;
  .body-item {
    width: 3.4rem;
    height: 1.5rem;
    background-color: white;
    margin: 0 auto;
    .top-item {
      > div {
        display: inline-block;
        vertical-align: top;
      }
      .right-item {
        > div {
          margin-left: 0.15rem;
          margin-top: 0.05rem;
          div:first-child {
            color: #999;
            width: 0.9rem;
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
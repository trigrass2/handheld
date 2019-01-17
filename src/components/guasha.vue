<template>
  <div class="bg1">
    <HeaderSame :headerObj="headerObj"></HeaderSame>
    <v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite" :dataList="scrollData">
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
</v-scroll>
    <div class="posit">
      <span @click="returnGD">返回工单</span><span @click="$router.push('addGuaSha?handle='+'add')">新增轴</span>
    </div>
  </div>
</template>

<script>
import Scroll from "./pullRefresh";
import HeaderSame from "./common/sameHeader.vue";
export default {
  components: { HeaderSame, "v-scroll": Scroll  },
  name: "applydetail",
  data() {
    return {
      headerObj: {
        title: "挂纱",
        img: "",
        text: "firstlist"
      },
      counter: 1, //默认已经显示出5条数据 count等于一是让从6条开始加载
      num: "5", // 一次显示多少条
      pageStart: 0, // 开始页数
      pageEnd: 0, // 结束页数
      scrollData: {
        noFlag: false //暂无更多数据显示
      },
      shaLists: []
    };
  },
  updated() {
    $(".nullData").css("padding-bottom", "0.5rem");
  },
  methods: {
    shaList: function() {
      this.$axios({
        method: "post",
        url: "api/WarpingOrder/GetWarpYarnHungListData",
        data: {
          orderid:localStorage.getItem("zjID"),
          pageindex: "0",
          pagesize: this.num
        }
      })
        .then(res => {
          console.log(res.data);
          this.shaLists = res.data.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    //点击返回工单
    returnGD: function() {
      this.$router.push('zhengJSingle');
    },
    // 下拉刷新
    onRefresh(done) {
      this.shaList();
      done();
      this.counter= 1; //默认已经显示出5条数据 count等于一是让从6条开始加载
      this.num= "5"; // 一次显示多少条
      this.pageStart= 0; // 开始页数
      this.pageEnd= 0; // 结束页数
      this.shaLists= []; // 下拉更新数据存放数组
      this.shaLists= {
        noFlag: false //暂无更多数据显示
      }
    },
    //上拉加载更多
    onInfinite(done) {
      let end = (this.pageEnd = this.num * this.counter);
      let i = (this.pageStart = this.pageEnd - this.num);
      let counters = String(this.counter++);

      let more = this.$el.querySelector(".load-more");
      if (i >= 10) {
        more.style.display = "none"; //隐藏加载条
        //走完数据调用方法
        this.scrollData.noFlag = true;
      } else {
        this.$axios({
          method: "post",
          url: "api/WarpingOrder/GetWarpYarnHungListData",
          data: {
            orderid:localStorage.getItem("zjID"),
            pageindex: counters,
            pagesize: this.num
          }
        })
          .then(res => {
            console.log(res.data.data);
            for (var i = 0; i < res.data.data.length; i++) {
              this.shaLists.push(res.data.data[i]);
            }
            console.log(this.shaLists);
          })
          .catch(error => {
            console.log(error);
          });

        more.style.display = "none"; //隐藏加载条
      }
      done();
    },
  },
  
  created() {
    this.shaList();
  }
};
</script>

<style lang="less" scoped>
.yo-scroll {
  top: -0.1rem;
}
.bg1 {
  // position: relative;
  font-size: 0.17rem;
  margin-top: 0.9rem;
    // margin-bottom: 0.8rem;
  height: auto;
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
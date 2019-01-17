<template>
  <div class="bg1">
    <HeaderSame :headerObj="headerObj"></HeaderSame>
    <v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite" :dataList="scrollData">
    <div class="item-detail" v-for="item in shaLists">
      <div class="item-title">
        <span>上浆单</span>
        <span>{{item.WarpSizingCode}}</span>
      </div>
      <div class="details">
        <div class="tails" @click="$router.push('shangJDetail?id='+item.ID)">
          <div>
            <span class="top-one">整经轴号</span>
            <span class="top-two">{{item.FromBeamCode}}</span>
            <span>
              <img src="../assets/img/821.png">
            </span>
            <span class="top-one">上浆轴号</span>
            <span class="top-two">{{item.ToBeamCode}}</span>
          </div>
          <div class="rightnum">
            <span>米数</span>
            <span>{{item.Length}}</span>
          </div>
          <div class="rightnum">
            <span>时间</span>
            <span>{{item.WarpDate}}</span>
          </div>
        </div>
        <div class="edit rt">
          <span @click="$router.push('addZhouShang?handle='+'edit&code='+item.WarpSizingCode+'&id='+item.WarpSizingID+'&ids='+item.ID)">编<br>辑
          </span>
        </div>
      </div>
    </div>
    </v-scroll>
    <div class="posit">
      <span @click="returnGD">返回工单</span><span @click="$router.push('addZhouShang?handle='+'add')">新增轴</span>
    </div>
  </div>
</template>

<script>
import Scroll from "./pullRefresh";
import HeaderSame from "./common/sameHeader.vue";
export default {
  components: { HeaderSame, "v-scroll": Scroll },
  name: "applydetail",
  data() {
    return {
      headerObj: {
        title: "上浆",
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
  methods: {
    // 下拉刷新
    onRefresh(done) {
      this.lists();
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
          url: "api/WarpingOrder/GetWarpsizingList",
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
    lists: function() {
      this.$axios({
        method: "post",
        url: "api/WarpingOrder/GetWarpsizingList",
        data: {
          orderid: localStorage.getItem("zjID"),
          pageindex: "0",
          pagesize: this.num
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
    this.lists();
  },
  updated() {
    $(".nullData").css("padding-bottom", "0.5rem");
  },
};
</script>

<style scoped lang="less">
.yo-scroll {
  top: -0.1rem;
}
.bg1 {
  font-family: "Microsoft YaHei UI";
  font-size: 0.17rem;
  height: auto;
  padding-bottom: 0.7rem;
  min-height: 6.7rem;
  .item-detail {
    .item-title {
      padding: 0.12rem 0 0 0.1rem;
      span:first-child {
        color: #999;
      }
      span:last-child {
        color: #333;
        margin-left: 0.1rem;
        font-weight: bold;
      }
    }
    .details {
      background-color: white;
      width: 3.4rem;
      height: 1.03rem;
      margin: 0 auto;
      margin-top: 0.1rem;
      > div {
        display: inline-block;
      }
      .tails {
        font-size: 0.16rem;
        .rightnum{
          color: #999;
          >span{
             margin-right: 0.1rem;
          }
        }
        div {
          margin-top: 0.08rem;
          margin-left: 0.15rem;
          .top-one {
            // width: 0.75rem;
            display: inline-block;
            // color: #999;
          }
          .top-two {
            display: inline-block;
            width: 0.55rem;
            text-align: center;
            color: #333;
            font-weight: bold;
          }
          img {
            width: 0.16rem;
            vertical-align: middle;
            // margin: 0 0.1rem 0 0.1rem;
          }
        }
        div:first-child {
          margin-top: 0.12rem;
        }
      }
      .edit {
        background-color: #4cbec0;
        width: 0.45rem;
        height: 0.73rem;
        text-align: center;
        color: white;
        padding-top: 0.3rem;
      }
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
</style>
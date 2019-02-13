<template>
  <div class="bg1" @scroll="handleScroll1()">
    <HeaderSame :headerObj="headerObj"></HeaderSame>
    <v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite" :dataList="scrollData">
      <div class="item-detail" v-for="(item,index) in getDatalist" :key="index">
        <div class="item-title">
          <span>上浆单</span>
          <span>{{item.WarpRisingCode}}</span>
        </div>
        <div class="details">
          <div class="tails" @click="$router.push('mergeBill?id='+item.ID)">
            <div @click="$router.push('mergeBill?id='+item.ID)">
              <div>经轴编号<span></span></div>
              <div>{{item.BeamCode}}</div>
            </div>
            <div>
              <div>经轴长度<span></span></div>
              <div>{{item.Length}}</div>
            </div>

            <!-- <div>
              <div>时间<span></span></div>
              <div>{{item.AddDate}}</div>
            </div> -->
          </div>
          <div class="edit" @click="$router.push('addZhouBing?handle='+'edit&code='+item.WarpRisingCode+'&id='+item.WarpRisingID+'&ids='+item.ID)">
            <div>编</div>
            <div>辑</div>
          </div>
        </div>
      </div>
    </v-scroll>

    <div class="posit">
      <span @click="returnGD">返回工单</span><span @click="$router.push('addZhouBing?handle='+'add')">新增轴</span>
    </div>
  </div>
</template>

<script>
import HeaderSame from "./common/sameHeader.vue";
import Scroll from "./pullRefresh";
export default {
  components: { HeaderSame, "v-scroll": Scroll },
  name: "applydetail",
  data() {
    return {
      headerObj: {
        title: "并轴",
        img: "",
        text: "firstlist"
      },
      getDatalist: [],
      counter: 1, //默认已经显示出5条数据 count等于一是让从6条开始加载
      num: "5", // 一次显示多少条
      pageStart: 0, // 开始页数
      pageEnd: 0, // 结束页数
      scrollData: {
        noFlag: false //暂无更多数据显示
      }
    };
  },
  updated() {
    $(".nullData").css("padding-bottom", "0.5rem");
  },
  mounted() {
    $("#app").css("overflow-y", "auto");
  },
  methods: {
    // 下拉刷新
    onRefresh(done) {
      this.getData();
      done();
      this.counter = 1; //默认已经显示出5条数据 count等于一是让从6条开始加载
      this.num = "5"; // 一次显示多少条
      this.pageStart = 0; // 开始页数
      this.pageEnd = 0; // 结束页数
      this.getDatalist = []; // 下拉更新数据存放数组
      this.shaLists = {
        noFlag: false //暂无更多数据显示
      };
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
          url:  "/WarpingOrder/GetReBeamDetailListData",
          data: {
            orderid: localStorage.getItem("zjID"),
            pageindex: counters,
            pagesize: this.num
          }
        })
          .then(res => {
            console.log(res.data.data);
            for (var i = 0; i < res.data.data.length; i++) {
              this.getDatalist.push(res.data.data[i]);
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
    getData: function() {
      this.$axios({
        method: "post",
        url:  "/WarpingOrder/GetReBeamDetailListData",
        data: {
          orderid: localStorage.getItem("zjID"),
          pageindex: "0",
          pagesize: this.num
        }
      })
        .then(res => {
          console.log(res.data.data);
          this.getDatalist = res.data.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    //点击返回工单
    returnGD: function() {
      this.$router.push("zhengJSingle");
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style scoped lang="less">
.yo-scroll {
  top: -0.1rem;
}
.storeList {
  position: relative;
  // background: #fff;
}
.bg1 {
  font-family: "Microsoft YaHei UI";
  font-size: 0.17rem;
  height: auto;
  padding-bottom: 0.4rem;
  min-height: 100%;
  .item-detail {
    .item-title {
      padding: 0.12rem 0 0.1rem 0.1rem;
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
      height: 1rem;
      margin: 0 auto;
      display: flex;
      .tails {
        width: 2.55rem;
        padding: 0.15rem 0.2rem;
        >div{
          color: #333;
          display: flex;
          height: 0.27rem;
          line-height: 0.27rem;
          >div:first-child{
            color: #999;
            width: 0.7rem;
            text-align: justify;
            margin-right: 0.16rem;
            > span {
              display: inline-block /* Opera */;
              padding-left: 100%;
            }
          }
        }
        >div:first-child{
          // font-family:Microsoft YaHei UI;
           height: 0.3rem;
          >div:first-child{
            color: #333;
          }
          >div:last-child{
            color: #FFA237;
            font-weight: bold;
          }
        }
      }
      .edit {
        width: 0.45rem;
        background-color: #4cbec0;
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
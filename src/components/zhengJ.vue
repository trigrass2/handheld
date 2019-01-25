<template>
  <div class="bg1">
    <HeaderSame :headerObj="headerObj"></HeaderSame>
    <div class="bodys">
      <v-scroll
        :on-refresh="onRefresh"
        :on-infinite="onInfinite"
        :dataList="scrollData"
        class="bg1"
      >
        <div class="body-item" v-for="item in listdata">
          <!--上方具体数据部分-->
          <div class="top-item">
            <div class="left-item" @click="$router.push('zjSingleDetail?id='+item.ID)"> 
              <div>
                <div>经轴编号
                  <span></span>
                </div>
                <div>{{item.BeamCode}}</div>
              </div>
              <div style="margin-top: .08rem;">
                <div>毛羽数
                  <span></span>
                </div>
                <div>{{item.BeamHairinessNum}}</div>
              </div>
              <div>
                <div>断纱
                  <span></span>
                </div>
                <div>{{item.YarnBroken}}</div>
              </div>
              <div>
                <div>米数
                  <span></span>
                </div>
                <div>{{item.Length}}</div>
              </div>
              <!-- <div>
                <div>时间
                  <span></span>
                </div>
                <div>{{item.OprationDate}}</div>
              </div> -->
            </div>
            <div class="right-item" @click="$router.push('addZhou?handle='+'edit&id='+item.ID)">
              <div>编</div>
              <div>辑</div>
            </div>
          </div>
        </div>
      </v-scroll>
    </div>

    <div class="posit">
      <span @click="returnGD">返回工单</span><span @click="$router.push('addZhou?handle='+'add')">新增轴</span>
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
        title: "整经",
        img: "",
        text: "firstlist"
      },
      counter: 1, //默认已经显示出5条数据 count等于一是让从6条开始加载
      num: "5", // 一次显示多少条
      pageStart: 0, // 开始页数
      pageEnd: 0, // 结束页数
      listdata: [], // 下拉更新数据存放数组
      scrollData: {
        noFlag: false //暂无更多数据显示
      }
    };
  },
  mounted() {
    $("#app").css("overflow-y", "auto");
  },
  updated() {
    $(".nullData").css("padding-bottom", "0.5rem");
  },
  methods: {
    //下拉刷新
    onRefresh(done) {
      this.dataList();
      done();
      this.counter = 1; //默认已经显示出5条数据 count等于一是让从6条开始加载
      this.num = "5"; // 一次显示多少条
      this.pageStart = 0; // 开始页数
      this.pageEnd = 0; // 结束页数
      this.listdata = []; // 下拉更新数据存放数组
      this.scrollData = {
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
          url: localStorage.getItem("IP")+"/WarpingOrder/GetWarpingDetailListData",
          data: {
            orderid: localStorage.getItem("zjID"),
            pageindex: counters,
            pagesize: this.num
          }
        })
          .then(res => {
            console.log(res.data.data);
            for (var i = 0; i < res.data.data.length; i++) {
              this.listdata.push(res.data.data[i]);
            }
            console.log(this.listdata);
          })
          .catch(error => {
            console.log(error);
          });

        more.style.display = "none"; //隐藏加载条
      }
      done();
    },
    dataList: function() {
      this.$axios({
        method: "post",
        url: localStorage.getItem("IP")+"/WarpingOrder/GetWarpingDetailListData",
        data: {
          orderid: localStorage.getItem("zjID"),
          pageindex: "0",
          pagesize: this.num
        }
      })
        .then(res => {
          console.log(res);
          this.listdata = res.data.data;
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
    this.dataList();
  }
};
</script>

<style lang="less" scoped>
.yo-scroll {
  top: -0.6rem;
}
.bg1 {
  // position: relative;
  font-size: 0.17rem;
  margin-top: 0.6rem;
  // margin-bottom: 0.8rem;
  min-height: 100%;
  height: auto;
  // padding-bottom: 0.5rem;
  font-family: "";
  .body-item:not(:last-child) {
    margin-bottom: 0.1rem;
  }
  .body-item {
    width: 3.4rem;
    height: 1.4rem;
    background-color: white;
    margin: 0 auto;
    margin-bottom: 0.1rem;
    .top-item {
      display: flex;
      .left-item {
        padding: 0.15rem 0.15rem;
        > div {
          display: flex;
          width: 2.65rem;
          margin-bottom: 0.05rem;
          font-size: 0.17rem;
          height: 0.18rem;
          line-height: 0.18rem;
          color: #999;
          > div:first-child {
            width: 0.7rem;
            text-align: justify;
            margin-right: 0.16rem;
            > span {
              display: inline-block /* Opera */;
              padding-left: 100%;
            }
          }
          > div:last-child {
            color: #333;
          }
        }
        >div:first-child{
          height: 0.28rem;
          line-height: 0.28rem;
          color: #333;
          >div:last-child{
            color: #FFA237;
            font-weight: bold;
          }
        }
      }
      .right-item{
        width: 0.45rem;
        height: 0.55rem;
        text-align: center;
        font-size: 0.17rem;
        background: #4CBEC0;
        color: #fff;
        padding: 0.43rem 0;
        margin: 0 auto;
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
}
</style>
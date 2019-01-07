<template>
  <div>
    <div class="tabItem">
      <slot></slot>
    </div>
    <HeaderSame :headerObj="headerObj"></HeaderSame>
    <v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite" :dataList="scrollData" class="bg1">
      <div class="body-item" v-for="item in listdata">
        <div class="item-title">
          <span class="lf">整经编号: {{item.Code}}</span>
          <span class="rt" @click="watchDetail(item.ID,item.Code)">查看</span>
        </div>
        <div class="item-body">
          <div class="productName">
            <div>
              品
              <span class="spaces"></span>番
            </div>
            <div>{{item.PNO}}</div>
          </div>
          <div class="useVarieties">
            <div>筒子个数</div>
            <div>{{item.CheeseNum}}</div>
          </div>
          <div class="productNum">
            <div>经轴个数</div>
            <div>{{item.SpoolNum}}</div>
          </div>
        </div>
      </div>
    </v-scroll>
  </div>
</template>

<script>
import Scroll from "./pullRefresh";
import HeaderSame from "./common/sameHeader.vue";
export default {
  components: { HeaderSame, "v-scroll": Scroll },
  data() {
    return {
      headerObj: {
        title: "前道",
        img: "",
        text: ""
      },
      counter: 1, //默认已经显示出15条数据 count等于一是让从16条开始加载
      num: "5", // 一次显示多少条
      pageStart: 0, // 开始页数
      pageEnd: 0, // 结束页数
      listdata: [], // 下拉更新数据存放数组
      scrollData: {
        noFlag: false //暂无更多数据显示
      }
    };
  },
  mounted: function() {
    this.getList();
  },
  updated() {
    $(".back").css("display", "none");
  },
  methods: {
    getList() {
      let vm = this;
      this.$axios({
        method: "post",
        url: "api/WarpingOrder/GetWarpOrderListData",
        data: {
          pageindex: "0",
          pagesize: this.num
        }
      })
        .then(response => {
          console.log(response);
          vm.listdata = response.data.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    //下拉刷新
    onRefresh(done) {
      this.getList();
      done();
    },

    // 路由跳转
    watchDetail(id,code){
       this.$router.push('zhengJSingle');
    },
    //上拉加载更多
    onInfinite(done) {
      let end = (this.pageEnd = this.num * this.counter);
      let i = (this.pageStart = this.pageEnd - this.num);
      //   console.log(this.pageEnd);
      //   console.log(this.pageStart);
      let counters = String(this.counter++);

      let more = this.$el.querySelector(".load-more");
      if (i >= 10) {
        more.style.display = "none"; //隐藏加载条
        //走完数据调用方法
        this.scrollData.noFlag = true;
      } else {
        this.$axios({
          method: "post",
          url: "api/WarpingOrder/GetWarpOrderListData",
          data: {
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
    }
  }
};
</script>
<style lang="less" scoped>
.yo-scroll{
	top: -0.6rem;
}
.bg1 {
  padding-top: 0.12rem;
  padding-bottom: 0.2rem;
  font-size: 0.17rem;
  min-height: 6.7rem;
  height: auto;
  margin-top: 0.48rem;
  .body-item {
    width: 3.4rem;
    height: 1.54rem;
    background-color: white;
    margin: 0 auto;
    margin-top: 0.12rem;
    .item-title {
      border-bottom: 1px solid #d5d5d5;
      height: 0.45rem;
      .lf {
        margin-left: 0.15rem;
        margin-top: 0.12rem;
        color: #474747;
        font-weight: bold;
      }
      .rt {
        margin-right: 0.15rem;
        margin-top: 0.12rem;
        color: #007eff;
      }
    }
    .item-body > div div {
      display: inline-block;
    }
    .item-body {
      .productName > div:first-child {
        margin: 0.15rem 0.2rem 0.08rem 0.15rem;
      }
      .useVarieties > div:first-child {
        margin: 0 0.2rem 0.08rem 0.15rem;
      }
      .productNum > div:first-child {
        margin: 0 0.2rem 0.08rem 0.15rem;
      }
    }
  }
  .first-body {
    margin-top: 0;
  }
}

.body-item:first-child {
  margin-top: 0;
}

.item-body > div div:first-child {
  color: #999;
}

.item-body > div div:last-child {
  color: #474747;
}
</style>
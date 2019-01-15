<template>
  <div class="bg1" @scroll="handleScroll1()">
    <HeaderSame :headerObj="headerObj"></HeaderSame>
    <loadList @scrollEnd="scrollEnd" :page="pageindex">
      <div class="storeList">
      <div class="item-detail" v-for="(item,index) in getDatalist" :key="index">
        <div class="item-title">
          <span>上浆单</span>
          <span>{{item.WarpRisingCode}}</span>
        </div>
        <div class="details">
          <div class="codes" @click="$router.push('mergeBill?id='+item.ID)">
            <span>{{item.BeamCode}}</span>
            <br>
            <span>经轴编号</span>
          </div>
          <div class="tails" @click="$router.push('mergeBill?id='+item.ID)">
            <div>
              <span>经轴长度</span>
              <span>{{item.BeamLength}}</span>
            </div>
            <!-- <div>
            <span>米数</span>
            <span>{{item.Length}}</span>
            </div>-->
            <div>
              <span>时间</span>
              <span>{{item.AddDate}}</span>
            </div>
          </div>
          <div class="edit">
            <span
              @click="$router.push('addZhouBing?handle='+'edit&code='+item.WarpRisingCode+'&id='+item.WarpRisingID+'&ids='+item.ID)"
            >编
              <br>辑
            </span>
          </div>
        </div>
      </div>
      <div v-if="show" style="font-size: 0.16rem;color: #444444;text-align: center;padding:0.1rem 0">没有更多啦</div>
   </div>
    </loadList>

    <div class="posit">
      <span @click="returnGD">返回工单</span><span @click="$router.push('addZhouBing?handle='+'add')">新增轴</span>
    </div>
  </div>
</template>

<script>
import HeaderSame from "./common/sameHeader.vue";
import loadList from "./common/load.vue";
export default {
  components: { HeaderSame,loadList },
  name: "applydetail",
  data() {
    return {
      headerObj: {
        title: "并轴",
        img: "",
        text: "firstlist"
      },
      getDatalist: [],
      show: false,
      pageindex:0,
      scrollStatus: true,
    };
  },
  methods: {

    aa: function() {
      this.num++;
    },
     scrollEnd: function(num) {
      this.pageindex = num;
      if (this.scrollStatus) {
        this.$axios({
        method: "post",
        url: "api/WarpingOrder/GetReBeamDetailListData",
        data: {
          orderid: localStorage.getItem("zjID"),
          pageindex: this.pageindex,
          pagesize: "5"
        }
      })
          .then(res => {
            
            if (res.status == 200) {
              for (var i in res.data.data) {
                this.getDatalist.push(res.data.data[i]);
              }
              console.log(this.getDatalist);
              if (res.data.data.length < 5) {
               this.show=true;
               this.scrollStatus = false
              }

            }
          });
      }
    },
    getData: function() {
      this.$axios({
        method: "post",
        url: "api/WarpingOrder/GetReBeamDetailListData",
        data: {
          orderid: localStorage.getItem("zjID"),
          pageindex: this.pageindex,
          pagesize: "5"
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
.storeList {
    position: relative;
    // background: #fff;
}
.bg1 {
  font-family: "Microsoft YaHei UI";
  font-size: 0.17rem;
  // height: auto;
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
      height: 1.03rem;
      margin: 0 auto;
      display: flex;
      > div {
        display: inline-block;
      }
      .codes {
        width: 1rem;
        text-align: center;
        padding: 0.2rem 0 0 0rem;
        span:first-child {
          color: #ffa237;
          font-size: 0.35rem;
        }
        span:last-child {
          color: #333;
          font-size: 0.13rem;
        }
      }
      .tails {
        margin-top: 0.15rem;
        width: 2rem;
        font-size: 0.16rem;
        div {
          margin-top: 0.08rem;
          span:first-child {
            width: 0.8rem;
            display: inline-block;
            color: #999;
          }
          span:last-child {
            color: #333;
          }
        }
        div:first-child {
          margin-top: 0.12rem;
        }
      }
      .edit {
        background-color: #4cbec0;
        flex: 1;
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
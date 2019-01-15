<template>
  <div class="bg1" @scroll="handleScroll1()">
    <HeaderSame :headerObj="headerObj"></HeaderSame>
    <loadList @scrollEnd="scrollEnd" :page="pageindex">
      <div class="storeList">
      <div class="item-detail" v-for="(item,index) in getDatalist" :key="index">
         {{item.BeamLength}}
      </div>
      <div v-if="show" style="font-size: 0.18rem;color: #444444;text-align: center;">没有更多啦</div>
   </div>
    </loadList>

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
          pagesize: "4"
        }
      })
          .then(res => {
            if (res.status == 200) {
              console.log(res.data.data)
              for (var i in res.data.data) {
                this.getDatalist.push(res.data.data[i]);
              }
              if (res.data.data.length < 4) {
               this.show=true
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
          pagesize: "4"
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
.item-detail{
  height: 1.5rem;
  background:red;
  margin-bottom: 0.2rem;
  font-size: 0.3rem;
  color: white;
  line-height: 1.5rem;
  text-align: center;
  font-weight: bold;
}
.bg1 {
  font-family: "Microsoft YaHei UI";
  font-size: 0.17rem;
}
</style>
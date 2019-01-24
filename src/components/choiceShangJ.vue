<template>
  <div class="bg1">
    <HeaderSame :headerObj="headerObj"></HeaderSame>
    <div class="body-item" v-for="item in zjList">
      <span class="lf" @click="$router.push('shangJcondition?id='+item.ID)">上浆单：{{item.Code}}</span>
      <span class="rt" @click="jumpback(item.Code,item.ID)">选择</span>
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
        title: "选择上浆单",
        img: "",
        text: ""
      },
      zjList: []
    };
  },
  methods: {
    jumpback: function(Code, ID) {
      this.$route.query.jump == "bing"
        ? this.$router.push(
            "addZhouBing?chocecode=" +
              Code +
              "&choceid=" +
              ID +
              "&handle=" +
              localStorage.getItem("handle")+'&ids='+localStorage.getItem('ids')
          )
        : this.$router.push(
            "addZhouShang?chocecode=" +
              Code +
              "&choceid=" +
              ID +
              "&handle=" +
              localStorage.getItem("handle")+'&ids='+localStorage.getItem('ids')
          );
    },
    lists: function() {
      this.$axios({
        method: "post",
        url: "API/WarpingOrder/GetWarpSizingConditionByOrderid ",
        data: {
          orderid: localStorage.getItem("zjID"),
          type: "1"
        }
      })
        .then(res => {
          if (res.data.code == "0") {
            console.log(res.data.data);
            this.zjList = res.data.data;
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  created() {
    this.lists();
  }
};
</script>

<style scoped lang="less">
.bg1 {
  padding-top: 0.12rem;
  font-size: 0.17rem;
  min-height: 100%;
  height: auto;
  padding-bottom: 0.2rem;
  .body-item {
    width: 3.4rem;
    height: 0.61rem;
    line-height: 0.61rem;
    background-color: white;
    margin: 0 auto;
    margin-top: 0.12rem;
    span:first-child {
      margin-left: 0.15rem;
      color: #474747;
      font-weight: bold;
    }
    span:last-child {
      width: 0.84rem;
      background-color: #007eff;
      text-align: center;
      color: white;
    }
  }
  .body-item:first-child {
    margin-top: 0;
  }
}
</style>
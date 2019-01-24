<template>
  <div class="bg1">
    <HeaderSame :headerObj="headerObj"></HeaderSame>
    <div class="content">
      <div class="titletip">请输入IP地址</div>
      <input placeholder="请输入" class="ipadress">
      <div class="login" @click="login">登 录</div>
    </div>
    <!-- <input type="text" class="inps" /> -->
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
        title: "前道",
        img: "",
        text: ""
      }
    };
  },
  mounted() {
    window.javaAll = this.javaAll;
    $(".back").css("display", "none");
    $("#app").css("overflow-y", "hidden");
  },
  methods: {
    javaAll: function(str) {
      this.$message({
        showClose: true,
        message: str,
        type: "error",
        center: true
      });
    },
    login: function() {
//    var pattern = /(2(5[0-5]{1}|[0-4]\d{1})|[0-1]?\d{1,2})(\.(2(5[0-5]{1}|[0-4]\d{1})|[0-1]?\d{1,2})){3}/g;
      if ($(".ipadress").val() == "192.168.1.160") {
        this.$message({
          showClose: true,
          message: "IP地址正确",
          type: "success",
          center: true
        });
        localStorage.setItem("IP","http://"+$(".ipadress").val());
        this.$router.push("index");
      } else {
        this.$message({
          showClose: true,
          message: "IP地址错误",
          type: "error",
          center: true
        });
      }
    }
  }
};
</script>

<style scoped lang="less">
.disdelate {
  display: none;
}
.inps {
  position: absolute;
  opacity: 0.5;
  width: 3rem;
  height: 1rem;
  border: 2px solid red;
  left: 0.3rem;
  top: 2rem;
}
.bg1 {
  overflow-y: hidden;
  position: relative;
  font-size: 0.17rem;
  height: auto;
  min-height: 6.7rem;
  padding-top: 0.4rem;
  background: #fff;
  > .content {
    width: 3rem;
    text-align: center;
    margin: 0 auto;
    .titletip {
      margin-left: -1.8rem;
      font-weight: 600;
      font-size: 0.16rem;
      margin-bottom: 0.15rem;
    }
    input {
      height: 0.35rem;
      background: #f9f9f9;
      width: 2.6rem;
      border: none;
      border: 1px solid #ccc;
      padding: 0 0.1rem;
      border-radius: 0.02rem;
      margin-bottom: 0.26rem;
      padding-bottom: 0.03rem;
    }
    input:focus {
      border: 1px solid rgb(138, 175, 255);
      outline: none;
    }
    .login {
      width: 2.75rem;
      margin-left: 0.12rem;
      height: 0.36rem;
      background: #2d70ff;
      border-radius: 0.05rem;
      color: #fff;
      text-align: center;
      line-height: 0.36rem;
      font-size: 0.14rem;
    }
  }
}
</style>
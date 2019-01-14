<template>
  <div class="bg1">
    <HeaderSame :headerObj="headerObj"></HeaderSame>
    <div class="settingchoce" @click="$router.push('reviseip')">
      <span>IP地址</span>
      <img src="../assets/img/819.png" alt>
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
        title: "设置",
        img: "",
        text: ""
      },
    };
  },
  methods: {
  },
  created() {

  },
  updated(){
  }
};
</script>

<style scoped lang="less">
.disdelate{
  display: none;
}
.bg1 {
  position: relative;
  font-size: 0.17rem;
  height: auto;
  background: #fff;
  min-height: 6.7rem;
  padding-bottom: 0.7rem;
  .settingchoce{
    margin-left: 0.2rem;
    padding: 0.14rem 0;
    font-size: 0.14rem;
    border-bottom: 1px solid #e6e6e6;
    span{
      width: 3.15rem;
      display: inline-block;
    }
  }
  img{
    height: 0.15rem;
  }
}

</style>
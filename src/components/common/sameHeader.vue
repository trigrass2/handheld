<template>
  <div class="header">
    <span class="title">{{headerObj.title}}</span>
    <img :src="headerObj.img" alt="" class="share" @click="handleClickRight(headerObj.text)" v-if="headerObj.img!==''">
    <div class="back">
      <img src="../../assets/img/818.png" alt="" @click="gobackClick(headerObj.type)">
    </div>
  </div>
</template>
<script>

export default {
  props: ["headerObj"], 
  methods: {
    gobackClick: function(type) {
        this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
.header {
  height: 0.48rem;
  position: fixed;
  width: 100%;
  text-align: center;
  font-size: 0.36rem;
  color: #333333;
  line-height: 0.4rem;
  top: 0;
  background: #fff;
  z-index: 99999;
  border-bottom: 1px solid #f3f3f3;
  .title{
   
    font-size: 0.18rem;
  }
  .share {
    position: absolute;
    right: 0.4rem;
    height: 0.33rem;
    top: 0.27rem;
  }
  .back {
    height: 100%;
    position: absolute;
    left: 0.3rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    top: 0;
    img {
      height: 0.22rem;
    }
  }
}
</style>


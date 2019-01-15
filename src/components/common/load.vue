<template>
  <div class="scrollContent" ref="wrapper">
    <slot></slot>
  </div>
</template>
<script>
import Bscroll from "better-scroll";
export default {
  data: function() {
    return {
      options: {
        click: true,
        scrollY: true,
        scrollX: false,
        pullUpLoad: {
          threshold: 50
        },
        tap: true
      },
      num: 0,
      pages:''
    };
  },
  props: {
    page: { type: Number, default: false },
  },
  watch: {
    page (val) {
      // console.log(val)
      this.pages = val
    },
  },
  mounted: function() {
    this.scroll = new Bscroll(this.$refs.wrapper, this.options);
    this.handlePullLoad();
    this.scroll.refresh();
  },
  methods: {
    handlePullLoad: function() {
      // console.log(this.page)
      let that = this
      this.scroll.on("pullingUp", () => {
        // console.log(that.pages)
        if(!that.pages){
          that.pages= 0;
        }
        that.pages += 1;
        that.$emit("scrollEnd", that.pages);
        that.scroll.refresh();
        that.scroll.finishPullUp();
      });
    }
  }
};
</script>
<style lang="less" scoped>
.scrollContent {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>



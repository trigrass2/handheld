<template>
  <div class="bg1">
    <HeaderSame :headerObj="headerObj"></HeaderSame> 
    <div class="body-item">
      <div class="item-body">
        <div class="productCode">
          <div>整经编号</div>
          <div>{{listdata.Code}}</div>
        </div>
        <div class="productName">
          <div>品
            <span class="spaces"></span>番
          </div>
          <div>{{listdata.PF}}</div>
        </div>
      </div>
      <div class="watchAll" @click="watchAll()">
        <span style="color: #007EFF;">查看全部参数></span>
      </div>
    </div>

    <div class="operations">
      <div class="operations-list">
        <div>挂纱
          <span>{{listdata.GSTJ}}</span>
        </div>
        <div class="rt" @click="guasha(0)">挂纱</div>
      </div>
    </div>

    <div class="operations">
      <div class="operations-list">
        <div>整经
          <span>{{listdata.ZJTJ}}</span>
        </div>
        <div class="rt" @click="guasha(1)">整经</div>
      </div>
    </div>

    <div class="operations">
      <div class="operations-list">
        <div>上浆
          <span>{{listdata.SJTJ}}</span>
        </div>
        <div class="rt" @click="guasha(2)">上浆</div>
      </div>
    </div>

    <div class="operations">
      <div class="operations-list">
        <div>并轴
          <span>{{listdata.BZTJ}}</span>
        </div>
        <div class="rt" @click="guasha(3)">并轴</div>
      </div>
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
        title: "整浆并工单",
        img: "",
        text: "toplist"
      },
      listdata: {}
    };
  },
  updated(){
    $('#app').css('overflow-y','hidden')
  },
  methods: {
  	
    //获取页面数据
    lists: function() {
    	let id = localStorage.getItem("zjID");
      this.$axios({
        method: "post",
        url: "api/WarpingOrder/GetWarpOrderByID",
        data: {
          id: id,
          type: "0"
        }
      }).then(res => {
          console.log(res);
          this.listdata = res.data.data;
        }).catch(error => {
          console.log(error);
        });
    },
    //查看所有参数页面
    watchAll: function() {
    	this.$router.push('workOrderDetail');
    },
    //下方操作页面
    guasha: function(index) {
      if (index == 0) {
        //挂纱页面
        this.$router.push('guasha');
      } else if (index == 1) {
        //整经页面
        this.$router.push('zhengJ');
      } else if (index == 2) {
        //上浆页面
        this.$router.push('shangJ');
      } else {
        //并轴页面
        this.$router.push('bingzhou');
      }
    }
  },
  created() {
    this.lists();
  },
};
</script>

<style lang="less" scoped>
.bg1 {
  font-size: 0.17rem;
  .body-item {
    background-color: white;
    .productCode {
      padding-top: 0.15rem;
      margin-left: 0.15rem;
      color: #474747;
      font-weight: bold;
    }
    .productCode div:first-child {
      margin-right: 0.2rem;
    }
    .productName div:first-child {
      margin: 0.15rem 0.2rem 0.15rem 0.15rem;
    }
    .useVarieties div:first-child {
      margin: 0 0.2rem 0.08rem 0.15rem;
    }
    .productNum div:first-child {
      margin: 0 0.2rem 0.15rem 0.15rem;
    }
    .watchAll {
      height: 0.5rem;
      line-height: 0.5rem;
      text-align: center;
      a {
        color: #007eff;
      }
    }
  }
  .operations {
    width: 3.4rem;
    height: 0.65rem;
    line-height: 0.65rem;
    background-color: white;
    margin: 0 auto;
    margin-top: 0.15rem;
    border: none;
    .operations-list div:first-child {
      margin-left: 0.15rem;
      font-size: 0.18rem;
    }
    .rt {
      width: 1.5rem;
      height: 0.65rem;
      line-height: 0.65rem;
      text-align: center;
      background-color: #007eff;
      border-radius: 0.02rem;
      color: white;
    }
    .operations-list div {
      display: inline-block;
      span {
        font-weight: bold;
      }
    }
  }
}
.item-body {
  border-bottom: 1px solid #f3f3f3;
  border-top: 1px solid #ccc;
}
.item-body > div div:first-child {
  color: #999;
}
.item-body > div div:last-child {
  color: #474747;
}
.item-body > div div {
  display: inline-block;
}
</style>
<template>
  <div class="bg1" style="padding-bottom:1.3rem;">
    <HeaderSame :headerObj="headerObj"></HeaderSame>
    <div class="basic">
      <div>
        <div>原料名称</div>
        <div>
          <input type="text" placeholder="请输入" class="yuanlName">
        </div>
      </div>
      <div>
        <div>原料批号</div>
        <div>
          <input type="text" placeholder="请输入" class="yuanlCode">
        </div>
      </div>
      <div>
        <div>筒子确认者</div>
        <div class="rt">
          <select class="tzConfirmer">
            <option v-for="(item,i) in empList" :value="item.Value" :key="i">{{item.Text}}</option>
          </select>
          <img src="../assets/img/819.png">
        </div>
      </div>
      <div>
        <div>垫圈确认者</div>
        <div class="rt">
          <select class="dqConfirmer">
            <option v-for="(item,x) in empList" :value="item.Value" :key="x">{{item.Text}}</option>
          </select>
          <img src="../assets/img/819.png">
        </div>
      </div>
      <div style="border: none;">
        <div>边丝颜色</div>
        <div>
          <input type="text" placeholder="请输入" class="bsColor">
        </div>
      </div>
    </div>

    <div class="add-item" v-for="(i , index)  in num" :key="index">
      <p>责任人{{index+1}}</p>
      <div class="basic" id="addsDetail">
        <div>
          <div>责任人</div>
          <div class="rt">
            <select class="zeren">
              <option v-for="(item,tag) in empList" :value="item.Value" :key="tag">{{item.Text}}</option>
            </select>
            <img src="../assets/img/819.png">
          </div>
        </div>
        <div>
          <div id="tongNum">筒子个数</div>
          <div class="rt">
            <input
              type="text"
              placeholder="请输入"
              class="tongzNum"
              oninput="value=value.replace(/[^\d]/g,'')"
            >
          </div>
        </div>
        <div class="block">
          <span class="demonstration">开始时间</span>
          <el-date-picker
            v-model="startRadios[index]"
            type="datetime"
            placeholder="选择日期"
            class="rt dates startTime"
            value-format="yyyy-MM-dd HH:mm:ss"
            size="small"
          ></el-date-picker>
        </div>
        <div class="block">
          <span class="demonstration">结束时间</span>
          <el-date-picker
            v-model="endRadios[index]"
            type="datetime"
            placeholder="选择日期"
            class="rt dates endTime"
            value-format="yyyy-MM-dd HH:mm:ss"
            size="small"
          ></el-date-picker>
        </div>
        <div style="border-bottom: none;">
          <div>班别</div>
          <div class="rt">
            <select class="classBan">
              <option v-for="(item,flag) in drpList" :value="item.Value" :key="flag">{{item.Text}}</option>
            </select>
            <img src="../assets/img/819.png">
          </div>
        </div>
      </div>
    </div>

    <div class="addNew" @click="addNew">
      <img src="../assets/img/3893.png">
    </div>
    <div class="posit" @click="confirms">
      <p>确定</p>
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
        title: "新增挂纱",
        img: "",
        text: ""
      },
      num: 1,
      empList: [],
      drpList: [],
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      startRadios: [""],
      endRadios: [""]
    };
  },
  methods: {
    addNew: function() {
      this.num++;
    },
    confirms: function() {
      console.log(this.endRadios);
      //非空验证
      if (
        $(".yuanlName").val() == "" ||
        $(".yuanlCode").val() == "" ||
        $(".tzConfirmer").val() == "" ||
        $(".dqConfirmer").val() == "" ||
        $(".bsColor").val() == "" ||
        $(".zeren").val() == "" ||
        $(".tongzNum").val() == "" ||
        $(".classBan").val() == ""
      ) {
        this.$message({
          showClose: true,
          message: "请完善信息",
          type: "error",
          center: true
		});
		for (var i = 0; i < $("input.el-input__inner").length; i++) {
          console.log($("input.el-input__inner").val());
          if ($("input.el-input__inner").val() == "") {
            this.$message({
              showClose: true,
              message: "请完善信息",
              type: "error",
              center: true
            });
          }
        }
      } else {
        //不为空之后
        console.log();
        let entity = {};
        entity.MName = $(".yuanlName").val();
        entity.BatchNo = $(".yuanlCode").val();
        entity.CheeseNumChekerID = $(".tzConfirmer").val();
        entity.CheeseNumChekerName = $(".tzConfirmer option:selected").text();
        entity.CloutCheckerID = $(".dqConfirmer").val();
        entity.CloutCheckerName = $(".dqConfirmer option:selected").text();
        entity.EdgWireColor = $(".bsColor").val();

        let emplist = [];

        for (let i = 0; i < $(".add-item").length; i++) {
			
          let emplisters = {};

          emplisters.EmpID = $(".zeren")
            .eq(i)
            .val();
          emplisters.EmpName = $(".zeren option:selected")
            .eq(i)
            .text();
          emplisters.DoNum = $(".tongzNum")
            .eq(i)
            .val();
          emplisters.BeginTime = this.value1;
          emplisters.EndTime = this.value2;
          emplisters.ClassBan = $(".classBan")
            .eq(i)
            .val();
          emplisters.ClassBanName = $(".classBan option:selected")
            .eq(i)
            .text();

          emplist.push(emplisters);
        }
        this.$axios({
          method: "post",
          url: "api/WarpingOrder/SaveWarYarnHung",
          data: {
            entity: entity,
            empjson: emplist
          }
        })
          .then(res => {
            console.log(res);
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    tzConfirmerList: function() {
      //筒子确认者列表
      this.$axios({
        method: "post",
        url: "api/WarpingOrder/GetEmpDropDownList"
      })
        .then(res => {
          console.log(res);
          this.empList = res.data.data;
        })
        .catch(error => {
          console.log(error);
        });
      //垫圈确认者列表
      this.$axios({
        method: "post",
        url: "api/WarpingOrder/GetBShiftDrpDownList"
      })
        .then(res => {
          console.log(res);
          this.drpList = res.data.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  created() {
    this.tzConfirmerList();
  }
};
</script>

<style scoped lang="less">
.bg1 {
  position: relative;
  font-size: 0.17rem;
  height: auto;
  padding-bottom: 0.7rem;
  .basic {
    background-color: white;
    line-height: 0.5rem;
    padding-left: 0.15rem;
    > div {
      height: 0.5rem;
      border-bottom: 1px solid #d5d5d5;
    }
    > div div {
      display: inline-block;
      color: #474747;
    }
    > div div:first-child {
      width: 1rem;
      color: #474747;
    }
    input {
      width: 2.2rem;
      height: 0.35rem;
      line-height: 0.35rem;
      padding-left: 0.07rem;
      font-size: 0.17rem;
      border: none;
      outline: none;
      background-color: #f3f3f3;
      color: #999;
    }
    select {
      vertical-align: middle;
      outline: none;
      border: none;
      white-space: nowrap;
      appearance: none;
      -moz-appearance: none;
      -webkit-appearance: none;
      text-indent: 0.02rem;
      background-color: transparent;
      font-size: 0.17rem;
      color: #999;
      width: 0.8rem;
    }
    img {
      margin-right: 0.15rem;
      width: 0.09rem;
      height: 0.17rem;
    }
  }
}

.posit {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  background-color: #007eff;
  color: white;
}

.addNew {
  position: fixed;
  bottom: 0.65rem;
  left: 0.97rem;
  img {
    width: 1.65rem;
  }
}
.add-item {
  width: 3.4rem !important;
  margin: 0 auto;
  p {
    margin: 0.15rem 0 0.1rem 0.05rem;
    color: #999999;
    font-size: 0.15rem;
  }
  input {
    width: 2.1rem !important;
    margin-right: 0.15rem;
  }
  #tongNum {
    width: 0.9rem;
  }
}
.add-item:last-child {
  margin-bottom: 0.5rem !important;
}

.dates {
  margin-right: 0.15rem;
  width: 2.16rem;
}
</style>
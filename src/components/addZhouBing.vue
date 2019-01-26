<template>
	<div class="bg1">
		<HeaderSame :headerObj="headerObj"></HeaderSame>
		<div class="basic">
			<div>
				<div>上浆单</div>
				<div class="rt" @click="$router.push('choiceShangJ?jump='+'bing')">
					<span class='chooseSJ' style="color: #007EFF;">{{chocecode || code || '选择上浆单'}}</span> <img src="../assets/img/824.png">
				</div>
			</div>
			<div style="color: #333;">
				<div>经轴编号</div><div class="jzCode"><input type="text" class="jzbianhao" v-model="shaDetails.BeamCode" placeholder="请输入"></div><div><img src="../assets/img/3906.png" class="saoma"></div>
			</div>
			<div>
				<div>经轴长度</div><div class="rt" style="margin-right: .15rem;">请在责任人中输入</div>
        <!-- <div><input type="text" class="jzlength" v-model="shaDetails.BeamLength" placeholder="请输入"></div> -->
			</div>
			<!-- <div>
				<div>米数</div><div><input type="text" class="milength" v-model="shaDetails.Length" placeholder="请输入"></div>
			</div> -->
			<div>
				<div>索套个数</div><div class="rt" style="margin-right: .15rem;">请在责任人中输入</div>
			</div>
			<div id="remark">
				<div>备注</div><div><textarea class="beizhu" v-model="shaDetails.Remark"></textarea></div>
			</div>
		</div>	
		<div class="add-item" v-for="(i , index)  in fuzeersLists" :key="index">
			<p>责任人{{index+1}}</p><div class="delateitem" @click="delateitem2(index)">删除</div>
			<div class="basic" id="addsDetail">
				<div>
					<div>责任人</div>
					<div class="rt">
						<select class="zrpeople" style="width:0.75rem">
							<option :value="i.EmpID">{{i.EmpName}}</option>
							<option v-for="(item,tag) in empList" :key="tag" :value="item.Value">{{item.Text}}</option>
						</select> <img src="../assets/img/819.png">
					</div>
				</div>
				<div>
					<div id="tongNum">米数</div><div class="rt"><input type="text" v-model="i.Lenght" placeholder="请输入" class="pemilength"></div>
				</div>
				<div>
					<div id="tongNums">索套个数</div><div class="rt"><input type="text" v-model="i.DoNum" placeholder="请输入" class="taosuo"></div>
				</div>
				<div>
					<div>开始时间</div>
					<div class="rt">
						<el-date-picker v-model="startRadios[index]" type="datetime" size="small" placeholder="选择日期" class="startTime" :editable="false" value-format="yyyy-MM-dd HH:mm"></el-date-picker>
					</div>
				</div>
				<div>
					<div>结束时间</div>
					<div class="rt">
						<el-date-picker v-model="endRadios[index]" type="datetime" size="small"  placeholder="选择日期" class="startTime" :editable="false" value-format="yyyy-MM-dd HH:mm"></el-date-picker>
					</div>
				</div>
				<div style="border-bottom: none;">
					<div>班别</div>
					<div class="rt">
						<select class="classBan" style="width:0.75rem">
							<option :value="i.ClassBan">{{i.ClassBanName}}</option>
							<option v-for="(item,tag) in drpList" :key="tag">{{item.Text}}</option>
						</select> <img src="../assets/img/819.png">
					</div>
				</div>
			</div>
		</div>	
		<div class="add-item" v-for="(i , index)  in num">
			<p>责任人{{index+fuzeersLists.length+1}}</p><div class="delateitem" @click="delateitem(index)">删除</div>
			<div class="basic" id="addsDetail">
				<div>
					<div>责任人</div>
					<div class="rt">
						<select class="zrpeople" style="width:0.75rem">
							<option v-for="(item,tag) in empList" :key="tag" :value="item.Value">{{item.Text}}</option>
						</select> <img src="../assets/img/819.png">
					</div>
				</div>
				<div>
					<div id="tongNum">米数</div><div class="rt"><input type="text" placeholder="请输入" class="pemilength"></div>
				</div>
				<div>
					<div id="tongNums">索套个数</div><div class="rt"><input type="text" placeholder="请输入" class="taosuo"></div>
				</div>
				<div>
					<div>开始时间</div>
					<div class="rt">
						<el-date-picker v-model="startRadios[index+fuzeersLists.length]" type="datetime" size="small" placeholder="选择日期" :editable="false" class="startTime" value-format="yyyy-MM-dd HH:mm"></el-date-picker>
					</div>
				</div>
				<div>
					<div>结束时间</div>
					<div class="rt">
						<el-date-picker v-model="endRadios[index+fuzeersLists.length]" type="datetime" size="small"  placeholder="选择日期" :editable="false" class="startTime" value-format="yyyy-MM-dd HH:mm"></el-date-picker>
					</div>
				</div>
				<div style="border-bottom: none;">
					<div>班别</div>
					<div class="rt">
						<select class="classBan" style="width:0.75rem">
							<option v-for="(item,tag) in drpList" :key="tag">{{item.Text}}</option>
						</select> <img src="../assets/img/819.png">
					</div>
				</div>
			</div>
		</div>	
		<div class="addNew" @click="aa" >
			<img src="../assets/img/3893.png" />
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
        title: this.$route.query.handle == "add" ? "并轴-新增轴" : "并轴-编辑",
        img: "",
        text: "addZhouBing"
      },
      ids: this.$route.query.ids,
      code: this.$route.query.code,
      chocecode: this.$route.query.chocecode,
      num: this.$route.query.handle == "add" ? [1] : [],
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      startRadios: [],
      endRadios: [],
      empList: [],
      drpList: [],
      shaDetails: [],
      fuzeersLists: []
    };
  },
  methods: {
    javaAll:function(str){
      $('.jzbianhao').val(str);
      this.shaDetails.BeamCode = str;
    },
    aa: function() {
      var i = 1;
      this.num.push(i);
    },
    // 删除
    delateitem: function(index) {
      this.$confirm("确定删除此责任人吗？", "", {
        // confirmButtonText: '确定',
        // cancelButtonText: '取消',
        type: ""
      })
        .then(() => {
          this.$message({
            showClose: true,
            type: "success",
            message: "删除成功!"
          });
		      this.num.splice(index, 1);
          this.startRadios[index+this.fuzeersLists.length] == ""? "": this.startRadios.splice(index+this.fuzeersLists.length, 1);
          this.endRadios[index+this.fuzeersLists.length] == "" ? "" : this.endRadios.splice(index+this.fuzeersLists.length, 1);
        })
        .catch(() => {
          this.$message({
            showClose: true,
            type: "info",
            message: "已取消删除"
          });
        });
    },
    delateitem2: function(index) {
      this.$confirm("确定删除此责任人吗？", "", {
        // confirmButtonText: '确定',
        // cancelButtonText: '取消',
        type: ""
      })
        .then(() => {
          this.$message({
            showClose: true,
            type: "success",
            message: "删除成功!"
          });
		       this.fuzeersLists.splice(index, 1);
            this.startRadios.splice(index, 1);
            this.endRadios.splice(index, 1);

          console.log(this.fuzeersLists);
        })
        .catch(() => {
          this.$message({
            showClose: true,
            type: "info",
            message: "已取消删除"
          });
        });
    },
    getData: function() {
      //责任人
      this.$axios({
        method: "post",
        url: localStorage.getItem("IP")+"/WarpingOrder/GetEmpDropDownList"
      })
        .then(res => {
          this.empList = res.data.data;
        //   console.log(this.empList);
        })
        .catch(error => {
          console.log(error);
        });
      //班别
      this.$axios({
        method: "post",
        url: localStorage.getItem("IP")+"/WarpingOrder/GetBShiftDrpDownList"
      })
        .then(res => {
          this.drpList = res.data.data;
        //   console.log(this.drpList);
        })
        .catch(error => {
          console.log(error);
        });
    },
    confirms: function() { 
	  //先移除点击日期控件创建的干扰元素
      $('.el-picker-panel').remove();
    	//循环遍历判断这个日期控件使用的input值
		if($(".chooseSJ").text() == "选择上浆单" || $(".jzbianhao").val() == "" ){
			this.$message({
				showClose: true,
				message: "请完善信息",
				type: "error",
				center: true
			});
			
		}else{
			for(var i=0;i<$('.add-item').length;i++){
        
        if($('.classBan')[i].value == ""
          ||$('.classBan')[i].value == "--请选择--"
          || $('.zrpeople')[i].value == "" 
          || $('.pemilength')[i].value==""
          || $('.taosuo')[i].value=="" 
          || $("input.el-input__inner[readonly='readonly']")[2*i].value == "" 
          || $("input.el-input__inner[readonly='readonly']")[2*i+1].value == "" 
        ){
					this.$message({
						showClose: true,
						message: "请完善信息",
						type: "error",
						center: true
					});
					return;
				}
			}
			//不为空之后
			let entity = {};
	        entity.WarpRisingID = this.$route.query.choceid || this.$route.query.id;
	        entity.WarpRisingCode = this.$route.query.chocecode || this.$route.query.code;
	        entity.WarpOrderID = localStorage.getItem("zjID");
	        entity.WarpOrderCode = localStorage.getItem("zjCODE");
	        entity.BeamCode = $(".jzbianhao").val();
	        // entity.BeamLength = $(".jzlength").val();
	        entity.Length = $(".milength").val();
	        entity.Remark = $(".beizhu").val();
	        this.$route.query.handle == "edit"? (entity.ID = localStorage.getItem("ids")): "";
	
	        let emps = [];
	
	        for (let i = 0; i < $(".add-item").length; i++) {
	          let emplisters = {};
	
	          emplisters.EmpID = $(".zrpeople")
	            .eq(i)
	            .val();
	          emplisters.EmpName = $(".zrpeople option:selected")
	            .eq(i)
	            .text();
	          emplisters.Lenght = $(".pemilength")
	            .eq(i)
	            .val();
	          emplisters.DoNum = $(".taosuo")
	            .eq(i)
	            .val();
	          emplisters.BeginTime = this.startRadios[i];
	          emplisters.EndTime = this.endRadios[i];
	          emplisters.ClassBan = $(".classBan")
	            .eq(i)
	            .val();
	          emplisters.ClassBanName = $(".classBan option:selected")
	            .eq(i)
	            .text();
	
	          emps.push(emplisters);
	        }
	        console.log(entity);
	        console.log(emps);
	        this.$axios({
	          method: "post",
	          url: localStorage.getItem("IP")+"/WarpingOrder/SaveWarpReBeamDetailData",
	          data: {
	            entity: entity,
	            emps: emps
	          }
	        })
	          .then(res => {
	            console.log(res);
	            this.$message({
	              showClose: true,
	              message:
	                this.$route.query.handle == "add" ? "新增成功" : "修改成功",
	              type: "success",
	              center: true
	            });
	            this.$router.push("bingzhou");
	          })
	          .catch(error => {
	            console.log(error);
	          });
		}

    }
    
  },
  created() {
    // 接收安卓方法
    window.javaAll = this.javaAll;
	  this.getData();
	  localStorage.setItem("handle", this.$route.query.handle);
    if (localStorage.getItem("handle") == "edit") {
      localStorage.setItem("ids", this.ids);
      this.$axios({
        method: "post",
        url: localStorage.getItem("IP")+"/WarpingOrder/GetReBeamDetailDataByID",
        data: {
          id: localStorage.getItem("ids")
        }
      })
        .then(res => {
          console.log(res.data.data);
          this.shaDetails = res.data.data.entity;
          this.fuzeersLists = res.data.data.emps;
          for (let i = 0; i < this.fuzeersLists.length; i++) {
           this.startRadios.push(this.fuzeersLists[i].BeginTime);
            this.endRadios.push(this.fuzeersLists[i].EndTime)
          }
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      localStorage.removeItem("ids");
    }
  },
  mounted(){
    $('#app').css('overflow-y','auto')
  },
  updated() {
    if ($(".add-item").length == "1") {
      $(".delateitem:eq(0)").addClass("disdelate");
    } else {
      $(".delateitem:eq(0)").removeClass("disdelate");
    }
  }
};
</script>

<style scoped lang="less">
.disdelate {
  display: none;
}
.bg1 {
  // position: relative;
  font-size: 0.17rem;
  height: auto;
  min-height: 100%;
  padding-bottom: 1.3rem;
  .delateitem {
    position: relative;
    margin-top: -0.3rem;
    margin-left: 3rem;
    color: #666;
    font-size: 0.15rem;
    padding-bottom: 0.1rem
  }
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
      width: 0.85rem;
      color: #474747;
    }
    input {
      width: 2.38rem;
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
    }
    img {
      margin-right: 0.15rem;
      width: 0.09rem;
      height: 0.17rem;
    }
    textarea {
      width: 2.38rem;
      height: 0.75rem;
      margin-top: 0.15rem;
      margin-bottom: 0.15rem;
      outline: none;
      padding-left: 0.05rem;
      padding-top: 0.05rem;
      resize: none;
      border: none;
      background-color: #f3f3f3;
      color: #999999;
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
  #tongNum,
  #tongNums {
    width: 0.9rem;
  }
}
.add-item:last-child {
  margin-bottom: 1rem;
}
#remark {
  height: 1.1rem;
  border: none;
  div {
    vertical-align: top;
    display: inline-block;
    height: 1.1rem;
  }
}
.jzCode {
  height: 0.35rem;
  width: 2rem;
  display: inline-block;
  input {
    width: 1.8rem !important;
  }
  span {
    width: 0.55rem;
    height: 0.35rem;
    line-height: 0.35rem;
    background-color: #007eff;
    text-align: center;
    display: inline-block;
    color: white;
  }
}
.saoma {
  width: 0.35rem !important;
  height: 0.35rem !important;
  margin-left: 0.1rem;
}
.startTime {
  width: 2.2rem !important;
  margin-left: -2.35rem;
}
</style>
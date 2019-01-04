<template>
	<div class="bg1">
		<div class="basic">
			<div>
				<div>上浆单</div>
				<div class="rt">
					<select style="width: 1.05rem;color: #007EFF;" class="sjdanhao">
						<option>请选择上浆单</option>
						<option>请选择11</option>
						<option>请选择22</option>
					</select> <img src="../assets/img/819.png">
				</div>
			</div>
			<div style="color: #333;">
				<div>经轴编号</div><div class="jzCode"><input type="text" class="jzbianhao" placeholder="请输入"><span>确定</span> </div><div><img src="../assets/img/3906.png" class="saoma"></div>
			</div>
			<div>
				<div>经轴长度</div><div><input type="text" class="jzlength" placeholder="请输入"></div>
			</div>
			<div>
				<div>米数</div><div><input type="text" class="milength" placeholder="请输入"></div>
			</div>
			<div>
				<div>索套个数</div><div class="rt" style="margin-right: .15rem;">请在责任人中输入</div>
			</div>
			<div id="remark">
				<div>备注</div><div><textarea class="beizhu"></textarea></div>
			</div>
		</div>	
		<div class="add-item" v-for="(i , index)  in num" :key="index">
			<p>责任人{{index+1}}</p>
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
						<el-date-picker v-model="startRadios[index]" type="datetime" size="small" placeholder="选择日期" class="startTime" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
					</div>
				</div>
				<div>
					<div>结束时间</div>
					<div class="rt">
						<el-date-picker v-model="endRadios[index]" type="datetime" size="small"  placeholder="选择日期" class="startTime" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
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
		export default {
		name: 'applydetail',
		data() {
			return {
      num: 1,
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      startRadios: [""],
	  endRadios: [""],
	  empList:[],
	  drpList:[]
    };
		},
		methods:{
			aa:function(){
				this.num++
			},
			getData:function(){
				 //责任人
				this.$axios({
					method: "post",
					url: "api/WarpingOrder/GetEmpDropDownList"
				})
					.then(res => {
					this.empList = res.data.data;
					console.log(this.empList);
					})
					.catch(error => {
					console.log(error);
					});
				//班别
				this.$axios({
					method: "post",
					url: "api/WarpingOrder/GetBShiftDrpDownList"
				})
					.then(res => {
					this.drpList = res.data.data;
					console.log(this.drpList);
					})
					.catch(error => {
					console.log(error);
					});
			},
			confirms: function() {
				//非空验证
				if (
					$(".sjdanhao").val() == "" ||
					$(".jzbianhao").val() == "" ||
					$(".jzlength").val() == "" ||
					$(".milength").val() == "" ||

					$(".zrpeople").val() == "" ||
					$(".pemilength").val() == "" ||
					$(".taosuo").val() == "" ||
					this.startRadios == "" ||
					this.endRadios == "" ||
					$(".classBan").val() == ""
				) {
					this.$message({
					showClose: true,
					message: "请完善信息",
					type: "error",
					center: true
					});
				} else {
					//不为空之后
					console.log();
					let entity = {};
					entity.WarpRisingID = localStorage.getItem("WarpSizingCodeID") || '11896a5d-62f7-4330-9528-425e43f1803c';
					entity.WarpRisingCode = localStorage.getItem("WarpSizingCode  ") || '121121';
					entity.WarpOrderID = localStorage.getItem("WarpOrderID") || 'd3075b52-a342-48bc-9cc2-dda37b4a3b24';
					entity.WarpOrderCode = localStorage.getItem("WarpOrderCode") || 'ZJ20181211003';
					entity.BeamCode = $(".jzbianhao").val();
					entity.BeamLength = $(".jzlength").val();
					entity.Length = $(".milength").val();
					entity.Remark = $(".beizhu").val();

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
					console.log(emps)
					this.$axios({
					method: "post",
					url: "api/WarpingOrder/SaveWarpReBeamDetailData",
					data: {
						entity: entity,
						emps: emps
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
		},
		created() {
			this.getData();
			
		}
	}
</script>

<style scoped lang="less">
	.bg1{
		position: relative;
		font-size: .17rem;
		height: auto;
		min-height: 6.7rem;
		padding-bottom: .7rem;
		.basic{
			background-color: white;
			line-height: .5rem;
			padding-left:.15rem;
			>div{
				height: .5rem;
				border-bottom: 1px solid #D5D5D5;
			}
			>div div{
				display: inline-block;
				color: #474747;
			}
			>div div:first-child{
				width: .85rem;
				color: #474747;
			}
			input{
				width: 2.38rem;
				height: .35rem;
				line-height: .35rem;
				padding-left: .07rem;
				font-size: .17rem;
				border: none;
				outline: none;
				background-color: #F3F3F3;
				color: #999;
			}
			select{
				vertical-align: middle;
				outline: none;
				border: none;
				white-space: nowrap;
				appearance:none;
		        -moz-appearance:none;
				-webkit-appearance:none;
				text-indent: .02rem;
				background-color: transparent;
				font-size: .17rem;
				color: #999;
				width: .6rem;
			}
			img{
				margin-right: .15rem;
				width: .09rem;
				height: .17rem;
			}
			textarea{
				width: 2.38rem;
				height: .75rem;
				margin-top: .15rem;
				margin-bottom: .15rem;
				outline: none;
				padding-left: .05rem;
				padding-top: .05rem;
				resize:none;
				border: none;
				background-color: #f3f3f3;
				color: #999999;
			}
		}
	}
	.posit{
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: .5rem;
		line-height: .5rem;
		text-align: center;
		background-color: #007EFF;
		color: white;
	}
	.addNew{
		position: fixed;
		bottom: .65rem;
		left: .97rem;
		img{
			width: 1.65rem;
		}
	}
	.add-item{
		width: 3.4rem!important;
		margin: 0 auto;
		p{
			margin: .15rem 0 .1rem .05rem;
			color: #999999;
			font-size: .15rem;
		}
		input{
			width: 2.1rem!important;
			margin-right: .15rem;
		}
		#tongNum,#tongNums{
			width: .9rem;
		}
	}
	.add-item:last-child{
		margin-bottom: 1rem;
	}
	#remark{
		height: 1.1rem;
		border: none;
		div{
			vertical-align: top;
			display: inline-block;
			height: 1.1rem;
		}
	}
	.jzCode{
		height: .35rem;
		width: 2rem;
		display: inline-block;
		input{
			width: 1.35rem!important;
		}
		span{
			width: .55rem;
			height: .35rem;
			line-height: .35rem;
			background-color: #007EFF;
			text-align: center;
			display: inline-block;
			color: white;
		}
	}
	.saoma{
		width: .35rem!important;
		height: .35rem!important;
		margin-left: .1rem;
	}
	.startTime{
		width: 2.2rem!important;
		margin-left: -2.35rem;
	}
</style>
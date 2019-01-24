<template>
	<div class="bg1">
		<HeaderSame :headerObj="headerObj"></HeaderSame>
		<div class="basic">
			<div>
				<div>原料名称</div>
				<div>
					<input type="text" placeholder="请输入" class="yuanlName" v-model="shaDetails.MName">
				</div>
			</div>
			<div>
				<div>原料批号</div>
				<div>
					<input type="text" placeholder="请输入" class="yuanlCode" v-model="shaDetails.BatchNo">
				</div>
			</div>
			<div>
				<div>筒子确认者</div>
				<div class="rt">
					<select class="tzConfirmer">
						<!-- <option v-if="$route.query.handle == 'edit'" :value="shaDetails.CheeseNumChekerID">{{shaDetails.CheeseNumChekerName}}</option> -->
						<option v-for="(item,i) in empList" :value="item.Value" :key="i">{{item.Text}}</option>
					</select>
					<img src="../assets/img/819.png">
				</div>
			</div>
			<div>
				<div>垫圈确认者</div>
				<div class="rt">
					<select class="dqConfirmer">
						<!-- <option v-if="$route.query.handle == 'edit'" :value="shaDetails.CloutCheckerID">{{shaDetails.CloutCheckerName}}</option> -->
						<option v-for="(item,x) in empList" :value="item.Value" :key="x">{{item.Text}}</option>
					</select>
					<img src="../assets/img/819.png">
				</div>
			</div>
			<div style="border: none;">
				<div>边丝颜色</div>
				<div>
					<input type="text" placeholder="请输入" class="bsColor" v-model="shaDetails.EdgWireColor">
				</div>
			</div>
		</div>
		<div class="add-item pristin" v-for="(i , index)  in fuzeersLists">
			<p>责任人{{index+1}}</p>
			<div class="delateitem" @click="delateitem(index,'1')">删除</div>
			<div class="basic" id="addsDetail">
				<div>
					<div>责任人</div>
					<div class="rt">
						<select class="zeren">
							<!-- <option :value="i.EmpID">{{i.EmpName}}</option> -->
							<option v-for="(item,tag) in empList" :value="item.Value" :key="tag">{{item.Text}}</option>
						</select>
						<img src="../assets/img/819.png">
					</div>
				</div>
				<div>
					<div id="tongNum">筒子个数</div>
					<div class="rt">
						<input type="text" placeholder="请输入" class="tongzNum" v-model="i.DoNum" oninput="value=value.replace(/[^\d]/g,'')">
					</div>
				</div>
				<div class="block">
					<span class="demonstration">开始时间</span>
					<el-date-picker v-model="startRadios[index]" type="datetime" placeholder="选择日期" class="startTime" value-format="yyyy-MM-dd HH:mm" size="small" :editable="false"></el-date-picker>
				</div>
				<div class="block">
					<span class="demonstration">结束时间</span>
					<el-date-picker v-model="endRadios[index]" type="datetime" placeholder="选择日期" class="startTime" value-format="yyyy-MM-dd HH:mm" size="small" :editable="false"></el-date-picker>
				</div>
				<div style="border-bottom: none;">
					<div>班别</div>
					<div class="rt">
						<select class="classBan">
							<!-- <option :value="i.ClassBan">{{i.ClassBanName}}</option> -->
							<option v-for="(item,flag) in drpList" :value="item.Value" :key="flag">{{item.Text}}</option>
						</select>
						<img src="../assets/img/819.png">
					</div>
				</div>
			</div>
		</div>
		<div class="add-item" v-for="(i , index)  in num" :key="index">
			<p>责任人{{index+fuzeersLists.length+1}}</p>
			<div class="delateitem" @click="delateitem(index,'2')">删除</div>
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
						<input type="text" placeholder="请输入" class="tongzNum" oninput="value=value.replace(/[^\d]/g,'')">
					</div>
				</div>
				<div class="block">
					<span class="demonstration">开始时间</span>
					<el-date-picker v-model="startRadios[index+fuzeersLists.length]" type="datetime" placeholder="选择日期" class="startTime" value-format="yyyy-MM-dd HH:mm" size="small" :editable="false"></el-date-picker>
				</div>
				<div class="block">
					<span class="demonstration">结束时间</span>
					<el-date-picker v-model="endRadios[index+fuzeersLists.length]" type="datetime" placeholder="选择日期" class="startTime" value-format="yyyy-MM-dd HH:mm" size="small" :editable="false"></el-date-picker>
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
		components: {
			HeaderSame
		},
		name: "applydetail",
		data() {
			return {
				headerObj: {
					title: this.$route.query.handle == "add" ? "新增挂纱" : "挂纱-编辑",
					img: "",
					text: "addGuaSha"
				},
				shaDetails: [],
				fuzeersLists: [],
				num: this.$route.query.handle == "add" ? [1] : [],
				empList: [],
				drpList: [],
				startRadios: [],
				endRadios: [],
				empers:[],
				banbies:[]
			};
		},
		methods: {
			addNew: function() {
				var i = 1;
				this.num.push(i);
			},
			// 删除
			delateitem: function(index, tag) {
				console.log(this.startRadios);
				console.log(tag,index+this.fuzeersLists.length);
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
						if(tag == "1") {
							this.fuzeersLists.splice(index, 1);
							this.startRadios.splice(index, 1);
							this.endRadios.splice(index, 1);
						} else if(tag == "2") {
							this.startRadios[index+this.fuzeersLists.length] == "" ? "" : this.startRadios.splice(index+this.fuzeersLists.length, 1);
							this.endRadios[index+this.fuzeersLists.length] == "" ? "" : this.endRadios.splice(index+this.fuzeersLists.length, 1);
							this.num.splice(index, 1);
						}
						console.log($(".add-item").length);
						// if(this.$route.query.handle == "add"){
						//    this.startRadios[index] == ""? "": this.startRadios.splice(index, 1);
						//    this.endRadios[index] == "" ? "" : this.endRadios.splice(index, 1);
						// }else{
						//   this.startRadios.splice(index, 1);
						//   this.endRadios.splice(index, 1);
						// }

					})
					.catch(() => {
						this.$message({
							showClose: true,
							type: "info",
							message: "已取消删除"
						});
					});
			},

			confirms: function() {
				//先移除点击日期控件创建的干扰元素
      			$('.el-picker-panel').remove();
      			
				//上部分判断条件
				if($(".yuanlName").val() == "" || $(".yuanlCode").val() == "" || $(".tzConfirmer").val() == "" || $(".dqConfirmer").val() == "" || $(".bsColor").val() == ""){
					this.$message({
						showClose: true,
						message: "请完善信息",
						type: "error",
						center: true
					});
					
				}else{
					for(var i=0;i<$('.add-item').length;i++){
						if($('.zeren')[i].value == "" || $('.tongzNum')[i].value=="" || $("input.el-input__inner[readonly='readonly']")[2*i].value == "" || $("input.el-input__inner[readonly='readonly']")[2*i+1].value == ""|| $('.classBan')[i].value == ""){
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
					entity.MName = $(".yuanlName").val();
					entity.BatchNo = $(".yuanlCode").val();
					entity.CheeseNumChekerID = $(".tzConfirmer").val();
					entity.CheeseNumChekerName = $(".tzConfirmer option:selected").text();
					entity.CloutCheckerID = $(".dqConfirmer").val();
					entity.CloutCheckerName = $(".dqConfirmer option:selected").text();
					entity.EdgWireColor = $(".bsColor").val();
					entity.WarpOrderID = localStorage.getItem("zjID");
					entity.WarpOrderCode = localStorage.getItem("zjCODE");
					this.$route.query.handle == "edit" ? (entity.ID = this.$route.query.id) : "";

					let emplist = [];

					for(let i = 0; i < $(".add-item").length; i++) {
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
						emplisters.BeginTime = this.startRadios[i];
						emplisters.EndTime = this.endRadios[i];
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
							url: localStorage.getItem("IP")+"/WarpingOrder/SaveWarYarnHung",
							data: {
								entity: entity,
								empjson: emplist
							}
						})
						.then(res => {
							console.log(res);
							this.$message({
								showClose: true,
								message: this.$route.query.handle == "add" ? "新增成功" : "修改成功",
								type: "success",
								center: true
							});
							this.$router.push("guasha");
							console.log($(".add-item").length);
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
						url: localStorage.getItem("IP")+"/WarpingOrder/GetEmpDropDownList"
					}).then(res => {
						this.empList = res.data.data;
						console.log(this.empList);
					})
					.catch(error => {
						console.log(error);
					});
				//班别列表
				this.$axios({
						method: "post",
						url: localStorage.getItem("IP")+"/WarpingOrder/GetBShiftDrpDownList"
					}).then(res => {
						this.drpList = res.data.data;
					})
					.catch(error => {
						console.log(error);
					});
			}
		},
		created() {
			this.tzConfirmerList();
			if(this.$route.query.handle == "edit") {
				this.$axios({
						method: "post",
						url: localStorage.getItem("IP")+"/WarpingOrder/GetWarpYarnHungByID",
						data: {
							id: this.$route.query.id
						}
					}).then(res => {
						this.shaDetails = res.data.data.detailentity;
						//筒子确认者和垫圈确认者 下拉框分别赋值
						$('.tzConfirmer').val(res.data.data.detailentity.CheeseNumChekerID)
						$('.dqConfirmer').val(res.data.data.detailentity.CloutCheckerID)

						this.fuzeersLists = res.data.data.emps;
						console.log(this.fuzeersLists);
						$(".original .zeren option:selected").val(this.fuzeersLists[0].EmpID);
							$(".original1").val(this.fuzeersLists[1].EmpID);
						//循环输出时间，并赋值
						for(let i = 0; i < this.fuzeersLists.length; i++) {
							this.startRadios.push(this.fuzeersLists[i].BeginTime);
							this.endRadios.push(this.fuzeersLists[i].EndTime);
//							this.empers.push(this.fuzeersLists[i].EmpID)
//							this.banbies.push(this.fuzeersLists[i].ClassBan)
							$(".pristin .zeren").eq(i).val(this.fuzeersLists[i].EmpID);
							// $(".original1").val(this.fuzeersLists[1].EmpID);
							// console.log($('.zeren:eq('+i+')').value);
							console.log(this.fuzeersLists[i].EmpID);
							// $('.classBan')[i].val(this.fuzeersLists[i].ClassBan);
						}						
					})
					.catch(error => {
						console.log(error);
					});
			}
		},
		mounted() {
			$("#app").css("overflow-y", "auto");
		},
		updated() {
			if($(".add-item").length == 1) {
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
		padding-bottom: 1.3rem;
		min-height: 100%;
		.delateitem {
			position: relative;
			margin-top: -0.3rem;
			margin-left: 3rem;
			color: #666;
			font-size: 0.15rem;
			padding-bottom: 0.1rem;
		}
		.basic {
			background-color: white;
			line-height: 0.5rem;
			padding-left: 0.15rem;
			>div {
				height: 0.5rem;
				border-bottom: 1px solid #d5d5d5;
			}
			>div div {
				display: inline-block;
				color: #474747;
			}
			>div div:first-child {
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
				// text-indent: 0.02rem;
				background-color: transparent;
				font-size: 0.17rem;
				color: #999;
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
	
	.startTime {
		width: 2.2rem !important;
		margin-left: 0.16rem;
	}
</style>
<template>
	<div class="bg1">
		<div class="basic">
			<div class="nonesBorder">
				<div>上浆单</div>
				<div class="rt">
					<select style="width: 1.05rem;color: #007EFF;">
						<option>请选择上浆单</option>
						<option>请选择11</option>
						<option>请选择22</option>
					</select> <img src="../assets/img/824.png">
				</div>
			</div>
			<div class="nonesBorder" style="padding: .05rem 0 .05rem 0;">
				<div class="gongxu" style="width: 3.3rem;">
					<span>整经轴</span><span>整经轴</span><span>→</span><span>整经轴</span><span>整经轴</span>
				</div>
			</div>
			<div style="color: #333;">
				<div>整经轴</div><div class="jzCode"><input type="text" placeholder="请输入"><span>确定</span> </div><div><img src="../assets/img/3906.png" class="saoma"></div>
			</div>
			<div style="color: #333;">
				<div>上浆轴</div><div class="jzCode"><input type="text" placeholder="请输入"><span>确定</span> </div><div><img src="../assets/img/3906.png" class="saoma"></div>
			</div>
			<div>
				<div>索套个数</div><div class="rt" style="margin-right: .15rem;">请在责任人中输入</div>
			</div>
			<div id="remark">
				<div>备注</div><div><textarea></textarea></div>
			</div>
		</div>
		
		
		<div class="add-item" v-for="(i , index)  in num">
			<p>责任人{{index+1}}</p>
			<div class="basic" id="addsDetail">
				<div>
					<div>责任人</div>
					<div class="rt">
						<select>
							<option>请选择</option>
							<option>请选择11</option>
							<option>请选择22</option>
						</select> <img src="../assets/img/819.png">
					</div>
				</div>
				<div>
					<div id="tongNum">米数</div><div class="rt"><input type="text" placeholder="请输入"></div>
				</div>
				<div>
					<div id="tongNum">索套个数</div><div class="rt"><input type="text" placeholder="请输入"></div>
				</div>
				<div>
					<div>开始时间</div>
					<div class="rt">
						<select>
							<option>请选择</option>
							<option>请选择11</option>
							<option>请选择22</option>
						</select><img src="../assets/img/819.png">
					</div>
				</div>
				<div>
					<div>结束时间</div>
					<div class="rt">
						<select>
							<option>请选择</option>
							<option>请选择1122222</option>
							<option>请选择22</option>
						</select> <img src="../assets/img/819.png">
					</div>
				</div>
				<div style="border-bottom: none;">
					<div>班别</div>
					<div class="rt">
						<select>
							<option>请选择</option>
							<option>请选择1122222</option>
							<option>请选择22</option>
						</select> <img src="../assets/img/819.png">
					</div>
				</div>
			</div>
		</div>
		
		<div class="addNew" @click="aa">
			<img src="../assets/img/3893.png" />
		</div>
		<div class="posit">
			<p>确定</p>
		</div>
	</div>
</template>

<script>
		export default {
		name: 'applydetail',
		data() {
			return {
				num:1
			}
		},
		methods:{
			aa:function(){
				this.num++
			},
			zizhi:function(){
	      		this.$axios({
		      	    method: 'post',
		      	    url: 'api/WarpingOrder/GetWarpOrderListData'	
		      	  }).then((response)=> {
		      	    console.log(response);
		      	  }).catch((error)=> {
		      	    console.log(error);
		      	  });
			}
		},
		created() {
			this.zizhi();
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
				width: .75rem;
				color: #474747;
			}
			input{
				width: 2.45rem;
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
				height: .15rem;
			}
			textarea{
				width: 2.52rem;
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
		#tongNum{
			width: .9rem;
		}
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
		width: 2.1rem;
		display: inline-block;
		input{
			width: 1.45rem!important;
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
		margin-bottom: .03rem;
	}
	.gongxu{
		background-color: #007EFF;
		text-align: center;
		border-radius:5.2rem;
		span{
			color: white;
			display: inline-block;
			margin-right: .1rem;
		}
		span:nth-child(2) , :nth-child(5){
			font-weight: bold;
		}
		span:nth-child(3){
			vertical-align: bottom;
			margin:0 .25rem 0 .25rem;
		}
	}
	.nonesBorder{
		border: none!important;
	}
</style>
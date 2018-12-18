<template>
	<div class="bg1">
		<div class="basic">
			<div>
				<div>经轴编号</div><div><input type="text" placeholder="请输入"></div>
			</div>
			<div>
				<div>断纱</div><div><input type="text" placeholder="请输入"></div>
			</div>
			<div>
				<div>毛羽数</div><div><input type="text" placeholder="请输入"></div>
			</div>
			<div>
				<div>对头次数</div><div>请在责任人中输入</div>
			</div>
			<div id="remark">
				<div>对头次数</div><div><textarea></textarea></div>
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
					<div id="tongNum">对头次数</div><div class="rt"><input type="text" placeholder="请输入"></div>
				</div>
				<div>
					<div>班别</div>
					<div class="rt">
						<select>
							<option>请选择</option>
							<option>请选择1122222</option>
							<option>请选择22</option>
						</select> <img src="../assets/img/819.png">
					</div>
				</div>
				<div>
					<div>开始时间</div>
					<div class="rt">
						<select>
							<option>请选择</option>
							<option>请选择11</option>
							<option>请选择22</option>
						</select> <img src="../assets/img/819.png">
					</div>
				</div>
				<div style="border-bottom: none;">
					<div>结束时间</div>
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
			}
		},
		created() {
			
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
				width: 1rem;
				color: #474747;
			}
			input{
				width: 2.25rem;
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
				width: 2.25rem;
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
</style>
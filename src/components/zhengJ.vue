<template>
	<div class="bg1">
		
		<div class="bodys">
			<div class="body-item" v-for="item in lists">
				<!--上方具体数据部分-->
				<div class="top-item">
					<div class="left-item">
						<span>{{item.BeamCode}}</span>
						<span>经轴编号</span>
					</div>
					<div class="right-item">
						<div style="margin-top: .08rem;">
							<div>毛羽数</div>
							<div>{{item.BeamHairinessNum}}</div>
						</div>
						<div>
							<div>断纱</div>
							<div>{{item.YarnBroken}}</div>
						</div>
						<div>
							<div>米数</div>
							<div>{{item.Length}}</div>
						</div>
						<div>
							<div>时间</div>
							<div>{{item.OprationDate}}</div>
						</div>
					</div>
				</div>
				<!--下方操作按钮部分-->
				<div class="watch-item">
					<span>查看</span><span>编辑</span>
				</div>
				
			</div>
		</div>
		
		
		 <div class="posit">
		 	<span>返回工单</span><span>新增轴</span>
		 </div>
	</div>
</template>

<script>
	export default {
		name: 'applydetail',
		data() {
			return {
				lists:[]
			}
		},
		methods:{
			dataList:function(){
				this.$axios({
					method: 'post',
					url: 'api/WarpingOrder/GetWarpingDetailListData',
					data:{
						orderid:"d3075b52-a342-48bc-9cc2-dda37b4a3b29",
						pageindex:"0",
						pagesize:"20"
					}
				}).then((res) => {
					console.log(res);
					this.lists = res.data.data;
				}).catch((error) => {
					console.log(error);
				});
			}
		},
		created() {
			this.dataList();
		}
	}
</script>

<style lang="less" scoped>
	.bg1{
		position: relative;
		font-size: .17rem;
		padding-top: .1rem;
		padding-bottom: 1.1rem;
		.body-item{
			width: 3.4rem;
			height: 1.65rem;
			background-color: white;
			margin: 0 auto;
			.top-item{
				>div{
					display: inline-block;
					vertical-align: top;
				}
				.left-item{
					span{
						display: block;
					}
					span:first-child{
						font-size: .25rem;	/*************正确字号为55*************/
						color: #FFA237;
						font-weight: bold;
						font-family:'dig';	/*---------------字体要改-------------------*/
						padding: .15rem 0 0 .45rem;
					}
					span:last-child{
						margin-left: .52rem;
						font-size: .13rem;
						color: #333;
					}
				}
				.right-item{
					>div{
						margin-left: .4rem;
						margin-top: .04rem;
						div:first-child{
							color: #999;
							width: .65rem;
						}
						div:last-child{
							color: #333;
						}
					}
					>div div{
						display: inline-block;
						
					}
				}
				
			}
			.watch-item{
				margin-top: .08rem;
				span{
					text-align: center;
					width: 1.5rem;
					height: .37rem;
					line-height: .37rem;
					color: white;
					display: inline-block;
					background-color: #4CBEC0;
					border-radius:.02rem ;
				}
				span:first-child{
					margin-left: .15rem;
				}
				span:last-child{
					margin-left: .1rem;
				}
			}
		}
		.posit{
			position: fixed;
			bottom: 0;
			span{
				display: inline-block;
				width: 1.8rem;
				height: .5rem;
				line-height: .5rem;
				color: white;
				text-align: center;
				border: 0;
				cursor: pointer;
			}
			span:first-child{
				background-color: #FFAD20;
			}
			span:last-child{
				background-color: #007EFF;
			}
		}
		.bodys{
			margin-top: .1rem;
		}
		.bodys:first-child{
			margin-top: 0;
		}
	}
</style>
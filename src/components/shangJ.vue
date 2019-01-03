<template>
	<div class="bg1">
		
		<div class="item-detail" v-for="item in shaLists">
			<div class="item-title">
				<span>上浆单</span><span>{{item.WarpSizingCode}}</span>
			</div>
			<div class="details">
				<div class="tails">
					<div>
						<span class="top-one">整经轴号</span>
						<span class="top-two">{{item.FromBeamCode}}</span>
						<span><img src="../assets/img/821.png"></span>
						<span class="top-one">上浆轴号</span>
						<span class="top-two">{{item.ToBeamCode}}</span>
					</div>
					<div>
						<span>米数</span>
						<span>{{item.Length}}</span>
					</div>
					<div>
						<span>时间</span>
						<span>{{item.WarpDate}}</span>
					</div>
				</div>
				<div class="edit rt">
					<span>编<br />辑</span>
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
				shaLists:[]
			}
		},
		methods:{
			lists:function(){
				this.$axios({
					method: 'post',
					url: 'api/WarpingOrder/GetWarpsizingList',
					data:{
						orderid:"d3075b52-a342-48bc-9cc2-dda37b4a3b24",
						pageindex:"0",
						pagesize:"20"
					}
				}).then((res) => {
					console.log(res);
					this.shaLists = res.data.data;
				}).catch((error) => {
					console.log(error);
				});
			}
		},
		created() {
			this.lists();
		}
	}
</script>

<style scoped lang="less">
.bg1{
	font-family: 'Microsoft YaHei UI';
	font-size: .17rem;
	height:auto;
	padding-bottom: .7rem;
	min-height: 6.7rem;
	.item-detail{
		.item-title{
			padding: .12rem 0 0 .1rem;
			span:first-child{
				color: #999;
			}
			span:last-child{
				color: #333;
				margin-left: .1rem;
				font-weight: bold;
			}
		}
		.details{
			background-color: white;
			width:3.4rem;
			height:1.03rem;
			margin:0 auto;
			margin-top: .1rem;
			>div{
				display: inline-block;
			}
			.tails{
				font-size: .16rem;
				div{
					margin-top: .08rem;
					margin-left: .15rem;
					.top-one{
						width: .75rem;
						display: inline-block;
						color: #999;
					}
					.top-two{
						color: #333;
						font-weight: bold;
					}
					img{
						width: .16rem;
						vertical-align: middle;
						margin: 0 .1rem 0 .1rem;
					}
				}
				div:first-child{
					margin-top: .12rem;
				}
			}
			.edit{
				background-color: #4CBEC0;
				width: .45rem;
				height:0.73rem;
				text-align: center;
				color: white;
				padding-top: .3rem;
			}
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
</style>
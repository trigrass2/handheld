<template>
	<div class="bg1">
		
		<div class="body-item">
			<div class="item-title">
				<span class="lf">整经编号: 18882</span>
				<span class="rt">查看123</span>
			</div>
			<div class="item-body">
				<div class="productName">
					<div>品<span class="spaces"></span>名</div>
					<div>NH005</div>
				</div>
				<div class="useVarieties">
					<div>使用原丝</div>
					<div>300/36f</div>
				</div>
				<div class="productNum">
					<div>批<span class="spaces"></span>号</div>
					<div>S13101AS</div>
				</div>
			</div>
		</div>
		
		<div class="body-item">
			<div class="item-title">
				<span class="lf">整经编号: 18882</span>
				<span class="rt">查看</span>
			</div>
			<div class="item-body">
				<div class="productName">
					<div>品<span class="spaces"></span>名</div>
					<div>NH005</div>
				</div>
				<div class="useVarieties">
					<div>使用原丝</div>
					<div>300/36f</div>
				</div>
				<div class="productNum">
					<div>批<span class="spaces"></span>号</div>
					<div>S13101AS</div>
				</div>
			</div>
		</div>


	</div>
</template>

<script>
	export default {
		name: 'applydetail',
		data() {
			return {
				
			}
		},
		methods:{
			
		},
		created() {
			
		}
	}	
</script>

<style lang="less" scoped>
	.bg1{
		padding-top: .12rem;
		padding-bottom: .2rem;
		font-size: .17rem;
		.body-item{
			width: 3.4rem;
			height: 1.54rem;
			background-color: white;
			margin: 0 auto;
			margin-top: .12rem;
			.item-title{
				border-bottom: 1px solid #D5D5D5;
				height: .45rem;
				.lf{
					margin-left: .15rem;
					margin-top: .12rem;
					color: #474747;
					font-weight: bold;
				}
				.rt{
					margin-right: .15rem;
					margin-top: .12rem;
					color: #007EFF;
				}
			}
			.item-body>div div{
				display: inline-block;
			}
			.item-body{
				.productName>div:first-child{
					margin: .15rem .2rem .08rem .15rem;
				}
				.useVarieties>div:first-child{
					margin: 0 .2rem .08rem .15rem;
				}
				.productNum>div:first-child{
					margin: 0 .2rem .08rem .15rem;
				}
			}
		}
		.first-body{
			margin-top: 0;
		}
	}
	.body-item:first-child{
		margin-top: 0;
	}
	.item-body>div div:first-child{
		color: #999;
	}
	.item-body>div div:last-child{
		color: #474747;
	}
</style>
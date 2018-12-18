<template>
	<div class="bg1">
		
		<div class="body-item">
			<div class="item-body">
				<div class="productCode">
					<div>整经编号</div>
					<div>NH005</div>
				</div>
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
			
			<div class="watchAll">
				<a href="">查看全部参数></a>
			</div>
		</div>
		
		<div class="operations">
			<div class="operations-list">
				<div>挂纱<span> 1</span></div>
				<div class="rt">挂纱</div>
			</div>
		</div>
		
		<div class="operations">
			<div class="operations-list">
				<div>整经<span> 15</span></div>
				<div class="rt">整经</div>
			</div>
		</div>
		
		<div class="operations">
			<div class="operations-list">
				<div>上将<span> 6</span></div>
				<div class="rt">上将</div>
			</div>
		</div>
		
		
		<div class="operations">
			<div class="operations-list">
				<div>并州<span> 9</span></div>
				<div class="rt">并州</div>
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
		font-size: .17rem;
		.body-item{
			background-color:white;
			.productCode{
				padding-top: .15rem;
				margin-left: .15rem;
				color: #474747;
				font-weight: bold;
			}
			.productCode div:first-child{
				margin-right:.2rem;
			}
			.productName div:first-child{
				margin: .15rem .2rem .08rem .15rem;
			}
			.useVarieties div:first-child{
				margin: 0 .2rem .08rem .15rem;
			}
			.productNum div:first-child{
				margin: 0 .2rem .15rem .15rem;
			}
			.watchAll{
				height: .5rem;
				line-height: .5rem;
				text-align: center;
				a{
					color: #007EFF;
				}
			}
		}
		.operations{
			width: 3.4rem;
			height: .65rem;
			line-height: .65rem;
			background-color:white;
			margin: 0 auto;
			margin-top: .15rem;
			border: none;
			.operations-list div:first-child{
				margin-left: .15rem;
				font-size: .18rem;
			}
			.rt{
				width: 1.5rem;
				height: .65rem;
				line-height: .65rem;
				text-align: center;
				background-color: #007EFF;
				border-radius:.02rem;
				color: white;
			}
			.operations-list div{
				display: inline-block;
				span{
					font-weight: bold;
				}
			}
			
		}
		
	}
	.item-body{
		border-bottom: 1px solid #ccc;
		border-top: 1px solid #ccc;
	}
	.item-body>div div:first-child{
		color: #999;
	}
	.item-body>div div:last-child{
		color: #474747;
	}
	.item-body>div div{
		display: inline-block;
	}
</style>
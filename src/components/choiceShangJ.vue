<template>
	<div class="bg1">
		<div class="body-item" v-for="item in zjList">
			<span class="lf">上浆单：{{item.Code}}</span>
			<span class="rt">选择</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'applydetail',
		data() {
			return {
				zjList:[]
			}
		},
		methods:{
			lists:function(){
				this.$axios({
		      	    method: 'post',
		      	    url: 'api/WarpingOrder/GetWarpSizingConditionByOrderid ',
		      	    data:{
		      	    	orderid:"d3075b52-a342-48bc-9cc2-dda37b4a3b29",
						type:"1"
		      	    }
		      	}).then((res)=> {
		      		if(res.data.code == "0"){
		      			console.log(res.data.data.WarpOrder);
		      			this.zjList = res.data.data;
		      		}
		      	}).catch((error)=> {
		      	    console.log(error);
		      	})
			}
		},
		created() {
			this.lists();
		}
	}
</script>

<style scoped lang="less">
	.bg1{
		padding-top: .12rem;
		font-size: .17rem;
		min-height: 100%;
		height: auto;
		padding-bottom: .2rem;
		.body-item{
			width: 3.4rem;
			height: .61rem;
			line-height: .61rem;
			background-color: white;
			margin: 0 auto;
			margin-top: .12rem;
			span:first-child{
				margin-left: .15rem;
				color: #474747;
				font-weight: bold;
			}
			span:last-child{
				width: .84rem;
				background-color: #007EFF;
				text-align: center;
				color: white;
			}
		}
		.body-item:first-child{
			margin-top: 0;
		}
	}
</style>
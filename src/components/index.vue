<template>
	<div>
		<div class="tabItem">
            <slot></slot>
        </div>
		<v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite" :dataList="scrollData" class="bg1">
			<div class="body-item" v-for="item in listdata">
				<div class="item-title">
					<span class="lf">整经编号: {{item.Code}}</span>
					<span class="rt">查看</span>
				</div>
				<div class="item-body">
					<div class="productName">
						<div>品<span class="spaces"></span>番</div>
						<div>{{item.PNO}}</div>
					</div>
					<div class="useVarieties">
						<div>筒子个数</div>
						<div>{{item.CheeseNum}}</div>
					</div>
					<div class="productNum">
						<div>经轴个数</div>
						<div>{{item.SpoolNum}}</div>
					</div>
				</div>
			</div>
			
		</v-scroll>
	</div>
</template>

<script>
	import Scroll from './pullRefresh';

	export default {
		data() {
			return {
				counter: 1, //默认已经显示出15条数据 count等于一是让从16条开始加载
				num: "5", // 一次显示多少条
				pageStart: 0, // 开始页数
				pageEnd: 0, // 结束页数
				listdata: [], // 下拉更新数据存放数组
				scrollData: {
                    noFlag: false //暂无更多数据显示
                }
			}
		},
		mounted: function() {
			this.getList();
		},
		components: {
			'v-scroll': Scroll
		},
		methods: {
			getList() {
				let vm = this;
				this.$axios({
		      	    method: 'post',
		      	    url: 'api/WarpingOrder/GetWarpOrderListData',
		      	    data:{
		      	    	pageindex:"0",
		      	    	pagesize:this.num
		      	    }
		      	}).then((response)=> {
		      	    console.log(response);
		      	    vm.listdata = response.data.data;
		      	}).catch((error)=> {
		      	    console.log(error);
		      	});
				
			},
			//下拉刷新
			onRefresh(done) {
				this.getList();
				done();
			},
			//上拉加载更多
			 onInfinite(done) {
                let end = this.pageEnd = this.num * this.counter;
                let i = this.pageStart = this.pageEnd - this.num;
                console.log(this.pageEnd)
                console.log(this.pageStart)
				let counters = String(this.counter++);
				
                let more = this.$el.querySelector('.load-more')
                    if(i >= 10) {
                        more.style.display = 'none'; //隐藏加载条
                        //走完数据调用方法
                        this.scrollData.noFlag = true;
                    } else {
                    	this.$axios({
				      	    method: 'post',
				      	    url: 'api/WarpingOrder/GetWarpOrderListData',
				      	    data:{
				      	    	pageindex:counters,
				      	    	pagesize:this.num
				      	    }
				      	}).then((res)=> {
				      		console.log(res.data.data)
				      		for(var i=0;i<res.data.data.length;i++){
				      			this.listdata.push(res.data.data[i])
				      		}
				      		console.log(this.listdata)
				      	}).catch((error)=> {
				      	    console.log(error);
				      	});
                       
                        more.style.display = 'none'; //隐藏加载条
                    }
                    done();
                
            }
			
			
			
			
			
			
		}
	}
</script>
<style lang="less" scoped>
	.bg1 {
		padding-top: .12rem;
		padding-bottom: .2rem;
		font-size: .17rem;
		min-height: 6.7rem;
		height: auto;
		.body-item {
			width: 3.4rem;
			height: 1.54rem;
			background-color: white;
			margin: 0 auto;
			margin-top: .12rem;
			.item-title {
				border-bottom: 1px solid #D5D5D5;
				height: .45rem;
				.lf {
					margin-left: .15rem;
					margin-top: .12rem;
					color: #474747;
					font-weight: bold;
				}
				.rt {
					margin-right: .15rem;
					margin-top: .12rem;
					color: #007EFF;
				}
			}
			.item-body>div div {
				display: inline-block;
			}
			.item-body {
				.productName>div:first-child {
					margin: .15rem .2rem .08rem .15rem;
				}
				.useVarieties>div:first-child {
					margin: 0 .2rem .08rem .15rem;
				}
				.productNum>div:first-child {
					margin: 0 .2rem .08rem .15rem;
				}
			}
		}
		.first-body {
			margin-top: 0;
		}
	}
	
	.body-item:first-child {
		margin-top: 0;
	}
	
	.item-body>div div:first-child {
		color: #999;
	}
	
	.item-body>div div:last-child {
		color: #474747;
	}
	
</style>
<template>
	<div class="content">
		<HeaderSame :headerObj="headerObj"></HeaderSame>
        <div>
	    	<div class="zhengjing">
	    		<p>上浆条件</p>
	    	</div>
	        <div class="list-detail">
	        	<div>
	        		<span>条件设定者</span>
	        		<span class="rt">XXXXX</span>
	        	</div>
	        	<div>
	        		<span>条件确认者</span>
	        		<span class="rt">XXXXX</span>
	        	</div>
	        	<div class="halfs">
	        		<div>
	        			<span>卷取速度</span>
	        			<span class="rt">m/min</span>
	        		</div>
	        		<div style="border-right: none;">
	        			<span style="margin-left: .15rem;">第一锡林</span>
	        			<span class="rt"></span>
	        		</div>
	        	</div>
	        	<div class="halfs">
	        		<div>
	        			<span>第一烘箱</span>
	        			<span class="rt">℃</span>
	        		</div>
	        		<div style="border-right: none;">
	        			<span style="margin-left: .15rem;">第二锡林</span>
	        			<span class="rt">℃</span>
	        		</div>
	        	</div>
	        	<div class="halfs">
	        		<div>
	        			<span>第二烘箱</span>
	        			<span class="rt">℃</span>
	        		</div>
	        		<div style="border-right: none;">
	        			<span style="margin-left: .15rem;">第三锡林</span>
	        			<span class="rt">℃</span>
	        		</div>
	        	</div>
	        	<div class="halfs">
	        		<div>
	        			<span>浆料温度</span>
	        			<span class="rt">℃</span>
	        		</div>
	        		<div style="border-right: none;">
	        			<span style="margin-left: .15rem;">第四锡林</span>
	        			<span class="rt">℃</span>
	        		</div>
	        	</div>
	        	<div class="halfs last-halfs">
	        		<div>
	        			<span>温水温度</span>
	        			<span class="rt">℃</span>
	        		</div>
	        		<div style="border-right: none;">
	        			<span style="margin-left: .15rem;">第五锡林</span>
	        			<span class="rt">℃</span>
	        		</div>
	        	</div>
	        </div>
	        <div class="zhengjing">
	    		<p>后上油</p>
	    	</div>
	        <div class="list-detail">
	        	<div>
	        		<span>使用油剂</span>
	        		<span class="rt"></span>
	        	</div>
	        	<div>
	        		<span>油温</span>
	        		<span class="rt"></span>
	        	</div>
	        	<div style="border-bottom: 0;">
	        		<span>后上油蜡辊转速</span>
	        		<span class="rt">rpm</span>
	        	</div>
	        </div>
	        <div class="zhengjing">
	    		<p>后上蜡</p>
	    	</div>
	        <div class="list-detail">
	        	<div>
	        		<span>使用蜡名</span>
	        		<span class="rt"></span>
	        	</div>
	        	<div>
	        		<span>蜡温</span>
	        		<span class="rt"></span>
	        	</div>
	        	<div>
	        		<span>压浆辊压力</span>
	        		<span class="rt">kg</span>
	        	</div>
	        	<div>
	        		<span>SD部分压力</span>
	        		<span class="rt">kg</span>
	        	</div>
	        	<div>
	        		<span>浸没辊压力</span>
	        		<span class="rt">kg</span>
	        	</div>
	        	<div>
	        		<span>卷取张力</span>
	        		<span class="rt">kg</span>
	        	</div>
	        	<div>
	        		<span>上浆部分拉伸</span>
	        		<span class="rt"></span>
	        	</div>
	        	<div>
	        		<span>经轴最后卷径</span>
	        		<span class="rt">cm</span>
	        	</div>
	        	<div>
	        		<span>烘箱部分拉升</span>
	        		<span class="rt"></span>
	        	</div>
	        	<div>
	        		<span>梳子上浆料附着</span>
	        		<span class="rt">是/否</span>
	        	</div>
	        	<div>
	        		<span>上浆率</span>
	        		<span class="rt">80%</span>
	        	</div>
	        	<div>
	        		<span>烘箱部分拉升</span>
	        		<span class="rt">左:XXX 中:XXX 右:XXX</span>
	        	</div>
	        	<div style="border-bottom: 0;">
	        		<span>浆料配方</span>
	        		<span class="rt"></span>
	        	</div>
	        </div>
	        
	        <div class="zhengjing">
	    		<p>并轴条件</p>
	    	</div>
	        <div class="list-detail">
	        	<div>
	        		<span>条件设定者</span>
	        		<span class="rt">XXXXX</span>
	        	</div>
	        	<div>
	        		<span>条件确认者</span>
	        		<span class="rt">XXXXX</span>
	        	</div>
	        	<div>
	        		<span>卷取速度</span>
	        		<span class="rt">XXXXX</span>
	        	</div>
	        	<div>
	        		<span>经轴幅宽</span>
	        		<span class="rt">XXXXX</span>
	        	</div>
	        	<div>
	        		<span>匹长</span>
	        		<span class="rt">XXXXX</span>
	        	</div>
	        </div>
	        <div class="zhengjing">
	    		<p>并轴经轴架</p>
	    	</div>
	        <div class="list-detail">
	        	<div>
	        		<span>经轴个数</span>
	        		<span class="rt">XXXXX</span>
	        	</div>
	        	<div>
	        		<span>经轴最初卷经</span>
	        		<span class="rt">XXXXX</span>
	        	</div>
	        	<div>
	        		<span>维度(电器粗刻度)</span>
	        		<span class="rt">XXXXX</span>
	        	</div>
	        </div>
	        <div class="zhengjing">
	    		<p>卷曲部分</p>
	    	</div>
	        <div class="list-detail">
	        	<div>
	        		<span>卷取张力</span>
	        		<span class="rt">XXXXX</span>
	        	</div>
	        	<div>
	        		<span>单个经轴张力</span>
	        		<span class="rt">XXXXX</span>
	        	</div>
	        	<div>
	        		<span>经轴单纱张力</span>
	        		<span class="rt">XXXXX</span>
	        	</div>
	        	<div>
	        		<span>其他备注</span>
	        		<span class="rt">XXXXX</span>
	        	</div>
	        </div>
	        
        </div>
        
	</div>
</template>

<script>
import HeaderSame from "./common/sameHeader.vue";
export default {
  components: { HeaderSame },
  name: "applydetail",
  data() {
    return {
      headerObj: {
        title: "预览上浆条件",
        img: "",
        text: ""
      },};
  },
  methods: {},
  created() {}
};
</script>

<style scoped="scoped" lang="less">
.content{
	font-size: .17rem;
	margin-top: 0.5rem;
	.zhengjing{
		height: .35rem;
		line-height: .35rem;
		background-color: #F3F3F3;
		p{
			margin-left:.17rem;
			color: #999999;
			font-size: 0.15rem;
		}
	}
	.list-detail{
		background-color: white;
		padding-left: .17rem;
		>div{
			height: .5rem;
			line-height: .5rem;	
			border-bottom: 1px solid #D5D5D5;
			span:first-child{
				color: #999999;
			}
			span:last-child{
				color: #333;
			}
			.rt{
				margin-right: .17rem;
			}
		}
	}
}
.conditions-list{
	height: 1.03rem!important;
	font-size: 0.15rem;
	border-bottom:1px solid #D5D5D5 ;
	div{
		margin-top: .17rem;
		width: 1.04rem;
		height: .29rem;
		line-height: .29rem;
		background-color: #007EFF;
		border-radius:1.36rem;
		text-align: center;
		color: white;
		display: inline-block;
		margin-right: .09rem;
	}
}
.halfs{
	display: flex;
	div{
		display: inline-block;
		flex: 1;
		/*background-color: red;*/
		border-right: 1px solid #D5D5D5;
		span:first-child{
			color: #999;
		}
		span:last-child{
			color: #333;
		}
	}
}
.last-halfs{
	border-bottom:0!important;
}
</style>
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
	        		<span class="rt">{{Sizingcondition.SettingUserName}}</span>
	        	</div>
	        	<div>
	        		<span>条件确认者</span>
	        		<span class="rt">{{Sizingcondition.CheckUserName}}</span>
	        	</div>
	        	<div class="halfs">
	        		<div>
	        			<span>卷取速度</span>
	        			<span class="rt">{{Sizingcondition.RollSpeed}}</span>
	        		</div>
	        		<div style="border-right: none;">
	        			<span style="margin-left: .15rem;">第一锡林</span>
	        			<span class="rt">{{Sizingcondition.FirstCylinder}} ℃</span>
	        		</div>
	        	</div>
	        	<div class="halfs">
	        		<div>
	        			<span>第一烘箱</span>
	        			<span class="rt">{{Sizingcondition.Firstoven}} ℃</span>
	        		</div>
	        		<div style="border-right: none;">
	        			<span style="margin-left: .15rem;">第二锡林</span>
	        			<span class="rt">{{Sizingcondition.SecondCylinder}} ℃</span>
	        		</div>
	        	</div>
	        	<div class="halfs">
	        		<div>
	        			<span>第二烘箱</span>
	        			<span class="rt">{{Sizingcondition.Secondoven}} ℃</span>
	        		</div>
	        		<div style="border-right: none;">
	        			<span style="margin-left: .15rem;">第三锡林</span>
	        			<span class="rt">{{Sizingcondition.ThirdCylinder}} ℃</span>
	        		</div>
	        	</div>
	        	<div class="halfs">
	        		<div>
	        			<span>浆料温度</span>
	        			<span class="rt">{{Sizingcondition.Slurrytemper}} ℃</span>
	        		</div>
	        		<div style="border-right: none;">
	        			<span style="margin-left: .15rem;">第四锡林</span>
	        			<span class="rt">{{Sizingcondition.ForthCylinder}} ℃</span>
	        		</div>
	        	</div>
	        	<div class="halfs last-halfs">
	        		<div>
	        			<span>温水温度</span>
	        			<span class="rt">{{Sizingcondition.Watertemper}} ℃</span>
	        		</div>
	        		<div style="border-right: none;">
	        			<span style="margin-left: .15rem;">第五锡林</span>
	        			<span class="rt">{{Sizingcondition.FifthCylinder}} ℃</span>
	        		</div>
	        	</div>
	        </div>
	        <div class="zhengjing">
	    		<p>后上油</p>
	    	</div>
	        <div class="list-detail">
	        	<div>
	        		<span>使用油剂</span>
	        		<span class="rt">{{Sizingcondition.OilType}}</span>
	        	</div>
	        	<div>
	        		<span>油温</span>
	        		<span class="rt">{{Sizingcondition.Oiltemper}}</span>
	        	</div>
	        	<div style="border-bottom: 0;">
	        		<span>后上油蜡辊转速</span>
	        		<span class="rt">{{Sizingcondition.Rollerspeed}} 转</span>
	        	</div>
	        </div>
	        <div class="zhengjing">
	    		<p>后上蜡</p>
	    	</div>
	        <div class="list-detail">
	        	<div>
	        		<span>使用蜡名</span>
	        		<span class="rt">{{Sizingcondition.WaxType}}</span>
	        	</div>
	        	<div>
	        		<span>蜡温</span>
	        		<span class="rt">{{Sizingcondition.Waxtemper}}</span>
	        	</div>
	        	<div>
	        		<span>压浆辊压力</span>
	        		<span class="rt">{{Sizingcondition.PRollerpress}} 公斤</span>
	        	</div>
	        	<div>
	        		<span>SD部分压力</span>
	        		<span class="rt">{{Sizingcondition.SDPartTension}} 公斤</span>
	        	</div>
	        	<div>
	        		<span>浸没辊压力</span>
	        		<span class="rt">{{Sizingcondition.IRollerpress}} 公斤</span>
	        	</div>
	        	<div>
	        		<span>卷取张力</span>
	        		<span class="rt">{{Sizingcondition.RollingTension}} 公斤</span>
	        	</div>
	        	<div>
	        		<span>上浆部分拉伸</span>
	        		<span class="rt">{{Sizingcondition.SizingLift}}</span>
	        	</div>
	        	<div>
	        		<span>经轴最后卷径</span>
	        		<span class="rt">{{Sizingcondition.WarpLastRadius}} 厘米</span>
	        	</div>
	        	<div>
	        		<span>烘箱部分拉升</span>
	        		<span class="rt">{{Sizingcondition.OvenLift}}</span>
	        	</div>
	        	<div>
	        		<span>梳子上浆料附着</span>
	        		<span class="rt" v-if="Sizingcondition.IsSizeAdhere == 0">是</span>
	        		<span class="rt" v-else>否</span>
	        	</div>
	        	<div>
	        		<span>上浆率</span>
	        		<span class="rt">{{Sizingcondition.SizingRate}} %</span>
	        	</div>
	        	<div>
	        		<span>烘箱出口经纱张力</span>
	        		<span class="rt">
	        			<span><span id="reds">左:</span> {{Sizingcondition.OYTL}}</span>&nbsp;
	        			<span><span id="reds">中:</span> {{Sizingcondition.OYTC}}</span>&nbsp;
	        			<span><span id="reds">右:</span> {{Sizingcondition.OYTR}}</span>
	        		</span>
	        	</div>
	        	<div style="border-bottom: 0;">
	        		<span>浆料配方</span>
	        		<span class="rt">{{Sizingcondition.Sizinginstruction}}</span>
	        	</div>
	        </div>
	        
	        <div class="zhengjing">
	    		<p>并轴条件</p>
	    	</div>
	        <div class="list-detail">
	        	<div>
	        		<span>条件设定者</span>
	        		<span class="rt">{{Sizingcondition.ConSetUserName}}</span>
	        	</div>
	        	<div>
	        		<span>条件确认者</span>
	        		<span class="rt">{{Sizingcondition.ConCheckUserName}}</span>
	        	</div>
	        	<div>
	        		<span>卷取速度</span>
	        		<span class="rt">{{Sizingcondition.RollSpeed}} 米/分钟</span>
	        	</div>
	        	<div>
	        		<span>经轴幅宽</span>
	        		<span class="rt">{{Sizingcondition.BeamWidth}}</span>
	        	</div>
	        	<div>
	        		<span>匹长</span>
	        		<span class="rt">{{Sizingcondition.Length}} 米</span>
	        	</div>
	        </div>
	        <div class="zhengjing">
	    		<p>并轴经轴架</p>
	    	</div>
	        <div class="list-detail">
	        	<div>
	        		<span>经轴个数</span>
	        		<span class="rt">{{Sizingcondition.BeamNum}} 个</span>
	        	</div>
	        	<div>
	        		<span>经轴最初卷径</span>
	        		<span class="rt">{{Sizingcondition.BeamBRadius}} 厘米</span>
	        	</div>
	        	<div>
	        		<span>维度(电器粗刻度)</span>
	        		<span class="rt">{{Sizingcondition.Dimension}}</span>
	        	</div>
	        </div>
	        <div class="zhengjing">
	    		<p>卷曲部分</p>
	    	</div>
	        <div class="list-detail">
	        	<div>
	        		<span>卷取张力</span>
	        		<span class="rt">{{Sizingcondition.RollingTension}} 公斤</span>
	        	</div>
	        	<div>
	        		<span>单个经轴张力</span>
	        		<span class="rt">{{Sizingcondition.BeamTension}} 公斤</span>
	        	</div>
	        	<div>
	        		<span>经轴单纱张力</span>
	        		<span class="rt">{{Sizingcondition.YarnTension}} G</span>
	        	</div>
	        	<div>
	        		<span>其他备注</span>
	        		<span class="rt">{{Sizingcondition.Remark}}</span>
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
      },
    	Sizingcondition:{}
    };
  },
  methods: {
  	details:function(){
  		this.$axios({
      	    method: 'post',
      	    url: localStorage.getItem("IP")+'/WarpingOrder/GetWarpSizingConditionByID',
      	    data:{
      	    	id:this.$route.query.id,
      	    }
      	}).then((res)=> {
      		if(res.data.code == "0"){
      			console.log(res.data.data);
      			this.Sizingcondition = res.data.data
      		}
      	}).catch((error)=> {
      	    console.log(error);
      	});
  	}
  },
  created() {
  	this.details()
  }
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
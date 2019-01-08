<template>
	<div class="conntent">
		<HeaderSame :headerObj="headerObj"></HeaderSame>
		<div>
			<div class="toptitle">轴信息</div>
			<div class="detailinfo">
				<div>
					<div>上浆单</div>
					<span>{{detail.WarpSizingCode}}</span>
				</div>
				<div>
					<div>整经轴号</div>
					<span>{{detail.FromBeamCode}}</span>
				</div>
				<div>
					<div>上浆轴号</div>
					<span>{{detail.ToBeamCode}}</span>
				</div>
				<div>
					<div>套扣次数</div>
					<span>{{detail.TKCount}}</span>
				</div>
				<div>
					<div>备注</div>
					<span>{{detail.Remark}}</span>
				</div>
			</div>
		</div>
		<div v-for="(item , index) in lists">
			<div class="toptitle">责任人{{index+1}}</div>
			<div class="detailinfo">
				<div>
					<div>责任人</div>
					<span>{{item.EmpName}}</span>
				</div>
				<div>
					<div>开始时间</div>
					<span>{{item.BeginTime}}</span>
				</div>
				<div>
					<div>结束时间</div>
					<span>{{item.EndTime}}</span>
				</div>
				<div>
					<div>米数</div>
					<span>{{item.Lenght}}</span>
				</div>
				<div>
					<div>套扣次数</div>
					<span>{{item.DoNum}}</span>
				</div>
				<div>
					<div>班别</div>
					<span>{{item.ClassBanName}}</span>
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
        title: "上浆工单详情",
        img: "",
        text: ""
      },
				detail: {},
				lists:[]
			};
		},
		methods: {
			details: function() {
				this.$axios({
					method: 'post',
					url: 'api/WarpingOrder/GetWarpsizingDataByID',
					data: {
						id: this.$route.query.id,
					}
				}).then((res) => {
					console.log(res);
					this.detail = res.data.data.entity;
					this.lists = res.data.data.emps;
					
				}).catch((error) => {
					console.log(error);
				});
			}
		},
		created() {
			this.details()
		}
	};
</script>

<style lang="less" scoped>
	.conntent {
		font-size: 0.17rem;
		margin-top: 0.5rem;
		.toptitle {
			// width: 3.6rem;
			height: 0.35rem;
			background: rgba(243, 243, 243, 1);
			opacity: 1;
			font-size: 0.15rem;
			font-family: Microsoft YaHei UI;
			padding-left: 0.15rem;
			font-weight: 400;
			line-height: 0.35rem;
			color: rgba(153, 153, 153, 1);
		}
		.detailinfo {
			>div:not(:last-child) {
				border-bottom: 0.01rem solid #D5D5D5;
			}
			>div {
				height: 0.5rem;
				line-height: 0.5rem;
				//   width: 3.3rem;
				padding: 0 0.15rem 0 0;
				margin-left: 0.15rem;
				>div {
					//   width: 2.7rem;
					height: 0.5rem;
					display: inline-block;
					//   background: red;
					color: #999;
					font-family: Microsoft YaHei UI;
				}
				>span {
					float: right
				}
			}
		}
	}
</style>
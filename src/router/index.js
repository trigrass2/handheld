import Vue from 'vue'
import Router from 'vue-router'
import ipjudge from '@/components/ipjudge' //首页ip判断
import index from '@/components/index' //首页
import ipSettings from '@/components/ipSettings' //设置
import reviseip from '@/components/reviseip' //设置Ip
import zhengJSingle from '@/components/zhengJSingle' //整经单
import zhengJ from '@/components/zhengJ' //整经
import workOrderDetail from '@/components/workOrderDetail' //工单详情
import bingzhou from '@/components/bingzhou' //并轴
import guasha from '@/components/guasha' //挂纱
import shangJ from '@/components/shangJ' //上浆
import choiceShangJ from '@/components/choiceShangJ' //选择上浆单
import addGuaSha from '@/components/addGuaSha' //新增挂纱
import addZhou from '@/components/addZhou' //整经-新增轴
import mergeBill from '@/components/mergeBill' //并轴工单详情
import addZhouBing from '@/components/addZhouBing' //并轴-新增轴
import addZhouShang from '@/components/addZhouShang' //上浆-新增轴
import zjSingleDetail from '@/components/zjSingleDetail'       //整经工单详情
import shangJDetail from '@/components/shangJDetail'           //上浆工单详情
import guashaDetail from '@/components/guashaDetail'           //挂纱详细
import shangJcondition from '@/components/shangJcondition'     //预览上浆条件
import pullRefresh from '@/components/pullRefresh'     //注册组件

Vue.use(Router)

export default new Router({
		routes: [
			{
				path: '/',
				name: 'ipjudge',
				component: ipjudge,
				meta: {
					title: '前道'
				}
			},{
				path: '/ipSettings',
				name: 'ipjuipSettingsdge',
				component: ipSettings,
				meta: {
					title: '设置'
				}
			},{
				path: '/reviseip',
				name: 'reviseip',
				component: reviseip,
				meta: {
					title: '修改ip'
				}
			}, {
				path: '/index',
				name: 'index',
				component: index,
				meta: {
					title: '首页'
				}
			}, {
				path: '/zhengJSingle',
				name: 'zhengJSingle',
				component: zhengJSingle,
				meta: {
					title: '整经单'
				}
			}, {
				path: '/zhengJ',
				name: 'zhengJ',
				component: zhengJ,
				meta: {
					title: '整经'
				}
			}, {
				path: '/workOrderDetail',
				name: 'workOrderDetail',
				component: workOrderDetail,
				meta: {
					title: '工单详情'
				}
			}, {
				path: '/bingzhou',
				name: 'bingzhou',
				component: bingzhou,
				meta: {
					title: '并轴'
				}
			}, {
				path: '/guasha',
				name: 'guasha',
				component: guasha,
				meta: {
					title: '挂纱'
				}
			}, {
				path: '/shangJ',
				name: 'shangJ',
				component: shangJ,
				meta: {
					title: '上浆'
				}
			}, {
				path: '/choiceShangJ',
				name: 'choiceShangJ',
				component: choiceShangJ,
				meta: {
					title: '选择上浆单'
				}
			}, {
				path: '/addGuaSha',
				name: 'addGuaSha',
				component: addGuaSha,
				meta: {
					title: '新增挂纱'
				}
			}, {
				path: '/addZhou',
				name: 'addZhou',
				component: addZhou,
				meta: {
					title: '新增轴'
				}
			}, {
				path: '/mergeBill',
				name: 'mergeBill',
				component: mergeBill,
				meta: {
					title: '并轴工单详情'
				}
			}, {
				path: '/addZhouBing',
				name: 'addZhouBing',
				component: addZhouBing,
				meta: {
					title: '并轴-新增轴'
				}
			}, {
				path: '/addZhouShang',
				name: 'addZhouShang',
				component: addZhouShang,
				meta: {
					title: '上浆-新增轴'
				}
			}, {
				path: '/zjSingleDetail',
				name: 'zjSingleDetail',
				component: zjSingleDetail,
				meta: {
					title: '整经工单详情'
				}
			}, {
				path: '/shangJDetail',
				name: 'shangJDetail',
				component: shangJDetail,
				meta: {
					title: '上浆工单详情'
				}
			}, {
				path: '/guashaDetail',
				name: 'guashaDetail',
				component: guashaDetail,
				meta: {
					title: '挂纱详细'
				}
			}, {
				path: '/shangJcondition',
				name: 'shangJcondition',
				component: shangJcondition,
				meta: {
					title: '预览上浆条件'
				}
			}, {
				path: '/pullRefresh',
				name: 'pullRefresh',
				component: pullRefresh,
				meta: {
					title: '注册组件'
				}
			}

		]
	})

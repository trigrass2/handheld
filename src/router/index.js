import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'												//首页
import zhengJSingle from '@/components/zhengJSingle'					//整经单
import zhengJ from '@/components/zhengJ'											//整经
import workOrderDetail from '@/components/workOrderDetail'		//工单详情
import bingzhou from '@/components/bingzhou'									//并轴
import guasha from '@/components/guasha'											//挂纱
import shangJ from '@/components/shangJ'											//上浆
import choiceShangJ from '@/components/choiceShangJ'					//选择上浆单
import addGuaSha from '@/components/addGuaSha'								//新增挂纱
import addZhou from '@/components/addZhou'										//整经-新增轴
import mergeBill from '@/components/mergeBill'								//并轴工单详情
import aaa from '@/components/ssss'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index,
      meta: {
        title: '首页'
      }
    },{
      path: '/zhengJSingle',
      name: 'zhengJSingle',
      component: zhengJSingle,
      meta: {
        title: '整经单'
      }
    },{
      path: '/zhengJ',
      name: 'zhengJ',
      component: zhengJ,
      meta: {
        title: '整经'
      }
    },{
      path: '/workOrderDetail',
      name: 'workOrderDetail',
      component: workOrderDetail,
      meta: {
        title: '工单详情'
      }
    },{
      path: '/bingzhou',
      name: 'bingzhou',
      component: bingzhou,
      meta: {
        title: '并轴'
      }
    },{
      path: '/guasha',
      name: 'guasha',
      component: guasha,
      meta: {
        title: '挂纱'
      }
    },{
      path: '/shangJ',
      name: 'shangJ',
      component: shangJ,
      meta: {
        title: '上浆'
      }
    },{
      path: '/choiceShangJ',
      name: 'choiceShangJ',
      component: choiceShangJ,
      meta: {
        title: '选择上浆单'
      }
    },{
      path: '/addGuaSha',
      name: 'addGuaSha',
      component: addGuaSha,
      meta: {
        title: '新增挂纱'
      }
    },{
      path: '/addZhou',
      name: 'addZhou',
      component: addZhou,
      meta: {
        title: '新增轴'
      }
    },{
      path: '/mergeBill',
      name: 'mergeBill',
      component: mergeBill,
      meta: {
        title: '并轴工单详情'
      }
    }
  ]
})


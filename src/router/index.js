import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
let Test = () => import('../views/Test')
// 登陆
let Login = () => import('../views/login/Login')
let ForgetPass = () => import('../views/login/ForgetPass')
// 首页路由
let Manage = () => import('../views/home/Manage')
let Home = () => import('../views/home/Home')
// 电子交接
let PaperConnect = () => import('../views/paper/PaperConnect')
let PaperExit = () => import('../views/paper/PaperExit')
let PaperStatement = () => import('../views/paper/PaperStatement')
// 预算管理
let BudgetReport = () => import('../views/budget/BudgetReport')
// 信息中心
let NotifyCenter = () => import('../views/info/NotifyCenter')
let NotifyRecord = () => import('../views/info/NotifyRecord')
// 费用报销
// let Fybx = () => import('../views/fybx/index')
let FybxInfo = () => import('../views/fybx/FybxInfo')
let SqInfo = () => import('../views/fybx/children/SqInfo')
// 待办任务
let Gtasks = () => import('../views/gtasks/Gtasks')
// 我的单据
let Mytasks = () => import('../views/mytasks/Mytasks')
// 已办任务
let Ytasks = () => import('../views/ytasks/Ytasks')
// 分析报表
let Statement = () => import('../views/statement/index')
// 更多
let More = () => import('../views/more/index')
// 付款失败
let PayFailure = () => import('../views/payfailure/index')
// let Error401 = () => import('../views/error/401')
let Error404 = () => import('../views/error/404')


const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/forgetpass',
    name: 'ForgetPass',
    component: ForgetPass
  },
  {
    path: '/manage',
    name: 'Manage',
    component: Manage,
    children: [{
      path: '',
      name: 'Home',
      component: Home,

    }, {
      path: '/paperconnect',
      name: 'PaperConnect',
      component: PaperConnect,
      meta: ['电子交接', '纸质单据交接']
    }, {
      path: '/paperexit',
      name: 'PaperExit',
      component: PaperExit,
      meta: ['电子交接', '纸质单据退回']
    }, {
      path: '/paperstatement',
      name: 'PaperStatement',
      component: PaperStatement,
      meta: ['电子交接', '单据交接报表']
    }, {
      path: '/budgetreport',
      name: 'BudgetReport',
      component: BudgetReport,
      meta: ['预算管理', '预算报表']
    }, {
      path: '/bugetdetail',
      name: 'bugetdetail',
      component: BudgetReport,
      meta: ['预算管理', '预算明细']
    }, {
      path: '/bugetentey',
      name: 'bugetentey',
      component: BudgetReport,
      meta: ['预算管理', '预算录入']
    }, {
      path: '/control',
      name: 'control',
      component: BudgetReport,
      meta: ['预算管理', '控制策略']
    }, {
      path: '/budgetreportsearch',
      name: 'BudgetReportSearch',
      component: BudgetReport,
      meta: ['预算管理', '预算查询报表']
    }, {
      path: '/notifycenter',
      name: 'NotifyCenter',
      component: NotifyCenter,
      meta: ['信息中心', '通知中心']
    }, {
      path: '/notifyrecord',
      name: 'NotifyRecord',
      component: NotifyRecord,
      meta: ['信息中心', '通知记录']
    }, {
      path: '/fybxinfo',
      name: 'FybxInfo',
      component: FybxInfo,
      children: [{
        path: '/sqinfo',
        name: 'sqinfo',
        component: SqInfo
      }]
    }
      , {
      path: '/gtasks',
      name: 'gtasks',
      component: Gtasks,
      meta: ['待办任务']
    }, {
      path: '/mytasks',
      name: 'mytasks',
      component: Mytasks,
      meta: ['我的单据']
    }, {
      path: '/ytasks',
      name: 'ytasks',
      component: Ytasks,
      meta: ['已办任务']
    }, {
      path: '/shsxbb',
      name: 'Statement',
      component: Statement,
      meta: ['分析报表', '审核时效报表']
    }, {
      path: '/fybxqksmsjb',
      name: 'Statement',
      component: Statement,
      meta: ['分析报表', '费用报销情况说明数据表']
    }, {
      path: '/fysqfsgx',
      name: 'Statement',
      component: Statement,
      meta: ['分析报表', '费用申请发生关系']
    }, {
      path: '/fycxb',
      name: 'Statement',
      component: Statement,
      meta: ['分析报表', '费用查询表']
    }, {
      path: '/sqdgzb',
      name: 'Statement',
      component: Statement,
      meta: ['分析报表', '申请单跟踪表']
    }, {
      path: '/xtdj',
      name: 'Statement',
      component: Statement,
      meta: ['分析报表', '系统单据']
    }, {
      path: '/wsjcb',
      name: 'Statement',
      component: Statement,
      meta: ['分析报表', '网上检查表']
    }, {
      path: '/drzfpqd',
      name: 'More',
      component: More,
      meta: ['更多', '待认证发票清单']
    }, {
      path: '/ddydj',
      name: 'More',
      component: More,
      meta: ['更多', '待打印单据']
    }, {
      path: '/ydydjlb',
      name: 'More',
      component: More,
      meta: ['更多', '已打印单据列表']
    }, {
      path: '/yssf',
      name: 'More',
      component: More,
      meta: ['更多', '预算释放']
    }, {
      path: '/rwwt',
      name: 'More',
      component: More,
      meta: ['更多', '任务委托']
    }, {
      path: '/payfailure',
      name: 'PayFailure',
      component: PayFailure,
      meta: ['付款失败']
    }]
  },
  {
    path: '/test',
    name: 'test',
    component: Test
  },
  {
    path: '/test1',
    name: 'test1',
    component: () => import("@/views/Test1")
  },
  {
    path: '/error',
    name: 'Error',
  },
  {
    path: '*',
    name: '404',
    component: Error404
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

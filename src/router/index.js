import Vue from 'vue'
import Router from 'vue-router'
import util from '../util/util'
import error from '../view/error/error'
Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/components/index'),
      meta:{title:'首页'}
    },
    {
      path: '/error',
      name: 'error',
      component: error ,
      meta:{title:'报错页面'}
    },
    {
      path: '*',
      redirect: "/error"
    }
  ]
})

router.beforeEach((to, form, next) => {
  // to: Route: 即将要进入的目标 路由对象 ,
  //from: Route: 当前导航正要离开的路由
  util.setTitle(to.meta.title)  //设置页面的title
  next()
})

router.afterEach((to, from) => {
  // 解决某些情况下loading无法关闭的情况

})
export default router

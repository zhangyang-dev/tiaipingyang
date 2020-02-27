import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

// 登录
import login from '@/components/Login/login'
// 首页
import index from '@/components/index/myindex/'
// 注册
import register from '@/components/register/register/'
// // 首页
import FirstPage from '@/components/firstPage/FirstPage/'


Vue.use(Router)


// 定义一个动态路径
const page = name => ({
  path: '/' + name,
  name: name,
  component: () => import('@/components/pages/' + name)
});
export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    // index
    {
      path: '/Myindex',
      name: 'Myindex',
      component: index
    },
    // login
    {
      path: '/login',
      name: 'login',
      component: login
    },
    // FirstPage
    {
      path: '/FirstPage',
      name: 'FirstPage',
      component: FirstPage
    },
    // register
    {
      path: '/register',
      name: 'register',
      component: register
    },

    page("404"),
    page("403"),
    page("500")
  ]
})



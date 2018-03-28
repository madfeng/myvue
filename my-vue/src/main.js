// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './assets/bootstrap.min.css'
import VueRouter from 'vue-router'
import App from './App'
import {routes} from "./routers";
import axios from 'axios'
import {store} from './store/store'
Vue.config.productionTip = false
Vue.use(VueRouter)
//配置Vue原型（在任何组件中都可以正常使用axios）
axios.defaults.baseURL = "https://wd2468178309upkmpi.wilddogio.com/"
Vue.prototype.http = axios

/* eslint-disable no-new */
const router= new VueRouter({
  routes,
  mode:'history',
  /*路由控制的滚动*/
  scrollBehavior(to,from,savedPosition){
    /*return{
      /!*x:0, y:100*!/ /!*默认主页停留在x=0，y=100位置*!/
      selector:'.btn'
    }*/
    if(savedPosition){
      return savedPosition
    }else{
      return {x:0,y:0}
    }
}
});

/*全局守卫 ----进入组件之后，作用于所有组件中
---用户在未登录的情况下，只能有登录和注册的操作*/
/*router.beforeEach((to,from,next)=>{
  if(to.path == '/login' || to.path == '/register'){
    next();
  }else{
    alert("您还没有登录，请先登录");
    next('/login');
  }
  /!*alert("您还没有登录，请先登录");
  next();*!/
  /!*判断store.gettes.isLogin === false
  * if(to.path == '/login' || to.path == '/register'){
  *
  * }
  *
  * *!/
})*/
//后置钩子函数----进入组件之前。使用较少
/*router.afterEach((to,from)=>{/!*to:是要去的组件，from:离开的组件，与全局守卫，有next的区别*!/
  alert("after each");/!*每进入组件都会执行*!/
});*/
/*组件内守卫*/


new Vue({
  router,
  store,
  el: '#app',
  components: { App },
  template: '<App/>'
})























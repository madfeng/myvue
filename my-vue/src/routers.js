import Header from './components/Header'
import Home from './components/Home'
import Menu from  './components/Menu'
import About from './components/about/About.vue'
import Admin from  './components/Admin.vue'
import Login from  './components/Login.vue'
import Register from  './components/Register'
/*二级路由*/
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import OrderingGuide from './components/about/OrderingGuide'
import History from './components/about/History'
/*三级路由*/
import Phone from './components/about/contact/Phone'
import PersonName from './components/about/contact/PersonName'


export const routes=[
  {path:'/',name:'homeLink',components:{
    default:Home,
      'orderingGuide':OrderingGuide,
      "delivery":Delivery,
      "history":History
    }},/*给当前路由添加name属性*/
  {path:'/menu',name:'menuLink',component:Menu},
  {path:'/about',name:'aboutLink',redirect:'/about/contact',component:About,children:[/*二级路由的默认展示模块*/
      {path:'/about/contact',component:Contact,redirect:'/about/contact/personName',name:"contactLink",children:[/*三级路由的默认展示*/
          {path:'/about/contact/phone',name:'phoneNumber',component:Phone},
          {path:'/about/contact/personName',name:'personName',component:PersonName},
          ]},
      {path:'/about/delivery',component:Delivery,name:"deliveryLink"},
      {path:'/about/orderingGuide',component:OrderingGuide,name:"orderingGuideLink"},
      {path:'/about/history',component:History,name:"historyLink"}
      ]},
  {path:'/admin',name:'adminLink',component:Admin/*,beforeEnter:(to,next,from)=>{
        /!*beforeEnter就是路由独享守卫，与全局守卫的作用范围不同，全局守卫作用域全局组件之中，路由独享，只组用于当前路由*!/
       /!* alert("非登录状态，不能访问此页");
        next(false);/!*next();可以继续跳转，next(false)将不再进行跳转，停留在之前操作的界面*!/!*!/
        /!*if(to.path == '/login' || to.path == '/register'){
          next();
        }else{
          alert("您还没有登录，请先登录");
          next('/login');
        }*!/
      }*/
  },
  {path:'/login',name:'loginLink',component:Login},
  {path:'/register',name:'registerLink',component:Register},
  {path:'*',redirect:'/'},/*若是用户输入的地址没有包含以上路由，可以指定租后跳转的位置*/
  ]

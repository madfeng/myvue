import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const store = new Vuex.Store({
/*  strict:true,*/
  state:{//存储数据
    products:[
      {name:"马云",price:2000},
      {name:"马化腾",price:1800},
      {name:"马冬梅",price:1000},
      {name:"玛丽",price:80},
      {name:"唐姆",price:10},
    ]
  },
  getters:{//获取数据
    saleProducts: (state) =>{
      var saleProducts = state.products.map(product =>{
        return {
          name:"**"+product.name+"**",
          // price:product.price/2
          price:product.price
        }
      })
      return saleProducts;
    }
  },
  mutations:{//触发事件改变数据时使用,在debug中可以追踪
    reducePrice : (state,payload) =>{//接收action中的参数
      // setTimeout(function () {
        state.products.forEach(product =>{
          product.price -= payload; //使用组件传递过来的参数
        })
      // },3000)
    }
  },
 actions:{//提交的是mutations而不是提交变更状态 可以包含任意异步操作
   //dispatch触发当前action，并且可以传递参数 传递参数需要使用payload来接收dispatch传递的参数
   reduceP:(context,payload) =>{
     setTimeout(function () {
       context.commit("reducePrice",payload);//调用mutation中的方法 使用payload 将参数传递给mutation
     },2000)
   }

 }
})





































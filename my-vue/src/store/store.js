import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state:{//设置属性
    menuItems:{},
    currentUser:null,
    isLogin:false
  },
  getters:{//获取属性的状态
    getMenuItems:state => state.menuItems,
    currentUser:state => state.currentUser,
    isLogin:state => state.isLogin
  },
  mutations:{//改变属性的状态
    setMenuItems(state,data){
      state.menuItems = data;
    },
    //将匹配到的对象，在数组menuItems中删除
    removeItems(state,data){
      state.menuItems.forEach((item,index) =>{
        if (item == data){
          state.menuItems.splice(index,1);
        }
      })
    },
    addMenuItems(state,data){
      //将新添加的pizza push到menuItems中
      state.menuItems.push(data);
    },
  //  更改用户的状态信息
    userStatus(state,user){
      if(user){
        state.currentUser = user;
        state.isLogin = true
      }else {
        state.currentUser = null;
        state.isLogin = false;
      }
    }
  },
  actions:{//应用mutations
    setUser({commit},user){
      commit("userStatus",user)
    }
  }
})

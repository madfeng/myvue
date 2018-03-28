const state = {
  menuItems:{}
}
const getters ={
  getMenuItems: state => state.menuItems
}
const mutations ={
  //更改状态
  setMenuItems(state,data){
    state.menuItems = data;
  },
  //将匹配到的对象，在数组menuItems中删除
  removeItems (state,data){
    state.menuItems.forEach((item,index) =>{
      if (item == data){
        state.menuItems.splice(index,1);
      }
    })
  },
  addMenuItems (state,data){
    //将新添加的pizza push到menuItems中
    state.menuItems.push(data);
  }
}
const actions ={

}
export default {
  state,
  getters,
  mutations,
  actions
}

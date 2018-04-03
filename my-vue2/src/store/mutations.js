export const setMenuItems = (state,data)=>{
  state.menuItems = data;
}
//将匹配到的对象，在数组menuItems中删除
export const removeItems = (state,data)=>{
  state.menuItems.forEach((item,index) =>{
    if (item == data){
      state.menuItems.splice(index,1);
    }
  })
}
export const  addMenuItems = (state,data)=>{
  //将新添加的pizza push到menuItems中
  state.menuItems.push(data);
}
//  更改用户的状态信息
export const  userStatus = (state,user)=>{
  if(user){
    state.currentUser = user;
    state.isLogin = true
  }else {
    state.currentUser = null;
    state.isLogin = false;
  }
}

<template>
  <h1>Admin</h1>
</template>
<script>
  /*组件内的守卫，进入或者离开此组件时都可以进行操作*/
  export default {
    /*next对应还会有一个回调,data中的数据渲染不出来，在data函数执行之前，先渲染了beforeRouterEnter函数,可以通过 next(vm =>{
        alert("hello"+vm.name);
      });获取data当中的数据*/
    /*data(){
      return{
        name:"henry"
      }
    },*/
    /*进入组件之前，*/
    /*beforeRouteEnter:(to,from,next)=>{
     /!* alert("hello"+this.name);
     *  next();
     * *!/
      next(vm =>{
        alert("hello"+vm.name);
      });
    }*/
    /*离开组件之后*/
    /*beforeRouteLeave:(to,from,next)=>{
      if(confirm("确定要离开吗？")){
        next();
      }else{
        next(false);
      }
    }*/
  }
</script>

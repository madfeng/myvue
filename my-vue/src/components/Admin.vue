<template>
  <div class="row">
    <div class="col-sm-12 col-md-8">
      <new-pizza></new-pizza>
    </div>
    <div class="col-sm-12 col-md-4">
      <!--品种展示-->
      <h3 class="text-muted my-5">Menu</h3>
      <table class="table">
        <thead class="table table-default">
          <tr>
            <th>品种</th>
            <th>删除</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems">
          <tr>
            <td>{{item.name}}</td>
            <td><button @click="delMenuItem(item)" class="btn btn-outline-danger btn-sm">&times;</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
  /*组件内的守卫，进入或者离开此组件时都可以进行操作*/
  import newPizza from "./newPizza"
  import axios from 'axios'
  export default {
    data(){
      return{
        /*getMenuItems:[]*/
      }
    },
    components:{
      newPizza:newPizza
    },
    computed:{
      getMenuItems:{
        get(){
          // return this.$store.state.menuItems;
          return this.$store.getters.getMenuItems
        },
        set(){

        }
      },
    },
    created(){
      //使用axios
      axios.get("menu.json").then(res =>{
       var data = res.data;
       var menuArry = [];
        for (let key in data){
          data[key].id = key;
          menuArry.push(data[key]);
        }
          //数据同步到vuex中
        this.$store.commit("setMenuItems",menuArry);
        // this.getMenuItems = menuArry;
      })
      //使用fetch
      /*fetch("https://wd2468178309upkmpi.wilddogio.com/menu.json")
        .then(res => {return res.json()})
        .then(data => {
          console.log(data)
          let menuArry = [];
          for (let key in data){
            data[key].id = key;
            menuArry.push(data[key]);
          }
          this.getMenuItems = menuArry;
        })
        .catch(err => console.log(err))*/
    },
    methods:{
      delMenuItem:function (item) {
        //使用axios
        axios.delete("menu/"+item.id+"/.json")
          .then(res =>{
            // this.$router.push({name:"menuLink"})
            this.$store.commit("removeItems",item);
          //  不会立即更新到页面，需刷新页面

          })
        //使用fetch
        /*fetch("https://wd2468178309upkmpi.wilddogio.com/menu/"+item.id+"/.json",{
          method:"delete",
          headers:{
            'Content-type':"application/json",
          }
        })
          .then(res => res.json())
          .then(data => this.$router.push({name:"menuLink"}))
          .catch(err => console.log(err));*/
      }
    }







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

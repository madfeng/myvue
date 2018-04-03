<template>
  <div>
    <form>
      <h3 class="text-muted my-5">添加新的pizza</h3>
      <div class="form-group row">
        <label class="col-sm-1">品种</label>
        <div class="col-sm-11">
          <input type="text" class="form-control" v-model="newPizza.name"/>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-1">描述</label>
        <div class="col-sm-11">
          <textarea rows="5" class="form-control" v-model="newPizza.description"></textarea>
        </div>
      </div>
      <p><strong>选项一</strong></p>
      <div class="form-group row">
        <label class="col-sm-1">尺寸</label>
        <div class="col-sm-11">
          <input type="text" class="form-control" v-model="newPizza.size1"/>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-1">价格</label>
        <div class="col-sm-11">
          <input type="text" class="form-control" v-model="newPizza.price1"/>
        </div>
      </div>
      <p><strong>选项二</strong></p>
      <div class="form-group row">
        <label class="col-sm-1">尺寸</label>
        <div class="col-sm-11">
          <input type="text" class="form-control" v-model="newPizza.size2"/>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-1">价格</label>
        <div class="col-sm-11">
          <input type="text" class="form-control" v-model="newPizza.price2"/>
        </div>
      </div>
      <div class="form-group row">
       <button @click="addMenuItem" class="btn btn-success btn-block" type="button">添加</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        newPizza:{
          get(){
            return this.$store.state.menuItems;
          },
          set(){

          }
        }
      }
    },
    methods:{
      addMenuItem:function () {
        let data = {
          name:this.newPizza.name,
          description:this.newPizza.description,
          options:[
            {
              size:this.newPizza.size1,
              price:this.newPizza.price1
            },
            {
              size:this.newPizza.size2,
              price:this.newPizza.price2
            }
          ]
        }
        //使用配置为全局的axios
        this.http.post("menu.json",data)
          .then(res => {
            //数据同步到vuex中
            this.$store.commit("addMenuItems",data);
            /*this.$router.push({name:"menuLink"})*/
          })
        //使用fetch
        /*fetch("https://wd2468178309upkmpi.wilddogio.com/menu.json",{
          method:"POST",
          headers:{
            "Content-type":"application/json"
          },
          body:JSON.stringify(data)
        })
          .then(res =>res.json())
          .then(menuItems => this.$router.push({name:"menuLink"}))
          .catch(err => console.log(err));*/

      }
    }
  }
</script>





























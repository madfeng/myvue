<template>
  <div class="row">
    <!--菜单-->
    <div class="col-sm-12 col-md-8">
      <table class="table col">
        <thead class="thead-default">
          <tr>
            <th>尺寸</th>
            <th>价格</th>
            <th>加入</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuitems" :key="item.name">
        <tr>
          <td><strong>{{item.name}}</strong> {{item.description}}</td>
        </tr>
        <tr v-for="option in item.options">
          <td>{{option.size}}寸</td>
          <td>￥{{option.price}}</td>
          <td><button @click="addToBasket(item,option)" class="btn btn-sm btn-outline-success">+</button></td>
        </tr>
        </tbody>
      </table>
    </div>
    <!--购物车-->
    <div class="col-md-4 col-sm-12">
      <div v-if="baskets.length > 0">
        <table class="table">
          <thead class="thead-default">
          <tr>
            <th>数量</th>
            <th>品种</th>
            <th>价格</th>
          </tr>
          </thead>
          <tbody v-for="item in baskets" :key="item.name">
          <tr>
            <td>
              <button @click="decreaseQuantity(item)" class="btn btn-sm">-</button>
              <span>{{item.quantity}}</span>
              <button @click="increaseQuantity(item)" class="btn btn-sm">+</button>
            </td>
            <td>{{item.name}}{{item.size }}寸</td>
            <td>{{item.price * item.quantity}}元</td>
          </tr>
          </tbody>
        </table>
        <p>总价：{{totlePrice + "RMB"}}</p>
        <button class="btn btn-success btn-block">提交</button>
      </div>
      <div v-else>
        {{basketText}}
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        baskets:[],
        basketText:"当前购物车没有商品",
        //getMenuitems:{}
        /*getMenuitems:{
          1: {
            'name': '榴莲pizza',
            'description': '这是喜欢吃榴莲朋友的最佳选择',
            'options': [{
              'size': 9,
              'price': 38
            }, {
              'size': 12,
              'price': 48
            }]
          },
          2: {
            'name': '芝士pizza',
            'description': '芝士杀手,浓浓的芝士丝, 食欲瞬间爆棚',
            'options': [{
              'size': 9,
              'price': 38
            }, {
              'size': 12,
              'price': 48
            }]
          },
          3: {
            'name': '夏威夷pizza',
            'description': '众多人的默认选择',
            'options': [{
              'size': 9,
              'price': 36
            }, {
              'size': 12,
              'price': 46
            }]
          }
        }*/
      }
    },
    computed:{
      //在vuex中获取数据
      getMenuitems(){
        //return this.$store.state.menuItems;
      //  通过getters获取数据
        return this.$store.getters.getMenuItems
      },
      totlePrice:function () {
        let totalCost = 0;
        for (let i in this.baskets){
          let individualItem = this.baskets[i];
          totalCost += individualItem.quantity * individualItem.price;
        }
        return totalCost;
      }
    },
    created(){
      //axios
      this.getBasket();
      //fetch
      /*fetch("https://wd2468178309upkmpi.wilddogio.com/menu.json")
        .then(res => {
          return res.json()
        })
        .then(data =>{
          this.getMenuitems = data;
        })
        .catch(err => console.log(err))*/
    },
    methods:{
      getBasket:function(){
        /*this.http.get("menu.json").then(res =>{
          this.getMenuitems = res.data;
        })*/
        //将请求来的数据存储到vuex中
        this.http.get("menu.json").then(res =>{
          this.$store.commit("setMenuItems",res.data);
        })
      },
      addToBasket:function (item,option) {
        let basket = {
          name:item.name,
          size:option.size,
          price:option.price,
          quantity:1
        };
        if(this.baskets.length>0){
          //  过滤
         let result =  this.baskets.filter(basket =>{
            return basket.name === item.name && basket.price === option.price
          })
          if(result !=null && result.length >0){
           result[0].quantity++
          }else {
            this.baskets.push(basket);
          }
        }else {
          this.baskets.push(basket);
        }
      },
      decreaseQuantity:function (item) {
        item.quantity --;
        if(item.quantity <= 0 ){
          this.removeFromBasket(item);
        }
      },
      increaseQuantity:function (item) {
        item.quantity++;
      },
      removeFromBasket(item){
        this.baskets.splice(this.baskets.indexOf(item),1);
      },

    }
  }
</script>

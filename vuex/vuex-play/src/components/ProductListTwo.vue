<template>
  <div id="productListTwo">
    <h1>product-list-two</h1>
    <ul>
      <li v-for="product in saleProducts">
        <span class="name">{{product.name}}</span>
        <span class="price">${{product.price}}</span>
      </li>
    </ul>
    <button @click="reduceP(4)">商品降价</button>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'
  export default {
    computed:{
      products(){
        return this.$store.state.products
      },
      /*saleProducts(){
        return this.$store.getters.salProducts;
      }*/
      ...mapGetters([
        "saleProducts",
      ])
    },
    methods:{
      /*reducePrice:function (num) {//
        /!*this.$store.state.products.forEach(prud =>{
          prud.price -=1;
        })*!/
        //this.$store.commit('reducePrice');//直接调用mutation中的方法
        this.$store.dispatch("reduceP",num)//调用actions中的方法,传递参数给store.js
      }*/
      ...mapActions([
        "reduceP"
      ])
    }
  }
</script>

<style scoped>
  #productListTwo{
    background:#fff8b1;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
  }
  #productListTwo ul{
    padding: 0;
  }
  #productListTwo li{
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 10px;
    background: rgba(255,255,255,0.7);
  }
  .price{
    font-weight: bold;
    color: #e8800c;
  }
</style>


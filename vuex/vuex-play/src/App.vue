<template>
  <div id="app">
    <product-list-two></product-list-two>
    <product-list-three></product-list-three>
  </div>
</template>

<script>
  import ProductListTwo from './components/ProductListTwo.vue'
  import ProductListThree from './components/ProductListThree.vue'
export default {
  name: 'app',
  components:{
    "ProductListThree":ProductListThree,
    "ProductListTwo" :ProductListTwo
  },
  data () {
    return {

    }
  }
}
</script>

<style>
  body{
    font-family: Ubuntu;
    color: #555;
  }
</style>

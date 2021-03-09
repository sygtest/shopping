<template>
  <div id="cart-list">
    <cart-list-item/>
  </div>
</template>

<script>
  import CartListItem from './CartListItem'
  export default {
    name: 'CartList',
    components:{
      CartListItem
    }
  }
</script>

<style scoped>
  #cart-list{
    border: 1px solid red;
  }
</style>


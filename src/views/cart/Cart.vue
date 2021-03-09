<template>
  <el-container>
    <!-- 顶部导航栏区域 -->
  <el-header><top-nav-bar/></el-header>
  <el-main>
    <cart-list/>
  </el-main>
</el-container>
</template>

<script>
  import TopNavBar from 'components/content/topNavBar/TopNavBar'
  import CartList from './childComps/CartList'

  export default {
    name: 'cart',
    components: {
      TopNavBar,
      CartList
    }
  }
</script>

<style scoped>

</style>
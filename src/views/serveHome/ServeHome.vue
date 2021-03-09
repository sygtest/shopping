<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
  <el-header>
    <span>网上商城后台管理系统</span>
  </el-header>
  <!-- 页面主体区 -->
  <el-container>
    <!-- 侧边栏 -->
    <el-aside width="200px">Aside</el-aside>
    <!-- 右侧内容主体 -->
    <el-main>Main</el-main>
  </el-container>
</el-container>
</template>

<script>
  export default {
    name: 'ServeHome'
  }
</script>

<style scoped>
/* 页面整体高度 */
  .home-container{
    height: 100vh;
  }

  .el-header{
    background-color: #373d41;
  }

  .el-aside{
    background-color: #333744;
  }

  .el-main{
    background-color: #eaedf1;
  }

</style>

<template>
  <div id="bot-nav" class="layer">
    <el-row :gutter="5" class="bot-top">
      <el-col :span="5"><div class=" ">
        <a href=""><span class="iconfont">&#xe659;</span>预约维修服务</a>
        </div></el-col>
      <el-col :span="5"><div class="">
        <a href=""><span class="iconfont">&#xe60e;</span>7天无理由退货</a>
        </div></el-col>
      <el-col :span="4"><div class=" ">
        <a href=""><span class="iconfont">&#xe606;</span>15天免费换货</a>
        </div></el-col>
      <el-col :span="5"><div class=" ">
        <a href=""><span class="iconfont">&#xe790;</span>满99元包邮</a>
        </div></el-col>
      <el-col :span="5"><div class=" ">
        <a href=""><span class="iconfont">&#xe611;</span>520余家售后网点</a></div></el-col>
    </el-row>
    <el-row :gutter="5" class="bot-bot">
      <el-col :span="3"><div class=" ">
        <ul>
          <li><a href="">帮助中心</a></li>
          <li><a href="">账户管理</a></li>
          <li><a href="">购物指南</a></li>
          <li><a href="">订单操作</a></li>
        </ul>
        </div>
        </el-col>
      <el-col :span="3"><div class=" "><ul>
          <li><a href="">服务支持</a></li>
          <li><a href="">售后政策</a></li>
          <li><a href="">自助服务</a></li>
          <li><a href="">相关下载</a></li>
        </ul></div></el-col>
      <el-col :span="3"><div class=" "><ul>
          <li><a href="">线下门店</a></li>
          <li><a href="">淘你之家</a></li>
          <li><a href="">服务网点</a></li>
          <li><a href="">授权体验店</a></li>
        </ul></div></el-col>
      <el-col :span="3"><div class=" "><ul>
          <li><a href="">关于商城</a></li>
          <li><a href="">了解商城</a></li>
          <li><a href="">加入商城</a></li>
          <li><a href="">投资关系</a></li>
        </ul></div></el-col>
      <el-col :span="3"><div class=" "><ul>
          <li><a href="">关注我们</a></li>
          <li><a href="">新浪微博</a></li>
          <li><a href="">官方微信</a></li>
          <li><a href="">联系我们</a></li>
        </ul></div></el-col>
      <el-col :span="3"><div class=" "><ul>
          <li><a href="">特色服务</a></li>
          <li><a href="">F码通道</a></li>
          <li><a href="">礼物码</a></li>
          <li><a href="">防伪查询</a></li>
        </ul></div></el-col>
      <el-col :span="6"><div class=" ">
        <h2>400-123-123</h2>
        <el-button><i class="el-icon-chat-dot-square"></i>人工服务</el-button>
        </div></el-col>
    </el-row>

  </div>
</template>

<script>
  export default {
    name: 'BotNavBar'
  }
</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;
  }

  .bot-top{
    font-size: 20px;
    color: #979797;
    text-align: center;
  }

 a:hover{
     color: rgb(255, 103, 0);
   }

   .bot-top span{
     font-size: 20px;
     padding-right: 5px;
   }

    .bot-bot{
      font-size: 15px;
      text-align: center;
    }

    .bot-bot ul li{
      margin-bottom: 6px;
    }

</style>
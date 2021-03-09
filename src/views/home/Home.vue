<template>
  <div id="home">
    <!-- 头部信息 -->
    <top-nav-bar />
    <!-- 头部搜索 -->
    <div id="headSearch">
      <div class="clearfix layer">
        <h1 class="fl"><a href="#">淘你开心</a></h1>
        <div class="code fr">
          <span class="iconfont close">&#xe61a;</span>
          <span class="c5">去领红包</span>
          <img src="~assets/img/code.png" alt="" />
        </div>

        <div class="search">
          <ul class="searchTab clearfix">
            <li class="active">宝贝</li>
            <li>店铺</li>
            <li>优选</li>
          </ul>

          <div class="searchContent clearfix">
            <form action="">
              <div class="searchBox fl">
                <input type="text" placeholder="百搭打底衫" />
                <i class="iconfont">&#xe647;</i>
                <span class="iconfont">&#xe519;</span>
              </div>
              <div class="btn fl">
                <button type="submit">搜索</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- 商品分类导航 -->
    <div id="goods-category" class="clearfix layer">
      <h2 class="fl">全部商品分类</h2>
      <ul>
        <li><a href="#">箱包</a></li>
        <li><a href="#">手机</a></li>
        <li><a href="#">电视</a></li>
        <li><a href="#">女装</a></li>
        <li><a href="#">男装</a></li>
        <li><a href="#">家电</a></li>
        <li><a href="#">生鲜</a></li>
        <li><a href="#">智能</a></li>
        <li><a href="#">穿戴</a></li>
      </ul>
    </div>

    <!-- 首屏内容 -->
    <div id="firstScreen" class="layer clearfix">
      <!-- 首屏左边内容 -->
      <div class="first-left fl">
        <ul>
          <li>
            <a href="#">女装</a> / <a href="#">男装</a> / <a href="#">内衣</a
            ><span class="iconfont fr">&#xe662;</span>
          </li>
          <li>
            <a href="#">鞋靴</a> / <a href="#">箱包</a> / <a href="#">配件</a
            ><span class="iconfont fr">&#xe662;</span>
          </li>
          <li>
            <a href="#">童装</a> / <a href="#">孕产</a> / <a href="#">用品</a
            ><span class="iconfont fr">&#xe662;</span>
          </li>
          <li>
            <a href="#">手机</a> / <a href="#">数码</a> / <a href="#">家电</a
            ><span class="iconfont fr">&#xe662;</span>
          </li>
          <li>
            <a href="#">活动</a> / <a href="#">户外</a> / <a href="#">乐器</a
            ><span class="iconfont fr">&#xe662;</span>
          </li>
          <li>
            <a href="#">游戏</a> / <a href="#">动漫</a> / <a href="#">影视</a
            ><span class="iconfont fr">&#xe662;</span>
          </li>
          <li>
            <a href="#">美妆</a> / <a href="#">洗护</a> / <a href="#">保健品</a
            ><span class="iconfont fr">&#xe662;</span>
          </li>
          <li>
            <a href="#">工具</a> / <a href="#">装修</a> / <a href="#">建材</a
            ><span class="iconfont fr">&#xe662;</span>
          </li>
          <li>
            <a href="#">美食</a> / <a href="#">生鲜</a> / <a href="#">零食</a
            ><span class="iconfont fr">&#xe662;</span>
          </li>
          <li>
            <a href="#">珠宝</a> / <a href="#">眼镜</a> / <a href="#">手表</a
            ><span class="iconfont fr">&#xe662;</span>
          </li>
          <li>
            <a href="#">厨具</a> / <a href="#">收纳</a> / <a href="#">清洁</a
            ><span class="iconfont fr">&#xe662;</span>
          </li>
          <li>
            <a href="#">百货</a> / <a href="#">餐厨</a> / <a href="#">保健</a
            ><span class="iconfont fr">&#xe662;</span>
          </li>
          <li>
            <a href="#">鲜花</a> / <a href="#">宠物</a> / <a href="#">衣服</a
            ><span class="iconfont fr">&#xe662;</span>
          </li>
          <li><a href="#">图像</a> / <a href="#">文具</a>
              <span class="iconfont fr">&#xe662;</span>
          </li>
        </ul>
      </div>

      <!-- 首屏右边内容 -->
      <div class="first-right fr">
        <div class="right-top">
          <h2>淘你开心公告</h2>
          <div class="announcement">
            尊敬的用户：<br />
            为了大家更好的体验，3月25日器，当日服务器进行维护升级！
            具体开放时间，留意公告，祝大家购物愉快！ 3月23日 淘你开心系统管理部
          </div>
        </div>
        <table class="icon">
          <tr>
            <td class="item1">
              <a href="#">
                <span></span>
                <i>充话费</i>
              </a>
            </td>
            <td class="item2">
              <a href="#">
                <span></span>
                <i>车险</i>
              </a>
            </td>
            <td class="item3">
              <a href="#">
                <span></span>
                <i>旅行</i>
              </a>
            </td>
            <td class="item4">
              <a href="#">
                <span></span>
                <i>游戏</i>
              </a>
            </td>
          </tr>
          <tr>
            <td class="item5">
              <a href="#">
                <span></span>
                <i>彩票</i>
              </a>
            </td>
            <td class="item6">
              <a href="#">
                <span></span>
                <i>电影</i>
              </a>
            </td>
            <td class="item7">
              <a href="#">
                <span></span>
                <i>卡卷</i>
              </a>
            </td>
            <td class="item8">
              <a href="#">
                <span></span>
                <i>理财</i>
              </a>
            </td>
          </tr>
          <tr>
            <td class="item9">
              <a href="#">
                <span></span>
                <i>找服务</i>
              </a>
            </td>
            <td class="item10">
              <a href="#">
                <span></span>
                <i>演出</i>
              </a>
            </td>
            <td class="item11">
              <a href="#">
                <span></span>
                <i>水电</i>
              </a>
            </td>
            <td class="item12">
              <a href="#">
                <span></span>
                <i>火车票</i>
              </a>
            </td>
          </tr>
        </table>
      </div>

      <!-- 首屏中间内容 -->
      <div class="first-middle">
        <el-carousel height="460px"  >
          <el-carousel-item  v-for="item in 4" :key="item">
            <h3 class="small">{{ item }}</h3>
          </el-carousel-item>
     </el-carousel>
      </div>
    </div>

    <!-- 底部广告 -->
    <div id="bottom-ad" class="layer clearfix">
      <ul>
        <li><h2 class="today-recomend">今日推荐</h2></li>
        <li><a href="#"><img src="~assets/img/ad/1.jpg" alt=""></a></li>
        <li><a href="#"><img src="~assets/img/ad/2.jpg" alt=""></a></li>
        <li><a href="#"><img src="~assets/img/ad/3.jpg" alt=""></a></li>
      </ul>
    </div>
    <!-- 底部导航栏 -->
    <div id="bottom" class="clearfix ">
      <bot-nav-bar/>
    </div>
  </div>
</template>

<script>
import TopNavBar from "components/content/topNavBar/TopNavBar";
import BotNavBar from 'components/content/botNavBar/BotNavBar'

export default {
  name: "Home",
  components: {
    TopNavBar,
    BotNavBar
  },
};
</script>

<style scoped>
@import "../../assets/css/home.css";
</style>
<template>
  <div class="bg">
    <div id="top" class="clearfix layer">
      <ul class="fl">
        <li>
          <span>中国大陆</span>
          <span class="iconfont arrow">&#xe60b;</span>
        </li>
        <li>
          <router-link class="login" to="/login">亲，请登录</router-link>
        </li>
        <li>
          <router-link to="/register">免费注册</router-link>
        </li>
      </ul>
      <ul class="fr">
        <li class="my">
          <router-link to="/profile">我的账户</router-link>
          <span class="iconfont arrow">&#xe60b;</span>
        </li>
        <li>
          <span class="iconfont mr5 c4">&#xf0179;</span>
          <router-link to="/cart">购物车</router-link>
          <strong>0</strong>
        </li>
        <li>
          <router-link to="/collect"
            ><span class="iconfont mr5 store">&#xe607;</span>收藏夹</router-link
          >
          <span class="iconfont arrow">&#xe60b;</span>
        </li>
        <li>
          <router-link to="/category">商品分类</router-link>
        </li>
        <li class="line">|</li>
        <li>
          <router-link to="/serveEndLogin">后台登录</router-link>
          <span class="iconfont arrow">&#xe60b;</span>
        </li>
        <li>
          <router-link to="service">联系客服</router-link>
          <span class="iconfont arrow">&#xe60b;</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopNavBar",
  components: {},
  methods: {},
};
</script>

<style scoped>


.bg {
  width: 100%;
  background-color: #f5f5f5;
}

#top {
  background-color: #fff;
}
#top li {
  float: left;
  line-height: 35px;
  padding: 0 6px;
  /* font-size: 0; */
}

#top a {
  font-size: 12px;
  color: #6c6c6c;
  /* color: #f3f3f3; */
}

#top a:hover {
  color: #f40;
}

#top a.login {
  color: #f33e00;
}

#top span {
  font-size: 12px;
}

#top span.arrow {
  margin-left: 7px;
}

#top li strong {
  font-size: 12px;
  color: #f22e00;
}

#top li span.store {
  color: #9c9c9c;
}

#top li.line {
  font-size: 12px;
  color: #ddd;
  padding: 0 5px;
}

#top li.my:hover {
  cursor: pointer;
}
</style>
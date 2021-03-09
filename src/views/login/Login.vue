<template>
  <el-container>
    <el-header height="100px">
      <!-- 头部区域 -->
      <h1>淘你开心，欢迎登录</h1>
      <h5>让每个人都享受购物的乐趣</h5>
    </el-header>
    <el-main>
      <div class="login-box">
        <h1>账户登录</h1>
        <!-- 登录表单区域 -->
        <el-form
          :model="loginForm"
          :rules="rules"
          label-width="0px"
          class="login-form"
        >
          <!-- 用户名 -->
          <el-form-item prop="username">
            <el-input
              v-model="loginForm.username"
              prefix-icon="el-icon-user-solid"
              placeholder="请输入账户"
            ></el-input>
          </el-form-item>
          <!-- 密码 -->
          <el-form-item prop="password">
            <el-input
              v-model="loginForm.password"
              prefix-icon="el-icon-lock"
              type="password"
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <!-- 登录按钮 -->
          <el-form-item>
            <el-button type="primary" class="login-btn">登录</el-button>
          </el-form-item>
          <!-- 注册和忘记密码 -->
          <div>
            <router-link to="/register">
              <el-link :underline="false" type="primary" class="fl"
                >免费注册</el-link
              >
            </router-link>
            <el-link :underline="false" type="primary" class="fr"
              >忘记密码？</el-link
            >
          </div>
        </el-form>
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
      // 这是表单的验证规则对象
      rules: {
        // 验证用户名是否合法
        username: [
          { required: true, message: "请输入账户", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          }
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
/* 头部区域 */
.el-header {
  width: 100%;
  background-color: skyblue;
}

.el-header h1 {
  line-height: 80px;
  margin-left: 100px;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: -40px;
}

.el-header h5 {
  margin-left: 100px;
}

/* 中部区域 */
.el-main {
  padding: 0;
  width: 100%;
  height: 660px;
  background: url("~assets/img/login/login.png") no-repeat;
  background-color: skyblue;
  background-size: contain;
}

/* 登录框 */
.login-box {
  position: absolute;
  margin-top: 54px;
  left: 64%;
  width: 450px;
  height: 500px;
  background-color: #fff;
}

.login-box h1 {
  height: 50px;
  background-color: skyblue;
  font-size: 25px;
  text-align: center;
  line-height: 50px;
}

/* 登录表单 */
.login-form {
  width: 100%;
  padding: 30px 20px;
  box-sizing: border-box;
}

.login-form .login-btn {
  width: 100%;
  height: 40px;
}
</style>
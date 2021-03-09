<template>
  <div id="server-end">
    <!-- 登录盒子 -->
    <div class="login-box">
      <h1>管理员登录</h1>
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
        </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ServeEndLogin',
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
      }
    }
  }
</script>

<style scoped>
  #server-end{
    height: 100vh;
    background-color: #2b4b6b;
  }

  .login-box{
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
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

  /* 登录按钮 */
.login-form .login-btn {
  width: 100%;
  height: 40px;
}

</style>
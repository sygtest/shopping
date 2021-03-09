<template>
  <el-container>
    <el-header>
      <!-- 头部区域 -->
      <h1>淘你开心，欢迎注册</h1>
      <h5>让每个人都享受购物的乐趣</h5>
      </el-header>
    <el-main>
      <!-- 注册盒子 -->
      <div class="register-box">
        <h1>账户注册</h1>
        <!-- 注册表单区域 -->
        <el-form ref="regForm" :rules="registerRules" :model="registerForm"   label-width="70px" class="register-form" hide-required-asterisk >
          <!-- 账户 -->
          <el-form-item prop="username" label="账户">
            <el-input v-model="registerForm.username" placeholder="请注册账户"></el-input>
          </el-form-item>
          <!-- 密码 -->
          <el-form-item prop="password" label="密码" >
            <el-input v-model="registerForm.password" placeholder="请输入密码" type="password"  autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item prop="checkPass" label="确认密码" >
            <el-input  v-model="registerForm.checkPass" placeholder="请确认密码" type="password"  autocomplete="off"></el-input>
          </el-form-item>
          <!-- 性别 -->
          <el-form-item label="性别">
            <el-radio-group v-model="registerForm.sex">
              <el-radio  :label="0">男</el-radio>
              <el-radio  :label="1">女</el-radio>
            </el-radio-group>
          </el-form-item>
          <!-- 手机号 -->
          <el-form-item prop="cellPhoneNumber" label="手机号">
            <el-input v-model="registerForm.cellPhoneNumber" placeholder="请输入手机号"></el-input>
          </el-form-item>
          <!-- 邮箱 -->
          <el-form-item prop="email" label="邮箱">
            <el-input  v-model="registerForm.email" placeholder="请输入邮箱" ></el-input>
          </el-form-item>
          <!-- 注册按钮 -->
          <el-form-item>
            <el-button type="primary" @click="submitForm('regForm')" class="btn-register" >注册</el-button>
          </el-form-item>
        </el-form>  
        </div>
    </el-main>
  </el-container>
</template>
<script>

export default {
  name: "Register",
  data() {
          var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.registerForm.checkPass !== '') {
            this.$refs.regForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.registerForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    return {
      // 表单数据
      registerForm:{
        username: '',
        password: '',
        checkPass: '',
        sex: 0,
        cellPhoneNumber: '',
        email: ''
      },
      registerRules:{
        username:[
          { required: true, message: '请设置用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
         password: [
            { validator: validatePass, trigger: 'blur' },
             { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' },
             { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
          ],
          cellPhoneNumber: [
            { required: true, message: '请输入手机号', trigger: 'blur' },
            { min: 11, max: 11, message: '请输入正确的手机号', trigger: 'blur' }
          ],
          email:[
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
          ]
      }
    }
  },
  methods: {
        submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('注册成功');
            console.log(this.registerForm);
          } else {
            alert('error submit!!');
            return false;
          }
        });
      }
  }
};
</script>

<style scoped>
  /* 头部区域 */
  .el-header {
    width: 100%;
    background-color: rgb(255, 92, 237);
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
    background: url("~assets/img/register/register.png") no-repeat;
    background-color: rgb(255, 92, 237);
    background-size: contain;
  }

  /* 注册框 */
  .register-box {
    width: 500px;
    height: 560px;
    background-color: #fff;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
  }

  .register-box h1 {
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 25px;
    background-color: skyblue;
  }
  /* 注册表单 */
  .register-form {
    width: 100%;
    padding: 10px 20px;
    box-sizing: border-box;
  }

  /* 注册按钮 */
  .btn-register{
    position: absolute;
    left: 50%;
    width: 80px;
    height: 30px;
    line-height: 8px;
    text-align: center;
    margin-left: -80px;
  }
</style>
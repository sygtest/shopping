<template>
<el-container>
  <!-- 头部导航 -->
  <el-header>
    <top-nav-bar/>
  </el-header>
  <el-container>
    <!-- 侧边栏 -->
    <el-aside width="200px">
      <el-menu
      background-color="#333744"
      text-color="#fff"
      active-text-color="#ffd04b"
      :default-active="activeIndex"
      >
      <!-- 这是一级菜单 -->
      <el-menu-item index="1">
        <!-- 一级菜单的模板区域 -->
          <!-- 图标 -->
          <i class="el-icon-user"></i>
          <!-- 文本 -->
          <span>个人信息</span>
        </el-menu-item>     
      <el-menu-item index="2">
        <i class="el-icon-location"></i>
        <span>收货地址</span>
      </el-menu-item>
    </el-menu>
    </el-aside>
    <!-- 中间主体 -->
    <el-main>
              <el-form ref="preForm" :rules="profileRules" :model="profileData"   label-width="70px" class="pro-form" hide-required-asterisk >
          <!-- 账户 -->
          <el-form-item prop="username" label="账户">
            <el-input v-model="profileData.username" ></el-input>
          </el-form-item>
          <!-- 性别 -->
          <el-form-item label="性别">
            <el-radio-group v-model="profileData.sex">
              <el-radio  :label="0">男</el-radio>
              <el-radio  :label="1">女</el-radio>
            </el-radio-group>
          </el-form-item>
          <!-- 手机号 -->
          <el-form-item prop="cellPhoneNumber" label="手机号">
            <el-input v-model="profileData.cellPhoneNumber" ></el-input>
          </el-form-item>
          <!-- 邮箱 -->
          <el-form-item prop="email" label="邮箱">
            <el-input  v-model="profileData.email" ></el-input>
          </el-form-item>
          <!-- 密码 -->
          <el-form-item prop="password" label="密码" >
            <el-input v-model="profileData.password" placeholder="请输入密码" type="password"  autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item prop="checkPass" label="确认密码" >
            <el-input  v-model="profileData.checkPass" placeholder="请确认密码" type="password"  autocomplete="off"></el-input>
          </el-form-item>
          <!-- 注册按钮 -->
          <el-form-item>
            <el-button type="primary" @click="submitForm('preForm')" class="btn-pro" >保存</el-button>
          </el-form-item>
        </el-form> 
    </el-main>
  </el-container>
  <!-- 底部导航 -->
   <el-footer>
     <bot-nav-bar/>
   </el-footer>
</el-container>
</template>

<script>
  import TopNavBar from 'components/content/topNavBar/TopNavBar'
  import BotNavBar from 'components/content/botNavBar/BotNavBar'


  export default {
    name: 'Profile',
    components: {
      TopNavBar,
      BotNavBar
    },
    data() {
       var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.profileData.checkPass !== '') {
            this.$refs.preForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.profileData.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        activeIndex: '1',
        profileData:{
          username:'123',
          sex:0,
          cellPhoneNumber: '12345678910',
          email:'13@12.com',
          password:'',
          checkPass:''
        },
        profileRules:{
          password: [
            { validator: validatePass, trigger: 'blur' },
             { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' },
             { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
          ]
        }

      }
    },
    methods: {
          submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('注册成功');
            console.log(this.profileData);
          } else {
            alert('error submit!!');
            return false;
          }
        });
      }
    }

  }
</script>

<style scoped>
  .el-container{
    height: 100vh;
    width: 100%;
    /* background-color:skyblue ; */
  }

  .el-aside{
    /* height: 100%; */
    background-color: #333744;
  }

  .el-menu{
    border-right: none;
  }

  .el-main{
    height: 100%;
  
  }

  .el-footer{
    width: 100%;
    /* background-color: tomato; */
  }


/* 表单样式 */
.pro-form{
  width: 40%;
}
  /* 保存按钮 */
  .btn-pro{
    position: absolute;
    left: 50%;
    width: 80px;
    height: 30px;
    line-height: 8px;
    text-align: center;
    margin-left: -80px;
  }
</style>
import Vue from 'vue'
import VueRouter from 'vue-router'

// 懒加载
  const Home = () => import('views/home/Home')
  const Category = () => import('views/category/Category')
  const Cart = () => import('views/cart/Cart')
  const Profile = () => import('views/profile/Profile')
  const Detail = () => import('views/detail/Detail')
  const Login = () => import('views/login/Login')
  const Register = () => import('views/register/Register')
  const ServeEndLogin =() => import('views/serveEndLogin/ServeEndLogin')
// 1.安装插件
Vue.use(VueRouter)

// 2.配置路由信息
const routes = [
  {
    path: '/',
    redirect: '/home'  //重定向到首页
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/detail/:iid',
    component: Detail
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/serveEndLogin',
    component: ServeEndLogin
  }

]

// 3.创建router

const router = new VueRouter({
  mode: 'history',
  routes
})

// 4.导出
export default router
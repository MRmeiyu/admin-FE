import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/libs/components/HelloWorld';
// 项目主路径
import PageIndexRouters from '@/libs/components/pageIndex/router';

// login
const Login = resolve => require(['@/libs/components/login/Index'], resolve);

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Root',
      redirect: '/page-index'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    ...PageIndexRouters,
  ]
});

// 全局路由验证登陆状态
router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && sessionStorage.getItem('userInfo')) {
    next({
      name: 'Login',
    });
  } else {
    next();
  }
});

export default router;

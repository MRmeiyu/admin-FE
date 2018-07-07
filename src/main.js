// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

// 组件以及组件样式
import '@/assets/style/index.scss';
import Element from 'element-ui';
Vue.use(Element);

Vue.config.productionTip = false;

// 指定组件的渲染和观察期间未捕获错误的处理函数
Vue.config.errorHandler = function (err, vm) {
  console.log(err, vm);
  throw err;
};

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});

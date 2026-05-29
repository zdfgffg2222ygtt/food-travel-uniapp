import Vue from 'vue';
import App from './App';

Vue.config.productionTip = false;

// 引入全局 mock 数据
import './common/mock.js';

App.mpType = 'app';

const app = new Vue({
    ...App
});
app.$mount();

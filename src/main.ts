import { createApp } from 'vue';
import { createPinia } from 'pinia';

import TDesign from 'tdesign-vue-next';
// 引入组件库全局样式资源

import App from './App.vue';
import router from './router';

/**
 * 导入全局样式
 *  ！！！顺序不可随意修改！！！
 */
import 'uno.css';
import 'tdesign-vue-next/es/style/index.css';
import '@/assets/css/main.css';
import '@/assets/css/common.less';

// 引入svg图标
import 'virtual:svg-icons-register';

console.info('环境变量:', import.meta.env);

const app = createApp(App);

app.use(createPinia());
app.use(TDesign);
app.use(router);

app.mount('#app');

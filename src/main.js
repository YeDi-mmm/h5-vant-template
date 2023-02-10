import { createApp } from 'vue'
import App from './App.vue'
import i18n from './lang/index.js'
import '@/style/index.scss'
import router from './router';
import pinia from './pinia';
import vant from '@/utils/vant_import_plugin'
import 'vant/lib/index.css'
import 'amfe-flexible'

import './permission'

createApp(App)
  .use(i18n)
  .use(router)
  .use(pinia)
  .use(vant)
  .mount('#app')
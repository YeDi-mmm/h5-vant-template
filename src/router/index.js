import { createRouter, createWebHashHistory } from 'vue-router';
import baseRouters from './modules/app.js';

const routes = [...baseRouters];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return {
      el: '#app',
      top: 0,
      behavior: 'smooth',
    };
  },
});

export default router;


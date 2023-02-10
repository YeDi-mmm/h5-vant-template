export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home.vue'),
    meta: { title: 'home' }
  },
  {
    path: '/activity',
    name: 'activity',
    component: () => import('@/views/activity.vue'),
    meta: { title: 'activity' }
  },
  {
    path: '/game-inlet',
    name: 'game-inlet',
    component: () => import('@/views/game-inlet.vue'),
    meta: { title: 'game-inlet' }
  },
  {
    path: '/setting',
    name: 'setting',
    component: () => import('@/views/setting.vue'),
    meta: { title: 'setting' }
  },
  {
    path: '/wallet',
    name: 'wallet',
    component: () => import('@/views/wallet.vue'),
    meta: { title: 'wallet' }
  },
  {
    path: '/more',
    name: 'more',
    component: () => import('@/views/more/index.vue'),
    meta: { 
      title: 'more',
      isFull: true
    }
  }
];
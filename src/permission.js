import router from '@/router'
import pinia from '@/pinia/index.js'
import { showCover } from './pinia/modules/app.js'

const coverStore = showCover(pinia);

router.beforeEach((to, from) => {
  if (to.meta.isFull) {
    coverStore.SET_LOCALE(true)
  } else {
    coverStore.SET_LOCALE(false)
  }

  return true
})
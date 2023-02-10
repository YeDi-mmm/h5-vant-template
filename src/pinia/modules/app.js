import { defineStore } from 'pinia';
import { getLanguage } from '@/lang/index' // 获取当前默认语言
import Cookies from "js-cookie";

export const appLangStore = defineStore('language', {
  state: () => {
    return {
      language: getLanguage(),
    }
  },
  actions: {
    SET_LOCALE(locale) { // 语言切换
      this.language = locale
      Cookies.set('language', locale)
    }
  }
})

export const showCover = defineStore('show-cover', {
  state: () => {
    return {
      isShowCover: false,
    }
  },
  actions: {
    SET_LOCALE(value) { // 是否需要影藏上下bar
      this.isShowCover = value
    }
  }
})
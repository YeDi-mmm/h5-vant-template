import { createI18n } from 'vue-i18n'
import Cookies from "js-cookie";

import zhLocale from './zh'
import enLocale from './en'

// 语言库
const messages = {
  en: {
    ...enLocale,
  },
  zh: {
    ...zhLocale,
  }
}

// 默认语言
export function getLanguage() {
  const chooseLanguage = Cookies.get('language')
  if (chooseLanguage && !(chooseLanguage === 'undefined')) return chooseLanguage
  // if has not choose language
  const language = (navigator.language || navigator.browserLanguage).toLowerCase()
  const locales = Object.keys(messages)
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale
    }
  }
  return 'en'
}

const i18n = createI18n({
  legacy: false,
  locale: getLanguage(), // 默认显示的语言
  fallbackLocale: 'en', // 预设的语言环境
  silentTranslationWarn: true, // 禁止本地化失败警告
  // set locale messages
  messages,
})

export default i18n; // 将i18n暴露出去，在main.js中引入挂载

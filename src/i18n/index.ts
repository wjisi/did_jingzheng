import { createI18n } from 'vue-i18n'
import ZH from './zh-CN.json'

const messages = {
  zh: ZH,
}

export default createI18n({
  legacy: false,
  locale: 'zh', // default language
  messages,
})

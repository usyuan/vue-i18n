import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
let lang = window.language; //為public/index.html中引入language.js的物件
export default new VueI18n({
  locale: "en",
  messages: lang,
});


// 引入src/locales資料夾底下的json檔，用正規表達式篩選檔名，並用檔名作為語言key(如:en、zh-TW)
// function loadLocaleMessages () {
//   const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
//   const messages = {}
//   locales.keys().forEach(key => {
//     const matched = key.match(/([A-Za-z0-9-_]+)\./i)
//     if (matched && matched.length > 1) {
//       const locale = matched[1]
//       messages[locale] = locales(key)
//     }
//   })
//   return messages
// }

// export default new VueI18n({
//   locale: process.env.VUE_APP_I18N_LOCALE || 'en',
//   fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
//   messages: loadLocaleMessages()
// })

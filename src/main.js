import Vue from "vue"
import ElementUI from "element-ui"
import locale from "element-ui/lib/locale/lang/ru-RU"
import App from "./App.vue"
import { store } from "./store"

import "normalize.css"
import "./assets/styles/main.css"
import "element-ui/lib/theme-chalk/index.css"

Vue.use(ElementUI, { locale, size: "small" })

// eslint-disable-next-line no-new
new Vue({
  el: "#app",
  store,
  render: h => h(App),
})

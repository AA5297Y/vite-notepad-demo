import { createApp } from 'vue'

import '@/index.css'
import '@/assets/iconfont/iconfont.css'

import routers from '@/router/index.js'
import App from '@/App.vue'
import i18n from "@/i18n/i18n.js";
import BoxUI from "./components/Generic/BoxUI";

const app =createApp(App)
  .use(routers)
  .use(i18n)
  .use(BoxUI)
  .mount('#app')

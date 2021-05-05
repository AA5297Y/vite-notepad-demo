import { createApp } from 'vue'

import routers from '@/router/index.js'

import App from '@/App.vue'
import '@/index.css'

import i18n from "@/i18n/i18n.js";

import '@/assets/iconfont/iconfont.css'

const app =createApp(App)
  .use(routers)
  .use(i18n)
  .mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { router } from "@scaling/router";

createApp(App)
  .use(router)
  .mount('#app')

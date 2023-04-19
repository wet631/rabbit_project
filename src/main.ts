import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
// 让所有浏览器初始化样式统一，并不是清除所有的margin padding 之类的
import 'normalize.css'
// 导入自己的公共样式
import '@/assets/styles/common.less'
import router  from '@/router'

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')

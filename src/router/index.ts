import { createRouter, createWebHashHistory } from 'vue-router'
// 除了登录以外都要加载 不建议懒加载
import Layout from '@/views/layout/index.vue'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Layout
    },
    {
      path: '/login',
      component: () => import('@/views/login/index.vue')
    }
  ]
})
export default router
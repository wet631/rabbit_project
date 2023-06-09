import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 标准用法 npm i @types/node -D ：node 的语法要require ,要安装一个类型生命文件
// const path = require('path')
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),vueSetupExtend()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    } 
  },
  //配置css全局注入
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `
          @import "@/assets/styles/variables.less";
          @import "@/assets/styles/mixins.less";
        `
      }
    }
  }
})

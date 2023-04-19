import { defineStore } from 'pinia'
import request from '@/utils/request'
import { ApiRes, CategoryItem } from '@/types/data'


export default defineStore('category', {
  state: () => ({
    // list[]和 res.data.result 类型不统一会报错  数组包对象加[]
    list:[] as CategoryItem[]
  }),
  getters:{

  },
  actions:{
    async getAllCategory() {
      const res = await request.get<ApiRes<CategoryItem[]>>('/home/category/head')
      // console.log(res.data.result)
      this.list = res.data.result
    },
  }
})
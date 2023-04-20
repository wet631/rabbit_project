import { defineStore } from 'pinia'
import request from '@/utils/request'
import { ApiRes, CategoryItem } from '@/types/data'
import {topCategory} from '../constants'

const defaultCategory = topCategory.map((item)=>{
   return {
    name:item
   }
})

export default defineStore('category', {
  state: () => ({
    // list[]和 res.data.result 类型不统一会报错  数组包对象加[]
    list:defaultCategory as CategoryItem[]
  }),
  getters:{

  },
  actions:{
    async getAllCategory() {
      const res = await request.get<ApiRes<CategoryItem[]>>('/home/category/head')
      // console.log(res.data.result)

      // 这里是对后台返回的数据进行加工 新增一个属性open 标记弹层显示隐藏
      // 默认都是隐藏
      res.data.result.forEach(item =>{
        item.open = false
      })
      this.list = res.data.result
    },
    show(id:string){
      const itemObj = this.list.find(item => item.id === id)
      itemObj!.open = true
    },
    hide(id:string){
      const itemObj = this.list.find(item => item.id === id)
      itemObj!.open = false
    }
  }
})
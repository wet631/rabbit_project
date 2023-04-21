// 全局组件的类型 这样才能识别
import XtxSkeleton from '@/components/skeleton/index.vue'
import XtxCarousel from '@/components/carousel/index.vue'
declare module 'vue' {
  export interface GlobalComponents {
    // 组件名     组件类型
    XtxSkeleton: typeof XtxSkeleton,
    XtxCarousel: typeof XtxCarousel
  }
}
export {}
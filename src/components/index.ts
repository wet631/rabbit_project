// 这个是一个插件文件 ，统一注册全局组件 
import XtxSkeleton from "@/components/skeleton/index.vue";
import XtxCarousel  from '@/components/carousel/index.vue'
import {App} from 'vue'
export default {
    // app创建出来的应用实例 => 类型是固定的 => vue库会提供好的实例类型
    install(app:App){
        app.component(XtxSkeleton.name,XtxSkeleton)
        app.component(XtxCarousel .name,XtxCarousel )
    }
}


<script lang="ts" setup name="AppHeaderSticky">
import { onBeforeUnmount, onMounted, ref } from "vue";
import AppHeaderNav from "./app-header-nav.vue";
import { useWindowScroll } from '@vueuse/core'

// function useScorllY() {
//   // 监听滚动条的滚动，获取滚动的距离 当滚动的距离大于78时 动态设置show
//   // 要等dom加载玩成 monted
//   onMounted(() => {
//     window.addEventListener("scroll", onScorll);
//   });
//   // 解绑
//   onBeforeUnmount(() => {
//     window.removeEventListener("scroll", onScorll);
//   });
//   const y = ref(0);

//   const onScorll = () => {
//     const scorllTop =
//       document.documentElement.scrollTop || document.body.scrollTop;
//     y.value = scorllTop;
//   };
// //   外层要用到要导出 
//   return y
// }
// const y = useScorllY()
// 控制是否显示吸顶组件
const { y } = useWindowScroll()
</script>

<template>
  <div class="app-header-sticky" :class="{ show: y >= 78 }">
    <div class="container" v-if="y >= 78">
      <RouterLink class="logo" to="/" />
      <AppHeaderNav />
      <div class="right">
        <RouterLink to="/">品牌</RouterLink>
        <RouterLink to="/">专题</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.app-header-sticky {
  width: 100%;
  height: 80px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
  //   让其隐藏
  transform: translateY(-100%);
  &.show {
    transition: all 0.3s linear;
    transform: translateY(0%);
  }
  .container {
    display: flex;
    align-items: center;
  }
  .logo {
    width: 200px;
    height: 80px;
    background: url(@/assets/images/logo.png) no-repeat right 2px;
    background-size: 160px auto;
  }
  .right {
    width: 220px;
    display: flex;
    text-align: center;
    padding-left: 40px;
    border-left: 2px solid @xtxColor;
    a {
      width: 38px;
      margin-right: 40px;
      font-size: 16px;
      line-height: 1;
      &:hover {
        color: @xtxColor;
      }
    }
  }
}
</style>

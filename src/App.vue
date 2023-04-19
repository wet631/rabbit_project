<template>
  <div class="box">app组件</div>
</template>

<script lang="ts" setup>
import request from '@/utils/request'
const test = async () => {
  const res = await request.get('/home/index')
  console.log(res)
}
test()
</script>

<style lang="less" >
.box {
  width: 300px;
  height: 300px;
  background-color: @xtxColor;
  .hoverShadow()
}
</style>
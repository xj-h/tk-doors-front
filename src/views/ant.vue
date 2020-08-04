<template>
  <div id="components-layout-demo-basic">
    <div>
    <a-row>
      <a-col :span="4">
      </a-col>
      <a-col :span="16">
       <a href="https://fanyi.baidu.com/#auto/zh/">官网</a>  <a>翻译API</a> <a>关于我们</a>
      </a-col>
      <a-col :span="4">
      </a-col>
    </a-row>
       </div>
    <a-layout>
      <a-layout-header style="height: xxl"></a-layout-header>
      <a-layout>
        <a-layout-sider></a-layout-sider>
        <a-layout-content><img src="../assets/tes.png"></a-layout-content>
         <a-layout-sider></a-layout-sider>
      </a-layout>
      <a-layout-footer></a-layout-footer>
    </a-layout>
  </div>

</template>
<script>
export default {
  data () {
    return {
      backimg: '../assets/tes.png'
    }
  }
}
</script>
<style>

</style>

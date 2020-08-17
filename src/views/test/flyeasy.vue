<template>
  <div>
    <div class="main com">
      main
    </div>
    <div class="left com">
      left
    </div>
    <div class="right com">
      right
    </div>
  </div>
</template>
<style>
.com{
    float: left;
}
.main{
    margin: 0 200px 0 200px;
    width: 100%;
    background: black;
}
.left{
    width: 200px;
    left: 0;
    background: red;
    position: absolute;
}
.right{
    width: 200px;
    right: 0;
    background: yellow;
    position: absolute;
}
.clerfix:after{
    content: '';
    clear: both;
}
</style>

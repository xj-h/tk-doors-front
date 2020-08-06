<template>
  <div>
    <div>header</div>
    <div id="main" class="col">
      <div id="war-main">
        main
      </div>
    </div>
    <div id="left" class="col">
      left
    </div>
    <div id="right" class="col">
      right
    </div>
    <div id="foot">
      footer
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {},
  created() {},
  methods: {}
}
</script>
<style scoped>
.col {
float: left
}
#war-main {
  margin: 0 200px 0 200px
}
#foot {
 background-color: bisque;
}
#left {
width: 200px;
height: 200px;
background-color: red;
margin-left: -100%;
}
#main {
  width:100%;
  height: 200px;
  background-color: blue;
}
#right {
  width: 200px;
  height: 200px;
  background-color: yellow;
  margin-left: -200px;
}
#clearfix:after {
  contain: '';
  display: table;
  clear: both;
}
</style>>

<template>
  <div class="wrap login">
    <div class="fr login-content">
      <div class="login-head">
        <slot name="head" />
      </div>
      <div class="login-from">
        <slot name="content" />
      </div>
    </div>
    <div class="login-register-bg">
      <img src="../../assets/imgs/login_bg.png" alt="" height="100%">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msgLogin: false
    }
  },
  methods: {
    selectType(type) {

    }
  }
}
</script>

<style scoped>
.login {
  height: 772px;
  position: relative;
  margin: 75px auto 100px;
  background-color: #fff;
  overflow: hidden;
}
.login-content {
  padding-left: 196px;
  width: 797px;
}
.login-register-bg{
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
}
.login-head {
  height: 60px;
  line-height: 60px;
  font-size: 20px;
  color: #242424;
  border-bottom: 1px solid #dddddd;
}
.login-from {
  padding: 80px 30px;
  font-size: 18px;
}
</style>

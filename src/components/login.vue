<template>
  <div class="login mt15 back-white container">
    <form class="layui-form layui-form-pane" method="post">
      <div class="layui-form-item">
        <label for="L_email" class="layui-form-label">邮箱</label>
        <div class="layui-input-inline">
          <input type="text" id="L_email" name="email" class="layui-input" placeholder="请输入您的邮箱" v-model="loginObj.account">
        </div>
      </div>
      <div class="layui-form-item">
        <label for="L_pass" class="layui-form-label">密码</label>
        <div class="layui-input-inline">
          <input type="password" id="L_pass" name="pass" class="layui-input" placeholder="请输入您的密码" v-model="loginObj.password">
        </div>
      </div>
      <div class="layui-form-item">
        <button type="button" class="layui-btn" @click="login">立即登录</button>
      </div>
    </form>
  </div>
</template>
<script>
import api from './../api/api.js'

export default{
  mixins: [api],
  data () {
    return {
      loginObj: {
        account: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.loginAPI(this.loginObj)
    }
  }
}
</script>
<style>
.login{padding:20px}
</style>

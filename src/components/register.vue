<template>
  <div class="register mt15 back-white container">
    <form class="layui-form layui-form-pane" method="post">
      <div class="layui-form-item">
        <label for="L_email" class="layui-form-label">邮箱</label>
        <div class="layui-input-inline">
          <input type="text" id="L_email" name="email" class="layui-input" placeholder="将会成为您唯一的登入名" v-model="registerObj.account">
        </div>
      </div>
      <div class="layui-form-item">
        <label for="L_username" class="layui-form-label">昵称</label>
        <div class="layui-input-inline">
          <input type="text" id="L_username" name="username" class="layui-input" placeholder="请输入您的昵称" v-model="registerObj.name" maxlength="18">
        </div>
      </div>
      <div class="layui-form-item">
        <label for="L_pass" class="layui-form-label">密码</label>
        <div class="layui-input-inline">
          <input type="password" id="L_pass" name="pass" class="layui-input" placeholder="6到16个字符" v-model="registerObj.password" minlength="6" maxlength="16">
        </div>
      </div>
      <div class="layui-form-item">
        <label for="L_repass" class="layui-form-label">确认密码</label>
        <div class="layui-input-inline">
          <input type="password" id="L_repass" name="repass" class="layui-input" placeholder="请确认您的密码" v-model="registerObj.confirmPassword" minlength="6" maxlength="16">
        </div>
      </div>
      <div class="layui-form-item">
        <button type="button" class="layui-btn" @click="register">立即注册</button>
      </div>
    </form>
  </div>
</template>
<script>
import api from './../api/api.js'

export default {
  mixins: [api],
  data () {
    return {
      registerObj: {
        name: '',
        account: '',
        password: '',
        confirmPassword: ''
      }
    }
  },
  methods: {
    register () {
      this.registerAPI(this.registerObj)
    }
  }
}
</script>
<style>
.register{padding:15px}
</style>

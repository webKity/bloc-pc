<template>
  <div class="header">
    <div class="dfb container align-center header-pad">
      <router-link class="mr10 white-color font24" to="/">Blog</router-link>
      <div v-if="user.name" class="layui-btn-group wp100 tr">
        <router-link tag="button" to="/userCenter" type="button" class="layui-btn layui-btn-small">{{user.name}}</router-link>
        <button type="button" class="layui-btn layui-btn-small" @click="exit">退出登录</button>
      </div>
      <div v-else class="layui-btn-group wp100 tr">
        <router-link tag="button" to="/login" type="button" class="layui-btn layui-btn-small">登录</router-link>
        <router-link tag="button" to="/register" type="button" class="layui-btn layui-btn-small">注册</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState({
      user: state => state.user.user
    })
  },
  methods: {
    exit () {
      this.$store.dispatch('exit')
    }
  }
}
</script>
<style>
.header{position:relative;background-color:#393d49;height:60px;}
.gray-input-bg{background-color: #eee;border:none;color:#333;height:30px;line-height:30px;border:none}
.header-pad{height:60px;}
</style>

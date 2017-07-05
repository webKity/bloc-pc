<template>
  <div id="app">
    <blog-head></blog-head>
    <div class="app-content">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
    <blog-foot></blog-foot>
  </div>
</template>

<script>
import blogHead from './components/common/head.vue'
import blogFoot from './components/common/foot.vue'
export default {
  components: {blogHead, blogFoot}
}
</script>
<style>
@import "./assets/css/layui.css";
@import "./assets/css/base.css";
@import "./assets/css/markdown.css";
@import "./assets/css/font.css";
@import "./assets/css/ani.css";
@import "./assets/css/grid.css";
@import "./assets/css/style.css";
.app-content{min-height: calc(100vh - 119px)}
</style>

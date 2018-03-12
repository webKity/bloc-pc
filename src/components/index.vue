<template>
  <div class="index">
    <div class="inde-search-bg">
      <form slot="content" class="container">
        <div class="wp25 dfb index-search" style="min-width:300px;">
          <input type="text" name="search" autocomplete="off" placeholder="请输入关键字" class="layui-input no-radius">
          <button type="button" class="layui-btn white-color no-radius"><i class="icon-search vm"></i></button>
        </div>
      </form>
    </div>
    <blog-body class="container">
      <blog-tabbar slot="left" :labels="labels" :size="barSize">
        <blog-tabbar-item :name="0">
          <post-list></post-list>
        </blog-tabbar-item>
        <blog-tabbar-item :name="1">
          <post-list :type="2"></post-list>
        </blog-tabbar-item>
        <blog-tabbar-item :name="2">
          <post-list :type="0"></post-list>
        </blog-tabbar-item>
        <blog-tabbar-item :name="3">
          <post-list :type="1"></post-list>
        </blog-tabbar-item>
      </blog-tabbar>
      <div slot="right">
        <div class="back-white tc create-post-btn-box row">
          <p class="dark-gray-color font14 mb15"><i class="icon-user vm mr10"></i>少年，发个骚吧？！</p>
          <router-link to="/createBlog" type="button" class="layui-btn" style="width:100%"><i class="icon-feather vm mr05"></i> 我去年买了个表</router-link>
        </div>
        <div class="back-white tc create-post-btn-box row mt05">
          <div class="tl font14">友情链接</div>
          <div class="friendship-links tl">
            <a class="friendship-link ellipsis" target="blank" href="http://www.jiaozula.cn"><i class="icon-finger vm green-color"></i> 交租啦--最好用的交租神器</a>
            <a class="friendship-link ellipsis" target="blank" href="http://cn.bing.com"><i class="icon-finger vm green-color"></i> 必应--最懂你的搜索引擎</a>
            <a class="friendship-link ellipsis" target="blank" href="https://eggjs.org"><i class="icon-finger vm green-color"></i> egg--这是一个神奇的蛋</a>
            <a class="friendship-link ellipsis" target="blank" href="https://cn.vuejs.org"><i class="icon-finger vm green-color"></i> vue--这可能是最简单的单页面框架</a>
            <a class="friendship-link ellipsis" target="blank" href="http://www.layui.com"><i class="icon-finger vm green-color"></i> layui--好看的UI</a>
            <a class="friendship-link ellipsis" target="blank" href="https://cnodejs.org"><i class="icon-finger vm green-color"></i> cnode--专业的nodejs社区</a>
            <a class="friendship-link ellipsis" target="blank" href="http://v3.bootcss.com"><i class="icon-finger vm green-color"></i> bootstrap--可能是最多人用的UI框架</a>
            <a class="friendship-link ellipsis" target="blank" href="https://segmentfault.com"><i class="icon-finger vm green-color"></i> segmentfault--中国领先的开发者技术社区</a>
          </div>
        </div>
      </div>
    </blog-body>
  </div>
</template>
<script>
import blogBody from './common/body.vue'
import particleBg from './common/particleBg.vue'
import blogTabbar from './frame/tabbar/tabbar'
import blogTabbarItem from './frame/tabbar/tabbarItem'
import postList from './postList.vue'

export default {
  components: {blogBody, particleBg, blogTabbar, blogTabbarItem, postList},
  data () {
    return {
      labels: [
        {label: '全部', active: 0},
        {label: '精华', active: 1},
        {label: '文章', active: 2},
        {label: '问答', active: 3}
      ],
      barSize: 'big'
    }
  }
}
</script>
<style>
.create-post-btn-box{padding:15px;}
.friendship-links{margin-top:10px;border-top: 1px solid #f0f0f0;padding-top:10px;}
.friendship-link{height:25px;line-height:25px;display:inline-block;width:100%;color:#333}
.inde-search-bg{position:relative;width:100%;height:300px;background-image: url(./../assets/img/index/bg.gif);}
.index-search{position:absolute;left:50%;top:50%;transform: translate(-50%, -100%);}
</style>

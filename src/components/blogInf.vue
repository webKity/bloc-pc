<template>
  <div class="blog-inf container back-white">
    <h1 class="font28 pt30">{{ blogInf.title }}</h1>
    <hr>
    <blockquote class="layui-elem-quote mt10 dark-gray-color">作者：{{ blogInf.name }} <br />更新时间：{{ blogInf.update_time | formatDate }}</blockquote>
    <div class="markdown-body pl20 pr20 mt30 pb30">
      <div v-html="blogInf.content"></div>
    </div>
    <div class="row pb30">
      <hr />
      <h1 class="font06 color01 pl15 pr15">评论区<span class="grayColor font01">({{ blogInf.comments.length }})</span></h1>
      <hr />
      <div v-for="item in blogInf.comments" class="borderDashed">
        <blog-comment :commentData="item"></blog-comment>
      </div>
      <div class="loadmore">加载更多</div>
      <hr />
      <div class="pl15 pr15 pt20">
        <textarea class="comment-textarea" maxlength="200" v-model="commentContent"></textarea>
      </div>
      <div class="wp100 tr mt20 pb15">
        <button class="layui-btn mr20" type="button" @click="comment">发表评论</button>
      </div>
    </div>
  </div>
</template>
<script>
import api from './../api/api.js'
import blogComment from './common/comment.vue'

export default {
  mixins: [api],
  components: {blogComment},
  data () {
    return {
      blogInf: {},
      commentContent: '',
      commentDatas: []
    }
  },
  methods: {
    async getBlogInf () {
      this.blogInf = await this.queryBlogInfAPI(this.$route.params)
    },
    comment () {
      this.$http.post('/api/comment/create', {}, {
        params: {
          blogId: this.blogInf.id,
          from: this.user.id,
          to: this.blogInf.author,
          comment: this.commentContent
        }
      }).then((response) => {
        let result = response.body
        result.fromName = this.user.name
        this.blogInf.comments.push(result)
      }).catch((e) => {
        console.log(e)
        this.$tip(e.body.message)
      })
    }
  },
  created () {
    this.getBlogInf()
  }
}
</script>
<style>
.comment-textarea{width:100%;height:200px;border:1px solid #e2e2e2;border-radius:3px;padding:10px;resize:none}
.loadmore{text-align: center;padding: 20px;}
</style>

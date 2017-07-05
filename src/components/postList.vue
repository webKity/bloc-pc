<template>
  <div class="all-post container">
    <div class="post-list">
      <post-item v-for="(post, index) in posts" :key="index" :post="post"></post-item>
    </div>
    <div class="mt15">
      <blog-paging @changePage="changePage" :totalCount="totalCount" :pageSize="size"></blog-paging>
    </div>
  </div>
</template>
<script>
import api from './../api/api.js'
import blogPaging from './frame/paging/paging.vue'
import postItem from './common/postItem.vue'

export default {
  mixins: [api],
  components: {blogPaging, postItem},
  props: {
    type: {
      type: Number,
      default: -1
    }
  },
  data () {
    return {
      posts: [],
      page: 1,
      size: 10,
      totalCount: 0
    }
  },
  methods: {
    async queryBlogs () {
      let params = {}
      params.type = this.type
      params.page = this.page
      params.size = this.size
      let data = await this.queryBlogListAPI(params)
      if (data.retCode === 200) {
        this.totalCount = data.totle
        this.posts = data.result
      }
    },
    changePage (curentPage) {
      this.page = curentPage
      this.queryBlogs()
    }
  },
  created () {
    this.queryBlogs()
  }
}
</script>

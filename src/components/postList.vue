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
      type: [Number, String],
      default: ''
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
      if (this.type !== '') {
        params.type = this.type
      }
      params.pageNum = this.page
      params.pageSize = this.size
      try {
        this.posts = await this.queryBlogListAPI(params)
      } catch (e) {
        console.log(e)
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

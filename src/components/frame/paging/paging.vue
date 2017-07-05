<template>
  <div class="blog-paging blog-page-content">
    <div class="first-page layui-btn layui-btn-primary layui-btn-small" @click="changePage(0)">首页</div>
		<div class="prev-page layui-btn layui-btn-primary layui-btn-small" @click="changePage(-1)">上一页</div>
		<div class="page-num ml05 mr05 vm font02">
			<span class="nowPage">{{ curentPage }}</span>/<span class="totalPage">{{ totalPage }}</span>
		</div>
		<div class="next-page layui-btn layui-btn-primary layui-btn-small" @click="changePage(1)">下一页</div>
		<div class="last-page layui-btn layui-btn-primary layui-btn-small" @click="changePage(2)">末页</div>
  </div>
</template>
<script>
export default {
  props: {
    totalCount: {
      type: Number,
      default: 0
    },
    pageSize: {
      type: Number,
      default: 10
    }
  },
  data () {
    return {
      curentPage: 1
    }
  },
  computed: {
    totalPage () {
      let totalPage = Math.ceil(this.totalCount / this.pageSize)
      return totalPage > 0 ? totalPage : 1
    }
  },
  methods: {
    changePage (type) {
      if (type === 0) {
        this.curentPage = 1
      } else if (type === -1 && this.curentPage > 1) {
        this.curentPage = this.curentPage - 1
      } else if (type === 1 && this.curentPage < this.totalPage) {
        this.curentPage = this.curentPage + 1
      } else if (type === 2) {
        this.curentPage = this.totalPage
      }
      this.$emit('changePage', this.curentPage)
    }
  }
}
</script>
<style>
.page-num{display:inline-block;}
</style>

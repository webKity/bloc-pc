<template>
  <div class="post-item cp" @click="toInf(post.id)">
    <div class="post-author-head back-img fl"></div>
    <div class="post-inf ml15 fl">
      <div class="light-gray-color font13">
        <span class="mr10">{{ post.name }}</span>
        <span>{{ post.updata_time | formatDate }}</span>
      </div>
      <div class="font16 ellipsis" style="margin-top:8px;">{{ post.title }}</div>
    </div>
  </div>
</template>
<script>
export default{
  props: {
    post: {
      type: Object,
      default: {}
    }
  },
  methods: {
    toInf (id) {
      this.$router.push('/blogInf/' + id)
    }
  }
}
</script>
<style>
.post-item{padding:10px 0;border-bottom:1px solid #f0f0f0;display:inline-block;width:100%}
.post-item:hover{background-color:#f2f2f2;border-right:3px solid #009688}
.post-item:active{opacity:0.7}
.post-item:first-child{border-top:1px solid #f0f0f0}
.post-author-head{width:45px;height:45px;background-color:#ccc}
.post-inf{width:calc(100% - 60px)}
.post-save-see{width:80px;height: 47px;padding:5px;}
</style>

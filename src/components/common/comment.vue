<template>
  <div class="cmonment dib wp100">
    <div class="wp05 tc fl"><i class="layui-icon font03">&#xe612;</i></div>
    <div class="wp95 fl">
      <div class="cmonment-base">
        <router-link class="color01 font01 dib" to="/userCenter">{{ commentData.fromName }}</router-link>
        <span class="grayColor font01 dib ml10">{{ commentData.createTime }}</span>
      </div>
      <div class="comment-word textColor mt10">{{ commentData.comment }}</div>
      <div class="dib color01 wp100 mt10 font01">
        <span class="dib cp hover-effect"><i class="layui-icon vm">&#xe60c;</i> <span class="dib vm">赞</span></span>
        <span class="dib ml10 cp hover-effect" @click="openComment(commentData.fromName, commentData.from_id)"><i class="layui-icon vm">&#xe611;</i> <span class="dib vm">回复</span></span>
      </div>
      <div class="wp100 dib fl pr20 boxSize">
        <div class="back07 wp100 pl20 pr20 pt05 pb20 mt20 dib fl boxSize">
          <div v-for="child in children" class="wp100 dib fl pt15">
            <div class="dib wp100 fl">
              <router-link class="dib wp10 fl ellipsis color01" to="/userCenter">@{{ child.toName }}</router-link>
              <span class="dib wp90 fl">{{ child.comment }}</span>
            </div>
            <div class="dib wp100 fl mt10 borderDashed pb15">
              <router-link class="dib wp10 fl ellipsis color01" to="/userCenter">{{ child.fromName }}</router-link>
              <span class="dib wp40 fl grayColor">{{ child.createTime }}</span>
              <div class="fr color01 font01 wp50 tr">
                <span class="dib ml10 cp hover-effect" @click="openComment(child.fromName, child.from_id)"><i class="layui-icon vm">&#xe611;</i> <span class="dib vm">回复</span></span>
              </div>
            </div>
          </div>
          <div class="wp100 mt10 fl dib">
            <span v-if="commentState === false" class="color01 add-repair hover-effect cp dib" @click="openComment(commentData.fromName, commentData.from_id)">添加回复</span>
            <div v-if="commentState === true" class="wp100 dib">
              <div class="wp10 fl pt10 color01 ellipsis">{{ toPerson }}</div>
              <div class="wp80 fl">
                <input type="text" v-model="replyComment" placeholder="管不了辣么多了，先给个好评吧" autocomplete="off" class="layui-input">
              </div>
              <div class="wp10 tc fl">
                <button class="layui-btn layui-btn-primary" type="button" @click="pushReplyComment">发布评论</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'

export default {
  props: ['commentData'],
  data () {
    return {
      commentState: false,
      replyComment: '',
      toPerson: '',
      toName: '',
      toId: '',
      children: []
    }
  },
  computed: {
    ...mapState({
      user: state => state.user.user
    })
  },
  methods: {
    getReplyComment () {
      var that = this
      that.$http.get('/api/comment/query', {
        params: {
          blogId: that.commentData.blog_id,
          parent: that.commentData.id,
          pageNum: 1,
          pageSize: 10
        }
      }).then((response) => {
        this.children = response.body
      }).catch((e) => {
        console.log(e)
        this.$tip(e.body.message)
      })
    },
    openComment (toName, toId) {
      this.toName = toName
      this.toId = toId
      this.toPerson = '@' + this.toName
      this.commentState = true
    },
    closeComment () {
      this.replyComment = ''
      this.commentState = false
    },
    pushReplyComment () {
      if (this.replyComment === '') {
        this.closeComment()
        return
      }
      var param = {}
      param.from = this.user.id
      param.fromName = this.user.name
      param.to = this.toId
      param.toName = this.toName
      param.comment = this.replyComment
      param.parent = this.commentData.id
      param.blogId = this.commentData.blog_id
      this.$http.post('/api/comment/create', {}, {
        emulateHTTP: true,
        emulateJSON: true,
        params: param
      }).then((response) => {
        this.children.push(param)
      })
      this.closeComment()
    },
    getNowTime () {
      var tempTime = new Date()
      var str = ''
      str += tempTime.getFullYear() + '-'
      str += (tempTime.getMonth() + 1) + '-'
      str += tempTime.getDate() + ' '
      str += tempTime.getHours().length < 2 ? ('0' + tempTime.getHours()) : tempTime.getHours() + ':'
      str += tempTime.getMinutes().length < 2 ? ('0' + tempTime.getMinutes()) : tempTime.getMinutes() + ':'
      str += tempTime.getSeconds().length < 2 ? ('0' + tempTime.getSeconds()) : tempTime.getSeconds()
      return str
    }
  },
  created () {
    this.getReplyComment()
  }
}
</script>
<style>
.cmonment{padding:30px 0;border-bottom:1px solid #e2e2e2;}
.cmonment:last-child{border:none}
.borderDashed{border-bottom: 1px dashed rgba(0,0,0,.09);}
</style>

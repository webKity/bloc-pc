<template>
  <div class="cmonment ib wp100">
    <div class="wp5 tc fl"><i class="layui-icon font03">&#xe612;</i></div>
    <div class="wp95 fl">
      <div class="cmonment-base">
        <router-link class="color01 font01 ib" to="/userCenter">{{ commentData.fromName }}</router-link>
        <span class="grayColor font01 ib ml10">{{ commentData.createTime }}</span>
      </div>
      <div class="comment-word textColor mt10">{{ commentData.comment }}</div>
      <div class="ib color01 wp100 mt10 font01">
        <span class="ib cp hover-effect"><i class="layui-icon vm">&#xe60c;</i> <span class="ib vm">赞</span></span>
        <span class="ib ml10 cp hover-effect" @click="openComment(commentData.fromName, commentData.fromId)"><i class="layui-icon vm">&#xe611;</i> <span class="ib vm">回复</span></span>
      </div>
      <div class="wp100 ib fl pr20 boxSize">
        <div class="back07 wp100 pl20 pr20 pt05 pb20 mt20 ib fl boxSize">
          <div v-for="child in children" class="wp100 ib fl pt15">
            <div class="ib wp100 fl">
              <router-link class="ib wp10 fl ellipsis color01" to="/userCenter">@{{ child.toName }}</router-link>
              <span class="ib wp90 fl">{{ child.replyComment }}</span>
            </div>
            <div class="ib wp100 fl mt10 borderDashed pb15">
              <router-link class="ib wp10 fl ellipsis color01" to="/userCenter">{{ child.fromName }}</router-link>
              <span class="ib wp40 fl grayColor">{{ child.createTime }}</span>
              <div class="fr color01 font01 wp50 tr">
                <span class="ib ml10 cp hover-effect" @click="openComment(child.fromName, child.fromId)"><i class="layui-icon vm">&#xe611;</i> <span class="ib vm">回复</span></span>
              </div>
            </div>
          </div>
          <div class="wp100 mt10 fl ib">
            <span v-if="commentState === false" class="color01 add-repair hover-effect cp ib" @click="openComment(commentData.fromName, commentData.fromId)">添加回复</span>
            <div v-if="commentState === true" class="wp100 ib">
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
      that.$http.get('/api/comment/getReplyComment', {
        emulateHTTP: true,
        emulateJSON: true,
        params: {
          commentId: that.commentData.id
        }
      }).then((response) => {
        var data = response.body
        if (data.retCode === '200') {
          that.children = data.result
        } else {
          console.log(data)
          that.$tip('获取回复评论失败')
        }
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
      var that = this
      if (that.replyComment === '') {
        that.closeComment()
        return
      }
      var param = {}
      param.fromId = that.user.id
      param.fromName = that.user.name
      param.toId = that.toId
      param.toName = that.toName
      param.replyComment = that.replyComment
      param.commentId = that.commentData.id
      param.createTime = that.getNowTime()
      that.$http.post('/api/comment/addReplyComment', {}, {
        emulateHTTP: true,
        emulateJSON: true,
        params: param
      }).then((response) => {
        var data = response.body
        if (data.retCode === '200') {
          that.children.push(param)
          console.log(JSON.stringify(that.children))
        } else {
          that.$tip(data.retMsg)
        }
      }, (response) => {
        that.$tip('服务器内部错误(comment/addReplyComment)！')
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

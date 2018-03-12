<template>
  <div class="add-blog container back-white mt05">
    <form class="layui-form wp100">
      <div class="layui-form-item pl20 pr20">
        <div class="layui-input-block tr">
          <button type="button" class="layui-btn" @click="addBlog"> 发 布 </button>
        </div>
      </div>
      <div class="layui-form-item mt20 pl20 pr20">
        <label class="layui-form-label">标题</label>
        <div class="layui-input-block">
          <input type="text" class="layui-input" v-model="addBlogForm.title" placeholder='请输入博客的标题（最多45字符）' maxlength=45 />
        </div>
      </div>
      <div class="layui-form-item pl20 pr20">
        <label class="layui-form-label">类型</label>
        <div class="layui-input-block">
          <blog-select :datas="types" @selectEvent="selectEvent"></blog-select>
        </div>
      </div>
      <div class="layui-form-item layui-form-text pl20 pr20">
        <label class="layui-form-label">正文</label>
        <div class="layui-input-block">
          <mavonEditor :toolbars="toolbars" @change="editerContent"/>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import api from './../api/api.js'
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import blogSelect from './frame/select/select.vue'

export default {
  mixins: [api],
  components: {mavonEditor, blogSelect},
  data () {
    return {
      addBlogForm: {
        title: '',
        type: 0,
        content: ''
      },
      inputContent: '',
      uploadUrl: '',
      types: [
        {label: '文章', val: 0, default: true},
        {label: '问答', val: 1}
      ],
      toolbars: {
        bold: true,
        italic: true,
        header: true,
        underline: true,
        strikethrough: true,
        mark: true,
        superscript: true,
        subscript: true,
        quote: true,
        ol: true,
        ul: true,
        link: true,
        imagelink: true,
        code: true,
        table: true,
        subfield: false,
        fullscreen: true,
        readmodel: false,
        htmlcode: false,
        help: false
      }
    }
  },
  methods: {
    async addBlog () {
      let data = await this.createPostAPI(this.addBlogForm)
      if (data === '发布成功') {
        this.$tip(data)
        this.$router.push('/index')
      }
    },
    selectEvent (val) {
      this.addBlogForm.type = val.val
    },
    editerContent (val, html) {
      this.addBlogForm.content = html
    }
  }
}
</script>
<style>
.add-blog{padding-top:20px;padding-bottom:40px;padding-left:15px;padding-right:15px;}
.add-blog .layui-form-label{width:43px;padding-left:0}
.layui-input-block{margin-left:43px;}
.del-tag-btn{display:inline-block;position:relative;width:14px;height:14px;border:1px solid #c2c2c2;border-radius:50%;cursor:pointer;margin-left:5px;vertical-align:middle;}
.del-tag-btn:before {width: 10px;height: 1px;background-color: #c2c2c2;content: "";display: inline-block;-moz-transform: rotate(45deg);-ms-transform: rotate(45deg);-webkit-transform: rotate(45deg);transform: rotate(45deg);position:absolute;left:2px;top:6px;}
.del-tag-btn:after {width: 10px;  height: 1px;background-color: #c2c2c2;content: "";display: inline-block;-moz-transform: rotate(-45deg);-ms-transform: rotate(-45deg);-webkit-transform: rotate(-45deg);transform: rotate(-45deg);position:absolute;left:2px;top:6px;}
.del-tag-btn:hover{border:1px solid #009688;}
.del-tag-btn:hover:before{background-color: #009688;}
.del-tag-btn:hover:after{background-color: #009688;}
.del-tag-btn:active{opacity:0.7;}
.add-blog .v-note-wrapper{min-width:auto}
</style>

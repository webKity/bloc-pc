<template>
  <div class="user-center container back-white">
    <div class="row">
      <div class="col-lg-3 pt30 min-h" style="height:820px;border-right:1px solid #ccc">
        <div class="wp100 dib">
          <div class="col-lg-4 pr">
            <div class="user-head"></div>
          </div>
          <div class="col-lg-8 font14 dark-gray-color">
            <div class="wp100">陈永勤陈永勤陈永勤陈永勤陈永勤陈永勤永勤</div>
            <div class="wp100 ellipsis mt10">积分：200</div>
          </div>
        </div>
        <div class="wp100 dib">
          <div class="col-lg-4 pr mt20">
            <div class="row">
              <button type="button" class="layui-btn layui-btn-small" style="width:100%;">签到</button>
            </div>
          </div>
          <div class="col-lg-8 pr mt20">
            <button type="button" class="layui-btn layui-btn-small" style="width:100%;">签到</button>
          </div>
        </div>
        <div class="user-center-left-block mt30">
          <div class="font16 green-color">个人主页</div>
          <div class="font13 dark-gray-color mt10">http://www.baidu.com</div>
          <div class="wp100 tr mt10">
            <button type="button" class="layui-btn layui-btn-mini"> <i class="icon-edit vm"></i> 编 辑 </button>
          </div>
        </div>
        <div class="user-center-left-block mt20">
          <div class="font16 green-color">个性签名</div>
          <div class="font13 dark-gray-color mt10">狼叔说：少抱怨，多思考，未来更美好 </div>
          <div class="wp100 tr mt10">
            <button type="button" class="layui-btn layui-btn-mini"> <i class="icon-edit vm"></i> 编 辑 </button>
          </div>
        </div>
        <div class="user-center-left-block mt20">
          <div class="font16 green-color">自我描述</div>
          <div class="font12 lh01 dark-gray-color mt10">1998年他正式成为一名建筑师后，开始着手于建筑以及应用方面的设计，包括零售业、接待、展会、博物馆、展览以及常用的企业形象和产品设计。他担任过欧洲设计学院，米兰理工大学设计学院，马兰戈尼设计学院的讲师，很多他的作品曾经在各大报刊杂志上被刊登，甚至入选XX°金罗盘奖</div>
          <div class="wp100 tr mt10">
            <button type="button" class="layui-btn layui-btn-mini"> <i class="icon-edit vm"></i> 编 辑 </button>
          </div>
        </div>
      </div>
      <div class="col-lg-9">
        <div class="row">
          <div class="wp100 tc pt20 pb20 font16 user-center-right-head">
            我的文章/问答 <span class="user-center-right-head-line"></span>
          </div>
          <post-list :type="-1"></post-list>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import postList from './postList.vue'

export default {
  components: {postList},
  data () {
    return {
    }
  }
}
</script>
<style>
.user-head{position:absolute;left:0;top:0;width:100%;padding-bottom:100%;border:1px solid #ccc;border-radius:3px;overflow:hidden;}
.user-center-left-block{width:100%;padding-top:15px;padding-bottom:15px;border-top:1px solid #ccc;}
.user-center-right-head{border-bottom:1px solid #ccc;position:relative;}
.user-center-right-head-line{display:inline-block;position:absolute;left:50%;bottom:-3px;width:50px;height:6px;background-color:#009688;transform:translateX(-50%)}
</style>

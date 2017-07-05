<template>
  <transition name="fade">
    <div class="mine-dialog" v-show="visible">
      <div class="mine-mask"></div>
      <div class="mine-dialog-content">
        <div class="mine-dialog-hd"><strong class="mine-dialog-title">{{ title }}</strong></div>
        <div class="mine-dialog-bd">{{ message }}</div>
        <div class="mine-dialog-ft">
          <a class="mine-dialog-btn mine-dialog-btn-default" v-if="hasCancel === true" @click="handleAction('cancel')">{{ cancelBtnText }}</a>
          <a class="mine-dialog-btn mine-dialog-btn-primary" @click="handleAction('ok')">{{ okBtnText }}</a>
        </div>
      </div>
    </div>
  </transition>
</template>
<script type="text/babel">
export default {
  data () {
    return {
      visible: false,
      title: '',
      message: '',
      cancelBtnText: '取消',
      okBtnText: '确定',
      hasCancel: false,
      callback: null
    }
  },
  methods: {
    handleAction (action) {
      var callback = this.callback
      this.value = false
      callback(action)
    }
  }
}
</script>
<style>
.mine-dialog {position:fixed;left:0;top:0;z-index:9999;width:100%;height:100%;background-color:rgba(0,0,0,.5);}
.mine-dialog-content {position: fixed;width: 80%;max-width:300px;top: 50%;left: 50%;-webkit-transform: translate(-50%, -150%);transform: translate(-50%, -150%);background-color: #FFFFFF;text-align: center;border-radius: 3px;overflow: hidden;}
.mine-dialog-hd {padding: 20px 20px 12px;}
.mine-dialog-title {font-weight: 400;font-size: 18px;}
.mine-dialog-bd {padding: 0 25px 15px;min-height: 40px;font-size: 15px;line-height: 1.3;word-wrap: break-word;word-break: break-all;color: #999999;}
.mine-dialog-bd:first-child {padding: 2.7em 20px 1.7em;color: #353535;}
.mine-dialog-ft {position: relative;line-height: 48px;font-size: 18px;display: -webkit-box;display: -webkit-flex;display: flex;}
.mine-dialog-ft:after {content: " ";position: absolute;left: 0;top: 0;right: 0;height: 1px;border-top: 1px solid #D5D5D6;color: #D5D5D6;-webkit-transform-origin: 0 0;transform-origin: 0 0;-webkit-transform: scaleY(0.5);transform: scaleY(0.5);}
.mine-dialog-btn {display: block;-webkit-box-flex: 1;-webkit-flex: 1;flex: 1;color:#009688;text-decoration: none;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);position: relative;cursor:pointer;}
.mine-dialog-btn:active {background-color: #EEEEEE;}
.mine-dialog-btn:after {content: " ";position: absolute;left: 0;top: 0;width: 1px;bottom: 0;border-left: 1px solid #D5D5D6;color: #D5D5D6;-webkit-transform-origin: 0 0;transform-origin: 0 0;-webkit-transform: scaleX(0.5);transform: scaleX(0.5);}
.mine-dialog-btn:first-child:after {display: none;}
.mine-dialog-btn-default {color: #353535;}
.mine-dialog-btn-primary {color: #009688;}
</style>

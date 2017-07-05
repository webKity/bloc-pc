import Vue from 'vue'
import AssignIn from 'lodash/assignIn'

var dialog
var config = {
  title: '提示',
  message: '您确定要做此操作吗？',
  cancelBtnText: '取消',
  okBtnText: '确定',
  hasCancel: false,
  callback: function () {}
}

const DialogConstructor = Vue.extend(require('./dialog.vue'))
DialogConstructor.prototype.close = function () {
  this.visible = false
  this.$el.addEventListener('transitionend', removeDom)
}

let createDialog = () => {
  return new DialogConstructor({
    el: document.createElement('div')
  })
}
let removeDom = event => {
  if (event.target.parentNode) {
    event.target.parentNode.removeChild(event.target)
  }
}

let Dialog = (options = {}) => {
  AssignIn(config, options)
  dialog = createDialog()
  dialog.title = config.title
  dialog.message = config.message
  dialog.cancelBtnText = config.cancelBtnText
  dialog.okBtnText = config.okBtnText
  dialog.hasCancel = config.hasCancel
  document.body.appendChild(dialog.$el)
  dialog.visible = true
  dialog.callback = (action) => {
    config.callback(action)
    dialog.close()
  }
  return dialog
}
Dialog.install = function () {
  Vue.prototype.$dialog = Dialog
}

export default Dialog

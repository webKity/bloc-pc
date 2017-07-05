import Vue from 'vue'

var Validata = {}
Validata.install = function () {
  var self = this
  self.isEmail = function (value) {
    var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
    return reg.test(value)
  }
  Vue.prototype.$validata = self
}
export default Validata

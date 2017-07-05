import Vue from 'vue'
import _ from 'lodash'

var Lodash = function () {}
Lodash.install = function () {
  Vue.prototype.$lodash = _
}
export default Lodash

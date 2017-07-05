<template>
  <div class="tabbar">
    <div class="layui-btn-group">
      <button v-for="label in labels" :class="[{'layui-btn-danger': label.active === currentActive}, {'layui-btn-small': size === 'small'}]" @click="changeLabel(label.active)" class="layui-btn">{{ label.label }}</button>
    </div>
    <div class="tabbar-contents">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default{
  props: {
    labels: {
      type: Array,
      default: []
    },
    size: {
      type: String,
      default: 'big'
    }
  },
  data () {
    return {
      currentActive: 0
    }
  },
  methods: {
    changeLabel (active) {
      this.currentActive = active
    }
  }
}
</script>
<style>
.tabbar{}
.tabbar-labels{text-align:center;}
.tabbar-label{width:100%;padding:5px 0;color:#333;background-color:#fff;cursor:pointer;}
.tabbar-label:last-child{border-right:0}
.tabbar-label:first-child{margin-left:0}
.tabbar-label.active{color:#fff;background-color:#009688}
.tabbar-contents{padding-top:15px;}
</style>

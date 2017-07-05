<template>
  <div class="blog-select">
    <div class="blog-select-show" @click="toggle()">{{val}}</div>
    <div class="blog-select-edge" :style="edgeAngleStyle"></div>
    <transition name="slide-vertical">
      <div v-show="isShow" class="blog-select-labels">
        <div v-for="data in datas" class="blog-select-label" @click="selectLabel(data)">{{ data.label }}</div>
      </div>
    </transition>
  </div>
</template>
<script>
export default{
  props: {
    datas: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
      isShow: false,
      val: ''
    }
  },
  computed: {
    edgeAngleStyle () {
      let styleObj = {}
      styleObj.transform = 'translateY(' + (this.isShow ? -7 : 0) + 'px) rotate(' + (this.isShow ? 180 : 0) + 'deg)'
      return styleObj
    }
  },
  methods: {
    setDefault () {
      for (let i = 0, len = this.datas.length; i < len; i++) {
        if (this.datas[i].default) {
          this.val = this.datas[i].label
        }
      }
    },
    selectLabel (obj) {
      this.val = obj.label
      this.isShow = false
      this.$emit('selectEvent', obj)
    },
    toggle () {
      this.isShow = !this.isShow
    }
  },
  created () {
    this.setDefault()
  }
}
</script>
<style scoped>
.blog-select{width:100%;height:38px;line-height:38px;border:1px solid #e6e6e6;padding:0 10px;border-radius:3px;position:relative;cursor:pointer;}
.blog-select-show{width:100%;height:38px;}
.blog-select-edge{position:absolute;right:10px;top:50%;margin-top:-3px;cursor:pointer;border-width:6px;border-color: transparent;border-top-color:#c2c2c2;border-top-style:solid;transition:all .3s;-webkit-transition:all .3s;width:0;height:0;border-style:dashed;overflow: hidden;box-sizing:content-box;}
.blog-select-labels{position:absolute;left:0;top:40px;z-index:9999;width: 100%;border:1px solid #c2c2c2;border-radius:3px;background-color:#fff;}
.blog-select-label{padding:2px 15px;}
.blog-select-label:hover{background-color:#eee;}
</style>

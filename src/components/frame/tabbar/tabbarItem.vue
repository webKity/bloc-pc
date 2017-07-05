<template>
  <transition name="slide-up">
    <div class="tabbar-item" v-show="active">
      <slot></slot>
    </div>
  </transition>
</template>
<script>
export default{
  props: ['name'],
  computed: {
    active () {
      return this.$parent.currentActive === this.name
    }
  }
}
</script>
<style>
.tabbar-item{position:relative;display:inline-block;width:100%}
</style>
